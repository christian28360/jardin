function flyMenu()
{var i,shift,obj,props,flydown=$("a.flydown"),flyup=$("a.flyup");for(i=0;i<flydown.length;i++){shift=null;props=flydown[i].id.split("_");if(props&&props.length>1&&(props[1]=="fly"||(props[1]==parseInt(props[1])&&props[2]==parseInt(props[2])))){if(props[3]&&props[3]==parseInt(props[3])){shift=parseInt(props[3]);}
else if(props[1]=="fly"&&props[2]&&props[2]==parseInt(props[2])){shift=parseInt(props[2]);}
obj=$(flydown[i]).parent();if(shift){shift=((props[2]&&parseInt(props[2])>obj.attr("offsetWidth")&&parseInt($("#"+props[0]).css("width"))>obj.attr("offsetWidth"))?(obj.attr("offsetWidth")-parseInt($("#"+props[0]).css("width"))):((props[2]==parseInt(props[2]))?props[2]:0));}
if(props[1]&&props[1]==parseInt(props[1])&&props[2]&&props[2]==parseInt(props[2])){$(flydown[i]).after("<span id=\""+props[0]+"\" class=\"flybox flydown\" style=\"top:"+
obj.attr("offsetHeight")+"px; width:"+props[1]+"px; height:"+props[2]+"px"+((props[3]&&props[3]==parseInt(props[3]))?"; margin-left:-"+props[3]+"px":"")+"\">"+"<div class=\"flyload\" style=\"text-align:center; margin-top:50px\">"+"<img src=\"/img/page_loading.gif\" width=\"187\""+" height=\"105\" alt=\"Loading\" /><br />Please Wait…<\/div><\/span>");}
else{$("#"+props[0]).css({top:obj.attr("offsetHeight")+"px",margin:((shift)?"0px 0px 0px "+shift:0)+"px"});}
$(flydown[i]).hover(function(){$(this.parentNode).addClass("goFocus").removeClass("goBlur");},function(){});$(flydown[i].parentNode).hover(function(){if(document.all&&!window.XMLHttpRequest){$("select").css({visibility:"hidden"});$("#site_header select").css({visibility:"visible"});}
props=$(this).find("a:first-child").attr("id").split("_");obj=$("#"+props[0]);if($("#"+props[0]+" div").hasClass("flyload")){obj.load(this.href,null,function(){$("#"+props[0]).css({width:props[1]+"px",whiteSpace:"normal"});});}
obj.css({display:"block"});$(this).addClass("goFocus").removeClass("goBlur");},function(){if(document.all&&!window.XMLHttpRequest){$("select").css({visibility:"visible"});}
props=$($(this).children("a")[0]).attr("id").split("_");if(props){$("#"+props[0]).css({display:"none"});}
$(this).addClass("goBlur").removeClass("goFocus");});}}
for(i=0;i<flyup.length;i++){shift=null;props=flyup[i].id.split("_");if(props&&props.length>1&&(props[1]=="fly"||(props[1]==parseInt(props[1])&&props[2]==parseInt(props[2])))){if(props[3]&&props[3]==parseInt(props[3])){shift=parseInt(props[3]);}
else if(props[1]=="fly"&&props[2]&&props[2]==parseInt(props[2])){shift=parseInt(props[2]);}
obj=$(flyup[i]).parent();if(shift){shift=((props[2]&&parseInt(props[2])>obj.attr("offsetWidth")&&parseInt($("#"+props[0]).css("width"))>obj.attr("offsetWidth"))?(obj.attr("offsetWidth")-parseInt($("#"+props[0]).css("width"))):((props[2]==parseInt(props[2]))?props[2]:0));}
if(props[1]&&props[1]==parseInt(props[1])&&props[2]&&props[2]==parseInt(props[2])){$(flyup[i]).after("<div id=\""+props[0]+"\" class=\"flybox flyup\" style=\"bottom:"+
obj.attr("offsetHeight")+"px; width:"+props[1]+"px; height:"+props[2]+"px"+((props[3]&&props[3]==parseInt(props[3]))?"; margin-left:-"+props[3]+"px":"")+"\">"+"<div class=\"flyload\" style=\"text-align:center; margin-top:50px\">"+"<img src=\"/img/page_loading.gif\" width=\"187\""+" height=\"105\" alt=\"Loading\" /><br />Please Wait…<\/div><\/div>");}
else{var ie=(document.all&&!window.XMLHttpRequest)?-1:0;$("#"+props[0]).css({bottom:(obj.attr("offsetHeight")+ie)+"px",margin:((shift)?"0px 0px 0px "+shift:0)+"px"});}
$(flyup[i]).hover(function(){$(this.parentNode).addClass("goFocus").removeClass("goBlur");},function(){});$(flyup[i].parentNode).hover(function(){if(document.all&&!window.XMLHttpRequest){$("select").css({visibility:"hidden"});$("#site_header select").css({visibility:"visible"});}
props=$(this).find("a:first-child").attr("id").split("_");obj=$("#"+props[0]);if($("#"+props[0]+" div").hasClass("flyload")){obj.load(this.href,null,function(){$("#"+props[0]).css({width:props[1]+"px",whiteSpace:"normal"});});}
obj.css({display:"block"});$(this).addClass("goFocus").removeClass("goBlur");},function(){if(document.all&&!window.XMLHttpRequest){$("select").css({visibility:"visible"});}
props=$($(this).children("a")[0]).attr("id").split("_");if(props){$("#"+props[0]).css({display:"none"});}
$(this).addClass("goBlur").removeClass("goFocus");});}}}
$(document).ready(function(){$("img").attr("title",function(){return this.alt;});$("form.search").bind("submit",function(){if(this.text){this.text.value=this.text.value.replace(/\s*$/,"").replace(/^\s*/,"");if(this.text.value.match(/\w+/)&&this.text.value.toLowerCase()!="search"){this.attr1.value=this.text.value;return true;}
else{alert("You must enter a search term.");}}
return false;});$("form.search input#searchtxt").click(function(){if(this.value.toLowerCase()=="search"){this.value="";}
this.className="searchFocus";}).focus(function(){if(this.value.toLowerCase()=="search"){this.value="";}
this.className="searchFocus";}).blur(function(){if(this.value==""){this.value="Search";}
this.className="searchBlur";});flyMenu();});