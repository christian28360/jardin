document.write('<!-- Copyright 2008 DoubleClick, a division of Google Inc. All rights reserved. -->\r\n<!-- Code auto-generated on Thu May 31 10:46:06 EDT 2012 -->\r\n<script src=\"http://s0.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\r\n');

function DCFlash(id,pVM){
var swf = "http://s0.2mdn.net/3082275/120531_FR_alterswahl_300x250.swf";
var gif = "http://s0.2mdn.net/3082275/120531_FR_alterswahl_300x250.jpg";
var minV = 10;
var FWH = ' width="300" height="250" ';
var url = escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3cdd/7/60/%2a/x%3B260031375%3B3-0%3B0%3B84287778%3B4307-300/250%3B48586915/48584778/1%3B%3B%7Esscs%3D%3fhttp://ads.adviva.net/click/v=4%3Bm=2%3Bl=5126%3Bc=200919%3Bb=1725395%3Bts=20120826103930%3Bdct=http://partenaire.edarling.fr/pyxs38/?CID=FR_DIS_3082275_1293307_84287778_48586915");
var fscUrl = url;
var fscUrlClickTagFound = false;
var wmode = "opaque";
var bg = "";
var dcallowscriptaccess = "never";

var openWindow = "false";
var winW = 0;
var winH = 0;
var winL = 0;
var winT = 0;

var moviePath=swf.substring(0,swf.lastIndexOf("/"));
var sm=new Array();


var defaultCtVal = escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3cdd/7/60/%2a/x%3B260031375%3B3-0%3B0%3B84287778%3B4307-300/250%3B48586915/48584778/1%3B%3B%7Esscs%3D%3fhttp://ads.adviva.net/click/v=4%3Bm=2%3Bl=5126%3Bc=200919%3Bb=1725395%3Bts=20120826103930%3Bdct=http://partenaire.edarling.fr/pyxs38/?CID=FR_DIS_3082275_1293307_84287778_48586915");
var ctp=new Array();
var ctv=new Array();
ctp[0] = "CLICKTAG";
ctv[0] = "";
ctp[1] = "clickTAG";
ctv[1] = "";
ctp[2] = "CLICKTAG";
ctv[2] = "";
ctp[3] = "clickTAG";
ctv[3] = "";
ctp[4] = "CLICKTAG";
ctv[4] = "";
ctp[5] = "clickTAG";
ctv[5] = "";


var fv='"moviePath='+moviePath+'/'+'&moviepath='+moviePath+'/';
for(i=1;i<sm.length;i++){if(sm[i]!=""){fv+="&submovie"+i+"="+escape(sm[i]);}}
for(var ctIndex = 0; ctIndex < ctp.length; ctIndex++) {
  var ctParam = ctp[ctIndex];
  var ctVal = ctv[ctIndex];
  if(ctVal != null && typeof(ctVal) == 'string') {
    if(ctVal == "") {
      ctVal = defaultCtVal;
    }
    else {
      ctVal = escape("http://ad.doubleclick.net/click%3Bh%3Dv8/3cdd/7/60/%2a/x%3B260031375%3B3-0%3B0%3B84287778%3B4307-300/250%3B48586915/48584778/1%3B%3B%7Esscs%3D%3fhttp://ads.adviva.net/click/v=4%3Bm=2%3Bl=5126%3Bc=200919%3Bb=1725395%3Bts=20120826103930%3Bdct=" + ctVal);
    }
    if(ctParam.toLowerCase() == "clicktag") {
      fscUrl = ctVal;
      fscUrlClickTagFound = true;
    }
    else if(!fscUrlClickTagFound) {
      fscUrl = ctVal;
    }
    fv += "&" + ctParam + "=" + ctVal;
  }
}
fv+='"';
var bgo=(bg=="")?"":'<param name="bgcolor" value="#'+bg+'">';
var bge=(bg=="")?"":' bgcolor="#'+bg+'"';
function FSWin(){if((openWindow=="false")&&(id=="DCF0"))alert('openWindow is wrong.');
var dcw = 800;
var dch = 600;
// IE
if(!window.innerWidth)
{
  // strict mode
  if(!(document.documentElement.clientWidth == 0))
  {
    dcw = document.documentElement.clientWidth;
    dch = document.documentElement.clientHeight;
  }
  // quirks mode
  else if(document.body)
  {
    dcw = document.body.clientWidth;
    dch = document.body.clientHeight;
  }
}
// w3c
else
{
  dcw = window.innerWidth;
  dch = window.innerHeight;
}
if(openWindow=="center"){winL=Math.floor((dcw-winW)/2);winT=Math.floor((dch-winH)/2);}window.open(unescape(fscUrl),id,"width="+winW+",height="+winH+",top="+winT+",left="+winL+",status=no,toolbar=no,menubar=no,location=no");}this.FSWin = FSWin;
ua=navigator.userAgent;
if(minV<=pVM&&(openWindow=="false"||(ua.indexOf("Mac")<0&&ua.indexOf("Opera")<0))){
	var adcode='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+id+'"'+FWH+'>'+
		'<param name="movie" value="'+swf+'"><param name="flashvars" value='+fv+'><param name="quality" value="high"><param name="wmode" value="'+wmode+'"><param name="base" value="'+swf.substring(0,swf.lastIndexOf("/"))+'"><PARAM NAME="AllowScriptAccess" VALUE="'+dcallowscriptaccess+'">'+bgo+
		'<embed src="'+swf+'" flashvars='+fv+bge+FWH+' type="application/x-shockwave-flash" quality="high" swliveconnect="true" wmode="'+wmode+'" name="'+id+'" base="'+swf.substring(0,swf.lastIndexOf("/"))+'" AllowScriptAccess="'+dcallowscriptaccess+'"></embed></object>';
  if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}
}else{
	document.write('<a target="_blank" href="'+unescape(url)+'"><img src="'+gif+'"'+FWH+'border="0" alt="Advertisement" galleryimg="no"></a>');
}}
function getFlashVersion(){
// code derived from SWFObject (http://code.google.com/p/swfobject/)
 var vfv = "0,0,0";
 try {
 try {
   var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
     try {axo.AllowScriptAccess = "always"; }catch(e) {return "6";}
 }catch(e) {}
 vfv = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");}
 catch(e) {
   try {if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){vfv= navigator.plugins["Shockwave Flash"].description;}}
   catch(e) {}
 }
 return vfv.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1].split(',').shift();
}
var DCid=(isNaN("260031375"))?"DCF2":"DCF260031375";
var pVM=getFlashVersion();
eval("function "+DCid+"_DoFSCommand(c,a){if(c=='openWindow')o"+DCid+".FSWin();}o"+DCid+"=new DCFlash('"+DCid+"',pVM);");
//-->

document.write('\r\n<noscript><a target=\"_blank\" href=\"http://ad.doubleclick.net/click%3Bh%3Dv8/3cdd/7/60/%2a/x%3B260031375%3B3-0%3B0%3B84287778%3B4307-300/250%3B48586915/48584778/1%3B%3B%7Esscs%3D%3fhttp://ads.adviva.net/click/v=4%3Bm=2%3Bl=5126%3Bc=200919%3Bb=1725395%3Bts=20120826103930%3Bdct=http://partenaire.edarling.fr/pyxs38/?CID=FR_DIS_3082275_1293307_84287778_48586915\"><img src=\"http://s0.2mdn.net/3082275/120531_FR_alterswahl_300x250.jpg\" width=\"300\" height=\"250\" border=\"0\" alt=\"Advertisement\" galleryimg=\"no\"></a></noscript>\r\n');
