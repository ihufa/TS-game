!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){},function(e,t,n){"use strict";n.r(t);var r,o,i,l,u,f,c,a,d;n(0);r=document.querySelector("#root"),o=r.getContext("2d"),i={ctx:o,height:r.height,width:r.width},l={xStart:0,yStart:0,xEnd:0,yEnd:0},u=[{name:"test",x:200,y:300,xvel:1,yvel:1,sizex:30,sizey:40,color:"#f6ff00"}],f=Date.now(),c=0,a=0,(d=function(){0===c&&r.addEventListener("mousedown",(function(e){console.log("event",e)}));var e=Date.now();c=(e-f)/1e3,Math.floor(c/.05)>a&&(a++,o.fillStyle="#000000",o.fillRect(0,0,r.width,r.height),function(e){e.forEach((function(e){e.x=e.x+e.xvel,e.y=e.y+e.yvel}))}(u),function(e,t,n){var r=e.ctx;e.width,e.height,t.forEach((function(e){r.fillStyle=e.color,r.fillRect(e.x,e.y,e.sizex,e.sizey)})),r.fillStyle="rgba(0,255,0,0.2)",r.fillRect(n.xStart,n.yStart,n.xEnd,n.yEnd)}(i,u,l)),window.requestAnimationFrame(d)})()}]);