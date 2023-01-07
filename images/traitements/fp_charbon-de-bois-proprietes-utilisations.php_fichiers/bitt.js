if (typeof bitt == 'undefined') {
  bitt =
  { ie : navigator.appName == 'Microsoft Internet Explorer', 
    entities : { amp : '&', 
          lt : '<', 
          gt : '>', 
          quot : '"' }, 
    bitts : [  ], 
    nextName : 0, 
    continuation : undefined, 
    writeFunc : undefined, 
    onLoadHandlers : [  ], 
    instance : undefined, 
    zone : undefined, 
    location : undefined, 
    keywords : [  ], 
    finishHook : function () {
          null;
        }, 
    now : new Date, 
    expandHtml : function (sink, str, c) {
          var self =
              { sink : sink, 
                top : str, 
                buffer : '', 
                buffers : [  ], 
                srcs : [  ] };
          bitt.process(self, c);
          document.write =
          function () {
            null;
          };
        }, 
    process : function (self, c) {
          var iter =
              function () {
                bitt.process(self, c);
              };
          var write =
              function (str) {
                bitt.write(self, str);
              };
          if (self.srcs.length != 0) {
            return bitt.loadScript(self.srcs.shift(), write, iter);
          };
          var split = bitt.splitOffFirstScript(self.top);
          self.sink(split.before);
          self.top = split.remaining;
          if (!split.script) {
            return c();
          };
          if (split.script.valid) {
            if (split.script.src) {
              if (split.script.type == 'js') {
                return bitt.loadScript(split.script.src, write, iter);
              };
            } else {
              bitt.evalScript
              (split.script.content, split.script.type, write);
            };
          };
          iter();
        }, 
    write : function (self, str) {
          self.buffer += str;
          while (true) {
            var split = bitt.splitOffFirstScript(self.buffer);
            self.sink(split.before);
            self.buffer = split.remaining;
            if (!split.script) {
              return null;
            };
            if (split.script.valid) {
              if (split.script.src) {
                if (split.script.type == 'js') {
                  self.srcs.push(split.script.src);
                };
              } else {
                self.buffers.push(self.buffer);
                self.buffer = '';
                bitt.evalScript
                (split.script.content, split.script.type,
                 function (str) {
                   bitt.write(self, str);
                 });
                self.buffer += self.buffers.pop();
              };
            };
          };
        }, 
    isJavascriptUrl : function (url) {
          return url.length > 11 && url.substr(0, 11) == 'javascript:';
        }, 
    hostnameToPath : function (hostname) {
          return hostname.split('.').reverse().join('/');
        }, 
    decorateUrl : function (url) {
          var parts =
              url.match(/^\s*(https?):\/\/(.*?)(?::(\d+))?(\/.*?)?\s*$/);
          if (parts) {
            var scheme = parts[1];
            var hostname = parts[2];
            var port = parts[3];
            var path = parts[4] || '/';
            return (document.location.protocol == 'https:'
                && 'https://decorator.bittads.com' ?
                'https://decorator.bittads.com' :
                'http://decorator.bittads.com')
               + '/' + bitt.hostnameToPath(hostname) + ';' + path
              + ';bitt' + ';scheme=' + scheme
              + (port ? ';port=' + port : '');
          };
        }, 
    loadScript : function (filename, write, c) {
          if (bitt.isJavascriptUrl(filename)) {
            var content =
                bitt.evalScript(filename.substr(11), 'js', write);
            bitt.evalScript(content, 'js', write);
            c();
          } else {
            bitt.continuation = c;
            bitt.writeFunc = write;
            bitt.appendScript(bitt.decorateUrl(filename));
          };
        }, 
    errors : [  ], 
    logError : function (e) {
          bitt.errors.push(e);
          if (window.console && window.console.error) {
            window.console.error(e);
          };
        }, 
    evalScript : function (content, type, write) {
          document.write = write;
          document.writeln =
          function (self, str) {
            return write(self, str + '\n');
          };
          try {
            if (bitt.ie) {
              switch (type) {
                case 'js':
                   return window.execScript(content);
                   break;
                case 'vb':
                   return window.execScript(content, 'VBScript');
              };
            } else {
              switch (type) {
                case 'js':
                   return window.eval(content);
                   break;
                case 'vb':   return null;
              };
            };
          } catch (e) {
            bitt.logError(e);
          };
        }, 
    splitOffFirstScript : function (string) {
          var firstScript = string.search(/<script/i);
          var retval =
              { before : string, 
                script : null, 
                remaining : '' };
          if (firstScript == -1) {
            return retval;
          };
          retval.before = string.substr(0, firstScript);
          string = string.substr(firstScript);
          var closeTag = string.search(/<\/script\s*>/i);
          if (closeTag == -1) {
            retval.remaining = string;
            return retval;
          };
          var scriptEnd = 1 + string.indexOf('>', closeTag);
          retval.remaining = string.substr(scriptEnd);
          retval.script = bitt.grokScript(string.substr(0, scriptEnd));
          return retval;
        }, 
    grokScript : function (script) {
          var openTagEnd = 1 + script.search('>');
          var openTag = script.substr(0, openTagEnd);
          var vbscript =
              openTag.match(/(language|type)=.?(text\/)?vbscript/i);
          var content =
              bitt.sanitizeScript
              (script.substr(openTagEnd, script.length - (openTagEnd + 9)),
               vbscript);
          var src = openTag.match(/src\s*=\s*["']?([^\s>'"]+)["']?/i);
          var retval =
              { type : vbscript ? 'vb' : 'js', 
                content : content, 
                valid : true, 
                src : false };
          if (src) {
            var filename = src[1];
            if (filename) {
              retval.src = bitt.decodeHtmlString(filename);
            } else {
              retval.valid = false;
            };
          };
          return retval;
        }, 
    sanitizeScript : function (content, vbscript) {
          content = content.replace(/^\s*<!--.*?\n/, '');
          content = content.replace(/^s*<!\[CDATA\[s*\n/, '');
          content = content.replace(/\s*\/?\/?-->\s*$/, '');
          if (vbscript) {
            content = content.replace(/^s*'.*$/mg, '');
          };
          return content;
        }, 
    elementFiller : function (element) {
          var buffer = '';
          var innerHtml = '';
          return function (str) {
              if (str != '') {
                if (element.innerHTML != innerHtml) {
                  buffer =
                  element.innerHTML.substr
                  (0,
                   element.innerHTML.length
                   - (innerHtml.length - buffer.length));
                };
                buffer += bitt.removeNoscriptParts(str);
                element.innerHTML = buffer;
                innerHtml = element.innerHTML;
              };
            };
        }, 
    removeNoscriptParts : function (string) {
          return string.replace
            (/<noscript[^>]*?>(?:.|\s)*?<\/noscript>/img,
             '<!-- NOSCRIPT removed -->');
        }, 
    fillBitts : function () {
          var listener = window.addEventListener;
          var ieListener = window.attachEvent;
          var iter =
              function (i) {
                if (i == bitt.bitts.length) {
                  {
                    var tmpArr17 = bitt.onLoadHandlers;
                    for (var tmpI18 = 0; tmpI18 < tmpArr17.length;
                         tmpI18 = tmpI18 + 1) {
                      var h = tmpArr17[tmpI18];
                      h(bitt.loadEvent);
                    };
                  };
                  window.addEventListener = listener;
                  window.attachEvent = ieListener;
                  bitt.loadEvent = null;
                  return bitt.finishHook();
                } else {
                  return bitt.fillBitt
                    (bitt.bitts[i],
                     function () {
                       iter(i + 1);
                     });
                };
              };
          if (window.addEventListener) {
            window.addEventListener =
            function (event, handler, useCapture) {
              if (event == 'load') {
                bitt.onLoadHandlers.push(handler);
              } else {
                return listener(event, handler, useCapture);
              };
            };
          };
          if (window.attachEvent) {
            window.attachEvent =
            function (event, handler) {
              if (event == 'onload') {
                bitt.onLoadHandlers.push(handler);
              } else {
                return ieListener(event, handler);
              };
            };
          };
          iter(0);
        }, 
    fillBitt : function (obj, c) {
          var element = document.getElementById(obj.name);
          return bitt.expandHtml
            (bitt.elementFiller(element), obj.content,
             function () {
               if (obj.viewUrl) {
                 var script = document.createElement('SCRIPT');
                 script.type = 'text/javascript';
                 script.src =
                 obj.viewUrl + '?user-name=' + bitt.findUser();
                 element.appendChild(script);
               };
               element.style.display = 'inline';
               c();
             });
        }, 
    onLoad : function (e) {
          bitt.loadEvent = e;
          if (bitt.bitts.length) {
            bitt.appendScript(bitt.bittRequestUrl());
          };
        }, 
    bittRequestUrl : function () {
          var bittArrays = [  ];
          {
            var tmpArr19 = bitt.bitts;
            for (var tmpI20 = 0; tmpI20 < tmpArr19.length;
                 tmpI20 = tmpI20 + 1) {
              var obj = tmpArr19[tmpI20];
              bittArrays.push([ obj.shape, obj.loc ]);
            };
          };
          return (document.location.protocol == 'https:'
              && 'https://server.bittads.com' ?
              'https://server.bittads.com' : 'http://server.bittads.com')
             + '/ad-js.ucw?'
            + bitt.expandUrlVars
            ({ 'keywords' : bitt.toJson(bitt.keywords), 
               'user-name' : bitt.findUser(), 
               'instance' : bitt.instance, 
               'zone' : bitt.zone, 
               'shape-locs' : bitt.toJson(bittArrays), 
               'time-zone' : bitt.timeZone(), 
               'anti-cache' : bitt.now.getTime(), 
               'confirm-view' : 'yes', 
               'height' : window.screen.height, 
               'width' : window.screen.width });
        }, 
    findUser : function () {
          var userValue =
              bitt.getCookie('bitt-' + bitt.instance)
              || bitt.getCookie('bitt-user-name');
          if (userValue == null) {
            {
              var newName = bitt.now.getTime() + bitt.randomString(6);
              bitt.setCookie('bitt-' + bitt.instance, newName);
              bitt.setCookie('bitt-user-name', newName);
            };
            userValue = bitt.getCookie('bitt-' + bitt.instance);
          };
          if (userValue == null) {
            return 'none';
          } else {
            return userValue;
          };
        }, 
    bitt : function (shape, loc) {
          if (loc === undefined) {
            loc = bitt.location;
          };
          var obj =
              { name : bitt.getNextName(), 
                loc : loc, 
                shape : shape };
          document.write('<span id=\'' + obj.name + '\'></span>');
          bitt.bitts.push(obj);
        }, 
    showAdNow : function (shape, loc) {
          document.write
          ('<script type=\'text/javascript\' src="'
           + bitt.escapeAttribute
           ((document.location.protocol == 'https:'
              && 'https://server.bittads.com' ?
              'https://server.bittads.com' :
              'http://server.bittads.com')
             + '/ad-script.ucw?'
            + bitt.expandUrlVars
            ({ 'keywords' : bitt.toJson(bitt.keywords), 
               'user-name' : bitt.findUser(), 
               'instance' : bitt.instance, 
               'zone' : bitt.zone, 
               'shape-locs' : bitt.toJson([ [ shape, loc || bitt.location ] ]), 
               'time-zone' : bitt.timeZone(), 
               'anti-cache' : bitt.now.getTime(), 
               'confirm-view' : 'yes', 
               'height' : window.screen.height, 
               'width' : window.screen.width }))
            + '"></script>');
        }, 
    flashVersion : function () {
          if (bitt.ie) {
            var tmpArr21 = [ 11, 10, 9, 8, 7, 6 ];
            for (var tmpI22 = 0; tmpI22 < tmpArr21.length;
                 tmpI22 = tmpI22 + 1) {
              var version = tmpArr21[tmpI22];
              try {
                new ActiveXObject
                  ('ShockwaveFlash.ShockwaveFlash.' + version);
                return version;
              } catch (e) {
                ;
              };
            };
          } else {
            var plugin = navigator.plugins['Shockwave Flash'];
            var match =
                plugin && plugin.description
                && plugin.description.match(/Flash ([0-9]+)/);
            if (match) {
              return match[1];
            };
          };
          return null;
        }, 
    flashHtml : function (src, attributes, params, variables) {
          if (bitt.ie) {
            return '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" '
              + bitt.expandAttributes(attributes) + '>'
              + '<param name="movie" value="' + bitt.escapeAttribute(src)
              + '">' + '<param name="flashvars" value="'
              + bitt.expandUrlVars(variables) + '">'
              + bitt.expandMap
              (params, '<param name="', '" value="', '">', '',
               bitt.escapeAttribute)
               + '</object>';
          } else {
            return '<embed type="application/x-shockwave-flash" src="'
              + bitt.escapeAttribute(src) + '" '
              + bitt.expandAttributes(attributes) + ' '
              + bitt.expandAttributes(params) + ' ' + 'flashvars="'
              + bitt.expandUrlVars(variables) + '"/>';
          };
        }, 
    writeAd : function (args) {
          var flashVersion = bitt.flashVersion();
          var paramObject = { 'clickURL' : args.clickURL };
          if (args.link) {
            paramObject.clickTag = args.link;
            paramObject.clickTAG = args.link;
          };
          if (args.swf && flashVersion
              && (!args.flashversion || flashVersion >= args.flashversion)) {
            document.write
            (bitt.flashHtml
             (args.swf,
              { width : args.width, 
                height : args.height },
              { wmode : args.wmode || 'opaque', 
                quality : args.quality || 'high', 
                allowScriptAccess : args.allowScriptAccess || 'always', 
                bgcolor : args.background },
              paramObject));
          } else {
            if (args.image) {
              var image =
                  '<img '
                  + bitt.expandAttributes
                  ({ width : args.width, 
                     height : args.height, 
                     border : 0, 
                     src : args.image.match(/http:\/\/admin.bittads.com/)
                           && document.location.protocol == 'https:' ?
                           args.image.replace('http:', 'https:') :
                           args.image, 
                     alt : args.title })
                   + '/>';
              if (args.link) {
                document.write
                ('<a target="' + (bitt.target || '_blank')
                 + '" href="' + bitt.escapeAttribute(args.link)
                 + '">' + image + '</a>');
              } else {
                document.write(image);
              };
            };
          };
        }, 
    decodeHtmlCharref : function (s) {
          var numerical = s.match(/#([xX]?)(.*)/);
          if (numerical) {
            var charCode = numerical[2];
            if (numerical[1] != '') {
              charCode = '0x' + charCode;
            };
            return String.fromCharCode(parseInt(charCode));
          } else {
            return bitt.entities[s] || '&' + s + ';';
          };
        }, 
    decodeHtmlString : function (s) {
          if (typeof s == 'string') {
            return s.replace
              (/&([^\s]*?);/g,
               function (e, c) {
                 return bitt.decodeHtmlCharref(c);
               });
          } else {
            return s;
          };
        }, 
    escapeAttribute : function (s) {
          if (typeof s == 'string') {
            return s.replace('&', '&amp;').replace('"', '&quot;');
          } else {
            return s;
          };
        }, 
    expandMap : function (map, before, between, after, join, escape) {
          var parts = [  ];
          for (var name in map) {
            if (typeof map[name] != 'undefined') {
              parts.push
              (before + name + between + escape(map[name]) + after);
            };
          };
          return parts.join(join);
        }, 
    expandUrlVars : function (map) {
          return bitt.expandMap(map, '', '=', '', '&', encodeURIComponent);
        }, 
    expandAttributes : function (map) {
          return bitt.expandMap(map, '', '="', '"', ' ', bitt.escapeAttribute);
        }, 
    appendScript : function (src, text, type) {
          var tag = document.createElement('script');
          tag.type = type ? type : 'text/javascript';
          if (src) {
            tag.src = src;
          } else {
            tag.innerHTML = text;
          };
          document.body.appendChild(tag);
        }, 
    toJson : function (val) {
          if (typeof val == 'string') {
            return '"' + val.replace(/"/g, '\\"') + '"';
          } else {
            var accum = '[';
            var first = true;
            {
              var tmpArr23 = val;
              for (var tmpI24 = 0; tmpI24 < tmpArr23.length;
                   tmpI24 = tmpI24 + 1) {
                var part = tmpArr23[tmpI24];
                if (first) {
                  first = false;
                } else {
                  accum += ', ';
                };
                accum += bitt.toJson(part);
              };
            };
            return accum + ']';
          };
        }, 
    timeZone : function () {
          var d = new Date;
          return d.getTimezoneOffset() * 60;
        }, 
    extractQuoted : function (str) {
          var firstQuote = str.search(/['"]/);
          if (firstQuote > -1) {
            var part = str.substr(1 + firstQuote);
            var end = part.search(str.charAt(firstQuote));
            if (end > -1) {
              return part.substr(0, end);
            };
          };
          return null;
        }, 
    randomString : function (length) {
          var chars =
              'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW1234567890';
          var accum = '';
          for (var i = 0; i < length; i = i + 1) {
            accum += chars.charAt(Math.floor(Math.random() * chars.length));
          };
          return accum;
        }, 
    addEvent : function (element, event, fn) {
          if (element.addEventListener) {
            element.addEventListener(event, fn, false);
          } else {
            if (element.attachEvent) {
              element.attachEvent('on' + event, fn);
            };
          };
        }, 
    getNextName : function () {
          ++bitt.nextName;
          return 'bitt-unique-name-' + bitt.nextName;
        }, 
    getCookie : function (name) {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i = i + 1) {
            var current = cookies[i];
            current = current.split('=');
            if (bitt.trim(current[0]) == name) {
              return current[1];
            };
          };
          return null;
        }, 
    setCookie : function (name, value) {
          var much_later = new Date(2030, 1, 1);
          document.cookie =
          name + '=' + value + '; expires=' + much_later.toGMTString()
          + '; path=/';
        }, 
    trim : function (str) {
          return str.replace(/^\s*|\*s$/g, '');
        } };
  bitt.addEvent(window, 'load', bitt.onLoad);
  bitt.showAdOnLoad = bitt.bitt;
};