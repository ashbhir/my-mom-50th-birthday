"use strict";!function(){var e,t={slidesLeft:document.getElementById("things-left"),byWhom:document.getElementById("by-whom"),demoElement:document.getElementsByClassName("demo")};window.CanvasSlideshow=function(n){function a(e){var n=byWhom[e];t.byWhom.textContent=n?"By "+n:""}function i(e){t.slidesLeft.textContent=String(e)+" Thing"+(e>1?"s":"")}function r(n){for(var a=t.demoElement,i=parseInt(e/a.length,10),r=parseInt(n/i,10),o=0;o<a.length;o++){var s=a[o];s.classList.remove("demo--current"),o===r&&s.classList.add("demo--current")}}function o(){h.rotation+=.001,g=requestAnimationFrame(o)}var s=this;n=n||{},n.stageWidth=n.hasOwnProperty("stageWidth")?n.stageWidth:1920,n.stageHeight=n.hasOwnProperty("stageHeight")?n.stageHeight:1080,n.pixiSprites=n.hasOwnProperty("sprites")?n.sprites:[],n.centerSprites=!!n.hasOwnProperty("centerSprites")&&n.centerSprites,n.texts=n.hasOwnProperty("texts")?n.texts:[],n.autoPlay=!n.hasOwnProperty("autoPlay")||n.autoPlay,n.autoPlaySpeed=n.hasOwnProperty("autoPlaySpeed")?n.autoPlaySpeed:[10,3],n.fullScreen=!n.hasOwnProperty("fullScreen")||n.fullScreen,n.displaceScale=n.hasOwnProperty("displaceScale")?n.displaceScale:[200,70],n.displacementImage=n.hasOwnProperty("displacementImage")?n.displacementImage:"",n.navElement=n.hasOwnProperty("navElement")?n.navElement:document.querySelectorAll(".scene-nav"),n.displaceAutoFit=!!n.hasOwnProperty("displaceAutoFit")&&n.displaceAutoFit,n.wacky=!!n.hasOwnProperty("wacky")&&n.wacky,n.interactive=!!n.hasOwnProperty("interactive")&&n.interactive,n.interactionEvent=n.hasOwnProperty("interactionEvent")?n.interactionEvent:"",n.displaceScaleTo=!1===n.autoPlay?[0,0]:[20,20],n.textColor=n.hasOwnProperty("textColor")?n.textColor:"#fff",n.displacementCenter=!!n.hasOwnProperty("displacementCenter")&&n.displacementCenter,n.dispatchPointerOver=!!n.hasOwnProperty("dispatchPointerOver")&&n.dispatchPointerOver;var l=new PIXI.autoDetectRenderer(n.stageWidth,n.stageHeight,{transparent:!0}),c=new PIXI.Container,d=new PIXI.Container,h=new PIXI.Sprite.fromImage(n.displacementImage),p=new PIXI.filters.DisplacementFilter(h),w=new PIXI.TextStyle({dropShadow:!0,dropShadowAlpha:.4,dropShadowBlur:2,dropShadowColor:"white",fill:"white",fontFamily:'"Comic Sans MS", cursive, sans-serif',fontSize:46,fontStyle:"italic",fontVariant:"small-caps",fontWeight:"bold",letterSpacing:3,wordWrap:!0,wordWrapWidth:300});if(this.currentIndex=0,this.initPixi=function(){document.body.appendChild(l.view),c.addChild(d),c.interactive=!0,console.log(l.view.style),!0===n.fullScreen?(l.view.style.objectFit="cover",l.view.style.width="100%",l.view.style.height="100%",l.view.style.top="50%",l.view.style.left="50%",l.view.style.webkitTransform="translate( -50%, -50% ) scale(1)",l.view.style.transform="translate( -50%, -50% ) scale(1)"):(l.view.style.maxWidth="100%",l.view.style.top="50%",l.view.style.left="50%",l.view.style.webkitTransform="translate( -50%, -50% )",l.view.style.transform="translate( -50%, -50% )"),h.texture.baseTexture.wrapMode=PIXI.WRAP_MODES.REPEAT,c.filters=[p],!1===n.autoPlay&&(p.scale.x=0,p.scale.y=0),!0===n.wacky&&(h.anchor.set(.5),h.x=l.width/2,h.y=l.height/2),h.scale.x=2,h.scale.y=2,p.autoFit=n.displaceAutoFit,c.addChild(h)},this.loadPixiSprites=function(e){for(var t=n.sprites,a=n.texts,i=0;i<t.length;i++){var r=new PIXI.Texture.fromImage(e[i]),o=new PIXI.Sprite(r);if(a){var s=new PIXI.Text(a[i],w);o.addChild(s),s.anchor.set(.5),s.x=o.width/2,s.y=o.height/2}!0===n.centerSprites&&(o.anchor.set(.5),o.x=l.width/2,o.y=l.height/2),0!==i&&TweenMax.set(o,{alpha:0}),d.addChild(o)}},!0===n.autoPlay){var u=new PIXI.ticker.Ticker;u.autoStart=n.autoPlay,u.add(function(e){h.x+=n.autoPlaySpeed[0]*e,h.y+=n.autoPlaySpeed[1],l.render(c)})}else{var y=new PIXI.ticker.Ticker;y.autoStart=!0,y.add(function(e){l.render(c)})}var m=!1,v=d.children;this.moveSlider=function(e){m=!0;var t=new TimelineMax({onComplete:function(){s.currentIndex=e,m=!1,!0===n.wacky&&h.scale.set(1)},onUpdate:function(){!0===n.wacky&&(h.rotation+=.02*t.progress(),h.scale.set(3*t.progress()))}});t.clear(),t.isActive()||t.to(p.scale,1,{x:n.displaceScale[0],y:n.displaceScale[1]}).to(v[s.currentIndex],.5,{alpha:0}).to(v[e],.5,{alpha:1}).to(p.scale,1,{x:n.displaceScaleTo[0],y:n.displaceScaleTo[1]})};for(var x=n.navElement,f=0;f<x.length;f++){x[f].onclick=function(t){if(m)return!1;var n;n="next"===this.getAttribute("data-nav")?s.currentIndex>=0&&s.currentIndex<v.length-1?s.currentIndex+1:0:s.currentIndex>0&&s.currentIndex<v.length?s.currentIndex-1:spriteImages.length-1,s.moveSlider(n);var o=e-n;return window.setTimeout(function(){i(o),r(n),a(n)},1500),!1}}for(var P=0;P<t.demoElement.length;P++)!function(n){var o=t.demoElement;o[n].onclick=function(t){if(m)return!1;var l=parseInt(e/o.length,10),c=l*n;s.moveSlider(c);var d=e-c;window.setTimeout(function(){i(d),r(c),a(c)},1500)}}(P);if(this.init=function(){s.initPixi(),s.loadPixiSprites(n.pixiSprites),e=n.pixiSprites.length,i(e)},!0===n.interactive){var g,S,I;d.interactive=!0,d.buttonMode=!0,"hover"!==n.interactionEvent&&"both"!==n.interactionEvent||(d.pointerover=function(e){S=e.data.global.x,I=e.data.global.y,TweenMax.to(p.scale,1,{x:"+="+100*Math.sin(S),y:"+="+100*Math.cos(I)}),o()},d.pointerout=function(e){TweenMax.to(p.scale,1,{x:0,y:0}),cancelAnimationFrame(g)}),"click"!==n.interactionEvent&&"both"!==n.interactionEvent||(d.pointerup=function(e){!0===n.dispatchPointerOver?TweenMax.to(p.scale,1,{x:0,y:0,onComplete:function(){TweenMax.to(p.scale,1,{x:20,y:20})}}):(TweenMax.to(p.scale,1,{x:0,y:0}),cancelAnimationFrame(g))},d.pointerdown=function(e){S=e.data.global.x,I=e.data.global.y,TweenMax.to(p.scale,1,{x:"+="+1200*Math.sin(S),y:"+="+200*Math.cos(I)})},d.pointerout=function(e){!0===n.dispatchPointerOver?TweenMax.to(p.scale,1,{x:0,y:0,onComplete:function(){TweenMax.to(p.scale,1,{x:20,y:20})}}):(TweenMax.to(p.scale,1,{x:0,y:0}),cancelAnimationFrame(g))})}!0===n.displacementCenter&&(h.anchor.set(.5),h.x=l.view.width/2,h.y=l.view.height/2),this.init()}}();