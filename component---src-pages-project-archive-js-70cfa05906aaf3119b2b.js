(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{VKVG:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return K}));var r=a("q1tI"),n=a.n(r),l=a("9eSz"),s=a.n(l),c=a("jNNy"),o=a("I/Ru"),i=a("6zjD"),d=a("8G0I");function u(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var p=u("Tab"),m=u("TabList"),f=u("TabPanel");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function g(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return p(e)||m(e)||f(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?Object(r.cloneElement)(e,h(h({},e.props),{},{children:g(e.props.children,t)})):e}))}function y(e,t){return r.Children.forEach(e,(function(e){null!==e&&(p(e)||f(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(m(e)&&t(e),y(e.props.children,t)))}))}function N(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=N(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var E,_=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=N(e))&&(r&&(r+=" "),r+=t);return r},x=0;function k(){return"react-tabs-"+x++}function C(e){var t=0;return y(e,(function(e){p(e)&&t++})),t}function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function j(e){return e&&"getAttribute"in e}function I(e){return j(e)&&"tab"===e.getAttribute("role")}function w(e){return j(e)&&"true"===e.getAttribute("aria-disabled")}try{E=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(W){E=!1}var O=function(e){var t,a;function l(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var a=t.props.direction;if(t.isTabFromContainer(e.target)){var r=t.props.selectedIndex,n=!1,l=!1;32!==e.keyCode&&13!==e.keyCode||(n=!0,l=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(r="rtl"===a?t.getNextTab(r):t.getPrevTab(r),n=!0,l=!0):39===e.keyCode||40===e.keyCode?(r="rtl"===a?t.getPrevTab(r):t.getNextTab(r),n=!0,l=!0):35===e.keyCode?(r=t.getLastTab(),n=!0,l=!0):36===e.keyCode&&(r=t.getFirstTab(),n=!0,l=!0),n&&e.preventDefault(),l&&t.setSelected(r,e)}},t.handleClick=function(e){var a=e.target;do{if(t.isTabFromContainer(a)){if(w(a))return;var r=[].slice.call(a.parentNode.children).filter(I).indexOf(a);return void t.setSelected(r,e)}}while(null!=(a=a.parentNode))},t}a=e,(t=l).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=l.prototype;return s.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var a=this.props;(0,a.onSelect)(e,a.selectedIndex,t)}},s.getNextTab=function(e){for(var t=this.getTabsCount(),a=e+1;a<t;a++)if(!w(this.getTab(a)))return a;for(var r=0;r<e;r++)if(!w(this.getTab(r)))return r;return e},s.getPrevTab=function(e){for(var t=e;t--;)if(!w(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!w(this.getTab(t)))return t;return e},s.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!w(this.getTab(t)))return t;return null},s.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!w(this.getTab(e)))return e;return null},s.getTabsCount=function(){return C(this.props.children)},s.getPanelsCount=function(){return function(e){var t=0;return y(e,(function(e){f(e)&&t++})),t}(this.props.children)},s.getTab=function(e){return this.tabNodes["tabs-"+e]},s.getChildren=function(){var e=this,t=0,a=this.props,l=a.children,s=a.disabledTabClassName,c=a.focus,o=a.forceRenderTabPanel,i=a.selectedIndex,d=a.selectedTabClassName,u=a.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var b=this.tabIds.length-this.getTabsCount();b++<0;)this.tabIds.push(k()),this.panelIds.push(k());return g(l,(function(a){var l=a;if(m(a)){var b=0,h=!1;E&&(h=n.a.Children.toArray(a.props.children).filter(p).some((function(t,a){return document.activeElement===e.getTab(a)}))),l=Object(r.cloneElement)(a,{children:g(a.props.children,(function(t){var a="tabs-"+b,n=i===b,l={tabRef:function(t){e.tabNodes[a]=t},id:e.tabIds[b],panelId:e.panelIds[b],selected:n,focus:n&&(c||h)};return d&&(l.selectedClassName=d),s&&(l.disabledClassName=s),b++,Object(r.cloneElement)(t,l)}))})}else if(f(a)){var v={id:e.panelIds[t],tabId:e.tabIds[t],selected:i===t};o&&(v.forceRender=o),u&&(v.selectedClassName=u),t++,l=Object(r.cloneElement)(a,v)}return l}))},s.isTabFromContainer=function(e){if(!I(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},s.render=function(){var e=this,t=this.props,a=(t.children,t.className),r=(t.disabledTabClassName,t.domRef),l=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return n.a.createElement("div",T({},l,{className:_(a),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,r&&r(t)},"data-tabs":!0}),this.getChildren())},l}(r.Component);O.defaultProps={className:"react-tabs",focus:!1};var P=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).handleSelected=function(e,t,r){var n=a.props.onSelect,l=a.state.mode;if("function"!=typeof n||!1!==n(e,t,r)){var s={focus:"keydown"===r.type};1===l&&(s.selectedIndex=e),a.setState(s)}},a.state=r.copyPropsToState(a.props,{},t.defaultFocus),a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.getDerivedStateFromProps=function(e,t){return r.copyPropsToState(e,t)},r.getModeFromProps=function(e){return null===e.selectedIndex?1:0},r.copyPropsToState=function(e,t,a){void 0===a&&(a=!1);var n={focus:a,mode:r.getModeFromProps(e)};if(1===n.mode){var l=C(e.children)-1,s=null;s=null!=t.selectedIndex?Math.min(t.selectedIndex,l):e.defaultIndex||0,n.selectedIndex=s}return n},r.prototype.render=function(){var e=this.props,t=e.children,a=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["children","defaultIndex","defaultFocus"])),r=this.state,l=r.focus,s=r.selectedIndex;return a.focus=l,a.onSelect=this.handleSelected,null!=s&&(a.selectedIndex=s),n.a.createElement(O,a,t)},r}(r.Component);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}P.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},P.tabsRole="Tabs";var R=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.children,a=e.className,r=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["children","className"]);return n.a.createElement("ul",S({},r,{className:_(a),role:"tablist"}),t)},r}(r.Component);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}R.defaultProps={className:"react-tabs__tab-list"},R.tabsRole="TabList";var D=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.componentDidMount=function(){this.checkFocus()},l.componentDidUpdate=function(){this.checkFocus()},l.checkFocus=function(){var e=this.props,t=e.selected,a=e.focus;t&&a&&this.node.focus()},l.render=function(){var e,t=this,a=this.props,r=a.children,l=a.className,s=a.disabled,c=a.disabledClassName,o=(a.focus,a.id),i=a.panelId,d=a.selected,u=a.selectedClassName,p=a.tabIndex,m=a.tabRef,f=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(a,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return n.a.createElement("li",F({},f,{className:_(l,(e={},e[u]=d,e[c]=s,e)),ref:function(e){t.node=e,m&&m(e)},role:"tab",id:o,"aria-selected":d?"true":"false","aria-disabled":s?"true":"false","aria-controls":i,tabIndex:p||(d?"0":null)}),r)},r}(r.Component);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}D.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},D.tabsRole="Tab";var A=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.children,r=t.className,l=t.forceRender,s=t.id,c=t.selected,o=t.selectedClassName,i=t.tabId,d=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return n.a.createElement("div",M({},d,{className:_(r,(e={},e[o]=c,e)),role:"tabpanel",id:s,"aria-labelledby":i}),l||c?a:null)},r}(r.Component);A.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},A.tabsRole="TabPanel";var L=function(e){var t=e.children,a=e.defaultIndex;return n.a.createElement(P,{defaultIndex:a,className:"tabs"},n.a.createElement(R,{className:"tab-list py mb-5"},t.map((function(e,t){return n.a.createElement(D,{key:t,className:"tab-list__item tab-list__item--"+t,selectedClassName:"tab-list__item--selected"},e.props.label,n.a.createElement("svg",{className:"tab-list__icon relative",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:"16",width:"16"},n.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),n.a.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})))}))),t.map((function(e,t){return n.a.createElement(A,{key:t,className:"tabs__tab-panel",selectedClassName:"tabs__tab-panel--selected"},e.props.children)})))},z=a("QgIm"),V=a("gGy4"),G=function(e){var t=e.mouseMoveTranslations,a=void 0===t?[10,20,10,20]:t,r=Object(V.a)(a[0],a[1],a[2],a[3]);return n.a.createElement("div",{className:"parallax-circles"},n.a.createElement("div",{className:"parallax-circles__outer"},n.a.createElement("div",{style:{transform:"translate("+r.tx+"px, "+r.ty+"px)"},className:"parallax-circles__inner bg-gradient-to-r from-grey-darker transition-transform duration-700 ease-out"})))},J=function(){return n.a.createElement("div",{className:"project-archive-intro relative"},n.a.createElement(o.a,{verticalSpacing:!1},n.a.createElement("ul",{className:"py-2"},n.a.createElement("li",null,n.a.createElement(i.b,{link:"/"},n.a.createElement("svg",{className:"external-link__icon transform -rotate-90 mr-1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"square",strokeLinejoin:"arcs"},n.a.createElement("path",{d:"M7 17l9.2-9.2M17 17V7H7"})),"Go to start view")))),n.a.createElement(o.a,null,n.a.createElement("h1",{className:"project-archive-intro__title leading-tight md:my-4"},n.a.createElement("span",{className:"text-sm text-grey-lighter"},"(Almost all)"),n.a.createElement("span",{className:"text-6xl font-bold block"},"Design ",n.a.createElement("br",null),"& Code"),n.a.createElement("span",{className:"text-5xl text-stroke text-stroke-white block"},"along the road"))),n.a.createElement("div",{className:"project-archive-intro__bg bg-gradient-to-r from-black","aria-hidden":"true"},n.a.createElement("div",{className:"project-archive-intro__circle project-archive-intro__circle--1"},n.a.createElement(G,{mouseMoveTranslations:[1,3,1,3]})),n.a.createElement("div",{className:"project-archive-intro__circle project-archive-intro__circle--2"},n.a.createElement(G,{mouseMoveTranslations:[5,10,5,10]})),n.a.createElement("div",{className:"project-archive-intro__circle project-archive-intro__circle--3"},n.a.createElement(G,null))))},K=(t.default=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{title:"thomas rutzer – project archive"}),n.a.createElement(o.b,null,n.a.createElement(J,null),n.a.createElement(o.a,null,n.a.createElement(L,null,t.allWorksJson.group.map((function(e,t){return n.a.createElement("section",{key:t,label:""+e.edges[0].node.year},e.edges.map((function(e,t){return n.a.createElement("div",{key:t,className:"project-archive-item__grid-item grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pb-6 "+(0!==t?"pt-6 border-t-2 border-grey-darker":"")},n.a.createElement("div",{className:"col-start-1 col-span-1 row-start-1 row-span-2"},n.a.createElement(s.a,{className:"h-full",alt:e.node.teaserImage.alt,fluid:e.node.fields.teaserImageAsset.childImageSharp.fluid})),n.a.createElement("div",{className:"col-start-2 col-span-1"},n.a.createElement("h2",{className:"text-3xl md:text-4xl"},e.node.title)),n.a.createElement("div",{className:"col-start-2 col-span-1 row-start-2 self-end"},n.a.createElement("h3",{className:"text-tertiary-lighter"},e.node.subTitle)),n.a.createElement("div",{className:"col-start-1 col-span-4 md:col-span-2"},n.a.createElement("p",{className:"md:mt-2"},e.node.teaserDescription)),n.a.createElement("div",{className:"col-start-1 col-span-2 md:col-span-2 md:row-start-2 flex flex-row justify-between"},n.a.createElement("div",{className:"self-end"},n.a.createElement("span",{className:"text-tertiary-lighter block text-sm"},"key facts"),n.a.createElement(d.a,{items:e.node.features})),n.a.createElement("div",{className:"self-end"},e.node.links.map((function(e,t){var a=e.link,r=e.label;return n.a.createElement("div",{className:"whitespace-no-wrap",key:t},n.a.createElement(i.a,{appearance:"primary",link:a},r))})))))})))})))),n.a.createElement("section",{className:"bg-grey-darkest-pattern"},n.a.createElement(o.a,null,n.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6"},n.a.createElement("div",{className:"col-start-1 col-span-1"},n.a.createElement(z.a,{appearance:"primary"},"credits")),n.a.createElement("div",{className:"col-start-1 md:col-start-2 col-span-2"},n.a.createElement("p",{className:"mb-2 font-bold"},"teaser images"),t.allWorksJson.group.map((function(e,t){return n.a.createElement("ul",{key:t,className:"text-sm"},n.a.createElement("li",{className:"text-tertiary-lighter mb-1"},e.edges[0].node.year),e.edges.map((function(e,a){return n.a.createElement("li",{key:a+t,className:"mb-2 block"},e.node.teaserImage.reference.link&&n.a.createElement(i.a,{link:e.node.teaserImage.reference.link,size:"small"},e.node.title+" "+e.node.subTitle," by ",e.node.teaserImage.reference.author),!e.node.teaserImage.reference.link&&e.node.title+" "+e.node.subTitle+" "+e.node.teaserImage.reference.link+"by "+e.node.teaserImage.reference.author)})))}))))))))},"127795882")}}]);
//# sourceMappingURL=component---src-pages-project-archive-js-70cfa05906aaf3119b2b.js.map