(function () {

if (typeof window.PLISTA == 'undefined' || !window.PLISTA.path) {
	var PLISTA = {};
	PLISTA.path = 'http://farm.plista.com/';
	PLISTA.cdnpath = 'http://static.plista.com/';
	PLISTA.debug = false;

	
if(typeof String.prototype.trim==='undefined'){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");};}
if(typeof String.prototype.deentityify==='undefined'){String.prototype.deentityify=(function(){var entity={quot:'"',lt:'<',gt:'>',amp:'&'};return function(){return this.replace(/&([^&;]*);/ig,function(a,b){var r=entity[b];return(typeof r==='string')?r:a;});};}());}
(function(ap){if(!ap.forEach||/call\(bind,this\[i\],i\);/.test(ap.forEach)){ap.forEach=function(fn){var thisp=arguments[1],i=0,len=this.length;for(;i<len;i+=1){if(i in this){fn.call(thisp,this[i],i,this);}}};}
if(!ap.map){ap.map=function(fn){var len=this.length,res=[],thisp=arguments[1],i=0;if(typeof fn!=="function"){throw new TypeError();}
for(;i<len;i+=1){if(i in this){res[i]=fn.call(thisp,this[i],i,this);}}
return res;};}
if(!ap.filter||/this\.each/.test(ap.filter.toString())){ap.filter=function(fn){var len=this.length,res=[],thisp=arguments[1],i=0,val;if(typeof fn!=="function"){throw new TypeError();}
for(;i<len;i+=1){if(i in this){val=this[i];if(fn.call(thisp,val,i,this)){res.push(val);}}}
return res;};}
if(!ap.indexOf){ap.indexOf=function(f){var l=this.length,i=arguments[1]||0;i+=(i<0)?l:0;for(i=Math.max(i,0);i<l;i+=1){if(this[i]===f){return i;}}
return-1;};}
if(!ap.reduce||/return this\.length\s*>\s*1/.test(ap.reduce.toString())){ap.reduce=function(fn){var l=this.length||0,i=0,rv=arguments[1];if(arguments.length<2){do{if(i in this){rv=this[i++];break;}
if(++i>=l){throw new TypeError();}}while(true);}
if(l===0&&arguments.length===1){throw new TypeError();}
for(;i<l;i+=1){if(i in this){rv=fn.call(null,rv,this[i],i,this);}}
return rv;};}
if(!ap.some){ap.some=function(fun){if(!this){throw new TypeError();}
var len=this.length||0;if(typeof fun!=="function"){throw new TypeError();}
var thisp=arguments[1];for(var i=0;i<len;i+=1){if(i in this&&fun.call(thisp,this[i],i,this)){return true;}}
return false;};}}(Array.prototype));if(!Array.isArray){Array.isArray=function(a){return!!(a&&(typeof a==='object')&&(a instanceof Array));};}
if(!Object.hasOwnProperty('create')){Object.create=(function(){var F=function(){};return function(o){F.prototype=o;var c=new F();if(arguments[1]){throw new TypeError('Object.create: augmenting object not implemented, please dont use the second parameter');}
return c;};}());}


PLISTA.util={DOM:{getElementsByClassName:function(searchClass){var classElements=[],i,j,node=this.tagName?this:document,els,pattern;if(node.getElementsByClassName){return node.getElementsByClassName(searchClass);}
els=node.getElementsByTagName('*');pattern=new RegExp("(^|\\s)"+searchClass+"(\\s|$)");for(i=0,j=0;i<els.length;i+=1){if(pattern.test(els[i].className)){classElements[j]=els[i];j+=1;}}
return classElements;},event:(function(){var listeners=[];listeners.removeBy=function(what){var i,listener,a,n=0,match;for(i=listeners.length-1;i>=0;i-=1){listener=listeners[i];match=true;for(a in what){if(what.hasOwnProperty(a)){match=match&&(what[a]===listener[a]);}}
if(match){PLISTA.util.DOM.removeEventListener(listener.element,listener.type,listener.fn);listeners.splice(i,1);n+=1;}}
return n;};listeners.add=function(e,type,fn,key){if(!e){throw new TypeError('e is no DOM element');}
PLISTA.util.DOM.addEventListener(e,type,fn);listeners.push({element:e,type:type,key:key,fn:fn});};listeners.remove=function(e,type,fn){return listeners.removeBy({element:e,type:type,fn:fn});};return{add:listeners.add,addOnce:function(e,type,fn,key){var fn2;if(!e){throw new TypeError('e is no DOM element');}
fn2=function(){fn.apply(window,arguments);listeners.remove(e,type,fn2);};listeners.add(e,type,fn2,key);},remove:listeners.remove,removeAll:function(param){var n;if(typeof param==='string'){n=listeners.removeBy({key:param});}else if(param&&typeof param==='object'){n=listeners.removeBy({element:param});}else{throw new Error('invalid param: '+typeof param);}
return n;},getAll:function(){PLISTA.util.logger.getLogger('util.DOM.event').info('_someone_ called PLISTA.util.DOM.event.getAll() . careful, event listener registration may be compromised!');return listeners;}};}()),addEventListener:function(elem,type,listener){if(!elem||(!elem.tagName&&elem!==window&&elem!==document)){throw'Parameter needs to be DOM element';}
if((type==='DOMMouseScroll')&&(PLISTA.isIE||PLISTA.isOpera)){type='mousewheel';}
if(type==='tripleclick'){return PLISTA.util.DOM.addEventListener(elem,'click',PLISTA.util.DOM.onTripleClick(elem,listener));}
if(elem.addEventListener){elem.addEventListener(type,listener,false);}else if(window.attachEvent){if(type==='load'&&elem!==window){elem.onreadystatechange=(function(){function f(){if(!f.hasRun&&((elem.readyState==='complete')||(elem.readyState==='loaded'))){listener();f.hasRun=true;}}
f.hasRun=false;return f;}());}else{elem.attachEvent('on'+type,listener);}}else{throw'cannot attach event';}},removeEventListener:function(elem,type,listener){if(!elem||(!elem.tagName&&elem!==window&&elem!==document)){throw'Parameter needs to be DOM element';}
if((type==='DOMMouseScroll')&&(PLISTA.isIE||PLISTA.isOpera)){type='mousewheel';}
if(elem.removeEventListener){elem.removeEventListener(type,listener,false);}else if(window.detachEvent){if(type==='DOMMouseScroll'){type='mousewheel';}
if(type==='load'&&elem!==window){elem.onreadystatechange=null;}else{elem.detachEvent('on'+type,listener);}}else{throw'Cannot detach event';}},scrollTop:function(){return window.pageYOffset||document.body.scrollTop||(document.documentElement?document.documentElement.scrollTop:0);},setAttribute:function(elem,attr,value){if((PLISTA.isIE||PLISTA.isOpera)&&(attr==='style')){elem.style.cssText=value;}else if(PLISTA.isIE&&(attr==='class')){elem.className=value;}else{elem.setAttribute(attr,value);}},createElement:function(name,content){var newElem=document.createElement(name);if(!content){return newElem;}
if(name==='style'){newElem.type='text/css';if(PLISTA.isIE&&newElem.styleSheet){newElem.styleSheet.cssText=content;}else{newElem.textContent=content;}}else if(name==='script'){newElem.type='text/javascript';if(PLISTA.isIE){newElem.text=content;}else{newElem.innerHTML=content;}}else{newElem.innerHTML=content;}
return newElem;},onTripleClick:function(elm,fn,timeout){var timer=0,cnt=0,click=function(){cnt+=1;if(((new Date()).getTime()-timer)>timeout){timer=(new Date()).getTime();cnt=1;}
if(cnt===3){cnt=0;fn();}};if(typeof fn!=='function'){throw'detectTripleClick wants callback function!';}
timeout=timeout||800;PLISTA.util.DOM.addEventListener(elm,'click',click);return click;},getAbsolutePosition:function(e,sw){var x=0,y=0,r=e.getBoundingClientRect?e.getBoundingClientRect():false,s=PLISTA.util.DOM.scrollOffset();if(!r||!sw){if(typeof e.offsetParent!=='undefined'){while(e){x+=e.offsetLeft;y+=e.offsetTop;e=e.offsetParent;}}}else{if(!PLISTA.absPosOffset){PLISTA.absPosOffset=((PLISTA.isIE6||PLISTA.isIE7)&&window.document.documentMode!==8)?2:0;if(PLISTA.isIE){if(PLISTA.isIE8&&(window.document.documentMode===7||PLISTA.isIEQuirksmode)){PLISTA.absPosOffset=2;}}}
x=parseInt(r.left-PLISTA.absPosOffset+s.x,10);y=parseInt(r.top-PLISTA.absPosOffset+s.y,10);}
return{x:x,y:y};},getCSSProperty:function(e,name){var val,cName=name.replace(/(\-[a-z])/g,function(str,p1){return p1.toUpperCase().substr(1);});if(e.currentStyle){val=e.currentStyle[cName];}
if(window.getComputedStyle){val=window.getComputedStyle(e,null).getPropertyValue(name);}
if(val===''){val=e.style[cName];}
return val;},isHidden:function(e){var width=e.offsetWidth,height=e.offsetHeight;return(width===0&&height===0)||((PLISTA.isIE&&!PLISTA.isIE6&&!PLISTA.isIE7)&&(e.style.display||PLISTA.util.DOM.getCSSProperty(e,'display'))==="none");},getDimensions:function(e){var x=parseInt(e.width||e.clientWidth,10),y=parseInt(e.height||e.clientHeight,10);if(!x&&!y){x=parseInt(PLISTA.util.DOM.getCSSProperty(e,'width'),10);y=parseInt(PLISTA.util.DOM.getCSSProperty(e,'height'),10);}
return{x:x,y:y};},scrollOffset:function(){var iebody=PLISTA.isIEQuirksmode?document.body:document.documentElement;if(PLISTA.isIE){return{x:iebody.scrollLeft,y:iebody.scrollTop};}
return{x:window.pageXOffset,y:window.pageYOffset};},getDocumentHeight:function(){var b=document.body,d=document.documentElement;return Math.max(b.scrollHeight,b.offsetHeight,d.clientHeight,d.scrollHeight,d.offsetHeight);},getWindowDimensions:function(){var iebody=PLISTA.isIEQuirksmode?document.body:document.documentElement;if(PLISTA.isIE){return{x:iebody.clientWidth,y:iebody.clientHeight};}
return{x:window.innerWidth,y:window.innerHeight};}},newEvent:function(subject,type){var listeners=[];return{subscribe:function(fn,scope,name){if(typeof fn!=='function'){throw'newEvent.subscribe: parameter no function';}
listeners.push({fn:fn,scope:scope,name:name});},unsubscribe:function(fn){var r=false;listeners.forEach(function(val,key,obj){if(val.fn===fn){obj.splice(key,1);r=true;}});return r;},fire:function(data){var i,length=listeners.length;for(i=0;i<length;i+=1){try{listeners[i].fn.apply(listeners[i].scope||window,[subject,data,type]);}catch(e){e.subject=(typeof subject!=='undefined')?subject.toString()+': ':'';e.explanation='exception while triggering callback '+(listeners[i].name||i)+' for '+type+' event';PLISTA.util.logger.getLogger('event.fire').error(e);if(PLISTA.debug){throw e;}}}}};},logger:(function(){var messages=[],loggers={},toObj=function(v){var i,s,l=0,r={};if((PLISTA.isIE6||PLISTA.isIE7)&&v&&v.name==='TypeError'){return'TypeError';}
for(i in v){if(v.hasOwnProperty(i)){if('function unknown'.indexOf(typeof v[i])===-1){s=''+v[i];l+=s.length;if(l>1000){break;}
r[i]=s;}}}
return r;},toStr=function(m){var result=m.logger+' '+m.level+' : ',s=m.message,j;if(typeof s==='object'&&s){for(j in s){if(s.hasOwnProperty(j)){result+=j+':'+s[j]+',';}}}else{result+=s;}
return result;},getLogFn=function(logger,level){return function(msg){var o={message:msg,level:level,logger:logger};if(typeof msg==='object'&&msg){try{o.message=toObj(msg);}catch(e){o.panic=e.toString();}}
messages.push(o);if((['ERROR','FATAL'].indexOf(level)!==-1)&&PLISTA.remotedata){PLISTA.remotedata.setMode('poll');PLISTA.remotedata('log',o);}
if(PLISTA.debug&&window.console&&typeof console.debug==='function'){console.log('PLISTA '+toStr(o));}};};messages.toString=function(){return this.map(function(m){return toStr(m);}).join('\n');};return{log:getLogFn('default','DEBUG'),getLogger:function(logger){if(!loggers[logger]){loggers[logger]={trace:getLogFn(logger,'TRACE'),debug:getLogFn(logger,'DEBUG'),info:getLogFn(logger,'INFO'),warn:getLogFn(logger,'WARN'),error:getLogFn(logger,'ERROR'),fatal:getLogFn(logger,'FATAL')};}
return loggers[logger];},getMessages:function(){return messages;}};}()),htmlEntities:(function(){var entity=[34,39,60,62];return function(s){var i;for(i=0;i<entity.length;i+=1){s=s.split(String.fromCharCode(entity[i])).join('&#'+entity[i]+';');}
return s;};}()),trim:function(s,numChar,p){numChar=parseInt(numChar,10);if(typeof s!=="string"){return"";}
s=PLISTA.util.text_clean(s.trim());numChar+=numChar-s.substr(0,numChar).replace(/\u00ad/g,'').length;if(numChar&&s.length>(numChar+(p?2:0))){s=s.slice(0,numChar);s=s.slice(0,Math.max(s.lastIndexOf("-")+1,s.lastIndexOf(" ")));if(p&&(s[s.length-1]!=='.')){s+='...';}}
return PLISTA.util.htmlEntities(s);},realStrLength:function(s){return PLISTA.util.text_clean(s).replace(/\u00ad/g,'').length;},text_clean:function(str){var ta=document.createElement("textarea"),s;ta.innerHTML='_'+str.replace(/(<([^>]+)>)/ig,"")+'_';s=ta.value;return s.substr(1,s.length-2);},loadCSS:function(content,media){var elm;if(/^https?:\/\/.*/.test(content)){elm=document.createElement("link");elm.href=content;elm.rel="stylesheet";elm.type="text/css";}else{elm=PLISTA.util.DOM.createElement('style',content);}
if(media){PLISTA.util.DOM.setAttribute(elm,'media',media);}
document.getElementsByTagName("head")[0].appendChild(elm);},augment:function(obj){var n;for(n in obj){if(obj.hasOwnProperty(n)){this[n]=obj[n];}}
return this;},evalScriptTags:function(containerId){var e=document.getElementById(containerId),c='',s=0;for(;s<e.getElementsByTagName('script').length;s+=1){c+=e.getElementsByTagName('script')[s].innerHTML;}
eval(c);},JSON:{parse:function(json){if(typeof json!=='string'){return json;}
if((typeof JSON==='object')&&JSON&&JSON.parse){return JSON.parse(json);}else{return eval('(function () { return '+json+'; })()');}}},mousePosition:function(e,rel){if(!e){e=window.event;}
var body=(window.document.compatMode&&window.document.compatMode==="CSS1Compat")?window.document.documentElement:window.document.body;if(!rel||typeof rel==='undefined'){return{y:e.pageY?e.pageY:e.clientY+body.scrollTop-body.clientTop,x:e.pageX?e.pageX:e.clientX+body.scrollLeft-body.clientLeft};}else{return{y:e.clientY?e.clientY:0,x:e.clientX?e.clientX:0};}},descendantOf:function(container,descendant){while(descendant){if(descendant===container){return true;}
descendant=descendant.parentNode;}
return false;},imageComplete:function(img){return img&&(typeof img.naturalWidth!=='undefined'?img.naturalWidth:img.complete);},absoluteUrl:function(url){if(!url){return'';}
if(url.indexOf('/')===0){url=document.location.protocol+'//'+document.location.hostname+url;}else if(!(/^[a-z]+:/.test(url))){PLISTA.util.logger.getLogger('util.absoluteUrl').warn('erroneous URL: "'+url+'". prepending protocol...');url=document.location.protocol+'//'+url;}
return url;},stringSum:function(s){var sum=0,i=0,j=s.length;for(;i<j;i+=1){sum+=s.charCodeAt(i);}
return sum;},benchmark:(function(){var timers={},marks={};return{start:function(key){timers[key]=(new Date()).getTime();marks[key]=0;},stop:function(key){marks[key]+=1;var t=(new Date()).getTime()-timers[key];PLISTA.util.logger.getLogger('util.benchmark').info('('+key+marks[key]+') : '+t);return t;}};}()),uniqid:function(prefix){var s='',v,i=0;for(;i<13;i+=1){v=Math.floor(Math.random()*16);s+=String.fromCharCode(v<10?v+48:v+87);}
return(prefix||'')+s;},toArray:function(coll){var ary=[],i=0,len=coll.length;for(i;i<len;i++){ary.push(coll[i]);}
return ary;},getEnableSwitch:function(def){return function(val){if(typeof val==='boolean'){def=val;}
return def;};}};


PLISTA.isIE6=/MSIE (5\.5|6\.)/.test(navigator.userAgent);PLISTA.isIE7=/MSIE (7\.)/.test(navigator.userAgent);PLISTA.isIE8=/MSIE (8\.)/.test(navigator.userAgent);PLISTA.isIE=PLISTA.isIE6||PLISTA.isIE7||/MSIE (8\.)/.test(navigator.userAgent)||(document.documentMode<9);PLISTA.isIEQuirksmode=(PLISTA.isIE&&(document.compatMode==='BackCompat'));PLISTA.isOpera=/Opera/.test(navigator.userAgent);PLISTA.isSafari=/Safari/.test(navigator.userAgent);PLISTA.info={clientrev:window.JSON&&JSON.stringify&&(JSON.stringify([])==='[]')&&(JSON.stringify({x:function(){return"y";}},function(k,v){return(typeof v==='function')?v():v;}).indexOf('y')!==-1)?15:14};PLISTA.items=[];PLISTA.items.clean=(function(){var
logger=PLISTA.util.logger.getLogger('items.clean'),cleaners={img:function(val){val=PLISTA.util.absoluteUrl(val);if(!(/https?\:\/\/[a-z0-9\-\.]+\.([a-z]+|[0-9]{1,3})(\:[0-9]{1,5})?\/.*/i.test(val))){logger.warn('invalid img url: '+val);return null;}
return val;},url:function(val){return val.indexOf('?fb_xd_')===-1?PLISTA.util.absoluteUrl(val):null;},objectid:function(val){if(!(/^[a-z\:\.,0-9_\-]+$/i.test(val))){logger.warn('invalid objectid: '+val);return null;}
return val.toString();},created_at:function(val){if(val>100000000000){val=Math.floor(val/1000);}
return val;}},self=function(rawData){if(!rawData){return{};}
var
newData={},name;for(name in rawData){if(rawData.hasOwnProperty(name)){if(['number','boolean'].indexOf(typeof rawData[name])!==-1){newData[name]=rawData[name];if(cleaners[name]){newData[name]=cleaners[name](newData[name]);}}else if(rawData[name]){newData[name]=rawData[name].toString();if(cleaners[name]){newData[name]=cleaners[name](newData[name]);}else{newData[name]=PLISTA.util.text_clean(PLISTA.util.trim(PLISTA.util.text_clean(newData[name]),250,true));}
if(newData[name]&&(newData[name].length>255)){logger.warn('property "'+name+'" of item "'+(rawData.objectid||'')+'" is too long: '+rawData[name]);delete newData[name];}}}}
return newData;};cleaners.expires_at=cleaners.created_at;self.cleaners=cleaners;return self;}());PLISTA.getItemData_clean=PLISTA.items.clean;PLISTA.items.getByObjectId=function(objectid,domainid){var i,item;if(!domainid){domainid=PLISTA.domainid;}
for(i=0;i<PLISTA.items.length;i++){item=PLISTA.items[i];if((item.objectid==objectid)&&(!item.domainid||domainid==item.domainid)){return item;}}};PLISTA.lib={};PLISTA.options={sendItemDataAttributes:[]};PLISTA.onBeforeInit=PLISTA.util.newEvent(PLISTA,'beforeinit');PLISTA.onLoad=PLISTA.util.newEvent(PLISTA,'load');PLISTA.onClick=PLISTA.util.newEvent(PLISTA,'click');PLISTA.onSendItemData=PLISTA.util.newEvent(PLISTA,'senditemdata');PLISTA.createClickURL=function(args,doRedirect){var
name,request=[],i;doRedirect=doRedirect||false;for(name in args){if(args.hasOwnProperty(name)){switch(typeof args[name]){case'undefined':break;case'object':if(!args[name]){break;}
for(i in args[name]){if(args[name].hasOwnProperty(i)){request.push(encodeURIComponent(name+'['+i+']')+'='+encodeURIComponent(args[name][i]));}}
break;default:request.push(name+'='+encodeURIComponent(args[name]));}}}
request.push('clientrev='+PLISTA.info.clientrev);if(doRedirect){request.push('redirect=1');}
return PLISTA.path+'redirect.php?'+request.join('&');};PLISTA.click=function(args,track){if(arguments.length===1){track=true;}
if(track===true){if(document.images){(new Image()).src=PLISTA.createClickURL(args,false);}}
PLISTA.onClick.fire(args);return true;};PLISTA.isArticle=function(){return(PLISTA.items.length===1);};PLISTA.currentObjectid=function(){var i=PLISTA.items[0];if(i&&i.objectid){return i.objectid.toString();}else{return null;}};PLISTA.addItem=function(item,fn){PLISTA.remotedata('additem',{item:PLISTA.items.clean(item)},fn);PLISTA.onSendItemData.fire(item);};PLISTA.addCategory=function(item,cat){PLISTA.remotedata('assigncategory',{objectid:item.objectid,categoryname:cat});};PLISTA.loadWidgetData=(function(){var hasRun=false,logger=PLISTA.util.logger.getLogger('loadWidgetData');return function(){var isarticlerequest,attrs,k;if(hasRun){logger.debug('I did my work already. Aborting...');return;}
if(PLISTA.items.length!==1){logger.info('Not on article page, it seems. Aborting...');return;}
PLISTA.items.clean(PLISTA.items[0]);if(!PLISTA.items[0].objectid){logger.warn('item 0 has no objectid. NOT sending data...');return;}
isarticlerequest={objectid:PLISTA.items[0].objectid};attrs=PLISTA.options.sendItemDataAttributes;for(k=0;k<attrs.length;k++){if(attrs[k]){isarticlerequest[attrs[k]]=PLISTA.items[0][attrs[k]];}}
PLISTA.remotedata('isarticle',isarticlerequest,function(data){var tmp;data=PLISTA.util.JSON.parse(data);if(data.action){if(data.action==='sendItemData'){setTimeout(function(){PLISTA.addItem(PLISTA.items[0]);},5000);}else if(data.action==='assigncategory'&&PLISTA.findCategory){tmp=PLISTA.findCategory(PLISTA.items[0]);if(tmp!==null){PLISTA.addCategory(PLISTA.items[0],tmp);}}}});hasRun=true;};}());(function(){var inited=false;PLISTA.init=function(){if(inited){throw'do not call PLISTA.init (or PLISTA.partner.init) twice in a row!';}
inited=true;PLISTA.onBeforeInit.fire();if(PLISTA.container){PLISTA.container.initParser();PLISTA.container.initPanels();}
if(PLISTA.panels&&PLISTA.panels.getRatingdata){PLISTA.panels.getRatingdata();}
PLISTA.loadWidgetData();PLISTA.onLoad.fire();};PLISTA.reset=function(){inited=false;PLISTA.onReset.fire();PLISTA.items.splice(0,PLISTA.items.length);};PLISTA.onReset=PLISTA.util.newEvent(PLISTA,'reset');PLISTA.isInited=function(){return inited;};}());PLISTA.addRemoteScriptTag=function(url,id){var tag=PLISTA.util.DOM.createElement('script');if(id){tag.id=id;}
tag.type='text/javascript';tag.src=url;tag.async=true;document.getElementsByTagName('head')[0].appendChild(tag);return tag;};PLISTA.loadModules=function(names,fn,force,cond){cond=cond||function(){return names.reduce(function(prev,val){return prev&&PLISTA[val];},true);};if(cond()&&!force){if(typeof fn==='function'){fn();}
return;}
var time=(new Date()).getTime();PLISTA.addRemoteScriptTag(PLISTA.cdnpath+'jsmodule/'+names.join(','));(function wait(){if((new Date()).getTime()>time+15000){PLISTA.util.logger.getLogger('loadModules').warn('timeout loading modules '+names.join(','));return;}
if(cond()){if(typeof fn==='function'){fn();}}else{setTimeout(wait,50);}}());};


(function(){var status=0,k,t=20000,errorPath=PLISTA.path+'errorreport.php',fn=function(){if(status>=0&&status<2&&PLISTA.selfmonitoring.enable()){var url=errorPath+'?domainid='+PLISTA.domainid+'&msgkey=not_initialized&error=not yet initialized after '+t+'ms. status '+status;PLISTA.addRemoteScriptTag(url);PLISTA.util.logger.getLogger('errorreport').debug('called '+url);PLISTA.selfmonitoring.onErrorReport.fire();status=-1;}},reset=function(){status=0;PLISTA.selfmonitoring.setDelay(t);};PLISTA.onReset.subscribe(reset);PLISTA.onBeforeInit.subscribe(function(){status=1;});PLISTA.onLoad.subscribe(function(){status=2;});PLISTA.selfmonitoring={getStatus:function(){return status;},setDelay:function(delay){t=delay;if(k){clearTimeout(k);}
k=setTimeout(fn,t);},enable:PLISTA.util.getEnableSwitch(true)};PLISTA.selfmonitoring.onErrorReport=PLISTA.util.newEvent(PLISTA.selfmonitoring,'errorreport');reset();}());


PLISTA.remotedata=PLISTA.remotedata||(function(){var httpRequests=[],callbacks=[],logger=PLISTA.util.logger.getLogger('remotedata'),intervalID=0,clientrev=PLISTA.info.clientrev,that=function(handler,request,onSetData,onAfterDataSet){if((typeof handler!=='string')||!handler){throw'invalid argument for remotedata.getData - first argument is required to be string!';}
request=handler+':'+(clientrev>12&&(clientrev%2)?JSON.stringify(request,function(k,v){return(typeof v==='function')?v():v;}):that.getSpecificationString(request));callbacks.push({request:encodeURIComponent(request),onSetData:onSetData,onAfterDataSet:onAfterDataSet});that.setMode(that.mode);};function checkWidgetdataTimeout(cbName){setTimeout(function(){if(typeof window[cbName]==='function'){PLISTA.addRemoteScriptTag(PLISTA.path+'errorreport.php?error=remotedata%20timeout&domainid='+PLISTA.domainid+'&msgkey=timeout_async_30s');}},30000);}
function sendRequests(){var i=0,query,data='',cb;if(!PLISTA.domainid&&!PLISTA.publickey){that.setMode('queue');throw'neither domainid nor publickey present. sth is very wrong!';}
while(i<callbacks.length){if(typeof callbacks[i]!=='undefined'){cb='PLISTA'+httpRequests.length+'_'+PLISTA.util.uniqid();window[cb]=that.setData;query=PLISTA.path+'widgetdata.php'+'?clientrev='+clientrev+
(PLISTA.domainid?'&domainid='+PLISTA.domainid:'')+
(PLISTA.publickey?'&publickey='+PLISTA.publickey:'')+
(PLISTA.osh?'&osh='+PLISTA.osh:'')+
(PLISTA.ns?'&ns='+PLISTA.ns:'')+
(PLISTA.sandbox&&PLISTA.sandbox.enable()?'&sbox=1':'')+'&cb='+cb+'&requestID='+httpRequests.length;httpRequests.push([]);httpRequests[httpRequests.length-1].cb=cb;data='';while(i<callbacks.length){if(typeof callbacks[i]==='undefined'){logger.debug('callbacks[i] undefined');i++;}else if(callbacks[i].request.length>2000){logger.error('data request too long, starting with: '+
callbacks[i].request.substr(0,50));i++;}else if((data+callbacks[i].request).length>2100){PLISTA.addRemoteScriptTag(query+data);checkWidgetdataTimeout(cb);break;}else{data+='&'+i.toString()+'='+callbacks[i].request;httpRequests[httpRequests.length-1][i]=callbacks[i];callbacks[i]=undefined;i++;}}}else{i++;}}
if(data.length>0){PLISTA.addRemoteScriptTag(query+data);checkWidgetdataTimeout(cb);}
if(intervalID){clearInterval(intervalID);intervalID=0;}}
that.mode='queue';that.setMode=function(mode){switch(mode){case'run':sendRequests();break;case'poll':intervalID=intervalID||setInterval(sendRequests,that.interval);break;case'queue':if(intervalID){clearInterval(intervalID);intervalID=0;}
break;default:throw'invalid argument "'+mode+'"';}
that.mode=mode;};that.interval=50;that.sendRequests=sendRequests;that.getData=function(request,onSetData,onAfterDataSet){logger.warn('deprecated usage of PLISTA.remotedata.getData!');return that(request.type,request,onSetData,onAfterDataSet);};that.setData=function(data,requestSubID,requestID){if(arguments.length===1){that.setTime(arguments[0]);try{delete window[httpRequests[arguments[0]].cb];}catch(e){window[httpRequests[arguments[0]].cb]=undefined;}
return;}
httpRequests[requestID].time=httpRequests[requestID].time||(new Date()).getTime();var req=httpRequests[requestID][requestSubID];if(typeof req.onSetData==='function'){req.onSetData(data,httpRequests[requestID].time);req.onSetData=undefined;}};that.setTime=function(requestID){var req,i;for(i=0;i<httpRequests[requestID].length;i++){req=httpRequests[requestID][i];if(req&&(typeof req.onAfterDataSet==='function')){req.onAfterDataSet();req.onAfterDataSet=undefined;}}};that.getSpecificationString=(function(){var l,r,strVal=function(o){r+=1;if(r>10){return'NESTED TOO DEEP';}
if(typeof o==='function'){o=o();}
if(!o||(typeof o!=='object')){r-=1;switch(typeof o){case'boolean':return o?'true':'false';case'number':if(isNaN(o)||o===Infinity){return'null';}
return o;case'string':return'\u0002'+(''+o).replace(/[\u0002\u0003\u001c-\u001f]/g,'')+'\u0003';default:return'null';}}
var n,s=[],tmp;for(n in o){if(o.hasOwnProperty(n)&&(typeof o[n]!=='undefined')&&(o[n]!==null)){tmp=strVal(o[n]);l+=n.length+tmp.length+1;if(l>1950){break;}
s.push(n+'\u001f'+tmp);}}
r-=1;return'\u001c'+s.join('\u001e')+'\u001d';};return function(spec){r=0;l=0;return strVal(spec);};}());that.getDebugData=function(){if(PLISTA.debug){return{callbacks:callbacks,httpRequests:httpRequests};}};return that;}());PLISTA.onLoad.subscribe(function(){PLISTA.remotedata.setMode('poll');});


PLISTA.lib=PLISTA.lib||{};PLISTA.lib.dataobject=function(my){var data,udage=0,refreshing=false,logger=PLISTA.util.logger.getLogger('dataobject'),that;if(typeof my!=='object'||!my){throw{message:'parameter missing'};}
data=my.defaultData;if(typeof my.spec!=='object'||!my.spec){throw{message:'specification missing'};}
my.autoload=my.autoload||false;if(typeof my.spec.type!=='string'){throw'datasource must be string';}
my.filterGetData=my.filterGetData||function(data){return data;};that={getUpdateAge:function(){return udage;},refreshData:function(){refreshing=true;if(my.beforeRefresh){my.beforeRefresh();}
PLISTA.remotedata(my.spec.type,my.spec,function(newData,time){if(newData&&newData.success===false){logger.warn('remotedata call contains negative answer: '+newData.reason);return;}
that.setData(newData,time);udage=time;refreshing=false;},that.onChange.fire);},getData:function(maxage){maxage=maxage||86400*1000;if((new Date()).getTime()-maxage>udage){if(refreshing){logger.info('getData, already refreshing: '+this.toString());}else{logger.debug('getData, starting refresh: '+this.toString()+', udage: '+udage);that.refreshData();}}
return my.filterGetData(data);},setData:function(o,time){data=o;if(typeof time!=='undefined'){udage=time;}},toString:function(){return"dataobject";},getDebug:function(){if(PLISTA.debug){return{data:data,udage:udage,refreshing:refreshing,my:my};}}};that.onChange=PLISTA.util.newEvent(that,'change');return that;};


PLISTA.render={parseStyle:function(style,data,styleElements,context){var getVal=function(attr,args){var val;try{if(typeof styleElements[attr]==='function'){val=styleElements[attr](data,args,context);}else if(typeof styleElements[attr]==='undefined'){val=data[attr];}else{val=styleElements[attr].getContent(data,args,context);}
if([undefined,null].indexOf(val)===-1){val=val.toString();}else{val='';}}catch(e){e.attr=attr;PLISTA.util.logger.getLogger('render.parseStyle.'+attr).warn(e);val='';}
return val;},trimEach=function(val,i,obj){obj[i]=val.trim();},regmatch=/\[([a-z_0-9]+)(\(([a-z_0-9, ]*)\))?\]/i.exec(style),args,tmp,cnt=0;styleElements=styleElements||this.defaultStyleElements;context=context||{};while(regmatch!==null&&regmatch[0]&&regmatch[1]){cnt+=1;if(cnt>100){PLISTA.util.logger.getLogger('PLISTA.render.parseStyle').error('reached maximum replacement count of 100. possible infinite loop, plz check ['+regmatch[1]+']. if its an item, it is '+data.domainid+'//'+data.objectid);return'';}
if(regmatch[3]){args=regmatch[3].split(',');args.forEach(trimEach);}else{args=[];}
tmp=getVal(regmatch[1],args);if(!/MSIE/.test(navigator.userAgent)){tmp=tmp.replace(/\$/g,'$$$$');}
style=style.replace(regmatch[0],tmp);regmatch=/\[([a-z_0-9]+)(\(([A-Za-z_0-9, ]*)\))?\]/i.exec(style);}
return style;},defaultStyleElements:{adhint:(function(){var adhint;adhint=function(item,args,ctx){args[1]=args[1]||'999999';args[0]=args[0]||'de';var
alt,img,isPcd=item.campaignoptions&&item.campaignoptions.pcd,onclick=(isPcd&&"style=\"cursor:pointer\" onclick=\""+adhint.pcdFn+"(); return false;\" ")||'',altMapAd={'de':'Anzeige','en':'Ad','es':'Publicidad','fr':'Publicité','it':'Annuncio','nl':'Advertentie','pl':'Reklama','sl':'Oglas'};img=PLISTA.cdnpath+'image/%shints/%s_%s.png'.replace('%s',isPcd?'pcd':'ad').replace('%s',args[1]).replace('%s',args[0]);alt=isPcd?'Sponsored':(altMapAd[args[0]]||'Ad');return'<img class="plistaPetImg" src="'+img+'" alt="'+alt+'" '+onclick+'/>';};adhint.pcdFn=PLISTA.util.uniqid('PLISTA_');window[adhint.pcdFn]=window.top===window?function(){PLISTA.remotedata('content',{key:'pcdhint'},function(data){var d=document.createElement('div');if(!data.success){PLISTA.util.logger.getLogger('render.adhint').error('pcdhint request failed!');return;}
PLISTA.util.logger.getLogger('render.adhint').debug('showing pcdhint...');d.innerHTML=data.html;PLISTA.util.loadCSS(data.css);document.body.appendChild(d);});}:function(){window.open('http://www.plista.com/infos/pcdhint','_newtab');};return adhint;}()),image:function(item,args){var
src=item.img,dim='';args[0]=parseInt(args[0],10);args[1]=parseInt(args[1],10);if((args[0]||item.type==='pet')&&src&&item.objectid){src=PLISTA.render.imageUrl(item,args[0],args[1],args[2]);}
if(args[0]){dim+='width:'+args[0]+'px;';}
if(args[1]){dim+='height:'+args[1]+'px;';}
return src?'<img class="plista_widget_imgwrapper" align="left" src="'+src+'" title="[title]" alt="" style="'+dim+'" />':'';},imgnoresize:(function(){var newImgId=(function(){var id=0;return function(){id+=1;return'plista_widget_imgnoresize_'+id;};}()),setCheckAndResize=function(id){var cnt=0;var interval=function interval(){var img=document.getElementById(id);if(PLISTA.util.imageComplete(img)){PLISTA.render.resizeImage(img);}else if(cnt<50){cnt+=1;setTimeout(interval,50);}};interval();};return function(item,args){var src=item.img,dim='',imgId=newImgId();if(!src){return'';}
if(args[0]){dim+='width:'+args[0]+'px;';}
if(args[1]){dim+='height:'+args[1]+'px;';}
setCheckAndResize(imgId);return'<span style="display: block;'+dim+'overflow: hidden;" '+'class="plista_widget_imgwrapper">'+'<img id="'+imgId+'" src="'+src+'" title="[title]" alt=""/></span>';};}()),intextimgnoresize:(function(){var newImgId=(function(){var id=0;return function(){id+=1;return'plista_widget_imgnoresize_'+id;};}()),setCheckAndResize=function(id){var interval=function interval(){var img=document.getElementById(id);if(PLISTA.util.imageComplete(img)){PLISTA.render.resizeImage(img,false);}else{setTimeout(interval,50);}};interval();};return function(item,args){var src=item.img,dim='',imgId=newImgId();if(!src){return'';}
if(args[0]){dim+='width:'+args[0]+'px;';}
if(args[1]){dim+='height:'+args[1]+'px;';}
setCheckAndResize(imgId);return'<img class="plista_widget_imgwrapper" align="left" id="'+imgId+'" src="'+src+'" title="[title]" alt=""/>';};}()),likead:function(item,args,ctx){var width=args[2]||'',fb='<span style="display: block;">%%TEXT%%</span>'+'<iframe src="%%SRC%%" scrolling="no" frameborder="0" '+' style="margin: 5px 0; display:block; border:none; overflow:hidden; '+(width?'width:'+width+'px; ':'')+'height:%%HEIGHT%%px;" allowTransparency="true" ></iframe>',params={api_key:'5955bd0d7130fd018f3972fecd358255',font:args[5]||'arial',colorscheme:args[4]||'light',width:width,action:'like',ref:'plista'},pparams={widgetname:ctx.listwidget.spec.widgetname,campaignid:item.campaignid,itemid:item.itemid,objectid:PLISTA.currentObjectid(),domainid:PLISTA.domainid},createGet=function(o){var a,b,arr=[];for(a in o){if(o.hasOwnProperty(a)){if(o[a]&&typeof o[a]==='object'){for(b in o[a]){if(o[a].hasOwnProperty(b)){arr.push(encodeURIComponent(a+'['+b+']')+'='+encodeURIComponent(o[a][b]));}}}else{arr.push(encodeURIComponent(a)+'='+encodeURIComponent(o[a]));}}}
return arr.join('&');};if(item.adoptions.track_like){pparams.track_like=item.adoptions.track_like;}
if(item.adoptions.track_unlike){pparams.track_unlike=item.adoptions.track_unlike;}
switch(item.adoptions.layout){case'faces':params.layout='standard';params.show_faces='true';params.height='80';fb=fb.replace('%%TEXT%%','');break;case'names':params.layout='standard';params.show_faces='false';params.height='45';fb=fb.replace('%%TEXT%%',PLISTA.render.simpletext(item.text,[args[0],true],ctx));break;case'button':params.layout='button_count';params.show_faces='false';params.height='20';fb=fb.replace('%%TEXT%%',PLISTA.render.simpletext(item.text,[args[1],true],ctx));break;default:throw'missing layout for likead '+item.itemid;}
fb=fb.replace('%%HEIGHT%%',params.height).replace('%%SRC%%',PLISTA.path+'like.php?'+createGet({fbparams:params,pparams:pparams,lang:item.adoptions.likelocale||'en_US'}));return fb;},title:function(item,args,ctx){var s=item.title;if(args[0]){s=PLISTA.util.trim(s,args[0],args[1]);}
return s;},text:function(item,args,ctx){var s=item.text,m=ctx.listwidget?ctx.listwidget.spec.metaPlaceholder:null,i,tmp;if(m&&m.text&&args[0]){for(i=0;i<m.text.length;i+=1){tmp=m.text[i];if((item.status&tmp.flags)===tmp.flags){return ctx.listwidget.spec.styleElements[tmp.styleElement].call(this,item,tmp.params,ctx);}}}
return PLISTA.render.simpletext(s,args,ctx);},number:function(item,args,ctx){return ctx.position;},url:function(item,args,ctx){var ws=ctx.listwidget.spec;return(item.url.match(/^https?:\/\/farm.plista.com/)||!item.url.match(/^https?:\/\//))&&!item.forceTracking?item.url:PLISTA.createClickURL({domainid:PLISTA.domainid,objectid:item.objectid,position:ctx.position,widgetname:ws.widgetname,additionalParams:item.additionalParams,params:ws.list.getAlgoInfo(),friendid:PLISTA.currentObjectid(),clickdomainid:item.domainid,campaignid:item.campaignid},true);},created_at:{format:'d.m.Y',getContent:function(item){var t=parseInt(item.created_at,10),format=this.format;if(!t){throw'created_at: item.created_at is not set or evaluates to 0';}
if(format.indexOf('%')===-1){format=format.replace(/([a-z])/ig,'%$1');}
return PLISTA.render.strftime(format,t);}},augment:PLISTA.util.augment},simpletext:function(s,args,ctx){if(args[0]){s=PLISTA.util.trim(s,args[0],args[1]);}
return s;},strftime:function(f,t){function pad(val,len){if(typeof val!=='string'){val=val.toString();}
len=len||2;while(val.length<len){val='0'+val;}
return val;}
var date=new Date(t*1000);[['%%','%'],['%Y',pad(date.getFullYear())],['%y',pad(date.getFullYear()%100)],['%m',pad(date.getMonth()+1)],['%d',pad(date.getDate())],['%H',pad(date.getHours())],['%i',pad(date.getMinutes())],['%s',pad(date.getSeconds())]].forEach(function(i){f=f.replace(i[0],i[1]);});return f;},i18n:{rating_description:{1:'irrelevant',2:'langweilig',3:'so lala',4:'gut',5:'exzellent'}},imageUrl:function(item,width,height,bgColor){if(item.status&parseInt('1024',10)){return PLISTA.path+'image/example/'+(width||0)+'x'+(height||0)+'/'+item.img;}
var url=PLISTA.cdnpath+'image/resized/',hash=PLISTA.util.stringSum(item.img||''),ext=item.img.match(/(\.[a-z]+)$/);ext=ext&&(['.gif','.png'].indexOf(ext[1])!==-1)?ext[1]:'.jpg';return url+
(item.domainid||PLISTA.domainid)+'/'+
(bgColor?bgColor+'/':'')+
item.objectid+'_'+(width||0)+'x'+(height||0)+'_'+hash+ext;},resizeImage:function(img,usemargin){var pDim=PLISTA.util.DOM.getDimensions(img.parentNode),imgOrig=PLISTA.util.DOM.getDimensions(img),ratio={x:pDim.x/imgOrig.x,y:pDim.y/imgOrig.y},t;if(isNaN(pDim.x+pDim.y+imgOrig.x+imgOrig.y)){return false;}
if(ratio.x<1&&ratio.y<1){t=(ratio.x<ratio.y)?ratio.y:ratio.x;img.height=imgOrig.y*t;img.width=imgOrig.x*t;}
if(usemargin!==false){img.style.marginTop=((pDim.y-img.height)/2).toString()+'px';img.style.marginLeft=((pDim.x-img.width)/2).toString()+'px';}
return true;}};PLISTA.render.defaultStyleElements.imgresize=(function(){var defaultImage=PLISTA.render.defaultStyleElements.image;return function(item,args,ctx){var src=item.img,dim='';if(!src){return'';}
if(args[0]){dim+='width:'+args[0]+'px;';}
if(args[1]){dim+='height:'+args[1]+'px;';}
return'<span class="plista_widget_imgwrapper" style="display: block; overflow: hidden;'+dim+'">'+defaultImage(item,args,ctx)+'</span>';};}());PLISTA.render.defaultStyleElements.intextimgresize=(function(){var defaultImage=PLISTA.render.defaultStyleElements.image;return function(item,args,ctx){var src=item.img,dim='';if(!src){return'';}
if(args[0]){dim+='width:'+args[0]+'px;';}
if(args[1]){dim+='height:'+args[1]+'px;';}
return defaultImage(item,args,ctx);};}());


PLISTA.itemlists=(function(){var that=[],basicItemList;basicItemList=function(my){var that,algoinfo,reloadcount=0;my=my||{};my.spec=my.spec||{};my.spec.type=my.spec.type||'list';my.defaultData={items:[]};my.beforeRefresh=function(){my.spec.objectid=my.spec.objectid||PLISTA.currentObjectid();my.spec.adblock=PLISTA.adblockdetect?PLISTA.adblockdetect():false;};my.spec.count=(parseInt(my.spec.count,10))||0;my.required=my.required||[];my.filterGetData=my.filterGetData||function(data){algoinfo=data.algoinfo;if(data.action&&(typeof data.action.reload==='number')&&(data.action.reload>=0)&&reloadcount===0){window.setTimeout(that.refreshData,data.action.reload);reloadcount++;}
return data.items||[];};that=PLISTA.lib.dataobject(my);that.setCount=function(count,force){count=parseInt(count,10);if(isNaN(count)){throw'itemlist.setCount expects a number';}
if((my.spec.count<count)||force){my.spec.count=count;that.refreshData();}};that.getAlgoInfo=function(){return algoinfo||'';};that.getSpecProperty=function(name){return my.spec[name];};that.setSpecProperty=function(name,value){my.spec[name]=value;};that.toString=function(){return'basicItemList';};that.onFirstData=PLISTA.util.newEvent(that,'firstdata');that.onChange.subscribe((function(){var hasRun=false;return function(){if(!hasRun&&that.getData().length>0){hasRun=true;that.onFirstData.fire();}};}()));PLISTA.itemlists.push(that);return that;};that.getByDataSource=function(datasource,count){return that.getBySpec({datasource:datasource,count:count});};that.getBySpec=function(spec,nostore){var i,prop,existingValue,match;spec.count=parseInt(spec.count,10);for(i=0;i<that.length;i+=1){match=true;for(prop in spec){if(spec.hasOwnProperty(prop)&&(typeof spec[prop]!==undefined)&&(spec[prop]!==null)){existingValue=that[i].getSpecProperty(prop);if((prop!=='count')&&(existingValue!==spec[prop])){match=false;break;}}}
if(match){if(spec.count&&!isNaN(spec.count)){that[i].setCount(spec.count);}
return that[i];}}
return basicItemList({spec:spec,nostore:nostore});};PLISTA.onReset.subscribe(function(){that.splice(0,that.length);});return that;}());


PLISTA.hacks={6817:function(element,aditem){var bg=document.createElement('div'),overlay=document.createElement('div'),opts={width:aditem.width||950,height:aditem.height||650,type:'iframe',padding:10,scrolling:'auto',margin:10,centerOnScroll:true},sprintf=function(s){var i;for(i=1;i<arguments.length;i+=1){s=s.replace('%s',arguments[i]);}
return s;};overlay.id='plista_6817_overlay';bg.id='plista_6817_wrap';bg.innerHTML='<div id="plista_6817_closebutton">X</div><iframe id="plista_6817_frame" scrolling="no" frameborder="0" border="0" class="plista_6817_shadow" src="'+aditem.url+'"></iframe>';PLISTA.util.loadCSS('#plista_6817_wrap {width: 950px; height: 650px; position: absolute; z-index: 2147483646 !important; /*dominate everybody else. muhaa*/ } #plista_6817_overlay {z-index: 2147483636 !important; margin: 0 !important; padding: 0 !important; display: block;left: 0;position: fixed;top: 0;width: 100%;height: 100%;2147483640 !important; background-color: #777; -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter: alpha(opacity=80);opacity: 0.8;} .plista_6817_shadow {-moz-box-shadow: 0 0 5px 5px rgba(68,68,68,0.6);-webkit-box-shadow: 0 0 5px 5px rgba(68,68,68,0.6);box-shadow: 0 0 5px 5px rgba(68,68,68,0.6); zoom: 1;}'+
sprintf('#plista_6817_frame {background-color: #fff; padding: 10px; margin: 0; border: none; position: fixed; left: 50%; top: 50%; margin-left: -%spx; margin-top: -%spx;width: %spx; height: %spx; }',opts.width/2,opts.height/2,opts.width,opts.height+6)+
sprintf('#plista_6817_closebutton{cursor: pointer; font-size: 17px; font-weight: bold; color: #fff; line-height: 21px; text-align: center; position: fixed; border-radius: 50%; border: 3px solid #fff; z-index: 9999999; height: 20px; width: 20px; background-color: #000; left: 50%; top: 50%; margin-left: %spx; margin-top: -%spx;}',(opts.width/2)+8,(opts.height/2)+12));document.body.appendChild(overlay);document.body.appendChild(bg);PLISTA.util.DOM.event.add(overlay,'click',function(){document.body.removeChild(bg);document.body.removeChild(overlay);});PLISTA.util.DOM.event.add(document.getElementById('plista_6817_closebutton'),'click',function(){document.body.removeChild(bg);document.body.removeChild(overlay);});}};PLISTA.listwidgets=[];PLISTA.onReset.subscribe(function(){var lw;while((lw=PLISTA.listwidgets.pop())){lw.destroy();}},null,'destroy_listwidgets');PLISTA.listwidgets.ieFixInlineImages=function(){var i,url='',imgs=this.getElementsByTagName('img');for(i=0;i<imgs.length;i+=1){if(!imgs[i].src||imgs[i].src.indexOf('data:')===0){url=imgs[i].url;if(url){imgs[i].src=url;}}}};PLISTA.listwidgets.widget=(function(){var construct=function(spec){var that,logger=PLISTA.util.logger.getLogger('listwidgets.widget'),eventkey=PLISTA.util.uniqid('listwidget_anchors');function addClassToHTML(html,className,elementFinder){return html.replace(elementFinder,function(a){var classTest=/class="([a-zA-Z0-9 _\-\[\],\(\)]*)"/,classPresent=classTest.test(a);if(classPresent){a=a.replace(classTest,'class="'+className+' $01"');}else{a=a.replace('<a ','<a class="'+className+'" ');}
return a;});}
function getIsAbove(e){var w=PLISTA.util.DOM.getWindowDimensions(),p=PLISTA.util.DOM.getAbsolutePosition(e);return p.x<w.x&&p.y<w.y;}
function manipulateLinks(item,innerhtml,pos,callbacks){var className=that.getTarget().id+'_link_'+PLISTA.util.uniqid();if(item.title){callbacks.push(function(){Array.prototype.forEach.call(PLISTA.util.DOM.getElementsByClassName(className),function(e){e.setAttribute('title',item.title.replace(/\u00ad/g,''));});});}
callbacks.push(function(){Array.prototype.forEach.call(PLISTA.util.DOM.getElementsByClassName(className),function(e){PLISTA.util.DOM.event.add(e,'mousedown',function(){PLISTA.click({domainid:PLISTA.domainid,objectid:item.objectid,position:pos,widgetname:spec.widgetname,additionalParams:item.additionalParams,tagid:spec.list.getSpecProperty('tagid'),params:(typeof item.bucketid!=='undefined'?item.bucketid:spec.list.getAlgoInfo()),friendid:spec.list.getSpecProperty('objectid'),clickdomainid:item.domainid,campaignid:item.campaignid},false);},eventkey);});});innerhtml=addClassToHTML(innerhtml,className,/<a\s[^>]*[^>]*href=['"]\[url\]['"][^>]*[^>]*>/g);return innerhtml;}
function onChange(){that.refresh();}
if(typeof spec.target==='string'){spec.target=document.getElementById(spec.target);}
if(!spec.target){throw new Error('PLISTA.listwidgets.widget: no target element');}
if(!spec.itemStyle){logger.error('no item style defined - setting default, because we\'re nice');spec.itemStyle='<li><a href="[url]">[title]</a></li>';}
if(spec.getListOpts){spec.list=PLISTA.itemlists.getBySpec(spec.getListOpts());spec.count=spec.list.getSpecProperty('count');}else if((typeof spec.list==='string')||(typeof spec.list==='undefined')){logger.warn('deprecated warning - list parameter for widget should be list object instead of "'+spec.list+'"');spec.count=parseInt(spec.count,10)||0;spec.list=PLISTA.itemlists.getBySpec({datasource:'recommendations',count:spec.count,objectid:spec.objectid});}else{spec.count=parseInt(spec.count,10)||0;spec.list.setCount(spec.count);}
if(getIsAbove(spec.target)){spec.list.setSpecProperty('position','above');}
if(!spec.styleElements){spec.styleElements=PLISTA.render.defaultStyleElements;}
if(!spec.wrap){spec.wrap='[list]';}else{if((spec.wrap.indexOf('%%LISTTARGET%%')===-1)&&(spec.wrap.indexOf('[list]')===-1)){throw'invalid wrap (wrap, if it is set, must contain %%LISTTARGET%% or [list])';}
spec.wrap=construct.canonizeListTarget(spec.wrap);}
that={spec:spec,setCount:function(cnt){spec.list.setCount(cnt);spec.count=cnt;},init:function(){if(spec.css){PLISTA.util.loadCSS(spec.css);}
that.refresh();},refresh:function(){var i,html='',data=spec.list.getData(),style,ctx=spec.context||{},tempCtx,couponCalls=[],refreshCallbacks=[];PLISTA.util.DOM.event.removeAll(eventkey);ctx.listwidget=that;if(!data){logger.warn('itemlist contains no data! aborting refresh...');return;}
if((typeof data==='object')&&data&&(typeof data.length==='number')){if(spec.shuffle){data=construct.arrayShuffle(data);}
for(i=0;i<data.length;i++){tempCtx=construct.copyObj(ctx);tempCtx.position=i+1;if((typeof spec.itemStyle==='object')&&spec.itemStyle){style=spec.itemStyle[data[i].type||'default']||'';}else if(!data[i].type){style=spec.itemStyle;}else{logger.warn('no matching style for item '+data[i].domainid+'/'+data[i].objectid);style='';}
style=manipulateLinks(data[i],style,i+1,refreshCallbacks);if(style&&data[i].ad_html){style+='<div style="display:none">'+data[i].ad_html+"</div>";data[i].ad_html=null;}
html+=PLISTA.render.parseStyle(style,data[i].status&parseInt('256',10)?construct.copyObj(data[i]):construct.htmlSafeItemData(data[i]),spec.styleElements,tempCtx);if(data.status&parseInt('4096',10)){couponCalls.push({ctx:tempCtx,item:data[i]});}}}
html=html.replace(/title="([^"]+)"/g,function(val){return val.replace(/\u00ad/g,'');});if(html||PLISTA.options.showloading||spec.showempty){that.getTarget().innerHTML=PLISTA.render.parseStyle(spec.wrap,{list:html},spec.styleElements,{items:data});}
while(refreshCallbacks.length){refreshCallbacks.shift()();}
if(couponCalls.length){PLISTA.loadModules(['couponad'],function(){couponCalls.forEach(function(e){PLISTA.couponad.setCoupon(e.item,[],e.ctx);});});}
that.onRefresh.fire({items:data});return true;},destroy:function(){var i;spec.list.onChange.unsubscribe(onChange);that.getTarget().innerHTML='';i=PLISTA.listwidgets.indexOf(that);if(i===-1){logger.debug('list widget not in PLISTA.listwidgets o.O');return;}
PLISTA.listwidgets.splice(i,1);},toString:function(){return"list widget: "+that.getName();},getName:function(){return spec.widgetname;},setList:function(list){spec.list.onChange.unsubscribe(onChange);list.onChange.subscribe(onChange);spec.list=list;}};that.onRefresh=PLISTA.util.newEvent(that,'refresh');if(typeof spec.target==='function'){that.getTarget=spec.target;}else{that.getTarget=function(){return spec.target;};}
if(PLISTA.isIE6||PLISTA.isIE7){that.onRefresh.subscribe(PLISTA.listwidgets.ieFixInlineImages,that.getTarget(),'ieFixInlineImages');}
that.onRefresh.subscribe(function(list,data){var wraps=PLISTA.util.DOM.getElementsByClassName('plista_widget_'+list.spec.widgetname+'_item');data.items.forEach(function(aditem,idx){var wrap=wraps[idx];if([2989,3506].indexOf(aditem.campaignid)!==-1){PLISTA.util.DOM.event.add(wrap,'click',function(evt){PLISTA.hacks[6817](wrap,aditem);if(evt&&evt.preventDefault){evt.preventDefault();}else if(window.event&&window.event.returnValue){window.event.returnValue=false;}
return false;},'listwidget_2989');}});},null,'HACK#6817');that.setList(spec.list);PLISTA.listwidgets.push(that);return that;};construct.arrayShuffle=function(a){var
tmp,rand,l=a.length,i;for(i=0;i<l;i+=1){rand=Math.floor(Math.random()*l);tmp=a[i];a[i]=a[rand];a[rand]=tmp;}
return a;};construct.htmlSafeItemData=function(item){var safe={},name;for(name in item){if(item.hasOwnProperty(name)){if(typeof item[name]==='string'&&name!=='html'){safe[name]=PLISTA.util.htmlEntities(item[name]);}else{safe[name]=item[name];}}}
return safe;};construct.canonizeListTarget=function(s){var idS='id="[list]"',tmp;s=s.replace('%%LISTTARGET%%','[list]');tmp=s.indexOf(idS);if(tmp!==-1){tmp=s.indexOf('>',tmp);s=s.substr(0,tmp+1)+'[list]'+s.substr(tmp+1);s=s.replace(idS,'');}
return s;};construct.copyObj=function(a){var n,b={};for(n in a){if(a.hasOwnProperty(n)){b[n]=a[n];}}
return b;};return construct;}());


PLISTA.options.autoinit=false;PLISTA.options.showloading=false;PLISTA.onBeforeInit.subscribe(function(){var o,k=false,r=/plista\[([a-z]+)\]=([a-z0-9]+)/g,d={};try{while((o=r.exec(decodeURIComponent(PLISTA.test&&PLISTA.test.search?PLISTA.test.search:document.location.search)))){d[o[1]]=o[2];k=true;}}catch(e){PLISTA.util.logger.getLogger('partner.options').warn(e);}
if(k){PLISTA.remotedata('options',d);}
PLISTA.partner.options=d;},null,'parse_partner_options');PLISTA.partner={options:null,widgets:[],placements:[],determineOverrideName:function(osettings){var n,key,rand=Math.random(),p=0,line,tmp;for(n in osettings){if(osettings.hasOwnProperty(n)){line=osettings[n];key=line[0].split(':');if(key[0]==='p'){p=parseFloat(key[1])+p;if(p>rand){return line[1];}else if(p>1){throw new Error('sum of all probabilities is larger than 1 o.O');}}else if(key[0]==='ua'){tmp=key[1].match(/^\/(.+)\/([igm])?/);if((new RegExp(tmp[1],tmp[2])).test(navigator.userAgent)){return line[1];}}}}},init:(function(){var hasRun=false,timer=0,logger=PLISTA.util.logger.getLogger('partner.init');PLISTA.onReset.subscribe(function(){hasRun=false;});return function(loc,init){if(hasRun){throw new Error('PLISTA.partner.init must not be called twice in a row. If you need to re-initialize plista, please call PLISTA.reset first.');}
hasRun=true;if(PLISTA.isInited()){logger.error('did not run PLISTA.partner.init because PLISTA.init was called before');}
if(timer){logger.warn('second partner.init-call before first was completed. cancelling first one...');clearTimeout(timer);}
timer=setTimeout(function(){var ws=[];try{PLISTA.partner.init.onBefore.fire();PLISTA.partner.placements.forEach(function(p){var w,target=false;if(loc&&loc[p.name]){target=loc[p.name];}else if(typeof p.target==='string'){target=document.getElementById(p.target);}
if(!target){return;}
w=PLISTA.partner.widgets[PLISTA.partner.determineOverrideName(p.override)||p.name]();w.target=target;ws.push(w);});if(init!==false){PLISTA.onLoad.subscribe(function(){PLISTA.partner.initWidgets(ws);});PLISTA.init();}else{PLISTA.partner.initWidgets(ws);}}catch(e){logger.error(e);}},PLISTA.options.partnerInitDelay||0);};}()),initWidgets:function(widgets){if((typeof widgets!=='object')||(widgets===null)){return;}
function gotoFirstWidget(){setTimeout(function(){if(PLISTA.listwidgets[0]){document.location.hash='#'+PLISTA.listwidgets[0].getTarget().id;}},500);}
function changeAdvHereLink(e){return function(data){if(!(data&&data.success)){return;}
e.parentNode.replaceChild(PLISTA.util.DOM.createElement('div',data.markup).firstChild,e);};}
function addClickTracks(){var i,e=this.getTarget(),widgetname=this.spec.widgetname,es=e.getElementsByTagName('a'),clicktrack=function(evt){PLISTA.click({domainid:PLISTA.domainid,objectid:'advertisehere_de_1',friendid:PLISTA.currentObjectid(),clickdomainid:(evt.target||evt.srcElement).getAttribute('clickdomainid'),widgetname:widgetname});},href;for(i=0;i<es.length;i+=1){href=es[i].href;if(href&&(href.indexOf('http://www.plista.com/advertiser')===0)){es[i].setAttribute('clickdomainid',1083);PLISTA.util.DOM.addEventListener(es[i],'mousedown',clicktrack);if(PLISTA.items[0]){es[i].href='http://www.plista.com/advertiser/registrations/advertisehere/'+PLISTA.domainid+'/'+PLISTA.items[0].objectid;}}else if(href.indexOf('dummy')!==-1){PLISTA.remotedata('advertiseherelink',{objectid:PLISTA.items[0]?PLISTA.items[0].objectid:null},changeAdvHereLink(es[i]));}else if(/^http\:\/\/www\.plista\.com\/?$/.test(href)){es[i].setAttribute('clickdomainid',1141);PLISTA.util.DOM.addEventListener(es[i],'mousedown',clicktrack);}}}
widgets.forEach(function(spec){var widget;spec.target.className=(spec.target.className+' plista_widget_'+spec.widgetname).trim();if(spec.pages){widget=PLISTA.listwidgets.pagination(spec);}else{widget=PLISTA.listwidgets.widget(spec);}
widget.onRefresh.subscribe(addClickTracks,widget);if(document.location.hash==='#plista'){widget.onRefresh.subscribe(gotoFirstWidget,null,'gotoFirstWidget');}
widget.init();});}};PLISTA.partner.init.onBefore=PLISTA.util.newEvent(PLISTA.partner.init,'before');


PLISTA.options.flash=(function(){var detectFlash=function(m){var i,d,a_v=0;if(typeof navigator.plugins["Shockwave Flash"]==="object"){d=navigator.plugins["Shockwave Flash"].description;a_v=parseInt(d.substr(16,(d.indexOf(".",16)-16)),10);}else if(typeof ActiveXObject==="function"){for(i=2;i<=m;i+=1){try{if(typeof(new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i))==="object"){a_v=i;}}catch(error){}}}
return a_v;};return detectFlash(10)>=10;}());PLISTA.render.defaultStyleElements.flVideo=(function(){var loading=false,widgets=[],cb=function(){widgets.forEach(function(w){w.refresh();});};return function(item,args,ctx){if(!PLISTA.flash){if(!loading){loading=true;PLISTA.loadModules(['flash'],cb);}
if(widgets.indexOf(ctx.listwidget)===-1){widgets.push(ctx.listwidget);}
return'';}else{return PLISTA.flash.flVideo(item,args,ctx);}};}());


PLISTA.adblockdetect=function(){var
d=document.createElement('div'),result=false,style;d.id='plista_adblockdetect_wrapper';d.style.float='right';d.style.color='#fff';['Ad2','advt'].some(function(id){d.innerHTML='<div id="'+id+'">X</div>';document.body.appendChild(d);try{style=window.getComputedStyle(d,"");result=!parseInt(style.height,10);}catch(e){PLISTA.util.logger.getLogger('adblockdetect').warn('exception: '+e);}
document.body.removeChild(d);return result;});return result;};


PLISTA.sandbox=(function(){var
that={};that.enable=PLISTA.util.getEnableSwitch(false);that.regexp=null;that.check=function(){that.enable(!!window.PLISTA_sandbox||(that.regexp&&that.regexp.test(document.location.href)));};that.check();PLISTA.onReset.subscribe(that.check);return that;}());


PLISTA.util.sha1=function(msg){function rotate_left(n,s){var t4=(n<<s)|(n>>>(32-s));return t4;}
function cvt_hex(val){var str="";var i;var v;for(i=7;i>=0;i--){v=(val>>>(i*4))&0x0f;str+=v.toString(16);}
return str;}
function Utf8Encode(string){string=string.replace(/\r\n/g,"\n");var utftext="";for(var n=0;n<string.length;n++){var c=string.charCodeAt(n);if(c<128){utftext+=String.fromCharCode(c);}else if((c>127)&&(c<2048)){utftext+=String.fromCharCode((c>>6)|192);utftext+=String.fromCharCode((c&63)|128);}else{utftext+=String.fromCharCode((c>>12)|224);utftext+=String.fromCharCode(((c>>6)&63)|128);utftext+=String.fromCharCode((c&63)|128);}}
return utftext;}
var blockstart;var i,j;var W=[];var H0=0x67452301;var H1=0xEFCDAB89;var H2=0x98BADCFE;var H3=0x10325476;var H4=0xC3D2E1F0;var A,B,C,D,E;var temp;msg=Utf8Encode(msg);var msg_len=msg.length;var word_array=[];for(i=0;i<msg_len-3;i+=4){j=msg.charCodeAt(i)<<24|msg.charCodeAt(i+1)<<16|msg.charCodeAt(i+2)<<8|msg.charCodeAt(i+3);word_array.push(j);}
switch(msg_len%4){case 0:i=0x080000000;break;case 1:i=msg.charCodeAt(msg_len-1)<<24|0x0800000;break;case 2:i=msg.charCodeAt(msg_len-2)<<24|msg.charCodeAt(msg_len-1)<<16|0x08000;break;case 3:i=msg.charCodeAt(msg_len-3)<<24|msg.charCodeAt(msg_len-2)<<16|msg.charCodeAt(msg_len-1)<<8|0x80;break;}
word_array.push(i);while((word_array.length%16)!=14){word_array.push(0);}
word_array.push(msg_len>>>29);word_array.push((msg_len<<3)&0x0ffffffff);for(blockstart=0;blockstart<word_array.length;blockstart+=16){for(i=0;i<16;i++){W[i]=word_array[blockstart+i];}
for(i=16;i<=79;i++){W[i]=rotate_left(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);}
A=H0;B=H1;C=H2;D=H3;E=H4;for(i=0;i<=19;i++){temp=(rotate_left(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=20;i<=39;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=40;i<=59;i++){temp=(rotate_left(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
for(i=60;i<=79;i++){temp=(rotate_left(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff;E=D;D=C;C=rotate_left(B,30);B=A;A=temp;}
H0=(H0+A)&0x0ffffffff;H1=(H1+B)&0x0ffffffff;H2=(H2+C)&0x0ffffffff;H3=(H3+D)&0x0ffffffff;H4=(H4+E)&0x0ffffffff;}
temp=cvt_hex(H0)+cvt_hex(H1)+cvt_hex(H2)+cvt_hex(H3)+cvt_hex(H4);return temp.toLowerCase();};


PLISTA.og={objectid:null,enable:PLISTA.util.getEnableSwitch(false),recommendable:(function(){var recommendable=true;return function(v){if(typeof v==='boolean'){recommendable=v;}
return recommendable;};}()),getItem:function(){var i,m,n,v,item={objectid:PLISTA.og.objectid},mapping={"og:title":"title","og:url":"url","og:description":"text","og:image":"img","article:published_time":"created_at","article:section":"category"},ms=document.getElementsByTagName('meta');for(i=ms.length-1;i>=0;i-=1){m=ms[i];v=m.getAttribute('property')||m.property;if(v&&mapping[v]){n=v.split(':')[1];item[mapping[v]]=m.getAttribute('content')||m.content;}}
if(!item.objectid&&item.url&&PLISTA.util.sha1){item.objectid=PLISTA.util.sha1(item.url);}
return item;},augmentItem:function(){var
n,pi=PLISTA.items[0],logger=PLISTA.util.logger.getLogger('og.onBeforeInit'),item;if(!PLISTA.og.enable()){logger.info('Open Graph disabled. doing nothing...');return;}
item=PLISTA.og.getItem();if(item){if(!pi){logger.info('setting current item...');if(!PLISTA.og.recommendable()){logger.info('"recommendable" flag is not set for Open Graph, setting BADITEM flag to new item...');item.status=parseInt('8',10);}
PLISTA.items.push(item);}else{logger.debug('trying to augment current item...');if(!(pi.url&&pi.objectid&&pi.title)&&!PLISTA.og.recommendable()){logger.info('"recommendable" flag is not set for Open Graph, setting BADITEM flag to item that couldnt have been recommended without OG...');item.status=parseInt('8',10);}
for(n in item){if(item.hasOwnProperty(n)){if(item[n]&&!pi[n]){pi[n]=item[n];logger.info('augmenting prop '+n+' on current item...');}}}}}}};
PLISTA.publickey='89c156240fe271699d96d94420173b1bdaea59be';PLISTA.domainid=1902;PLISTA.partner.placements.push({"name":"belowArticle","target":"plista_widget_belowArticle","override":[]});PLISTA.partner.widgets["belowArticle"]=function(){return{"wrap":"<span class=\"plistaHl\">Ceci peut aussi vous int\u00e9resser<\/span>\n<div id=\"%%LISTTARGET%%\" class=\"plistaList\"><\/div>\n<div class=\"plistaPowered\">\n\t<a title=\"powered by plista\" href=\"http:\/\/www.plista.com\" target=\"_blank\">\n\t\t<img alt=\"plista Blume\" title=\"plista\" src=\"http:\/\/static.plista.com\/image\/logo_plista_lightgray_ffffff_alpha.gif\"\/>\n\tpowered by plista<\/a>\n<\/div>","itemStyle":{"default":"<a class=\"plista_widget_belowArticle_item itemLink\" href=\"[url]\" title=\"[title]\">\n\t[image]\n\t<span class=\"itemTitle\">[title(70, true)]<\/span>\n\t<span class=\"itemText\">[text(132, true)]&#160;<span class=\"itemMore\">Lire la suite<\/span><\/span>\n\t<span class=\"plistaClear\"><\/span>\n<\/a>","pet":"<a target=\"_blank\" class=\"plista_widget_belowArticle_item itemLinkPET\" href=\"[url]\" title=\"[title]\">\n\t[imagepet(70, 70)]\n\t<span class=\"itemTitle\">[title(70, true)]<\/span>\n\t<span class=\"itemText\">[text(132, true)]&#160;<span class=\"itemMore\">Lire la suite<\/span><\/span>\n\t<span class=\"PETcontainer\">\n\t\t<img src=\"data:image\/gif;base64,R0lGODlhDAAJAKIGAM3NzMzMy8zLy83MzMzLzMzMzP\/\/\/wAAACH5BAEAAAYALAAAAAAMAAkAAAMjaGrVBYMsNlcxhNyKJeWDoGxVMSgBh5FNFJ5edVqFJgykkQAAOw==\" url=\"http:\/\/static.plista.com\/images\/newtab.gif\" alt=\"newtab\" title=\"newtab\" border=\"0\" \/>\n\t\t<span alt=\"new tab\" class=\"PETclue\">Publicit\u00e9<\/span>\n\t<\/span>\n\t<span class=\"plistaClear\"><\/span>\n<\/a>","flashPet":"<a target=\"_blank\" class=\"plista_widget_belowArticle_item itemLinkPET\" href=\"[url]\" title=\"[title]\" id=\"flAnimTrigger[number]\">\n\t<span id=\"flAdContainer[number]\" class=\"itemFlashWrap\">[flVideo(EFECE8, 70, 70, 541, 541, true)]<\/span>\n\t<span id=\"flAdData[number]\" class=\"itemFlash\">\n\t\t<span class=\"itemTitle\">[title(70, true)]<\/span>\n\t\t<span class=\"itemText\">[text(132, true)]&#160;<span class=\"itemMore\">Lire la suite<\/span><\/span>\n\t\t<span class=\"PETcontainer\">\n\t\t\t<img src=\"data:image\/gif;base64,R0lGODlhDAAJAKIGAM3NzMzMy8zLy83MzMzLzMzMzP\/\/\/wAAACH5BAEAAAYALAAAAAAMAAkAAAMjaGrVBYMsNlcxhNyKJeWDoGxVMSgBh5FNFJ5edVqFJgykkQAAOw==\" url=\"http:\/\/static.plista.com\/images\/newtab.gif\" alt=\"newtab\" title=\"newtab\" border=\"0\" \/>\n\t\t\t<span alt=\"new tab\" class=\"PETclue\">Publicit\u00e9<\/span>\n\t\t<\/span>\n\t<\/span>\n\t<span class=\"plistaClear\"><\/span>\n<\/a>"},"styleElements":Object.create(PLISTA.render.defaultStyleElements).augment({image:function(item){return item.img?'<img alt="[title]" src="'+item.img+'"/>':'';},imagepet:function(item,args){return item.img?'<img title="[title]" src="'+PLISTA.render.imageUrl(item,args[0],args[1])+'"/>':'';}}),"getListOpts":function(){return{"count":5,"adcount":2,"flash":PLISTA.options.flash&&true,"recStatus":[],"widgetname":"belowArticle","filter":[]};},"widgetname":"belowArticle","css":".itemLink,.itemLinkPET{display:block;padding:5px 3px;text-decoration:none !important;margin-left:5px;background-color:transparent }.itemLink:hover,.itemLinkPET:hover,.itemLinkPET{background-color:#E7E7E7}.itemFlashWrap{display:block;float:left;margin:2px 0 4px 0}.itemFlash{display:block;margin:0 0 0 80px}.itemTitle{color:#000000;font-size:12px;font-weight:bold;margin:0;position:relative;display:block}.itemText{margin:0;position:relative;color:#000000;font-size:12px;display:block}.itemMore{color:#4A7300;text-decoration:underline }.itemLink img,.itemLinkPET img{float:left;margin:2px 10px 0 0 !Important;position:relative;border:none !important }.itemLink img{width:70px}.PETcontainer{text-align:right;position:relative;margin-top:-3px;display:block}.PETcontainer img{vertical-align:middle;float:none;height:auto;margin:0;padding:0;width:auto;border:none}.PETclue{font-size:10px;color:#aaa;display:inline;margin:0 0 0 4px;padding:0;font-weight:normal;text-transform:uppercase }.plistaPowered{text-align:right;padding:2px 5px }.plistaPowered a{font-size:9px;color:#777777 !important;text-decoration:none;font-weight:normal;text-transform:none }.plistaPowered img{vertical-align:middle;border:none }.plistaHl{border-top:2px solid #7AAA20;font-size:12px;font-weight:bold;text-transform:uppercase;display:block;margin:10px 0 0 10px;padding-top:3px }.plistaClear{clear:both;line-height:0px;height:0px;font-size:1px;display:block}","metaPlaceholder":{"text":[{"flags":2048,"styleElement":"likead","params":["75","100","200","light"]}]}};};if(PLISTA.onBeforeInit){PLISTA.onBeforeInit.subscribe(function(){if(!PLISTA.items.length&&PLISTA.findItems){Array.prototype.push.apply(PLISTA.items,PLISTA.findItems());}
PLISTA.og.augmentItem();});}
if(PLISTA.onSendItemData){PLISTA.onSendItemData.subscribe(function(o,item){var cat=PLISTA.findCategory?PLISTA.findCategory(item):null;if(cat||cat===false){PLISTA.addCategory(item,cat);}});}
}

				if (!window.TINYPLISTA) {
					window.TINYPLISTA = [];
				}
				if (PLISTA) {
					window.TINYPLISTA.push(PLISTA);
				}

				if (PLISTA) {
					window.PLISTA = PLISTA;
				}
window.plista = PLISTA;

}());