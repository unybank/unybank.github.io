this.screenshotPreview=function(){xOffset=10;yOffset=30;$("a.infoScreen").hover(function(e){this.t=this.title;this.title="";var c=(this.t!=="")?"<br/>"+this.t:"";$("body").append("<p id='infoScreen'><img src='"+this.rel+"' alt='url preview' width='100%' />"+c+"</p>");$("#infoScreen").css("top",((e.pageY-xOffset)/0.95)+"px").css("left",((e.pageX+yOffset)/1.35)+"px").css("position","absolute").fadeIn("fast");},function(){this.title=this.t;$("#infoScreen").remove();});$("a.infoScreen").mousemove(function(e){$("#infoScreen").css("top",((e.pageY-xOffset)/0.95)+"px").css("left",((e.pageX+yOffset)/1.35)+"px");});};this.screenshotPhonePeview=function(){xOffset=10;yOffset=30;$("a.phoneInfoScreen").hover(function(e){this.t=this.title;this.title="";var c=(this.t!=="")?"<br/>"+this.t:"";$("body").append("<p id='phoneInfoScreen'><img src='"+this.rel+"' alt='url preview' width='100%' />"+c+"</p>");$("#phoneInfoScreen").css("top",((e.pageY-xOffset)/0.65)+"px").css("left",((e.pageX+yOffset)/1.15)+"px").css("position","absolute").fadeIn("fast");},function(){this.title=this.t;$("#phoneInfoScreen").remove();});$("a.phoneInfoScreen").mousemove(function(e){$("#phoneInfoScreen").css("top",((e.pageY-xOffset)/1.00)+"px").css("left",((e.pageX+yOffset)/1.25)+"px");});};$(document).ready(function(){screenshotPreview();screenshotPhonePeview();});