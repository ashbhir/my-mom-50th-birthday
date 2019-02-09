"use strict";!function(){var e,t={slidesLeft:document.getElementById("things-left"),byWhom:document.getElementById("by-whom"),demoElement:document.getElementsByClassName("demo")},n=!0;window.CanvasSlideshow=function(a){function i(e){var n=byWhom[e];t.byWhom.textContent=n?"By "+n:""}function r(n){for(var a=t.demoElement,i=parseInt(e/a.length,10),r=parseInt(n/i,10),o=0;o<a.length;o++){var s=a[o];s.classList.remove("demo--current"),o===r&&s.classList.add("demo--current")}}function o(){document.getElementsByClassName("scene-nav--prev")[0].style.visibility="visible",n=!1}function s(){p.rotation+=.001,S=requestAnimationFrame(s)}var l=this;a=a||{},a.stageWidth=a.hasOwnProperty("stageWidth")?a.stageWidth:1920,a.stageHeight=a.hasOwnProperty("stageHeight")?a.stageHeight:1080,a.pixiSprites=a.hasOwnProperty("sprites")?a.sprites:[],a.centerSprites=!!a.hasOwnProperty("centerSprites")&&a.centerSprites,a.texts=a.hasOwnProperty("texts")?a.texts:[],a.autoPlay=!a.hasOwnProperty("autoPlay")||a.autoPlay,a.autoPlaySpeed=a.hasOwnProperty("autoPlaySpeed")?a.autoPlaySpeed:[10,3],a.fullScreen=!a.hasOwnProperty("fullScreen")||a.fullScreen,a.displaceScale=a.hasOwnProperty("displaceScale")?a.displaceScale:[200,70],a.displacementImage=a.hasOwnProperty("displacementImage")?a.displacementImage:"",a.navElement=a.hasOwnProperty("navElement")?a.navElement:document.querySelectorAll(".scene-nav"),a.displaceAutoFit=!!a.hasOwnProperty("displaceAutoFit")&&a.displaceAutoFit,a.wacky=!!a.hasOwnProperty("wacky")&&a.wacky,a.interactive=!!a.hasOwnProperty("interactive")&&a.interactive,a.interactionEvent=a.hasOwnProperty("interactionEvent")?a.interactionEvent:"",a.displaceScaleTo=!1===a.autoPlay?[0,0]:[20,20],a.textColor=a.hasOwnProperty("textColor")?a.textColor:"#fff",a.displacementCenter=!!a.hasOwnProperty("displacementCenter")&&a.displacementCenter,a.dispatchPointerOver=!!a.hasOwnProperty("dispatchPointerOver")&&a.dispatchPointerOver;var c=new PIXI.autoDetectRenderer(a.stageWidth,a.stageHeight,{transparent:!0}),d=new PIXI.Container,h=new PIXI.Container,p=new PIXI.Sprite.fromImage(a.displacementImage),u=new PIXI.filters.DisplacementFilter(p),w=new PIXI.TextStyle({dropShadow:!0,dropShadowAlpha:.4,dropShadowBlur:2,dropShadowColor:"white",fill:"white",fontFamily:'"Comic Sans MS", cursive, sans-serif',fontSize:46,fontStyle:"italic",fontVariant:"small-caps",fontWeight:"bold",letterSpacing:3,wordWrap:!0,wordWrapWidth:400});if(this.currentIndex=0,this.initPixi=function(){document.body.appendChild(c.view),d.addChild(h),d.interactive=!0,!0===a.fullScreen?(c.view.style.objectFit="cover",c.view.style.width="100%",c.view.style.height="100%",c.view.style.top="50%",c.view.style.left="50%",c.view.style.webkitTransform="translate( -50%, -50% ) scale(1)",c.view.style.transform="translate( -50%, -50% ) scale(1)"):(c.view.style.maxWidth="100%",c.view.style.top="50%",c.view.style.left="50%",c.view.style.webkitTransform="translate( -50%, -50% )",c.view.style.transform="translate( -50%, -50% )"),p.texture.baseTexture.wrapMode=PIXI.WRAP_MODES.REPEAT,d.filters=[u],!1===a.autoPlay&&(u.scale.x=0,u.scale.y=0),!0===a.wacky&&(p.anchor.set(.5),p.x=c.width/2,p.y=c.height/2),p.scale.x=2,p.scale.y=2,u.autoFit=a.displaceAutoFit,d.addChild(p)},this.loadPixiSprites=function(e){for(var t=a.sprites,n=a.texts,i=0;i<t.length;i++){var r=new PIXI.Texture.fromImage(e[i]),o=new PIXI.Sprite(r);if(n){var s=new PIXI.Text(n[i],w);o.addChild(s),s.anchor.set(.5),s.x=o.width/2,s.y=o.height/2}!0===a.centerSprites&&(o.anchor.set(.5),o.x=c.width/2,o.y=c.height/2),0!==i&&TweenMax.set(o,{alpha:0}),h.addChild(o)}},!0===a.autoPlay){var y=new PIXI.ticker.Ticker;y.autoStart=a.autoPlay,y.add(function(e){p.x+=a.autoPlaySpeed[0]*e,p.y+=a.autoPlaySpeed[1],c.render(d)})}else{var m=new PIXI.ticker.Ticker;m.autoStart=!0,m.add(function(e){c.render(d)})}var v=!1,f=h.children;this.moveSlider=function(e){v=!0;var t=new TimelineMax({onComplete:function(){l.currentIndex=e,v=!1,!0===a.wacky&&p.scale.set(1)},onUpdate:function(){!0===a.wacky&&(p.rotation+=.02*t.progress(),p.scale.set(3*t.progress()))}});t.clear(),t.isActive()||t.to(u.scale,1,{x:a.displaceScale[0],y:a.displaceScale[1]}).to(f[l.currentIndex],.5,{alpha:0}).to(f[e],.5,{alpha:1}).to(u.scale,1,{x:a.displaceScaleTo[0],y:a.displaceScaleTo[1]})};for(var x=a.navElement,P=0;P<x.length;P++){x[P].onclick=function(e){if(v)return!1;var t;t="next"===this.getAttribute("data-nav")?l.currentIndex>=0&&l.currentIndex<f.length-1?l.currentIndex+1:0:l.currentIndex>0&&l.currentIndex<f.length?l.currentIndex-1:spriteImages.length-1,l.moveSlider(t);return window.setTimeout(function(){r(t),i(t),n&&o()},1500),!1}}for(var g=0;g<t.demoElement.length;g++)!function(n){var a=t.demoElement;a[n].onclick=function(t){if(v)return!1;var o=parseInt(e/a.length,10),s=o*n;l.moveSlider(s),window.setTimeout(function(){r(s),i(s)},1500)}}(g);if(this.init=function(){new FontFace("Comic Sans MS","url(fonts/comic-sans-ms.ttf)").load().then(function(t){document.fonts&&document.fonts.add(t),l.initPixi(),l.loadPixiSprites(a.pixiSprites),e=a.pixiSprites.length})},!0===a.interactive){var S,I,T;h.interactive=!0,h.buttonMode=!0,"hover"!==a.interactionEvent&&"both"!==a.interactionEvent||(h.pointerover=function(e){I=e.data.global.x,T=e.data.global.y,TweenMax.to(u.scale,1,{x:"+="+100*Math.sin(I),y:"+="+100*Math.cos(T)}),s()},h.pointerout=function(e){TweenMax.to(u.scale,1,{x:0,y:0}),cancelAnimationFrame(S)}),"click"!==a.interactionEvent&&"both"!==a.interactionEvent||(h.pointerup=function(e){!0===a.dispatchPointerOver?TweenMax.to(u.scale,1,{x:0,y:0,onComplete:function(){TweenMax.to(u.scale,1,{x:20,y:20})}}):(TweenMax.to(u.scale,1,{x:0,y:0}),cancelAnimationFrame(S))},h.pointerdown=function(e){I=e.data.global.x,T=e.data.global.y,TweenMax.to(u.scale,1,{x:"+="+1200*Math.sin(I),y:"+="+200*Math.cos(T)})},h.pointerout=function(e){!0===a.dispatchPointerOver?TweenMax.to(u.scale,1,{x:0,y:0,onComplete:function(){TweenMax.to(u.scale,1,{x:20,y:20})}}):(TweenMax.to(u.scale,1,{x:0,y:0}),cancelAnimationFrame(S))})}!0===a.displacementCenter&&(p.anchor.set(.5),p.x=c.view.width/2,p.y=c.view.height/2),this.init()}}();