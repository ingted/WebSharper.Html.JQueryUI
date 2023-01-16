namespace exttest

open WebSharper
open WebSharper.UI.Html
open WebSharper.JavaScript
open WebSharper.InterfaceGenerator
open System.Collections.Generic

module Res =
        //let DomJs = 
        //    (Resource "DomJs" "https://raw.githubusercontent.com/dkraczkowski/dom.js/master/src/dom.min.js").AssemblyWide()
        let DomJs = 
            Resource "DomJs" "dom.min.js" |> AssemblyWide

        let JsonEditor = 
            Resource "JsonEditor" "jsoneditor.min.js" |> AssemblyWide

        let TUIGrid =
            Resource "TUIGrid" "tui-grid.js" |> AssemblyWide

        let TUIGridCss =
            Resource "TUIGridCss" "tui-grid.css" |> AssemblyWide

module Grid =
    let E = T<WebSharper.JavaScript.Dom.Element>
    let OBJ = T<obj>
    let NULL = T<unit>
    let STR = T<string>

    let MaxLength =
        Pattern.Config "MaxLength" {
            Required =
                [
                    "maxLength", T<int>
                ]
            Optional = 
                [
                ]
                }


    let TextValue = 
        Pattern.Config "TextValue" {
            Required =
                [
                    "text", STR
                    "value", STR
                ]
            Optional = 
                [
                ]
                }

    let ListItems = 
        Pattern.Config "ListItems" {
            Required =
                [
                    "listItems", Type.ArrayOf TextValue.Type
                ]
            Optional = 
                [
                ]
                }


    
    let CustomEditorClass = 
        Pattern.Config "CustomEditor" {
            Required =
                [
                    "type", OBJ
                    "options", (MaxLength.Type + ListItems.Type)
                ]
            Optional = 
                [
                 
                ]
                }

 



    
    let GridClass = 
        Class "Grid"
        |+> Instance [
            "appendRow" => OBJ ^-> NULL
            "prependRow" => OBJ ^-> NULL
            "on" => STR * OBJ ^-> NULL
            "resetData" =>  OBJ ^-> NULL
        ]

    let tui =
        Class "tui"
        |=> Nested [
            GridClass
        ]




    let CopyOptions = 
        Pattern.Config "CopyOptions" {
            Required =
                [
                    "useListItemText", T<bool>
                ]
            Optional = 
                [
                 
                ]
                }




    let ColumnConfigClass =
        Pattern.Config "ColumnConfig" {
            Required =
                [
                    "header", STR
                    "name", STR
                ]
            Optional = 
                [
                    "sortingType", STR
                    "sortable", T<bool>
                    "editor", (STR + CustomEditorClass.Type)
                    "copyOptions", CopyOptions.Type
                ]
                }

    let PageOptionsConfigClass = 
        Pattern.Config "PageOptionsConfig" {
            Required =
                [
                    "useClient", T<bool>
                    "perPage", T<int>
                ]
            Optional = 
                [
                ]
                }
    
    let ColumnOptions = 
        Pattern.Config "ColumnOptions" {
            Required =
                [
                    "resizable", T<bool>
                ]
            Optional = 
                [
                ]
                }


    let GridConfigClass = 
        Pattern.Config "GridConfig" {
            Required =
                [
                    "el", E
                    "data", T<obj>
                    "scrollX", T<bool>
                    "scrollY", T<bool>
                    "columns", Type.ArrayOf ColumnConfigClass.Type
                ]
            Optional = 
                [
                    "bodyHeight", T<int>
                    "rowHeaders", Type.ArrayOf T<string>
                    "pageOptions", PageOptionsConfigClass.Type
                    "columnOptions", ColumnOptions.Type
                ]
        }



    let GridConstructors =
        GridClass
            |+> Static [
                Constructor GridConfigClass?Conf
            ]

