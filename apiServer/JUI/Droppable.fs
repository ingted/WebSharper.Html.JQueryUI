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

type ToleranceOfDroppable =
    | [<Name "fit">] Fit
    | [<Name "intersect">] Intersect
    | [<Name "pointer">] Pointer
    | [<Name "touch">] Touch

type DroppableEvent =
    {
        [<Name "draggable">]
        Draggable : JQuery.JQuery

        [<Name "helper">]
        Helper : JQuery.JQuery

        [<Name "offset">]
        Offset : DraggablecursorAtConfiguration

        [<Name "position">]
        Position : DraggablecursorAtConfiguration
    }

type DroppableConfiguration[<JavaScript>]() =

    [<Stub>]
    [<Name "accept">]
    //"" by default
    member val Accept = Unchecked.defaultof<string> with get, set

    [<Stub>]
    [<Name "activeClass">]
    //
    member val ActiveClass = Unchecked.defaultof<string> with get, set

    [<Stub>]
    [<Name "addClasses">]
    //true by default
    member val AddClasses = Unchecked.defaultof<bool> with get, set

    [<Stub>]
    [<Name "disabled">]
    //false by default
    member val Disabled = Unchecked.defaultof<bool> with get, set

    [<Stub>]
    [<Name "greedy">]
    //false by default
    member val Greedy = Unchecked.defaultof<bool> with get, set

    [<Stub>]
    [<Name "hoverClass">]
    //"drophover" by default
    member val HoverClass = Unchecked.defaultof<string> with get, set

    [<Stub>]
    [<Name "scope">]
    //"default" by default
    member val Scope = Unchecked.defaultof<string> with get, set

    [<Stub>]
    [<Name "tolerance">]
    //"intersect" by default
    member val Tolerance = Unchecked.defaultof<ToleranceOfDroppable> with get, set

module internal DroppableInternal =
    [<Inline "jQuery($el).droppable($conf)">]
    let internal New (el: Dom.Element, conf: DroppableConfiguration) = ()

[<Require(typeof<Dependencies.JQueryUIJs>)>]
[<Require(typeof<Dependencies.JQueryUICss>)>]
type Droppable[<JavaScript>] internal () =
    inherit Utils.Pagelet()

    (****************************************************************
    * Constructors
    *****************************************************************)
    /// Creates a new droppable object from the given object and a
    /// configuration object.
    [<JavaScript>]
    [<Name "New1">]
    static member New (el : Element, conf: DroppableConfiguration): Droppable =
        let a = new Droppable()
        a.element <-
            el
            |>! OnAfterRender (fun el  ->
                DroppableInternal.New(el.Dom, conf)
            )
        a

    /// Creates a new droppable object using the
    /// default configuration.
    [<JavaScript>]
    [<Name "New2">]
    static member New (el : Element) : Droppable =
        let conf = new DroppableConfiguration()
        Droppable.New(el, conf)

    (****************************************************************
    * Methods
    *****************************************************************)
    /// Removes droppable functionality completely.
    [<Inline "jQuery($this.element.Dom).droppable('destroy')">]
    member this.Destroy() = X<unit>

    /// Disables droppable functionality.
    [<Inline "jQuery($this.element.Dom).droppable('disable')">]
    member this.Disable() = X<unit>

    /// Enables droppable functionality.
    [<Inline "jQuery($this.element.Dom).droppable('enable')">]
    member this.Enable() = X<unit>

    /// Sets droppable option.
    [<Inline "jQuery($this.element.Dom).droppable('option', $optionName, $value)">]
    member this.Option(optionName: string, value: obj) : unit = ()

    /// Gets droppable option.
    [<Inline "jQuery($this.element.Dom).droppable('option', $optionName)">]
    member this.Option(optionName: string) = X<obj>

    /// Gets all options.
    [<Inline "jQuery($this.element.Dom).droppable('option')">]
    member this.Option () = X<DroppableConfiguration>

    /// Sets one or more options.
    [<Inline "jQuery($this.element.Dom).droppable('option', $options)">]
    member this.Option (options: DroppableConfiguration) = X<unit>

    [<Inline "jQuery($this.element.Dom).droppable('widget')">]
    member private this.getWidget () = X<Dom.Element>

    /// Returns the .ui-droppable element.
    [<JavaScript>]
    member this.Widget = this.getWidget()

    (****************************************************************
    * Events
    *****************************************************************)
    /// This event is triggered when droppable is created.
    [<Inline "jQuery($this.element.Dom).bind('dropcreate', function (x,y) {($f(x))(y);})">]
    member private this.onCreate(f : JQuery.Event -> DroppableEvent -> unit) = ()

    /// Event triggered any time an accepted draggable starts dragging.
    [<Inline "jQuery($this.element.Dom).bind('dropactivate', function (x,y) {($f(x))(y);})">]
    member private this.onActivate(f : JQuery.Event -> DroppableEvent -> unit) = ()

    /// Event triggered any time an accepted draggable stops dragging.
    [<Inline "jQuery($this.element.Dom).bind('dropdeactivate', function (x,y) {($f(x))(y);})">]
    member private this.onDeactivate(f : JQuery.Event -> DroppableEvent -> unit) = ()

    /// Event is triggered when an accepted draggable is dragged 'over' (within the tolerance of) this droppable.
    [<Inline "jQuery($this.element.Dom).bind('dropover', function (x,y) {($f(x))(y);})">]
    member private this.onOver(f : JQuery.Event -> DroppableEvent -> unit) = ()

    /// Event triggered when an accepted draggable is dragged out (within the tolerance of) this droppable.
    [<Inline "jQuery($this.element.Dom).bind('dropout', function (x,y) {($f(x))(y);})">]
    member private this.onOut(f : JQuery.Event -> DroppableEvent -> unit) = ()

    /// Event triggered when an accepted draggable is dropped 'over' (within the tolerance of) this droppable.
    [<Inline "jQuery($this.element.Dom).bind('drop', function (x,y) {($f(x))(y);})">]
    member private this.onDrop(f : JQuery.Event -> DroppableEvent -> unit) = ()

    /// This event is triggered when droppable is created.
    [<JavaScript>]
    member this.OnCreate f =
        this |> OnAfterRender(fun _ -> this.onCreate f)

    /// Event triggered any time an accepted draggable stops dragging.
    [<JavaScript>]
    member this.OnActivate f =
        this |> OnAfterRender(fun _ -> this.onActivate f)

    /// Event triggered any time an accepted draggable is deactivated.
    [<JavaScript>]
    member this.OnDeactivate f =
        this |> OnAfterRender(fun _ -> this.onDeactivate f)

    // Event triggered as an accepted draggable is dragged 'over' (within the tolerance of) this droppable.
    [<JavaScript>]
    member this.OnOver f =
        this |> OnAfterRender(fun _ -> this.onOver f)


    /// Event triggered when an accepted draggable is dragged out (within the tolerance of) this droppable.
    [<JavaScript>]
    member this.OnOut f =
        this |> OnAfterRender(fun _ -> this.onOut f)


    /// Event triggered when an accepted draggable is dropped 'over'
    /// (within the tolerance of) this droppable.
    [<JavaScript>]
    member this.OnDrop f =
        this |> OnAfterRender(fun _ -> this.onDrop f)

