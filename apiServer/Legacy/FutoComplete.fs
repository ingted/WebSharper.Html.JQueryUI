namespace ExecutionNode.UI

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open WebSharper.UI.Templating
open WebSharper.JavaScript
open WebSharper.AspNetCore.WebSocket
open WebSharper.AspNetCore.WebSocket.Client
open WebSharper.Forms



open WebSharper.JQueryUI
open WebSharper.JQuery

[<JavaScript>]
type UU = unit -> unit

[<JavaScript>]
module GlobalInfo =
    ()

[<JavaScript>]
module LegacyHelper =
    let ViewPagelet (pagelet : WebSharper.Legacy.Html.Client.Element) render =
        pagelet.Dom
        |> View.Const
        |> View.Map (fun el ->
            render ()
            //Console.Log "rendered"
            Doc.Static el)

    let EmbedPagelet (pagelet : WebSharper.Legacy.Html.Client.Element) render =
        ViewPagelet pagelet render 
        |> Doc.EmbedView 

    [<Inline "$o.value = $newValue">]
    let setValue (o:obj) (newValue:obj) = ()

[<JavaScript>]
type FutoComplete (acId:string, sourceList:string [], onSelectHanlder: (Event -> ACOption -> unit) option) =
    let el = 
        let input = WebSharper.Legacy.Tags.Input []
        input.Dom.Id <- acId
        input
    let acListVar = Var.Create sourceList //array 有差，不能用 list
    let acMinLenVar: Var<int * string option> = Var.Create (1, None)
    let docView = 
        View.Map2 (fun source (minLen, (contIdOpt:string option)) ->
            let conf = AutocompleteConfiguration()                        
            conf.source <- source
            conf.minLength <- minLen
            
            
            if contIdOpt.IsSome then
                el.AddClass(contIdOpt.Value)    
            

            let ac = Autocomplete.New2(el, conf)
            match onSelectHanlder with
            | Some h ->
                ac.OnSelect h
                ac.OnFocus h
            | _ -> ()
            //ac.OnChange (fun e s -> Console.Log <| "OnChange " + s.value)

            let doc = LegacyHelper.EmbedPagelet el ac.Render
            ac, doc
            ) acListVar.View acMinLenVar.View
    do
        el.Dom.Id <- acId
    member this.AcListVar = acListVar
    member this.AcMinLenVar = acMinLenVar
    member this.DocView = docView
    member this.AcId = acId
    member this.Input = el.Dom

    member this.GenButton buttonText =
        let btn = 
            Client.Elt.Button buttonText [] (fun () -> 
                async {
                    let fcContId = System.Guid.NewGuid().ToString()
                    this.AcMinLenVar.Set (0, Some fcContId)
                    //Console.Log "settled"
                    while (JS.Document.GetElementsByClassName fcContId).Length = 0 do
                        do! Async.Sleep 100
                    let rec rcall () =
                        match View.TryGet this.DocView with
                        | Some (ac, _) -> 
                            //Console.Log "searched"
                            LegacyHelper.setValue this.Input ""
                            ac.Search()
                            let acObj = JS.Document.GetElementById this.AcId
                            acObj.ClassName <-
                                acObj.ClassName.Replace(fcContId, "")   
                        | None -> 
                            //Console.Log "called"
                            rcall ()
                    rcall ()
                }
                |> Async.Start
            )
        btn.AppendChild(
            Elt.span [attr.``class`` "caret"] []
        )
        btn
    static member GenAll (acId:string, sourceList:string [], buttonText, onSelectHanlder: (Event -> ACOption -> unit) option) =
        let fc = new FutoComplete(acId, sourceList, onSelectHanlder)
        fc, span [attr.id $"{acId}_all"] [
            Doc.BindView (fun (_, d) -> d) fc.DocView
            fc.GenButton buttonText
        ]
    static member GenInput (acId:string, sourceList:string [], onSelectHanlder: (Event -> ACOption -> unit) option) =
        let fc = new FutoComplete(acId, sourceList, onSelectHanlder)        
        fc, Doc.BindView (fun (_, d) -> d) fc.DocView

                    

