"use strict";(self.webpackChunkthomas_rutzer_digital_home=self.webpackChunkthomas_rutzer_digital_home||[]).push([[883],{3923:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var s=n(7294),o=n(3481);function l(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var s=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&s.firstChild?s.insertBefore(o,s.firstChild):s.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var r="slot-module_slot__39zq1";l(".slot-module_slot__39zq1 {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  align-items: center; }\n");var a="symbol-module_symbol__2mcQp";l(".symbol-module_symbol__2mcQp {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 33.333%;\n  width: 100%;\n  font-size: calc(48px + (102 - 48) * ((100vw - 300px) / (1280 - 300))); }\n");var i=function(e){var t=e.symbol,n=e.evaluated,o=e.defaultStyleClass,l=e.evaluatedStyleClass;return s.createElement("div",{className:"\n      "+a+" \n      "+o+" \n      "+(n?l:"")},t)},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,n,s){return n&&e(t.prototype,n),s&&e(t,s),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},m=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},y=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=function(e){function t(e){u(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.$symbols=s.createRef(),n.state={complete:null},n}return m(t,e),c(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.reset.bind(this))}},{key:"componentDidUpdate",value:function(e){!e.spin&&this.props.spin&&(this.reset(),this.start())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.reset.bind(this))}},{key:"render",value:function(){var e=this;return s.createElement("div",{ref:this.$symbols,className:r},this.props.symbols.map((function(t,n){return s.createElement(i,{key:n,evaluated:e.state.complete&&n===e.props.symbols.length-2,symbol:t,evaluatedStyleClass:e.props.symbolEvaluatedStyleClass,defaultStyleClass:e.props.symbolDefaultStyleClass})})))}},{key:"reset",value:function(){this.setState({complete:!1}),(0,o.Z)({targets:this.$symbols.current,translateY:0,duration:0})}},{key:"start",value:function(){var e=this;(0,o.Z)({targets:this.$symbols.current,translateY:"-"+this.$symbols.current.offsetHeight/3*(this.props.symbols.length-3)+"px",duration:2e3,easing:"easeInOutQuad",delay:500*this.props.slotIndex,complete:function(){e.setState({complete:!0},e.props.evaluate(e.props.slotIndex,e.props.symbols[e.props.symbols.length-2]))}})}}]),t}(s.Component);function h(e){return e[Math.floor(Math.random()*e.length)]}function b(e,t){return Array.from(Array(e).keys()).reduce((function(e){return[].concat(y(e),[h(t)])}),[])}var v="slotMachine-module_wrapper__3ERHR",g="slotMachine-module_slotMachine__282LB";l(".slotMachine-module_wrapper__3ERHR {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 0;\n  width: 100%;\n  height: 100%; }\n\n.slotMachine-module_slotMachine__282LB {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex: 1 1 0; }\n");var S=function(e){function t(e){u(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isSpinning:!1,isJackpot:!1},n.slots=[n.createSlot(n.props.initialSymbols[0]),n.createSlot(n.props.initialSymbols[1]),n.createSlot(n.props.initialSymbols[2])],n.prepareSlots(!0),n}return m(t,e),c(t,[{key:"render",value:function(){var e=this;return s.createElement("div",{className:v},s.createElement("div",{className:g},this.slots.map((function(t,n){return s.createElement(d,{key:n,slotIndex:n,spin:e.state.isSpinning,evaluate:function(t,n){return e.saveSingleResult(t,n)},symbolDefaultStyleClass:e.props.symbolDefaultStyleClass,symbolEvaluatedStyleClass:e.props.symbolEvaluatedStyleClass,symbols:t.symbols})}))))}},{key:"spin",value:function(){this.state.isSpinning||this.setState({isSpinning:!0,isJackpot:!1})}},{key:"saveSingleResult",value:function(e,t){return this.slots[e].evaluation=t,0===this.slots.filter((function(e){return null===e.evaluation})).length?this.broadcastResult():null}},{key:"broadcastResult",value:function(){var e=this,t=this.slots.every((function(t){return t.evaluation===e.slots[0].evaluation}));this.setState({isSpinning:!1,isJackpot:t}),this.props.onSpinningEnd(t),this.prepareSlots(!1)}},{key:"prepareSlots",value:function(e){var t=this;this.slots=this.slots.map((function(n){return f({},n,{evaluation:null,symbols:e?[].concat(y(b(t.props.symbolsPerSlot-1,t.props.symbols)),y(n.symbols.slice(n.symbols.length-3,n.symbols.length))):[].concat(y(n.symbols.slice(n.symbols.length-3,n.symbols.length)),y(b(t.props.symbolsPerSlot-1,t.props.symbols)))})}))}},{key:"createSlot",value:function(e){return{symbols:[h(this.props.symbols),e,h(this.props.symbols)],evaluation:null}}}]),t}(s.Component);S.defaultProps={symbols:["0","1","2","3","4","5","6","7","8","9"],initialSymbols:["1","2","3"],symbolsPerSlot:20,symbolDefaultStyleClass:"slotMachine__symbol",symbolEvaluatedStyleClass:"slotMachine__symbol--evaluated",onSpinningEnd:function(){}};var _=s.forwardRef((function(e,t){return s.createElement(S,f({ref:t},e))})),E=n(7615),k=n(1066),w=n(7260),C=n(6061),x=n(4926),O=function(){var e=(0,s.useRef)(),t=(0,s.useRef)(),n=(0,s.useState)(!0),l=n[0],r=n[1];(0,s.useEffect)((function(){(0,o.Z)({targets:t.current,duration:700,opacity:1,easing:"easeInOutQuad",complete:function(){a()}})}),[]);var a=function(){e.current.spin(),r(!0)};return s.createElement(s.Fragment,null,s.createElement(E.Z,{title:"404 — Too bad"}),s.createElement(C.f,null,s.createElement("section",{className:"bg-gradient-to-r from-black"},s.createElement(k.f,{className:"flex flex-col h-screen"},s.createElement("div",{ref:t,style:{height:"100%",width:"100%",opacity:0}},s.createElement(_,{symbols:["0","1","2","3","4"],ref:e,initialSymbols:["4","0","4"],onSpinningEnd:function(e){return function(e){e?(0,o.Z)({targets:document.body,duration:1200,keyframes:[{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"},{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"}],easing:"easeInOutQuad",complete:function(){document.body.removeAttribute("style"),r(!1)}}):r(!1)}(e)},symbolEvaluatedStyleClass:"text-white",symbolDefaultStyleClass:"text-stroke text-stroke-white transition-colors duration-700"})),s.createElement("div",{className:"flex justify-center mt-3 md:mt-6"},s.createElement(x.f,{disabled:l,onClick:a},"Spin to Win!")),s.createElement("div",{className:"mt-4 text-center"},s.createElement("p",null,"I couldn't find what you were looking for. ",s.createElement("br",null),"Go ",s.createElement(w.f,{link:"/"},"home")," or try your luck."))))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-75f5458ecb6a3a4dfee8.js.map