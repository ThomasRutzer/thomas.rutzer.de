"use strict";(self.webpackChunkthomas_rutzer_digital_home=self.webpackChunkthomas_rutzer_digital_home||[]).push([[883],{429:function(e,t,n){n.r(t);var r=n(2982),a=n(3481),l=n(9931),o=n.n(l),c=n(7294),s=n(1066),i=n(7615),u=n(7260),f=n(6061),m=n(4926),d=["0","1","2","3","4"],h=12;function g(e){return e[Math.floor(Math.random()*e.length)]}function p(e,t){return Array.from(Array(e).keys()).reduce((function(e){return[].concat((0,r.Z)(e),[g(t)])}),[])}t.default=function(){var e=(0,c.useRef)(),t=(0,c.useRef)(),n=(0,c.useRef)(),l=(0,c.useRef)(),k=(0,c.useRef)(),v=(0,c.useState)(!1),E=v[0],y=v[1],_=(0,c.useState)([].concat((0,r.Z)(p(9,d)),[g(d),"4",g(d)])),b=_[0],w=_[1],x=(0,c.useState)([].concat((0,r.Z)(p(9,d)),[g(d),"0",g(d)])),N=x[0],Z=x[1],S=(0,c.useState)([].concat((0,r.Z)(p(9,d)),[g(d),"4",g(d)])),C=S[0],O=S[1];(0,c.useEffect)((function(){k.current=a.Z.timeline({easing:"easeOutExpo",complete:j,autoplay:!1}),k.current.add({targets:t.current,translateY:"-300%",duration:1600,easing:"easeOutSine"}).add({targets:n.current,translateY:"-300%",duration:1600,easing:"easeOutSine"},"-=400").add({targets:l.current,translateY:"-300%",duration:1600,easing:"easeOutSine"},"-=200")}),[b,N,C]),(0,c.useEffect)((function(){(0,a.Z)({targets:e.current,duration:700,opacity:1,easing:"easeInOutQuad",complete:R})}),[]);var R=function(){y(!0),k.current.play()},j=function(){var e=b[10],t=N[10],n=C[10];e===t&&e===n?(0,a.Z)({targets:document.body,duration:1200,keyframes:[{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"},{filter:"invert(100%)",backgroundColor:"#f8f8f8"},{filter:"invert(0%)",backgroundColor:"#2e2d2d"}],easing:"easeInOutQuad",complete:function(){document.body.removeAttribute("style"),A()}}):A()},A=function(){y(!1),k.current.seek(0),w((function(e){return[].concat((0,r.Z)(e.splice(9,h)),(0,r.Z)(p(9,d)))})),Z((function(e){return[].concat((0,r.Z)(e.splice(9,h)),(0,r.Z)(p(9,d)))})),O((function(e){return[].concat((0,r.Z)(e.splice(9,h)),(0,r.Z)(p(9,d)))}))};return c.createElement(c.Fragment,null,c.createElement(i.Z,{title:"404 — Too bad"}),c.createElement(f.f,null,c.createElement("section",{className:"bg-gradient-to-r from-black"},c.createElement(s.f,{className:"h-screen",verticalSpacing:!0},c.createElement("div",{className:"col-span-full grid grid-rows-[1fr_min-content] gap-3 md:gap-5 md:col-start-2 md:col-span-9 w-full h-full opacity-0 overflow-hidden",ref:e},c.createElement("div",{className:"h-full overflow-hidden"},c.createElement("div",{className:"grid grid-cols-3 h-full"},c.createElement("div",{className:"slot h-full overflow-hidden"},c.createElement("div",{className:"slot__lane h-full",ref:t},b.map((function(e,t){return c.createElement("span",{key:"lane1-"+t,className:o()("slot__symbol flex justify-center items-center h-2/6  transition-colors duration-700",{"text-white":10===t,"text-stroke text-stroke-white":10!==t})},e)})))),c.createElement("div",{className:"slot h-full overflow-hidden"},c.createElement("div",{className:"slot__lane h-full",ref:n},N.map((function(e,t){return c.createElement("span",{key:"lane2-"+t,className:o()("slot__symbol flex justify-center items-center h-2/6  transition-colors duration-700",{"text-white":10===t,"text-stroke text-stroke-white":10!==t})},e)})))),c.createElement("div",{className:"slot h-full overflow-hidden"},c.createElement("div",{className:"slot__lane h-full",ref:l},C.map((function(e,t){return c.createElement("span",{key:"lane3-"+t,className:o()("slot__symbol flex justify-center items-center h-2/6  transition-colors duration-700",{"text-white":10===t,"text-stroke text-stroke-white":10!==t})},e)})))))),c.createElement("div",{className:"flex flex-col items-center justify-center gap-4"},c.createElement(m.f,{disabled:E,onClick:R},"Spin to Win!"),c.createElement("p",{className:"text-center"},"I couldn't find what you were looking for. ",c.createElement("br",null),"Go ",c.createElement(u.f,{link:"/"},"home")," or try your luck.")))))))}}}]);
//# sourceMappingURL=component---src-pages-404-js-4e08de2be38d5df51109.js.map