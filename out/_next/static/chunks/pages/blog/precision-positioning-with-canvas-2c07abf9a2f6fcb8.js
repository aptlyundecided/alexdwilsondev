(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[860],{8890:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/precision-positioning-with-canvas",function(){return i(2423)}])},2423:function(e,n,i){"use strict";i.r(n);var t=i(5893),a=i(7160),s=i.n(a),r=i(6726);i(6555);n.default=function(e){return(0,t.jsxs)("div",{className:s().pageContainer,children:[(0,t.jsx)(r.default,{activePage:"blog"}),(0,t.jsxs)("section",{children:[(0,t.jsxs)("div",{className:"terminal-card",children:[(0,t.jsx)("header",{children:(0,t.jsx)("h1",{children:"Precision Positioning in HTML Canvas"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{children:"I've done a fair amount of work in SVG over the past few years.  But I decided that I want to learn more about Canvas, because I am very interested in WebGL, and I want to learn a bit more about how to make more graphical things happen in the Browser."}),(0,t.jsx)("p",{children:"Manipulating a Canvas feels a lot like using D3, but something I'm immediately missing is the ability to query the Canvas for my elements within it."}),(0,t.jsx)("p",{children:"I've relied heavily in the past on finding a specific element from within an SVG, or a group tag within an SVG.  Learning how to make these types of updates without modifying a target element is going to be interesting."}),(0,t.jsx)("p",{children:"But this makes perfect sense, because if you are updating the state of canvas, you can just clear the entire canvas, and re-create from scratch the existing state of a given 'view'."}),(0,t.jsx)("h3",{children:"The Plan"}),(0,t.jsx)("p",{children:"I'll handle precision positioning by scaling the 'state-objects' real-world or simulated positions against the size of the Canvas. Updating their positions will just rely on clearing the canvas, and re-rendering the target elements / items."}),(0,t.jsx)("h3",{children:"Best Practices"}),(0,t.jsx)("p",{children:(0,t.jsx)("i",{children:(0,t.jsx)("a",{href:"https://stackoverflow.com/questions/8205828/html5-canvas-performance-and-optimization-tips-tricks-and-coding-best-practices",children:"Gold Star BP's:"})})}),(0,t.jsx)("p",{children:"I think in order to reference specific 'items' I think it might be needed to layer canvases, and draw specific entity 'groups' within a set layer."}),(0,t.jsx)("p",{children:"So rather than querying an item and moving it individually to save performance, it makes more sense to give items which do not need specific control to be grouped into a canvas, then group specific controlled items into another canvas which is transparent, and layered on top."})]}),(0,t.jsx)("div",{children:"\xa0"})]}),(0,t.jsxs)("div",{className:"terminal-card",children:[(0,t.jsx)("h3",{children:"Other Posts:"}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"/blog/static-app-interest",children:"Static App Interest"})})]})]})]})}},6726:function(e,n,i){"use strict";i.r(n);var t=i(5893),a=i(7160),s=i.n(a),r=i(7294);n.default=function(e){var n,i,a,c,o=(0,r.useState)(!1),l=o[0],h=o[1],d=(0,r.useState)(!1),m=d[0],p=d[1],u="menu-item",v="menu-item active",f="menu-item";return(0,r.useEffect)((function(){m||window.innerWidth>800&&h(!0),p(!0)}),[m]),"undefined"!==typeof e.activePage&&(a="home"===e.activePage?v:u,n="blog"===e.activePage?v:u,i="development-history"===e.activePage?v:u,c="demo-projects"===e.activePage?v:u,f="contact"===e.activePage?v:u),(0,t.jsxs)("nav",{className:"site-menu",children:[(0,t.jsx)("p",{className:"terminal-prompt menu-btn",onClick:function(){h(!l)},children:(0,t.jsx)("span",{children:l?"Close Menu":"Open Menu"})}),(0,t.jsx)("div",{className:"terminal-card"+s().headerCard,style:l?{display:"block"}:{display:"none"},children:(0,t.jsx)("nav",{className:"terminal-menu",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/",className:a,children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/blog-overview",className:n,children:"Blog"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/demo-projects/canvas/canvas-location",className:c,children:"Demo Projects"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/development-history",className:i,children:"Development History"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/contact",className:f,children:"Contact"})})]})})})]})}},7160:function(e){e.exports={pageContainer:"Home_pageContainer__wDxoE",headerCard:"Home_headerCard___48J_"}},6555:function(){}},function(e){e.O(0,[774,888,179],(function(){return n=8890,e(e.s=n);var n}));var n=e.O();_N_E=n}]);