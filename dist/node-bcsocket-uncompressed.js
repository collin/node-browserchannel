(function(){
function g(a) {
  throw a;
}
var h = void 0, j = true, k = null, o = false;
function aa() {
  return function() {
  }
}
function p(a) {
  return function(b) {
    this[a] = b
  }
}
function ba(a) {
  return function() {
    return this[a]
  }
}
function ca(a) {
  return function() {
    return a
  }
}
var q, da = da || {}, r = this;
function ea(a) {
  for(var a = a.split("."), b = r, c;c = a.shift();) {
    if(b[c] != k) {
      b = b[c]
    }else {
      return k
    }
  }
  return b
}
function fa() {
}
function ga(a) {
  var b = typeof a;
  if(b == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return b
        }
      }
      var c = Object.prototype.toString.call(a);
      if(c == "[object Window]") {
        return"object"
      }
      if(c == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(c == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return b
}
function s(a) {
  return ga(a) == "array"
}
function ha(a) {
  var b = ga(a);
  return b == "array" || b == "object" && typeof a.length == "number"
}
function t(a) {
  return typeof a == "string"
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  a || g(Error());
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }else {
    return function() {
      return a.apply(b, arguments)
    }
  }
}
function u(a, b, c) {
  u = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? la : ma;
  return u.apply(k, arguments)
}
var v = Date.now || function() {
  return+new Date
};
function w(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.za = b.prototype;
  a.prototype = new c
}
;function na(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = String(a)
  }
}
w(na, Error);
na.prototype.name = "CustomError";
function oa(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, d)
  }
  return a
}
var pa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
function qa(a) {
  a = String(a);
  return!pa.test(a) ? encodeURIComponent(a) : a
}
function ra(a) {
  if(!sa.test(a)) {
    return a
  }
  a.indexOf("&") != -1 && (a = a.replace(ta, "&amp;"));
  a.indexOf("<") != -1 && (a = a.replace(ua, "&lt;"));
  a.indexOf(">") != -1 && (a = a.replace(va, "&gt;"));
  a.indexOf('"') != -1 && (a = a.replace(wa, "&quot;"));
  return a
}
var ta = /&/g, ua = /</g, va = />/g, wa = /\"/g, sa = /[&<>\"]/;
function ya(a, b) {
  if(a < b) {
    return-1
  }else {
    if(a > b) {
      return 1
    }
  }
  return 0
}
;function za(a, b) {
  b.unshift(a);
  na.call(this, oa.apply(k, b));
  b.shift();
  this.sc = a
}
w(za, na);
za.prototype.name = "AssertionError";
function Aa(a, b) {
  g(new za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;var Ba = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ca(a) {
  var b = z, c;
  for(c in b) {
    a.call(h, b[c], c, b)
  }
}
function Da(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Ea(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Fa = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Ga(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Fa.length;f++) {
      c = Fa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;var A = Array.prototype, Ha = A.indexOf ? function(a, b, c) {
  return A.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == k ? 0 : c < 0 ? Math.max(0, a.length + c) : c;
  if(t(a)) {
    return!t(b) || b.length != 1 ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ia = A.forEach ? function(a, b, c) {
  A.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = t(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
function Ja(a) {
  return A.concat.apply(A, arguments)
}
function Ka(a) {
  if(s(a)) {
    return Ja(a)
  }else {
    for(var b = [], c = 0, d = a.length;c < d;c++) {
      b[c] = a[c]
    }
    return b
  }
}
function La(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if(s(d) || (e = ha(d)) && d.hasOwnProperty("callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var f = a.length, i = d.length, l = 0;l < i;l++) {
          a[f + l] = d[l]
        }
      }else {
        a.push(d)
      }
    }
  }
}
;function Ma(a) {
  if(typeof a.$ == "function") {
    return a.$()
  }
  if(t(a)) {
    return a.split("")
  }
  if(ha(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Da(a)
}
function B(a, b, c) {
  if(typeof a.forEach == "function") {
    a.forEach(b, c)
  }else {
    if(ha(a) || t(a)) {
      Ia(a, b, c)
    }else {
      var d;
      if(typeof a.ga == "function") {
        d = a.ga()
      }else {
        if(typeof a.$ != "function") {
          if(ha(a) || t(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Ea(a)
          }
        }else {
          d = h
        }
      }
      for(var e = Ma(a), f = e.length, i = 0;i < f;i++) {
        b.call(c, e[i], d && d[i], a)
      }
    }
  }
}
;function Na(a, b) {
  this.O = {};
  this.j = [];
  var c = arguments.length;
  if(c > 1) {
    c % 2 && g(Error("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof Na ? (c = a.ga(), d = a.$()) : (c = Ea(a), d = Da(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
q = Na.prototype;
q.c = 0;
q.Sb = 0;
q.$ = function() {
  Oa(this);
  for(var a = [], b = 0;b < this.j.length;b++) {
    a.push(this.O[this.j[b]])
  }
  return a
};
q.ga = function() {
  Oa(this);
  return this.j.concat()
};
q.K = function(a) {
  return C(this.O, a)
};
q.remove = function(a) {
  return C(this.O, a) ? (delete this.O[a], this.c--, this.Sb++, this.j.length > 2 * this.c && Oa(this), j) : o
};
function Oa(a) {
  if(a.c != a.j.length) {
    for(var b = 0, c = 0;b < a.j.length;) {
      var d = a.j[b];
      C(a.O, d) && (a.j[c++] = d);
      b++
    }
    a.j.length = c
  }
  if(a.c != a.j.length) {
    for(var e = {}, c = b = 0;b < a.j.length;) {
      d = a.j[b], C(e, d) || (a.j[c++] = d, e[d] = 1), b++
    }
    a.j.length = c
  }
}
q.get = function(a, b) {
  return C(this.O, a) ? this.O[a] : b
};
q.set = function(a, b) {
  C(this.O, a) || (this.c++, this.j.push(a), this.Sb++);
  this.O[a] = b
};
q.l = function() {
  return new Na(this)
};
function C(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b)
}
;function D(a, b) {
  var c;
  a instanceof D ? (this.la(b == k ? a.H : b), Pa(this, a.V), Qa(this, a.Da), Ra(this, a.L), Sa(this, a.ba), Ta(this, a.r), Ua(this, a.D.l()), Va(this, a.ra)) : a && (c = String(a).match(Ba)) ? (this.la(!!b), Pa(this, c[1] || "", j), Qa(this, c[2] || "", j), Ra(this, c[3] || "", j), Sa(this, c[4]), Ta(this, c[5] || "", j), Ua(this, c[6] || "", j), Va(this, c[7] || "", j)) : (this.la(!!b), this.D = new Wa(k, this, this.H))
}
q = D.prototype;
q.V = "";
q.Da = "";
q.L = "";
q.ba = k;
q.r = "";
q.ra = "";
q.ac = o;
q.H = o;
q.toString = function() {
  if(this.w) {
    return this.w
  }
  var a = [];
  this.V && a.push(Xa(this.V, Ya), ":");
  this.L && (a.push("//"), this.Da && a.push(Xa(this.Da, Ya), "@"), a.push(t(this.L) ? encodeURIComponent(this.L) : k), this.ba != k && a.push(":", String(this.ba)));
  this.r && (this.L && this.r.charAt(0) != "/" && a.push("/"), a.push(Xa(this.r, this.r.charAt(0) == "/" ? Za : $a)));
  var b = String(this.D);
  b && a.push("?", b);
  this.ra && a.push("#", Xa(this.ra, ab));
  return this.w = a.join("")
};
q.l = function() {
  return bb(this.V, this.Da, this.L, this.ba, this.r, this.D.l(), this.ra, this.H)
};
function Pa(a, b, c) {
  E(a);
  delete a.w;
  a.V = c ? b ? decodeURIComponent(b) : "" : b;
  if(a.V) {
    a.V = a.V.replace(/:$/, "")
  }
}
function Qa(a, b, c) {
  E(a);
  delete a.w;
  a.Da = c ? b ? decodeURIComponent(b) : "" : b
}
function Ra(a, b, c) {
  E(a);
  delete a.w;
  a.L = c ? b ? decodeURIComponent(b) : "" : b
}
function Sa(a, b) {
  E(a);
  delete a.w;
  b ? (b = Number(b), (isNaN(b) || b < 0) && g(Error("Bad port number " + b)), a.ba = b) : a.ba = k
}
function Ta(a, b, c) {
  E(a);
  delete a.w;
  a.r = c ? b ? decodeURIComponent(b) : "" : b
}
function Ua(a, b, c) {
  E(a);
  delete a.w;
  b instanceof Wa ? (a.D = b, a.D.kb = a, a.D.la(a.H)) : (c || (b = Xa(b, cb)), a.D = new Wa(b, a, a.H))
}
function G(a, b, c) {
  E(a);
  delete a.w;
  a.D.set(b, c)
}
function db(a, b, c) {
  E(a);
  delete a.w;
  s(c) || (c = [String(c)]);
  a = a.D;
  H(a);
  eb(a);
  b = I(a, b);
  if(a.K(b)) {
    var d = a.g.get(b);
    s(d) ? a.c -= d.length : a.c--
  }
  c.length > 0 && (a.g.set(b, c), a.c += c.length)
}
function Va(a, b, c) {
  E(a);
  delete a.w;
  a.ra = c ? b ? decodeURIComponent(b) : "" : b
}
function J(a) {
  E(a);
  G(a, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ v()).toString(36));
  return a
}
function E(a) {
  a.ac && g(Error("Tried to modify a read-only Uri"))
}
q.la = function(a) {
  this.H = a;
  this.D && this.D.la(a);
  return this
};
function bb(a, b, c, d, e, f, i, l) {
  l = new D(k, l);
  a && Pa(l, a);
  b && Qa(l, b);
  c && Ra(l, c);
  d && Sa(l, d);
  e && Ta(l, e);
  f && Ua(l, f);
  i && Va(l, i);
  return l
}
var fb = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
function Xa(a, b) {
  var c = k;
  t(a) && (c = a, fb.test(c) || (c = encodeURI(a)), c.search(b) >= 0 && (c = c.replace(b, gb)));
  return c
}
function gb(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var Ya = /[#\/\?@]/g, $a = /[\#\?:]/g, Za = /[\#\?]/g, cb = /[\#\?@]/g, ab = /#/g;
function Wa(a, b, c) {
  this.M = a || k;
  this.kb = b || k;
  this.H = !!c
}
function H(a) {
  if(!a.g && (a.g = new Na, a.c = 0, a.M)) {
    for(var b = a.M.split("&"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("="), e = k, f = k;
      d >= 0 ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = I(a, e);
      a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
    }
  }
}
q = Wa.prototype;
q.g = k;
q.c = k;
q.add = function(a, b) {
  H(this);
  eb(this);
  a = I(this, a);
  if(this.K(a)) {
    var c = this.g.get(a);
    s(c) ? c.push(b) : this.g.set(a, [c, b])
  }else {
    this.g.set(a, b)
  }
  this.c++;
  return this
};
q.remove = function(a) {
  H(this);
  a = I(this, a);
  if(this.g.K(a)) {
    eb(this);
    var b = this.g.get(a);
    s(b) ? this.c -= b.length : this.c--;
    return this.g.remove(a)
  }
  return o
};
q.K = function(a) {
  H(this);
  a = I(this, a);
  return this.g.K(a)
};
q.ga = function() {
  H(this);
  for(var a = this.g.$(), b = this.g.ga(), c = [], d = 0;d < b.length;d++) {
    var e = a[d];
    if(s(e)) {
      for(var f = 0;f < e.length;f++) {
        c.push(b[d])
      }
    }else {
      c.push(b[d])
    }
  }
  return c
};
q.$ = function(a) {
  H(this);
  if(a) {
    if(a = I(this, a), this.K(a)) {
      var b = this.g.get(a);
      if(s(b)) {
        return b
      }else {
        a = [], a.push(b)
      }
    }else {
      a = []
    }
  }else {
    for(var b = this.g.$(), a = [], c = 0;c < b.length;c++) {
      var d = b[c];
      s(d) ? La(a, d) : a.push(d)
    }
  }
  return a
};
q.set = function(a, b) {
  H(this);
  eb(this);
  a = I(this, a);
  if(this.K(a)) {
    var c = this.g.get(a);
    s(c) ? this.c -= c.length : this.c--
  }
  this.g.set(a, b);
  this.c++;
  return this
};
q.get = function(a, b) {
  H(this);
  a = I(this, a);
  if(this.K(a)) {
    var c = this.g.get(a);
    return s(c) ? c[0] : c
  }else {
    return b
  }
};
q.toString = function() {
  if(this.M) {
    return this.M
  }
  if(!this.g) {
    return""
  }
  for(var a = [], b = 0, c = this.g.ga(), d = 0;d < c.length;d++) {
    var e = c[d], f = qa(e), e = this.g.get(e);
    if(s(e)) {
      for(var i = 0;i < e.length;i++) {
        b > 0 && a.push("&"), a.push(f), e[i] !== "" && a.push("=", qa(e[i])), b++
      }
    }else {
      b > 0 && a.push("&"), a.push(f), e !== "" && a.push("=", qa(e)), b++
    }
  }
  return this.M = a.join("")
};
function eb(a) {
  delete a.ab;
  delete a.M;
  a.kb && delete a.kb.w
}
q.l = function() {
  var a = new Wa;
  if(this.ab) {
    a.ab = this.ab
  }
  if(this.M) {
    a.M = this.M
  }
  if(this.g) {
    a.g = this.g.l()
  }
  return a
};
function I(a, b) {
  var c = String(b);
  a.H && (c = c.toLowerCase());
  return c
}
q.la = function(a) {
  a && !this.H && (H(this), eb(this), B(this.g, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), this.add(d, a))
  }, this));
  this.H = a
};
function hb() {
}
hb.prototype.Fa = k;
var ib;
function jb() {
}
w(jb, hb);
function kb(a) {
  return(a = lb(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function mb(a) {
  var b = {};
  lb(a) && (b[0] = j, b[1] = j);
  return b
}
jb.prototype.eb = k;
function lb(a) {
  if(!a.eb && typeof XMLHttpRequest == "undefined" && typeof ActiveXObject != "undefined") {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.eb = d
      }catch(e) {
      }
    }
    g(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.eb
}
ib = new jb;
var K, nb, ob, pb;
function qb() {
  return r.navigator ? r.navigator.userAgent : k
}
pb = ob = nb = K = o;
var rb;
if(rb = qb()) {
  var sb = r.navigator;
  K = rb.indexOf("Opera") == 0;
  nb = !K && rb.indexOf("MSIE") != -1;
  ob = !K && rb.indexOf("WebKit") != -1;
  pb = !K && !ob && sb.product == "Gecko"
}
var tb = K, L = nb, ub = pb, M = ob, vb = r.navigator, wb = (vb && vb.platform || "").indexOf("Mac") != -1, xb;
a: {
  var yb = "", zb;
  if(tb && r.opera) {
    var Ab = r.opera.version, yb = typeof Ab == "function" ? Ab() : Ab
  }else {
    if(ub ? zb = /rv\:([^\);]+)(\)|;)/ : L ? zb = /MSIE\s+([^\);]+)(\)|;)/ : M && (zb = /WebKit\/(\S+)/), zb) {
      var Bb = zb.exec(qb()), yb = Bb ? Bb[1] : ""
    }
  }
  if(L) {
    var Cb, Db = r.document;
    Cb = Db ? Db.documentMode : h;
    if(Cb > parseFloat(yb)) {
      xb = String(Cb);
      break a
    }
  }
  xb = yb
}
var Eb = {};
function N(a) {
  var b;
  if(!(b = Eb[a])) {
    b = 0;
    for(var c = String(xb).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;b == 0 && f < e;f++) {
      var i = c[f] || "", l = d[f] || "", m = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var x = m.exec(i) || ["", "", ""], y = n.exec(l) || ["", "", ""];
        if(x[0].length == 0 && y[0].length == 0) {
          break
        }
        b = ya(x[1].length == 0 ? 0 : parseInt(x[1], 10), y[1].length == 0 ? 0 : parseInt(y[1], 10)) || ya(x[2].length == 0, y[2].length == 0) || ya(x[2], y[2])
      }while(b == 0)
    }
    b = Eb[a] = b >= 0
  }
  return b
}
var Fb = {};
function Gb() {
  return Fb[9] || (Fb[9] = L && document.documentMode && document.documentMode >= 9)
}
;function Hb() {
}
var Ib = 0;
q = Hb.prototype;
q.key = 0;
q.ja = o;
q.pb = o;
q.Ma = function(a, b, c, d, e, f) {
  ga(a) == "function" ? this.Cb = j : a && a.handleEvent && ga(a.handleEvent) == "function" ? this.Cb = o : g(Error("Invalid listener argument"));
  this.wa = a;
  this.Mb = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.cb = f;
  this.pb = o;
  this.key = ++Ib;
  this.ja = o
};
q.handleEvent = function(a) {
  return this.Cb ? this.wa.call(this.cb || this.src, a) : this.wa.handleEvent.call(this.wa, a)
};
!L || Gb();
var Jb = !L || Gb();
L && N("8");
!M || N("528");
ub && N("1.9b") || L && N("8") || tb && N("9.5") || M && N("528");
!ub || N("8");
function O() {
}
O.prototype.ub = o;
O.prototype.Ha = function() {
  if(!this.ub) {
    this.ub = j, this.z()
  }
};
O.prototype.z = function() {
  this.Xb && Kb.apply(k, this.Xb)
};
function Kb(a) {
  for(var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    ha(d) ? Kb.apply(k, d) : d && typeof d.Ha == "function" && d.Ha()
  }
}
;function P(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
w(P, O);
P.prototype.z = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
P.prototype.ia = o;
P.prototype.Sa = j;
function Lb(a) {
  Lb[" "](a);
  return a
}
Lb[" "] = fa;
function Mb(a, b) {
  a && this.Ma(a, b)
}
w(Mb, P);
q = Mb.prototype;
q.target = k;
q.relatedTarget = k;
q.offsetX = 0;
q.offsetY = 0;
q.clientX = 0;
q.clientY = 0;
q.screenX = 0;
q.screenY = 0;
q.button = 0;
q.keyCode = 0;
q.charCode = 0;
q.ctrlKey = o;
q.altKey = o;
q.shiftKey = o;
q.metaKey = o;
q.kc = o;
q.wb = k;
q.Ma = function(a, b) {
  var c = this.type = a.type;
  P.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(ub) {
      var e;
      a: {
        try {
          Lb(d.nodeName);
          e = j;
          break a
        }catch(f) {
        }
        e = o
      }
      e || (d = k)
    }
  }else {
    if(c == "mouseover") {
      d = a.fromElement
    }else {
      if(c == "mouseout") {
        d = a.toElement
      }
    }
  }
  this.relatedTarget = d;
  this.offsetX = M || a.offsetX !== h ? a.offsetX : a.layerX;
  this.offsetY = M || a.offsetY !== h ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== h ? a.clientX : a.pageX;
  this.clientY = a.clientY !== h ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || (c == "keypress" ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.kc = wb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.wb = a;
  delete this.Sa;
  delete this.ia
};
q.z = function() {
  Mb.za.z.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.wb = k
};
var Q = {}, R = {}, z = {}, Nb = {};
function Ob(a, b, c, d, e) {
  if(b) {
    if(s(b)) {
      for(var f = 0;f < b.length;f++) {
        Ob(a, b[f], c, d, e)
      }
      return k
    }else {
      var d = !!d, i = R;
      b in i || (i[b] = {c:0, A:0});
      i = i[b];
      d in i || (i[d] = {c:0, A:0}, i.c++);
      var i = i[d], l = ia(a), m;
      i.A++;
      if(i[l]) {
        m = i[l];
        for(f = 0;f < m.length;f++) {
          if(i = m[f], i.wa == c && i.cb == e) {
            if(i.ja) {
              break
            }
            return m[f].key
          }
        }
      }else {
        m = i[l] = [], i.c++
      }
      f = Pb();
      f.src = a;
      i = new Hb;
      i.Ma(c, f, a, b, d, e);
      c = i.key;
      f.key = c;
      m.push(i);
      Q[c] = i;
      z[l] || (z[l] = []);
      z[l].push(i);
      a.addEventListener ? (a == r || !a.sb) && a.addEventListener(b, f, d) : a.attachEvent(b in Nb ? Nb[b] : Nb[b] = "on" + b, f);
      return c
    }
  }else {
    g(Error("Invalid event type"))
  }
}
function Pb() {
  var a = Qb, b = Jb ? function(c) {
    return a.call(b.src, b.key, c)
  } : function(c) {
    c = a.call(b.src, b.key, c);
    if(!c) {
      return c
    }
  };
  return b
}
function Rb(a, b, c, d, e) {
  if(s(b)) {
    for(var f = 0;f < b.length;f++) {
      Rb(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = R;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ia(a), f[a]))) {
        a = f[a];
        break a
      }
      a = k
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].wa == c && a[f].capture == d && a[f].cb == e) {
          Sb(a[f].key);
          break
        }
      }
    }
  }
}
function Sb(a) {
  if(!Q[a]) {
    return o
  }
  var b = Q[a];
  if(b.ja) {
    return o
  }
  var c = b.src, d = b.type, e = b.Mb, f = b.capture;
  c.removeEventListener ? (c == r || !c.sb) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Nb ? Nb[d] : Nb[d] = "on" + d, e);
  c = ia(c);
  e = R[d][f][c];
  if(z[c]) {
    var i = z[c], l = Ha(i, b);
    l >= 0 && A.splice.call(i, l, 1);
    i.length == 0 && delete z[c]
  }
  b.ja = j;
  e.Gb = j;
  Tb(d, f, c, e);
  delete Q[a];
  return j
}
function Tb(a, b, c, d) {
  if(!d.Na && d.Gb) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].ja ? d[e].Mb.src = k : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Gb = o;
    f == 0 && (delete R[a][b][c], R[a][b].c--, R[a][b].c == 0 && (delete R[a][b], R[a].c--), R[a].c == 0 && delete R[a])
  }
}
function Ub(a) {
  var b, c = 0, d = b == k;
  b = !!b;
  if(a == k) {
    Ca(function(a) {
      for(var e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Sb(f.key), c++
        }
      }
    })
  }else {
    if(a = ia(a), z[a]) {
      for(var a = z[a], e = a.length - 1;e >= 0;e--) {
        var f = a[e];
        if(d || b == f.capture) {
          Sb(f.key), c++
        }
      }
    }
  }
}
function Vb(a, b, c, d, e) {
  var f = 1, b = ia(b);
  if(a[b]) {
    a.A--;
    a = a[b];
    a.Na ? a.Na++ : a.Na = 1;
    try {
      for(var i = a.length, l = 0;l < i;l++) {
        var m = a[l];
        m && !m.ja && (f &= Wb(m, e) !== o)
      }
    }finally {
      a.Na--, Tb(c, d, b, a)
    }
  }
  return Boolean(f)
}
function Wb(a, b) {
  var c = a.handleEvent(b);
  a.pb && Sb(a.key);
  return c
}
function Qb(a, b) {
  if(!Q[a]) {
    return j
  }
  var c = Q[a], d = c.type, e = R;
  if(!(d in e)) {
    return j
  }
  var e = e[d], f, i;
  if(!Jb) {
    f = b || ea("window.event");
    var l = j in e, m = o in e;
    if(l) {
      if(f.keyCode < 0 || f.returnValue != h) {
        return j
      }
      a: {
        var n = o;
        if(f.keyCode == 0) {
          try {
            f.keyCode = -1;
            break a
          }catch(x) {
            n = j
          }
        }
        if(n || f.returnValue == h) {
          f.returnValue = j
        }
      }
    }
    n = new Mb;
    n.Ma(f, this);
    f = j;
    try {
      if(l) {
        for(var y = [], xa = n.currentTarget;xa;xa = xa.parentNode) {
          y.push(xa)
        }
        i = e[j];
        i.A = i.c;
        for(var F = y.length - 1;!n.ia && F >= 0 && i.A;F--) {
          n.currentTarget = y[F], f &= Vb(i, y[F], d, j, n)
        }
        if(m) {
          i = e[o];
          i.A = i.c;
          for(F = 0;!n.ia && F < y.length && i.A;F++) {
            n.currentTarget = y[F], f &= Vb(i, y[F], d, o, n)
          }
        }
      }else {
        f = Wb(c, n)
      }
    }finally {
      if(y) {
        y.length = 0
      }
      n.Ha()
    }
    return f
  }
  d = new Mb(b, this);
  try {
    f = Wb(c, d)
  }finally {
    d.Ha()
  }
  return f
}
;function Xb() {
}
w(Xb, O);
q = Xb.prototype;
q.sb = j;
q.jb = k;
q.addEventListener = function(a, b, c, d) {
  Ob(this, a, b, c, d)
};
q.removeEventListener = function(a, b, c, d) {
  Rb(this, a, b, c, d)
};
q.dispatchEvent = function(a) {
  var b = a.type || a, c = R;
  if(b in c) {
    if(t(a)) {
      a = new P(a, this)
    }else {
      if(a instanceof P) {
        a.target = a.target || this
      }else {
        var d = a, a = new P(b, this);
        Ga(a, d)
      }
    }
    var d = 1, e, c = c[b], b = j in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.jb) {
        e.push(f)
      }
      f = c[j];
      f.A = f.c;
      for(var i = e.length - 1;!a.ia && i >= 0 && f.A;i--) {
        a.currentTarget = e[i], d &= Vb(f, e[i], a.type, j, a) && a.Sa != o
      }
    }
    if(o in c) {
      if(f = c[o], f.A = f.c, b) {
        for(i = 0;!a.ia && i < e.length && f.A;i++) {
          a.currentTarget = e[i], d &= Vb(f, e[i], a.type, o, a) && a.Sa != o
        }
      }else {
        for(e = this;!a.ia && e && f.A;e = e.jb) {
          a.currentTarget = e, d &= Vb(f, e, a.type, o, a) && a.Sa != o
        }
      }
    }
    a = Boolean(d)
  }else {
    a = j
  }
  return a
};
q.z = function() {
  Xb.za.z.call(this);
  Ub(this);
  this.jb = k
};
function Yb(a, b) {
  this.sa = a || 1;
  this.Ba = b || Zb;
  this.Ya = u(this.oc, this);
  this.ib = v()
}
w(Yb, Xb);
Yb.prototype.enabled = o;
var Zb = r.window;
q = Yb.prototype;
q.Q = k;
q.setInterval = function(a) {
  this.sa = a;
  this.Q && this.enabled ? (this.stop(), this.start()) : this.Q && this.stop()
};
q.oc = function() {
  if(this.enabled) {
    var a = v() - this.ib;
    if(a > 0 && a < this.sa * 0.8) {
      this.Q = this.Ba.setTimeout(this.Ya, this.sa - a)
    }else {
      if(this.dispatchEvent($b), this.enabled) {
        this.Q = this.Ba.setTimeout(this.Ya, this.sa), this.ib = v()
      }
    }
  }
};
q.start = function() {
  this.enabled = j;
  if(!this.Q) {
    this.Q = this.Ba.setTimeout(this.Ya, this.sa), this.ib = v()
  }
};
q.stop = function() {
  this.enabled = o;
  if(this.Q) {
    this.Ba.clearTimeout(this.Q), this.Q = k
  }
};
q.z = function() {
  Yb.za.z.call(this);
  this.stop();
  delete this.Ba
};
var $b = "tick";
function ac(a) {
  this.e = a;
  this.j = []
}
w(ac, O);
var bc = [];
ac.prototype.z = function() {
  ac.za.z.call(this);
  Ia(this.j, Sb);
  this.j.length = 0
};
ac.prototype.handleEvent = function() {
  g(Error("EventHandler.handleEvent not implemented"))
};
function S(a, b, c, d, e) {
  this.h = a;
  this.a = b;
  this.X = c;
  this.B = d;
  this.ya = e || 1;
  this.Aa = cc;
  this.vb = new ac(this);
  this.Pa = new Yb;
  this.Pa.setInterval(dc)
}
q = S.prototype;
q.t = k;
q.F = o;
q.oa = k;
q.mb = k;
q.ka = k;
q.Ca = k;
q.S = k;
q.u = k;
q.U = k;
q.p = k;
q.Ea = 0;
q.G = k;
q.ma = k;
q.q = k;
q.i = -1;
q.Pb = j;
q.ea = o;
var cc = 45E3, dc = 250;
function ec(a, b) {
  switch(a) {
    case 0:
      return"Non-200 return code (" + b + ")";
    case 1:
      return"XMLHTTP failure (no data)";
    case 2:
      return"HttpConnection timeout";
    default:
      return"Unknown error"
  }
}
var fc = {}, gc = {};
q = S.prototype;
q.W = p("t");
q.setTimeout = p("Aa");
function hc(a, b, c) {
  a.Ca = 1;
  a.S = J(b.l());
  a.U = c;
  a.tb = j;
  ic(a, k)
}
function jc(a, b, c, d, e) {
  a.Ca = 1;
  a.S = J(b.l());
  a.U = k;
  a.tb = c;
  if(e) {
    a.Pb = o
  }
  ic(a, d)
}
function ic(a, b) {
  a.ka = v();
  kc(a);
  a.u = a.S.l();
  db(a.u, "t", a.ya);
  a.Ea = 0;
  a.p = a.h.Ga(a.h.Ta() ? b : k);
  Ob(a.p, "readystatechange", a.Tb, o, a);
  var c;
  if(a.t) {
    c = a.t;
    var d = {}, e;
    for(e in c) {
      d[e] = c[e]
    }
    c = d
  }else {
    c = {}
  }
  a.U ? (a.ma = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.p.send(a.u, a.ma, a.U, c)) : (a.ma = "GET", a.Pb && !M && (c.Connection = "close"), a.p.send(a.u, a.ma, k, c));
  if(d = a.U) {
    c = "";
    d = d.split("&");
    for(e = 0;e < d.length;e++) {
      var f = d[e].split("=");
      if(f.length > 1) {
        var i = f[0], f = f[1], l = i.split("_");
        c += l.length >= 2 && l[1] == "type" ? i + "=" + f + "&" : i + "=redacted&"
      }
    }
  }else {
    c = k
  }
  a.a.info("XMLHTTP REQ (" + a.B + ") [attempt " + a.ya + "]: " + a.ma + "\n" + a.u + "\n" + c)
}
q.Tb = function(a) {
  a = a.target;
  try {
    if(a == this.p) {
      a: {
        var b = T(this.p);
        if(L || M && !N("420+")) {
          if(b < 4) {
            break a
          }
        }else {
          if(b < 3 || b == 3 && !tb && !lc(this.p)) {
            break a
          }
        }
        mc(this);
        var c = nc(this.p);
        this.i = c;
        var d = lc(this.p);
        d || this.a.info("No response text for uri " + this.u + " status " + c);
        this.F = c == 200;
        this.a.info("XMLHTTP RESP (" + this.B + ") [ attempt " + this.ya + "]: " + this.ma + "\n" + this.u + "\n" + b + " " + c);
        if(this.F) {
          b == 4 && oc(this);
          if(this.tb) {
            if(pc(this, b, d), tb && b == 3) {
              var e = this.vb, f = this.Pa, i = this.lc, c = $b;
              s(c) || (bc[0] = c, c = bc);
              for(d = 0;d < c.length;d++) {
                e.j.push(Ob(f, c[d], i || e, o, e.e || e))
              }
              this.Pa.start()
            }
          }else {
            qc(this.a, this.B, d, k), rc(this, d)
          }
          if(this.F && !this.ea) {
            b == 4 ? this.h.ha(this) : (this.F = o, kc(this))
          }
        }else {
          c == 400 && d.indexOf("Unknown SID") > 0 ? (this.q = 3, U(sc)) : (this.q = 0, U(tc)), qc(this.a, this.B, d), oc(this), uc(this)
        }
      }
    }else {
      this.a.na("Called back with an unexpected xmlhttp")
    }
  }catch(l) {
    this.a.info("Failed call to OnXmlHttpReadyStateChanged_"), this.p && lc(this.p) ? vc(this.a, l, "ResponseText: " + lc(this.p)) : vc(this.a, l, "No response text")
  }finally {
  }
};
function pc(a, b, c) {
  for(var d = j;!a.ea && a.Ea < c.length;) {
    var e = wc(a, c);
    if(e == gc) {
      if(b == 4) {
        a.q = 4, U(xc), d = o
      }
      qc(a.a, a.B, k, "[Incomplete Response]");
      break
    }else {
      if(e == fc) {
        a.q = 4;
        U(yc);
        qc(a.a, a.B, c, "[Invalid Chunk]");
        d = o;
        break
      }else {
        qc(a.a, a.B, e, k), rc(a, e)
      }
    }
  }
  if(b == 4 && c.length == 0) {
    a.q = 1, U(zc), d = o
  }
  a.F = a.F && d;
  d || (qc(a.a, a.B, c, "[Invalid Chunked Response]"), oc(a), uc(a))
}
q.lc = function() {
  var a = T(this.p), b = lc(this.p);
  this.Ea < b.length && (mc(this), pc(this, a, b), this.F && a != 4 && kc(this))
};
function wc(a, b) {
  var c = a.Ea, d = b.indexOf("\n", c);
  if(d == -1) {
    return gc
  }
  c = Number(b.substring(c, d));
  if(isNaN(c)) {
    return fc
  }
  d += 1;
  if(d + c > b.length) {
    return gc
  }
  var e = b.substr(d, c);
  a.Ea = d + c;
  return e
}
function Ac(a, b) {
  a.ka = v();
  kc(a);
  a.G = new ActiveXObject("htmlfile");
  var c = "", d = "<html><body>";
  if(b) {
    c = window.location.hostname, d += '<script>document.domain="' + c + '"<\/script>'
  }
  d += "</body></html>";
  a.G.open();
  a.G.write(d);
  a.G.close();
  a.G.parentWindow.m = u(a.ic, a);
  a.G.parentWindow.d = u(a.Lb, a, j);
  a.G.parentWindow.rpcClose = u(a.Lb, a, o);
  d = a.G.createElement("div");
  a.G.parentWindow.document.body.appendChild(d);
  a.u = a.S.l();
  G(a.u, "DOMAIN", c);
  G(a.u, "t", a.ya);
  d.innerHTML = '<iframe src="' + a.u + '"></iframe>';
  a.a.info("TRIDENT REQ (" + a.B + ") [ attempt " + a.ya + "]: GET\n" + a.u)
}
q.ic = function(a) {
  V(u(this.hc, this, a), 0)
};
q.hc = function(a) {
  if(!this.ea) {
    var b = this.a;
    b.info("TRIDENT TEXT (" + this.B + "): " + Bc(b, a));
    mc(this);
    rc(this, a);
    kc(this)
  }
};
q.Lb = function(a) {
  V(u(this.gc, this, a), 0)
};
q.gc = function(a) {
  if(!this.ea) {
    this.a.info("TRIDENT TEXT (" + this.B + "): " + a ? "success" : "failure"), mc(this), oc(this), this.F = a, this.h.ha(this)
  }
};
q.$b = function() {
  mc(this);
  this.h.ha(this)
};
q.cancel = function() {
  this.ea = j;
  mc(this);
  oc(this)
};
function kc(a) {
  a.mb = v() + a.Aa;
  Cc(a, a.Aa)
}
function Cc(a, b) {
  a.oa != k && g(Error("WatchDog timer not null"));
  a.oa = V(u(a.jc, a), b)
}
function mc(a) {
  if(a.oa) {
    r.clearTimeout(a.oa), a.oa = k
  }
}
q.jc = function() {
  this.oa = k;
  var a = v();
  a - this.mb >= 0 ? (this.F && this.a.I("Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.u), oc(this), this.q = 2, U(Dc), uc(this)) : (this.a.na("WatchDog timer called too early"), Cc(this, this.mb - a))
};
function uc(a) {
  !a.h.Bb() && !a.ea && a.h.ha(a)
}
function oc(a) {
  a.Pa.stop();
  var b = a.vb;
  Ia(b.j, Sb);
  b.j.length = 0;
  if(a.p) {
    b = a.p, a.p = k, Rb(b, "readystatechange", a.Tb, o, a), b.abort()
  }
  if(a.G) {
    a.G = k
  }
}
q.zb = ba("q");
function rc(a, b) {
  try {
    a.h.Ib(a, b)
  }catch(c) {
    vc(a.a, c, "Error in httprequest callback")
  }
}
;function Ec(a) {
  return eval("(" + a + ")")
}
function Fc() {
  this.Ra = h
}
function Gc(a) {
  var b = [];
  Hc(new Fc, a, b);
  return b.join("")
}
function Hc(a, b, c) {
  switch(typeof b) {
    case "string":
      Ic(b, c);
      break;
    case "number":
      c.push(isFinite(b) && !isNaN(b) ? b : "null");
      break;
    case "boolean":
      c.push(b);
      break;
    case "undefined":
      c.push("null");
      break;
    case "object":
      if(b == k) {
        c.push("null");
        break
      }
      if(s(b)) {
        var d = b.length;
        c.push("[");
        for(var e = "", f = 0;f < d;f++) {
          c.push(e), e = b[f], Hc(a, a.Ra ? a.Ra.call(b, String(f), e) : e, c), e = ","
        }
        c.push("]");
        break
      }
      c.push("{");
      d = "";
      for(f in b) {
        Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], typeof e != "function" && (c.push(d), Ic(f, c), c.push(":"), Hc(a, a.Ra ? a.Ra.call(b, f, e) : e, c), d = ","))
      }
      c.push("}");
      break;
    case "function":
      break;
    default:
      g(Error("Unknown type: " + typeof b))
  }
}
var Jc = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\u000b"}, Kc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function Ic(a, b) {
  b.push('"', a.replace(Kc, function(a) {
    if(a in Jc) {
      return Jc[a]
    }
    var b = a.charCodeAt(0), e = "\\u";
    b < 16 ? e += "000" : b < 256 ? e += "00" : b < 4096 && (e += "0");
    return Jc[a] = e + b.toString(16)
  }), '"')
}
;function Lc(a) {
  return Mc(a || arguments.callee.caller, [])
}
function Mc(a, b) {
  var c = [];
  if(Ha(b, a) >= 0) {
    c.push("[...circular reference...]")
  }else {
    if(a && b.length < 50) {
      c.push(Nc(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        e > 0 && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Nc(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        f.length > 40 && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Mc(a.caller, b))
      }catch(i) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function Nc(a) {
  if(Oc[a]) {
    return Oc[a]
  }
  a = String(a);
  if(!Oc[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Oc[a] = b ? b[1] : "[Anonymous]"
  }
  return Oc[a]
}
var Oc = {};
function Pc(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
Pc.prototype.mc = 0;
Pc.prototype.yb = k;
Pc.prototype.xb = k;
var Qc = 0;
Pc.prototype.reset = function(a, b, c, d, e) {
  this.mc = typeof e == "number" ? e : Qc++;
  this.xc = d || v();
  this.va = a;
  this.bc = b;
  this.rc = c;
  delete this.yb;
  delete this.xb
};
Pc.prototype.Qb = p("va");
function W(a) {
  this.cc = a
}
W.prototype.Oa = k;
W.prototype.va = k;
W.prototype.Za = k;
W.prototype.Ab = k;
function Rc(a, b) {
  this.name = a;
  this.value = b
}
Rc.prototype.toString = ba("name");
var Sc = new Rc("SEVERE", 1E3), Tc = new Rc("WARNING", 900), Uc = new Rc("INFO", 800), Vc = new Rc("CONFIG", 700), Wc = new Rc("FINE", 500);
q = W.prototype;
q.getParent = ba("Oa");
q.Qb = p("va");
function Xc(a) {
  if(a.va) {
    return a.va
  }
  if(a.Oa) {
    return Xc(a.Oa)
  }
  Aa("Root logger has no level set.");
  return k
}
q.log = function(a, b, c) {
  if(a.value >= Xc(this).value) {
    a = this.Zb(a, b, c);
    b = "log:" + a.bc;
    r.console && (r.console.timeStamp ? r.console.timeStamp(b) : r.console.markTimeline && r.console.markTimeline(b));
    r.msWriteProfilerMark && r.msWriteProfilerMark(b);
    for(b = this;b;) {
      var c = b, d = a;
      if(c.Ab) {
        for(var e = 0, f = h;f = c.Ab[e];e++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
q.Zb = function(a, b, c) {
  var d = new Pc(a, String(b), this.cc);
  if(c) {
    d.yb = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var i;
      var l = ea("window.location.href");
      if(t(c)) {
        i = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:l, stack:"Not available"}
      }else {
        var m, n, x = o;
        try {
          m = c.lineNumber || c.qc || "Not available"
        }catch(y) {
          m = "Not available", x = j
        }
        try {
          n = c.fileName || c.filename || c.sourceURL || l
        }catch(xa) {
          n = "Not available", x = j
        }
        i = x || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:m, fileName:n, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + ra(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + ra(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ra(Lc(f) + "-> ")
    }catch(F) {
      e = "Exception trying to expose exception! You win, we lose. " + F
    }
    d.xb = e
  }
  return d
};
q.I = function(a, b) {
  this.log(Sc, a, b)
};
q.na = function(a, b) {
  this.log(Tc, a, b)
};
q.info = function(a, b) {
  this.log(Uc, a, b)
};
function X(a, b) {
  a.log(Wc, b, h)
}
var Yc = {}, Zc = k;
function $c(a) {
  Zc || (Zc = new W(""), Yc[""] = Zc, Zc.Qb(Vc));
  var b;
  if(!(b = Yc[a])) {
    b = new W(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = $c(a.substr(0, c));
    if(!c.Za) {
      c.Za = {}
    }
    c.Za[d] = b;
    b.Oa = c;
    Yc[a] = b
  }
  return b
}
;function ad() {
  this.o = $c("goog.net.BrowserChannel")
}
function qc(a, b, c, d) {
  a.info("XMLHTTP TEXT (" + b + "): " + Bc(a, c) + (d ? " " + d : ""))
}
function bd(a, b) {
  a.info(b)
}
function vc(a, b, c) {
  a.I((c || "Exception") + b)
}
ad.prototype.info = function(a) {
  this.o.info(a)
};
ad.prototype.na = function(a) {
  this.o.na(a)
};
ad.prototype.I = function(a) {
  this.o.I(a)
};
function Bc(a, b) {
  if(!b || b == cd) {
    return b
  }
  try {
    for(var c = Ec(b), d = 0;d < c.length;d++) {
      if(s(c[d])) {
        var e = c[d];
        if(!(e.length < 2)) {
          var f = e[1];
          if(s(f) && !(f.length < 1)) {
            var i = f[0];
            if(i != "noop" && i != "stop") {
              for(var l = 1;l < f.length;l++) {
                f[l] = ""
              }
            }
          }
        }
      }
    }
    return Gc(c)
  }catch(m) {
    return a.info("Exception parsing expected JS array - probably was not JS"), b
  }
}
;function dd(a) {
  this.headers = new Na;
  this.pa = a || k
}
w(dd, Xb);
dd.prototype.o = $c("goog.net.XhrIo");
var ed = /^https?$/i;
q = dd.prototype;
q.R = o;
q.f = k;
q.Va = k;
q.hb = "";
q.Db = "";
q.ua = 0;
q.q = "";
q.bb = o;
q.La = o;
q.fb = o;
q.aa = o;
q.Ua = 0;
q.ca = k;
q.Ob = "";
q.pc = o;
q.send = function(a, b, c, d) {
  this.f && g(Error("[goog.net.XhrIo] Object is active with another request"));
  b = b ? b.toUpperCase() : "GET";
  this.hb = a;
  this.q = "";
  this.ua = 0;
  this.Db = b;
  this.bb = o;
  this.R = j;
  this.f = this.rb();
  this.Va = this.pa ? this.pa.Fa || (this.pa.Fa = mb(this.pa)) : ib.Fa || (ib.Fa = mb(ib));
  this.f.onreadystatechange = u(this.Hb, this);
  try {
    X(this.o, Y(this, "Opening Xhr")), this.fb = j, this.f.open(b, a, j), this.fb = o
  }catch(e) {
    X(this.o, Y(this, "Error opening Xhr: " + e.message));
    fd(this, e);
    return
  }
  var a = c || "", f = this.headers.l();
  d && B(d, function(a, b) {
    f.set(b, a)
  });
  b == "POST" && !f.K("Content-Type") && f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  B(f, function(a, b) {
    this.f.setRequestHeader(b, a)
  }, this);
  if(this.Ob) {
    this.f.responseType = this.Ob
  }
  if("withCredentials" in this.f) {
    this.f.withCredentials = this.pc
  }
  try {
    if(this.ca) {
      Zb.clearTimeout(this.ca), this.ca = k
    }
    if(this.Ua > 0) {
      X(this.o, Y(this, "Will abort after " + this.Ua + "ms if incomplete")), this.ca = Zb.setTimeout(u(this.Aa, this), this.Ua)
    }
    X(this.o, Y(this, "Sending request"));
    this.La = j;
    this.f.send(a);
    this.La = o
  }catch(i) {
    X(this.o, Y(this, "Send error: " + i.message)), fd(this, i)
  }
};
q.rb = function() {
  return this.pa ? kb(this.pa) : kb(ib)
};
q.Aa = function() {
  if(typeof da != "undefined" && this.f) {
    this.q = "Timed out after " + this.Ua + "ms, aborting", this.ua = 8, X(this.o, Y(this, this.q)), this.dispatchEvent("timeout"), this.abort(8)
  }
};
function fd(a, b) {
  a.R = o;
  if(a.f) {
    a.aa = j, a.f.abort(), a.aa = o
  }
  a.q = b;
  a.ua = 5;
  gd(a);
  hd(a)
}
function gd(a) {
  if(!a.bb) {
    a.bb = j, a.dispatchEvent("complete"), a.dispatchEvent("error")
  }
}
q.abort = function(a) {
  if(this.f && this.R) {
    X(this.o, Y(this, "Aborting")), this.R = o, this.aa = j, this.f.abort(), this.aa = o, this.ua = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), hd(this)
  }
};
q.z = function() {
  if(this.f) {
    if(this.R) {
      this.R = o, this.aa = j, this.f.abort(), this.aa = o
    }
    hd(this, j)
  }
  dd.za.z.call(this)
};
q.Hb = function() {
  !this.fb && !this.La && !this.aa ? this.fc() : id(this)
};
q.fc = function() {
  id(this)
};
function id(a) {
  if(a.R && typeof da != "undefined") {
    if(a.Va[1] && T(a) == 4 && nc(a) == 2) {
      X(a.o, Y(a, "Local request error detected and ignored"))
    }else {
      if(a.La && T(a) == 4) {
        Zb.setTimeout(u(a.Hb, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), T(a) == 4) {
          X(a.o, Y(a, "Request complete"));
          a.R = o;
          var b = nc(a), c;
          a: {
            switch(b) {
              case 200:
              ;
              case 201:
              ;
              case 202:
              ;
              case 204:
              ;
              case 304:
              ;
              case 1223:
                c = j;
                break a;
              default:
                c = o
            }
          }
          if(!c) {
            if(b = b === 0) {
              b = String(a.hb).match(Ba)[1] || k;
              if(!b && self.location) {
                b = self.location.protocol, b = b.substr(0, b.length - 1)
              }
              b = !ed.test(b ? b.toLowerCase() : "")
            }
            c = b
          }
          if(c) {
            a.dispatchEvent("complete"), a.dispatchEvent("success")
          }else {
            a.ua = 6;
            var d;
            try {
              d = T(a) > 2 ? a.f.statusText : ""
            }catch(e) {
              X(a.o, "Can not get status: " + e.message), d = ""
            }
            a.q = d + " [" + nc(a) + "]";
            gd(a)
          }
          hd(a)
        }
      }
    }
  }
}
function hd(a, b) {
  if(a.f) {
    var c = a.f, d = a.Va[0] ? fa : k;
    a.f = k;
    a.Va = k;
    if(a.ca) {
      Zb.clearTimeout(a.ca), a.ca = k
    }
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      a.o.I("Problem encountered resetting onreadystatechange: " + e.message)
    }
  }
}
q.isActive = function() {
  return!!this.f
};
function T(a) {
  return a.f ? a.f.readyState : 0
}
function nc(a) {
  try {
    return T(a) > 2 ? a.f.status : -1
  }catch(b) {
    return a.o.na("Can not get status: " + b.message), -1
  }
}
function lc(a) {
  try {
    return a.f ? a.f.responseText : ""
  }catch(b) {
    return X(a.o, "Can not get responseText: " + b.message), ""
  }
}
q.zb = function() {
  return t(this.q) ? this.q : String(this.q)
};
function Y(a, b) {
  return b + " [" + a.Db + " " + a.hb + " " + nc(a) + "]"
}
;function jd() {
  this.Nb = v()
}
new jd;
jd.prototype.set = p("Nb");
jd.prototype.reset = function() {
  this.set(v())
};
jd.prototype.get = ba("Nb");
function kd(a, b, c, d, e) {
  bd(new ad, "TestLoadImageWithRetries: " + e);
  if(d == 0) {
    c(o)
  }else {
    var f = e || 0;
    d--;
    ld(a, b, function(e) {
      e ? c(j) : r.setTimeout(function() {
        kd(a, b, c, d, f)
      }, f)
    })
  }
}
function ld(a, b, c) {
  var d = new ad;
  d.info("TestLoadImage: loading " + a);
  var e = new Image, f = k;
  createHandler = function(a, b) {
    return function() {
      try {
        d.info("TestLoadImage: " + b), e.onload = k, e.onerror = k, e.onabort = k, e.ontimeout = k, r.clearTimeout(f), c(a)
      }catch(m) {
        vc(d, m)
      }
    }
  };
  e.onload = createHandler(j, "loaded");
  e.onerror = createHandler(o, "error");
  e.onabort = createHandler(o, "abort");
  e.ontimeout = createHandler(o, "timeout");
  f = r.setTimeout(function() {
    if(e.ontimeout) {
      e.ontimeout()
    }
  }, b);
  e.src = a
}
;function md(a, b) {
  this.h = a;
  this.a = b
}
q = md.prototype;
q.t = k;
q.v = k;
q.Qa = o;
q.Rb = k;
q.Ja = k;
q.gb = k;
q.r = k;
q.b = k;
q.i = -1;
q.N = k;
q.Xa = k;
q.W = p("t");
q.$a = function(a) {
  this.r = a;
  a = nd(this.h, this.r);
  U(od);
  db(a, "MODE", "init");
  this.v = new S(this, this.a, h, h, h);
  this.v.W(this.t);
  jc(this.v, a, o, k, j);
  this.b = 0;
  this.Rb = v()
};
q.Wb = function(a) {
  a ? (this.b = 2, pd(this)) : (U(qd), a = this.h, a.a.info("Test Connection Blocked"), a.i = a.Y.i, Z(a, 9))
};
function pd(a) {
  a.a.info("TestConnection: starting stage 2");
  a.v = new S(a, a.a, h, h, h);
  a.v.W(a.t);
  var b = rd(a.h, a.N, a.r);
  U(sd);
  if(L) {
    db(b, "TYPE", "html");
    var c = a.v, a = Boolean(a.N);
    c.Ca = 3;
    c.S = J(b.l());
    Ac(c, a)
  }else {
    db(b, "TYPE", "xmlhttp"), jc(a.v, b, o, a.N, o)
  }
}
q.Ga = function(a) {
  return this.h.Ga(a)
};
q.abort = function() {
  if(this.v) {
    this.v.cancel(), this.v = k
  }
  this.i = -1
};
q.Bb = ca(o);
q.Ib = function(a, b) {
  this.i = a.i;
  if(this.b == 0) {
    if(this.a.info("TestConnection: Got data for stage 1"), b) {
      try {
        var c = Ec(b)
      }catch(d) {
        vc(this.a, d);
        td(this.h, this);
        return
      }
      this.N = this.h.correctHostPrefix(c[0]);
      this.Xa = c[1]
    }else {
      this.a.info("TestConnection: Null responseText"), td(this.h, this)
    }
  }else {
    if(this.b == 2) {
      if(this.Qa) {
        U(ud), this.gb = v()
      }else {
        if(b == "11111") {
          if(U(vd), this.Qa = j, this.Ja = v(), c = this.Ja - this.Rb, !L || c < 500) {
            this.i = 200, this.v.cancel(), this.a.info("Test connection succeeded; using streaming connection"), U(wd), xd(this.h, this, j)
          }
        }else {
          U(yd), this.Ja = this.gb = v(), this.Qa = o
        }
      }
    }
  }
};
q.ha = function() {
  this.i = this.v.i;
  if(this.v.F) {
    if(this.b == 0) {
      if(this.a.info("TestConnection: request complete for initial check"), this.Xa) {
        this.b = 1;
        var a = zd(this.h, this.Xa, "/mail/images/cleardot.gif");
        J(a);
        kd(a.toString(), 5E3, u(this.Wb, this), 3, 2E3)
      }else {
        this.b = 2, pd(this)
      }
    }else {
      this.b == 2 && (this.a.info("TestConnection: request complete for stage 2"), a = o, (a = !L ? this.Qa : this.gb - this.Ja < 200 ? o : j) ? (this.a.info("Test connection succeeded; using streaming connection"), U(wd), xd(this.h, this, j)) : (this.a.info("Test connection failed; not using streaming"), U(Ad), xd(this.h, this, o)))
    }
  }else {
    this.a.info("TestConnection: request failed, in state " + this.b), this.b == 0 ? U(Bd) : this.b == 2 && U(Cd), td(this.h, this)
  }
};
q.Ta = function() {
  return this.h.Ta()
};
q.isActive = function() {
  return this.h.isActive()
};
function Dd(a) {
  this.qb = a;
  this.b = Ed;
  this.s = [];
  this.P = [];
  this.a = new ad
}
function Fd(a, b) {
  this.Fb = a;
  this.map = b
}
q = Dd.prototype;
q.t = k;
q.qa = k;
q.n = k;
q.k = k;
q.r = k;
q.Ka = k;
q.ob = k;
q.N = k;
q.Vb = j;
q.xa = 0;
q.dc = 0;
q.Ia = o;
q.e = k;
q.C = k;
q.J = k;
q.Z = k;
q.Y = k;
q.lb = k;
q.Ub = j;
q.ta = -1;
q.Eb = -1;
q.i = -1;
q.T = 0;
q.da = 0;
q.fa = 8;
var Ed = 1, Gd = new Xb;
function Hd(a, b) {
  P.call(this, "statevent", a);
  this.wc = b
}
w(Hd, P);
function Id(a, b, c, d) {
  P.call(this, "timingevent", a);
  this.size = b;
  this.vc = c;
  this.uc = d
}
w(Id, P);
var od = 3, qd = 4, sd = 5, vd = 6, ud = 7, yd = 8, Bd = 9, Cd = 10, Ad = 11, wd = 12, sc = 13, tc = 14, xc = 15, yc = 16, zc = 17, Dc = 18, cd = "y2f%";
q = Dd.prototype;
q.$a = function(a, b, c, d, e) {
  this.a.info("connect()");
  U(0);
  this.r = b;
  this.qa = c || {};
  if(d && e !== h) {
    this.qa.OSID = d, this.qa.OAID = e
  }
  this.a.info("connectTest_()");
  if(Jd(this)) {
    this.Y = new md(this, this.a), this.Y.W(this.t), this.Y.$a(a)
  }
};
function Kd(a) {
  if(a.Y) {
    a.Y.abort(), a.Y = k
  }
  if(a.k) {
    a.k.cancel(), a.k = k
  }
  if(a.J) {
    r.clearTimeout(a.J), a.J = k
  }
  Ld(a);
  if(a.n) {
    a.n.cancel(), a.n = k
  }
  if(a.C) {
    r.clearTimeout(a.C), a.C = k
  }
}
q.W = p("t");
q.Bb = function() {
  return this.b == 0
};
function Md(a) {
  if(!a.n && !a.C) {
    a.C = V(u(a.Kb, a), 0), a.T = 0
  }
}
q.Kb = function(a) {
  this.C = k;
  this.a.info("startForwardChannel_");
  if(Jd(this)) {
    if(this.b == Ed) {
      if(a) {
        this.a.I("Not supposed to retry the open")
      }else {
        this.a.info("open_()");
        this.xa = Math.floor(Math.random() * 1E5);
        var a = this.xa++, b = new S(this, this.a, "", a, h);
        b.W(this.t);
        var c = Nd(this), d = this.Ka.l();
        G(d, "RID", a);
        this.qb && G(d, "CVER", this.qb);
        Od(this, d);
        hc(b, d, c);
        this.n = b;
        this.b = 2
      }
    }else {
      this.b == 3 && (a ? Pd(this, a) : this.s.length == 0 ? this.a.info("startForwardChannel_ returned: nothing to send") : this.n ? this.a.I("startForwardChannel_ returned: connection already in progress") : (Pd(this), this.a.info("startForwardChannel_ finished, sent request")))
    }
  }
};
function Pd(a, b) {
  var c, d;
  b ? a.fa > 6 ? (a.s = a.P.concat(a.s), a.P.length = 0, c = a.xa - 1, d = Nd(a)) : (c = b.B, d = b.U) : (c = a.xa++, d = Nd(a));
  var e = a.Ka.l();
  G(e, "SID", a.X);
  G(e, "RID", c);
  G(e, "AID", a.ta);
  Od(a, e);
  c = new S(a, a.a, a.X, c, a.T + 1);
  c.W(a.t);
  c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
  a.n = c;
  hc(c, e, d)
}
function Od(a, b) {
  if(a.e) {
    var c = a.e.getAdditionalParams(a);
    c && B(c, function(a, c) {
      G(b, c, a)
    })
  }
}
function Nd(a) {
  var b = Math.min(a.s.length, 1E3), c = ["count=" + b], d;
  a.fa > 6 && b > 0 ? (d = a.s[0].Fb, c.push("ofs=" + d)) : d = 0;
  for(var e = 0;e < b;e++) {
    var f = a.s[e].Fb, i = a.s[e].map;
    a.fa <= 6 ? f = e : f -= d;
    try {
      B(i, function(a, b) {
        c.push("req" + f + "_" + b + "=" + encodeURIComponent(a))
      })
    }catch(l) {
      c.push("req" + f + "_type=" + encodeURIComponent("_badmap")), a.e && a.e.badMapError(a, i)
    }
  }
  a.P = a.P.concat(a.s.splice(0, b));
  return c.join("&")
}
function Qd(a) {
  if(!a.k && !a.J) {
    a.nb = 1, a.J = V(u(a.Jb, a), 0), a.da = 0
  }
}
function Rd(a) {
  if(a.k || a.J) {
    return a.a.I("Request already in progress"), o
  }
  if(a.da >= 3) {
    return o
  }
  a.a.info("Going to retry GET");
  a.nb++;
  a.J = V(u(a.Jb, a), Sd(a, a.da));
  a.da++;
  return j
}
q.Jb = function() {
  this.J = k;
  if(Jd(this)) {
    this.a.info("Creating new HttpRequest");
    this.k = new S(this, this.a, this.X, "rpc", this.nb);
    this.k.W(this.t);
    var a = this.ob.l();
    G(a, "RID", "rpc");
    G(a, "SID", this.X);
    G(a, "CI", this.lb ? "0" : "1");
    G(a, "AID", this.ta);
    Od(this, a);
    if(L) {
      G(a, "TYPE", "html");
      var b = this.k, c = Boolean(this.N);
      b.Ca = 3;
      b.S = J(a.l());
      Ac(b, c)
    }else {
      G(a, "TYPE", "xmlhttp"), jc(this.k, a, j, this.N, o)
    }
    this.a.info("New Request created")
  }
};
function Jd(a) {
  if(a.e) {
    var b = a.e.okToMakeRequest(a);
    if(b != 0) {
      return a.a.info("Handler returned error code from okToMakeRequest"), Z(a, b), o
    }
  }
  return j
}
function xd(a, b, c) {
  a.a.info("Test Connection Finished");
  a.lb = a.Ub && c;
  a.i = b.i;
  a.a.info("connectChannel_()");
  a.Yb(Ed, 0);
  a.Ka = nd(a, a.r);
  Md(a)
}
function td(a, b) {
  a.a.info("Test Connection Failed");
  a.i = b.i;
  Z(a, 2)
}
q.Ib = function(a, b) {
  if(!(this.b == 0 || this.k != a && this.n != a)) {
    if(this.i = a.i, this.n == a && this.b == 3) {
      if(this.fa > 7) {
        var c;
        try {
          c = Ec(b)
        }catch(d) {
          c = k
        }
        if(s(c) && c.length == 3) {
          var e = c;
          if(e[0] == 0) {
            a: {
              if(this.a.info("Server claims our backchannel is missing."), this.J) {
                this.a.info("But we are currently starting the request.")
              }else {
                if(this.k) {
                  if(this.k.ka + 3E3 < this.n.ka) {
                    Ld(this), this.k.cancel(), this.k = k
                  }else {
                    break a
                  }
                }else {
                  this.a.na("We do not have a BackChannel established")
                }
                Rd(this);
                U(19)
              }
            }
          }else {
            if(this.Eb = e[1], c = this.Eb - this.ta, 0 < c && (e = e[2], this.a.info(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), e < 37500 && this.lb && this.da == 0 && !this.Z)) {
              this.Z = V(u(this.ec, this), 6E3)
            }
          }
        }else {
          this.a.info("Bad POST response data returned"), Z(this, 11)
        }
      }else {
        b != cd && (this.a.info("Bad data returned - missing/invald magic cookie"), Z(this, 11))
      }
    }else {
      if(this.k == a && Ld(this), !/^[\s\xa0]*$/.test(b)) {
        c = Ec(b);
        for(var e = this.e && this.e.channelHandleMultipleArrays ? [] : k, f = 0;f < c.length;f++) {
          var i = c[f];
          this.ta = i[0];
          i = i[1];
          if(this.b == 2) {
            i[0] == "c" ? (this.X = i[1], this.N = this.correctHostPrefix(i[2]), i = i[3], this.fa = i != k ? i : 6, this.b = 3, this.e && this.e.channelOpened(this), this.ob = rd(this, this.N, this.r), Qd(this)) : i[0] == "stop" && Z(this, 7)
          }else {
            if(this.b == 3) {
              if(i[0] == "stop") {
                if(e && e.length) {
                  this.e.channelHandleMultipleArrays(this, e), e.length = 0
                }
                Z(this, 7)
              }else {
                i[0] != "noop" && (e ? e.push(i) : this.e && this.e.channelHandleArray(this, i))
              }
              this.da = 0
            }
          }
        }
        e && e.length && this.e.channelHandleMultipleArrays(this, e)
      }
    }
  }
};
q.correctHostPrefix = function(a) {
  return this.Vb ? this.e ? this.e.correctHostPrefix(a) : a : k
};
q.ec = function() {
  if(this.Z != k) {
    this.Z = k, this.k.cancel(), this.k = k, Rd(this), U(20)
  }
};
function Ld(a) {
  if(a.Z != k) {
    r.clearTimeout(a.Z), a.Z = k
  }
}
q.ha = function(a) {
  this.a.info("Request complete");
  var b;
  if(this.k == a) {
    Ld(this), this.k = k, b = 2
  }else {
    if(this.n == a) {
      this.n = k, b = 1
    }else {
      return
    }
  }
  this.i = a.i;
  if(this.b != 0) {
    if(a.F) {
      b == 1 ? (b = v() - a.ka, Gd.dispatchEvent(new Id(Gd, a.U ? a.U.length : 0, b, this.T)), Md(this), this.P.length = 0) : Qd(this)
    }else {
      var c = a.zb();
      if(c == 3 || c == 0 && this.i > 0) {
        this.a.info("Not retrying due to error type")
      }else {
        this.a.info("Maybe retrying, last error: " + ec(c, this.i));
        var d;
        if(d = b == 1) {
          this.n || this.C ? (this.a.I("Request already in progress"), d = o) : this.b == Ed || this.T >= (this.Ia ? 0 : 2) ? d = o : (this.a.info("Going to retry POST"), this.C = V(u(this.Kb, this, a), Sd(this, this.T)), this.T++, d = j)
        }
        if(d) {
          return
        }
        if(b == 2 && Rd(this)) {
          return
        }
        this.a.info("Exceeded max number of retries")
      }
      this.a.info("Error: HTTP request failed");
      switch(c) {
        case 1:
          Z(this, 5);
          break;
        case 4:
          Z(this, 10);
          break;
        case 3:
          Z(this, 6);
          break;
        default:
          Z(this, 2)
      }
    }
  }
};
function Sd(a, b) {
  var c = 5E3 + Math.floor(Math.random() * 1E4);
  a.isActive() || (a.a.info("Inactive channel"), c *= 2);
  c *= b;
  return c
}
q.Yb = function(a) {
  Ha(arguments, this.b) >= 0 || g(Error("Unexpected channel state: " + this.b))
};
function Z(a, b) {
  a.a.info("Error code " + b);
  if(b == 2 || b == 9) {
    var c = k;
    a.e && (c = a.e.getNetworkTestImageUri(a));
    var d = u(a.nc, a);
    c || (c = new D("//www.google.com/images/cleardot.gif"), J(c));
    ld(c.toString(), 1E4, d)
  }else {
    U(2)
  }
  Td(a, b)
}
q.nc = function(a) {
  a ? (this.a.info("Successfully pinged google.com"), U(2)) : (this.a.info("Failed to ping google.com"), U(1), Td(this, 8))
};
function Td(a, b) {
  a.a.info("HttpChannel: error - " + b);
  a.b = 0;
  a.e && a.e.channelError(a, b);
  Ud(a);
  Kd(a)
}
function Ud(a) {
  a.b = 0;
  a.i = -1;
  if(a.e) {
    if(a.P.length == 0 && a.s.length == 0) {
      a.e.channelClosed(a)
    }else {
      a.a.info("Number of undelivered maps, pending: " + a.P.length + ", outgoing: " + a.s.length);
      var b = Ka(a.P), c = Ka(a.s);
      a.P.length = 0;
      a.s.length = 0;
      a.e.channelClosed(a, b, c)
    }
  }
}
function nd(a, b) {
  var c = zd(a, k, b);
  a.a.info("GetForwardChannelUri: " + c);
  return c
}
function rd(a, b, c) {
  b = zd(a, a.Ta() ? b : k, c);
  a.a.info("GetBackChannelUri: " + b);
  return b
}
function zd(a, b, c) {
  var d = c instanceof D ? c.l() : new D(c, h);
  if(d.L != "") {
    b && Ra(d, b + "." + d.L), Sa(d, d.ba)
  }else {
    var e = window.location, d = bb(e.protocol, k, b ? b + "." + e.hostname : e.hostname, e.port, c)
  }
  a.qa && B(a.qa, function(a, b) {
    G(d, b, a)
  });
  G(d, "VER", a.fa);
  Od(a, d);
  return d
}
q.Ga = function(a) {
  if(a) {
    g(Error("Can't create secondary domain capable XhrIo object."))
  }else {
    return new dd
  }
};
q.isActive = function() {
  return!!this.e && this.e.isActive(this)
};
function V(a, b) {
  ga(a) != "function" && g(Error("Fn must not be null and must be a function"));
  return r.setTimeout(function() {
    a()
  }, b)
}
function U(a) {
  Gd.dispatchEvent(new Hd(Gd, a))
}
q.Ta = function() {
  return L
};
function Vd() {
}
q = Vd.prototype;
q.channelHandleMultipleArrays = k;
q.okToMakeRequest = ca(0);
q.channelOpened = aa();
q.channelHandleArray = aa();
q.channelError = aa();
q.channelClosed = aa();
q.getAdditionalParams = function() {
  return{}
};
q.getNetworkTestImageUri = ca(k);
q.isActive = ca(j);
q.badMapError = aa();
q.correctHostPrefix = function(a) {
  return a
};
var $, Wd;
Wd = {0:"Ok", 4:"User is logging out", 6:"Unknown session ID", 7:"Stopped by server", 8:"General network error", 2:"Request failed", 9:"Blocked by a network administrator", 5:"No data from server", 10:"Got bad data from the server", 11:"Got a bad response from the server"};
$ = function(a, b) {
  var c, d, e, f, i, l, m, n, x;
  m = this;
  a || (a = "channel");
  a.match(/:\/\//) && a.replace(/^ws/, "http");
  b || (b = {});
  if(s(b || typeof b === "string")) {
    b = {}
  }
  i = b.reconnectTime || 3E3;
  x = function(a) {
    m.readyState = m.readyState = a
  };
  x(this.CLOSED);
  n = k;
  e = b.tc;
  c = new Vd;
  c.channelOpened = function() {
    e = n;
    x($.OPEN);
    return typeof m.onopen === "function" ? m.onopen() : h
  };
  d = k;
  c.channelError = function(a, b) {
    var c;
    c = Wd[b];
    d = b;
    x($.Wa);
    return typeof m.onerror === "function" ? m.onerror(c, b) : h
  };
  l = k;
  c.channelClosed = function(a, c, e) {
    if(m.readyState !== $.CLOSED) {
      n = k;
      a = d ? Wd[d] : "Closed";
      x($.CLOSED);
      try {
        if(typeof m.onclose === "function") {
          m.onclose(a, c, e)
        }
      }catch(Zd) {
        typeof console !== "undefined" && console !== k && console.error(Zd.stack)
      }
      b.reconnect && d !== 7 && d !== 0 && (c = d === 6 ? 0 : i, clearTimeout(l), l = setTimeout(f, c));
      return d = k
    }
  };
  c.channelHandleArray = function(a, b) {
    try {
      return typeof m.onmessage === "function" ? m.onmessage(b) : h
    }catch(c) {
      return setTimeout(function() {
        g(c)
      }, 0)
    }
  };
  f = function() {
    n && g(Error("Reconnect() called from invalid state"));
    x($.CONNECTING);
    if(typeof m.onconnecting === "function") {
      m.onconnecting()
    }
    clearTimeout(l);
    n = new Dd(b.appVersion);
    n.e = c;
    d = k;
    if(b.failFast) {
      var f = n;
      f.Ia = j;
      f.a.info("setFailFast: true");
      if((f.n || f.C) && f.T > (f.Ia ? 0 : 2)) {
        f.a.info("Retry count " + f.T + " > new maxRetries " + (f.Ia ? 0 : 2) + ". Fail immediately!"), f.n ? (f.n.cancel(), f.ha(f.n)) : (r.clearTimeout(f.C), f.C = k, Z(f, 2))
      }
    }
    return n.$a("" + a + "/test", "" + a + "/bind", k, e != k ? e.X : h, e != k ? e.ta : h)
  };
  this.open = function() {
    m.readyState !== m.CLOSED && g(Error("Already open"));
    return f()
  };
  this.close = function() {
    clearTimeout(l);
    d = 0;
    if(m.readyState !== $.CLOSED) {
      x($.Wa);
      var a = n;
      a.a.info("disconnect()");
      Kd(a);
      if(a.b == 3) {
        var b = a.xa++, c = a.Ka.l();
        G(c, "SID", a.X);
        G(c, "RID", b);
        G(c, "TYPE", "terminate");
        Od(a, c);
        b = new S(a, a.a, a.X, b, h);
        b.Ca = 2;
        b.S = J(c.l());
        c = new Image;
        c.src = b.S;
        c.onload = c.onerror = u(b.$b, b);
        b.ka = v();
        kc(b);
        Ud(a)
      }
    }
  };
  this.sendMap = function(a) {
    var b;
    ((b = m.readyState) === $.Wa || b === $.CLOSED) && g(Error("Cannot send to a closed connection"));
    b = n;
    b.b == 0 && g(Error("Invalid operation: sending map when state is closed"));
    b.s.length == 1E3 && b.a.I("Already have 1000 queued maps upon queueing " + Gc(a));
    b.s.push(new Fd(b.dc++, a));
    (b.b == 2 || b.b == 3) && Md(b)
  };
  this.send = function(a) {
    return this.sendMap({JSON:Gc(a)})
  };
  f();
  return this
};
$.prototype.CONNECTING = $.CONNECTING = $.CONNECTING = 0;
$.prototype.OPEN = $.OPEN = $.OPEN = 1;
$.prototype.CLOSING = $.CLOSING = $.Wa = 2;
$.prototype.CLOSED = $.CLOSED = $.CLOSED = 3;
(typeof exports !== "undefined" && exports !== k ? exports : window).BCSocket = $;
var Image, XMLHttpRequest, Xd, Yd, window;
Xd = require("request");
Image = function() {
  var a = this;
  this.__defineSetter__("src", function(b) {
    b = b.toString();
    b.match(/^\/\//) && (b = "http:" + b);
    return Xd(b, function(b) {
      return b != k ? typeof a.onerror === "function" ? a.onerror() : h : typeof a.onload === "function" ? a.onload() : h
    })
  });
  return this
};
XMLHttpRequest = require("../XMLHttpRequest").XMLHttpRequest;
Dd.prototype.Ga = function() {
  var a;
  a = new dd;
  a.rb = function() {
    return new XMLHttpRequest
  };
  return a
};
r = window = {setTimeout:setTimeout, clearTimeout:clearTimeout, setInterval:setInterval, clearInterval:clearInterval, location:k, navigator:{userAgent:"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/14.0.835.202 Safari/535.1"}};
Yd = require("url");
exports.setDefaultLocation = function(a) {
  typeof a === "string" && (a = Yd.parse(a));
  return window.location = a
};

})();
