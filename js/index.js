"use strict";window.onload=function(){for(var e=document.getElementsByClassName("background_dot"),n=document.getElementById("background"),t=document.getElementById("background_image"),a=function(e,n){return Math.round(Math.random()*(n-e)+e)},o=0;o<e.length;o++){var r=a(2,10)/5;new mouseMoveParralax({container:n,element:e[o],braking:r,units:"px",translateScale:.8/r})}new mouseMoveParralax({container:n,element:t,braking:14,isRotate:!0,isOposite:!0})};
"use strict";var mouseMoveParralax=function(e){var t={container:null,element:null,braking:5,units:"%",translateScale:1,isOposite:!1,isRotate:!1},a=this,n=a.extendParams(t,e);n.element.style.transform="scale("+n.translateScale+")",n.element.style["-webkit-transform"]="scale("+n.translateScale+")",n.container.addEventListener("mousemove",function(e){var t=a.calculatePositionValue(e,n);n.element.style.transform=t,n.element.style["-webkit-transform"]=t})};mouseMoveParralax.prototype.extendParams=function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a]);return e},mouseMoveParralax.prototype.calculatePositionValue=function(e,t){var a=e.clientX,n=e.clientY,r=t.isOposite?-1:1,o=t.container.offsetWidth,s=t.container.offsetHeight,l=r*Math.round(a/o*200-100)/t.braking,i=r*Math.round(n/s*200-100)/t.braking,c=90*i/100,u=90*l/100,m="translate("+l+t.units+", "+i+t.units+")scale("+t.translateScale+")",f="rotateY( "+u*-1+"deg ) rotateX( "+c+"deg )";return t.isRotate?f:m};