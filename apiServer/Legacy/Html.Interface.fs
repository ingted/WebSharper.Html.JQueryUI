// $begin{copyright}
//
// This file is part of WebSharper
//
// Copyright (c) 2008-2018 IntelliFactory
//
// Licensed under the Apache License, Version 2.0 (the "License"); you
// may not use this file except in compliance with the License.  You may
// obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
// implied.  See the License for the specific language governing
// permissions and limitations under the License.
//
// $end{copyright}
namespace WebSharper.Legacy

open WebSharper

module Html =
    open WebSharper.JQuery
    open WebSharper.JavaScript
    open WebSharper.UI
    open WebSharper.UI.Html
    open WebSharper.UI.Client
    module Utils =
        [<Inline "'id' + Math.round(Math.random() * 1E8)">]
        let NewId () = ""

    module Client =
        [<AbstractClass>]
        [<JavaScript>]
        type Pagelet() =

            abstract member Body : Dom.Node

            abstract member Render : unit -> unit
            override this.Render() = ()

            interface IControlBody with
                member this.ReplaceInDom(node: Dom.Node) =
                    node.ParentNode.ReplaceChild(this.Body, node) |> ignore
                    this.Render()

            member this.AppendTo(targetId: string) =
                let target = JS.Document.GetElementById(targetId)
                target.AppendChild(this.Body) |> ignore
                this.Render()

        [<Name "">]
        /// Interface for required HTML/DOM functionality.
        type IHtmlProvider =

            // Construct
            abstract member CreateTextNode  : string -> Dom.Text
            abstract member CreateElement   : string -> Dom.Element

            // Attributes
            abstract member SetAttribute    : Dom.Node -> string -> string -> unit
            abstract member AppendAttribute : Dom.Node -> Dom.Attr -> unit
            abstract member RemoveAttribute : Dom.Node -> string -> unit
            abstract member GetAttribute    : Dom.Node -> string -> string
            abstract member HasAttribute    : Dom.Node -> string -> bool
            abstract member CreateAttribute : string -> Dom.Attr

            // Property
            abstract member GetProperty<'T> : Dom.Node -> string -> 'T
            abstract member SetProperty<'T> : Dom.Node -> string -> 'T -> unit

            // Append/Remove
            abstract member AppendNode      : Dom.Node -> Dom.Node -> unit
            abstract member Clear           : Dom.Node -> unit
            abstract member Remove          : Dom.Node -> unit

            // Text
            abstract member SetText         : Dom.Node -> string -> unit
            abstract member GetText         : Dom.Node -> string

            // Html
            abstract member SetHtml         : Dom.Node -> string -> unit
            abstract member GetHtml         : Dom.Node -> string

            // Value
            abstract member SetValue        : Dom.Node -> string -> unit
            abstract member GetValue        : Dom.Node -> string

            // Style
            abstract member SetStyle        : Dom.Node -> string -> unit

            // Css
            abstract member SetCss          : Dom.Node -> string -> string -> unit

            // Class
            abstract member AddClass        : Dom.Node -> string -> unit
            abstract member RemoveClass     : Dom.Node -> string -> unit

            abstract member OnLoad          : Dom.Node -> (unit -> unit) -> unit

            abstract member OnDocumentReady : (unit -> unit) -> unit


        [<JavaScript>]
        type Element (HtmlProvider : IHtmlProvider) =
            inherit Pagelet()

            [<DefaultValue>]
            val mutable private RenderInternal : unit -> unit

            [<DefaultValue>]
            val mutable Dom : Dom.Element

            [<DefaultValue>]
            val mutable private IsRendered : bool

            static member New(html: IHtmlProvider, name: string) : Element =
                let el = new Element(html)
                let dom = JS.Document.CreateElement(name)
                el.RenderInternal <- ignore
                el.Dom <- dom
                el.IsRendered <- false
                el

            static member New(html: IHtmlProvider, dom: Dom.Element) : Element =
                let el = new Element(html)
                el.RenderInternal <- ignore
                el.Dom <- dom
                el.IsRendered <- false
                el

            override this.Render () =
                if not this.IsRendered then
                    this.RenderInternal ()
                    this.IsRendered <- true

            override this.Body = this.Dom :> _

            member this.Text
                with get () = HtmlProvider.GetText this.Body
                and set x = HtmlProvider.SetText this.Body x

            member this.Html
                with get () = HtmlProvider.GetHtml this.Body
                and set x = HtmlProvider.SetHtml this.Body x

            member this.Value
                with get () = HtmlProvider.GetValue this.Body
                and set (x: string) = HtmlProvider.SetValue this.Body x

            member this.Id
                with get () =
                    let id = HtmlProvider.GetProperty this.Body "id"
                    // Sets the id if empty
                    if id = JS.Undefined<string> || id = "" then
                        let newId = Utils.NewId ()
                        HtmlProvider.SetProperty this.Body "id"  newId
                        newId
                    else
                        id

            member this.OnLoad f =
                HtmlProvider.OnLoad this.Body f

            member this.HtmlProvider
                with get () = HtmlProvider

            [<Name "AppendI">]
            member this.Append(pl: Pagelet) =
                // Check if attribute
                let body = pl.Body
                if (unbox body.NodeType) = 2 then
                    HtmlProvider.AppendAttribute this.Body (body :?> Dom.Attr)
                else
                    HtmlProvider.AppendNode this.Body pl.Body
                // Call render if outer component already is rendered.
                if this.IsRendered then
                    pl.Render()
                else
                    let r = this.RenderInternal
                    this.RenderInternal <- fun () ->
                        r ()
                        pl.Render ()

            [<Name "AppendN">]
            member this.Append(node: Dom.Node) =
                HtmlProvider.AppendNode this.Body node

            [<Inline>]
            [<Name "AppendT">]
            member this.Append (text: string) =
                HtmlProvider.AppendNode this.Body (HtmlProvider.CreateTextNode text)

            [<Inline>]
            member this.Clear () =
                HtmlProvider.Clear this.Body

            [<Inline>]
            member this.Remove() =
                HtmlProvider.Remove this.Body

            [<Inline>]
            member this.SetAttribute(name: string, value: string) =
                HtmlProvider.SetAttribute this.Body name value

            [<Inline>]
            member this.HasAttribute(name: string) =
                HtmlProvider.HasAttribute this.Body name

            [<Inline>]
            member this.GetAttribute(name: string) =
                HtmlProvider.GetAttribute this.Body name

            [<Inline>]
            member this.RemoveAttribute(name: string) =
                HtmlProvider.RemoveAttribute this.Body name

            [<Inline>]
            member this.SetCss(name:string, prop: string) =
                HtmlProvider.SetCss this.Body name prop

            [<Inline>]
            member this.SetStyle(style: string) =
                HtmlProvider.SetStyle this.Body style


            [<Inline>]
            member this.AddClass(cls: string) =
                HtmlProvider.AddClass this.Body cls

            [<Inline>]
            member this.RemoveClass(cls: string) =
                HtmlProvider.RemoveClass this.Body cls

            [<Inline>]
            member this.GetProperty(name: string) =
                HtmlProvider.GetProperty this.Body name

            [<Inline>]
            member this.SetProperty(name: string,  value)=
                HtmlProvider.SetProperty this.Body name value

    
            member this.Item
                with get (name: string) =
                    let prop = HtmlProvider.GetAttribute this.Body name
                    HtmlProvider.GetAttribute this.Body name
                and set (name: string) (value: string) =
                    HtmlProvider.SetAttribute this.Body name value


