(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(185),s=n(180);function o(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var i="slot-module_slot__39zq1";o(".slot-module_slot__39zq1 {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: center; }\n");var c="symbol-module_symbol__2mcQp";o(".symbol-module_symbol__2mcQp {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 33.333%;\n  width: 100%;\n  font-size: calc(48px + (102 - 48) * ((100vw - 300px) / (1280 - 300))); }\n");var u=function(e){var t=e.symbol,n=e.evaluated,a=e.defaultStyleClass,l=e.evaluatedStyleClass;return r.a.createElement("div",{className:"\n      "+c+" \n      "+a+" \n      "+(n?l:"")},t)},m=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},v=function(e){function t(e){m(this,t);var n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.$symbols=r.a.createRef(),n.state={complete:null},n}return f(t,e),p(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.reset.bind(this))}},{key:"componentDidUpdate",value:function(e){!e.spin&&this.props.spin&&(this.reset(),this.start())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.reset.bind(this))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:this.$symbols,className:i},this.props.symbols.map(function(t,n){return r.a.createElement(u,{key:n,evaluated:e.state.complete&&n===e.props.symbols.length-2,symbol:t,evaluatedStyleClass:e.props.symbolEvaluatedStyleClass,defaultStyleClass:e.props.symbolDefaultStyleClass})}))}},{key:"reset",value:function(){this.setState({complete:!1}),Object(l.a)({targets:this.$symbols.current,translateY:0,duration:0})}},{key:"start",value:function(){var e=this;Object(l.a)({targets:this.$symbols.current,translateY:"-"+this.$symbols.current.offsetHeight/3*(this.props.symbols.length-3)+"px",duration:2e3,easing:"easeInOutQuad",delay:500*this.props.slotIndex,complete:function(){e.setState({complete:!0},e.props.evaluate(e.props.slotIndex,e.props.symbols[e.props.symbols.length-2]))}})}}]),t}(r.a.Component);function b(e){return e[Math.floor(Math.random()*e.length)]}function g(e,t){return Array.from(Array(e).keys()).reduce(function(e){return[].concat(h(e),[b(t)])},[])}var E="slotMachine-module_wrapper__3ERHR",S="slotMachine-module_slotMachine__282LB";o(".slotMachine-module_wrapper__3ERHR {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%; }\n\n.slotMachine-module_slotMachine__282LB {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex: 1 1 0; }\n");var _=function(e){function t(e){m(this,t);var n=y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isSpinning:!1,isJackpot:!1},n.slots=[n.createSlot(n.props.initialSymbols[0]),n.createSlot(n.props.initialSymbols[1]),n.createSlot(n.props.initialSymbols[2])],n.prepareSlots(!0),n.slotMachineRef=r.a.createRef(),n}return f(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this;Object(l.a)({targets:this.slotMachineRef.current,duration:1200,opacity:1,easing:"easeInOutQuad",complete:function(){e.spin()}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{ref:this.slotMachineRef,className:E},r.a.createElement("div",{className:S},this.slots.map(function(t,n){return r.a.createElement(v,{key:n,slotIndex:n,spin:e.state.isSpinning,evaluate:function(t,n){return e.saveSingleResult(t,n)},symbolDefaultStyleClass:e.props.symbolDefaultStyleClass,symbolEvaluatedStyleClass:e.props.symbolEvaluatedStyleClass,symbols:t.symbols})})))}},{key:"spin",value:function(){this.state.isSpinning||this.setState({isSpinning:!0,isJackpot:!1})}},{key:"saveSingleResult",value:function(e,t){return this.slots[e].evaluation=t,0===this.slots.filter(function(e){return null===e.evaluation}).length?this.broadcastResult():null}},{key:"broadcastResult",value:function(){var e=this,t=this.slots.every(function(t){return t.evaluation===e.slots[0].evaluation});this.setState({isSpinning:!1,isJackpot:t}),this.props.onSpinningEnd(t),this.prepareSlots(!1)}},{key:"prepareSlots",value:function(e){var t=this;this.slots=this.slots.map(function(n){return d({},n,{evaluation:null,symbols:e?[].concat(h(g(t.props.symbolsPerSlot-1,t.props.symbols)),h(n.symbols.slice(n.symbols.length-3,n.symbols.length))):[].concat(h(n.symbols.slice(n.symbols.length-3,n.symbols.length)),h(g(t.props.symbolsPerSlot-1,t.props.symbols)))})})}},{key:"createSlot",value:function(e){return{symbols:[b(this.props.symbols),e,b(this.props.symbols)],evaluation:null}}}]),t}(r.a.Component);_.defaultProps={symbols:["0","1","2","3","4","5","6","7","8","9"],initialSymbols:["1","2","3"],symbolsPerSlot:20,symbolDefaultStyleClass:"slotMachine__symbol",symbolEvaluatedStyleClass:"slotMachine__symbol--evaluated",onSpinningEnd:function(){}};var k=r.a.forwardRef(function(e,t){return r.a.createElement(_,d({ref:t},e))}),C=n(164),w=n.n(C),N=function(e){return r.a.createElement("p",{className:w.a.copy+" "+(e.center?w.a.center:null)},e.children)},x=n(183),O=n(182),R=n(165),j=n.n(R),M=function(e){var t=e.children,n=e.size;return r.a.createElement("div",{className:j.a.container+" "+(n?j.a[n]:null)},t)},T=(n(189),n(177)),D=n(166),L=n.n(D),q=function(e){return r.a.createElement(T.a,{className:L.a.link,to:e.to},e.label)},A=n(167),P=n.n(A),z=n(168),I=n.n(z),Q=function(e){return r.a.createElement("button",{className:I.a.secondary,onClick:e.onClick,disabled:e.disabled},e.label)};t.default=function(){var e=Object(a.useRef)(),t=Object(a.useState)(!0),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"404 — Too bad"}),r.a.createElement(O.a,null,r.a.createElement("div",{className:P.a.grid},r.a.createElement("div",{className:P.a.intro},r.a.createElement(M,{size:"small"},r.a.createElement(x.a,{priority:1,center:!0,spacing:!1},"Too bad"),r.a.createElement(N,{center:!0},"— I couldn't find what you were looking for. ",r.a.createElement("br",null),"Go ",r.a.createElement(q,{to:"/",label:"home"})," or try your luck."),r.a.createElement("hr",{className:P.a.divider}))),r.a.createElement(k,{symbols:["0","1","2","3","4"],ref:e,initialSymbols:["4","0","4"],onSpinningEnd:function(e){return function(e){o(!1),e&&Object(l.a)({targets:document.body,duration:1200,keyframes:[{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"},{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"}],easing:"easeInOutQuad",complete:function(){document.body.removeAttribute("style")}})}(e)},symbolEvaluatedStyleClass:P.a.evaluated,symbolDefaultStyleClass:P.a.symbol}),r.a.createElement("div",{className:P.a.cta},r.a.createElement(Q,{disabled:n,onClick:function(){e.current.spin(),o(!0)},label:"Spin to win!"})))))}},177:function(e,t,n){"use strict";n.d(t,"b",function(){return m});var a=n(0),r=n.n(a),l=n(5),s=n.n(l),o=n(40),i=n.n(o);n.d(t,"a",function(){return i.a});n(178);var c=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,a=e.query,l=e.render,s=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,s&&l(s),!s&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(e){var t=e.data,n=e.query,a=e.render,l=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:a||l,staticQueryData:e})})};m.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},178:function(e,t,n){var a;e.exports=(a=n(179))&&a.default||a},179:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),l=n(5),s=n.n(l),o=n(65),i=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};i.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=i},180:function(e,t,n){"use strict";var a=n(181),r=n(0),l=n.n(r),s=n(184),o=n.n(s),i=n(5),c=n.n(i),u=n(177),m=function(e){var t=e.title,n=void 0===t?null:t,r=e.description,s=void 0===r?null:r;return l.a.createElement(u.b,{query:"2714768346",render:function(e){var t=e.site.siteMetadata,a=t.defaultTitle,r=t.defaultDescription,i={title:n||a,description:s||r};return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:i.title},l.a.createElement("meta",{name:"description",content:i.description})))},data:a})};m.propTypes={title:c.a.string,description:c.a.string},t.a=m},181:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Hay! I am thomas — a creative developer and foo/bar",defaultDescription:"default github.io user page of Thomas Rutzer"}}}}},182:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(158),s=n.n(l),o=n(177),i=n(159),c=n.n(i),u=function(e){return r.a.createElement("footer",{className:c.a.footer},r.a.createElement("ul",{className:c.a.footerList},r.a.createElement("li",null,r.a.createElement(o.a,{className:c.a.footerLink,to:"/legal/",activeClassName:c.a.footerLinkActive},"Legal notice"))))},m=n(160),p=n.n(m),d=function(e){return r.a.createElement("header",{className:p.a.header},r.a.createElement("ul",{className:p.a.headerList},r.a.createElement("li",null,r.a.createElement(o.a,{className:p.a.headerLink,to:"/",activeClassName:p.a.headerLinkActive},"start"))))};t.a=function(e){var t=e.children;e.seo;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:s.a.layoutWrapper},r.a.createElement(d,null),t,r.a.createElement(u,null)))}},183:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(161),s=n.n(l);t.a=function(e){var t=e.priority,n=e.center,a=e.children,l=e.spacing,o="h"+t;return r.a.createElement(o,{className:(n?s.a.center:s.a.left)+" "+(l?s.a.spacing:s.a.noSpacing)},a)}}}]);
//# sourceMappingURL=component---src-pages-404-js-7a93d000a8529d4d57d5.js.map