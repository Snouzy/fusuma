(self.webpackChunkadvanced=self.webpackChunkadvanced||[]).push([[58],{8058:(e,t,a)=>{"use strict";a.r(t),a.d(t,{Sidebar:()=>p});var n=a(3058),r=a(3504),c=a(8299),i=a.n(c),l=a(9085),o=a(2242),s="https://github.com/hiroppy/fusuma.git",u="https://hiroppy.github.io/fusuma/advanced",m=["twitter"],d="slide",h=function(e){return"".concat(e).padStart(2,"0")},p=(0,n.memo)((function(e){var t=e.isOpen,a=e.onStateChange,c=e.goTo,p=e.currentIndex,f=e.runPresentationMode,b=e.contents,E=e.totalSlides;return n.createElement(r.slide,{isOpen:t,disableAutoFocus:!0,onStateChange:a,outerContainerId:"root",pageWrapId:"webslides"},n.createElement("div",{className:"sidebar-social"},Array.isArray(m)&&m.map((function(e){return"twitter"===e?n.createElement("a",{key:"twitter",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(d," ").concat(u),"aria-label":"".concat(d," ").concat(u)},n.createElement(l.fWC,null)):"hatena"===e?n.createElement("a",{key:"hatena",href:"http://b.hatena.ne.jp/entry/".concat(u),className:"fa fa-hatena"}):void 0}))),n.createElement("div",{className:"sidebar-control"},n.createElement(o.b2E,{onClick:function(){return c(0)},className:"sidebar-cursor"}),n.createElement("span",null,"".concat(h(p+1)," / ").concat(h(E))),n.createElement(o.cHm,{onClick:function(){return c(E-1)},className:"sidebar-cursor"})),n.createElement("div",{className:"sidebar-tools"},n.createElement(o.Nms,{style:{width:26,height:26},onClick:function(){i().isEnabled&&i().toggle()},className:"sidebar-cursor"}),n.createElement(o.kxx,{onClick:function(){return f()},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}),n.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer","aria-label":"github"},n.createElement(l.hJX,{style:{width:20,height:20,marginTop:3,color:"#f5f5f5"}}))),0!==b.length&&n.createElement("ul",{className:"sidebar-contents"},b.map((function(e){return n.createElement("li",{key:e.title},n.createElement("a",{style:{cursor:"pointer"},onClick:function(){return c(e.index-1)}},e.title))}))))}))}}]);