var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var i=void 0,k=!0,m=null,n=!1,aa=encodeURIComponent,o=window,ba=Object,ca=parseInt,s=String,t=document,u="push",v="test",da="exec",ea="width",w="replace",fa="getElementById",x="indexOf",ga="readyState",y="createElement",z="setAttribute",ia="getElementsByTagName",B="length",ja="size",ka="split",D="location",E="style",F="call",G="getAttribute",H="href",la="action",I="apply",ma="parentNode",na="height",J="join",L="toLowerCase";var M=o,N=t,oa=M[D],pa=function(){},qa=/\[native code\]/,O=function(a,b,c){return a[b]=a[b]||c},ra=function(a){for(var b=0;b<this[B];b++)if(this[b]===a)return b;return-1},sa=/&/g,ta=/</g,ua=/>/g,va=/"/g,wa=/'/g,xa=function(a){return s(a)[w](sa,"&amp;")[w](ta,"&lt;")[w](ua,"&gt;")[w](va,"&quot;")[w](wa,"&#39;")},P=function(){var a;if((a=ba.create)&&qa[v](a))a=a(m);else{a={};for(var b in a)a[b]=i}return a},S=function(a,b){return ba.prototype.hasOwnProperty[F](a,b)},T=function(a,b){var a=a||{},c;for(c in a)S(a,
c)&&(b[c]=a[c])},U=O(M,"gapi",{});var ya=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g"),b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[da](a)||b[da](a)))try{c=decodeURIComponent(a[2])}catch(d){}return c},za=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Aa=function(a){var b=[];if(a)for(var c in a)S(a,c)&&a[c]!=m&&b[u](aa(c)+"="+aa(a[c]));return b},Ba=function(a,b,c){var a=a.match(za),e=P();e.o=a[1];e.d=a[3]?[a[3]]:[];e.c=a[5]?[a[5]]:[];e.d[u][I](e.d,Aa(b));e.c[u][I](e.c,Aa(c));return e.o+(0<e.d[B]?"?"+e.d[J]("&"):"")+
(0<e.c[B]?"#"+e.c[J]("&"):"")};var Ca=function(a,b,c){if(M[b+"EventListener"])M[b+"EventListener"]("message",a,n);else if(M[c+"tachEvent"])M[c+"tachEvent"]("onmessage",a)};var V;V=O(M,"___jsl",P());O(V,"I",0);O(V,"hel",10);var Da=function(a){return!V.dpo?ya(a,"jsh",V.h):V.h},Ea=function(a){return O(O(V,"H",P()),a,P())};var Fa=O(V,"perf",P()),Ha=O(Fa,"g",P());O(Fa,"i",P());var Ia=O(Fa,"r",[]);P();P();var W=function(a,b,c){Ha[a]=!b&&Ha[a]||c||(new Date).getTime();"function"===typeof Ia?Ia(a,i,i):Ia[u]([a,i,i])};var Ja=P(),X=[],Y;Y={b:"callback",n:"sync",k:"config",e:"_c",i:"h",g:"platform",p:"ds",j:"jsl",TIMEOUT:"timeout",l:"ontimeout"};X[u]([Y.j,function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?V[b]=O(V,b,[]).concat(c):O(V,b,c)}if(a=a.u)b=O(V,"us",[]),b[u](a),(c=/^https:(.*)$/[da](a))&&b[u]("http:"+c[1]),O(V,"u",a)}]);var Ka=decodeURI("%73cript");Ja.m=function(a){var b=V.ms||"https://apis.google.com",a=a[0];if(!a||0<=a[x](".."))throw"Bad hint";return b+"/"+a[w](/^\//,"")};
var La=function(a){return a[J](",")[w](/\./g,"_")[w](/-/g,"_")},Ma=function(a,b){for(var c=[],e=0;e<a[B];++e){var d=a[e];d&&0>ra[F](b,d)&&c[u](d)}return c},Na=/[@"'<>#\?&]|%2F|%3F|%23|%26/,Oa=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,Pa=/\/cb=/g,Qa=function(a){var b=N[y](Ka);b[z]("src",a);b.async="true";a=N[ia](Ka)[0];a[ma].insertBefore(b,a)},Sa=function(a,b){var c=b||{};"function"==typeof b&&(c={},c[Y.b]=b);var e=c,d=e&&e[Y.e];if(d)for(var f=0;f<X[B];f++){var g=X[f][0],h=X[f][1];h&&S(d,
g)&&h(d[g],a,e)}if(!(e=c[Y.i]))if(e=Da(oa[H]),!e)throw"Bad hint";var j=e,p=c[Y.b],l=c[Y.k],d=c[Y.TIMEOUT],q=c[Y.l],r=m,A=n;if(d&&!q||!d&&q)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var e=O(Ea(j),"r",[]).sort(),K=O(Ea(j),"L",[]).sort(),ha=function(a){if(A)return 0;M.clearTimeout(r);K[u][I](K,C);var b=((U||{}).config||{}).update;b?b(l):l&&O(V,"cu",[])[u](l);a&&Ra(function(){var b;b=j===Da(oa[H])?O(U,"_",P()):P();b=O(Ea(j),"_",b);a(b)});p&&p();return 1};0<d&&
(r=M.setTimeout(function(){A=k;q()},d));if(a){d=a[ka](":").sort();f=[];g=i;for(h=0;h<d[B];h++){var $=d[h];$!=g&&f[u]($);g=$}d=f}else d=[];var C=Ma(d,K);if(!C[B])return ha();var C=Ma(d,e),Q=O(V,"CP",[]),R=Q[B];Q[R]=function(a){if(!a)return 0;var b=function(){Q[R]=m;return ha(a)};if(R>0&&Q[R-1])Q[R]=b;else for(b();b=Q[++R];)if(!b())break};if(!C[B])return Q[R](pa);var Ga="loaded_"+V.I++;U[Ga]=function(a){Q[R](a);U[Ga]=m};d=j[ka](";");d=(f=Ja[d.shift()])&&f(d);if(!d)throw"Bad hint:"+j;f=d=d[w]("__features__",
La(C))[w](/\/$/,"")+(e[B]?"/ed=1/exm="+La(e):"")+("/cb=gapi."+Ga);g=f.match(Pa);if(!g||!(1===g[B]&&Oa[v](f)&&!Na[v](f)))throw"Bad URL "+d;e[u][I](e,C);c[Y.n]||M.___gapisync?(c=d,"loading"!=N[ga]?Qa(c):N.write("<"+Ka+' src="'+encodeURI(c)+'"></'+Ka+">")):Qa(d)};var Ra=function(a){if(V.hee&&0<V.hel)try{return a()}catch(b){V.hel--,Sa("debug_error",function(){o.___jsl.hefn(b)})}else return a()};U.load=function(a,b){return Ra(function(){return Sa(a,b)})};var Ta=function(){return o.___jsl=o.___jsl||{}},Ua=function(a){var b=Ta();b[a]=b[a]||[];return b[a]},Va=function(a){var b=Ta();b.cfg=!a&&b.cfg||{};return b.cfg},Wa=function(a){return"object"===typeof a&&/\[native code\]/[v](a[u])},Xa=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Wa(a[c])&&!Wa(b[c])?Xa(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Wa(b[c])?[]:{},Xa(a[c],b[c])):a[c]=b[c])},Z=function(a){if(!a)return Va();for(var a=
a[ka]("/"),b=Va(),c=0,e=a[B];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[B]&&b!==i?b:i};var Ya=["left","right"],Za="inline bubble none only pp vertical-bubble".split(" "),$a=function(a){var b=t[y]("div"),c=t[y]("a");c.href=a;b.appendChild(c);b.innerHTML=b.innerHTML;return b.firstChild[H]},ab=function(){return o[D].origin||o[D].protocol+"//"+o[D].host},bb=function(a,b,c,e){if(a)a=$a(a);else a:{a=e||"canonical";b=t[ia]("link");c=0;for(e=b[B];c<e;c++){var d=b[c],f=d[G]("rel");if(f&&f[L]()==a&&(d=d[G]("href")))if(d=$a(d)){a=d;break a}}a=o[D][H]}return a},cb=function(a,b){if("string"==typeof a){var c;
for(c=0;c<b[B];c++)if(b[c]==a[L]())return a[L]()}},db=function(a){return cb(a,Ya)},eb=function(a){return cb(a,Za)},fb={tall:{"true":{width:50,height:60},"false":{width:50,height:24}},small:{"false":{width:24,height:15},"true":{width:70,height:15}},medium:{"false":{width:32,height:20},"true":{width:90,height:20}},standard:{"false":{width:38,height:24},"true":{width:106,height:24}}},gb=function(a){return"string"==typeof a?""!=a&&"0"!=a&&"false"!=a[L]():!!a},hb=function(a){var b=ca(a,10);if(b==a)return s(b)},
ib=function(a){if(gb(a))return"true"},jb=function(a){return"string"==typeof a&&fb[a[L]()]?a[L]():"standard"},kb={href:[bb,"url"],width:[hb],size:[jb],resize:[ib],autosize:[ib],count:[function(a,b){return"tall"==jb(b[ja])?"true":b.count==m||gb(b.count)?"true":"false"}],db:[function(a,b,c){a==m&&c&&(a=c.db,a==m&&(a=c.gwidget&&c.gwidget.db));return gb(a)?1:i}],ecp:[function(a,b,c){a==m&&c&&(a=c.ecp,a==m&&(a=c.gwidget&&c.gwidget.ecp));if(gb(a))return"true"}],textcolor:[function(a){if("string"==typeof a&&
a.match(/^[0-9A-F]{6}$/i))return a}],drm:[ib],recommendations:[],fu:[],ad:[ib],cr:[hb],ag:[hb],"fr-ai":[],"fr-sigh":[]};var lb={badge:{width:300,height:131},smallbadge:{width:300,height:69}},mb=function(a){return"string"==typeof a&&lb[a[L]()]?a[L]():"badge"};var nb={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},ob=0;var pb=/:([a-zA-Z_]+):/g,qb={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},rb="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),sb={},tb=m,ub=O(V,"WI",P()),vb=function(){var a=Z("googleapis.config/sessionIndex");a==m&&(a=o.__X_GOOG_AUTHUSER);if(a==m){var b=o.google;b&&(a=b.authuser)}a==m&&(a=i,a==m&&(a=o[D][H]),a=a?ya(a,"authuser")||m:m);return a==m?m:s(a)},wb=function(a,b){if(!tb){var c=Z("iframes/:socialhost:"),e=vb()||"0",d=vb();tb={socialhost:c,
session_index:e,session_prefix:d!==i&&d!==m&&""!==d?"u/"+d+"/":""}}return tb[b]||""},xb=function(a,b){var c={};T(b,c);if("additnow"!==a&&(c.hl=Z("lang")||"en-US",c.origin=ab(),"plus"===a)){var e;e=bb(c[H],0,0,b[la]?m:"publisher");c.url=e;delete c[H];c.size=mb(b[ja]);e=b[ea];c.width=!e?b[la]?i:lb[mb(b[ja])][ea]:ca(e,10);e=b[na];c.height=!e?b[la]?i:lb[mb(b[ja])][na]:ca(e,10)}return c},Ab=function(a,b,c,e){if(!b[ma])return m;if(!e){for(var e=P(),d=0!=b.nodeName[L]()[x]("g:"),f=0,g=b.attributes[B];f<
g;f++){var h=b.attributes[f],j=h.name,h=h.value;0<=ra[F](yb,j)||(d&&0!=j[x]("data-")||"null"===h)||(d&&(j=j.substr(5)),e[j[L]()]=h)}d=b[E];(f=zb(d&&d[na]))&&(e.height=s(f));(d=zb(d&&d[ea]))&&(e.width=s(d))}d=a;"plus"==a&&e[la]&&(d=a+"_"+e[la]);(d=Z("iframes/"+d+"/url"))||(d=":socialhost:/_/widget/render/"+a);d=d[w](pb,wb);f=((sb[a]||[])[0]||xb)(a,e);f.hl=Z("lang")||"en-US";V.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;g=Z("inline/css");"undefined"!==typeof g&&g>=c&&(f.ic="1");c=f;"additnow"===
a&&(c.parenturl=oa[H],S(c,"applicationid")&&(c.appid=c.applicationid,delete c.applicationid),c.style=c[E]||b[G]("style"));var p,f=c,g=/^#|^fr-/,j={};for(p in f)S(f,p)&&g[v](p)&&(j[p[w](g,"")]=f[p],delete f[p]);p=j;"additnow"===a&&(p.action="render");f=p;g=c;j=[].concat(rb);h=Z("iframes/"+a+"/methods");"object"===typeof h&&qa[v](h[u])&&(j=j.concat(h));for(var l in e)if(S(e,l)&&/^on/[v](l)&&("plus"!=a||"onconnect"!=l))j[u](l),delete g[l];f._methods=j[J](",");d=Ba(d,c,p);e.rd?l=b:(l=t[y]("div"),b[z]("data-gapistub",
k),l[E].cssText="position:absolute;width:100px;left:-10000px;",b[ma].insertBefore(l,b));l.id||(b=l,O(ub,a,0),p="___"+a+"_"+ub[a]++,b.id=p);b=P();b[">type"]=a;T(e,b);l[z]("data-gwattr",Aa(b)[J](":"));p=d;a=l;b={attributes:qb};l=a.ownerDocument;d=0;do e=b.id||["I",ob++,"_",(new Date).getTime()][J]("");while(l[fa](e)&&5>++d);if(!(5>d))throw Error("Error creating iframe id");c=l[D][H];d=P();(f=ya(c,"_bsh",V.bsh))&&(d._bsh=f);(c=Da(c))&&(d.jsh=c);var q,c=P();c.id=e;c.parent=l[D].protocol+"//"+l[D].host;
b.hintInFragment?T(d,c):q=d;p=Ba(p,q,c);q=P();T(nb,q);q.name=q.id=e;T(b.attributes,q);q.src=p;var r;try{r=l[y]('<iframe frameborder="'+xa(q.frameborder)+'" scrolling="'+xa(q.scrolling)+'" name="'+xa(q.name)+'"/>')}catch(A){r=l[y]("iframe")}for(var K in q)b=q[K],"style"==K&&"object"===typeof b?T(b,r[E]):r[z](K,q[K]);a.innerHTML="";a.appendChild(r);q.allowtransparency&&(r.allowTransparency=k);return r},yb=["style","data-gapiscan"],zb=function(a){var b=i;"number"===typeof a?b=a:"string"===typeof a&&
(b=ca(a,10));return b},Bb=function(){};sb.plusone=[function(a,b){var c={};T(kb,c);c.source=[m,"source"];c.expandTo=[m,"expandTo"];c.align=[db];c.annotation=[eb];c.origin=[ab];var e={},d=Z(),f;for(f in c)c.hasOwnProperty(f)&&(e[c[f][1]||f]=(c[f]&&c[f][0]||function(a){return a})(b[f[L]()],b,d));return e}];var Cb,Db=/(?:^|\s)g-((\S)*)(?:$|\s)/,Eb=P(),Fb=O(V,"FW",[]),Hb=function(a,b){Gb(i,n,a,b)},Gb=function(a,b,c,e){W("ps0",k);var c=("string"===typeof c?t[fa](c):c)||N,d,f=N.documentMode;if(c.querySelectorAll&&(!f||8<f)){if(e)d=[e];else if(qa[v](ba.keys))d=ba.keys(Eb);else{f=[];for(d in Eb)S(Eb,d)&&f[u](d);d=f}for(var f=[],g=0;g<d[B];g++){var h=d[g];f[u](".g-"+h,"g\\:"+h)}d=c.querySelectorAll(f[J](","))}else d=c[ia]("*");c=P();for(f=0;f<d[B];f++){g=d[f];var j=g,h=e,p=j.nodeName[L](),l=i;j[G]("data-gapiscan")?
h=m:(0==p[x]("g:")?l=p.substr(2):(j=(j=s(j.className||j[G]("class")))&&Db[da](j))&&(l=j[1]),h=l&&Eb[l]&&(!h||l===h)?l:m);h&&(g[z]("data-gapiscan",k),O(c,h,[])[u](g))}if(b)for(var q in c){b=c[q];for(e=0;e<b[B];e++)b[e][z]("data-onload",k)}for(var r in c)Fb[u](r);W("ps1",k);q=Fb[J](":");U.load(q,a);a=Cb||{};r=[Y.e,Y.j,Y.i];for(b=0;b<r[B]&&a;b++)a=a[r[b]];r=Da(oa[H]);if(!a||0!=a[x]("n;")&&0!=r[x]("n;")&&a!==r)for(var A in c)Ib(A);else{a=[];for(A in c){r=c[A];b=0;for(e=r[B];b<e;b++)if(d=Ab(A,r[b],e))(f=
d[G]("id"))&&a[u](f),Ib(A,d)}Jb(q,a)}},Kb=function(a){var b=O(U,a,{});b.go||(b.go=function(b){return Hb(b,a)},b.render=function(b,e,d){var f=e||{};f.type=a;e=f.type;delete f.type;if(!e||!Eb[e])throw Error("Unsupported widget "+e||"");if((b=("string"===typeof b?t[fa](b):b)||i)&&1===b.nodeType)f.rd=1,b=Ab(e,b,2,f),f=b[G]("id"),Ib(e,b,d),f&&Jb(e,[f])})};
X[u]([Y.g,function(a,b,c){Cb=c;b&&Fb[u](b);for(b=0;b<a[B];b++)Eb[a[b]]=1;for(b=0;b<a[B];b++)Kb(a[b]);if(b=o.__GOOGLEAPIS)b.googleapis&&!b["googleapis.config"]&&(b["googleapis.config"]=b.googleapis),O(V,"ci",[])[u](b),o.__GOOGLEAPIS=i;Va(k);var e=o.___gcfg,b=Ua("cu");if(e&&e!==o.___gu){var d={};Xa(d,e);b[u](d);o.___gu=e}var e=Ua("cu"),f=t.scripts||t[ia]("script")||[],d=[],g=[],h=Ta().u;h&&g[u](h);Ta().us&&g[u][I](g,Ta().us);for(h=0;h<f[B];++h)for(var j=f[h],p=0;p<g[B];++p)j.src&&0==j.src[x](g[p])&&
d[u](j);0==d[B]&&f[f[B]-1].src&&d[u](f[f[B]-1]);for(f=0;f<d[B];++f)if(!d[f][G]("gapi_processed")){d[f][z]("gapi_processed",k);(g=d[f])?(h=g.nodeType,g=3==h||4==h?g.nodeValue:g.textContent||g.innerText||g.innerHTML||""):g=i;if(g){for(;0==g.charCodeAt(g[B]-1);)g=g.substring(0,g[B]-1);h=i;try{h=(new Function("return ("+g+"\n)"))()}catch(l){}if("object"===typeof h)g=h;else{try{h=(new Function("return ({"+g+"\n})"))()}catch(q){}g="object"===typeof h?h:{}}}else g=i;g&&e[u](g)}f=Ua("cd");e=0;for(d=f[B];e<
d;++e)Xa(Va(),f[e]);f=Ua("ci");e=0;for(d=f[B];e<d;++e)Xa(Va(),f[e]);e=0;for(d=b[B];e<d;++e)Xa(Va(),b[e]);if("explicit"!=Z("parsetags")){b=O(V,"sws",[]);b[u][I](b,a);var r;if(c){var A=c[Y.b];A&&(r=function(){M.setTimeout(A,0)},delete c[Y.b])}if("complete"!==N[ga])try{Gb(i,k)}catch(K){}var ha=function(){Gb(r,k)};if("complete"===N[ga])ha();else{var $=n,C=function(){if(!$)return $=k,ha[I](this,arguments)};M.addEventListener?(M.addEventListener("load",C,n),M.addEventListener("DOMContentLoaded",C,n)):M.attachEvent&&
(M.attachEvent("onreadystatechange",function(){"complete"===N[ga]&&C[I](this,arguments)}),M.attachEvent("onload",C))}}}]);var Ib=function(a,b,c){U.load(a,function(){(0,U[a].go)(b&&b[ma]);c&&c()})};O(U,Y.g,{}).go=Hb;var Lb=/^\{h\:'/,Mb=/^!_/,Jb=function(a,b){function c(){Ca(e,"remove","de")}function e(e){var g=e.data,h=e.origin;if(Nb(g,b)){var j=d;d=n;j&&W("rqe");Sa(a,function(){j&&W("rqd");c();for(var a=O(V,"RPMQ",[]),b=0;b<a[B];b++)a[b]({data:g,origin:h})})}}if(!(0===b[B]||!o.JSON||!o.JSON.parse)){var d=k;Ca(e,"add","at");Sa(a,c)}},Nb=function(a,b){a=s(a);if(Lb[v](a))return k;a=a[w](Mb,"");if(!/^\{/[v](a))return n;try{var c=o.JSON.parse(a)}catch(e){return n}if(!c)return n;var d=c.f;return c.s&&d&&-1!=ra[F](b,
d)?("_renderstart"===c.s&&(c=c.a&&c.a[1],d=N[fa](d),c&&d&&Bb(d[ma],d,c)),k):n};X[u]([Y.p,function(a,b,c){for(var e=[].slice,b=0,d;d=a[b];++b){for(var f=M,g=d[ka]("."),h=0;h<g[B]-1;++h)f=O(f,g[h],{});h=g[h];f[h]||(f[h]=function(){var a=3==g[B]?g[g[B]-2]:"",b=c[Y.e][Y.g],f="gapi"==g[0]&&b&&0<=ra[F](b,a),h=[],b=d;O(V,"df",P())[b]=function(a){for(var b=0;h[b];++b)a[I](M,h[b])};return function(){h[u](e[F](arguments,0));f&&Sa(a)}}())}}]);Bb=function(a,b,c){if(c[ea]&&c[na]){a[E].cssText="";var e=c[ea],c=c[na],d=a[E];d.textIndent="0";d.margin="0";d.padding="0";d.background="transparent";d.borderStyle="none";d.cssFloat="none";d.styleFloat="none";d.lineHeight="normal";d.fontSize="1px";d.verticalAlign="baseline";a[E].display="inline-block";a=b[E];a.position="static";a.left=0;a.top=0;a.visibility="visible";e&&(a.width=e+"px");c&&(a.height=c+"px");b["data-csi-wdt"]=(new Date).getTime()}};W("bs0",k,o.gapi._bs);W("bs1",k);delete o.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"platform":["plusone","plus","additnow","card"],"jsl":{"u":"https://apis.google.com/js/plusone.js","dpo":false,"hee":false,"ci":{"inline":{"css":0},"lexps":[34,69,71,65,36,40,73,15,45,17,51,61,60,30],"oauth-flow":{},"report":{},"iframes":{"additnow":{"url":"https://apis.google.com/additnow/additnow.html?bsv=pr"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv=pr"},":socialhost:":"https://plusone.google.com","plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv=pr"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv=pr"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","url":"","size":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv=pr"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&bsv=pr"}},"isPlusUser":true,"debug":{"host":"https://plusone.google.com","reportExceptionRate":0,"rethrowException":false},"csi":{"rate":0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/apps-static/_/js/gapi/__features__/rt=j/ver=EEOptuVd4G0.fr./sv=1/am=!6NLDMLeKYpaAwqQzDw/d=1/rs=AItRSTNdoeeqPKN76S8yNfhMWa6_haelYA","fp":"4ef0b8f6eff67dcf12c5156f9e051c48754f9ed7"},"ds":["gapi.plusone.go","gapi.plusone.render","gapi.plus.go","gapi.plus.render"],"fp":"4ef0b8f6eff67dcf12c5156f9e051c48754f9ed7"}});