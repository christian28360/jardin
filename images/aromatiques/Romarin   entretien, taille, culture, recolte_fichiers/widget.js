(function(f){var k=function(e){var a={v:"3.1",url:"http://widget.achetezfacile.com"};a.div_id="widget_"+Math.round(5E3*Math.random());for(var b in e)a[b]=e[b];var f=/^(?:af|td):([0-9]+):/i.exec(a.wvar_zone)[1];a.wvar_url=267!=f&&273!=f?encodeURIComponent("undefined"==typeof a.wvar_url?/#/.test(document.location.href)?document.location.href.split("#")[0]:document.location.href:a.wvar_url):"";"undefined"==typeof window.inshop&&(window.inshop={});"undefined"==typeof window.inshop.widgets_datas&&(window.inshop.widgets_datas=
[]);if("undefined"==typeof e.resultats){"undefined"==typeof window.inshop.callback&&window.postMessage&&(window.inshop.callback=function(a){data=unescape(a.data).split("|:|");data={div_id:data[0],resultat:data[1]};null!=document.getElementById(data.div_id)&&("zone_vide"==data.resultat&&(document.getElementById(data.div_id).style.display="none"),"undefined"!=typeof window.inshop.widgets_datas[data.div_id]&&"undefined"!=typeof window.inshop.widgets_datas[data.div_id].wvar_callback&&eval("("+window.inshop.widgets_datas[data.div_id].wvar_callback+
")(data)"))},"undefined"!=typeof window.addEventListener?window.addEventListener("message",window.inshop.callback,!1):"undefined"!=typeof window.attachEvent&&window.attachEvent("onmessage",window.inshop.callback));b=a.url+"/widget?v="+a.v+"&format=iframe";b+="&wvar_zone="+a.wvar_zone;b+="&wvar_url="+a.wvar_url;b+="undefined"!=typeof a.wvar_tag?"&wvar_tag="+a.wvar_tag:"";b+="undefined"!=typeof a.wvar_skin?"&wvar_skin="+a.wvar_skin:"";if("undefined"!=typeof a.wvar_tracker){b+="&wvar_tracker=1";for(var g in a.wvar_tracker)b+=
"&"+encodeURIComponent(g)+"="+encodeURIComponent(a.wvar_tracker[g])}b+="#"+a.div_id;g=/:([0-9]+)x([0-9]+)$/i.exec(a.wvar_zone);var d=document.createElement("IFRAME");d.id=a.div_id+"_iframe";d.src=b;d.name=d.id;d.width=parseInt(g[1]);d.height=parseInt(g[2]);d.scrolling="no";d.frameBorder="0";d.marginWidth="0";d.marginHeight="0";d.allowTransparency="true";d.setAttribute("allowtransparency","true");d.setAttribute("vspace","0");d.setAttribute("hspace","0");a.wvar_append=a.wvar_append||a.div_appendChild||
!1;a.wvar_append?(b=document.createElement("div"),b.className="widget_achetezfacile",b.id=a.div_id,b.setAttribute("rel","zone="+a.wvar_zone),document.getElementById(a.wvar_append).appendChild(b)):document.write('<div class="widget_achetezfacile" id="'+a.div_id+'" rel="zone='+a.wvar_zone+'"></div>');var h=function(){if("undefined"==typeof e.isAppend)if(window.inshop.widgets_datas[a.div_id]=a,"undefined"!=typeof e.lazyload&&"lazyload"==e.lazyload){var b=window.pageYOffset||document.scrollTop||document.getElementsByTagName("body")[0].scrollTop,
c=window.innerHeight||(document.body.clientHeight?document.body:document.documentElement).clientHeight,f=document.getElementById(a.div_id).offsetTop;b+c>f-500&&(document.getElementById(a.div_id).appendChild(d),e.isAppend=!0);"undefined"==typeof e.scrollListener&&(addScrollListener=function(a){if(window.addEventListener)window.addEventListener("scroll",a,!1);else if(document.addEventListener)document.addEventListener("scroll",a,!1);else if(window.attachEvent)window.attachEvent("onscroll",a);else if("function"!=
typeof window.onscroll)window.onscroll=a;else{var b=window.onscroll;window.onscroll=function(){b();a()}}},addScrollListener(function(){h()}),e.scrollListener=!0)}else document.getElementById(a.div_id).appendChild(d),e.isAppend=!0};null!=document.getElementById(a.div_id)?h():function(a){if(window.addEventListener)window.addEventListener("load",a,!1);else if(document.addEventListener)document.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a);else if("function"!=
typeof window.onload)window.onload=a;else{var b=window.onload;window.onload=function(){b();a()}}}(function(){h()})}else{var c=jQuery;a.wvar_npage=0;a.num_max_page=4;a.nb_items=0;a.encours=!1;a.wvar_zone="";a.wvar_action="";a.wvar_skin="";a.wvar_tag="";a.wvar_url="";a.wvar_q="";a.resultats={};(function(){for(var b in e)a[b]=e[b];a.div_id="#"+a.resultats.widget.php_skin.div_id;267!=f&&273!=f&&(a.wvar_url="undefined"==typeof a.wvar_url||""==a.wvar_url?"undefined"==typeof a.resultats.widget.php_wvars.url?
encodeURIComponent(/#/.test(document.location.href)?document.location.href.split("#")[0]:document.location.href):a.resultats.widget.php_wvars.url:a.wvar_url);c(a.div_id).attr("rel","zone="+a.wvar_zone);c(".go_fiche").live("hover",function(){c(this).attr("href",unescape(c(this).attr("rel"))).attr("target","_blank")});"selection"==a.resultats.widget.php_wvars.action&&(a.wvar_npage=1,a.width=c(".list",a.div_id).width(),a.nb_items=c(".item",a.div_id).length,c(".list",a.div_id).width(parseInt(c(".item",
a.div_id).innerWidth()*a.nb_items)+150),c(".prev",a.div_id).click(function(){1<a.wvar_npage&&(a.wvar_npage--,c(".list",a.div_id).animate({left:"+="+a.width+"px"},"slow"));return!1}),c(".next",a.div_id).click(function(){a.wvar_npage<a.num_max_page?("undefined"==typeof a.nb_items_par_page&&"undefined"!=typeof a.resultats.widget&&(a.nb_items_par_page=parseInt(a.resultats.widget.php_skin.nb_items)),a.wvar_npage<a.nb_items/a.nb_items_par_page?(a.wvar_npage++,c(".list",a.div_id).animate({left:"-="+a.width+
"px"},"slow")):a.encours||(a.encours=!0,c.getJSON(a.url+"/widget?v="+a.v+"&format=js&wvar_zone="+a.wvar_zone+(""!=a.wvar_url?"&wvar_url="+a.wvar_url:"")+(""!=a.wvar_tag?"&wvar_tag="+a.wvar_tag:"")+(""!=a.wvar_skin?"&wvar_skin="+a.wvar_skin:"")+"&wvar_npage="+(a.wvar_npage+1),function(b){a.resultats=b;"undefined"!=typeof a.resultats.contenu&&c(".item",a.resultats.contenu).length?(a.wvar_npage++,a.nb_items=parseInt(a.nb_items)+parseInt(a.resultats.widget.php_skin.nb_items),c(".list",a.div_id).width(parseInt(c(".item",
a.div_id).innerWidth()*a.nb_items)+150),c(".list",a.div_id).append(a.resultats.contenu).trigger("success",[a.wvar_npage]),c(".list",a.div_id).animate({left:"-="+a.width+"px"},"slow")):(a.num_max_page=a.wvar_npage,a.wvar_npage=1,c(".list",a.div_id).trigger("error"),c(".list",a.div_id).animate({left:"+="+a.width*(a.num_max_page-1)+"px"},"slow"));a.encours=!1}))):(a.num_max_page=a.wvar_npage,a.wvar_npage=1,c(".list",a.div_id).trigger("error"),c(".list",a.div_id).animate({left:"+="+a.width*(a.num_max_page-
1)+"px"},"slow"));return!1}))})()}};if("undefined"!==typeof f.wvar_zone)k(f);else for(var l in f)k(f[l])})(wvars);