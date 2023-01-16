(function(Global)
{
 "use strict";
 var WebSharper,Obj,Legacy,Html,Client,Pagelet,Element,Attribute,Element$1,DeprecatedTagBuilder,Text,TagBuilder,AttributeBuilder,Operators,Implementation,JQueryHtmlProvider,Default,Tags,Attr,SC$1,Events,JQueryEventSupport,EventsPervasives,SC$2,JQueryUI,Target,PositionConfiguration,Utils,Pagelet$1,Operators$1,Position,AutocompleteConfiguration,ACOption,Autocomplete,Forms,Bootstrap,Controls,Simple,SC$3,ExecutionNode,UI,LegacyHelper,FutoComplete,AccordionIconConfiguration,AccordionConfiguration,Accordion,ButtonIconsConfiguration,ButtonConfiguration,Button,DatepickerShowOptionsConfiguration,DatepickerConfiguration,Datepicker,DialogButton,DialogConfiguration,Dialog,MenuConfiguration,Menu,ProgressbarConfiguration,Progressbar,SliderConfiguration,Slider,SpinnerConfiguration,Spinner,DraggablecursorAtConfiguration,DraggableStackConfiguration,DraggableConfiguration,Draggable,DroppableConfiguration,Droppable,TabsAjaxOptionsConfiguration,TabsCookieConfiguration,TabsFxConfiguration,TabsConfiguration,Tabs,TooltipConfiguration,Tooltip,ResizableConfiguration,Resizable,SelectableConfiguration,Selectable,SortableConfiguration,Sortable,Runtime,Math,Enumerator,List,Doc,UI$1,Doc$1,Seq,View,View$1,AttrModule,Concurrency,System,Guid,Strings,AttrProxy,Var$1,$y;
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Legacy=WebSharper.Legacy=WebSharper.Legacy||{};
 Html=Legacy.Html=Legacy.Html||{};
 Client=Html.Client=Html.Client||{};
 Pagelet=Client.Pagelet=Client.Pagelet||{};
 Element=Client.Element=Client.Element||{};
 Attribute=Legacy.Attribute=Legacy.Attribute||{};
 Element$1=Legacy.Element=Legacy.Element||{};
 DeprecatedTagBuilder=Legacy.DeprecatedTagBuilder=Legacy.DeprecatedTagBuilder||{};
 Text=Legacy.Text=Legacy.Text||{};
 TagBuilder=Legacy.TagBuilder=Legacy.TagBuilder||{};
 AttributeBuilder=Legacy.AttributeBuilder=Legacy.AttributeBuilder||{};
 Operators=Legacy.Operators=Legacy.Operators||{};
 Implementation=Legacy.Implementation=Legacy.Implementation||{};
 JQueryHtmlProvider=Implementation.JQueryHtmlProvider=Implementation.JQueryHtmlProvider||{};
 Default=Legacy.Default=Legacy.Default||{};
 Tags=Legacy.Tags=Legacy.Tags||{};
 Attr=Legacy.Attr=Legacy.Attr||{};
 SC$1=Global.StartupCode$WebSharper_Html_JQueryUI$Html=Global.StartupCode$WebSharper_Html_JQueryUI$Html||{};
 Events=Legacy.Events=Legacy.Events||{};
 JQueryEventSupport=Events.JQueryEventSupport=Events.JQueryEventSupport||{};
 EventsPervasives=Legacy.EventsPervasives=Legacy.EventsPervasives||{};
 SC$2=Global.StartupCode$WebSharper_Html_JQueryUI$Events=Global.StartupCode$WebSharper_Html_JQueryUI$Events||{};
 JQueryUI=WebSharper.JQueryUI=WebSharper.JQueryUI||{};
 Target=JQueryUI.Target=JQueryUI.Target||{};
 PositionConfiguration=JQueryUI.PositionConfiguration=JQueryUI.PositionConfiguration||{};
 Utils=JQueryUI.Utils=JQueryUI.Utils||{};
 Pagelet$1=Utils.Pagelet=Utils.Pagelet||{};
 Operators$1=JQueryUI.Operators=JQueryUI.Operators||{};
 Position=JQueryUI.Position=JQueryUI.Position||{};
 AutocompleteConfiguration=JQueryUI.AutocompleteConfiguration=JQueryUI.AutocompleteConfiguration||{};
 ACOption=JQueryUI.ACOption=JQueryUI.ACOption||{};
 Autocomplete=JQueryUI.Autocomplete=JQueryUI.Autocomplete||{};
 Forms=WebSharper.Forms=WebSharper.Forms||{};
 Bootstrap=Forms.Bootstrap=Forms.Bootstrap||{};
 Controls=Bootstrap.Controls=Bootstrap.Controls||{};
 Simple=Controls.Simple=Controls.Simple||{};
 SC$3=Global.StartupCode$WebSharper_Html_JQueryUI$Bootstrap=Global.StartupCode$WebSharper_Html_JQueryUI$Bootstrap||{};
 ExecutionNode=Global.ExecutionNode=Global.ExecutionNode||{};
 UI=ExecutionNode.UI=ExecutionNode.UI||{};
 LegacyHelper=UI.LegacyHelper=UI.LegacyHelper||{};
 FutoComplete=UI.FutoComplete=UI.FutoComplete||{};
 AccordionIconConfiguration=JQueryUI.AccordionIconConfiguration=JQueryUI.AccordionIconConfiguration||{};
 AccordionConfiguration=JQueryUI.AccordionConfiguration=JQueryUI.AccordionConfiguration||{};
 Accordion=JQueryUI.Accordion=JQueryUI.Accordion||{};
 ButtonIconsConfiguration=JQueryUI.ButtonIconsConfiguration=JQueryUI.ButtonIconsConfiguration||{};
 ButtonConfiguration=JQueryUI.ButtonConfiguration=JQueryUI.ButtonConfiguration||{};
 Button=JQueryUI.Button=JQueryUI.Button||{};
 DatepickerShowOptionsConfiguration=JQueryUI.DatepickerShowOptionsConfiguration=JQueryUI.DatepickerShowOptionsConfiguration||{};
 DatepickerConfiguration=JQueryUI.DatepickerConfiguration=JQueryUI.DatepickerConfiguration||{};
 Datepicker=JQueryUI.Datepicker=JQueryUI.Datepicker||{};
 DialogButton=JQueryUI.DialogButton=JQueryUI.DialogButton||{};
 DialogConfiguration=JQueryUI.DialogConfiguration=JQueryUI.DialogConfiguration||{};
 Dialog=JQueryUI.Dialog=JQueryUI.Dialog||{};
 MenuConfiguration=JQueryUI.MenuConfiguration=JQueryUI.MenuConfiguration||{};
 Menu=JQueryUI.Menu=JQueryUI.Menu||{};
 ProgressbarConfiguration=JQueryUI.ProgressbarConfiguration=JQueryUI.ProgressbarConfiguration||{};
 Progressbar=JQueryUI.Progressbar=JQueryUI.Progressbar||{};
 SliderConfiguration=JQueryUI.SliderConfiguration=JQueryUI.SliderConfiguration||{};
 Slider=JQueryUI.Slider=JQueryUI.Slider||{};
 SpinnerConfiguration=JQueryUI.SpinnerConfiguration=JQueryUI.SpinnerConfiguration||{};
 Spinner=JQueryUI.Spinner=JQueryUI.Spinner||{};
 DraggablecursorAtConfiguration=JQueryUI.DraggablecursorAtConfiguration=JQueryUI.DraggablecursorAtConfiguration||{};
 DraggableStackConfiguration=JQueryUI.DraggableStackConfiguration=JQueryUI.DraggableStackConfiguration||{};
 DraggableConfiguration=JQueryUI.DraggableConfiguration=JQueryUI.DraggableConfiguration||{};
 Draggable=JQueryUI.Draggable=JQueryUI.Draggable||{};
 DroppableConfiguration=JQueryUI.DroppableConfiguration=JQueryUI.DroppableConfiguration||{};
 Droppable=JQueryUI.Droppable=JQueryUI.Droppable||{};
 TabsAjaxOptionsConfiguration=JQueryUI.TabsAjaxOptionsConfiguration=JQueryUI.TabsAjaxOptionsConfiguration||{};
 TabsCookieConfiguration=JQueryUI.TabsCookieConfiguration=JQueryUI.TabsCookieConfiguration||{};
 TabsFxConfiguration=JQueryUI.TabsFxConfiguration=JQueryUI.TabsFxConfiguration||{};
 TabsConfiguration=JQueryUI.TabsConfiguration=JQueryUI.TabsConfiguration||{};
 Tabs=JQueryUI.Tabs=JQueryUI.Tabs||{};
 TooltipConfiguration=JQueryUI.TooltipConfiguration=JQueryUI.TooltipConfiguration||{};
 Tooltip=JQueryUI.Tooltip=JQueryUI.Tooltip||{};
 ResizableConfiguration=JQueryUI.ResizableConfiguration=JQueryUI.ResizableConfiguration||{};
 Resizable=JQueryUI.Resizable=JQueryUI.Resizable||{};
 SelectableConfiguration=JQueryUI.SelectableConfiguration=JQueryUI.SelectableConfiguration||{};
 Selectable=JQueryUI.Selectable=JQueryUI.Selectable||{};
 SortableConfiguration=JQueryUI.SortableConfiguration=JQueryUI.SortableConfiguration||{};
 Sortable=JQueryUI.Sortable=JQueryUI.Sortable||{};
 Runtime=WebSharper&&WebSharper.Runtime;
 Math=Global.Math;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 List=WebSharper&&WebSharper.List;
 Doc=Forms&&Forms.Doc;
 UI$1=WebSharper&&WebSharper.UI;
 Doc$1=UI$1&&UI$1.Doc;
 Seq=WebSharper&&WebSharper.Seq;
 View=UI$1&&UI$1.View;
 View$1=Forms&&Forms.View;
 AttrModule=UI$1&&UI$1.AttrModule;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 System=Global.System;
 Guid=System&&System.Guid;
 Strings=WebSharper&&WebSharper.Strings;
 AttrProxy=UI$1&&UI$1.AttrProxy;
 Var$1=UI$1&&UI$1.Var$1;
 $y=Global.$y;
 Pagelet=Client.Pagelet=Runtime.Class({
  AppendTo:function(targetId)
  {
   self.document.getElementById(targetId).appendChild(this.get_Body());
   this.Render();
  },
  Render:Global.ignore,
  ReplaceInDom:function(node)
  {
   node.parentNode.replaceChild(this.get_Body(),node);
   this.Render();
  }
 },Obj,Pagelet);
 Pagelet.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Pagelet);
 Element=Client.Element=Runtime.Class({
  AppendN:function(node)
  {
   this.HtmlProvider.AppendNode(this.get_Body(),node);
  },
  AppendI:function(pl)
  {
   var body,r;
   body=pl.get_Body();
   if(body.nodeType===2)
    this.HtmlProvider.AppendAttribute(this.get_Body(),body);
   else
    this.HtmlProvider.AppendNode(this.get_Body(),pl.get_Body());
   if(this.IsRendered)
    pl.Render();
   else
    {
     r=this.RenderInternal;
     this.RenderInternal=function()
     {
      r();
      pl.Render();
     };
    }
  },
  get_Body:function()
  {
   return this.Dom;
  },
  Render:function()
  {
   if(!this.IsRendered)
    {
     this.RenderInternal();
     this.IsRendered=true;
    }
  },
  set_Item:function(name,value)
  {
   this.HtmlProvider.SetAttribute(this.get_Body(),name,value);
  },
  get_Item:function(name)
  {
   this.HtmlProvider.GetAttribute(this.get_Body(),name);
   return this.HtmlProvider.GetAttribute(this.get_Body(),name);
  },
  get_HtmlProvider:function()
  {
   return this.HtmlProvider;
  },
  OnLoad:function(f)
  {
   this.HtmlProvider.OnLoad(this.get_Body(),f);
  },
  get_Id:function()
  {
   var id,newId;
   id=this.HtmlProvider.GetProperty(this.get_Body(),"id");
   return id===void 0||id===""?(newId="id"+Math.round(Math.random()*100000000),(this.HtmlProvider.SetProperty(this.get_Body(),"id",newId),newId)):id;
  },
  set_Value:function(x)
  {
   this.HtmlProvider.SetValue(this.get_Body(),x);
  },
  get_Value:function()
  {
   return this.HtmlProvider.GetValue(this.get_Body());
  },
  set_Html:function(x)
  {
   this.HtmlProvider.SetHtml(this.get_Body(),x);
  },
  get_Html:function()
  {
   return this.HtmlProvider.GetHtml(this.get_Body());
  },
  set_Text:function(x)
  {
   this.HtmlProvider.SetText(this.get_Body(),x);
  },
  get_Text:function()
  {
   return this.HtmlProvider.GetText(this.get_Body());
  }
 },Pagelet,Element);
 Element.New=function(html,dom)
 {
  var el;
  el=new Element.New$2(html);
  el.RenderInternal=Global.ignore;
  el.Dom=dom;
  el.IsRendered=false;
  return el;
 };
 Element.New$1=function(html,name)
 {
  var el,dom;
  el=new Element.New$2(html);
  dom=self.document.createElement(name);
  el.RenderInternal=Global.ignore;
  el.Dom=dom;
  el.IsRendered=false;
  return el;
 };
 Element.New$2=Runtime.Ctor(function(HtmlProvider)
 {
  Pagelet.New.call(this);
  this.HtmlProvider=HtmlProvider;
 },Element);
 Attribute=Legacy.Attribute=Runtime.Class({
  get_Body:function()
  {
   var attr;
   attr=this.HtmlProvider.CreateAttribute(this.Name);
   attr.value=this.Value;
   return attr;
  }
 },Pagelet,Attribute);
 Attribute.New=function(htmlProvider,name,value)
 {
  var a;
  a=new Attribute.New$1(htmlProvider);
  a.Name=name;
  a.Value=value;
  return a;
 };
 Attribute.New$1=Runtime.Ctor(function(HtmlProvider)
 {
  Pagelet.New.call(this);
  this.HtmlProvider=HtmlProvider;
 },Attribute);
 Element$1=Legacy.Element=Runtime.Class({
  AppendN:function(node)
  {
   this.HtmlProvider.AppendNode(this.get_Body(),node);
  },
  AppendI:function(pl)
  {
   var body,r;
   body=pl.get_Body();
   if(body.nodeType===2)
    this.HtmlProvider.AppendAttribute(this.get_Body(),body);
   else
    this.HtmlProvider.AppendNode(this.get_Body(),pl.get_Body());
   if(this.IsRendered)
    pl.Render();
   else
    {
     r=this.RenderInternal;
     this.RenderInternal=function()
     {
      r();
      pl.Render();
     };
    }
  },
  get_Body:function()
  {
   return this.Dom;
  },
  Render:function()
  {
   if(!this.IsRendered)
    {
     this.RenderInternal();
     this.IsRendered=true;
    }
  },
  set_Item:function(name,value)
  {
   this.HtmlProvider.SetAttribute(this.get_Body(),name,value);
  },
  get_Item:function(name)
  {
   this.HtmlProvider.GetAttribute(this.get_Body(),name);
   return this.HtmlProvider.GetAttribute(this.get_Body(),name);
  },
  get_HtmlProvider:function()
  {
   return this.HtmlProvider;
  },
  OnLoad:function(f)
  {
   this.HtmlProvider.OnLoad(this.get_Body(),f);
  },
  get_Id:function()
  {
   var id,newId;
   id=this.HtmlProvider.GetProperty(this.get_Body(),"id");
   return id===void 0||id===""?(newId="id"+Math.round(Math.random()*100000000),(this.HtmlProvider.SetProperty(this.get_Body(),"id",newId),newId)):id;
  },
  set_Value:function(x)
  {
   this.HtmlProvider.SetValue(this.get_Body(),x);
  },
  get_Value:function()
  {
   return this.HtmlProvider.GetValue(this.get_Body());
  },
  set_Html:function(x)
  {
   this.HtmlProvider.SetHtml(this.get_Body(),x);
  },
  get_Html:function()
  {
   return this.HtmlProvider.GetHtml(this.get_Body());
  },
  set_Text:function(x)
  {
   this.HtmlProvider.SetText(this.get_Body(),x);
  },
  get_Text:function()
  {
   return this.HtmlProvider.GetText(this.get_Body());
  }
 },Pagelet,Element$1);
 Element$1.New=function(html,dom)
 {
  var el;
  el=new Element$1.New$2(html);
  el.RenderInternal=Global.ignore;
  el.Dom=dom;
  el.IsRendered=false;
  return el;
 };
 Element$1.New$1=function(html,name)
 {
  var el,dom;
  el=new Element$1.New$2(html);
  dom=self.document.createElement(name);
  el.RenderInternal=Global.ignore;
  el.Dom=dom;
  el.IsRendered=false;
  return el;
 };
 Element$1.New$2=Runtime.Ctor(function(HtmlProvider)
 {
  Pagelet.New.call(this);
  this.HtmlProvider=HtmlProvider;
 },Element$1);
 DeprecatedTagBuilder=Legacy.DeprecatedTagBuilder=Runtime.Class({
  NewTag:function(name,children)
  {
   var el,e;
   el=Element.New$1(this.HtmlProvider,name);
   e=Enumerator.Get(children);
   try
   {
    while(e.MoveNext())
     el.AppendI(e.Current());
   }
   finally
   {
    if(typeof e=="object"&&"Dispose"in e)
     e.Dispose();
   }
   return el;
  }
 },Obj,DeprecatedTagBuilder);
 DeprecatedTagBuilder.New=Runtime.Ctor(function(HtmlProvider)
 {
  Obj.New.call(this);
  this.HtmlProvider=HtmlProvider;
 },DeprecatedTagBuilder);
 Text=Legacy.Text=Runtime.Class({
  get_Body:function()
  {
   return self.document.createTextNode(this.text);
  }
 },Pagelet,Text);
 Text.New=Runtime.Ctor(function(text)
 {
  Pagelet.New.call(this);
  this.text=text;
 },Text);
 TagBuilder=Legacy.TagBuilder=Runtime.Class({
  text:function(data)
  {
   return new Text.New(data);
  },
  OfDom:function(dom)
  {
   return Element.New(this.HtmlProvider,dom);
  },
  NewTag:function(name,children)
  {
   var el,e;
   el=Element.New$1(this.HtmlProvider,name);
   e=Enumerator.Get(children);
   try
   {
    while(e.MoveNext())
     el.AppendI(e.Current());
   }
   finally
   {
    if(typeof e=="object"&&"Dispose"in e)
     e.Dispose();
   }
   return el;
  }
 },Obj,TagBuilder);
 TagBuilder.New=Runtime.Ctor(function(HtmlProvider)
 {
  Obj.New.call(this);
  this.HtmlProvider=HtmlProvider;
 },TagBuilder);
 AttributeBuilder=Legacy.AttributeBuilder=Runtime.Class({
  NewAttr:function(name,value)
  {
   return Attribute.New(this.HtmlProvider,name,value);
  }
 },Obj,AttributeBuilder);
 AttributeBuilder.New=Runtime.Ctor(function(HtmlProvider)
 {
  Obj.New.call(this);
  this.HtmlProvider=HtmlProvider;
 },AttributeBuilder);
 Operators.add=function(el,inner)
 {
  var e;
  e=Enumerator.Get(inner);
  try
  {
   while(e.MoveNext())
    el.AppendI(e.Current());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
  return el;
 };
 Operators.OnBeforeRender=function(f,w)
 {
  var r;
  r=w.Render;
  w.Render=function()
  {
   f(w);
   r.apply(w);
  };
 };
 Operators.OnAfterRender=function(f,w)
 {
  var r;
  r=w.Render;
  w.Render=function()
  {
   r.apply(w);
   f(w);
  };
 };
 JQueryHtmlProvider=Implementation.JQueryHtmlProvider=Runtime.Class({
  OnDocumentReady:function(f)
  {
   Global.jQuery(self.document).ready(function()
   {
    return f();
   });
  },
  OnLoad:function(node,f)
  {
   Global.jQuery(node).ready(function()
   {
    return f();
   });
  },
  RemoveClass:function(node,cls)
  {
   Global.jQuery(node).removeClass(cls);
  },
  SetStyle:function(node,style)
  {
   Global.jQuery(node).attr("style",style);
  },
  SetCss:function(node,name,prop)
  {
   Global.jQuery(node).css(name,prop);
  },
  RemoveAttribute:function(node,name)
  {
   Global.jQuery(node).removeAttr(name);
  },
  SetProperty:function(node,name,value)
  {
   Global.jQuery(node).prop(name,value);
  },
  GetProperty:function(node,name)
  {
   return Global.jQuery(node).prop(name);
  },
  GetAttribute:function(node,name)
  {
   return Global.jQuery(node).attr(name);
  },
  HasAttribute:function(node,name)
  {
   return Global.jQuery(node).attr(name)!=null;
  },
  SetAttribute:function(node,name,value)
  {
   Global.jQuery(node).attr(name,value);
  },
  Remove:function(node)
  {
   Global.jQuery(node).remove();
  },
  SetValue:function(node,value)
  {
   Global.jQuery(node).val(value);
  },
  GetValue:function(node)
  {
   return Global.jQuery(node).val();
  },
  SetHtml:function(node,text)
  {
   Global.jQuery(node).html(text);
  },
  GetHtml:function(node)
  {
   return Global.jQuery(node).html();
  },
  Clear:function(node)
  {
   Global.jQuery(node).contents().detach();
  },
  AddClass:function(node,cls)
  {
   Global.jQuery(node).addClass(cls);
  },
  SetText:function(node,text)
  {
   node.textContent=text;
  },
  GetText:function(node)
  {
   return node.textContent;
  },
  AppendNode:function(node,el)
  {
   var _this,a;
   _this=Global.jQuery(node);
   a=Global.jQuery(el);
   _this.append.apply(_this,[a]);
  },
  AppendAttribute:function(node,attr)
  {
   this.SetAttribute(node,attr.nodeName,attr.value);
  },
  CreateElement:function(name)
  {
   return self.document.createElement(name);
  },
  CreateAttribute:function(str)
  {
   return self.document.createAttribute(str);
  },
  CreateTextNode:function(str)
  {
   return self.document.createTextNode(str);
  }
 },Obj,JQueryHtmlProvider);
 JQueryHtmlProvider.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },JQueryHtmlProvider);
 Implementation.Tags=function()
 {
  SC$1.$cctor();
  return SC$1.Tags;
 };
 Implementation.Attr=function()
 {
  SC$1.$cctor();
  return SC$1.Attr;
 };
 Implementation.HtmlProvider=function()
 {
  SC$1.$cctor();
  return SC$1.HtmlProvider;
 };
 Default.OnLoad=function(init)
 {
  Implementation.HtmlProvider().OnDocumentReady(init);
 };
 Tags.Tags=function()
 {
  SC$1.$cctor();
  return SC$1.Tags$1;
 };
 Attr.Attr=function()
 {
  SC$1.$cctor();
  return SC$1.Attr$1;
 };
 SC$1.$cctor=function()
 {
  SC$1.$cctor=Global.ignore;
  SC$1.HtmlProvider=new JQueryHtmlProvider.New();
  SC$1.Attr=new AttributeBuilder.New(Implementation.HtmlProvider());
  SC$1.Tags=new TagBuilder.New(Implementation.HtmlProvider());
  SC$1.Tags$1=Implementation.Tags();
  SC$1.Attr$1=Implementation.Attr();
 };
 JQueryEventSupport=Events.JQueryEventSupport=Runtime.Class({
  OnMouse:function(name,f,el)
  {
   Global.jQuery(el.get_Body()).on(name,function(ev)
   {
    return f(el,{
     X:ev.pageX,
     Y:ev.pageY,
     Event:ev
    });
   });
  },
  OnError:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("error",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnSubmit:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("submit",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnSelect:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("select",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnScroll:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("scroll",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnResize:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("resize",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnUnLoad:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("unload",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnLoad:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("load",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnFocus:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("focus",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnKeyUp:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("keyup",function(ev)
   {
    return(f(el))({
     KeyCode:ev.keyCode,
     Event:ev
    });
   });
  },
  OnKeyPress:function(f,el)
  {
   Global.jQuery(el.get_Body()).keypress(function(ev)
   {
    return(f(el))({
     CharacterCode:ev.which,
     Event:ev
    });
   });
  },
  OnKeyDown:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("keydown",function(ev)
   {
    return(f(el))({
     KeyCode:ev.keyCode,
     Event:ev
    });
   });
  },
  OnMouseUp:function(f,el)
  {
   this.OnMouse("mouseup",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseOut:function(f,el)
  {
   this.OnMouse("mouseout",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseMove:function(f,el)
  {
   this.OnMouse("mousemove",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseLeave:function(f,el)
  {
   this.OnMouse("mouseleave",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseEnter:function(f,el)
  {
   this.OnMouse("mouseenter",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnMouseDown:function(f,el)
  {
   this.OnMouse("mousedown",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnDoubleClick:function(f,el)
  {
   this.OnMouse("dblclick",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnClick:function(f,el)
  {
   this.OnMouse("click",function($1,$2)
   {
    return(f($1))($2);
   },el);
  },
  OnChange:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("change",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnBlur:function(f,el)
  {
   Global.jQuery(el.get_Body()).on("blur",function(ev)
   {
    return(f(el))(ev);
   });
  },
  OnEvent:function(ev,f,el)
  {
   Global.jQuery(el.get_Body()).on(ev,function(ev$1)
   {
    return(f(el))(ev$1);
   });
  }
 },Obj,JQueryEventSupport);
 JQueryEventSupport.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },JQueryEventSupport);
 EventsPervasives.Events=function()
 {
  SC$2.$cctor();
  return SC$2.Events;
 };
 SC$2.$cctor=function()
 {
  SC$2.$cctor=Global.ignore;
  SC$2.Events=new JQueryEventSupport.New();
 };
 Target=JQueryUI.Target=Runtime.Class({
  get_Get:function()
  {
   return this.$==1?this.$0:this.$==2?"#"+this.$0:this.$0;
  }
 },null,Target);
 PositionConfiguration=JQueryUI.PositionConfiguration=Runtime.Class({
  set_Offset:function(pos)
  {
   this.offsetTuple=pos;
   this.offset=Global.String(pos[0])+" "+Global.String(pos[1]);
  },
  get_Offset:function()
  {
   return this.offsetTuple;
  },
  set_Of:function(t)
  {
   this.ofTarget=t;
   this.of=t.get_Get();
  },
  get_Of:function()
  {
   return this.ofTarget;
  }
 },Obj,PositionConfiguration);
 PositionConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.My=null;
  this.At=null;
  this.Collision=null;
  this.By=null;
  this.Bgiframe=null;
 },PositionConfiguration);
 Pagelet$1=Utils.Pagelet=Runtime.Class({
  get_Body:function()
  {
   return this.element.get_Body();
  },
  Render:function()
  {
   this.element.Render();
  }
 },Pagelet,Pagelet$1);
 Pagelet$1.New=Runtime.Ctor(function()
 {
  Pagelet.New.call(this);
 },Pagelet$1);
 Operators$1.add=function(el,inner)
 {
  var e;
  e=Enumerator.Get(inner);
  try
  {
   while(e.MoveNext())
    el.AppendI(e.Current());
  }
  finally
  {
   if(typeof e=="object"&&"Dispose"in e)
    e.Dispose();
  }
  return el;
 };
 Operators$1.OnBeforeRender=function(f,w)
 {
  var r;
  r=w.Render;
  w.Render=function()
  {
   f(w);
   r.apply(w);
  };
 };
 Operators$1.OnAfterRender=function(f,w)
 {
  var r;
  r=w.Render;
  w.Render=function()
  {
   r.apply(w);
   f(w);
  };
 };
 Position=JQueryUI.Position=Runtime.Class({},Pagelet$1,Position);
 Position.New2=function(el)
 {
  return Position.New(el,new PositionConfiguration.New());
 };
 Position.New=function(el,conf)
 {
  var a;
  function f(el$1)
  {
   Global.jQuery(el$1.Dom).position(conf);
  }
  a=new Position.New$1();
  a.element=(function(w)
  {
   Operators$1.OnAfterRender(f,w);
  }(el),el);
  return a;
 };
 Position.New$1=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Position);
 AutocompleteConfiguration=JQueryUI.AutocompleteConfiguration=Runtime.Class({
  setCallback:function(scall)
  {
   return this.source=function(x,y)
   {
    scall([x,y]);
   };
  },
  set_Source:function(s)
  {
   if(s.$==1)
    this.source=s.$0;
   else
    if(s.$==2)
     this.source=s.$0;
    else
     if(s.$==3)
      this.setCallback(s.$0);
     else
      this.source=s.$0;
  }
 },Obj,AutocompleteConfiguration);
 AutocompleteConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.appendTo=null;
  this.autoFocus=null;
  this.delay=0;
  this.disabled=null;
  this.minLength=0;
  this.Position=null;
 },AutocompleteConfiguration);
 ACOption.New=function(label,value)
 {
  return{
   label:label,
   value:value
  };
 };
 Autocomplete=JQueryUI.Autocomplete=Runtime.Class({
  OnSelect:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("autocompleteselect",function(x,y)
    {
     (f(x))(y.item);
    });
   },this);
  },
  OnFocus:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("autocompletefocus",function(x,y)
    {
     (f(x))(y.item);
    });
   },this);
  },
  OnClose:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("autocompleteclose",function(x)
    {
     f(x);
    });
   },this);
  },
  OnOpen:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("autocompleteopen",function(x)
    {
     f(x);
    });
   },this);
  },
  OnResponse:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("autocompleteresponse",function(x,y)
    {
     (f(x))(y.content);
    });
   },this);
  },
  OnChange:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("autocompletechange",function(x,y)
    {
     (f(x))(y.item);
    });
   },this);
  },
  OnSearch:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("autocompletesearch",function(x)
    {
     f(x);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("autocompletecreate",function(x)
    {
     f(x);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).autocomplete("widget");
  }
 },Pagelet$1,Autocomplete);
 Autocomplete.NewConf=function(conf)
 {
  return Autocomplete.New2(Tags.Tags().NewTag("input",[]),conf);
 };
 Autocomplete.New=function()
 {
  return Autocomplete.New2(Tags.Tags().NewTag("input",[]),new AutocompleteConfiguration.New());
 };
 Autocomplete.NewElm=function(el)
 {
  return Autocomplete.New2(el,new AutocompleteConfiguration.New());
 };
 Autocomplete.New2=function(el,conf)
 {
  var a;
  a=new Autocomplete.New$1();
  Operators.OnAfterRender(function(el$1)
  {
   Global.jQuery(el$1.Dom).autocomplete(conf);
  },el);
  a.element=el;
  return a;
 };
 Autocomplete.New$1=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Autocomplete);
 Simple.ShowErrors=function(submit)
 {
  return Controls.ShowErrors([],submit);
 };
 Simple.Button=function(label,f)
 {
  return((function(a)
  {
   return(Controls.Button())(a);
  }(label))(List.ofArray([(Controls.cls())("button btn-primary")])))(f);
 };
 Simple.Checkbox=function(lbl,target)
 {
  return Controls.Checkbox(lbl,List.T.Empty,target,[],[]);
 };
 Simple.TextAreaWithError=function(lbl,target,submit)
 {
  var c;
  return(((c=Controls.TextAreaWithError(lbl),function(a)
  {
   var c$1;
   c$1=c(a);
   return function(t)
   {
    return c$1([t[0],t[1],t[2]]);
   };
  })(List.T.Empty))([target,List.T.Empty,List.T.Empty]))(submit);
 };
 Simple.TextArea=function(lbl,target)
 {
  return Controls.TextArea(lbl,List.T.Empty,target,[],List.T.Empty);
 };
 Simple.InputPasswordWithError=function(lbl,target,submit)
 {
  var c;
  return(((c=Controls.InputPasswordWithError(lbl),function(a)
  {
   var c$1;
   c$1=c(a);
   return function(t)
   {
    return c$1([t[0],t[1],t[2]]);
   };
  })(List.T.Empty))([target,List.T.Empty,List.T.Empty]))(submit);
 };
 Simple.InputPassword=function(lbl,target)
 {
  return Controls.InputPassword(lbl,List.T.Empty,target,[],List.T.Empty);
 };
 Simple.InputWithError=function(lbl,target,submit)
 {
  var c;
  return(((c=Controls.InputWithError(lbl),function(a)
  {
   var c$1;
   c$1=c(a);
   return function(t)
   {
    return c$1([t[0],t[1],t[2]]);
   };
  })(List.T.Empty))([target,List.T.Empty,List.T.Empty]))(submit);
 };
 Simple.Input=function(lbl,target)
 {
  return Controls.Input(lbl,List.T.Empty,target,[],List.T.Empty);
 };
 Controls.ShowErrors=function(extras,submit)
 {
  return Doc.ShowErrors(submit,function(a)
  {
   return a.$==0?Doc$1.get_Empty():Doc$1.Element("div",extras,[Doc$1.Element("div",List.ofArray([(Controls.cls())("alert alert-danger")]),Seq.map(function(m)
   {
    return Doc$1.Element("p",[],[Doc$1.TextNode(m.message)]);
   },a))]);
  });
 };
 Controls.Button=function()
 {
  SC$3.$cctor();
  return SC$3.Button;
 };
 Controls.TextAreaWithError=Runtime.Curried3(function(lbl,e,t)
 {
  var t$1,l,t$2;
  t$1=t[0];
  l=t[1];
  t$2=t[2];
  return function(s)
  {
   return Controls.__InputWithError(Doc$1.InputArea,lbl,e,t$1,l,t$2,s);
  };
 });
 Controls.InputPasswordWithError=Runtime.Curried3(function(lbl,e,t)
 {
  var t$1,l,t$2;
  t$1=t[0];
  l=t[1];
  t$2=t[2];
  return function(s)
  {
   return Controls.__InputWithError(Doc$1.PasswordBox,lbl,e,t$1,l,t$2,s);
  };
 });
 Controls.InputWithError=Runtime.Curried3(function(lbl,e,t)
 {
  var t$1,l,t$2;
  t$1=t[0];
  l=t[1];
  t$2=t[2];
  return function(s)
  {
   return Controls.__InputWithError(Doc$1.Input,lbl,e,t$1,l,t$2,s);
  };
 });
 Controls.__InputWithError=function(inputFun,lbl,extras,target,labelExtras,targetExtras,submitView)
 {
  var p,view,errorOpt,errorClassOpt;
  p=(view=View.Map(function(res)
  {
   var $1;
   return(res.$==1?res.$0.$==0||($1=res.$0,false):true)?[null,null]:[{
    $:1,
    $0:List.reduce(function(a,b)
    {
     return a+"; "+b;
    },List.map(function(e)
    {
     return e.message;
    },$1))
   },{
    $:1,
    $0:"has-error"
   }];
  },View$1.Through$1(submitView,target)),[View.Map(function(t)
  {
   return t[0];
  },view),View.Map(function(t)
  {
   return t[1];
  },view)]);
  errorOpt=p[0];
  errorClassOpt=p[1];
  return Doc$1.Element("div",List.ofSeq(Seq.delay(function()
  {
   return Seq.append([(Controls.cls())("form-group")],Seq.delay(function()
   {
    return Seq.append([AttrModule.DynamicClass("has-error",errorClassOpt,function(opt)
    {
     return opt!=null;
    })],Seq.delay(function()
    {
     return extras;
    }));
   }));
  })),List.ofSeq(Seq.delay(function()
  {
   return Seq.append([Doc$1.Element("label",labelExtras,[Doc$1.TextNode(lbl)])],Seq.delay(function()
   {
    return Seq.append([inputFun(new List.T({
     $:1,
     $0:(Controls.cls())("form-control"),
     $1:targetExtras
    }),target)],Seq.delay(function()
    {
     return[Doc$1.BindView(function(a)
     {
      return a!=null&&a.$==1?Doc$1.Element("span",[(Controls.cls())("help-block")],[Doc$1.TextNode(a.$0)]):Doc$1.get_Empty();
     },errorOpt)];
    }));
   }));
  })));
 };
 Controls.Radio=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc$1.Element("div",new List.T({
   $:1,
   $0:(Controls.cls())("radio"),
   $1:extras
  }),[Doc$1.Element("label",labelExtras,[Doc$1.Radio(targetExtras,true,target),Doc$1.TextNode(lbl)])]);
 };
 Controls.Checkbox=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc$1.Element("div",new List.T({
   $:1,
   $0:(Controls.cls())("checkbox"),
   $1:extras
  }),[Doc$1.Element("label",labelExtras,[Doc$1.CheckBox(targetExtras,target),Doc$1.TextNode(lbl)])]);
 };
 Controls.TextArea=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc$1.Element("div",new List.T({
   $:1,
   $0:(Controls.cls())("form-group"),
   $1:extras
  }),[Doc$1.Element("label",labelExtras,[Doc$1.TextNode(lbl)]),Doc$1.InputArea(new List.T({
   $:1,
   $0:(Controls.cls())("form-control"),
   $1:targetExtras
  }),target)]);
 };
 Controls.InputPassword=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc$1.Element("div",new List.T({
   $:1,
   $0:(Controls.cls())("form-group"),
   $1:extras
  }),[Doc$1.Element("label",labelExtras,[Doc$1.TextNode(lbl)]),Doc$1.PasswordBox(new List.T({
   $:1,
   $0:(Controls.cls())("form-control"),
   $1:targetExtras
  }),target)]);
 };
 Controls.Input=function(lbl,extras,target,labelExtras,targetExtras)
 {
  return Doc$1.Element("div",new List.T({
   $:1,
   $0:(Controls.cls())("form-group"),
   $1:extras
  }),[Doc$1.Element("label",labelExtras,[Doc$1.TextNode(lbl)]),Doc$1.Input(new List.T({
   $:1,
   $0:(Controls.cls())("form-control"),
   $1:targetExtras
  }),target)]);
 };
 Controls.Class=function()
 {
  SC$3.$cctor();
  return SC$3.Class;
 };
 Controls.cls=function()
 {
  SC$3.$cctor();
  return SC$3.cls;
 };
 SC$3.$cctor=function()
 {
  SC$3.$cctor=Global.ignore;
  SC$3.cls=AttrModule.Class;
  SC$3.Class=AttrModule.Class;
  SC$3.Button=Runtime.Curried3(Doc$1.Button);
 };
 LegacyHelper.EmbedPagelet=function(pagelet,render)
 {
  return Doc$1.EmbedView(LegacyHelper.ViewPagelet(pagelet,render));
 };
 LegacyHelper.ViewPagelet=function(pagelet,render)
 {
  return View.Map(function(el)
  {
   render();
   return Doc$1.StaticProxy(el);
  },View.Const(pagelet.Dom));
 };
 FutoComplete=UI.FutoComplete=Runtime.Class({
  GenButton:function(buttonText)
  {
   var $this,btn;
   $this=this;
   btn=Doc$1.Button(buttonText,[],function()
   {
    var _;
    Concurrency.Start((_=null,Concurrency.Delay(function()
    {
     var fcContId,c;
     fcContId=(c=Guid.NewGuid(),Global.String(c));
     $this.get_AcMinLenVar().Set([0,{
      $:1,
      $0:fcContId
     }]);
     return Concurrency.Combine(Concurrency.While(function()
     {
      return self.document.getElementsByClassName(fcContId).length===0;
     },Concurrency.Delay(function()
     {
      return Concurrency.Bind(Concurrency.Sleep(100),function()
      {
       return Concurrency.Return(null);
      });
     })),Concurrency.Delay(function()
     {
      function rcall()
      {
       var acObj,m;
       while(true)
        {
         m=View.TryGet($this.get_DocView());
         if(m!=null)
          {
           $this.get_Input().value="";
           Global.jQuery(m.$0[0].element.Dom).autocomplete("search");
           acObj=self.document.getElementById($this.get_AcId());
           acObj.className=Strings.Replace(acObj.className,fcContId,"");
           return;
          }
        }
      }
      rcall();
      return Concurrency.Zero();
     }));
    })),null);
   });
   btn.Append(Doc$1.Element("span",[AttrProxy.Create("class","caret")],[]));
   return btn;
  },
  get_Input:function()
  {
   return this.el.Dom;
  },
  get_AcId:function()
  {
   return this.acId;
  },
  get_DocView:function()
  {
   return this.docView;
  },
  get_AcMinLenVar:function()
  {
   return this.acMinLenVar;
  },
  get_AcListVar:function()
  {
   return this.acListVar;
  }
 },Obj,FutoComplete);
 FutoComplete.GenInput=function(acId,sourceList,onSelectHanlder)
 {
  var fc;
  function a(a$1,d)
  {
   return d;
  }
  fc=new FutoComplete.New(acId,sourceList,onSelectHanlder);
  return[fc,Doc$1.BindView(function($1)
  {
   return a($1[0],$1[1]);
  },fc.get_DocView())];
 };
 FutoComplete.GenAll=function(acId,sourceList,buttonText,onSelectHanlder)
 {
  var fc;
  function a(a$1,d)
  {
   return d;
  }
  fc=new FutoComplete.New(acId,sourceList,onSelectHanlder);
  return[fc,Doc$1.Element("span",[AttrProxy.Create("id",Global.String(acId)+"_all")],[Doc$1.BindView(function($1)
  {
   return a($1[0],$1[1]);
  },fc.get_DocView()),fc.GenButton(buttonText)])];
 };
 FutoComplete.New=Runtime.Ctor(function(acId,sourceList,onSelectHanlder)
 {
  var $this,input;
  $this=this;
  Obj.New.call(this);
  this.acId=acId;
  this.el=(input=Tags.Tags().NewTag("input",[]),(input.Dom.id=this.acId,input));
  this.acListVar=Var$1.Create$1(sourceList);
  this.acMinLenVar=Var$1.Create$1([1,null]);
  this.docView=View.Map2(function(source,t)
  {
   var contIdOpt,conf,_this,ac,h;
   contIdOpt=t[1];
   conf=new AutocompleteConfiguration.New();
   conf.source=source;
   conf.minLength=t[0];
   if(contIdOpt!=null)
    {
     _this=$this.el;
     _this.HtmlProvider.AddClass(_this.get_Body(),contIdOpt.$0);
    }
   ac=Autocomplete.New2($this.el,conf);
   if(onSelectHanlder!=null&&onSelectHanlder.$==1)
    {
     h=onSelectHanlder.$0;
     ac.OnSelect(h);
     ac.OnFocus(h);
    }
   return[ac,LegacyHelper.EmbedPagelet($this.el,function()
   {
    ac.Render();
   })];
  },this.acListVar.get_View(),this.acMinLenVar.get_View());
  this.el.Dom.id=this.acId;
 },FutoComplete);
 AccordionIconConfiguration.get_Default=function()
 {
  return AccordionIconConfiguration.New("ui-icon-triangle-1-e","ui-icon-triangle-1-s");
 };
 AccordionIconConfiguration.New=function(Header,HeaderSelected)
 {
  return{
   header:Header,
   headerSelected:HeaderSelected
  };
 };
 AccordionConfiguration=JQueryUI.AccordionConfiguration=Runtime.Class({},Obj,AccordionConfiguration);
 AccordionConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Active=0;
  this.Animated=null;
  this.Collapsible=null;
  this.Disabled=null;
  this.Event=null;
  this.Header=null;
  this.HeightStyle=null;
  this.Icons=null;
 },AccordionConfiguration);
 Accordion=JQueryUI.Accordion=Runtime.Class({
  OnActivate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("accordionactivate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnBeforeActivate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("accordionbeforeactivate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("accordioncreate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).accordion("widget");
  }
 },Pagelet$1,Accordion);
 Accordion.New2=function(els)
 {
  return Accordion.New1(els,new AccordionConfiguration.New());
 };
 Accordion.New1=function(els,conf)
 {
  var a,x,a$1;
  function m(header,el)
  {
   var a$2,a$3;
   return List.ofArray([(a$2=[(a$3=[Attr.Attr().NewAttr("href","#"),Tags.Tags().text(header)],Tags.Tags().NewTag("a",a$3))],Tags.Tags().NewTag("h3",a$2)),Tags.Tags().NewTag("div",[el])]);
  }
  function f(el)
  {
   Global.jQuery(el.Dom).accordion(conf);
  }
  a=new Accordion.New();
  a.element=(x=(a$1=List.concat(List.map(function($1)
  {
   return m($1[0],$1[1]);
  },els)),Tags.Tags().NewTag("div",a$1)),(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(x),x));
  return a;
 };
 Accordion.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Accordion);
 ButtonIconsConfiguration.get_Default=function()
 {
  return ButtonIconsConfiguration.New("ui-icon-gear","ui-icon-triangle-1-s");
 };
 ButtonIconsConfiguration.New=function(Primary,Secondary)
 {
  return{
   primary:Primary,
   secondary:Secondary
  };
 };
 ButtonConfiguration=JQueryUI.ButtonConfiguration=Runtime.Class({},Obj,ButtonConfiguration);
 ButtonConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Disabled=null;
  this.Icons=null;
  this.Label=null;
  this.Text=null;
 },ButtonConfiguration);
 Button=JQueryUI.Button=Runtime.Class({
  OnClick:function(f)
  {
   var $this,a;
   function a$1(a$2,ev)
   {
    return $this.isEnabled?f(ev):null;
   }
   $this=this;
   a=this.element;
   EventsPervasives.Events().OnClick(function($1)
   {
    return function($2)
    {
     return a$1($1,$2);
    };
   },a);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("buttoncreate",function(x)
    {
     f(x);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).button("widget");
  },
  Enable:function()
  {
   this.isEnabled=true;
   Global.jQuery(this.element.Dom).button("enable");
  },
  Disable:function()
  {
   this.isEnabled=false;
   Global.jQuery(this.element.Dom).button("disable");
  },
  get_IsEnabled:function()
  {
   return this.isEnabled;
  }
 },Pagelet$1,Button);
 Button.New4=function(label)
 {
  var r;
  return Button.New3((r=new ButtonConfiguration.New(),r.label=label,r));
 };
 Button.New3=function(conf)
 {
  return Button.New1(Tags.Tags().NewTag("button",[]),conf);
 };
 Button.New2=function(genEl,conf)
 {
  var button,x;
  function f(el)
  {
   Global.jQuery(el.Dom).button(conf);
  }
  button=new Button.New();
  button.isEnabled=true;
  button.element=(x=genEl(),(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(x),x));
  return button;
 };
 Button.New1=function(el,conf)
 {
  var b;
  b=new Button.New();
  b.isEnabled=true;
  Operators.OnAfterRender(function(el$1)
  {
   Global.jQuery(el$1.Dom).button(conf);
  },el);
  b.element=el;
  return b;
 };
 Button.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Button);
 DatepickerShowOptionsConfiguration.get_Default=function()
 {
  return DatepickerShowOptionsConfiguration.New("up");
 };
 DatepickerShowOptionsConfiguration.New=function(Direction)
 {
  return{
   showOptions:Direction
  };
 };
 DatepickerConfiguration=JQueryUI.DatepickerConfiguration=Runtime.Class({},Obj,DatepickerConfiguration);
 DatepickerConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.AltField=null;
  this.AltFormat=null;
  this.AppendText=null;
  this.AutoSize=null;
  this.ButtonImage=null;
  this.ButtonImageOnly=null;
  this.ButtonText=null;
  this.CalculateWeek=null;
  this.ChangeMonth=null;
  this.ChangeYear=null;
  this.CloseText=null;
  this.ConstrainInput=null;
  this.CurrentText=null;
  this.DateFormat=null;
  this.DayNames=null;
  this.DayNamesMin=null;
  this.DayNamesShort=null;
  this.DefaultDate=null;
  this.Duration=null;
  this.FirstDay=0;
  this.GotoCurrent=null;
  this.HideIfNoPrevNext=null;
  this.isRTL=null;
  this.MaxDate=null;
  this.MinDate=null;
  this.MonthNames=null;
  this.MonthNamesShort=null;
  this.NavigationAsDateFormat=null;
  this.NextText=null;
  this.NumberOfMonths=null;
  this.OnChangeMonthYear=null;
  this.OnClose=null;
  this.OnSelect=null;
  this.PrevText=null;
  this.SelectOtherMonths=null;
  this.ShortYearCutoff=0;
  this.ShowAnim=null;
  this.ShowButtonPanel=null;
  this.ShowCurrentAtPos=0;
  this.ShowMonthAfterYear=null;
  this.ShowOn=null;
  this.ShowOptions=null;
  this.ShowOtherMonths=null;
  this.ShowWeek=null;
  this.StepMonths=0;
  this.WeekHeader=null;
  this.YearRange=null;
  this.YearSuffix=null;
 },DatepickerConfiguration);
 Datepicker=JQueryUI.Datepicker=Runtime.Class({
  OnSelect:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    function a(a$1,d)
    {
     return f(Global.jQuery($this.element.Dom).datepicker("getDate"),d);
    }
    Global.jQuery($this.element.Dom).datepicker("option",{
     onSelect:function(x,y)
     {
      ((function($1)
      {
       return function($2)
       {
        return a($1,$2);
       };
      }(x))(y));
     }
    });
   },this);
  },
  OnClose:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    function a(a$1,d)
    {
     return f(Global.jQuery($this.element.Dom).datepicker("getDate"),d);
    }
    Global.jQuery($this.element.Dom).datepicker("option",{
     onClose:function(x,y)
     {
      ((function($1)
      {
       return function($2)
       {
        return a($1,$2);
       };
      }(x))(y));
     }
    });
   },this);
  },
  OnChangeMonthYear:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).datepicker("option",{
     onChangeMonthYear:function(x,y,z)
     {
      ((f(x))(y))(z);
     }
    });
   },this);
  },
  OnBeforeShowDay:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).datepicker("option",{
     beforeShowDay:function(x)
     {
      f(x);
     }
    });
   },this);
  },
  OnBeforeShow:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    function a(a$1,d)
    {
     return f(Global.jQuery($this.element.Dom).datepicker("getDate"),d);
    }
    Global.jQuery($this.element.Dom).datepicker("option",{
     beforeShow:function(x,y)
     {
      ((function($1)
      {
       return function($2)
       {
        return a($1,$2);
       };
      }(x))(y));
     }
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).datepicker("widget");
  }
 },Pagelet$1,Datepicker);
 Datepicker.New4=function()
 {
  return Datepicker.New1(Tags.Tags().NewTag("div",[]),new DatepickerConfiguration.New());
 };
 Datepicker.New3=function(conf)
 {
  return Datepicker.New1(Tags.Tags().NewTag("div",[]),conf);
 };
 Datepicker.New2=function(el)
 {
  return Datepicker.New1(el,new DatepickerConfiguration.New());
 };
 Datepicker.New1=function(el,conf)
 {
  var dp;
  dp=new Datepicker.New();
  dp.element=el;
  Operators.OnAfterRender(function(el$1)
  {
   Global.jQuery(el$1.Dom).datepicker(conf);
  },el);
  return dp;
 };
 Datepicker.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Datepicker);
 DialogButton=JQueryUI.DialogButton=Runtime.Class({
  set_click:function(f)
  {
   function f$1(el,ev)
   {
    return f(Dialog.OfExisting(el),ev);
   }
   this.click=function(e)
   {
    ((function($1)
    {
     return function($2)
     {
      return f$1($1,$2);
     };
    }({
     Dom:this,
     Render:Global.ignore
    }))(e));
   };
  }
 },Obj,DialogButton);
 DialogButton.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Text=null;
 },DialogButton);
 DialogConfiguration=JQueryUI.DialogConfiguration=Runtime.Class({},Obj,DialogConfiguration);
 DialogConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.AppendTo=null;
  this.AutoOpen=null;
  this.Buttons=null;
  this.CloseOnEscape=null;
  this.CloseText=null;
  this.DialogClass=null;
  this.Draggable=null;
  this.Height=0;
  this.Hide=null;
  this.MaxHeight=0;
  this.MaxWidth=0;
  this.MinHeight=0;
  this.MinWidth=0;
  this.Modal=null;
  this.Position=null;
  this.Resizable=null;
  this.Show=null;
  this.Title=null;
  this.Width=0;
 },DialogConfiguration);
 Dialog=JQueryUI.Dialog=Runtime.Class({
  OnClose:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogclose",function(x)
    {
     f(x);
    });
   },this);
  },
  OnResizeStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogresizestop",function(x)
    {
     f(x);
    });
   },this);
  },
  OnResize:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogresize",function(x)
    {
     f(x);
    });
   },this);
  },
  OnResizeStart:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogresizestart",function(x)
    {
     f(x);
    });
   },this);
  },
  OnDragStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogdragstop",function(x)
    {
     f(x);
    });
   },this);
  },
  OnDrag:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogdrag",function(x)
    {
     f(x);
    });
   },this);
  },
  OnDragStart:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogdragstart",function(x)
    {
     f(x);
    });
   },this);
  },
  OnFocus:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogfocus",function(x)
    {
     f(x);
    });
   },this);
  },
  OnOpen:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogopen",function(x)
    {
     f(x);
    });
   },this);
  },
  OnBeforeClose:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogbeforeclose",function(x)
    {
     f(x);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dialogcreate",function(x)
    {
     f(x);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).dialog("widget");
  }
 },Pagelet$1,Dialog);
 Dialog.New2=function(el)
 {
  return Dialog.New1(el,new DialogConfiguration.New());
 };
 Dialog.New1=function(el,conf)
 {
  var d;
  d=new Dialog.New();
  Operators.OnAfterRender(function(el$1)
  {
   Global.jQuery(el$1.Dom).dialog(conf);
  },el);
  d.element=el;
  return d;
 };
 Dialog.OfExisting=function(el)
 {
  var r;
  r=new Dialog.New();
  r.element=el;
  return r;
 };
 Dialog.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Dialog);
 MenuConfiguration=JQueryUI.MenuConfiguration=Runtime.Class({},Obj,MenuConfiguration);
 MenuConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Disabled=null;
  this.Icons=null;
  this.Menus=null;
  this.Position=null;
  this.Role=null;
 },MenuConfiguration);
 Menu=JQueryUI.Menu=Runtime.Class({
  OnSelect:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("menuselect",function(x,y)
    {
     (f(x))(y.item);
    });
   },this);
  },
  OnBlur:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("menublur",function(x,y)
    {
     (f(x))(y.item);
    });
   },this);
  },
  OnFocus:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("menufocus",function(x,y)
    {
     (f(x))(y.item);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("menucreate",function(x)
    {
     f(x);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).menu("widget");
  }
 },Pagelet$1,Menu);
 Menu.New2=function(el)
 {
  return Menu.New1(el,new MenuConfiguration.New());
 };
 Menu.New1=function(el,conf)
 {
  var d;
  d=new Menu.New();
  Operators.OnAfterRender(function(el$1)
  {
   Global.jQuery(el$1.Dom).menu(conf);
  },el);
  d.element=el;
  return d;
 };
 Menu.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Menu);
 ProgressbarConfiguration=JQueryUI.ProgressbarConfiguration=Runtime.Class({},Obj,ProgressbarConfiguration);
 ProgressbarConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Disabled=null;
  this.Value=0;
  this.Max=0;
 },ProgressbarConfiguration);
 Progressbar=JQueryUI.Progressbar=Runtime.Class({
  OnComplete:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("progressbarcomplete",function(x)
    {
     f(x);
    });
   },this);
  },
  OnChange:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("progressbarchange",function(x)
    {
     f(x);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("progressbarcreate",function(x)
    {
     f(x);
    });
   },this);
  },
  set_Value:function(v)
  {
   Global.jQuery(this.element.Dom).progressbar("value",v);
  },
  get_Value:function()
  {
   return Global.jQuery(this.element.Dom).progressbar("value");
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).progressbar("widget");
  }
 },Pagelet$1,Progressbar);
 Progressbar.New4=function()
 {
  return Progressbar.New1(Tags.Tags().NewTag("div",[]),new ProgressbarConfiguration.New());
 };
 Progressbar.New3=function(conf)
 {
  return Progressbar.New1(Tags.Tags().NewTag("div",[]),conf);
 };
 Progressbar.New2=function(el)
 {
  return Progressbar.New1(el,new ProgressbarConfiguration.New());
 };
 Progressbar.New1=function(el,conf)
 {
  var pb;
  pb=new Progressbar.New();
  pb.element=el;
  Operators.OnAfterRender(function(el$1)
  {
   Global.jQuery(el$1.Dom).progressbar(conf);
  },el);
  return pb;
 };
 Progressbar.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Progressbar);
 SliderConfiguration=JQueryUI.SliderConfiguration=Runtime.Class({},Obj,SliderConfiguration);
 SliderConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Animate=null;
  this.Disabled=null;
  this.Max=0;
  this.Min=0;
  this.Orientation=null;
  this.Range=null;
  this.Step=0;
  this.Value=0;
  this.Values=null;
 },SliderConfiguration);
 Slider=JQueryUI.Slider=Runtime.Class({
  OnStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("slidestop",function(x)
    {
     f(x);
    });
   },this);
  },
  OnSlide:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("slide",function(x)
    {
     f(x);
    });
   },this);
  },
  OnChange:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("slidechange",function(x)
    {
     f(x);
    });
   },this);
  },
  OnStart:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("slidestart",function(x)
    {
     f(x);
    });
   },this);
  },
  set_Values:function(v)
  {
   Global.jQuery(this.element.Dom).slider("values",v);
  },
  get_Values:function()
  {
   return Global.jQuery(this.element.Dom).slider("values");
  },
  set_Value:function(v)
  {
   Global.jQuery(this.element.Dom).slider("value",v);
  },
  get_Value:function()
  {
   return Global.jQuery(this.element.Dom).slider("value");
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).slider("widget");
  }
 },Pagelet$1,Slider);
 Slider.New2=function()
 {
  return Slider.New1(new SliderConfiguration.New());
 };
 Slider.New1=function(conf)
 {
  var s,x;
  function f(el)
  {
   Global.jQuery(el.Dom).slider(conf);
  }
  s=new Slider.New();
  s.element=(x=Tags.Tags().NewTag("div",[]),(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(x),x));
  return s;
 };
 Slider.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Slider);
 SpinnerConfiguration=JQueryUI.SpinnerConfiguration=Runtime.Class({},Obj,SpinnerConfiguration);
 SpinnerConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Culture=null;
  this.Disabled=null;
  this.Icons=null;
  this.Incremental=null;
  this.Max=0;
  this.Min=0;
  this.NumberFormat=null;
  this.Page=0;
  this.Step=0;
 },SpinnerConfiguration);
 Spinner=JQueryUI.Spinner=Runtime.Class({
  OnStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("spinnerstop",function(x)
    {
     f(x);
    });
   },this);
  },
  OnSpin:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("spinnerspin",function(x)
    {
     (f(x))($y.value);
    });
   },this);
  },
  OnChange:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("spinnerchange",function(x)
    {
     f(x);
    });
   },this);
  },
  OnStart:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("spinnerstart",function(x)
    {
     f(x);
    });
   },this);
  },
  set_Value:function(v)
  {
   Global.jQuery(this.element.Dom).spinner("value",v);
  },
  get_Value:function()
  {
   return Global.jQuery(this.element.Dom).spinner("value");
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).spinner("widget");
  }
 },Pagelet$1,Spinner);
 Spinner.New2=function()
 {
  return Spinner.New1(new SpinnerConfiguration.New());
 };
 Spinner.New1=function(conf)
 {
  var s,x;
  function f(el)
  {
   Global.jQuery(el.Dom).spinner(conf);
  }
  s=new Spinner.New();
  s.element=(x=Tags.Tags().NewTag("div",[]),(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(x),x));
  return s;
 };
 Spinner.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Spinner);
 DraggablecursorAtConfiguration.get_Default=function()
 {
  return DraggablecursorAtConfiguration.New(1,1);
 };
 DraggablecursorAtConfiguration.New=function(Top,Left)
 {
  return{
   top:Top,
   left:Left
  };
 };
 DraggableStackConfiguration.get_Default=function()
 {
  return DraggableStackConfiguration.New("prouducts",50);
 };
 DraggableStackConfiguration.New=function(Group,Min)
 {
  return{
   group:Group,
   min:Min
  };
 };
 DraggableConfiguration=JQueryUI.DraggableConfiguration=Runtime.Class({},Obj,DraggableConfiguration);
 DraggableConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.AddClasses=null;
  this.AppendTo=null;
  this.Axis=null;
  this.Cancel=null;
  this.ConnectToSortable=null;
  this.Containment=null;
  this.Cursor=null;
  this.CursorAt=null;
  this.Delay=0;
  this.Disabled=null;
  this.Distance=0;
  this.Grid=null;
  this.Handle=null;
  this.Helper=null;
  this.IframeFix=null;
  this.Opacity=0;
  this.RefreshPositions=null;
  this.Revert=null;
  this.RevertDuration=0;
  this.Scope=null;
  this.Scroll=null;
  this.ScrollSensitivity=0;
  this.ScrollSpeed=0;
  this.Snap=null;
  this.SnapMode=null;
  this.SnapTolerance=0;
  this.Stack=null;
  this.ZIndex=0;
 },DraggableConfiguration);
 Draggable=JQueryUI.Draggable=Runtime.Class({
  OnDrag:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("drag",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dragstop",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnStart:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dragstart",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dragcreate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).draggable("widget");
  }
 },Pagelet$1,Draggable);
 Draggable.New2=function(el)
 {
  return Draggable.New1(el,new DraggableConfiguration.New());
 };
 Draggable.New1=function(el,conf)
 {
  var a;
  function f(el$1)
  {
   Global.jQuery(el$1.Dom).draggable(conf);
  }
  a=new Draggable.New();
  a.element=(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(el),el);
  return a;
 };
 Draggable.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Draggable);
 DroppableConfiguration=JQueryUI.DroppableConfiguration=Runtime.Class({},Obj,DroppableConfiguration);
 DroppableConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Accept=null;
  this.ActiveClass=null;
  this.AddClasses=null;
  this.Disabled=null;
  this.Greedy=null;
  this.HoverClass=null;
  this.Scope=null;
  this.Tolerance=null;
 },DroppableConfiguration);
 Droppable=JQueryUI.Droppable=Runtime.Class({
  OnDrop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("drop",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnOut:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dropout",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnOver:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dropover",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnDeactivate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dropdeactivate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnActivate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dropactivate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("dropcreate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).droppable("widget");
  }
 },Pagelet$1,Droppable);
 Droppable.New2=function(el)
 {
  return Droppable.New1(el,new DroppableConfiguration.New());
 };
 Droppable.New1=function(el,conf)
 {
  var a;
  function f(el$1)
  {
   Global.jQuery(el$1.Dom).droppable(conf);
  }
  a=new Droppable.New();
  a.element=(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(el),el);
  return a;
 };
 Droppable.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Droppable);
 TabsAjaxOptionsConfiguration.get_Default=function()
 {
  return TabsAjaxOptionsConfiguration.New(false);
 };
 TabsAjaxOptionsConfiguration.New=function(async)
 {
  return{
   ajaxOptions:async
  };
 };
 TabsCookieConfiguration.get_Default=function()
 {
  return TabsCookieConfiguration.New(30);
 };
 TabsCookieConfiguration.New=function(expires)
 {
  return{
   cookie:expires
  };
 };
 TabsFxConfiguration.get_Dafault=function()
 {
  return TabsFxConfiguration.New("toggle");
 };
 TabsFxConfiguration.New=function(opacity)
 {
  return{
   fx:opacity
  };
 };
 TabsConfiguration=JQueryUI.TabsConfiguration=Runtime.Class({},Obj,TabsConfiguration);
 TabsConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Active=0;
  this.Collapsible=null;
  this.Disabled=null;
  this.Event=null;
  this.HeightStyle=null;
  this.Hide=null;
  this.Show=null;
 },TabsConfiguration);
 Tabs=JQueryUI.Tabs=Runtime.Class({
  OnBeforeActivate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("tabsbeforeactivate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnActivate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("tabsactivate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnBeforeLoad:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("tabsbeforeload",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnLoad:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("tabsload",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("tabscreate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  get_TabContainer:function()
  {
   return this.tabContainer;
  },
  Remove:function(ix)
  {
   Global.jQuery(this.tabContainer.Dom).children().eq(ix).remove();
   Global.jQuery(this.panelContainer.Dom).children().eq(ix).remove();
   Global.jQuery(this.element.Dom).tabs("refresh");
  },
  Add:function(el,label)
  {
   var id,tab,a,a$1,panel,a$2;
   id="id"+Math.round(Math.random()*100000000);
   tab=(a=[(a$1=[Attr.Attr().NewAttr("href","#"+id),Tags.Tags().text(label)],Tags.Tags().NewTag("a",a$1))],Tags.Tags().NewTag("li",a));
   panel=Operators.add((a$2=[Attr.Attr().NewAttr("id",id)],Tags.Tags().NewTag("div",a$2)),[el]);
   this.tabContainer.AppendI(tab);
   this.panelContainer.AppendI(panel);
   Global.jQuery(this.element.Dom).tabs("refresh");
  },
  Add$1:function(el,label,ix)
  {
   var id,tab,a,a$1,panel,a$2,_this,a$3,_this$1,a$4;
   id="id"+Math.round(Math.random()*100000000);
   tab=(a=[(a$1=[Attr.Attr().NewAttr("href","#"+id),Tags.Tags().text(label)],Tags.Tags().NewTag("a",a$1))],Tags.Tags().NewTag("li",a));
   panel=Operators.add((a$2=[Attr.Attr().NewAttr("id",id)],Tags.Tags().NewTag("div",a$2)),[el]);
   _this=Global.jQuery(this.tabContainer.Dom).children().eq(ix);
   a$3=tab.Dom;
   _this.before.apply(_this,[a$3]);
   _this$1=Global.jQuery(this.panelContainer.Dom).children().eq(ix);
   a$4=panel.Dom;
   _this$1.after.apply(_this$1,[a$4]);
   tab.Render();
   panel.Render();
   Global.jQuery(this.element.Dom).tabs("refresh");
  },
  get_Length:function()
  {
   return Global.jQuery(this.tabContainer.Dom).children().length;
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).tabs("widget");
  }
 },Pagelet$1,Tabs);
 Tabs.New2=function(els)
 {
  return Tabs.New1(els,new TabsConfiguration.New());
 };
 Tabs.New1=function(els,conf)
 {
  var p,itemPanels,tabs,a,panelContainer,tabs$1;
  function m(label,panel)
  {
   var id,a$1,a$2,a$3;
   id="id"+Math.round(Math.random()*100000000);
   return[(a$1=[(a$2=[Attr.Attr().NewAttr("href","#"+id),Tags.Tags().text(label)],Tags.Tags().NewTag("a",a$2))],Tags.Tags().NewTag("li",a$1)),Operators.add((a$3=[Attr.Attr().NewAttr("id",id)],Tags.Tags().NewTag("div",a$3)),[panel])];
  }
  function f(el)
  {
   Global.jQuery(el.Dom).tabs(conf);
  }
  p=(itemPanels=List.map(function($1)
  {
   return m($1[0],$1[1]);
  },els),(tabs=Tags.Tags().NewTag("ul",Seq.map(function(t)
  {
   return t[0];
  },itemPanels)),[(a=new List.T({
   $:1,
   $0:tabs,
   $1:List.map(function(t)
   {
    return t[1];
   },itemPanels)
  }),Tags.Tags().NewTag("div",a)),tabs]));
  panelContainer=p[0];
  tabs$1=new Tabs.New(p[1],panelContainer);
  tabs$1.element=(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(panelContainer),panelContainer);
  return tabs$1;
 };
 Tabs.New=Runtime.Ctor(function(tabContainer,panelContainer)
 {
  Pagelet$1.New.call(this);
  this.tabContainer=tabContainer;
  this.panelContainer=panelContainer;
 },Tabs);
 TooltipConfiguration=JQueryUI.TooltipConfiguration=Runtime.Class({},Obj,TooltipConfiguration);
 TooltipConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.Content=null;
  this.ContentFunction=null;
  this.Disabled=null;
  this.Hide=null;
  this.Items=null;
  this.Position=null;
  this.Show=null;
  this.TooltipClass=null;
  this.Track=null;
 },TooltipConfiguration);
 Tooltip=JQueryUI.Tooltip=Runtime.Class({
  OnOpen:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("tooltipopen",function(x)
    {
     f(x);
    });
   },this);
  },
  OnClose:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("tooltipclose",function(x)
    {
     f(x);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).tooltip("widget");
  }
 },Pagelet$1,Tooltip);
 Tooltip.New2=function()
 {
  return Tooltip.New1(new TooltipConfiguration.New());
 };
 Tooltip.New1=function(conf)
 {
  var s,x;
  function f(el)
  {
   Global.jQuery(el.Dom).tooltip(conf);
  }
  s=new Tooltip.New();
  s.element=(x=Tags.Tags().NewTag("div",[]),(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(x),x));
  return s;
 };
 Tooltip.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Tooltip);
 ResizableConfiguration=JQueryUI.ResizableConfiguration=Runtime.Class({},Obj,ResizableConfiguration);
 ResizableConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.AlsoResize=null;
  this.Animate=null;
  this.AnimateDuration=null;
  this.AnimateEasing=null;
  this.AspectRatio=0;
  this.AutoHide=null;
  this.Cancel=null;
  this.Containment=null;
  this.Delay=0;
  this.Disabled=null;
  this.Distance=0;
  this.Ghost=null;
  this.Grid=null;
  this.Handles=null;
  this.Helper=null;
  this.MaxHeight=0;
  this.MaxWidth=0;
  this.MinHeight=0;
  this.MinWidth=0;
 },ResizableConfiguration);
 Resizable=JQueryUI.Resizable=Runtime.Class({
  OnStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("resizestop",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnResize:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("resize",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnStart:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("resizestart",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("resizecreate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).resizable("widget");
  }
 },Pagelet$1,Resizable);
 Resizable.New2=function(el)
 {
  return Resizable.New1(el,new ResizableConfiguration.New());
 };
 Resizable.New1=function(el,conf)
 {
  var a;
  function f(el$1)
  {
   Global.jQuery(el$1.Dom).resizable(conf);
  }
  a=new Resizable.New();
  a.element=(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(el),el);
  return a;
 };
 Resizable.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Resizable);
 SelectableConfiguration=JQueryUI.SelectableConfiguration=Runtime.Class({},Obj,SelectableConfiguration);
 SelectableConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.AppendTo=null;
  this.AutoRefresh=null;
  this.Cancel=null;
  this.Delay=0;
  this.Disabled=null;
  this.Distance=0;
  this.Filter=null;
  this.Tolerance=null;
 },SelectableConfiguration);
 Selectable=JQueryUI.Selectable=Runtime.Class({
  OnUnselecting:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).selectable({
     unselecting:function(x,y)
     {
      (f(x))(y.unselecting);
     }
    });
   },this);
  },
  OnUnselected:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).selectable({
     unselected:function(x,y)
     {
      (f(x))(y.unselected);
     }
    });
   },this);
  },
  OnStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).selectable({
     stop:function(x)
     {
      f(x);
     }
    });
   },this);
  },
  OnStart:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).selectable({
     start:function(x)
     {
      f(x);
     }
    });
   },this);
  },
  OnSelecting:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).selectable({
     selecting:function(x,y)
     {
      (f(x))(y.selecting);
     }
    });
   },this);
  },
  OnSelected:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).selectable({
     selected:function(x,y)
     {
      (f(x))(y.selected);
     }
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).selectable({
     create:function(x,y)
     {
      (f(x))(y.create);
     }
    });
   },this);
  },
  get_Widget:function()
  {
   return Global.jQuery(this.element.Dom).selectable("widget");
  }
 },Pagelet$1,Selectable);
 Selectable.New2=function(el)
 {
  return Selectable.New1(el,new SelectableConfiguration.New());
 };
 Selectable.New1=function(el,conf)
 {
  var a;
  function f(el$1)
  {
   Global.jQuery(el$1.Dom).selectable(conf);
  }
  a=new Selectable.New();
  a.element=(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(el),el);
  return a;
 };
 Selectable.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Selectable);
 SortableConfiguration=JQueryUI.SortableConfiguration=Runtime.Class({},Obj,SortableConfiguration);
 SortableConfiguration.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.AppendTo=null;
  this.Axis=null;
  this.Cancel=null;
  this.ConnectWith=null;
  this.Containment=null;
  this.Cursor=null;
  this.CursorAt=null;
  this.Delay=0;
  this.Disabled=null;
  this.Distance=0;
  this.DropOnEmpty=null;
  this.ForceHelperSize=null;
  this.ForcePlaceholderSize=null;
  this.Grid=null;
  this.Handle=null;
  this.Helper=null;
  this.Items=null;
  this.Opacity=0;
  this.Placeholder=null;
  this.Revert=null;
  this.Scroll=null;
  this.ScrollSensitivity=0;
  this.ScrollSpeed=0;
  this.Tolerance=null;
  this.ZIndex=0;
 },SortableConfiguration);
 Sortable=JQueryUI.Sortable=Runtime.Class({
  OnDeactivate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortdeactivate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnActivate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortactivate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnOut:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortout",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnOver:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortover",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnRemove:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortremove",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnReceive:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortreceive",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnUpdate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortupdate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortstop",function(event,ui)
    {
     (f(event))(ui);
    });
   },this);
  },
  OnBeforeStop:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortbeforestop",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnChange:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortchange",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnSort:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sort",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnStart:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortstart",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  OnCreate:function(f)
  {
   var $this;
   $this=this;
   Operators.OnAfterRender(function()
   {
    Global.jQuery($this.element.Dom).bind("sortcreate",function(x,y)
    {
     (f(x))(y);
    });
   },this);
  },
  get_Widget:function()
  {
   return this.sortable("widget");
  }
 },Pagelet$1,Sortable);
 Sortable.New2=function(el)
 {
  return Sortable.New1(el,new SortableConfiguration.New());
 };
 Sortable.New1=function(el,conf)
 {
  var s;
  function f(el$1)
  {
   Global.jQuery(el$1.Dom).sortable(conf);
  }
  s=new Sortable.New();
  s.element=(function(w)
  {
   Operators.OnAfterRender(f,w);
  }(el),el);
  return s;
 };
 Sortable.New=Runtime.Ctor(function()
 {
  Pagelet$1.New.call(this);
 },Sortable);
}(self));
