!function(e){e.fn.poptrox_disableSelection=function(){return e(this).css("user-select","none").css("-khtml-user-select","none").css("-moz-user-select","none").css("-o-user-select","none").css("-webkit-user-select","none")},e.fn.poptrox=function(o){if(0==this.length)return e(this);if(this.length>1){for(var t=0;t<this.length;t++)e(this[t]).poptrox(o);return e(this)}var p,i,s,r=e.extend({preload:!1,baseZIndex:1e3,fadeSpeed:300,overlayColor:"#000000",overlayOpacity:.6,overlayClass:"poptrox-overlay",windowMargin:50,windowHeightPad:0,selector:"a",caption:null,parent:"body",popupSpeed:300,popupWidth:200,popupHeight:100,popupIsFixed:!1,useBodyOverflow:!1,usePopupEasyClose:!0,usePopupForceClose:!1,usePopupLoader:!0,usePopupCloser:!0,usePopupCaption:!1,usePopupNav:!1,usePopupDefaultStyling:!0,popupBackgroundColor:"#FFFFFF",popupTextColor:"#000000",popupLoaderTextSize:"2em",popupCloserBackgroundColor:"#000000",popupCloserTextColor:"#FFFFFF",popupCloserTextSize:"20px",popupPadding:10,popupCaptionHeight:60,popupCaptionTextSize:null,popupBlankCaptionText:"(untitled)",popupCloserText:"&#215;",popupLoaderText:"&bull;&bull;&bull;&bull;",popupClass:"poptrox-popup",popupSelector:null,popupLoaderSelector:".loader",popupCloserSelector:".closer",popupCaptionSelector:".caption",popupNavPreviousSelector:".nav-previous",popupNavNextSelector:".nav-next",onPopupClose:null,onPopupOpen:null},o),n=e(this),a=e("body"),l=e('<div class="'+r.overlayClass+'"></div>'),u=e(window),d=[],h=0,g=!1,f=new Array,x=function(){p=u.width(),i=u.height()+r.windowHeightPad;var e=Math.abs(s.width()-s.outerWidth()),o=Math.abs(s.height()-s.outerHeight()),t=p-2*r.windowMargin-e,n=i-2*r.windowMargin-o;s.css("min-width",r.popupWidth).css("min-height",r.popupHeight),b.children().css("max-width",t).css("max-height",n)};r.usePopupLoader||(r.popupLoaderSelector=null),r.usePopupCloser||(r.popupCloserSelector=null),r.usePopupCaption||(r.popupCaptionSelector=null),r.usePopupNav||(r.popupNavPreviousSelector=null,r.popupNavNextSelector=null);var v,w,b=(s=e(r.popupSelector?r.popupSelector:'<div class="'+r.popupClass+'">'+(r.popupLoaderSelector?'<div class="loader">'+r.popupLoaderText+"</div>":"")+'<div class="pic"></div>'+(r.popupCaptionSelector?'<div class="caption"></div>':"")+(r.popupCloserSelector?'<span class="closer">'+r.popupCloserText+"</span>":"")+(r.popupNavPreviousSelector?'<div class="nav-previous"></div>':"")+(r.popupNavNextSelector?'<div class="nav-next"></div>':"")+"</div>")).find(".pic"),m=e(),C=s.find(r.popupLoaderSelector),y=s.find(r.popupCaptionSelector),S=s.find(r.popupCloserSelector),P=s.find(r.popupNavNextSelector),k=s.find(r.popupNavPreviousSelector),T=P.add(k);return r.usePopupDefaultStyling&&(s.css("background",r.popupBackgroundColor).css("color",r.popupTextColor).css("padding",r.popupPadding+"px"),y.length>0&&(s.css("padding-bottom",r.popupCaptionHeight+"px"),y.css("position","absolute").css("left","0").css("bottom","0").css("width","100%").css("text-align","center").css("height",r.popupCaptionHeight+"px").css("line-height",r.popupCaptionHeight+"px"),r.popupCaptionTextSize&&y.css("font-size",popupCaptionTextSize)),S.length>0&&S.html(r.popupCloserText).css("font-size",r.popupCloserTextSize).css("background",r.popupCloserBackgroundColor).css("color",r.popupCloserTextColor).css("display","block").css("width","40px").css("height","40px").css("line-height","40px").css("text-align","center").css("position","absolute").css("text-decoration","none").css("outline","0").css("top","0").css("right","-40px"),C.length>0&&C.html("").css("position","relative").css("font-size",r.popupLoaderTextSize).on("startSpinning",(function(o){var t=e("<div>"+r.popupLoaderText+"</div>");t.css("height",Math.floor(r.popupHeight/2)+"px").css("overflow","hidden").css("line-height",Math.floor(r.popupHeight/2)+"px").css("text-align","center").css("margin-top",Math.floor((s.height()-t.height()+(y.length>0?y.height():0))/2)).css("color",r.popupTextColor?r.popupTextColor:"").on("xfin",(function(){t.fadeTo(300,.5,(function(){t.trigger("xfout")}))})).on("xfout",(function(){t.fadeTo(300,.05,(function(){t.trigger("xfin")}))})).trigger("xfin"),C.append(t)})).on("stopSpinning",(function(e){C.find("div").remove()})),2==T.length)&&(T.css("font-size","75px").css("text-align","center").css("color","#fff").css("text-shadow","none").css("height","100%").css("position","absolute").css("top","0").css("opacity","0.35").css("cursor","pointer").css("box-shadow","inset 0px 0px 10px 0px rgba(0,0,0,0)").poptrox_disableSelection(),r.usePopupEasyClose?(v="100px",w="100px"):(v="75%",w="25%"),P.css("right","0").css("width",v).html('<div style="position: absolute; height: 100px; width: 125px; top: 50%; right: 0; margin-top: -50px;">&gt;</div>'),k.css("left","0").css("width",w).html('<div style="position: absolute; height: 100px; width: 125px; top: 50%; left: 0; margin-top: -50px;">&lt;</div>')),u.on("resize orientationchange",(function(){x()})),y.on("update",(function(e,o){o&&0!=o.length||(o=r.popupBlankCaptionText),y.html(o)})),S.css("cursor","pointer").on("click",(function(e){return e.preventDefault(),e.stopPropagation(),s.trigger("poptrox_close"),!0})),P.on("click",(function(e){e.stopPropagation(),e.preventDefault(),s.trigger("poptrox_next")})),k.on("click",(function(e){e.stopPropagation(),e.preventDefault(),s.trigger("poptrox_previous")})),l.css("position","fixed").css("left",0).css("top",0).css("z-index",r.baseZIndex).css("width","100%").css("height","100%").css("text-align","center").css("cursor","pointer").appendTo(r.parent).prepend('<div style="display:inline-block;height:100%;vertical-align:middle;"></div>').append('<div style="position:absolute;left:0;top:0;width:100%;height:100%;background:'+r.overlayColor+";opacity:"+r.overlayOpacity+";filter:alpha(opacity="+100*r.overlayOpacity+');"></div>').hide().on("touchmove",(function(e){return!1})).on("click",(function(e){e.preventDefault(),e.stopPropagation(),s.trigger("poptrox_close")})),s.css("display","inline-block").css("vertical-align","middle").css("position","relative").css("z-index",1).css("cursor","auto").appendTo(l).hide().on("poptrox_next",(function(){var e=h+1;e>=d.length&&(e=0),s.trigger("poptrox_switch",[e])})).on("poptrox_previous",(function(){var e=h-1;e<0&&(e=d.length-1),s.trigger("poptrox_switch",[e])})).on("poptrox_reset",(function(){x(),s.data("width",r.popupWidth).data("height",r.popupHeight),C.hide().trigger("stopSpinning"),y.hide(),S.hide(),T.hide(),b.hide(),m.attr("src","").detach()})).on("poptrox_open",(function(e,o){return!!g||(g=!0,r.useBodyOverflow&&a.css("overflow","hidden"),r.onPopupOpen&&r.onPopupOpen(),s.addClass("loading"),void l.fadeTo(r.fadeSpeed,1,(function(){s.trigger("poptrox_switch",[o,!0])})))})).on("poptrox_switch",(function(o,t,p){var i,n,a;if(!p&&g)return!0;g=!0,s.addClass("loading").css("width",s.data("width")).css("height",s.data("height")),y.hide(),m.attr("src")&&m.attr("src",""),m.detach(),i=d[t],(m=i.object).off("load"),b.css("text-indent","-9999px").show().append(m),"ajax"==i.type?e.get(i.src,(function(e){m.html(e),m.trigger("load")})):m.attr("src",i.src),"image"!=i.type&&(n=i.width,a=i.height,"%"==n.slice(-1)&&(n=parseInt(n.substring(0,n.length-1))/100*u.width()),"%"==a.slice(-1)&&(a=parseInt(a.substring(0,a.length-1))/100*u.height()),m.css("position","relative").css("outline","0").css("z-index",r.baseZIndex+100).width(n).height(a)),C.trigger("startSpinning").fadeIn(300),s.show(),r.popupIsFixed?(s.removeClass("loading").width(r.popupWidth).height(r.popupHeight),m.on("load",(function(){m.off("load"),C.hide().trigger("stopSpinning"),y.trigger("update",[i.captionText]).fadeIn(r.fadeSpeed),S.fadeIn(r.fadeSpeed),b.css("text-indent",0).hide().fadeIn(r.fadeSpeed,(function(){g=!1})),h=t,T.fadeIn(r.fadeSpeed)}))):m.on("load",(function(){x(),m.off("load"),C.hide().trigger("stopSpinning");var e=m.width(),o=m.height(),p=function(){y.trigger("update",[i.captionText]).fadeIn(r.fadeSpeed),S.fadeIn(r.fadeSpeed),b.css("text-indent",0).hide().fadeIn(r.fadeSpeed,(function(){g=!1})),h=t,T.fadeIn(r.fadeSpeed),s.removeClass("loading").data("width",e).data("height",o).css("width","auto").css("height","auto")};e==s.data("width")&&o==s.data("height")?p():s.animate({width:e,height:o},r.popupSpeed,"swing",p)})),"image"!=i.type&&m.trigger("load")})).on("poptrox_close",(function(){return!(!g||r.usePopupForceClose)||(g=!0,s.hide().trigger("poptrox_reset"),r.onPopupClose&&r.onPopupClose(),void l.fadeOut(r.fadeSpeed,(function(){r.useBodyOverflow&&a.css("overflow","auto"),g=!1})))})).trigger("poptrox_reset"),r.usePopupEasyClose?(y.on("click","a",(function(e){e.stopPropagation()})),s.css("cursor","pointer").on("click",(function(e){e.stopPropagation(),e.preventDefault(),s.trigger("poptrox_close")}))):s.on("click",(function(e){e.stopPropagation()})),u.keydown((function(e){if(s.is(":visible"))switch(e.keyCode){case 37:case 32:if(r.usePopupNav)return s.trigger("poptrox_previous"),!1;break;case 39:if(r.usePopupNav)return s.trigger("poptrox_next"),!1;break;case 27:return s.trigger("poptrox_close"),!1}})),n.find(r.selector).each((function(o){var t,p=e(this),i=p.find("img"),n=p.data("poptrox");if("ignore"!=n&&p.attr("href")){if(t={src:p.attr("href"),captionText:i.attr("title"),width:null,height:null,type:null,object:null,options:null},r.caption){if("function"==typeof r.caption)c=r.caption(p);else if("selector"in r.caption){var a;a=p.find(r.caption.selector),"attribute"in r.caption?c=a.attr(r.caption.attribute):(c=a.html(),!0===r.caption.remove&&a.remove())}}else c=i.attr("title");if(t.captionText=c,n){var l=n.split(",");0 in l&&(t.type=l[0]),1 in l&&(u=l[1].match(/([0-9%]+)x([0-9%]+)/))&&3==u.length&&(t.width=u[1],t.height=u[2]),2 in l&&(t.options=l[2])}if(!t.type)switch(u=t.src.match(/\/\/([a-z0-9\.]+)\/.*/),(!u||u.length<2)&&(u=[!1]),u[1]){case"api.soundcloud.com":t.type="soundcloud";break;case"youtu.be":t.type="youtube";break;case"vimeo.com":t.type="vimeo";break;case"wistia.net":t.type="wistia";break;case"bcove.me":t.type="bcove";break;default:t.type="image"}switch(u=t.src.match(/\/\/[a-z0-9\.]+\/(.*)/),t.type){case"iframe":t.object=e('<iframe src="" frameborder="0"></iframe>'),t.object.on("click",(function(e){e.stopPropagation()})).css("cursor","auto"),t.width&&t.height||(t.width="600",t.height="400");break;case"ajax":t.object=e('<div class="poptrox-ajax"></div>'),t.object.on("click",(function(e){e.stopPropagation()})).css("cursor","auto").css("overflow","auto"),t.width&&t.height||(t.width="600",t.height="400");break;case"soundcloud":t.object=e('<iframe scrolling="no" frameborder="no" src=""></iframe>'),t.src="//w.soundcloud.com/player/?url="+escape(t.src)+(t.options?"&"+t.options:""),t.width="600",t.height="166";break;case"youtube":t.object=e('<iframe src="" frameborder="0" allowfullscreen="1"></iframe>'),t.src="//www.youtube.com/embed/"+u[1]+(t.options?"?"+t.options:""),t.width&&t.height||(t.width="800",t.height="480");break;case"vimeo":t.object=e('<iframe src="" frameborder="0" allowFullScreen="1"></iframe>'),t.src="//player.vimeo.com/video/"+u[1]+(t.options?"?"+t.options:""),t.width&&t.height||(t.width="800",t.height="480");break;case"wistia":t.object=e('<iframe src="" frameborder="0" allowFullScreen="1"></iframe>'),t.src="//fast.wistia.net/"+u[1]+(t.options?"?"+t.options:""),t.width&&t.height||(t.width="800",t.height="480");break;case"bcove":t.object=e('<iframe src="" frameborder="0" allowFullScreen="1" width="100%"></iframe>'),t.src="//bcove.me/"+u[1]+(t.options?"?"+t.options:""),t.width&&t.height||(t.width="640",t.height="360");break;default:var u;t.object=e('<img src="" alt="" style="vertical-align:bottom" />'),r.preload&&((u=document.createElement("img")).src=t.src,f.push(u)),t.width=p.attr("width"),t.height=p.attr("height")}"file:"==window.location.protocol&&t.src.match(/^\/\//)&&(t.src="http:"+t.src),d.push(t),i.removeAttr("title"),p.removeAttr("href").css("cursor","pointer").css("outline",0).on("click",(function(e){e.preventDefault(),e.stopPropagation(),s.trigger("poptrox_open",[o])}))}})),n.prop("_poptrox",r),n}}(jQuery);