module Definition =
    
    //let  testJs = 
    //    Namespace "testJs" [
    //        Resource "testJsRsc" "test.js"
    //        |> AssemblyWide
    //    ]
    //let methods =
    //    [
    //        "t1" => !+ T<obj> ^-> T<unit>
    //        "t2" => T<string> *+ T<obj> ^-> T<unit>
    //    ]
    //let I1 =
    //    Interface "I1"
    //    |+> [
    //            "test1" => T<string> ^-> T<string>
    //        ]

    //let I2 =
    //    Generic -- fun t1 t2 ->
    //        Interface "I2"
    //        |+> [
    //                Generic - fun m1 -> "foo" => m1 * t1 ^-> t2
    //            ]

    //let C1 =
    //    Class "C1"
    //    |+> Instance [
    //            "foo" =@ T<int>
    //        ]
    //    |+> Static [
    //            Constructor (T<unit> + T<int>)
    //            "mem"   => (T<unit> + T<int> ^-> T<unit>)
    //            "test2" => (TSelf -* T<int> ^-> T<unit>) * T<string> ^-> T<string>
    //            "radius2" =? T<float>
    //            |> WithSourceName "R2"
    //        ]

    let O = T<unit>
    let S = T<string>  
    let E = T<WebSharper.JavaScript.Dom.Element>
    let EVT = T<WebSharper.JavaScript.Dom.Event>

    let Offset = Class "Offset"
    let Dom = Class "Dom"
    let Handle = Class "Handle"

    let AxesEnum = 
        Pattern.EnumStrings "axes" [ "x"; "y" ]

    let DraggableCfg =
        Class "DraggableCfg"
        |+> Pattern.OptionalFields [
            "axis", AxesEnum.Type
            "grid", !| T<int>
            "handler", E
            "onDragStart", T<WebSharper.JavaScript.Dom.MouseEvent> ^-> O
            "onDragMove", T<WebSharper.JavaScript.Dom.MouseEvent> ^-> O
            "onDragEnd", T<WebSharper.JavaScript.Dom.MouseEvent> ^-> O
            "constrain", E
        ]

    Offset
    |+> Instance [
        "top" =? T<int>
        "right" =? T<int>
        "bottom" =? T<int>
        "left" =? T<int>
        "width" =? T<int>
        "height" =? T<int>
            ] |> ignore

    Dom
    |+> Static [
        "find" => S?selector ^-> !| E
        |> WithComment "Finds HTMLElements that match css pattern."

        "id" => S?id ^-> E
        |> WithComment "Returns HTMLElement with given id."

        "findByTagName" => S?tagName ^-> !| E
        |> WithComment "Finds HTMLElements that match given tag name."

        "findByClass" => S?className ^-> !| E
        |> WithComment "Finds HTMLElements that match given class name."

        "parent" => E?element ^-> E
        |> WithComment "Gets the parent of the html element."

        "children" => E?element * S?tag ^-> !| E
        |> WithComment "Gets children elements of the html element."

        "next" => E?element ^-> E
        |> WithComment "Gets following sibling element of the HTMLElement."

        "previous" => E?element ^-> E
        |> WithComment "Gets previous sibling element of the HTMLElement."

        "offset" => E?element ^-> Offset
        |> WithComment "Returns current coordinates of the element, relative to the document."

        "requestAnimationFrame" => (O ^-> O)?callback ^-> Handle
        "cancelAnimationFrame" => Handle ? handle ^-> O

        "draggable" => E?element * !?DraggableCfg?options ^-> O

        "onClick" => (E + !| E)?element * (EVT + T<WebSharper.JavaScript.Dom.MouseEvent> ^-> O)?listener ^-> O

        "removeListener" => 
            (E + !| E)?element * S * (EVT + T<WebSharper.JavaScript.Dom.MouseEvent> ^-> O)?listener ^-> O

    ] |> ignore

    let EOpt =
        !? E |> WithInterop {
            In = fun o -> o + ".$0"
            Out = fun e -> "(e = " + e + ", e?{$: 1, $0: e}:{$: 0})"
        }




    //let Items = 
    //    Class "Item"
    //    |+> Instance [
    //        "type" =@ S  
    //        "properties" =@ Properties0
    //        ]

    //[<AbstractClass>]
    //type Property =
    //    abstract member ``type`` : string  with get, set
    //    abstract member items : Property  with get, set
    //    abstract member properties : Properties with get, set

    //and Properties =
    //    abstract member Item : string -> Property

    //let IProperties =
    //    Generic - fun t ->
    //        Interface "IProperties"
    //        |+> [
    //            "Item"      => S ^-> t
    //        ]  

    //let IProperty =
    //    Generic - fun t ->
    //        Interface "IProperty"
    //        |+> [
    //            "type" =@ S 
    //            "items" =@ TSelf
    //            "properties" =@ IProperties.[t]
    //        ]  

    let Property =
        Class "Property"
        |+> Instance [
            "type" =@ S 
            "items" =@ TSelf
            //"properties" =@ IProperties.[TSelf]
            //"properties" =@ T<System.Collections.Generic.Dictionary<_,_>>.[S, TSelf]
            //"properties" =@ T<Map<_,_>>.[S, TSelf]
            "properties" =@ T<obj>
        ]


    //let Properties = 
    //    Class "Properties"
    //    //|=> Implements [IProperties.[Property]]
    //    |=> Implements [T<IDictionary<_, _>>.[S, Property]]
    //    |+> Instance [
    //        "Item"      => S ^-> Property
    //        ]

    //let Property = 
    //    Class "Property"
    //    |=> Implements [IProperty]
    //    |+> Instance [
    //        "type" =@ S 
    //        "items" =@ TSelf
    //        "properties" =@ Properties
    //        ]  


    let Schema = 
        Class "Schema"
        |+> Instance [
            //"properties" =@ IProperties.[Property]
            //"properties" =@ T<System.Collections.Generic.Dictionary<_,_>>.[S, Property]            
            //"properties" =@ T<Map<_,_>>.[S, Property]            
            "properties" =@ T<obj>           
            ]

    let JSONEditor =
        Class "JSONEditor"
        |> WithSourceName "JsonEditor"
        |+> Static [ Constructor (E?element * (!? T<obj>)?options ) ]
        |+> Instance [
            "element" =@ E
            "options" =@ T<obj>
            "schema" =@ Schema
            "ready " =@ T<bool>
            "destroy" => O ^-> O
            "getValue" => O ^-> T<obj>
            "setValue" => T<obj> ^-> O
            "on" => S * (O ^-> O) ^-> O
        ]

    let TheAssembly =
        Assembly [
            Namespace "WebSharper.DomJs.Resources" [
                Res.DomJs
            ]
            Namespace "WebSharper.DomJs" [
                Offset
                Dom
                Handle
                AxesEnum
                DraggableCfg
            ]
            Namespace "WebSharper.JsonEditor.Resources" [
                Res.JsonEditor
            ]
            Namespace "WebSharper.JsonEditor" [
                //IProperties
                //IProperty
                Property
                //Properties
                Schema
                JSONEditor
            ]
            Namespace "WebSharper.TUIGrid.Resources" [
                Res.TUIGridCss
                Res.TUIGrid
            ]
            Namespace "WebSharper.TUIGrid" [
                Grid.ColumnConfigClass
                Grid.ColumnOptions
                Grid.CopyOptions
                Grid.CustomEditorClass
                Grid.GridConfigClass
                Grid.ListItems
                Grid.MaxLength
                Grid.PageOptionsConfigClass
                Grid.TextValue                
                Grid.tui
            ]
        ]

[<Sealed>]
type Extension() =
    interface IExtension with
        member ext.Assembly =
            Definition.TheAssembly

[<assembly: Extension(typeof<Extension>)>]
do ()
