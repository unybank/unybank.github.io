var sliderIndex=1;showSlider(sliderIndex);function dotsCount(){var sliders=document.getElementsByClassName("card-items");var node;var dotsTag;for(var i=0;i<sliders.length;i++){node=document.createElement("span");var attr=document.createAttribute("class");attr.value="dot";node.setAttribute("onclick","currentSlide("+(i+1)+")");if(i===0){attr.value+=" active-dot";}
node.setAttributeNode(attr);dotsTag=document.getElementById("slide-oval");dotsTag.appendChild(node);}}
function defaultSlide(n){showSlider(sliderIndex=n);}
function currentSlide(n){showSlider(sliderIndex=n);}
function nextProduct(){}
function previousProduct(n){showSlider(sliderIndex+=n);}
function showSlider(n){var i;var sliders=document.getElementsByClassName("card-items");var dots=document.getElementsByClassName("dot");var node=document.createElement("span");var attr=document.createAttribute("class");attr.value="dot";node.setAttributeNode(attr);if(n>sliders.length){sliderIndex=1;}
if(n<1){sliderIndex=sliders.length;}
for(i=0;i<sliders.length;i++){sliders[i].className=sliders[i].className.replace("show","");sliders[i].classList.remove('hide');sliders[i].className+=" hide";}
for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active-dot","");}
sliders[sliderIndex-1].className+=" show";if(typeof dots[sliderIndex-1]!=='undefined'){dots[sliderIndex-1].className+=" active-dot";}}
function operation(){modal=document.getElementById("modal-box").className+=" show";}
function payment(){modal=document.getElementById("modal-box").className+=" show";}
function closes(){var classname=document.getElementById("modal-box").classList;if(classname.contains('show')){document.getElementById("modal-box").classList.remove("show");}}
function closes2(){var classname2=document.getElementById("modal-box-email").classList;if(classname2.contains('show')){document.getElementById("modal-box-email").classList.remove("show");}}
function email_modal(){modal=document.getElementById("modal-box-email").className+=" show";}