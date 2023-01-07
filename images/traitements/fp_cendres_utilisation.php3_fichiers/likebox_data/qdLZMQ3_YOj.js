/*1345432708,178142517*/

if (window.CavalryLogger) { CavalryLogger.start_js(["yBChh"]); }

__d("legacy:intl-locale",["Locale"],function(a,b,c,d){a.intl_locale_is_rtl=b('Locale').isRTL;},3);
__d("legacy:control-textarea",["TextAreaControl"],function(a,b,c,d){a.TextAreaControl=b('TextAreaControl');},3);
__d("mergeObjects",["copyProperties"],function(a,b,c,d,e,f){var g=b('copyProperties');function h(){var i={};for(var j=0;j<arguments.length;j++)g(i,arguments[j]);return i;}e.exports=h;});
__d("legacy:object-extensions",["areObjectsEqual","coalesce","isScalar","mergeObjects","getObjectValues","createObjectFrom"],function(a,b,c,d){a.are_equal=b('areObjectsEqual');a.coalesce=b('coalesce');a.count=function(f){return Object.keys(f).length;};a.is_scalar=b('isScalar');a.keys=Object.keys;a.merge=b('mergeObjects');a.values=b('getObjectValues');var e=b('createObjectFrom');Object.from=function(f,g){return e(f,g);};},3);
function OpenIDRequest(){var a=new AsyncRequest().setReadOnly(true).setHandler(this.asyncResponseHandler.bind(this)).setErrorHandler(this.asyncErrorHandler.bind(this));copyProperties(this,{openidUrl:null,requestId:OpenIDRequest.maxRequestId++,successResponseHandler:null,cancelHandler:null,intermediateHandler:null,immediateMode:false,useExtensions:true,thirdPartyLogin:false,popupWindow:null,asyncRequest:a,retryCount:0});OpenIDRequest.requests[this.requestId]=this;}OpenIDRequest.getRequestById=function(a){return OpenIDRequest.requests[a];};OpenIDRequest.prototype.setOpenIDUrl=function(a){this.openidUrl=a;return this;};OpenIDRequest.prototype.setSuccessHandler=function(a){this.successResponseHandler=a;return this;};OpenIDRequest.prototype.setErrorHandler=function(a){this.errorHandler=a;return this;};OpenIDRequest.prototype.setCancelHandler=function(a){this.cancelHandler=a;return this;};OpenIDRequest.prototype.setImmediateMode=function(a){this.immediateMode=a;return this;};OpenIDRequest.prototype.setUseExtensions=function(a){this.useExtensions=a;return this;};OpenIDRequest.prototype.setIntermediateHandler=function(a){this.intermediateHandler=a;return this;};OpenIDRequest.prototype.setThirdPartyLogin=function(a){this.thirdPartyLogin=a;return this;};OpenIDRequest.prototype.send=function(){if(!this.openidUrl)throw "openidUrl is a required parameter. Call setOpenIDUrl()";uri=this.calculateRedirectUrl();if(!uri){this.logMetrics('redirectUrlNotFound');return;}if(this.immediateMode){this.createHiddenIframe(uri);}else{if(this.popupWindow)throw "OpenID popup is already in progress";this.showPopup(uri);}this.logMetrics('requestSent');};OpenIDRequest.prototype.calculateRedirectUrl=function(a){var b=this.immediateMode?'checkid_immediate':'checkid_setup',c={'openid.mode':b},d;if(!OpenIDRequest.cache[this.openidUrl])return null;d=OpenIDRequest.cache[this.openidUrl].url;var e=URI(URI(d).getQueryData()['openid.return_to']);e.addQueryData({context:OpenIDRequest.context,request_id:this.requestId});c['openid.return_to']=e.toString();c.third_party_login=this.thirdPartyLogin;return URI(d).addQueryData(c).getQualifiedURI();};OpenIDRequest.prototype.createHiddenIframe=function(a){var b='openid_request_'+this.requestId,c=document.body.appendChild(document.createElement('div')),d=function(){c.innerHTML=('<iframe name="'+b+'"'+' src="'+a.toString()+'"'+' scrolling="no" '+' frameborder="0" class="hidden_elem"></iframe>');};if(ua.ie()){c.innerHTML='<iframe src="javascript:false"></iframe>';d.defer();}else d();};OpenIDRequest.prototype.showPopup=function(a){if(OpenIDRequest.cache[this.openidUrl])popupDimensions=OpenIDRequest.cache[this.openidUrl].popup_dimensions;if(typeof(popupDimensions)=="undefined"||!popupDimensions||!popupDimensions.height||!popupDimensions.width)popupDimensions={height:'580',width:'790'};var b={x:coalesce(window.screenX,window.screenLeft),y:coalesce(window.screenY,window.screenTop),width:coalesce(window.outerWidth,document.body.clientWidth),height:coalesce(window.outerHeight,document.body.clientHeight)},c=b.x+((b.width-popupDimensions.width)/2),d=b.y+((b.height-popupDimensions.height)/2),e=["location=yes","scrollbars=1","left="+c,"top="+d,"resizable=yes","height="+popupDimensions.height,"width="+popupDimensions.width].join(",");this.popupWindow=window.open(a.toString(),'_blank',e);this.popupPollInterval=setInterval(this.pollPopupWindow.bind(this),100);this.popupWindow.focus();};OpenIDRequest.prototype.pollPopupWindow=function(){if(!(this.popupPollInterval&&this.popupWindow))return;if(this.popupWindow.closed){clearInterval(this.popupPollInterval);this.cancel();}};OpenIDRequest.prototype.closePopupIfOpen=function(){if(this.popupWindow){if(this.popupPollInterval)clearInterval(this.popupPollInterval);this.popupWindow.close();}this.popupWindow=null;};OpenIDRequest.prototype.cancel=function(){this.closePopupIfOpen();if(this.cancelHandler)this.cancelHandler();this.logMetrics('requestCanceled');};OpenIDRequest.prototype.logMetrics=function(a){new AsyncSignal('/ajax/openid/metrics.php',{metric:a,immediate:this.immediateMode,context:OpenIDRequest.context,openid_url:this.openidUrl}).send();};OpenIDRequest.prototype.triggerCompleteAuthAsync=function(a){if(a.charAt(0)=='?'||a.charAt(0)=='&')a=a.substr(1);var b=URI.explodeQuery(a);this.closePopupIfOpen();if(b['openid.mode']=='cancel'){this.cancel();return;}if(this.intermediateHandler)this.intermediateHandler();this.asyncRequest.setData({openid_params:b}).send();};OpenIDRequest.prototype.asyncResponseHandler=function(a){var b=a.getPayload();if(this.successResponseHandler)this.successResponseHandler(b);this.closePopupIfOpen();};OpenIDRequest.prototype.cleanHandleResponse=function(a){if(a.css)a.css=$A(a.css);this.asyncRequest.handleResponse(a);};OpenIDRequest.prototype.asyncErrorHandler=function(a){this.closePopupIfOpen();if(a.error==1428010||a.error==1428011){this.cancel();return;}if(this.errorHandler)this.errorHandler(a);};OpenIDRequest.prototype.retry=function(){++this.retryCount;this.requestId=OpenIDRequest.maxRequestId++;this.send();};OpenIDRequest.prototype.setProviderCache=function(a){OpenIDRequest.cache=a;return this;};OpenIDRequest.cache={};OpenIDRequest.requests=[];OpenIDRequest.maxRequestId=0;OpenIDRequest.context='default';
__d("legacy:TimelineController",["TimelineController"],function(a,b,c,d){a.TimelineController=b('TimelineController');},3);