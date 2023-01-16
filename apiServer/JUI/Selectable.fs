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

//JQueryUI Wrapping: (version Stable 1.8rc1)
namespace WebSharper.JQueryUI

open WebSharper
open WebSharper.JavaScript
open WebSharper.Legacy
open Html.Client

type ToleranceOfSelectable =
    | [<Name "fit">] Fit
    | [<Name "touch">] Touch

type SelectableConfiguration[<JavaScript>]() =

    [<Stub>]
    [<Name "appendTo">]
    //"body" by default
    member val AppendTo = Unchecked.defaultof<string> with get, set

    [<Stub>]
    [<Name "autoRefresh">]
    //true by default
    member val AutoRefresh = Unchecked.defaultof<bool> with get, set

    [<Stub>]
    [<Name "cancel">]
    //":input,option"
    member val Cancel = Unchecked.defaultof<string> with get, set

    [<Stub>]
    [<Name "delay">]
    //0 by default
    member val Delay = Unchecked.defaultof<int> with get, set

    [<Stub>]
    [<Name "disabled">]
    //false by default
    member val Disabled = Unchecked.defaultof<bool> with get, set

    [<Stub>]
    [<Name "distance">]
    //0 by default
    member val Distance = Unchecked.defaultof<int> with get, set

    [<Stub>]
    [<Name "filter">]
    //"*" by default
    member val Filter = Unchecked.defaultof<string> with get, set

    [<Stub>]
    [<Name "tolerance">]
    //"*" by default
    member val Tolerance = Unchecked.defaultof<ToleranceOfSelectable> with get, set

module internal SelectableInternal =
    [<Inline "jQuery($el).selectable($conf)">]
    let internal New (el: Dom.Element, conf: SelectableConfiguration) = ()

[<Require(typeof<Dependencies.JQueryUIJs>)>]
[<Require(typeof<Dependencies.JQueryUICss>)>]
type Selectable[<JavaScript>] internal () =
    inherit Utils.Pagelet()


    (****************************************************************
    * Constructors
    *****************************************************************)
    /// Creates a new selectable object given an element and
    /// a configuration object.
    [<JavaScript>]
    [<Name "New1">]
    static member New (el : Element, conf: SelectableConfiguration): Selectable =
        let a = new Selectable()
        a.element <-
            el |>! OnAfterRender (fun el  ->
                SelectableInternal.New(el.Dom, conf)
            )
        a

    /// Creates a new selectable object using the default
    /// configuration.
    [<JavaScript>]
    [<Name "New2">]
    static member New (el : Element) : Selectable =
        let conf = new SelectableConfiguration()
        Selectable.New(el, conf)

    (****************************************************************
    * Methods
    *****************************************************************)
    /// Removes the selectable functionality.
    [<Inline "jQuery($this.element.Dom).selectable('destroy')">]
    member this.Destroy() = ()

    /// Disables the selectable functionality.
    [<Inline "jQuery($this.element.Dom).selectable('disable')">]
    member this.Disable() = ()

    /// Enables the selectable functionality.
    [<Inline "jQuery($this.element.Dom).selectable('enable')">]
    member this.Enable() = ()

    /// Refreshes the position and size of each selectee element.
    /// This method can be used to manually recalculate the position
    // and size of each selectee element.
    [<Inline "jQuery($this.element.Dom).selectable('refresh')">]
    member this.Refresh() = ()

    /// Sets selectable option.
    [<Inline "jQuery($this.element.Dom).selectable('option', $name, $value)">]
    member this.Option (name: string, value: obj) = ()

    /// Gets selectable option.
    [<Inline "jQuery($this.element.Dom).selectable('option', $name)">]
    member this.Option (name: string) = X<obj>

    /// Gets all options.
    [<Inline "jQuery($this.element.Dom).selectable('option')">]
    member this.Option () = X<SelectableConfiguration>

    /// Sets one or more options.
    [<Inline "jQuery($this.element.Dom).selectable('option', $options)">]
    member this.Option (options: SelectableConfiguration) = X<unit>

    [<Inline "jQuery($this.element.Dom).selectable('widget')">]
    member private this.getWidget() = X<Dom.Element>

    /// Returns the .ui-selectable element.
    [<JavaScript>]
    member this.Widget = this.getWidget()


    (****************************************************************
    * Events
    *****************************************************************)
    [<Inline "jQuery($this.element.Dom).selectable({create: function (x,y) {($f(x))(y.create);}})">]
    member private this.onCreate(f : JQuery.Event -> Element -> unit) = ()

    [<Inline "jQuery($this.element.Dom).selectable({selected: function (x,y) {($f(x))(y.selected);}})">]
    member private this.onSelected(f : JQuery.Event -> Element -> unit) = ()

    [<Inline "jQuery($this.element.Dom).selectable({selecting: function (x,y) {($f(x))(y.selecting);}})">]
    member private this.onSelecting(f : JQuery.Event -> Element -> unit) = ()

    [<Inline "jQuery($this.element.Dom).selectable({start: function (x,y) {($f(x));}})">]
    member private this.onStart(f : JQuery.Event -> unit) = ()

    [<Inline "jQuery($this.element.Dom).selectable({stop: function (x,y) {($f(x));}})">]
    member private this.onStop(f : JQuery.Event -> unit) = ()

    [<Inline "jQuery($this.element.Dom).selectable({unselected: function (x,y) {($f(x))(y.unselected);}})">]
    member private this.onUnselected(f : JQuery.Event -> Element -> unit) = ()

    [<Inline "jQuery($this.element.Dom).selectable({unselecting: function (x,y) {($f(x))(y.unselecting);}})">]
    member private this.onUnselecting(f : JQuery.Event -> Element -> unit) = ()

    /// This event is triggered when selectable is created.
    [<JavaScript>]
    member this.OnCreate(f : JQuery.Event -> Element -> unit) =
        this |> OnAfterRender(fun _ ->  this.onCreate f)

    /// Event triggered at the end of the select operation,
    /// on each element added to the selection.
    [<JavaScript>]
    member this.OnSelected(f : JQuery.Event -> Element -> unit) =
        this |> OnAfterRender(fun _ ->  this.onSelected f)

    /// Event triggered during the select operation,
    /// on each element added to the selection.
    [<JavaScript>]
    member this.OnSelecting(f : JQuery.Event -> Element -> unit) =
        this |> OnAfterRender(fun _ -> this.onSelecting f)

    /// Event triggered at the beginning of the select operation.
    [<JavaScript>]
    member this.OnStart f =
        this |> OnAfterRender(fun _ -> this.onStart f)

    /// Event triggered at the end of the select operation.
    [<JavaScript>]
    member this.OnStop f =
        this |> OnAfterRender(fun _ -> this.onStop f)

    /// Event is triggered at the end of the select operation,
    /// on each element removed from the selection.
    [<JavaScript>]
    member this.OnUnselected(f : JQuery.Event -> Element -> unit) =
        this |> OnAfterRender(fun _ ->  this.onUnselected f)

    /// Event triggered during the select operation,
    /// on each element removed from the selection.
    [<JavaScript>]
    member this.OnUnselecting(f : JQuery.Event -> Element -> unit) =
        this |> OnAfterRender(fun _ -> this.onUnselecting f)
