prlctrl = "&ctr=1328981154";
refererurl="http://server.bittads.com/ad-creative.ucw\*int\*instance=1832\*and\*ad=6\*and\*creative=4\*and\*zone=gerbeaud\*and\*loc=default%20location\*and\*client=1327693413578VECkNk";
if (refererurl=="") { refererurl=document.URL; } if (refererurl!="") {
function GCpurl_123547041316(t) { var dc=document.cookie,i,i2,co="-";
t+="="; i=dc.indexOf(t); if (i > -1) { i2=dc.indexOf(";",i); if (i2 < 0)
i2=dc.length; co=unescape(dc.substring( (i+(t.length)),i2)); } return
""+co; } tagstring = ""; pageid = ""; purldim = ""; if
(typeof(adpurl_dim) != "undefined") { purldim = '&dim=' + adpurl_dim; }
purldim = '&dim=728.90.3.1';var mycookie =
this.GCpurl_123547041316("__adpurl_123547041316"); //alert(mycookie);
var track_visit_ipua = 0; var track_visitorunic = 0; var track_pvm_ipua
= 1; if(mycookie=="") { track_visit_ipua=1; track_visitorunic=1; } else
{ var cook_array = mycookie.split("|"); if (cook_array[0]=="2012-02-11")
{ if ((1328981154 - cook_array[1])>1800) { track_visit_ipua = 1; } }
else { track_visit_ipua = 1; track_visitorunic = 1; } } var mytrack =
track_pvm_ipua + track_visit_ipua + track_visitorunic; var
d=document.domain; if(d.substring(0,4)=='www.')
d=d.substring(4,d.length); ut=' expires=Sun, 18 Jan 2038 00:00:00 GMT;';
document.cookie='__adpurl_123547041316=2012-02-11|1328981154;
path=/;'+ut+' domain='+d+';'; skipclic_1235470413166502 = ''; var
mycliccookie_1235470413166502 =
this.GCpurl_123547041316("adpurl_clc_123547041316");
if(mycliccookie_1235470413166502.length > 1) {
skipclic_1235470413166502= 'skip=' + mycliccookie_1235470413166502 +
'&'; } //if (navigator.appName=="Microsoft Internet Explorer") {
document.write('
<div
	id="adpurl_1235470413166502" style="display: none;"></div>
'); //} else { // var purl_texte = '
<div
	id="adpurl_1235470413166502" style="display: none;"></div>
'; //
document.getElementById("adpurl_alternative_101").InnerHTML=purl_texte;
//} purlfirst=0; function SqueereHTTP1235470413166502(url, instance) {
this.loaded = false; this.url=url; this.script; this.firstparam=true;
this.serverResponse; this.instance=instance; that=this; this.AddParam =
function(p, v) { if (that.firstparam) { that.url+='?'+p+'='+v;
that.firstparam=false; } else { that.url+='&'+p+'='+v; } }
this.Request1235470413166502 = function(force) { document.write("
<scr "+"ipt type=\
	"text/javascript\" src=\""+url+"\"></scr"+"ipt>
"); } this.onComplete1235470413167289031 = function(css, serverResponse)
{ } this.onLoad = function() { if (that.loaded) { return; }
that.loaded=true; }; return this; } function
DisplayOnComplete1235470413167289031(css, serverResponse, skip) { if
(css!='null') { document.write("
<link type=\
	"text/css\" href=\ ""+css+"\" rel=\"stylesheet\"></link>
"); } document.write(serverResponse); if
(document.getElementById('adpurl_1235470413166502'))
document.getElementById('adpurl_1235470413166502').style.display='';
purlfirst=1; urlrefresh1235470413166502=urlbase1235470413166502 +
'?skip=' + skip + '&' + urlquery01235470413166502;
myReq_1235470413166502 =
SqueereHTTP1235470413166502(urlrefresh1235470413166502,
'myReq_1235470413166502'); } function
DisplayOneMoreManual1235470413167289031() {
topelement=document.getElementById('1235470413167289031_1').innerHTML;
purlindice=1; while (document.getElementById("1235470413167289031_" +
(parseInt(purlindice)+1))) { temp =
document.getElementById('1235470413167289031_' +
(parseInt(purlindice)+1)).innerHTML;
document.getElementById('1235470413167289031_' +
purlindice).innerHTML=temp; purlindice++; }
document.getElementById('1235470413167289031_' +
purlindice).innerHTML=topelement; } function
DisplayOneMoreOnStart1235470413167289031(n) { for (ii=0; ii
<n ; ii++) {
        topelement=document.getElementById(
	'1235470413167289031_1').innerHTML;
        purlindice=1;
	while (document.getElementById("1235470413167289031_" + (parseInt(purlindice)+1))) {
          temp=document.getElementById(
	'1235470413167289031_' + (parseInt(purlindice)+1)).innerHTML;
          document.getElementById('1235470413167289031_' + purlindice).innerHTML=temp;
	purlindice++;
        }
        document.getElementById('1235470413167289031_' + purlindice).innerHTML=topelement;
	}
  } 

  function
	DisplayOneMore1235470413167289031(n) {
        //fadeOut_123547041316('adpurl_123547041316');
      for (ii=0;
	ii

<n ; ii++) {
        topelement=document.getElementById(
	'1235470413167289031_1').innerHTML;
        purlindice=1;
	while (document.getElementById("1235470413167289031_" + (parseInt(purlindice)+1))) {
          temp=document.getElementById(
	'1235470413167289031_' + (parseInt(purlindice)+1)).innerHTML;
          document.getElementById('1235470413167289031_' + purlindice).innerHTML=temp;
	purlindice++;
        }
        document.getElementById('1235470413167289031_' + purlindice).innerHTML=topelement;
	}
      setTimeout('DisplayOneMore1235470413167289031(' + n + ')',10000);
  }
   
  function
	DisplayOneMoreDisplay1235470413167289031(firstshow, numbershow, step) {
        purlindice=1;
	while (document.getElementById("1235470413167289031_" + (parseInt(purlindice)))) {
          temp=document.getElementById('1235470413167289031_' + (parseInt(purlindice)));
          if ((purlindice)>=firstshow && (purlindice)<(firstshow +
numbershow)) { temp.style.display=''; } else temp.style.display='none';
purlindice++; } purlindice--; //alert(purlindice+' '+firstshow+'
'+numbershow+' '+step); nextfirstshow = firstshow + step; if
(nextfirstshow + numbershow - 1 > purlindice) nextfirstshow = firstshow
+ 1; if (nextfirstshow + numbershow - 1 > purlindice) nextfirstshow = 1;
setTimeout('DisplayOneMoreDisplay1235470413167289031(' + nextfirstshow +
', '+ numbershow + ', '+ step + ')',10000); } function
swap1235470413167289031() { var topelement = new Array; for (i=1; i<=1;
i++) { topelement[i]=document.getElementById("1235470413167289031_" +
(i)).innerHTML; } purlindice=1; while
(document.getElementById("1235470413167289031_" +
(parseInt(purlindice)+1))) { temp =
document.getElementById("1235470413167289031_" +
(purlindice+1)).innerHTML;
document.getElementById("1235470413167289031_" +
purlindice).innerHTML=temp; purlindice++; } for (i=1; i<=1; i++) {
document.getElementById("1235470413167289031_" + (parseInt(purlindice -
1 + i))).innerHTML=topelement[i]; }
setTimeout('scrolling1235470413167289031()',10000); } function
scrolling1235470413167289031() { myObjfix =
document.getElementById('conteneur1235470413167289031'); yfix =
myObjfix.offsetLeft; myDiv1 =
document.getElementById('1235470413167289031_1'); myDiv2 =
document.getElementById('1235470413167289031_2'); //hmax=0;
if(myDiv1.offsetHeight) {hmax=myDiv1.offsetWidth;} else
if(myDiv1.style.pixelHeight){hmax=myDiv1.style.pixelWidth;} myObj =
document.getElementById('move1235470413167289031'); ytemp =
myObj.offsetLeft; //alert('hmax=' + hmax + ', ytemp=' + ytemp); if (hmax
+ ytemp <= 0) { myObj.style.left="0px"; swap1235470413167289031(); }
else { myObj.style.left= parseInt(ytemp) - 40 + "px";
setTimeout('scrolling1235470413167289031()',30); } } function
purlshow1235470413167289031() { purlindice=1; while
(document.getElementById("1235470413167289031_" +
(parseInt(purlindice)))) { temp =
document.getElementById("1235470413167289031_" +
(purlindice)).innerHTML; document.getElementById("1235470413167289031_"
+ purlindice).innerHTML="";
document.getElementById("1235470413167289031_" +
purlindice).innerHTML=temp; purlindice++; } myObj =
document.getElementById('move1235470413167289031'); myObj2 =
document.getElementById('adpurl2_1235470413166502'); if (myObj)
myObj.style.left="0px"; if (myObj2) myObj2.style.display=""; } if
(typeof(adpurl_already) == 'undefined') { function addEvent(obj, evType,
fn){ if (obj.addEventListener){ obj.addEventListener(evType, fn, false);
return true; } else if (obj.attachEvent){ var r =
obj.attachEvent("on"+evType, fn); return r; } else { return false; } }
adpurl_already = "y"; } if
(document.getElementsByName("adpurl-keywords").item(0)) { tagstring =
'&tag=' + document.getElementsByName("adpurl-keywords").item(0).content;
} else if (document.getElementById("adpurl-keywords")) { tagstring =
'&tag=' + document.getElementById("adpurl-keywords").content; } if
(document.getElementById("adpurl-pageid")) { pageid = '&pgid=' +
document.getElementById("adpurl-pageid").content; }

urlbase1235470413166502='http://pj.horyzon-media.com/php/displayad.php';
urlquery01235470413166502='cpurl=0'+'.123547041316'+ tagstring + pageid
+ purldim +
'&affiliate=1829633&url=http://clk.tradedoubler.com/click?p=117952&a=1829633&g=17919972&pools=398677&ref='
+ refererurl; urlquery11235470413166502='cpurl='+ mytrack
+'.123547041316'+ tagstring + pageid + prlctrl + purldim +
'&affiliate=1829633&url=http://clk.tradedoubler.com/click?p=117952&a=1829633&g=17919972&pools=398677&ref='
+ refererurl; url1235470413166502=urlbase1235470413166502 + '?' +
skipclic_1235470413166502 + urlquery11235470413166502;

myReq_1235470413166502 = new
SqueereHTTP1235470413166502(url1235470413166502,
'myReq_1235470413166502'); function start1235470413166502() { //while
(!document.getElementById("adpurl-keywords")) {}
//myReq_1235470413166502 = new
SqueereHTTP1235470413166502(url1235470413166502,
'myReq_1235470413166502'); document.write("<scr "+"ipt type=\
	"text/javascript\" src=\""+url1235470413166502+"\"></scr"+"ipt>"); }

document.write("<scr "+"ipt type=\ "text/javascript\" src=\""+url1235470413166502+"\"></scr"+"ipt>");
//start1235470413166502(); //setTimeout('start1235470413166502()', 100);
setTimeout('purlshow1235470413167289031()', 2000); } 