(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{6924:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo-projects/canvas/canvas-location",function(){return i(6790)}])},6790:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var a=i(5893),n=(i(6555),i(6726)),s=i(7160),r=i.n(s),c=i(7294);var o={Particles:{NonInteractive:{DynamicThemedParticles:function(){return(0,c.useEffect)((function(){var e,t,i=function(e){var t=document.getElementById(e);return t?t.querySelector("canvas"):null}("canvas-box"),a=function(e){var t=document.getElementById(e);return t?{h:t.offsetHeight,w:t.offsetWidth}:{h:0,w:0}}("canvas-box"),n=["#80cbc4","#b2fef7","#4f9a94"];if(null!==i){var s=a.h,r=a.w,c=0,o=0;i.height=s-.01*s,i.width=r-.025*r;var d=i.getContext("2d");if(null===i||void 0===i||i.addEventListener("mousemove",(function(e){console.log(e),c=e.offsetX,o=e.offsetY})),null!==d){for(var h=[],l=0;l<500;l++){var u=2*Math.random(),m=Math.random()*(r-2*u)+u,f=Math.random()*(s-2*u)+u,v=.5*Math.random(),x=.5*Math.random(),j=n[(e=0,t=n.length+1,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e))];h[l]={color:j,radius:u,ogRadius:u,x:m,y:f,dx:v,dy:x,Interactivity:function(){var e=[c+15,c-15],t=[o+15,o-15],i=this.x>e[1]&&this.x<e[0],a=this.y>t[1]&&this.y<t[0];i&&a?this.radius<30&&(this.radius+=1):this.radius>this.ogRadius&&this.radius>1&&(this.radius-=1)},Update:function(){(this.x+this.radius>r||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>s||this.y-this.radius<0)&&(this.dy=-this.dy),this.Interactivity(),this.x+=this.dx,this.y+=this.dy,this.Draw()},Draw:function(){d.beginPath(),d.strokeStyle=this.color,d.fillStyle=this.color,d.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),d.stroke(),d.fill()}}}var p=function(){requestAnimationFrame(p),d.clearRect(0,0,r,s),h.forEach((function(e){e.Update()}))};p()}}})),(0,a.jsx)("div",{id:"canvas-box",className:"terminal-card",children:(0,a.jsx)("canvas",{id:"component-canvas"})})}}}}.Particles.NonInteractive.DynamicThemedParticles,d=function(){return(0,a.jsxs)("div",{className:"canvas-container",children:[(0,a.jsx)("div",{style:{top:"0px",position:"fixed",left:"0px",zIndex:0}}),(0,a.jsxs)("div",{className:r().pageContainer,style:{zIndex:10},children:[(0,a.jsx)(n.default,{activePage:"demo-projects"}),(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"terminal-card "+r().headerCard,children:[(0,a.jsx)("header",{children:(0,a.jsx)("h1",{children:"Canvas Animations"})}),(0,a.jsx)("h2",{children:"Move Items Within a 2D Coordinate System"})]})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"terminal-card "+r().headerCard,children:[(0,a.jsx)("header",{children:(0,a.jsx)("h2",{children:"Randomized Positions, Vectors, Size, and Colors"})}),(0,a.jsxs)("p",{children:["I found this animation concept from ",(0,a.jsx)("a",{href:"https://www.youtube.com/c/ChrisCourses",children:"Chris Courses"})," but I've modified it, and adapted it to work within react / next.js here."]}),(0,a.jsx)("p",{children:"Move mouse or Tap below:"})]}),(0,a.jsx)(o,{}),(0,a.jsx)("div",{className:"terminal-card "})]})]})}},6726:function(e,t,i){"use strict";i.r(t);var a=i(5893),n=i(7160),s=i.n(n),r=i(7294);t.default=function(e){var t,i,n,c,o=(0,r.useState)(!1),d=o[0],h=o[1],l=(0,r.useState)(!1),u=l[0],m=l[1],f="menu-item",v="menu-item active",x="menu-item";return(0,r.useEffect)((function(){u||window.innerWidth>800&&h(!0),m(!0)}),[u]),"undefined"!==typeof e.activePage&&(n="home"===e.activePage?v:f,t="blog"===e.activePage?v:f,i="development-history"===e.activePage?v:f,c="demo-projects"===e.activePage?v:f,x="contact"===e.activePage?v:f),(0,a.jsxs)("nav",{className:"site-menu",children:[(0,a.jsx)("p",{className:"terminal-prompt menu-btn",onClick:function(){h(!d)},children:(0,a.jsx)("span",{children:d?"Close Menu":"Open Menu"})}),(0,a.jsx)("div",{className:"terminal-card"+s().headerCard,style:d?{display:"block"}:{display:"none"},children:(0,a.jsx)("nav",{className:"terminal-menu",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/",className:n,children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/blog-overview",className:t,children:"Blog"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/demo-projects/canvas/canvas-location",className:c,children:"Demo Projects"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/development-history",className:i,children:"Development History"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/contact",className:x,children:"Contact"})})]})})})]})}},7160:function(e){e.exports={pageContainer:"Home_pageContainer__wDxoE",headerCard:"Home_headerCard___48J_"}},6555:function(){}},function(e){e.O(0,[774,888,179],(function(){return t=6924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);