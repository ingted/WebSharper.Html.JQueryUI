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
namespace WebSharper.GoldenLayout

open WebSharper
open WebSharper.JavaScript
open WebSharper.InterfaceGenerator

module Definition =

    // Classes
    
    let EventEmitterClass = Class "EventEmitter"
    let GoldenLayoutClass =
        Class "GoldenLayout"
        |=> Inherits EventEmitterClass
    let ContentItemClass =
        Class "ContentItem"
        |=> Inherits EventEmitterClass
    let ContainerClass =
        Class "Container"
        |=> Inherits EventEmitterClass
    let BrowserWindowClass =
        Class "BrowserWindow"
        |=> Inherits EventEmitterClass
    let HeaderClass = Class "Header"
    let TabClass = Class "Tab"

    // Events

    let LayoutEvents =
        Pattern.EnumStrings "LayoutEvent"
            [
                "initialised"
                "stateChanged"
                "windowOpened"
                "windowClosed"
                "selectionChanged"
                "itemDestroyed"
                "itemCreated"
                "componentCreated"
                "rowCreated"
                "columnCreated"
                "stackCreated"
                "tabCreated"
            ]

    let ItemEvents =
        Pattern.EnumStrings "ItemEvent" [
            "stateChanged"
            "titleChanged"
            "activeContentItemChanged"
            "itemDestroyed"
            "itemCreated"
            "componentCreated"
            "rowCreated"
            "columnCreated"
            "stackCreated"
        ]

    let ContainerEvents =
        Pattern.EnumStrings "ContainerEvent" [
            "open"
            "resize"
            "destroy"
            "close"
            "tab"
            "hide"
            "show"
        ]

    let BrowserWindowEvents =
        Pattern.EnumStrings "BrowserWindowEvent" [
            "initialised"
            "closed"
        ]

    let EventType
        = LayoutEvents
        + ItemEvents
        + ContainerEvents
        + BrowserWindowEvents
        + T<string>


    // Item config

    let ComponentConfig =
        Pattern.Config "Component" {
            Required = [ "componentName", T<string> ]
            Optional = [ "componentState", T<obj> ]
        }

    let ReactComponentConfig =
        Pattern.Config "ReactComponent" {
            Required = [ "component", T<string> ]
            Optional = [ "props", T<obj> ]
        }

    let StackConfig = 
        Pattern.Config "Stack" {
            Required = []
            Optional = [ "activeItemIndex", T<int> ]
        }

    let [<Literal>] ComponentString = "component"
    let [<Literal>] ReactComponentString = "react-component"
    let [<Literal>] RowString = "row"
    let [<Literal>] ColumnString = "column"
    let [<Literal>] StackString = "stack"

    let ItemType =
        Pattern.EnumStrings "ItemType" [
            ComponentString
            ReactComponentString
            RowString
            ColumnString
            StackString
        ]

    let GeneralItemConfig =
        Pattern.Config "GeneralItemConfig" {
            Required =
                [
                    "type", ItemType.Type
                ]
            Optional = 
                [
                    "content", Type.ArrayOf TSelf
                    "width", T<int>
                    "height", T<int>
                    "id", T<string> + Type.ArrayOf T<string>
                    "isClosable", T<bool>
                    "title", T<string>
                    //when type = "component"
                    "componentName", T<string>
                    "componentState", T<obj>
                    //when type = "react-component"
                    "component", T<string>
                    "props", T<obj>
                    //when type = "stack"
                    "activeItemIndex", T<int>
                ]
        }

    let ItemConfig =
        Pattern.Config "Item" {
            Required = []
            Optional =
                [
                    "content", Type.ArrayOf GeneralItemConfig
                    "width", T<int>
                    "height", T<int>
                    "id", T<string> + Type.ArrayOf T<string>
                    "isClosable", T<bool>
                    "title", T<string>
                ]
        }

    let ItemFactory =
        Class "ItemFactory"
        |+> Static [
            "createComponent" => ComponentConfig.Type?special * ItemConfig.Type?general ^-> GeneralItemConfig
                |> WithInline ("return Object.assign({type: '" + ComponentString + "'}, $special, $general);")

            "createReactComponent" => ReactComponentConfig.Type?special * ItemConfig.Type?general ^-> GeneralItemConfig
                |> WithInline ("return Object.assign({type: '" + ReactComponentString + "'}, $special, $general);")

            "createStack" => StackConfig.Type?special * ItemConfig.Type?general ^-> GeneralItemConfig
                |> WithInline ("return Object.assign({type: '" + StackString + "'}, $special, $general);")

            "createRow" => ItemConfig.Type?general ^-> GeneralItemConfig
                |> WithInline ("return Object.assign({type: '" + RowString + "'}, $special, $general);")

            "createColumn" => ItemConfig.Type?general ^-> GeneralItemConfig
                |> WithInline ("return Object.assign({type: '" + ColumnString + "'}, $special, $general);")
        ]

    // Layout config 

    let LayoutSettings =
        Pattern.Config "LayoutSettings" {
            Optional =
                [
                    "hasHeaders", T<bool>
                    "constrainDragToContainer", T<bool>
                    "reorderEnabled", T<bool>
                    "selectionEnabled", T<bool>
                    "popoutWholeStack", T<bool>
                    "blockedPopoutsThrowError", T<bool>
                    "closePopoutsOnUnload", T<bool>
                    "showPopoutIcon", T<bool>
                    "showMaximiseIcon", T<bool>
                    "showCloseIcon", T<bool>
                ]
            Required = []
        }

    let LayoutDimensions =
        Pattern.Config "LayoutDimensions" {
            Optional =
                [
                    "borderWidth", T<int>
                    "minItemHeight", T<int>
                    "minItemWidth", T<int>
                    "headerHeight", T<int>
                    "dragProxyWidth", T<int>
                    "dragProxyHeight", T<int>
                ]
            Required = []
        }

    let LayoutLabels =
        Pattern.Config "LayoutLabels" {
            Optional =
                [
                    "close", T<string>
                    "maximise", T<string>
                    "minimise", T<string>
                    "popout", T<string>
                ]
            Required = []
        }

    let LayoutConfig =
        Pattern.Config "Layout" {
            Required =
                [
                    
                ]
            Optional = 
                [
                    "settings", LayoutSettings.Type
                    "dimensions", LayoutDimensions.Type
                    "labels", LayoutLabels.Type
                    "content", Type.ArrayOf GeneralItemConfig.Type
                ]
        }

    // GoldenLayout

    let Dimensions =
        Pattern.Config "Dimensions" {
            Required = []
            Optional =
                [
                    "width", T<int>
                    "height", T<int>
                    "left", T<int>
                    "top", T<int>
                ]
        }

    let GoldenLayout =
        GoldenLayoutClass
        |+> Static [
            Constructor (LayoutConfig.Type?configuration * !?(T<JQuery.JQuery> + T<Dom.Element>)?container)
            "minifyConfig" => LayoutConfig.Type?config ^-> T<obj>
            "unminifyConfig" => T<obj>?minifiedConfig ^-> LayoutConfig.Type
        ]
        |+> Instance [
            "root" =? ContentItemClass.Type
            "container" =? T<JQuery.JQuery>
            "isInitialised" =? T<bool>
            "config" =? LayoutConfig.Type
            "selectedItem" =? ContentItemClass.Type
            "width" =? T<int>
            "height" =? T<int>
            "openPopouts" =? Type.ArrayOf BrowserWindowClass.Type
            "isSubWindow" =? T<bool>
            "eventHub" =? EventEmitterClass.Type
            "registerComponent"
                => T<string>?name
                * (ContainerClass.Type?container * T<obj>?state ^-> T<unit>)?componentCreator
                ^-> T<unit>
            "init" => T<unit> ^-> T<unit>
            "toConfig" => T<unit> ^-> LayoutConfig.Type
            "getComponent" => T<string>?name ^-> (ContainerClass.Type?container * T<obj>?state ^-> T<unit>)
            "updateSize" => !? T<int>?width * !? T<int>?height ^-> T<unit>
            "destroy" => T<unit> ^-> T<unit>
            "createContentItem"
                => GeneralItemConfig.Type?itemConfiguration
                * !? ContentItemClass.Type?parent
                ^-> T<unit> // Test
            "createPopout"
                => (LayoutConfig.Type + ContentItemClass)?configOrContentItem
                * Dimensions.Type?dimensions
                * !? T<string>?parentId
                * !? T<int>?indexInParent
                ^-> T<unit>
            "createDragSource"
                => (T<Dom.Element> + T<JQuery.JQuery>)?element
                * GeneralItemConfig.Type?itemConfiguration
                ^-> T<unit>
            "selectItem" => ContentItemClass.Type?contentItem ^-> T<unit>
        ]

    // ContentItem

    let ContentItemType =
        Pattern.EnumStrings "ContentItemType" [
            "row"
            "column"
            "stack"
            "component"
            "root"
        ]

    let ContentItem =
        ContentItemClass
        |+> Instance [
            "config" =? GeneralItemConfig.Type
            "type" =? ContentItemType.Type
            "contentItems" =? Type.ArrayOf TSelf
            "parent" =? TSelf
            "id" =? T<string> + Type.ArrayOf T<obj>
            "isInitialised" =? T<bool>
            "isMaximised" =? T<bool>
            "isRoot" =? T<bool>
            "isRow" =? T<bool>
            "isColumn" =? T<bool>
            "isStack" =? T<bool>
            "isComponent" =? T<bool>
            "layoutManager" =? GoldenLayoutClass.Type
            "element" =? T<JQuery.JQuery>
            "childElementContainer" =? T<JQuery.JQuery>
            
            "addChild" => (TSelf + GeneralItemConfig.Type)?itemOrGeneralItemConfig * !? T<int>?index ^-> T<unit>
            "removeChild" => TSelf?contentItem * !? T<bool>?keepChild ^-> T<unit>
            "replaceChild" => TSelf?oldChild * (TSelf + GeneralItemConfig.Type)?newChild ^-> T<unit>
            "setSize" => T<unit> ^-> T<unit>
            "setTitle" => T<string>?title ^-> T<unit>
            "callDownwards"
                => T<string>?functionName
                * !? T<obj []>?functionArguments
                * !? T<bool>?bottomUp
                * !? T<bool>? skipSelf
                ^-> T<unit>
            "emitBubblingEvent" => EventType?name ^-> T<string>
            "remove" => T<unit> ^-> T<unit>
            "popout" => T<unit> ^-> T<unit>
            "toggleMaximise" => T<unit> ^-> T<unit>
            "select" => T<unit> ^-> T<unit>
            "deselect" => T<unit> ^-> T<unit>
            "hasId" => T<string>?id ^-> T<string>
            "setActiveContentItem" => TSelf?contentItem ^-> T<unit>
            "getActiveContentItem" => T<unit> ^-> TSelf
            "addId" => T<string>?id ^-> T<unit>
            "removeId" => T<string>?id ^-> T<unit>
            "getItemsByFilter" => (TSelf ^-> T<bool>)?filterFunction ^-> Type.ArrayOf TSelf
            "getItemsById" => T<string>?id ^-> Type.ArrayOf TSelf
            "getItemsByType" => ContentItemType.Type ^-> Type.ArrayOf TSelf
            "getComponentsByName" => T<string>?name ^-> Type.ArrayOf TSelf
        ]

    // Container

    let Container =
        ContainerClass
        |+> Instance [
            "width" =? T<int>
            "height" =? T<int>
            "parent" =? ContentItemClass.Type
            "tab" =? TabClass.Type
            "title" =? T<string>
            "layoutManager" =? GoldenLayoutClass.Type
            "isHidden" =? T<bool>

            "getElement" => T<unit> ^-> T<JQuery.JQuery>
            "setState" => T<obj>?state ^-> T<unit>
            "extendState" => T<obj>?state ^-> T<unit>
            "getState" => T<unit> ^-> T<obj>
            "setSize" => T<int>?widht * T<int>?height ^-> T<unit>
            "setTitle" => T<string>?title ^-> T<unit>
            "close" => T<unit> ^-> T<unit>
        ]

    // BrowserWindow

    let BrowserWindowConfig = 
        Pattern.Config "BrowserWindowConfig" {
            Required = 
                [
                    "dimensions", Dimensions.Type
                    "content", Type.ArrayOf GeneralItemConfig.Type
                    "parentId", T<string>
                    "indexInParent", T<int>
                ]
            Optional = []
        }

    let BrowserWindow =
        BrowserWindowClass
        |+> Instance [
            "isInitialised" =? T<bool>

            "toConfig" => T<unit> ^-> BrowserWindowConfig.Type
            "getGlInstance" => T<unit> ^-> GoldenLayoutClass.Type
            "getWindow" => T<unit> ^-> T<JavaScript.Window>
            "close" => T<unit> ^-> T<unit>
            "popIn" => T<unit> ^-> T<unit>
        ]

    // Header

    let Header =
        HeaderClass
        |+> Instance [
            "layoutManager" =? GoldenLayout.Type
            "parent" =? ContentItem.Type
            "tabs" =? Type.ArrayOf TabClass
            "activeContentItem" =? ContentItemClass.Type
            "element" =? T<JQuery.JQuery>
            "tabsContainer" =? T<JQuery.JQuery>
            "controlsContainer" =? T<JQuery.JQuery>

            "setActiveContentItem" => ContentItemClass.Type?contentItem ^-> T<unit>
            "createTab" => ContentItemClass.Type?contentItem * T<int>?index ^-> T<unit>
            "removeTab" => ContentItemClass.Type?contentItem ^-> T<unit>
        ]

    // Tab

    let Tab =
        TabClass
        |+> Instance [
            "isActive" =? T<bool>
            "header" =? HeaderClass.Type
            "contentItem" =? ContentItemClass.Type
            "element" =? T<JQuery.JQuery>
            "titleElement" =? T<JQuery.JQuery>
            "closeElement" =? T<JQuery.JQuery>

            "setTitle" => T<string>?string ^-> T<unit>
            "setActive" => T<bool>?isActive ^-> T<unit>
        ]

    let EventEmitter =
        EventEmitterClass
        |+> Instance [
            "on" => EventType?eventName
                * (!+ T<obj> ^-> T<unit>)?callback
                * !? T<obj>?context
                ^-> T<unit>
            "emit" => EventType?eventName *+ T<obj> ^-> T<unit> 
            "trigger" => EventType?eventName *+ T<obj> ^-> T<unit>
            "unbind" 
                => EventType?eventName
                * !? (!+ T<obj> ^-> T<unit>)?callback
                * !? T<obj>?context
                ^-> T<unit>
            "off"
                => EventType?eventName
                * !? (!+ T<obj> ^-> T<unit>)?callback
                * !? T<obj>?context
                ^-> T<unit>
        ]

    module Res =
        let Js =
            Resource "Js" "https://golden-layout.com/files/latest/js/goldenlayout.min.js"
            |> AssemblyWide
            |> RequiresExternal [ T<WebSharper.JQuery.Resources.JQuery> ]

        let BaseCss =
            Resource "BaseCss" "https://golden-layout.com/files/latest/css/goldenlayout-base.css"
            |> AssemblyWide

        let DarkTheme =
            Resource "DarkTheme" "https://golden-layout.com/files/latest/css/goldenlayout-dark-theme.css"
            |> Requires [ BaseCss ]

        let LightTheme =
            Resource "LightTheme" "https://golden-layout.com/files/latest/css/goldenlayout-light-theme.css"
            |> Requires [ BaseCss ]

    // Assembly

    let Assembly =
        Assembly [
            Namespace "WebSharper.GoldenLayout.Resources" [
                Res.Js
                Res.BaseCss
                Res.DarkTheme
                Res.LightTheme
            ]
            Namespace "WebSharper.GoldenLayout" [
                LayoutEvents
                ItemEvents
                ContainerEvents
                BrowserWindowEvents
                ComponentConfig
                ReactComponentConfig
                StackConfig
                ItemConfig
                ItemType
                GeneralItemConfig
                ItemFactory
                LayoutSettings
                LayoutDimensions
                LayoutLabels
                LayoutConfig
                Dimensions
                GoldenLayout
                ContentItemType
                ContentItem
                Container
                BrowserWindowConfig
                BrowserWindow
                Header
                Tab
                EventEmitter
            ]
        ]


[<Sealed>]
type Extension() =
    interface IExtension with
        member x.Assembly = Definition.Assembly

[<assembly: Extension(typeof<Extension>)>]
do ()
