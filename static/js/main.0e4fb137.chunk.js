(this.webpackJsonpexam=this.webpackJsonpexam||[]).push([[0],{22:function(e,a,t){e.exports={counter:"Counter_counter__wi-DS",screen:"Counter_screen__2dLW-",buttons:"Counter_buttons__1evUz",usual:"Counter_usual__2ZgUg",maximum:"Counter_maximum__Cq53m"}},29:function(e,a,t){e.exports={counter:"SettingWindow_counter__pdqQZ",screen:"SettingWindow_screen__29PP7",buttons:"SettingWindow_buttons__3EVvN"}},44:function(e,a,t){e.exports=t(54)},49:function(e,a,t){},50:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),u=t.n(l),c=(t(49),t(15)),o=(t(50),t(86));var i=function(e){return r.a.createElement(o.a,{style:{fontFamily:"inherit",color:"#ae5c6a",borderColor:"#ae5c6a"},variant:"outlined",size:"small",onClick:e.click,disabled:e.disabled},e.title," ")},s=t(84),m=t(22),d=t.n(m);var v=function(e){return r.a.createElement("div",{className:d.a.counter},r.a.createElement(s.a,{elevation:24,square:!1,style:{backgroundColor:"#dceef8"}},r.a.createElement("div",{className:"".concat(e.counter==e.maxValue?d.a.maximum:d.a.usual," ").concat(d.a.screen)},function(){switch(e.error){case"incorrect":return"incorrect value";case"tabSet":return"press 'set'";case"enter value":return"enter value";default:return e.counter}}()),r.a.createElement("div",{className:d.a.buttons},r.a.createElement(i,{title:"add",click:e.add,disabled:"work"!==e.error||e.counter==e.maxValue}),r.a.createElement(i,{title:"reset",click:e.reset,disabled:"work"!==e.error}))))},b=t(29),V=t.n(b),f=t(85);var p=function(e){var a=Object(n.useState)(e.minValue),t=Object(c.a)(a,2),l=t[0],u=t[1],o=Object(n.useState)(e.maxValue),m=Object(c.a)(o,2),d=m[0],v=m[1];return r.a.createElement("div",{className:V.a.counter},r.a.createElement(s.a,{style:{backgroundColor:"#dceef8"},elevation:24,square:!1},r.a.createElement("div",{className:V.a.screen},r.a.createElement("div",null,r.a.createElement(f.a,{style:{fontFamily:"inherit",color:"#ae5c6a",borderColor:"#ae5c6a"},id:"outlined-password-input",label:"Max value",type:"number",size:"small",InputLabelProps:{shrink:!0},onChange:function(a){var t=Number.parseInt(a.currentTarget.value);e.checkValue(t,l,d,l),v(t)},defaultValue:e.maxValue,error:d<=l||d>10||isNaN(d)})),r.a.createElement("div",null,r.a.createElement(f.a,{id:"outlined-password-input",label:"Start value",type:"number",size:"small",InputLabelProps:{shrink:!0},onChange:function(a){var t=Number.parseInt(a.currentTarget.value);e.checkValue(d,t,d,l),u(t)},defaultValue:e.minValue,error:d<=l||l<0||isNaN(l)}))),r.a.createElement("div",{className:V.a.buttons},r.a.createElement(i,{disabled:"work"!==e.error&&"tabSet"!==e.error,title:"set",click:function(){e.settingValues({maxValue:d,minValue:l}),e.checkValue(d,l,d,l),e.saveState("savedValues",{maxValue:d,minValue:l})}}))))};var _=function(){var e=function(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}("savedValues",{maxValue:10,minValue:0}),a=Object(n.useState)(e.minValue),t=Object(c.a)(a,2),l=t[0],u=t[1],o=Object(n.useState)(e.maxValue),i=Object(c.a)(o,2),s=i[0],m=i[1],d=Object(n.useState)(e.minValue),b=Object(c.a)(d,2),V=b[0],f=b[1],_=Object(n.useState)("work"),E=Object(c.a)(_,2),g=E[0],k=E[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement(p,{minValue:e.minValue,maxValue:e.maxValue,saveState:function(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)},settingValues:function(e){m(e.maxValue),f(e.minValue),u(e.minValue)},checkValue:function(e,a,t,n){e<=a||e>10||a<0?k("incorrect"):isNaN(a)||isNaN(e)?k("enter value"):k(t!=e||n!=a?"tabSet":"work")},error:g}),r.a.createElement(v,{minValue:l,maxValue:s,counter:V,add:function(){f(V+1)},reset:function(){f(e.minValue)},error:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.0e4fb137.chunk.js.map