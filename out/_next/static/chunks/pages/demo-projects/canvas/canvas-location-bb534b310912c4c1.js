(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[151],{6924:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/demo-projects/canvas/canvas-location",function(){return n(1357)}])},7653:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var a=n(5893),i=n(7294);var s=function(){return(0,i.useEffect)((function(){var e,t,n=function(e){var t=document.getElementById(e);return t?t.querySelector("canvas"):null}("canvas-box"),a=function(e){var t=document.getElementById(e);return t?{h:t.offsetHeight,w:t.offsetWidth}:{h:0,w:0}}("canvas-box"),i=["#80cbc4","#b2fef7","#4f9a94"];if(null!==n){var s=a.h,r=a.w,c=0,o=0;n.height=s-.01*s,n.width=r-.025*r;var d=n.getContext("2d");if(null===n||void 0===n||n.addEventListener("mousemove",(function(e){console.log(e),c=e.offsetX,o=e.offsetY})),null!==d){for(var l=[],h=0;h<500;h++){var u=2*Math.random(),m=Math.random()*(r-2*u)+u,v=Math.random()*(s-2*u)+u,f=.5*Math.random(),x=.5*Math.random(),j=i[(e=0,t=i.length+1,e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e))];l[h]={color:j,radius:u,ogRadius:u,x:m,y:v,dx:f,dy:x,Interactivity:function(){var e=[c+15,c-15],t=[o+15,o-15],n=this.x>e[1]&&this.x<e[0],a=this.y>t[1]&&this.y<t[0];n&&a?this.radius<30&&(this.radius+=1):this.radius>this.ogRadius&&this.radius>1&&(this.radius-=1)},Update:function(){(this.x+this.radius>r||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>s||this.y-this.radius<0)&&(this.dy=-this.dy),this.Interactivity(),this.x+=this.dx,this.y+=this.dy,this.Draw()},Draw:function(){d.beginPath(),d.strokeStyle=this.color,d.fillStyle=this.color,d.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),d.stroke(),d.fill()}}}var y=function(){requestAnimationFrame(y),d.clearRect(0,0,r,s),l.forEach((function(e){e.Update()}))};y()}}})),(0,a.jsx)("div",{id:"canvas-box",className:"terminal-card",children:(0,a.jsx)("canvas",{id:"component-canvas"})})},r={NonInteractive:{DynamicThemedParticles:s}},c=n(314),o=["#80cbc4","#b2fef7","#4f9a94"],d={Fractals:{Trees:{One:function(){var e=(0,i.useState)(35),t=e[0],n=e[1],s=(0,i.useState)(0),r=s[0],d=s[1],l=(0,i.useState)(0),h=l[0],u=l[1];return(0,i.useEffect)((function(){var e=function(e){var t=document.getElementById(e);return t?t.querySelector("canvas"):null}("tall-canvas-box"),n=function(e){var t=document.getElementById(e);return t?{h:t.offsetHeight,w:t.offsetWidth}:{h:0,w:0}}("tall-canvas-box"),a=function(e,t,n){return{x:e.x+t*Math.cos(2*Math.PI*n/360),y:e.y+t*Math.sin(2*Math.PI*n/360)}},i=function(e,t,n){e.beginPath(),e.strokeStyle=o[1],e.moveTo(t.x,t.y),e.lineTo(n.x,n.y),e.moveTo(t.x,t.y),e.stroke()};if(null!==e){var s=window.innerWidth<800?100:175,c=window.innerWidth<800?2:10,d=window.innerWidth<800?700:1e3,l=n.w;e.height=600,e.width=l-.025*l;var m=e.getContext("2d");if(u(s),null!==m){m.clearRect(0,0,l,600);var v={x:l/2,y:595},f=a(v,h,-90);i(m,v,f),m.moveTo(f.x,f.y);var x=function(e,n,s){if(n>c){var o=a(e,n,s),l=a(e,n,s-90);i(m,e,o),i(m,e,l),m.moveTo(o.x,o.y),x(o,n*r/d,s+t),x(l,n*r/d,s-t)}};x(f,100,-45)}}})),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{id:"tall-canvas-box",className:"terminal-card",children:(0,a.jsx)("canvas",{id:"component-canvas"})}),(0,a.jsxs)("div",{className:"terminal-card",children:[(0,a.jsxs)("div",{className:"eighty-percent",children:[(0,a.jsx)("label",{children:"Angle"}),(0,a.jsx)(c.ZP,{min:0,max:45,value:t,onChange:function(e){n(e.target.value)}})]}),(0,a.jsxs)("div",{className:"eighty-percent",children:[(0,a.jsx)("label",{children:"Length"}),(0,a.jsx)(c.ZP,{min:3.5*h,max:4.55*h,value:r,onChange:function(e){d(e.target.value)}})]})]})]})}}},Particles:r}},1357:function(e,t,n){"use strict";n.r(t);var a=n(5893),i=(n(6555),n(6726)),s=n(7160),r=n.n(s),c=n(7653).X.Particles.NonInteractive.DynamicThemedParticles;t.default=function(){return(0,a.jsxs)("div",{className:"canvas-container",children:[(0,a.jsx)("div",{style:{top:"0px",position:"fixed",left:"0px",zIndex:0}}),(0,a.jsxs)("div",{className:r().pageContainer,style:{zIndex:10},children:[(0,a.jsx)(i.default,{activePage:"demo-projects"}),(0,a.jsx)("header",{children:(0,a.jsxs)("div",{className:"terminal-card "+r().headerCard,children:[(0,a.jsx)("header",{children:(0,a.jsx)("h1",{children:"Canvas Animations"})}),(0,a.jsx)("h2",{children:"Move Items Within a 2D Coordinate System"})]})}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"terminal-card "+r().headerCard,children:[(0,a.jsx)("header",{children:(0,a.jsx)("h2",{children:"Randomized Positions, Vectors, Size, and Colors"})}),(0,a.jsxs)("p",{children:["I found this animation concept from ",(0,a.jsx)("a",{href:"https://www.youtube.com/c/ChrisCourses",children:"Chris Courses"})," but I've modified it, and adapted it to work within react / next.js here."]}),(0,a.jsx)("p",{children:"Move mouse or Tap below:"})]}),(0,a.jsx)(c,{}),(0,a.jsx)("div",{className:"terminal-card "})]})]})}},6726:function(e,t,n){"use strict";n.r(t);var a=n(5893),i=n(7160),s=n.n(i),r=n(7294);t.default=function(e){var t,n,i,c,o=(0,r.useState)(!1),d=o[0],l=o[1],h=(0,r.useState)(!1),u=h[0],m=h[1],v="menu-item",f="menu-item active",x="menu-item";return(0,r.useEffect)((function(){u||window.innerWidth>800&&l(!0),m(!0)}),[u]),"undefined"!==typeof e.activePage&&(i="home"===e.activePage?f:v,t="blog"===e.activePage?f:v,n="development-history"===e.activePage?f:v,c="demo-projects"===e.activePage?f:v,x="contact"===e.activePage?f:v),(0,a.jsxs)("nav",{className:"site-menu",children:[(0,a.jsx)("p",{className:"terminal-prompt menu-btn",onClick:function(){l(!d)},children:(0,a.jsx)("span",{children:d?"Close Menu":"Open Menu"})}),(0,a.jsx)("div",{className:"terminal-card"+s().headerCard,style:d?{display:"block"}:{display:"none"},children:(0,a.jsx)("nav",{className:"terminal-menu",children:(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/",className:i,children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/blog-overview",className:t,children:"Blog"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/demo-projects-home",className:c,children:"Demo Projects"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/development-history",className:n,children:"Development History"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/contact",className:x,children:"Contact"})})]})})})]})}},7160:function(e){e.exports={pageContainer:"Home_pageContainer__wDxoE",headerCard:"Home_headerCard___48J_","tall-container":"Home_tall-container__Ii8Kr"}}},function(e){e.O(0,[292,774,888,179],(function(){return t=6924,e(e.s=t);var t}));var t=e.O();_N_E=t}]);