(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/plyr/dist/plyr.polyfilled.js
  var require_plyr_polyfilled = __commonJS({
    "node_modules/plyr/dist/plyr.polyfilled.js"(exports, module) {
      typeof navigator === "object" && function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define("Plyr", factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.Plyr = factory());
      }(exports, function() {
        "use strict";
        (function() {
          if (typeof window === "undefined") {
            return;
          }
          try {
            var ce = new window.CustomEvent("test", {
              cancelable: true
            });
            ce.preventDefault();
            if (ce.defaultPrevented !== true) {
              throw new Error("Could not prevent default");
            }
          } catch (e) {
            var CustomEvent2 = function(event, params) {
              var evt, origPrevent;
              params = params || {};
              params.bubbles = !!params.bubbles;
              params.cancelable = !!params.cancelable;
              evt = document.createEvent("CustomEvent");
              evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
              origPrevent = evt.preventDefault;
              evt.preventDefault = function() {
                origPrevent.call(this);
                try {
                  Object.defineProperty(this, "defaultPrevented", {
                    get: function() {
                      return true;
                    }
                  });
                } catch (e2) {
                  this.defaultPrevented = true;
                }
              };
              return evt;
            };
            CustomEvent2.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent2;
          }
        })();
        var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
        function createCommonjsModule(fn, module2) {
          return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
        }
        (function(global2) {
          var checkIfIteratorIsSupported = function() {
            try {
              return !!Symbol.iterator;
            } catch (error) {
              return false;
            }
          };
          var iteratorSupported = checkIfIteratorIsSupported();
          var createIterator = function(items) {
            var iterator = {
              next: function() {
                var value = items.shift();
                return {
                  done: value === void 0,
                  value
                };
              }
            };
            if (iteratorSupported) {
              iterator[Symbol.iterator] = function() {
                return iterator;
              };
            }
            return iterator;
          };
          var serializeParam = function(value) {
            return encodeURIComponent(value).replace(/%20/g, "+");
          };
          var deserializeParam = function(value) {
            return decodeURIComponent(String(value).replace(/\+/g, " "));
          };
          var polyfillURLSearchParams = function() {
            var URLSearchParams2 = function(searchString) {
              Object.defineProperty(this, "_entries", {
                writable: true,
                value: {}
              });
              var typeofSearchString = typeof searchString;
              if (typeofSearchString === "undefined")
                ;
              else if (typeofSearchString === "string") {
                if (searchString !== "") {
                  this._fromString(searchString);
                }
              } else if (searchString instanceof URLSearchParams2) {
                var _this = this;
                searchString.forEach(function(value, name) {
                  _this.append(name, value);
                });
              } else if (searchString !== null && typeofSearchString === "object") {
                if (Object.prototype.toString.call(searchString) === "[object Array]") {
                  for (var i = 0; i < searchString.length; i++) {
                    var entry = searchString[i];
                    if (Object.prototype.toString.call(entry) === "[object Array]" || entry.length !== 2) {
                      this.append(entry[0], entry[1]);
                    } else {
                      throw new TypeError("Expected [string, any] as entry at index " + i + " of URLSearchParams's input");
                    }
                  }
                } else {
                  for (var key in searchString) {
                    if (searchString.hasOwnProperty(key)) {
                      this.append(key, searchString[key]);
                    }
                  }
                }
              } else {
                throw new TypeError("Unsupported input's type for URLSearchParams");
              }
            };
            var proto2 = URLSearchParams2.prototype;
            proto2.append = function(name, value) {
              if (name in this._entries) {
                this._entries[name].push(String(value));
              } else {
                this._entries[name] = [String(value)];
              }
            };
            proto2.delete = function(name) {
              delete this._entries[name];
            };
            proto2.get = function(name) {
              return name in this._entries ? this._entries[name][0] : null;
            };
            proto2.getAll = function(name) {
              return name in this._entries ? this._entries[name].slice(0) : [];
            };
            proto2.has = function(name) {
              return name in this._entries;
            };
            proto2.set = function(name, value) {
              this._entries[name] = [String(value)];
            };
            proto2.forEach = function(callback, thisArg) {
              var entries;
              for (var name in this._entries) {
                if (this._entries.hasOwnProperty(name)) {
                  entries = this._entries[name];
                  for (var i = 0; i < entries.length; i++) {
                    callback.call(thisArg, entries[i], name, this);
                  }
                }
              }
            };
            proto2.keys = function() {
              var items = [];
              this.forEach(function(value, name) {
                items.push(name);
              });
              return createIterator(items);
            };
            proto2.values = function() {
              var items = [];
              this.forEach(function(value) {
                items.push(value);
              });
              return createIterator(items);
            };
            proto2.entries = function() {
              var items = [];
              this.forEach(function(value, name) {
                items.push([name, value]);
              });
              return createIterator(items);
            };
            if (iteratorSupported) {
              proto2[Symbol.iterator] = proto2.entries;
            }
            proto2.toString = function() {
              var searchArray = [];
              this.forEach(function(value, name) {
                searchArray.push(serializeParam(name) + "=" + serializeParam(value));
              });
              return searchArray.join("&");
            };
            global2.URLSearchParams = URLSearchParams2;
          };
          var checkIfURLSearchParamsSupported = function() {
            try {
              var URLSearchParams2 = global2.URLSearchParams;
              return new URLSearchParams2("?a=1").toString() === "a=1" && typeof URLSearchParams2.prototype.set === "function" && typeof URLSearchParams2.prototype.entries === "function";
            } catch (e) {
              return false;
            }
          };
          if (!checkIfURLSearchParamsSupported()) {
            polyfillURLSearchParams();
          }
          var proto = global2.URLSearchParams.prototype;
          if (typeof proto.sort !== "function") {
            proto.sort = function() {
              var _this = this;
              var items = [];
              this.forEach(function(value, name) {
                items.push([name, value]);
                if (!_this._entries) {
                  _this.delete(name);
                }
              });
              items.sort(function(a, b) {
                if (a[0] < b[0]) {
                  return -1;
                } else if (a[0] > b[0]) {
                  return 1;
                } else {
                  return 0;
                }
              });
              if (_this._entries) {
                _this._entries = {};
              }
              for (var i = 0; i < items.length; i++) {
                this.append(items[i][0], items[i][1]);
              }
            };
          }
          if (typeof proto._fromString !== "function") {
            Object.defineProperty(proto, "_fromString", {
              enumerable: false,
              configurable: false,
              writable: false,
              value: function(searchString) {
                if (this._entries) {
                  this._entries = {};
                } else {
                  var keys = [];
                  this.forEach(function(value, name) {
                    keys.push(name);
                  });
                  for (var i = 0; i < keys.length; i++) {
                    this.delete(keys[i]);
                  }
                }
                searchString = searchString.replace(/^\?/, "");
                var attributes = searchString.split("&");
                var attribute;
                for (var i = 0; i < attributes.length; i++) {
                  attribute = attributes[i].split("=");
                  this.append(deserializeParam(attribute[0]), attribute.length > 1 ? deserializeParam(attribute[1]) : "");
                }
              }
            });
          }
        })(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : commonjsGlobal);
        (function(global2) {
          var checkIfURLIsSupported = function() {
            try {
              var u = new global2.URL("b", "http://a");
              u.pathname = "c d";
              return u.href === "http://a/c%20d" && u.searchParams;
            } catch (e) {
              return false;
            }
          };
          var polyfillURL = function() {
            var _URL = global2.URL;
            var URL2 = function(url, base) {
              if (typeof url !== "string")
                url = String(url);
              if (base && typeof base !== "string")
                base = String(base);
              var doc = document, baseElement;
              if (base && (global2.location === void 0 || base !== global2.location.href)) {
                base = base.toLowerCase();
                doc = document.implementation.createHTMLDocument("");
                baseElement = doc.createElement("base");
                baseElement.href = base;
                doc.head.appendChild(baseElement);
                try {
                  if (baseElement.href.indexOf(base) !== 0)
                    throw new Error(baseElement.href);
                } catch (err) {
                  throw new Error("URL unable to set base " + base + " due to " + err);
                }
              }
              var anchorElement = doc.createElement("a");
              anchorElement.href = url;
              if (baseElement) {
                doc.body.appendChild(anchorElement);
                anchorElement.href = anchorElement.href;
              }
              var inputElement = doc.createElement("input");
              inputElement.type = "url";
              inputElement.value = url;
              if (anchorElement.protocol === ":" || !/:/.test(anchorElement.href) || !inputElement.checkValidity() && !base) {
                throw new TypeError("Invalid URL");
              }
              Object.defineProperty(this, "_anchorElement", {
                value: anchorElement
              });
              var searchParams = new global2.URLSearchParams(this.search);
              var enableSearchUpdate = true;
              var enableSearchParamsUpdate = true;
              var _this = this;
              ["append", "delete", "set"].forEach(function(methodName) {
                var method = searchParams[methodName];
                searchParams[methodName] = function() {
                  method.apply(searchParams, arguments);
                  if (enableSearchUpdate) {
                    enableSearchParamsUpdate = false;
                    _this.search = searchParams.toString();
                    enableSearchParamsUpdate = true;
                  }
                };
              });
              Object.defineProperty(this, "searchParams", {
                value: searchParams,
                enumerable: true
              });
              var search = void 0;
              Object.defineProperty(this, "_updateSearchParams", {
                enumerable: false,
                configurable: false,
                writable: false,
                value: function() {
                  if (this.search !== search) {
                    search = this.search;
                    if (enableSearchParamsUpdate) {
                      enableSearchUpdate = false;
                      this.searchParams._fromString(this.search);
                      enableSearchUpdate = true;
                    }
                  }
                }
              });
            };
            var proto = URL2.prototype;
            var linkURLWithAnchorAttribute = function(attributeName) {
              Object.defineProperty(proto, attributeName, {
                get: function() {
                  return this._anchorElement[attributeName];
                },
                set: function(value) {
                  this._anchorElement[attributeName] = value;
                },
                enumerable: true
              });
            };
            ["hash", "host", "hostname", "port", "protocol"].forEach(function(attributeName) {
              linkURLWithAnchorAttribute(attributeName);
            });
            Object.defineProperty(proto, "search", {
              get: function() {
                return this._anchorElement["search"];
              },
              set: function(value) {
                this._anchorElement["search"] = value;
                this._updateSearchParams();
              },
              enumerable: true
            });
            Object.defineProperties(proto, {
              "toString": {
                get: function() {
                  var _this = this;
                  return function() {
                    return _this.href;
                  };
                }
              },
              "href": {
                get: function() {
                  return this._anchorElement.href.replace(/\?$/, "");
                },
                set: function(value) {
                  this._anchorElement.href = value;
                  this._updateSearchParams();
                },
                enumerable: true
              },
              "pathname": {
                get: function() {
                  return this._anchorElement.pathname.replace(/(^\/?)/, "/");
                },
                set: function(value) {
                  this._anchorElement.pathname = value;
                },
                enumerable: true
              },
              "origin": {
                get: function() {
                  var expectedPort = {
                    "http:": 80,
                    "https:": 443,
                    "ftp:": 21
                  }[this._anchorElement.protocol];
                  var addPortToOrigin = this._anchorElement.port != expectedPort && this._anchorElement.port !== "";
                  return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (addPortToOrigin ? ":" + this._anchorElement.port : "");
                },
                enumerable: true
              },
              "password": {
                get: function() {
                  return "";
                },
                set: function(value) {
                },
                enumerable: true
              },
              "username": {
                get: function() {
                  return "";
                },
                set: function(value) {
                },
                enumerable: true
              }
            });
            URL2.createObjectURL = function(blob) {
              return _URL.createObjectURL.apply(_URL, arguments);
            };
            URL2.revokeObjectURL = function(url) {
              return _URL.revokeObjectURL.apply(_URL, arguments);
            };
            global2.URL = URL2;
          };
          if (!checkIfURLIsSupported()) {
            polyfillURL();
          }
          if (global2.location !== void 0 && !("origin" in global2.location)) {
            var getOrigin = function() {
              return global2.location.protocol + "//" + global2.location.hostname + (global2.location.port ? ":" + global2.location.port : "");
            };
            try {
              Object.defineProperty(global2.location, "origin", {
                get: getOrigin,
                enumerable: true
              });
            } catch (e) {
              setInterval(function() {
                global2.location.origin = getOrigin();
              }, 100);
            }
          }
        })(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : commonjsGlobal);
        function _defineProperty$1(obj, key, value) {
          key = _toPropertyKey(key);
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _toPrimitive(input, hint) {
          if (typeof input !== "object" || input === null)
            return input;
          var prim = input[Symbol.toPrimitive];
          if (prim !== void 0) {
            var res = prim.call(input, hint || "default");
            if (typeof res !== "object")
              return res;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return (hint === "string" ? String : Number)(input);
        }
        function _toPropertyKey(arg) {
          var key = _toPrimitive(arg, "string");
          return typeof key === "symbol" ? key : String(key);
        }
        function _classCallCheck(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r);
          }
        }
        function _createClass(e, t, n) {
          return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e;
        }
        function _defineProperty(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n, e;
        }
        function ownKeys(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter(function(t2) {
              return Object.getOwnPropertyDescriptor(e, t2).enumerable;
            })), n.push.apply(n, r);
          }
          return n;
        }
        function _objectSpread2(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ownKeys(Object(n), true).forEach(function(t2) {
              _defineProperty(e, t2, n[t2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t2) {
              Object.defineProperty(e, t2, Object.getOwnPropertyDescriptor(n, t2));
            });
          }
          return e;
        }
        var defaults$1 = {
          addCSS: true,
          thumbWidth: 15,
          watch: true
        };
        function matches$1(e, t) {
          return function() {
            return Array.from(document.querySelectorAll(t)).includes(this);
          }.call(e, t);
        }
        function trigger(e, t) {
          if (e && t) {
            var n = new Event(t, {
              bubbles: true
            });
            e.dispatchEvent(n);
          }
        }
        var getConstructor$1 = function(e) {
          return null != e ? e.constructor : null;
        }, instanceOf$1 = function(e, t) {
          return !!(e && t && e instanceof t);
        }, isNullOrUndefined$1 = function(e) {
          return null == e;
        }, isObject$1 = function(e) {
          return getConstructor$1(e) === Object;
        }, isNumber$1 = function(e) {
          return getConstructor$1(e) === Number && !Number.isNaN(e);
        }, isString$1 = function(e) {
          return getConstructor$1(e) === String;
        }, isBoolean$1 = function(e) {
          return getConstructor$1(e) === Boolean;
        }, isFunction$1 = function(e) {
          return getConstructor$1(e) === Function;
        }, isArray$1 = function(e) {
          return Array.isArray(e);
        }, isNodeList$1 = function(e) {
          return instanceOf$1(e, NodeList);
        }, isElement$1 = function(e) {
          return instanceOf$1(e, Element);
        }, isEvent$1 = function(e) {
          return instanceOf$1(e, Event);
        }, isEmpty$1 = function(e) {
          return isNullOrUndefined$1(e) || (isString$1(e) || isArray$1(e) || isNodeList$1(e)) && !e.length || isObject$1(e) && !Object.keys(e).length;
        }, is$1 = {
          nullOrUndefined: isNullOrUndefined$1,
          object: isObject$1,
          number: isNumber$1,
          string: isString$1,
          boolean: isBoolean$1,
          function: isFunction$1,
          array: isArray$1,
          nodeList: isNodeList$1,
          element: isElement$1,
          event: isEvent$1,
          empty: isEmpty$1
        };
        function getDecimalPlaces(e) {
          var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
        }
        function round(e, t) {
          if (1 > t) {
            var n = getDecimalPlaces(t);
            return parseFloat(e.toFixed(n));
          }
          return Math.round(e / t) * t;
        }
        var RangeTouch = function() {
          function e(t, n) {
            _classCallCheck(this, e), is$1.element(t) ? this.element = t : is$1.string(t) && (this.element = document.querySelector(t)), is$1.element(this.element) && is$1.empty(this.element.rangeTouch) && (this.config = _objectSpread2({}, defaults$1, {}, n), this.init());
          }
          return _createClass(e, [{
            key: "init",
            value: function() {
              e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(true), this.element.rangeTouch = this);
            }
          }, {
            key: "destroy",
            value: function() {
              e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(false), this.element.rangeTouch = null);
            }
          }, {
            key: "listeners",
            value: function(e2) {
              var t = this, n = e2 ? "addEventListener" : "removeEventListener";
              ["touchstart", "touchmove", "touchend"].forEach(function(e3) {
                t.element[n](e3, function(e4) {
                  return t.set(e4);
                }, false);
              });
            }
          }, {
            key: "get",
            value: function(t) {
              if (!e.enabled || !is$1.event(t))
                return null;
              var n, r = t.target, i = t.changedTouches[0], o = parseFloat(r.getAttribute("min")) || 0, s = parseFloat(r.getAttribute("max")) || 100, u = parseFloat(r.getAttribute("step")) || 1, c = r.getBoundingClientRect(), a = 100 / c.width * (this.config.thumbWidth / 2) / 100;
              return 0 > (n = 100 / c.width * (i.clientX - c.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * a : 50 < n && (n += 2 * (n - 50) * a), o + round(n / 100 * (s - o), u);
            }
          }, {
            key: "set",
            value: function(t) {
              e.enabled && is$1.event(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), trigger(t.target, "touchend" === t.type ? "change" : "input"));
            }
          }], [{
            key: "setup",
            value: function(t) {
              var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = null;
              if (is$1.empty(t) || is$1.string(t) ? r = Array.from(document.querySelectorAll(is$1.string(t) ? t : 'input[type="range"]')) : is$1.element(t) ? r = [t] : is$1.nodeList(t) ? r = Array.from(t) : is$1.array(t) && (r = t.filter(is$1.element)), is$1.empty(r))
                return null;
              var i = _objectSpread2({}, defaults$1, {}, n);
              if (is$1.string(t) && i.watch) {
                var o = new MutationObserver(function(n2) {
                  Array.from(n2).forEach(function(n3) {
                    Array.from(n3.addedNodes).forEach(function(n4) {
                      is$1.element(n4) && matches$1(n4, t) && new e(n4, i);
                    });
                  });
                });
                o.observe(document.body, {
                  childList: true,
                  subtree: true
                });
              }
              return r.map(function(t2) {
                return new e(t2, n);
              });
            }
          }, {
            key: "enabled",
            get: function() {
              return "ontouchstart" in document.documentElement;
            }
          }]), e;
        }();
        const getConstructor = (input) => input !== null && typeof input !== "undefined" ? input.constructor : null;
        const instanceOf = (input, constructor) => Boolean(input && constructor && input instanceof constructor);
        const isNullOrUndefined = (input) => input === null || typeof input === "undefined";
        const isObject = (input) => getConstructor(input) === Object;
        const isNumber = (input) => getConstructor(input) === Number && !Number.isNaN(input);
        const isString = (input) => getConstructor(input) === String;
        const isBoolean = (input) => getConstructor(input) === Boolean;
        const isFunction = (input) => typeof input === "function";
        const isArray = (input) => Array.isArray(input);
        const isWeakMap = (input) => instanceOf(input, WeakMap);
        const isNodeList = (input) => instanceOf(input, NodeList);
        const isTextNode = (input) => getConstructor(input) === Text;
        const isEvent = (input) => instanceOf(input, Event);
        const isKeyboardEvent = (input) => instanceOf(input, KeyboardEvent);
        const isCue = (input) => instanceOf(input, window.TextTrackCue) || instanceOf(input, window.VTTCue);
        const isTrack = (input) => instanceOf(input, TextTrack) || !isNullOrUndefined(input) && isString(input.kind);
        const isPromise = (input) => instanceOf(input, Promise) && isFunction(input.then);
        const isElement = (input) => input !== null && typeof input === "object" && input.nodeType === 1 && typeof input.style === "object" && typeof input.ownerDocument === "object";
        const isEmpty = (input) => isNullOrUndefined(input) || (isString(input) || isArray(input) || isNodeList(input)) && !input.length || isObject(input) && !Object.keys(input).length;
        const isUrl = (input) => {
          if (instanceOf(input, window.URL)) {
            return true;
          }
          if (!isString(input)) {
            return false;
          }
          let string = input;
          if (!input.startsWith("http://") || !input.startsWith("https://")) {
            string = `http://${input}`;
          }
          try {
            return !isEmpty(new URL(string).hostname);
          } catch (_) {
            return false;
          }
        };
        var is = {
          nullOrUndefined: isNullOrUndefined,
          object: isObject,
          number: isNumber,
          string: isString,
          boolean: isBoolean,
          function: isFunction,
          array: isArray,
          weakMap: isWeakMap,
          nodeList: isNodeList,
          element: isElement,
          textNode: isTextNode,
          event: isEvent,
          keyboardEvent: isKeyboardEvent,
          cue: isCue,
          track: isTrack,
          promise: isPromise,
          url: isUrl,
          empty: isEmpty
        };
        const transitionEndEvent = (() => {
          const element = document.createElement("span");
          const events = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          };
          const type = Object.keys(events).find((event) => element.style[event] !== void 0);
          return is.string(type) ? events[type] : false;
        })();
        function repaint(element, delay) {
          setTimeout(() => {
            try {
              element.hidden = true;
              element.offsetHeight;
              element.hidden = false;
            } catch (_) {
            }
          }, delay);
        }
        const isIE = Boolean(window.document.documentMode);
        const isEdge = /Edge/g.test(navigator.userAgent);
        const isWebKit = "WebkitAppearance" in document.documentElement.style && !/Edge/g.test(navigator.userAgent);
        const isIPhone = /iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
        const isIPadOS = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
        const isIos = /iPad|iPhone|iPod/gi.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
        var browser = {
          isIE,
          isEdge,
          isWebKit,
          isIPhone,
          isIPadOS,
          isIos
        };
        function cloneDeep(object) {
          return JSON.parse(JSON.stringify(object));
        }
        function getDeep(object, path) {
          return path.split(".").reduce((obj, key) => obj && obj[key], object);
        }
        function extend(target = {}, ...sources) {
          if (!sources.length) {
            return target;
          }
          const source2 = sources.shift();
          if (!is.object(source2)) {
            return target;
          }
          Object.keys(source2).forEach((key) => {
            if (is.object(source2[key])) {
              if (!Object.keys(target).includes(key)) {
                Object.assign(target, {
                  [key]: {}
                });
              }
              extend(target[key], source2[key]);
            } else {
              Object.assign(target, {
                [key]: source2[key]
              });
            }
          });
          return extend(target, ...sources);
        }
        function wrap(elements, wrapper) {
          const targets = elements.length ? elements : [elements];
          Array.from(targets).reverse().forEach((element, index) => {
            const child = index > 0 ? wrapper.cloneNode(true) : wrapper;
            const parent = element.parentNode;
            const sibling = element.nextSibling;
            child.appendChild(element);
            if (sibling) {
              parent.insertBefore(child, sibling);
            } else {
              parent.appendChild(child);
            }
          });
        }
        function setAttributes(element, attributes) {
          if (!is.element(element) || is.empty(attributes))
            return;
          Object.entries(attributes).filter(([, value]) => !is.nullOrUndefined(value)).forEach(([key, value]) => element.setAttribute(key, value));
        }
        function createElement(type, attributes, text) {
          const element = document.createElement(type);
          if (is.object(attributes)) {
            setAttributes(element, attributes);
          }
          if (is.string(text)) {
            element.innerText = text;
          }
          return element;
        }
        function insertAfter(element, target) {
          if (!is.element(element) || !is.element(target))
            return;
          target.parentNode.insertBefore(element, target.nextSibling);
        }
        function insertElement(type, parent, attributes, text) {
          if (!is.element(parent))
            return;
          parent.appendChild(createElement(type, attributes, text));
        }
        function removeElement(element) {
          if (is.nodeList(element) || is.array(element)) {
            Array.from(element).forEach(removeElement);
            return;
          }
          if (!is.element(element) || !is.element(element.parentNode)) {
            return;
          }
          element.parentNode.removeChild(element);
        }
        function emptyElement(element) {
          if (!is.element(element))
            return;
          let {
            length
          } = element.childNodes;
          while (length > 0) {
            element.removeChild(element.lastChild);
            length -= 1;
          }
        }
        function replaceElement(newChild, oldChild) {
          if (!is.element(oldChild) || !is.element(oldChild.parentNode) || !is.element(newChild))
            return null;
          oldChild.parentNode.replaceChild(newChild, oldChild);
          return newChild;
        }
        function getAttributesFromSelector(sel, existingAttributes) {
          if (!is.string(sel) || is.empty(sel))
            return {};
          const attributes = {};
          const existing = extend({}, existingAttributes);
          sel.split(",").forEach((s) => {
            const selector = s.trim();
            const className = selector.replace(".", "");
            const stripped = selector.replace(/[[\]]/g, "");
            const parts = stripped.split("=");
            const [key] = parts;
            const value = parts.length > 1 ? parts[1].replace(/["']/g, "") : "";
            const start = selector.charAt(0);
            switch (start) {
              case ".":
                if (is.string(existing.class)) {
                  attributes.class = `${existing.class} ${className}`;
                } else {
                  attributes.class = className;
                }
                break;
              case "#":
                attributes.id = selector.replace("#", "");
                break;
              case "[":
                attributes[key] = value;
                break;
            }
          });
          return extend(existing, attributes);
        }
        function toggleHidden(element, hidden) {
          if (!is.element(element))
            return;
          let hide = hidden;
          if (!is.boolean(hide)) {
            hide = !element.hidden;
          }
          element.hidden = hide;
        }
        function toggleClass(element, className, force) {
          if (is.nodeList(element)) {
            return Array.from(element).map((e) => toggleClass(e, className, force));
          }
          if (is.element(element)) {
            let method = "toggle";
            if (typeof force !== "undefined") {
              method = force ? "add" : "remove";
            }
            element.classList[method](className);
            return element.classList.contains(className);
          }
          return false;
        }
        function hasClass(element, className) {
          return is.element(element) && element.classList.contains(className);
        }
        function matches(element, selector) {
          const {
            prototype
          } = Element;
          function match() {
            return Array.from(document.querySelectorAll(selector)).includes(this);
          }
          const method = prototype.matches || prototype.webkitMatchesSelector || prototype.mozMatchesSelector || prototype.msMatchesSelector || match;
          return method.call(element, selector);
        }
        function closest$1(element, selector) {
          const {
            prototype
          } = Element;
          function closestElement() {
            let el = this;
            do {
              if (matches.matches(el, selector))
                return el;
              el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
          }
          const method = prototype.closest || closestElement;
          return method.call(element, selector);
        }
        function getElements(selector) {
          return this.elements.container.querySelectorAll(selector);
        }
        function getElement(selector) {
          return this.elements.container.querySelector(selector);
        }
        function setFocus(element = null, focusVisible = false) {
          if (!is.element(element))
            return;
          element.focus({
            preventScroll: true,
            focusVisible
          });
        }
        const defaultCodecs = {
          "audio/ogg": "vorbis",
          "audio/wav": "1",
          "video/webm": "vp8, vorbis",
          "video/mp4": "avc1.42E01E, mp4a.40.2",
          "video/ogg": "theora"
        };
        const support = {
          audio: "canPlayType" in document.createElement("audio"),
          video: "canPlayType" in document.createElement("video"),
          check(type, provider) {
            const api = support[type] || provider !== "html5";
            const ui2 = api && support.rangeInput;
            return {
              api,
              ui: ui2
            };
          },
          pip: (() => {
            if (browser.isIPhone) {
              return false;
            }
            if (is.function(createElement("video").webkitSetPresentationMode)) {
              return true;
            }
            if (document.pictureInPictureEnabled && !createElement("video").disablePictureInPicture) {
              return true;
            }
            return false;
          })(),
          airplay: is.function(window.WebKitPlaybackTargetAvailabilityEvent),
          playsinline: "playsInline" in document.createElement("video"),
          mime(input) {
            if (is.empty(input)) {
              return false;
            }
            const [mediaType] = input.split("/");
            let type = input;
            if (!this.isHTML5 || mediaType !== this.type) {
              return false;
            }
            if (Object.keys(defaultCodecs).includes(type)) {
              type += `; codecs="${defaultCodecs[input]}"`;
            }
            try {
              return Boolean(type && this.media.canPlayType(type).replace(/no/, ""));
            } catch (_) {
              return false;
            }
          },
          textTracks: "textTracks" in document.createElement("video"),
          rangeInput: (() => {
            const range = document.createElement("input");
            range.type = "range";
            return range.type === "range";
          })(),
          touch: "ontouchstart" in document.documentElement,
          transitions: transitionEndEvent !== false,
          reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        };
        const supportsPassiveListeners = (() => {
          let supported = false;
          try {
            const options = Object.defineProperty({}, "passive", {
              get() {
                supported = true;
                return null;
              }
            });
            window.addEventListener("test", null, options);
            window.removeEventListener("test", null, options);
          } catch (_) {
          }
          return supported;
        })();
        function toggleListener(element, event, callback, toggle = false, passive = true, capture = false) {
          if (!element || !("addEventListener" in element) || is.empty(event) || !is.function(callback)) {
            return;
          }
          const events = event.split(" ");
          let options = capture;
          if (supportsPassiveListeners) {
            options = {
              passive,
              capture
            };
          }
          events.forEach((type) => {
            if (this && this.eventListeners && toggle) {
              this.eventListeners.push({
                element,
                type,
                callback,
                options
              });
            }
            element[toggle ? "addEventListener" : "removeEventListener"](type, callback, options);
          });
        }
        function on(element, events = "", callback, passive = true, capture = false) {
          toggleListener.call(this, element, events, callback, true, passive, capture);
        }
        function off(element, events = "", callback, passive = true, capture = false) {
          toggleListener.call(this, element, events, callback, false, passive, capture);
        }
        function once(element, events = "", callback, passive = true, capture = false) {
          const onceCallback = (...args) => {
            off(element, events, onceCallback, passive, capture);
            callback.apply(this, args);
          };
          toggleListener.call(this, element, events, onceCallback, true, passive, capture);
        }
        function triggerEvent(element, type = "", bubbles = false, detail = {}) {
          if (!is.element(element) || is.empty(type)) {
            return;
          }
          const event = new CustomEvent(type, {
            bubbles,
            detail: __spreadProps(__spreadValues({}, detail), {
              plyr: this
            })
          });
          element.dispatchEvent(event);
        }
        function unbindListeners() {
          if (this && this.eventListeners) {
            this.eventListeners.forEach((item) => {
              const {
                element,
                type,
                callback,
                options
              } = item;
              element.removeEventListener(type, callback, options);
            });
            this.eventListeners = [];
          }
        }
        function ready() {
          return new Promise((resolve) => this.ready ? setTimeout(resolve, 0) : on.call(this, this.elements.container, "ready", resolve)).then(() => {
          });
        }
        function silencePromise(value) {
          if (is.promise(value)) {
            value.then(null, () => {
            });
          }
        }
        function dedupe(array) {
          if (!is.array(array)) {
            return array;
          }
          return array.filter((item, index) => array.indexOf(item) === index);
        }
        function closest(array, value) {
          if (!is.array(array) || !array.length) {
            return null;
          }
          return array.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
        }
        function supportsCSS(declaration) {
          if (!window || !window.CSS) {
            return false;
          }
          return window.CSS.supports(declaration);
        }
        const standardRatios = [[1, 1], [4, 3], [3, 4], [5, 4], [4, 5], [3, 2], [2, 3], [16, 10], [10, 16], [16, 9], [9, 16], [21, 9], [9, 21], [32, 9], [9, 32]].reduce((out, [x, y]) => __spreadProps(__spreadValues({}, out), {
          [x / y]: [x, y]
        }), {});
        function validateAspectRatio(input) {
          if (!is.array(input) && (!is.string(input) || !input.includes(":"))) {
            return false;
          }
          const ratio = is.array(input) ? input : input.split(":");
          return ratio.map(Number).every(is.number);
        }
        function reduceAspectRatio(ratio) {
          if (!is.array(ratio) || !ratio.every(is.number)) {
            return null;
          }
          const [width, height] = ratio;
          const getDivider = (w, h) => h === 0 ? w : getDivider(h, w % h);
          const divider = getDivider(width, height);
          return [width / divider, height / divider];
        }
        function getAspectRatio(input) {
          const parse = (ratio2) => validateAspectRatio(ratio2) ? ratio2.split(":").map(Number) : null;
          let ratio = parse(input);
          if (ratio === null) {
            ratio = parse(this.config.ratio);
          }
          if (ratio === null && !is.empty(this.embed) && is.array(this.embed.ratio)) {
            ({
              ratio
            } = this.embed);
          }
          if (ratio === null && this.isHTML5) {
            const {
              videoWidth,
              videoHeight
            } = this.media;
            ratio = [videoWidth, videoHeight];
          }
          return reduceAspectRatio(ratio);
        }
        function setAspectRatio(input) {
          if (!this.isVideo) {
            return {};
          }
          const {
            wrapper
          } = this.elements;
          const ratio = getAspectRatio.call(this, input);
          if (!is.array(ratio)) {
            return {};
          }
          const [x, y] = reduceAspectRatio(ratio);
          const useNative = supportsCSS(`aspect-ratio: ${x}/${y}`);
          const padding = 100 / x * y;
          if (useNative) {
            wrapper.style.aspectRatio = `${x}/${y}`;
          } else {
            wrapper.style.paddingBottom = `${padding}%`;
          }
          if (this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            const height = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
            const offset = (height - padding) / (height / 50);
            if (this.fullscreen.active) {
              wrapper.style.paddingBottom = null;
            } else {
              this.media.style.transform = `translateY(-${offset}%)`;
            }
          } else if (this.isHTML5) {
            wrapper.classList.add(this.config.classNames.videoFixedRatio);
          }
          return {
            padding,
            ratio
          };
        }
        function roundAspectRatio(x, y, tolerance = 0.05) {
          const ratio = x / y;
          const closestRatio = closest(Object.keys(standardRatios), ratio);
          if (Math.abs(closestRatio - ratio) <= tolerance) {
            return standardRatios[closestRatio];
          }
          return [x, y];
        }
        function getViewportSize() {
          const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
          const height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
          return [width, height];
        }
        const html5 = {
          getSources() {
            if (!this.isHTML5) {
              return [];
            }
            const sources = Array.from(this.media.querySelectorAll("source"));
            return sources.filter((source2) => {
              const type = source2.getAttribute("type");
              if (is.empty(type)) {
                return true;
              }
              return support.mime.call(this, type);
            });
          },
          getQualityOptions() {
            if (this.config.quality.forced) {
              return this.config.quality.options;
            }
            return html5.getSources.call(this).map((source2) => Number(source2.getAttribute("size"))).filter(Boolean);
          },
          setup() {
            if (!this.isHTML5) {
              return;
            }
            const player = this;
            player.options.speed = player.config.speed.options;
            if (!is.empty(this.config.ratio)) {
              setAspectRatio.call(player);
            }
            Object.defineProperty(player.media, "quality", {
              get() {
                const sources = html5.getSources.call(player);
                const source2 = sources.find((s) => s.getAttribute("src") === player.source);
                return source2 && Number(source2.getAttribute("size"));
              },
              set(input) {
                if (player.quality === input) {
                  return;
                }
                if (player.config.quality.forced && is.function(player.config.quality.onChange)) {
                  player.config.quality.onChange(input);
                } else {
                  const sources = html5.getSources.call(player);
                  const source2 = sources.find((s) => Number(s.getAttribute("size")) === input);
                  if (!source2) {
                    return;
                  }
                  const {
                    currentTime,
                    paused,
                    preload,
                    readyState,
                    playbackRate
                  } = player.media;
                  player.media.src = source2.getAttribute("src");
                  if (preload !== "none" || readyState) {
                    player.once("loadedmetadata", () => {
                      player.speed = playbackRate;
                      player.currentTime = currentTime;
                      if (!paused) {
                        silencePromise(player.play());
                      }
                    });
                    player.media.load();
                  }
                }
                triggerEvent.call(player, player.media, "qualitychange", false, {
                  quality: input
                });
              }
            });
          },
          cancelRequests() {
            if (!this.isHTML5) {
              return;
            }
            removeElement(html5.getSources.call(this));
            this.media.setAttribute("src", this.config.blankVideo);
            this.media.load();
            this.debug.log("Cancelled network requests");
          }
        };
        function generateId(prefix) {
          return `${prefix}-${Math.floor(Math.random() * 1e4)}`;
        }
        function format(input, ...args) {
          if (is.empty(input))
            return input;
          return input.toString().replace(/{(\d+)}/g, (_, i) => args[i].toString());
        }
        function getPercentage(current, max) {
          if (current === 0 || max === 0 || Number.isNaN(current) || Number.isNaN(max)) {
            return 0;
          }
          return (current / max * 100).toFixed(2);
        }
        const replaceAll = (input = "", find = "", replace = "") => input.replace(new RegExp(find.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), replace.toString());
        const toTitleCase = (input = "") => input.toString().replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());
        function toPascalCase(input = "") {
          let string = input.toString();
          string = replaceAll(string, "-", " ");
          string = replaceAll(string, "_", " ");
          string = toTitleCase(string);
          return replaceAll(string, " ", "");
        }
        function toCamelCase(input = "") {
          let string = input.toString();
          string = toPascalCase(string);
          return string.charAt(0).toLowerCase() + string.slice(1);
        }
        function stripHTML(source2) {
          const fragment = document.createDocumentFragment();
          const element = document.createElement("div");
          fragment.appendChild(element);
          element.innerHTML = source2;
          return fragment.firstChild.innerText;
        }
        function getHTML(element) {
          const wrapper = document.createElement("div");
          wrapper.appendChild(element);
          return wrapper.innerHTML;
        }
        const resources = {
          pip: "PIP",
          airplay: "AirPlay",
          html5: "HTML5",
          vimeo: "Vimeo",
          youtube: "YouTube"
        };
        const i18n = {
          get(key = "", config = {}) {
            if (is.empty(key) || is.empty(config)) {
              return "";
            }
            let string = getDeep(config.i18n, key);
            if (is.empty(string)) {
              if (Object.keys(resources).includes(key)) {
                return resources[key];
              }
              return "";
            }
            const replace = {
              "{seektime}": config.seekTime,
              "{title}": config.title
            };
            Object.entries(replace).forEach(([k, v]) => {
              string = replaceAll(string, k, v);
            });
            return string;
          }
        };
        class Storage {
          constructor(player) {
            _defineProperty$1(this, "get", (key) => {
              if (!Storage.supported || !this.enabled) {
                return null;
              }
              const store = window.localStorage.getItem(this.key);
              if (is.empty(store)) {
                return null;
              }
              const json = JSON.parse(store);
              return is.string(key) && key.length ? json[key] : json;
            });
            _defineProperty$1(this, "set", (object) => {
              if (!Storage.supported || !this.enabled) {
                return;
              }
              if (!is.object(object)) {
                return;
              }
              let storage = this.get();
              if (is.empty(storage)) {
                storage = {};
              }
              extend(storage, object);
              try {
                window.localStorage.setItem(this.key, JSON.stringify(storage));
              } catch (_) {
              }
            });
            this.enabled = player.config.storage.enabled;
            this.key = player.config.storage.key;
          }
          static get supported() {
            try {
              if (!("localStorage" in window)) {
                return false;
              }
              const test = "___test";
              window.localStorage.setItem(test, test);
              window.localStorage.removeItem(test);
              return true;
            } catch (_) {
              return false;
            }
          }
        }
        function fetch(url, responseType = "text") {
          return new Promise((resolve, reject) => {
            try {
              const request = new XMLHttpRequest();
              if (!("withCredentials" in request)) {
                return;
              }
              request.addEventListener("load", () => {
                if (responseType === "text") {
                  try {
                    resolve(JSON.parse(request.responseText));
                  } catch (_) {
                    resolve(request.responseText);
                  }
                } else {
                  resolve(request.response);
                }
              });
              request.addEventListener("error", () => {
                throw new Error(request.status);
              });
              request.open("GET", url, true);
              request.responseType = responseType;
              request.send();
            } catch (error) {
              reject(error);
            }
          });
        }
        function loadSprite(url, id) {
          if (!is.string(url)) {
            return;
          }
          const prefix = "cache";
          const hasId = is.string(id);
          let isCached = false;
          const exists = () => document.getElementById(id) !== null;
          const update = (container, data) => {
            container.innerHTML = data;
            if (hasId && exists()) {
              return;
            }
            document.body.insertAdjacentElement("afterbegin", container);
          };
          if (!hasId || !exists()) {
            const useStorage = Storage.supported;
            const container = document.createElement("div");
            container.setAttribute("hidden", "");
            if (hasId) {
              container.setAttribute("id", id);
            }
            if (useStorage) {
              const cached = window.localStorage.getItem(`${prefix}-${id}`);
              isCached = cached !== null;
              if (isCached) {
                const data = JSON.parse(cached);
                update(container, data.content);
              }
            }
            fetch(url).then((result) => {
              if (is.empty(result)) {
                return;
              }
              if (useStorage) {
                try {
                  window.localStorage.setItem(`${prefix}-${id}`, JSON.stringify({
                    content: result
                  }));
                } catch (_) {
                }
              }
              update(container, result);
            }).catch(() => {
            });
          }
        }
        const getHours = (value) => Math.trunc(value / 60 / 60 % 60, 10);
        const getMinutes = (value) => Math.trunc(value / 60 % 60, 10);
        const getSeconds = (value) => Math.trunc(value % 60, 10);
        function formatTime(time = 0, displayHours = false, inverted = false) {
          if (!is.number(time)) {
            return formatTime(void 0, displayHours, inverted);
          }
          const format2 = (value) => `0${value}`.slice(-2);
          let hours = getHours(time);
          const mins = getMinutes(time);
          const secs = getSeconds(time);
          if (displayHours || hours > 0) {
            hours = `${hours}:`;
          } else {
            hours = "";
          }
          return `${inverted && time > 0 ? "-" : ""}${hours}${format2(mins)}:${format2(secs)}`;
        }
        const controls = {
          getIconUrl() {
            const url = new URL(this.config.iconUrl, window.location);
            const host = window.location.host ? window.location.host : window.top.location.host;
            const cors = url.host !== host || browser.isIE && !window.svg4everybody;
            return {
              url: this.config.iconUrl,
              cors
            };
          },
          findElements() {
            try {
              this.elements.controls = getElement.call(this, this.config.selectors.controls.wrapper);
              this.elements.buttons = {
                play: getElements.call(this, this.config.selectors.buttons.play),
                pause: getElement.call(this, this.config.selectors.buttons.pause),
                restart: getElement.call(this, this.config.selectors.buttons.restart),
                rewind: getElement.call(this, this.config.selectors.buttons.rewind),
                fastForward: getElement.call(this, this.config.selectors.buttons.fastForward),
                mute: getElement.call(this, this.config.selectors.buttons.mute),
                pip: getElement.call(this, this.config.selectors.buttons.pip),
                airplay: getElement.call(this, this.config.selectors.buttons.airplay),
                settings: getElement.call(this, this.config.selectors.buttons.settings),
                captions: getElement.call(this, this.config.selectors.buttons.captions),
                fullscreen: getElement.call(this, this.config.selectors.buttons.fullscreen)
              };
              this.elements.progress = getElement.call(this, this.config.selectors.progress);
              this.elements.inputs = {
                seek: getElement.call(this, this.config.selectors.inputs.seek),
                volume: getElement.call(this, this.config.selectors.inputs.volume)
              };
              this.elements.display = {
                buffer: getElement.call(this, this.config.selectors.display.buffer),
                currentTime: getElement.call(this, this.config.selectors.display.currentTime),
                duration: getElement.call(this, this.config.selectors.display.duration)
              };
              if (is.element(this.elements.progress)) {
                this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`);
              }
              return true;
            } catch (error) {
              this.debug.warn("It looks like there is a problem with your custom controls HTML", error);
              this.toggleNativeControls(true);
              return false;
            }
          },
          createIcon(type, attributes) {
            const namespace = "http://www.w3.org/2000/svg";
            const iconUrl = controls.getIconUrl.call(this);
            const iconPath = `${!iconUrl.cors ? iconUrl.url : ""}#${this.config.iconPrefix}`;
            const icon = document.createElementNS(namespace, "svg");
            setAttributes(icon, extend(attributes, {
              "aria-hidden": "true",
              focusable: "false"
            }));
            const use = document.createElementNS(namespace, "use");
            const path = `${iconPath}-${type}`;
            if ("href" in use) {
              use.setAttributeNS("http://www.w3.org/1999/xlink", "href", path);
            }
            use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", path);
            icon.appendChild(use);
            return icon;
          },
          createLabel(key, attr = {}) {
            const text = i18n.get(key, this.config);
            const attributes = __spreadProps(__spreadValues({}, attr), {
              class: [attr.class, this.config.classNames.hidden].filter(Boolean).join(" ")
            });
            return createElement("span", attributes, text);
          },
          createBadge(text) {
            if (is.empty(text)) {
              return null;
            }
            const badge = createElement("span", {
              class: this.config.classNames.menu.value
            });
            badge.appendChild(createElement("span", {
              class: this.config.classNames.menu.badge
            }, text));
            return badge;
          },
          createButton(buttonType, attr) {
            const attributes = extend({}, attr);
            let type = toCamelCase(buttonType);
            const props = {
              element: "button",
              toggle: false,
              label: null,
              icon: null,
              labelPressed: null,
              iconPressed: null
            };
            ["element", "icon", "label"].forEach((key) => {
              if (Object.keys(attributes).includes(key)) {
                props[key] = attributes[key];
                delete attributes[key];
              }
            });
            if (props.element === "button" && !Object.keys(attributes).includes("type")) {
              attributes.type = "button";
            }
            if (Object.keys(attributes).includes("class")) {
              if (!attributes.class.split(" ").some((c) => c === this.config.classNames.control)) {
                extend(attributes, {
                  class: `${attributes.class} ${this.config.classNames.control}`
                });
              }
            } else {
              attributes.class = this.config.classNames.control;
            }
            switch (buttonType) {
              case "play":
                props.toggle = true;
                props.label = "play";
                props.labelPressed = "pause";
                props.icon = "play";
                props.iconPressed = "pause";
                break;
              case "mute":
                props.toggle = true;
                props.label = "mute";
                props.labelPressed = "unmute";
                props.icon = "volume";
                props.iconPressed = "muted";
                break;
              case "captions":
                props.toggle = true;
                props.label = "enableCaptions";
                props.labelPressed = "disableCaptions";
                props.icon = "captions-off";
                props.iconPressed = "captions-on";
                break;
              case "fullscreen":
                props.toggle = true;
                props.label = "enterFullscreen";
                props.labelPressed = "exitFullscreen";
                props.icon = "enter-fullscreen";
                props.iconPressed = "exit-fullscreen";
                break;
              case "play-large":
                attributes.class += ` ${this.config.classNames.control}--overlaid`;
                type = "play";
                props.label = "play";
                props.icon = "play";
                break;
              default:
                if (is.empty(props.label)) {
                  props.label = type;
                }
                if (is.empty(props.icon)) {
                  props.icon = buttonType;
                }
            }
            const button = createElement(props.element);
            if (props.toggle) {
              button.appendChild(controls.createIcon.call(this, props.iconPressed, {
                class: "icon--pressed"
              }));
              button.appendChild(controls.createIcon.call(this, props.icon, {
                class: "icon--not-pressed"
              }));
              button.appendChild(controls.createLabel.call(this, props.labelPressed, {
                class: "label--pressed"
              }));
              button.appendChild(controls.createLabel.call(this, props.label, {
                class: "label--not-pressed"
              }));
            } else {
              button.appendChild(controls.createIcon.call(this, props.icon));
              button.appendChild(controls.createLabel.call(this, props.label));
            }
            extend(attributes, getAttributesFromSelector(this.config.selectors.buttons[type], attributes));
            setAttributes(button, attributes);
            if (type === "play") {
              if (!is.array(this.elements.buttons[type])) {
                this.elements.buttons[type] = [];
              }
              this.elements.buttons[type].push(button);
            } else {
              this.elements.buttons[type] = button;
            }
            return button;
          },
          createRange(type, attributes) {
            const input = createElement("input", extend(getAttributesFromSelector(this.config.selectors.inputs[type]), {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": i18n.get(type, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0
            }, attributes));
            this.elements.inputs[type] = input;
            controls.updateRangeFill.call(this, input);
            RangeTouch.setup(input);
            return input;
          },
          createProgress(type, attributes) {
            const progress = createElement("progress", extend(getAttributesFromSelector(this.config.selectors.display[type]), {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": true
            }, attributes));
            if (type !== "volume") {
              progress.appendChild(createElement("span", null, "0"));
              const suffixKey = {
                played: "played",
                buffer: "buffered"
              }[type];
              const suffix = suffixKey ? i18n.get(suffixKey, this.config) : "";
              progress.innerText = `% ${suffix.toLowerCase()}`;
            }
            this.elements.display[type] = progress;
            return progress;
          },
          createTime(type, attrs) {
            const attributes = getAttributesFromSelector(this.config.selectors.display[type], attrs);
            const container = createElement("div", extend(attributes, {
              class: `${attributes.class ? attributes.class : ""} ${this.config.classNames.display.time} `.trim(),
              "aria-label": i18n.get(type, this.config),
              role: "timer"
            }), "00:00");
            this.elements.display[type] = container;
            return container;
          },
          bindMenuItemShortcuts(menuItem, type) {
            on.call(this, menuItem, "keydown keyup", (event) => {
              if (![" ", "ArrowUp", "ArrowDown", "ArrowRight"].includes(event.key)) {
                return;
              }
              event.preventDefault();
              event.stopPropagation();
              if (event.type === "keydown") {
                return;
              }
              const isRadioButton = matches(menuItem, '[role="menuitemradio"]');
              if (!isRadioButton && [" ", "ArrowRight"].includes(event.key)) {
                controls.showMenuPanel.call(this, type, true);
              } else {
                let target;
                if (event.key !== " ") {
                  if (event.key === "ArrowDown" || isRadioButton && event.key === "ArrowRight") {
                    target = menuItem.nextElementSibling;
                    if (!is.element(target)) {
                      target = menuItem.parentNode.firstElementChild;
                    }
                  } else {
                    target = menuItem.previousElementSibling;
                    if (!is.element(target)) {
                      target = menuItem.parentNode.lastElementChild;
                    }
                  }
                  setFocus.call(this, target, true);
                }
              }
            }, false);
            on.call(this, menuItem, "keyup", (event) => {
              if (event.key !== "Return")
                return;
              controls.focusFirstMenuItem.call(this, null, true);
            });
          },
          createMenuItem({
            value,
            list,
            type,
            title,
            badge = null,
            checked = false
          }) {
            const attributes = getAttributesFromSelector(this.config.selectors.inputs[type]);
            const menuItem = createElement("button", extend(attributes, {
              type: "button",
              role: "menuitemradio",
              class: `${this.config.classNames.control} ${attributes.class ? attributes.class : ""}`.trim(),
              "aria-checked": checked,
              value
            }));
            const flex = createElement("span");
            flex.innerHTML = title;
            if (is.element(badge)) {
              flex.appendChild(badge);
            }
            menuItem.appendChild(flex);
            Object.defineProperty(menuItem, "checked", {
              enumerable: true,
              get() {
                return menuItem.getAttribute("aria-checked") === "true";
              },
              set(check) {
                if (check) {
                  Array.from(menuItem.parentNode.children).filter((node) => matches(node, '[role="menuitemradio"]')).forEach((node) => node.setAttribute("aria-checked", "false"));
                }
                menuItem.setAttribute("aria-checked", check ? "true" : "false");
              }
            });
            this.listeners.bind(menuItem, "click keyup", (event) => {
              if (is.keyboardEvent(event) && event.key !== " ") {
                return;
              }
              event.preventDefault();
              event.stopPropagation();
              menuItem.checked = true;
              switch (type) {
                case "language":
                  this.currentTrack = Number(value);
                  break;
                case "quality":
                  this.quality = value;
                  break;
                case "speed":
                  this.speed = parseFloat(value);
                  break;
              }
              controls.showMenuPanel.call(this, "home", is.keyboardEvent(event));
            }, type, false);
            controls.bindMenuItemShortcuts.call(this, menuItem, type);
            list.appendChild(menuItem);
          },
          formatTime(time = 0, inverted = false) {
            if (!is.number(time)) {
              return time;
            }
            const forceHours = getHours(this.duration) > 0;
            return formatTime(time, forceHours, inverted);
          },
          updateTimeDisplay(target = null, time = 0, inverted = false) {
            if (!is.element(target) || !is.number(time)) {
              return;
            }
            target.innerText = controls.formatTime(time, inverted);
          },
          updateVolume() {
            if (!this.supported.ui) {
              return;
            }
            if (is.element(this.elements.inputs.volume)) {
              controls.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume);
            }
            if (is.element(this.elements.buttons.mute)) {
              this.elements.buttons.mute.pressed = this.muted || this.volume === 0;
            }
          },
          setRange(target, value = 0) {
            if (!is.element(target)) {
              return;
            }
            target.value = value;
            controls.updateRangeFill.call(this, target);
          },
          updateProgress(event) {
            if (!this.supported.ui || !is.event(event)) {
              return;
            }
            let value = 0;
            const setProgress = (target, input) => {
              const val = is.number(input) ? input : 0;
              const progress = is.element(target) ? target : this.elements.display.buffer;
              if (is.element(progress)) {
                progress.value = val;
                const label = progress.getElementsByTagName("span")[0];
                if (is.element(label)) {
                  label.childNodes[0].nodeValue = val;
                }
              }
            };
            if (event) {
              switch (event.type) {
                case "timeupdate":
                case "seeking":
                case "seeked":
                  value = getPercentage(this.currentTime, this.duration);
                  if (event.type === "timeupdate") {
                    controls.setRange.call(this, this.elements.inputs.seek, value);
                  }
                  break;
                case "playing":
                case "progress":
                  setProgress(this.elements.display.buffer, this.buffered * 100);
                  break;
              }
            }
          },
          updateRangeFill(target) {
            const range = is.event(target) ? target.target : target;
            if (!is.element(range) || range.getAttribute("type") !== "range") {
              return;
            }
            if (matches(range, this.config.selectors.inputs.seek)) {
              range.setAttribute("aria-valuenow", this.currentTime);
              const currentTime = controls.formatTime(this.currentTime);
              const duration = controls.formatTime(this.duration);
              const format2 = i18n.get("seekLabel", this.config);
              range.setAttribute("aria-valuetext", format2.replace("{currentTime}", currentTime).replace("{duration}", duration));
            } else if (matches(range, this.config.selectors.inputs.volume)) {
              const percent = range.value * 100;
              range.setAttribute("aria-valuenow", percent);
              range.setAttribute("aria-valuetext", `${percent.toFixed(1)}%`);
            } else {
              range.setAttribute("aria-valuenow", range.value);
            }
            if (!browser.isWebKit && !browser.isIPadOS) {
              return;
            }
            range.style.setProperty("--value", `${range.value / range.max * 100}%`);
          },
          updateSeekTooltip(event) {
            var _this$config$markers, _this$config$markers$;
            if (!this.config.tooltips.seek || !is.element(this.elements.inputs.seek) || !is.element(this.elements.display.seekTooltip) || this.duration === 0) {
              return;
            }
            const tipElement = this.elements.display.seekTooltip;
            const visible = `${this.config.classNames.tooltip}--visible`;
            const toggle = (show) => toggleClass(tipElement, visible, show);
            if (this.touch) {
              toggle(false);
              return;
            }
            let percent = 0;
            const clientRect = this.elements.progress.getBoundingClientRect();
            if (is.event(event)) {
              percent = 100 / clientRect.width * (event.pageX - clientRect.left);
            } else if (hasClass(tipElement, visible)) {
              percent = parseFloat(tipElement.style.left, 10);
            } else {
              return;
            }
            if (percent < 0) {
              percent = 0;
            } else if (percent > 100) {
              percent = 100;
            }
            const time = this.duration / 100 * percent;
            tipElement.innerText = controls.formatTime(time);
            const point = (_this$config$markers = this.config.markers) === null || _this$config$markers === void 0 ? void 0 : (_this$config$markers$ = _this$config$markers.points) === null || _this$config$markers$ === void 0 ? void 0 : _this$config$markers$.find(({
              time: t
            }) => t === Math.round(time));
            if (point) {
              tipElement.insertAdjacentHTML("afterbegin", `${point.label}<br>`);
            }
            tipElement.style.left = `${percent}%`;
            if (is.event(event) && ["mouseenter", "mouseleave"].includes(event.type)) {
              toggle(event.type === "mouseenter");
            }
          },
          timeUpdate(event) {
            const invert = !is.element(this.elements.display.duration) && this.config.invertTime;
            controls.updateTimeDisplay.call(this, this.elements.display.currentTime, invert ? this.duration - this.currentTime : this.currentTime, invert);
            if (event && event.type === "timeupdate" && this.media.seeking) {
              return;
            }
            controls.updateProgress.call(this, event);
          },
          durationUpdate() {
            if (!this.supported.ui || !this.config.invertTime && this.currentTime) {
              return;
            }
            if (this.duration >= 2 ** 32) {
              toggleHidden(this.elements.display.currentTime, true);
              toggleHidden(this.elements.progress, true);
              return;
            }
            if (is.element(this.elements.inputs.seek)) {
              this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
            }
            const hasDuration = is.element(this.elements.display.duration);
            if (!hasDuration && this.config.displayDuration && this.paused) {
              controls.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration);
            }
            if (hasDuration) {
              controls.updateTimeDisplay.call(this, this.elements.display.duration, this.duration);
            }
            if (this.config.markers.enabled) {
              controls.setMarkers.call(this);
            }
            controls.updateSeekTooltip.call(this);
          },
          toggleMenuButton(setting, toggle) {
            toggleHidden(this.elements.settings.buttons[setting], !toggle);
          },
          updateSetting(setting, container, input) {
            const pane = this.elements.settings.panels[setting];
            let value = null;
            let list = container;
            if (setting === "captions") {
              value = this.currentTrack;
            } else {
              value = !is.empty(input) ? input : this[setting];
              if (is.empty(value)) {
                value = this.config[setting].default;
              }
              if (!is.empty(this.options[setting]) && !this.options[setting].includes(value)) {
                this.debug.warn(`Unsupported value of '${value}' for ${setting}`);
                return;
              }
              if (!this.config[setting].options.includes(value)) {
                this.debug.warn(`Disabled value of '${value}' for ${setting}`);
                return;
              }
            }
            if (!is.element(list)) {
              list = pane && pane.querySelector('[role="menu"]');
            }
            if (!is.element(list)) {
              return;
            }
            const label = this.elements.settings.buttons[setting].querySelector(`.${this.config.classNames.menu.value}`);
            label.innerHTML = controls.getLabel.call(this, setting, value);
            const target = list && list.querySelector(`[value="${value}"]`);
            if (is.element(target)) {
              target.checked = true;
            }
          },
          getLabel(setting, value) {
            switch (setting) {
              case "speed":
                return value === 1 ? i18n.get("normal", this.config) : `${value}&times;`;
              case "quality":
                if (is.number(value)) {
                  const label = i18n.get(`qualityLabel.${value}`, this.config);
                  if (!label.length) {
                    return `${value}p`;
                  }
                  return label;
                }
                return toTitleCase(value);
              case "captions":
                return captions.getLabel.call(this);
              default:
                return null;
            }
          },
          setQualityMenu(options) {
            if (!is.element(this.elements.settings.panels.quality)) {
              return;
            }
            const type = "quality";
            const list = this.elements.settings.panels.quality.querySelector('[role="menu"]');
            if (is.array(options)) {
              this.options.quality = dedupe(options).filter((quality) => this.config.quality.options.includes(quality));
            }
            const toggle = !is.empty(this.options.quality) && this.options.quality.length > 1;
            controls.toggleMenuButton.call(this, type, toggle);
            emptyElement(list);
            controls.checkMenu.call(this);
            if (!toggle) {
              return;
            }
            const getBadge = (quality) => {
              const label = i18n.get(`qualityBadge.${quality}`, this.config);
              if (!label.length) {
                return null;
              }
              return controls.createBadge.call(this, label);
            };
            this.options.quality.sort((a, b) => {
              const sorting = this.config.quality.options;
              return sorting.indexOf(a) > sorting.indexOf(b) ? 1 : -1;
            }).forEach((quality) => {
              controls.createMenuItem.call(this, {
                value: quality,
                list,
                type,
                title: controls.getLabel.call(this, "quality", quality),
                badge: getBadge(quality)
              });
            });
            controls.updateSetting.call(this, type, list);
          },
          setCaptionsMenu() {
            if (!is.element(this.elements.settings.panels.captions)) {
              return;
            }
            const type = "captions";
            const list = this.elements.settings.panels.captions.querySelector('[role="menu"]');
            const tracks = captions.getTracks.call(this);
            const toggle = Boolean(tracks.length);
            controls.toggleMenuButton.call(this, type, toggle);
            emptyElement(list);
            controls.checkMenu.call(this);
            if (!toggle) {
              return;
            }
            const options = tracks.map((track, value) => ({
              value,
              checked: this.captions.toggled && this.currentTrack === value,
              title: captions.getLabel.call(this, track),
              badge: track.language && controls.createBadge.call(this, track.language.toUpperCase()),
              list,
              type: "language"
            }));
            options.unshift({
              value: -1,
              checked: !this.captions.toggled,
              title: i18n.get("disabled", this.config),
              list,
              type: "language"
            });
            options.forEach(controls.createMenuItem.bind(this));
            controls.updateSetting.call(this, type, list);
          },
          setSpeedMenu() {
            if (!is.element(this.elements.settings.panels.speed)) {
              return;
            }
            const type = "speed";
            const list = this.elements.settings.panels.speed.querySelector('[role="menu"]');
            this.options.speed = this.options.speed.filter((o) => o >= this.minimumSpeed && o <= this.maximumSpeed);
            const toggle = !is.empty(this.options.speed) && this.options.speed.length > 1;
            controls.toggleMenuButton.call(this, type, toggle);
            emptyElement(list);
            controls.checkMenu.call(this);
            if (!toggle) {
              return;
            }
            this.options.speed.forEach((speed) => {
              controls.createMenuItem.call(this, {
                value: speed,
                list,
                type,
                title: controls.getLabel.call(this, "speed", speed)
              });
            });
            controls.updateSetting.call(this, type, list);
          },
          checkMenu() {
            const {
              buttons
            } = this.elements.settings;
            const visible = !is.empty(buttons) && Object.values(buttons).some((button) => !button.hidden);
            toggleHidden(this.elements.settings.menu, !visible);
          },
          focusFirstMenuItem(pane, focusVisible = false) {
            if (this.elements.settings.popup.hidden) {
              return;
            }
            let target = pane;
            if (!is.element(target)) {
              target = Object.values(this.elements.settings.panels).find((p) => !p.hidden);
            }
            const firstItem = target.querySelector('[role^="menuitem"]');
            setFocus.call(this, firstItem, focusVisible);
          },
          toggleMenu(input) {
            const {
              popup
            } = this.elements.settings;
            const button = this.elements.buttons.settings;
            if (!is.element(popup) || !is.element(button)) {
              return;
            }
            const {
              hidden
            } = popup;
            let show = hidden;
            if (is.boolean(input)) {
              show = input;
            } else if (is.keyboardEvent(input) && input.key === "Escape") {
              show = false;
            } else if (is.event(input)) {
              const target = is.function(input.composedPath) ? input.composedPath()[0] : input.target;
              const isMenuItem = popup.contains(target);
              if (isMenuItem || !isMenuItem && input.target !== button && show) {
                return;
              }
            }
            button.setAttribute("aria-expanded", show);
            toggleHidden(popup, !show);
            toggleClass(this.elements.container, this.config.classNames.menu.open, show);
            if (show && is.keyboardEvent(input)) {
              controls.focusFirstMenuItem.call(this, null, true);
            } else if (!show && !hidden) {
              setFocus.call(this, button, is.keyboardEvent(input));
            }
          },
          getMenuSize(tab) {
            const clone = tab.cloneNode(true);
            clone.style.position = "absolute";
            clone.style.opacity = 0;
            clone.removeAttribute("hidden");
            tab.parentNode.appendChild(clone);
            const width = clone.scrollWidth;
            const height = clone.scrollHeight;
            removeElement(clone);
            return {
              width,
              height
            };
          },
          showMenuPanel(type = "", focusVisible = false) {
            const target = this.elements.container.querySelector(`#plyr-settings-${this.id}-${type}`);
            if (!is.element(target)) {
              return;
            }
            const container = target.parentNode;
            const current = Array.from(container.children).find((node) => !node.hidden);
            if (support.transitions && !support.reducedMotion) {
              container.style.width = `${current.scrollWidth}px`;
              container.style.height = `${current.scrollHeight}px`;
              const size = controls.getMenuSize.call(this, target);
              const restore = (event) => {
                if (event.target !== container || !["width", "height"].includes(event.propertyName)) {
                  return;
                }
                container.style.width = "";
                container.style.height = "";
                off.call(this, container, transitionEndEvent, restore);
              };
              on.call(this, container, transitionEndEvent, restore);
              container.style.width = `${size.width}px`;
              container.style.height = `${size.height}px`;
            }
            toggleHidden(current, true);
            toggleHidden(target, false);
            controls.focusFirstMenuItem.call(this, target, focusVisible);
          },
          setDownloadUrl() {
            const button = this.elements.buttons.download;
            if (!is.element(button)) {
              return;
            }
            button.setAttribute("href", this.download);
          },
          create(data) {
            const {
              bindMenuItemShortcuts,
              createButton,
              createProgress,
              createRange,
              createTime,
              setQualityMenu,
              setSpeedMenu,
              showMenuPanel
            } = controls;
            this.elements.controls = null;
            if (is.array(this.config.controls) && this.config.controls.includes("play-large")) {
              this.elements.container.appendChild(createButton.call(this, "play-large"));
            }
            const container = createElement("div", getAttributesFromSelector(this.config.selectors.controls.wrapper));
            this.elements.controls = container;
            const defaultAttributes = {
              class: "plyr__controls__item"
            };
            dedupe(is.array(this.config.controls) ? this.config.controls : []).forEach((control) => {
              if (control === "restart") {
                container.appendChild(createButton.call(this, "restart", defaultAttributes));
              }
              if (control === "rewind") {
                container.appendChild(createButton.call(this, "rewind", defaultAttributes));
              }
              if (control === "play") {
                container.appendChild(createButton.call(this, "play", defaultAttributes));
              }
              if (control === "fast-forward") {
                container.appendChild(createButton.call(this, "fast-forward", defaultAttributes));
              }
              if (control === "progress") {
                const progressContainer = createElement("div", {
                  class: `${defaultAttributes.class} plyr__progress__container`
                });
                const progress = createElement("div", getAttributesFromSelector(this.config.selectors.progress));
                progress.appendChild(createRange.call(this, "seek", {
                  id: `plyr-seek-${data.id}`
                }));
                progress.appendChild(createProgress.call(this, "buffer"));
                if (this.config.tooltips.seek) {
                  const tooltip = createElement("span", {
                    class: this.config.classNames.tooltip
                  }, "00:00");
                  progress.appendChild(tooltip);
                  this.elements.display.seekTooltip = tooltip;
                }
                this.elements.progress = progress;
                progressContainer.appendChild(this.elements.progress);
                container.appendChild(progressContainer);
              }
              if (control === "current-time") {
                container.appendChild(createTime.call(this, "currentTime", defaultAttributes));
              }
              if (control === "duration") {
                container.appendChild(createTime.call(this, "duration", defaultAttributes));
              }
              if (control === "mute" || control === "volume") {
                let {
                  volume
                } = this.elements;
                if (!is.element(volume) || !container.contains(volume)) {
                  volume = createElement("div", extend({}, defaultAttributes, {
                    class: `${defaultAttributes.class} plyr__volume`.trim()
                  }));
                  this.elements.volume = volume;
                  container.appendChild(volume);
                }
                if (control === "mute") {
                  volume.appendChild(createButton.call(this, "mute"));
                }
                if (control === "volume" && !browser.isIos && !browser.isIPadOS) {
                  const attributes = {
                    max: 1,
                    step: 0.05,
                    value: this.config.volume
                  };
                  volume.appendChild(createRange.call(this, "volume", extend(attributes, {
                    id: `plyr-volume-${data.id}`
                  })));
                }
              }
              if (control === "captions") {
                container.appendChild(createButton.call(this, "captions", defaultAttributes));
              }
              if (control === "settings" && !is.empty(this.config.settings)) {
                const wrapper = createElement("div", extend({}, defaultAttributes, {
                  class: `${defaultAttributes.class} plyr__menu`.trim(),
                  hidden: ""
                }));
                wrapper.appendChild(createButton.call(this, "settings", {
                  "aria-haspopup": true,
                  "aria-controls": `plyr-settings-${data.id}`,
                  "aria-expanded": false
                }));
                const popup = createElement("div", {
                  class: "plyr__menu__container",
                  id: `plyr-settings-${data.id}`,
                  hidden: ""
                });
                const inner = createElement("div");
                const home = createElement("div", {
                  id: `plyr-settings-${data.id}-home`
                });
                const menu = createElement("div", {
                  role: "menu"
                });
                home.appendChild(menu);
                inner.appendChild(home);
                this.elements.settings.panels.home = home;
                this.config.settings.forEach((type) => {
                  const menuItem = createElement("button", extend(getAttributesFromSelector(this.config.selectors.buttons.settings), {
                    type: "button",
                    class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                    role: "menuitem",
                    "aria-haspopup": true,
                    hidden: ""
                  }));
                  bindMenuItemShortcuts.call(this, menuItem, type);
                  on.call(this, menuItem, "click", () => {
                    showMenuPanel.call(this, type, false);
                  });
                  const flex = createElement("span", null, i18n.get(type, this.config));
                  const value = createElement("span", {
                    class: this.config.classNames.menu.value
                  });
                  value.innerHTML = data[type];
                  flex.appendChild(value);
                  menuItem.appendChild(flex);
                  menu.appendChild(menuItem);
                  const pane = createElement("div", {
                    id: `plyr-settings-${data.id}-${type}`,
                    hidden: ""
                  });
                  const backButton = createElement("button", {
                    type: "button",
                    class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                  });
                  backButton.appendChild(createElement("span", {
                    "aria-hidden": true
                  }, i18n.get(type, this.config)));
                  backButton.appendChild(createElement("span", {
                    class: this.config.classNames.hidden
                  }, i18n.get("menuBack", this.config)));
                  on.call(this, pane, "keydown", (event) => {
                    if (event.key !== "ArrowLeft")
                      return;
                    event.preventDefault();
                    event.stopPropagation();
                    showMenuPanel.call(this, "home", true);
                  }, false);
                  on.call(this, backButton, "click", () => {
                    showMenuPanel.call(this, "home", false);
                  });
                  pane.appendChild(backButton);
                  pane.appendChild(createElement("div", {
                    role: "menu"
                  }));
                  inner.appendChild(pane);
                  this.elements.settings.buttons[type] = menuItem;
                  this.elements.settings.panels[type] = pane;
                });
                popup.appendChild(inner);
                wrapper.appendChild(popup);
                container.appendChild(wrapper);
                this.elements.settings.popup = popup;
                this.elements.settings.menu = wrapper;
              }
              if (control === "pip" && support.pip) {
                container.appendChild(createButton.call(this, "pip", defaultAttributes));
              }
              if (control === "airplay" && support.airplay) {
                container.appendChild(createButton.call(this, "airplay", defaultAttributes));
              }
              if (control === "download") {
                const attributes = extend({}, defaultAttributes, {
                  element: "a",
                  href: this.download,
                  target: "_blank"
                });
                if (this.isHTML5) {
                  attributes.download = "";
                }
                const {
                  download
                } = this.config.urls;
                if (!is.url(download) && this.isEmbed) {
                  extend(attributes, {
                    icon: `logo-${this.provider}`,
                    label: this.provider
                  });
                }
                container.appendChild(createButton.call(this, "download", attributes));
              }
              if (control === "fullscreen") {
                container.appendChild(createButton.call(this, "fullscreen", defaultAttributes));
              }
            });
            if (this.isHTML5) {
              setQualityMenu.call(this, html5.getQualityOptions.call(this));
            }
            setSpeedMenu.call(this);
            return container;
          },
          inject() {
            if (this.config.loadSprite) {
              const icon = controls.getIconUrl.call(this);
              if (icon.cors) {
                loadSprite(icon.url, "sprite-plyr");
              }
            }
            this.id = Math.floor(Math.random() * 1e4);
            let container = null;
            this.elements.controls = null;
            const props = {
              id: this.id,
              seektime: this.config.seekTime,
              title: this.config.title
            };
            let update = true;
            if (is.function(this.config.controls)) {
              this.config.controls = this.config.controls.call(this, props);
            }
            if (!this.config.controls) {
              this.config.controls = [];
            }
            if (is.element(this.config.controls) || is.string(this.config.controls)) {
              container = this.config.controls;
            } else {
              container = controls.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: captions.getLabel.call(this)
              });
              update = false;
            }
            const replace = (input) => {
              let result = input;
              Object.entries(props).forEach(([key, value]) => {
                result = replaceAll(result, `{${key}}`, value);
              });
              return result;
            };
            if (update) {
              if (is.string(this.config.controls)) {
                container = replace(container);
              }
            }
            let target;
            if (is.string(this.config.selectors.controls.container)) {
              target = document.querySelector(this.config.selectors.controls.container);
            }
            if (!is.element(target)) {
              target = this.elements.container;
            }
            const insertMethod = is.element(container) ? "insertAdjacentElement" : "insertAdjacentHTML";
            target[insertMethod]("afterbegin", container);
            if (!is.element(this.elements.controls)) {
              controls.findElements.call(this);
            }
            if (!is.empty(this.elements.buttons)) {
              const addProperty = (button) => {
                const className = this.config.classNames.controlPressed;
                button.setAttribute("aria-pressed", "false");
                Object.defineProperty(button, "pressed", {
                  configurable: true,
                  enumerable: true,
                  get() {
                    return hasClass(button, className);
                  },
                  set(pressed = false) {
                    toggleClass(button, className, pressed);
                    button.setAttribute("aria-pressed", pressed ? "true" : "false");
                  }
                });
              };
              Object.values(this.elements.buttons).filter(Boolean).forEach((button) => {
                if (is.array(button) || is.nodeList(button)) {
                  Array.from(button).filter(Boolean).forEach(addProperty);
                } else {
                  addProperty(button);
                }
              });
            }
            if (browser.isEdge) {
              repaint(target);
            }
            if (this.config.tooltips.controls) {
              const {
                classNames,
                selectors
              } = this.config;
              const selector = `${selectors.controls.wrapper} ${selectors.labels} .${classNames.hidden}`;
              const labels = getElements.call(this, selector);
              Array.from(labels).forEach((label) => {
                toggleClass(label, this.config.classNames.hidden, false);
                toggleClass(label, this.config.classNames.tooltip, true);
              });
            }
          },
          setMediaMetadata() {
            try {
              if ("mediaSession" in navigator) {
                navigator.mediaSession.metadata = new window.MediaMetadata({
                  title: this.config.mediaMetadata.title,
                  artist: this.config.mediaMetadata.artist,
                  album: this.config.mediaMetadata.album,
                  artwork: this.config.mediaMetadata.artwork
                });
              }
            } catch (_) {
            }
          },
          setMarkers() {
            var _this$config$markers2, _this$config$markers3;
            if (!this.duration || this.elements.markers)
              return;
            const points = (_this$config$markers2 = this.config.markers) === null || _this$config$markers2 === void 0 ? void 0 : (_this$config$markers3 = _this$config$markers2.points) === null || _this$config$markers3 === void 0 ? void 0 : _this$config$markers3.filter(({
              time
            }) => time > 0 && time < this.duration);
            if (!(points !== null && points !== void 0 && points.length))
              return;
            const containerFragment = document.createDocumentFragment();
            const pointsFragment = document.createDocumentFragment();
            let tipElement = null;
            const tipVisible = `${this.config.classNames.tooltip}--visible`;
            const toggleTip = (show) => toggleClass(tipElement, tipVisible, show);
            points.forEach((point) => {
              const markerElement = createElement("span", {
                class: this.config.classNames.marker
              }, "");
              const left = `${point.time / this.duration * 100}%`;
              if (tipElement) {
                markerElement.addEventListener("mouseenter", () => {
                  if (point.label)
                    return;
                  tipElement.style.left = left;
                  tipElement.innerHTML = point.label;
                  toggleTip(true);
                });
                markerElement.addEventListener("mouseleave", () => {
                  toggleTip(false);
                });
              }
              markerElement.addEventListener("click", () => {
                this.currentTime = point.time;
              });
              markerElement.style.left = left;
              pointsFragment.appendChild(markerElement);
            });
            containerFragment.appendChild(pointsFragment);
            if (!this.config.tooltips.seek) {
              tipElement = createElement("span", {
                class: this.config.classNames.tooltip
              }, "");
              containerFragment.appendChild(tipElement);
            }
            this.elements.markers = {
              points: pointsFragment,
              tip: tipElement
            };
            this.elements.progress.appendChild(containerFragment);
          }
        };
        function parseUrl(input, safe = true) {
          let url = input;
          if (safe) {
            const parser = document.createElement("a");
            parser.href = url;
            url = parser.href;
          }
          try {
            return new URL(url);
          } catch (_) {
            return null;
          }
        }
        function buildUrlParams(input) {
          const params = new URLSearchParams();
          if (is.object(input)) {
            Object.entries(input).forEach(([key, value]) => {
              params.set(key, value);
            });
          }
          return params;
        }
        const captions = {
          setup() {
            if (!this.supported.ui) {
              return;
            }
            if (!this.isVideo || this.isYouTube || this.isHTML5 && !support.textTracks) {
              if (is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
                controls.setCaptionsMenu.call(this);
              }
              return;
            }
            if (!is.element(this.elements.captions)) {
              this.elements.captions = createElement("div", getAttributesFromSelector(this.config.selectors.captions));
              this.elements.captions.setAttribute("dir", "auto");
              insertAfter(this.elements.captions, this.elements.wrapper);
            }
            if (browser.isIE && window.URL) {
              const elements = this.media.querySelectorAll("track");
              Array.from(elements).forEach((track) => {
                const src = track.getAttribute("src");
                const url = parseUrl(src);
                if (url !== null && url.hostname !== window.location.href.hostname && ["http:", "https:"].includes(url.protocol)) {
                  fetch(src, "blob").then((blob) => {
                    track.setAttribute("src", window.URL.createObjectURL(blob));
                  }).catch(() => {
                    removeElement(track);
                  });
                }
              });
            }
            const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || "en"];
            const languages = dedupe(browserLanguages.map((language2) => language2.split("-")[0]));
            let language = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
            if (language === "auto") {
              [language] = languages;
            }
            let active = this.storage.get("captions");
            if (!is.boolean(active)) {
              ({
                active
              } = this.config.captions);
            }
            Object.assign(this.captions, {
              toggled: false,
              active,
              language,
              languages
            });
            if (this.isHTML5) {
              const trackEvents = this.config.captions.update ? "addtrack removetrack" : "removetrack";
              on.call(this, this.media.textTracks, trackEvents, captions.update.bind(this));
            }
            setTimeout(captions.update.bind(this), 0);
          },
          update() {
            const tracks = captions.getTracks.call(this, true);
            const {
              active,
              language,
              meta,
              currentTrackNode
            } = this.captions;
            const languageExists = Boolean(tracks.find((track) => track.language === language));
            if (this.isHTML5 && this.isVideo) {
              tracks.filter((track) => !meta.get(track)).forEach((track) => {
                this.debug.log("Track added", track);
                meta.set(track, {
                  default: track.mode === "showing"
                });
                if (track.mode === "showing") {
                  track.mode = "hidden";
                }
                on.call(this, track, "cuechange", () => captions.updateCues.call(this));
              });
            }
            if (languageExists && this.language !== language || !tracks.includes(currentTrackNode)) {
              captions.setLanguage.call(this, language);
              captions.toggle.call(this, active && languageExists);
            }
            if (this.elements) {
              toggleClass(this.elements.container, this.config.classNames.captions.enabled, !is.empty(tracks));
            }
            if (is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions")) {
              controls.setCaptionsMenu.call(this);
            }
          },
          toggle(input, passive = true) {
            if (!this.supported.ui) {
              return;
            }
            const {
              toggled
            } = this.captions;
            const activeClass = this.config.classNames.captions.active;
            const active = is.nullOrUndefined(input) ? !toggled : input;
            if (active !== toggled) {
              if (!passive) {
                this.captions.active = active;
                this.storage.set({
                  captions: active
                });
              }
              if (!this.language && active && !passive) {
                const tracks = captions.getTracks.call(this);
                const track = captions.findTrack.call(this, [this.captions.language, ...this.captions.languages], true);
                this.captions.language = track.language;
                captions.set.call(this, tracks.indexOf(track));
                return;
              }
              if (this.elements.buttons.captions) {
                this.elements.buttons.captions.pressed = active;
              }
              toggleClass(this.elements.container, activeClass, active);
              this.captions.toggled = active;
              controls.updateSetting.call(this, "captions");
              triggerEvent.call(this, this.media, active ? "captionsenabled" : "captionsdisabled");
            }
            setTimeout(() => {
              if (active && this.captions.toggled) {
                this.captions.currentTrackNode.mode = "hidden";
              }
            });
          },
          set(index, passive = true) {
            const tracks = captions.getTracks.call(this);
            if (index === -1) {
              captions.toggle.call(this, false, passive);
              return;
            }
            if (!is.number(index)) {
              this.debug.warn("Invalid caption argument", index);
              return;
            }
            if (!(index in tracks)) {
              this.debug.warn("Track not found", index);
              return;
            }
            if (this.captions.currentTrack !== index) {
              this.captions.currentTrack = index;
              const track = tracks[index];
              const {
                language
              } = track || {};
              this.captions.currentTrackNode = track;
              controls.updateSetting.call(this, "captions");
              if (!passive) {
                this.captions.language = language;
                this.storage.set({
                  language
                });
              }
              if (this.isVimeo) {
                this.embed.enableTextTrack(language);
              }
              triggerEvent.call(this, this.media, "languagechange");
            }
            captions.toggle.call(this, true, passive);
            if (this.isHTML5 && this.isVideo) {
              captions.updateCues.call(this);
            }
          },
          setLanguage(input, passive = true) {
            if (!is.string(input)) {
              this.debug.warn("Invalid language argument", input);
              return;
            }
            const language = input.toLowerCase();
            this.captions.language = language;
            const tracks = captions.getTracks.call(this);
            const track = captions.findTrack.call(this, [language]);
            captions.set.call(this, tracks.indexOf(track), passive);
          },
          getTracks(update = false) {
            const tracks = Array.from((this.media || {}).textTracks || []);
            return tracks.filter((track) => !this.isHTML5 || update || this.captions.meta.has(track)).filter((track) => ["captions", "subtitles"].includes(track.kind));
          },
          findTrack(languages, force = false) {
            const tracks = captions.getTracks.call(this);
            const sortIsDefault = (track2) => Number((this.captions.meta.get(track2) || {}).default);
            const sorted = Array.from(tracks).sort((a, b) => sortIsDefault(b) - sortIsDefault(a));
            let track;
            languages.every((language) => {
              track = sorted.find((t) => t.language === language);
              return !track;
            });
            return track || (force ? sorted[0] : void 0);
          },
          getCurrentTrack() {
            return captions.getTracks.call(this)[this.currentTrack];
          },
          getLabel(track) {
            let currentTrack = track;
            if (!is.track(currentTrack) && support.textTracks && this.captions.toggled) {
              currentTrack = captions.getCurrentTrack.call(this);
            }
            if (is.track(currentTrack)) {
              if (!is.empty(currentTrack.label)) {
                return currentTrack.label;
              }
              if (!is.empty(currentTrack.language)) {
                return track.language.toUpperCase();
              }
              return i18n.get("enabled", this.config);
            }
            return i18n.get("disabled", this.config);
          },
          updateCues(input) {
            if (!this.supported.ui) {
              return;
            }
            if (!is.element(this.elements.captions)) {
              this.debug.warn("No captions element to render to");
              return;
            }
            if (!is.nullOrUndefined(input) && !Array.isArray(input)) {
              this.debug.warn("updateCues: Invalid input", input);
              return;
            }
            let cues = input;
            if (!cues) {
              const track = captions.getCurrentTrack.call(this);
              cues = Array.from((track || {}).activeCues || []).map((cue) => cue.getCueAsHTML()).map(getHTML);
            }
            const content = cues.map((cueText) => cueText.trim()).join("\n");
            const changed = content !== this.elements.captions.innerHTML;
            if (changed) {
              emptyElement(this.elements.captions);
              const caption = createElement("span", getAttributesFromSelector(this.config.selectors.caption));
              caption.innerHTML = content;
              this.elements.captions.appendChild(caption);
              triggerEvent.call(this, this.media, "cuechange");
            }
          }
        };
        const defaults = {
          enabled: true,
          title: "",
          debug: false,
          autoplay: false,
          autopause: true,
          playsinline: true,
          seekTime: 10,
          volume: 1,
          muted: false,
          duration: null,
          displayDuration: true,
          invertTime: true,
          toggleInvert: true,
          ratio: null,
          clickToPlay: true,
          hideControls: true,
          resetOnEnd: false,
          disableContextMenu: true,
          loadSprite: true,
          iconPrefix: "plyr",
          iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg",
          blankVideo: "https://cdn.plyr.io/static/blank.mp4",
          quality: {
            default: 576,
            options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
            forced: false,
            onChange: null
          },
          loop: {
            active: false
          },
          speed: {
            selected: 1,
            options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4]
          },
          keyboard: {
            focused: true,
            global: false
          },
          tooltips: {
            controls: false,
            seek: true
          },
          captions: {
            active: false,
            language: "auto",
            update: false
          },
          fullscreen: {
            enabled: true,
            fallback: true,
            iosNative: false
          },
          storage: {
            enabled: true,
            key: "plyr"
          },
          controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "mute",
            "volume",
            "captions",
            "settings",
            "pip",
            "airplay",
            "fullscreen"
          ],
          settings: ["captions", "quality", "speed"],
          i18n: {
            restart: "Restart",
            rewind: "Rewind {seektime}s",
            play: "Play",
            pause: "Pause",
            fastForward: "Forward {seektime}s",
            seek: "Seek",
            seekLabel: "{currentTime} of {duration}",
            played: "Played",
            buffered: "Buffered",
            currentTime: "Current time",
            duration: "Duration",
            volume: "Volume",
            mute: "Mute",
            unmute: "Unmute",
            enableCaptions: "Enable captions",
            disableCaptions: "Disable captions",
            download: "Download",
            enterFullscreen: "Enter fullscreen",
            exitFullscreen: "Exit fullscreen",
            frameTitle: "Player for {title}",
            captions: "Captions",
            settings: "Settings",
            pip: "PIP",
            menuBack: "Go back to previous menu",
            speed: "Speed",
            normal: "Normal",
            quality: "Quality",
            loop: "Loop",
            start: "Start",
            end: "End",
            all: "All",
            reset: "Reset",
            disabled: "Disabled",
            enabled: "Enabled",
            advertisement: "Ad",
            qualityBadge: {
              2160: "4K",
              1440: "HD",
              1080: "HD",
              720: "HD",
              576: "SD",
              480: "SD"
            }
          },
          urls: {
            download: null,
            vimeo: {
              sdk: "https://player.vimeo.com/api/player.js",
              iframe: "https://player.vimeo.com/video/{0}?{1}",
              api: "https://vimeo.com/api/oembed.json?url={0}"
            },
            youtube: {
              sdk: "https://www.youtube.com/iframe_api",
              api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
            },
            googleIMA: {
              sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
            }
          },
          listeners: {
            seek: null,
            play: null,
            pause: null,
            restart: null,
            rewind: null,
            fastForward: null,
            mute: null,
            volume: null,
            captions: null,
            download: null,
            fullscreen: null,
            pip: null,
            airplay: null,
            speed: null,
            quality: null,
            loop: null,
            language: null
          },
          events: [
            "ended",
            "progress",
            "stalled",
            "playing",
            "waiting",
            "canplay",
            "canplaythrough",
            "loadstart",
            "loadeddata",
            "loadedmetadata",
            "timeupdate",
            "volumechange",
            "play",
            "pause",
            "error",
            "seeking",
            "seeked",
            "emptied",
            "ratechange",
            "cuechange",
            "download",
            "enterfullscreen",
            "exitfullscreen",
            "captionsenabled",
            "captionsdisabled",
            "languagechange",
            "controlshidden",
            "controlsshown",
            "ready",
            "statechange",
            "qualitychange",
            "adsloaded",
            "adscontentpause",
            "adscontentresume",
            "adstarted",
            "adsmidpoint",
            "adscomplete",
            "adsallcomplete",
            "adsimpression",
            "adsclick"
          ],
          selectors: {
            editable: "input, textarea, select, [contenteditable]",
            container: ".plyr",
            controls: {
              container: null,
              wrapper: ".plyr__controls"
            },
            labels: "[data-plyr]",
            buttons: {
              play: '[data-plyr="play"]',
              pause: '[data-plyr="pause"]',
              restart: '[data-plyr="restart"]',
              rewind: '[data-plyr="rewind"]',
              fastForward: '[data-plyr="fast-forward"]',
              mute: '[data-plyr="mute"]',
              captions: '[data-plyr="captions"]',
              download: '[data-plyr="download"]',
              fullscreen: '[data-plyr="fullscreen"]',
              pip: '[data-plyr="pip"]',
              airplay: '[data-plyr="airplay"]',
              settings: '[data-plyr="settings"]',
              loop: '[data-plyr="loop"]'
            },
            inputs: {
              seek: '[data-plyr="seek"]',
              volume: '[data-plyr="volume"]',
              speed: '[data-plyr="speed"]',
              language: '[data-plyr="language"]',
              quality: '[data-plyr="quality"]'
            },
            display: {
              currentTime: ".plyr__time--current",
              duration: ".plyr__time--duration",
              buffer: ".plyr__progress__buffer",
              loop: ".plyr__progress__loop",
              volume: ".plyr__volume--display"
            },
            progress: ".plyr__progress",
            captions: ".plyr__captions",
            caption: ".plyr__caption"
          },
          classNames: {
            type: "plyr--{0}",
            provider: "plyr--{0}",
            video: "plyr__video-wrapper",
            embed: "plyr__video-embed",
            videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
            embedContainer: "plyr__video-embed__container",
            poster: "plyr__poster",
            posterEnabled: "plyr__poster-enabled",
            ads: "plyr__ads",
            control: "plyr__control",
            controlPressed: "plyr__control--pressed",
            playing: "plyr--playing",
            paused: "plyr--paused",
            stopped: "plyr--stopped",
            loading: "plyr--loading",
            hover: "plyr--hover",
            tooltip: "plyr__tooltip",
            cues: "plyr__cues",
            marker: "plyr__progress__marker",
            hidden: "plyr__sr-only",
            hideControls: "plyr--hide-controls",
            isTouch: "plyr--is-touch",
            uiSupported: "plyr--full-ui",
            noTransition: "plyr--no-transition",
            display: {
              time: "plyr__time"
            },
            menu: {
              value: "plyr__menu__value",
              badge: "plyr__badge",
              open: "plyr--menu-open"
            },
            captions: {
              enabled: "plyr--captions-enabled",
              active: "plyr--captions-active"
            },
            fullscreen: {
              enabled: "plyr--fullscreen-enabled",
              fallback: "plyr--fullscreen-fallback"
            },
            pip: {
              supported: "plyr--pip-supported",
              active: "plyr--pip-active"
            },
            airplay: {
              supported: "plyr--airplay-supported",
              active: "plyr--airplay-active"
            },
            previewThumbnails: {
              thumbContainer: "plyr__preview-thumb",
              thumbContainerShown: "plyr__preview-thumb--is-shown",
              imageContainer: "plyr__preview-thumb__image-container",
              timeContainer: "plyr__preview-thumb__time-container",
              scrubbingContainer: "plyr__preview-scrubbing",
              scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
            }
          },
          attributes: {
            embed: {
              provider: "data-plyr-provider",
              id: "data-plyr-embed-id",
              hash: "data-plyr-embed-hash"
            }
          },
          ads: {
            enabled: false,
            publisherId: "",
            tagUrl: ""
          },
          previewThumbnails: {
            enabled: false,
            src: ""
          },
          vimeo: {
            byline: false,
            portrait: false,
            title: false,
            speed: true,
            transparent: false,
            customControls: true,
            referrerPolicy: null,
            premium: false
          },
          youtube: {
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            customControls: true,
            noCookie: false
          },
          mediaMetadata: {
            title: "",
            artist: "",
            album: "",
            artwork: []
          },
          markers: {
            enabled: false,
            points: []
          }
        };
        const pip = {
          active: "picture-in-picture",
          inactive: "inline"
        };
        const providers = {
          html5: "html5",
          youtube: "youtube",
          vimeo: "vimeo"
        };
        const types = {
          audio: "audio",
          video: "video"
        };
        function getProviderByUrl(url) {
          if (/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(url)) {
            return providers.youtube;
          }
          if (/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(url)) {
            return providers.vimeo;
          }
          return null;
        }
        const noop = () => {
        };
        class Console {
          constructor(enabled = false) {
            this.enabled = window.console && enabled;
            if (this.enabled) {
              this.log("Debugging enabled");
            }
          }
          get log() {
            return this.enabled ? Function.prototype.bind.call(console.log, console) : noop;
          }
          get warn() {
            return this.enabled ? Function.prototype.bind.call(console.warn, console) : noop;
          }
          get error() {
            return this.enabled ? Function.prototype.bind.call(console.error, console) : noop;
          }
        }
        class Fullscreen {
          constructor(player) {
            _defineProperty$1(this, "onChange", () => {
              if (!this.supported)
                return;
              const button = this.player.elements.buttons.fullscreen;
              if (is.element(button)) {
                button.pressed = this.active;
              }
              const target = this.target === this.player.media ? this.target : this.player.elements.container;
              triggerEvent.call(this.player, target, this.active ? "enterfullscreen" : "exitfullscreen", true);
            });
            _defineProperty$1(this, "toggleFallback", (toggle = false) => {
              var _a, _b;
              if (toggle) {
                this.scrollPosition = {
                  x: (_a = window.scrollX) != null ? _a : 0,
                  y: (_b = window.scrollY) != null ? _b : 0
                };
              } else {
                window.scrollTo(this.scrollPosition.x, this.scrollPosition.y);
              }
              document.body.style.overflow = toggle ? "hidden" : "";
              toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, toggle);
              if (browser.isIos) {
                let viewport = document.head.querySelector('meta[name="viewport"]');
                const property = "viewport-fit=cover";
                if (!viewport) {
                  viewport = document.createElement("meta");
                  viewport.setAttribute("name", "viewport");
                }
                const hasProperty = is.string(viewport.content) && viewport.content.includes(property);
                if (toggle) {
                  this.cleanupViewport = !hasProperty;
                  if (!hasProperty)
                    viewport.content += `,${property}`;
                } else if (this.cleanupViewport) {
                  viewport.content = viewport.content.split(",").filter((part) => part.trim() !== property).join(",");
                }
              }
              this.onChange();
            });
            _defineProperty$1(this, "trapFocus", (event) => {
              if (browser.isIos || browser.isIPadOS || !this.active || event.key !== "Tab")
                return;
              const focused = document.activeElement;
              const focusable = getElements.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]");
              const [first] = focusable;
              const last = focusable[focusable.length - 1];
              if (focused === last && !event.shiftKey) {
                first.focus();
                event.preventDefault();
              } else if (focused === first && event.shiftKey) {
                last.focus();
                event.preventDefault();
              }
            });
            _defineProperty$1(this, "update", () => {
              if (this.supported) {
                let mode;
                if (this.forceFallback)
                  mode = "Fallback (forced)";
                else if (Fullscreen.nativeSupported)
                  mode = "Native";
                else
                  mode = "Fallback";
                this.player.debug.log(`${mode} fullscreen enabled`);
              } else {
                this.player.debug.log("Fullscreen not supported and fallback disabled");
              }
              toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.supported);
            });
            _defineProperty$1(this, "enter", () => {
              if (!this.supported)
                return;
              if (browser.isIos && this.player.config.fullscreen.iosNative) {
                if (this.player.isVimeo) {
                  this.player.embed.requestFullscreen();
                } else {
                  this.target.webkitEnterFullscreen();
                }
              } else if (!Fullscreen.nativeSupported || this.forceFallback) {
                this.toggleFallback(true);
              } else if (!this.prefix) {
                this.target.requestFullscreen({
                  navigationUI: "hide"
                });
              } else if (!is.empty(this.prefix)) {
                this.target[`${this.prefix}Request${this.property}`]();
              }
            });
            _defineProperty$1(this, "exit", () => {
              if (!this.supported)
                return;
              if (browser.isIos && this.player.config.fullscreen.iosNative) {
                if (this.player.isVimeo) {
                  this.player.embed.exitFullscreen();
                } else {
                  this.target.webkitEnterFullscreen();
                }
                silencePromise(this.player.play());
              } else if (!Fullscreen.nativeSupported || this.forceFallback) {
                this.toggleFallback(false);
              } else if (!this.prefix) {
                (document.cancelFullScreen || document.exitFullscreen).call(document);
              } else if (!is.empty(this.prefix)) {
                const action = this.prefix === "moz" ? "Cancel" : "Exit";
                document[`${this.prefix}${action}${this.property}`]();
              }
            });
            _defineProperty$1(this, "toggle", () => {
              if (!this.active)
                this.enter();
              else
                this.exit();
            });
            this.player = player;
            this.prefix = Fullscreen.prefix;
            this.property = Fullscreen.property;
            this.scrollPosition = {
              x: 0,
              y: 0
            };
            this.forceFallback = player.config.fullscreen.fallback === "force";
            this.player.elements.fullscreen = player.config.fullscreen.container && closest$1(this.player.elements.container, player.config.fullscreen.container);
            on.call(this.player, document, this.prefix === "ms" ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
              this.onChange();
            });
            on.call(this.player, this.player.elements.container, "dblclick", (event) => {
              if (is.element(this.player.elements.controls) && this.player.elements.controls.contains(event.target)) {
                return;
              }
              this.player.listeners.proxy(event, this.toggle, "fullscreen");
            });
            on.call(this, this.player.elements.container, "keydown", (event) => this.trapFocus(event));
            this.update();
          }
          static get nativeSupported() {
            return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
          }
          get useNative() {
            return Fullscreen.nativeSupported && !this.forceFallback;
          }
          static get prefix() {
            if (is.function(document.exitFullscreen))
              return "";
            let value = "";
            const prefixes = ["webkit", "moz", "ms"];
            prefixes.some((pre) => {
              if (is.function(document[`${pre}ExitFullscreen`]) || is.function(document[`${pre}CancelFullScreen`])) {
                value = pre;
                return true;
              }
              return false;
            });
            return value;
          }
          static get property() {
            return this.prefix === "moz" ? "FullScreen" : "Fullscreen";
          }
          get supported() {
            return [
              this.player.config.fullscreen.enabled,
              this.player.isVideo,
              Fullscreen.nativeSupported || this.player.config.fullscreen.fallback,
              !this.player.isYouTube || Fullscreen.nativeSupported || !browser.isIos || this.player.config.playsinline && !this.player.config.fullscreen.iosNative
            ].every(Boolean);
          }
          get active() {
            if (!this.supported)
              return false;
            if (!Fullscreen.nativeSupported || this.forceFallback) {
              return hasClass(this.target, this.player.config.classNames.fullscreen.fallback);
            }
            const element = !this.prefix ? this.target.getRootNode().fullscreenElement : this.target.getRootNode()[`${this.prefix}${this.property}Element`];
            return element && element.shadowRoot ? element === this.target.getRootNode().host : element === this.target;
          }
          get target() {
            var _a;
            return browser.isIos && this.player.config.fullscreen.iosNative ? this.player.media : (_a = this.player.elements.fullscreen) != null ? _a : this.player.elements.container;
          }
        }
        function loadImage(src, minWidth = 1) {
          return new Promise((resolve, reject) => {
            const image = new Image();
            const handler = () => {
              delete image.onload;
              delete image.onerror;
              (image.naturalWidth >= minWidth ? resolve : reject)(image);
            };
            Object.assign(image, {
              onload: handler,
              onerror: handler,
              src
            });
          });
        }
        const ui = {
          addStyleHook() {
            toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), true);
            toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
          },
          toggleNativeControls(toggle = false) {
            if (toggle && this.isHTML5) {
              this.media.setAttribute("controls", "");
            } else {
              this.media.removeAttribute("controls");
            }
          },
          build() {
            this.listeners.media();
            if (!this.supported.ui) {
              this.debug.warn(`Basic support only for ${this.provider} ${this.type}`);
              ui.toggleNativeControls.call(this, true);
              return;
            }
            if (!is.element(this.elements.controls)) {
              controls.inject.call(this);
              this.listeners.controls();
            }
            ui.toggleNativeControls.call(this);
            if (this.isHTML5) {
              captions.setup.call(this);
            }
            this.volume = null;
            this.muted = null;
            this.loop = null;
            this.quality = null;
            this.speed = null;
            controls.updateVolume.call(this);
            controls.timeUpdate.call(this);
            controls.durationUpdate.call(this);
            ui.checkPlaying.call(this);
            toggleClass(this.elements.container, this.config.classNames.pip.supported, support.pip && this.isHTML5 && this.isVideo);
            toggleClass(this.elements.container, this.config.classNames.airplay.supported, support.airplay && this.isHTML5);
            toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch);
            this.ready = true;
            setTimeout(() => {
              triggerEvent.call(this, this.media, "ready");
            }, 0);
            ui.setTitle.call(this);
            if (this.poster) {
              ui.setPoster.call(this, this.poster, false).catch(() => {
              });
            }
            if (this.config.duration) {
              controls.durationUpdate.call(this);
            }
            if (this.config.mediaMetadata) {
              controls.setMediaMetadata.call(this);
            }
          },
          setTitle() {
            let label = i18n.get("play", this.config);
            if (is.string(this.config.title) && !is.empty(this.config.title)) {
              label += `, ${this.config.title}`;
            }
            Array.from(this.elements.buttons.play || []).forEach((button) => {
              button.setAttribute("aria-label", label);
            });
            if (this.isEmbed) {
              const iframe = getElement.call(this, "iframe");
              if (!is.element(iframe)) {
                return;
              }
              const title = !is.empty(this.config.title) ? this.config.title : "video";
              const format2 = i18n.get("frameTitle", this.config);
              iframe.setAttribute("title", format2.replace("{title}", title));
            }
          },
          togglePoster(enable) {
            toggleClass(this.elements.container, this.config.classNames.posterEnabled, enable);
          },
          setPoster(poster, passive = true) {
            if (passive && this.poster) {
              return Promise.reject(new Error("Poster already set"));
            }
            this.media.setAttribute("data-poster", poster);
            this.elements.poster.removeAttribute("hidden");
            return ready.call(this).then(() => loadImage(poster)).catch((error) => {
              if (poster === this.poster) {
                ui.togglePoster.call(this, false);
              }
              throw error;
            }).then(() => {
              if (poster !== this.poster) {
                throw new Error("setPoster cancelled by later call to setPoster");
              }
            }).then(() => {
              Object.assign(this.elements.poster.style, {
                backgroundImage: `url('${poster}')`,
                backgroundSize: ""
              });
              ui.togglePoster.call(this, true);
              return poster;
            });
          },
          checkPlaying(event) {
            toggleClass(this.elements.container, this.config.classNames.playing, this.playing);
            toggleClass(this.elements.container, this.config.classNames.paused, this.paused);
            toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped);
            Array.from(this.elements.buttons.play || []).forEach((target) => {
              Object.assign(target, {
                pressed: this.playing
              });
              target.setAttribute("aria-label", i18n.get(this.playing ? "pause" : "play", this.config));
            });
            if (is.event(event) && event.type === "timeupdate") {
              return;
            }
            ui.toggleControls.call(this);
          },
          checkLoading(event) {
            this.loading = ["stalled", "waiting"].includes(event.type);
            clearTimeout(this.timers.loading);
            this.timers.loading = setTimeout(() => {
              toggleClass(this.elements.container, this.config.classNames.loading, this.loading);
              ui.toggleControls.call(this);
            }, this.loading ? 250 : 0);
          },
          toggleControls(force) {
            const {
              controls: controlsElement
            } = this.elements;
            if (controlsElement && this.config.hideControls) {
              const recentTouchSeek = this.touch && this.lastSeekTime + 2e3 > Date.now();
              this.toggleControls(Boolean(force || this.loading || this.paused || controlsElement.pressed || controlsElement.hover || recentTouchSeek));
            }
          },
          migrateStyles() {
            Object.values(__spreadValues({}, this.media.style)).filter((key) => !is.empty(key) && is.string(key) && key.startsWith("--plyr")).forEach((key) => {
              this.elements.container.style.setProperty(key, this.media.style.getPropertyValue(key));
              this.media.style.removeProperty(key);
            });
            if (is.empty(this.media.style)) {
              this.media.removeAttribute("style");
            }
          }
        };
        class Listeners {
          constructor(_player) {
            _defineProperty$1(this, "firstTouch", () => {
              const {
                player
              } = this;
              const {
                elements
              } = player;
              player.touch = true;
              toggleClass(elements.container, player.config.classNames.isTouch, true);
            });
            _defineProperty$1(this, "global", (toggle = true) => {
              const {
                player
              } = this;
              if (player.config.keyboard.global) {
                toggleListener.call(player, window, "keydown keyup", this.handleKey, toggle, false);
              }
              toggleListener.call(player, document.body, "click", this.toggleMenu, toggle);
              once.call(player, document.body, "touchstart", this.firstTouch);
            });
            _defineProperty$1(this, "container", () => {
              const {
                player
              } = this;
              const {
                config,
                elements,
                timers
              } = player;
              if (!config.keyboard.global && config.keyboard.focused) {
                on.call(player, elements.container, "keydown keyup", this.handleKey, false);
              }
              on.call(player, elements.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (event) => {
                const {
                  controls: controlsElement
                } = elements;
                if (controlsElement && event.type === "enterfullscreen") {
                  controlsElement.pressed = false;
                  controlsElement.hover = false;
                }
                const show = ["touchstart", "touchmove", "mousemove"].includes(event.type);
                let delay = 0;
                if (show) {
                  ui.toggleControls.call(player, true);
                  delay = player.touch ? 3e3 : 2e3;
                }
                clearTimeout(timers.controls);
                timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
              });
              const setGutter = () => {
                if (!player.isVimeo || player.config.vimeo.premium) {
                  return;
                }
                const target = elements.wrapper;
                const {
                  active
                } = player.fullscreen;
                const [videoWidth, videoHeight] = getAspectRatio.call(player);
                const useNativeAspectRatio = supportsCSS(`aspect-ratio: ${videoWidth} / ${videoHeight}`);
                if (!active) {
                  if (useNativeAspectRatio) {
                    target.style.width = null;
                    target.style.height = null;
                  } else {
                    target.style.maxWidth = null;
                    target.style.margin = null;
                  }
                  return;
                }
                const [viewportWidth, viewportHeight] = getViewportSize();
                const overflow = viewportWidth / viewportHeight > videoWidth / videoHeight;
                if (useNativeAspectRatio) {
                  target.style.width = overflow ? "auto" : "100%";
                  target.style.height = overflow ? "100%" : "auto";
                } else {
                  target.style.maxWidth = overflow ? `${viewportHeight / videoHeight * videoWidth}px` : null;
                  target.style.margin = overflow ? "0 auto" : null;
                }
              };
              const resized = () => {
                clearTimeout(timers.resized);
                timers.resized = setTimeout(setGutter, 50);
              };
              on.call(player, elements.container, "enterfullscreen exitfullscreen", (event) => {
                const {
                  target
                } = player.fullscreen;
                if (target !== elements.container) {
                  return;
                }
                if (!player.isEmbed && is.empty(player.config.ratio)) {
                  return;
                }
                setGutter();
                const method = event.type === "enterfullscreen" ? on : off;
                method.call(player, window, "resize", resized);
              });
            });
            _defineProperty$1(this, "media", () => {
              const {
                player
              } = this;
              const {
                elements
              } = player;
              on.call(player, player.media, "timeupdate seeking seeked", (event) => controls.timeUpdate.call(player, event));
              on.call(player, player.media, "durationchange loadeddata loadedmetadata", (event) => controls.durationUpdate.call(player, event));
              on.call(player, player.media, "ended", () => {
                if (player.isHTML5 && player.isVideo && player.config.resetOnEnd) {
                  player.restart();
                  player.pause();
                }
              });
              on.call(player, player.media, "progress playing seeking seeked", (event) => controls.updateProgress.call(player, event));
              on.call(player, player.media, "volumechange", (event) => controls.updateVolume.call(player, event));
              on.call(player, player.media, "playing play pause ended emptied timeupdate", (event) => ui.checkPlaying.call(player, event));
              on.call(player, player.media, "waiting canplay seeked playing", (event) => ui.checkLoading.call(player, event));
              if (player.supported.ui && player.config.clickToPlay && !player.isAudio) {
                const wrapper = getElement.call(player, `.${player.config.classNames.video}`);
                if (!is.element(wrapper)) {
                  return;
                }
                on.call(player, elements.container, "click", (event) => {
                  const targets = [elements.container, wrapper];
                  if (!targets.includes(event.target) && !wrapper.contains(event.target)) {
                    return;
                  }
                  if (player.touch && player.config.hideControls) {
                    return;
                  }
                  if (player.ended) {
                    this.proxy(event, player.restart, "restart");
                    this.proxy(event, () => {
                      silencePromise(player.play());
                    }, "play");
                  } else {
                    this.proxy(event, () => {
                      silencePromise(player.togglePlay());
                    }, "play");
                  }
                });
              }
              if (player.supported.ui && player.config.disableContextMenu) {
                on.call(player, elements.wrapper, "contextmenu", (event) => {
                  event.preventDefault();
                }, false);
              }
              on.call(player, player.media, "volumechange", () => {
                player.storage.set({
                  volume: player.volume,
                  muted: player.muted
                });
              });
              on.call(player, player.media, "ratechange", () => {
                controls.updateSetting.call(player, "speed");
                player.storage.set({
                  speed: player.speed
                });
              });
              on.call(player, player.media, "qualitychange", (event) => {
                controls.updateSetting.call(player, "quality", null, event.detail.quality);
              });
              on.call(player, player.media, "ready qualitychange", () => {
                controls.setDownloadUrl.call(player);
              });
              const proxyEvents = player.config.events.concat(["keyup", "keydown"]).join(" ");
              on.call(player, player.media, proxyEvents, (event) => {
                let {
                  detail = {}
                } = event;
                if (event.type === "error") {
                  detail = player.media.error;
                }
                triggerEvent.call(player, elements.container, event.type, true, detail);
              });
            });
            _defineProperty$1(this, "proxy", (event, defaultHandler, customHandlerKey) => {
              const {
                player
              } = this;
              const customHandler = player.config.listeners[customHandlerKey];
              const hasCustomHandler = is.function(customHandler);
              let returned = true;
              if (hasCustomHandler) {
                returned = customHandler.call(player, event);
              }
              if (returned !== false && is.function(defaultHandler)) {
                defaultHandler.call(player, event);
              }
            });
            _defineProperty$1(this, "bind", (element, type, defaultHandler, customHandlerKey, passive = true) => {
              const {
                player
              } = this;
              const customHandler = player.config.listeners[customHandlerKey];
              const hasCustomHandler = is.function(customHandler);
              on.call(player, element, type, (event) => this.proxy(event, defaultHandler, customHandlerKey), passive && !hasCustomHandler);
            });
            _defineProperty$1(this, "controls", () => {
              const {
                player
              } = this;
              const {
                elements
              } = player;
              const inputEvent = browser.isIE ? "change" : "input";
              if (elements.buttons.play) {
                Array.from(elements.buttons.play).forEach((button) => {
                  this.bind(button, "click", () => {
                    silencePromise(player.togglePlay());
                  }, "play");
                });
              }
              this.bind(elements.buttons.restart, "click", player.restart, "restart");
              this.bind(elements.buttons.rewind, "click", () => {
                player.lastSeekTime = Date.now();
                player.rewind();
              }, "rewind");
              this.bind(elements.buttons.fastForward, "click", () => {
                player.lastSeekTime = Date.now();
                player.forward();
              }, "fastForward");
              this.bind(elements.buttons.mute, "click", () => {
                player.muted = !player.muted;
              }, "mute");
              this.bind(elements.buttons.captions, "click", () => player.toggleCaptions());
              this.bind(elements.buttons.download, "click", () => {
                triggerEvent.call(player, player.media, "download");
              }, "download");
              this.bind(elements.buttons.fullscreen, "click", () => {
                player.fullscreen.toggle();
              }, "fullscreen");
              this.bind(elements.buttons.pip, "click", () => {
                player.pip = "toggle";
              }, "pip");
              this.bind(elements.buttons.airplay, "click", player.airplay, "airplay");
              this.bind(elements.buttons.settings, "click", (event) => {
                event.stopPropagation();
                event.preventDefault();
                controls.toggleMenu.call(player, event);
              }, null, false);
              this.bind(
                elements.buttons.settings,
                "keyup",
                (event) => {
                  if (![" ", "Enter"].includes(event.key)) {
                    return;
                  }
                  if (event.key === "Enter") {
                    controls.focusFirstMenuItem.call(player, null, true);
                    return;
                  }
                  event.preventDefault();
                  event.stopPropagation();
                  controls.toggleMenu.call(player, event);
                },
                null,
                false
              );
              this.bind(elements.settings.menu, "keydown", (event) => {
                if (event.key === "Escape") {
                  controls.toggleMenu.call(player, event);
                }
              });
              this.bind(elements.inputs.seek, "mousedown mousemove", (event) => {
                const rect = elements.progress.getBoundingClientRect();
                const percent = 100 / rect.width * (event.pageX - rect.left);
                event.currentTarget.setAttribute("seek-value", percent);
              });
              this.bind(elements.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (event) => {
                const seek = event.currentTarget;
                const attribute = "play-on-seeked";
                if (is.keyboardEvent(event) && !["ArrowLeft", "ArrowRight"].includes(event.key)) {
                  return;
                }
                player.lastSeekTime = Date.now();
                const play = seek.hasAttribute(attribute);
                const done = ["mouseup", "touchend", "keyup"].includes(event.type);
                if (play && done) {
                  seek.removeAttribute(attribute);
                  silencePromise(player.play());
                } else if (!done && player.playing) {
                  seek.setAttribute(attribute, "");
                  player.pause();
                }
              });
              if (browser.isIos) {
                const inputs = getElements.call(player, 'input[type="range"]');
                Array.from(inputs).forEach((input) => this.bind(input, inputEvent, (event) => repaint(event.target)));
              }
              this.bind(elements.inputs.seek, inputEvent, (event) => {
                const seek = event.currentTarget;
                let seekTo = seek.getAttribute("seek-value");
                if (is.empty(seekTo)) {
                  seekTo = seek.value;
                }
                seek.removeAttribute("seek-value");
                player.currentTime = seekTo / seek.max * player.duration;
              }, "seek");
              this.bind(elements.progress, "mouseenter mouseleave mousemove", (event) => controls.updateSeekTooltip.call(player, event));
              this.bind(elements.progress, "mousemove touchmove", (event) => {
                const {
                  previewThumbnails
                } = player;
                if (previewThumbnails && previewThumbnails.loaded) {
                  previewThumbnails.startMove(event);
                }
              });
              this.bind(elements.progress, "mouseleave touchend click", () => {
                const {
                  previewThumbnails
                } = player;
                if (previewThumbnails && previewThumbnails.loaded) {
                  previewThumbnails.endMove(false, true);
                }
              });
              this.bind(elements.progress, "mousedown touchstart", (event) => {
                const {
                  previewThumbnails
                } = player;
                if (previewThumbnails && previewThumbnails.loaded) {
                  previewThumbnails.startScrubbing(event);
                }
              });
              this.bind(elements.progress, "mouseup touchend", (event) => {
                const {
                  previewThumbnails
                } = player;
                if (previewThumbnails && previewThumbnails.loaded) {
                  previewThumbnails.endScrubbing(event);
                }
              });
              if (browser.isWebKit) {
                Array.from(getElements.call(player, 'input[type="range"]')).forEach((element) => {
                  this.bind(element, "input", (event) => controls.updateRangeFill.call(player, event.target));
                });
              }
              if (player.config.toggleInvert && !is.element(elements.display.duration)) {
                this.bind(elements.display.currentTime, "click", () => {
                  if (player.currentTime === 0) {
                    return;
                  }
                  player.config.invertTime = !player.config.invertTime;
                  controls.timeUpdate.call(player);
                });
              }
              this.bind(elements.inputs.volume, inputEvent, (event) => {
                player.volume = event.target.value;
              }, "volume");
              this.bind(elements.controls, "mouseenter mouseleave", (event) => {
                elements.controls.hover = !player.touch && event.type === "mouseenter";
              });
              if (elements.fullscreen) {
                Array.from(elements.fullscreen.children).filter((c) => !c.contains(elements.container)).forEach((child) => {
                  this.bind(child, "mouseenter mouseleave", (event) => {
                    if (elements.controls) {
                      elements.controls.hover = !player.touch && event.type === "mouseenter";
                    }
                  });
                });
              }
              this.bind(elements.controls, "mousedown mouseup touchstart touchend touchcancel", (event) => {
                elements.controls.pressed = ["mousedown", "touchstart"].includes(event.type);
              });
              this.bind(elements.controls, "focusin", () => {
                const {
                  config,
                  timers
                } = player;
                toggleClass(elements.controls, config.classNames.noTransition, true);
                ui.toggleControls.call(player, true);
                setTimeout(() => {
                  toggleClass(elements.controls, config.classNames.noTransition, false);
                }, 0);
                const delay = this.touch ? 3e3 : 4e3;
                clearTimeout(timers.controls);
                timers.controls = setTimeout(() => ui.toggleControls.call(player, false), delay);
              });
              this.bind(elements.inputs.volume, "wheel", (event) => {
                const inverted = event.webkitDirectionInvertedFromDevice;
                const [x, y] = [event.deltaX, -event.deltaY].map((value) => inverted ? -value : value);
                const direction = Math.sign(Math.abs(x) > Math.abs(y) ? x : y);
                player.increaseVolume(direction / 50);
                const {
                  volume
                } = player.media;
                if (direction === 1 && volume < 1 || direction === -1 && volume > 0) {
                  event.preventDefault();
                }
              }, "volume", false);
            });
            this.player = _player;
            this.lastKey = null;
            this.focusTimer = null;
            this.lastKeyDown = null;
            this.handleKey = this.handleKey.bind(this);
            this.toggleMenu = this.toggleMenu.bind(this);
            this.firstTouch = this.firstTouch.bind(this);
          }
          handleKey(event) {
            const {
              player
            } = this;
            const {
              elements
            } = player;
            const {
              key,
              type,
              altKey,
              ctrlKey,
              metaKey,
              shiftKey
            } = event;
            const pressed = type === "keydown";
            const repeat = pressed && key === this.lastKey;
            if (altKey || ctrlKey || metaKey || shiftKey) {
              return;
            }
            if (!key) {
              return;
            }
            const seekByIncrement = (increment) => {
              player.currentTime = player.duration / 10 * increment;
            };
            if (pressed) {
              const focused = document.activeElement;
              if (is.element(focused)) {
                const {
                  editable
                } = player.config.selectors;
                const {
                  seek
                } = elements.inputs;
                if (focused !== seek && matches(focused, editable)) {
                  return;
                }
                if (event.key === " " && matches(focused, 'button, [role^="menuitem"]')) {
                  return;
                }
              }
              const preventDefault = [" ", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "c", "f", "k", "l", "m"];
              if (preventDefault.includes(key)) {
                event.preventDefault();
                event.stopPropagation();
              }
              switch (key) {
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  if (!repeat) {
                    seekByIncrement(parseInt(key, 10));
                  }
                  break;
                case " ":
                case "k":
                  if (!repeat) {
                    silencePromise(player.togglePlay());
                  }
                  break;
                case "ArrowUp":
                  player.increaseVolume(0.1);
                  break;
                case "ArrowDown":
                  player.decreaseVolume(0.1);
                  break;
                case "m":
                  if (!repeat) {
                    player.muted = !player.muted;
                  }
                  break;
                case "ArrowRight":
                  player.forward();
                  break;
                case "ArrowLeft":
                  player.rewind();
                  break;
                case "f":
                  player.fullscreen.toggle();
                  break;
                case "c":
                  if (!repeat) {
                    player.toggleCaptions();
                  }
                  break;
                case "l":
                  player.loop = !player.loop;
                  break;
              }
              if (key === "Escape" && !player.fullscreen.usingNative && player.fullscreen.active) {
                player.fullscreen.toggle();
              }
              this.lastKey = key;
            } else {
              this.lastKey = null;
            }
          }
          toggleMenu(event) {
            controls.toggleMenu.call(this.player, event);
          }
        }
        var loadjs_umd = createCommonjsModule(function(module2, exports2) {
          (function(root, factory) {
            {
              module2.exports = factory();
            }
          })(commonjsGlobal, function() {
            var devnull = function() {
            }, bundleIdCache = {}, bundleResultCache = {}, bundleCallbackQueue = {};
            function subscribe(bundleIds, callbackFn) {
              bundleIds = bundleIds.push ? bundleIds : [bundleIds];
              var depsNotFound = [], i = bundleIds.length, numWaiting = i, fn, bundleId, r, q;
              fn = function(bundleId2, pathsNotFound) {
                if (pathsNotFound.length)
                  depsNotFound.push(bundleId2);
                numWaiting--;
                if (!numWaiting)
                  callbackFn(depsNotFound);
              };
              while (i--) {
                bundleId = bundleIds[i];
                r = bundleResultCache[bundleId];
                if (r) {
                  fn(bundleId, r);
                  continue;
                }
                q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
                q.push(fn);
              }
            }
            function publish(bundleId, pathsNotFound) {
              if (!bundleId)
                return;
              var q = bundleCallbackQueue[bundleId];
              bundleResultCache[bundleId] = pathsNotFound;
              if (!q)
                return;
              while (q.length) {
                q[0](bundleId, pathsNotFound);
                q.splice(0, 1);
              }
            }
            function executeCallbacks(args, depsNotFound) {
              if (args.call)
                args = {
                  success: args
                };
              if (depsNotFound.length)
                (args.error || devnull)(depsNotFound);
              else
                (args.success || devnull)(args);
            }
            function loadFile(path, callbackFn, args, numTries) {
              var doc = document, async = args.async, maxTries = (args.numRetries || 0) + 1, beforeCallbackFn = args.before || devnull, pathname = path.replace(/[\?|#].*$/, ""), pathStripped = path.replace(/^(css|img)!/, ""), isLegacyIECss, e;
              numTries = numTries || 0;
              if (/(^css!|\.css$)/.test(pathname)) {
                e = doc.createElement("link");
                e.rel = "stylesheet";
                e.href = pathStripped;
                isLegacyIECss = "hideFocus" in e;
                if (isLegacyIECss && e.relList) {
                  isLegacyIECss = 0;
                  e.rel = "preload";
                  e.as = "style";
                }
              } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
                e = doc.createElement("img");
                e.src = pathStripped;
              } else {
                e = doc.createElement("script");
                e.src = path;
                e.async = async === void 0 ? true : async;
              }
              e.onload = e.onerror = e.onbeforeload = function(ev) {
                var result = ev.type[0];
                if (isLegacyIECss) {
                  try {
                    if (!e.sheet.cssText.length)
                      result = "e";
                  } catch (x) {
                    if (x.code != 18)
                      result = "e";
                  }
                }
                if (result == "e") {
                  numTries += 1;
                  if (numTries < maxTries) {
                    return loadFile(path, callbackFn, args, numTries);
                  }
                } else if (e.rel == "preload" && e.as == "style") {
                  return e.rel = "stylesheet";
                }
                callbackFn(path, result, ev.defaultPrevented);
              };
              if (beforeCallbackFn(path, e) !== false)
                doc.head.appendChild(e);
            }
            function loadFiles(paths, callbackFn, args) {
              paths = paths.push ? paths : [paths];
              var numWaiting = paths.length, x = numWaiting, pathsNotFound = [], fn, i;
              fn = function(path, result, defaultPrevented) {
                if (result == "e")
                  pathsNotFound.push(path);
                if (result == "b") {
                  if (defaultPrevented)
                    pathsNotFound.push(path);
                  else
                    return;
                }
                numWaiting--;
                if (!numWaiting)
                  callbackFn(pathsNotFound);
              };
              for (i = 0; i < x; i++)
                loadFile(paths[i], fn, args);
            }
            function loadjs(paths, arg1, arg2) {
              var bundleId, args;
              if (arg1 && arg1.trim)
                bundleId = arg1;
              args = (bundleId ? arg2 : arg1) || {};
              if (bundleId) {
                if (bundleId in bundleIdCache) {
                  throw "LoadJS";
                } else {
                  bundleIdCache[bundleId] = true;
                }
              }
              function loadFn(resolve, reject) {
                loadFiles(paths, function(pathsNotFound) {
                  executeCallbacks(args, pathsNotFound);
                  if (resolve) {
                    executeCallbacks({
                      success: resolve,
                      error: reject
                    }, pathsNotFound);
                  }
                  publish(bundleId, pathsNotFound);
                }, args);
              }
              if (args.returnPromise)
                return new Promise(loadFn);
              else
                loadFn();
            }
            loadjs.ready = function ready2(deps, args) {
              subscribe(deps, function(depsNotFound) {
                executeCallbacks(args, depsNotFound);
              });
              return loadjs;
            };
            loadjs.done = function done(bundleId) {
              publish(bundleId, []);
            };
            loadjs.reset = function reset() {
              bundleIdCache = {};
              bundleResultCache = {};
              bundleCallbackQueue = {};
            };
            loadjs.isDefined = function isDefined(bundleId) {
              return bundleId in bundleIdCache;
            };
            return loadjs;
          });
        });
        function loadScript(url) {
          return new Promise((resolve, reject) => {
            loadjs_umd(url, {
              success: resolve,
              error: reject
            });
          });
        }
        function parseId$1(url) {
          if (is.empty(url)) {
            return null;
          }
          if (is.number(Number(url))) {
            return url;
          }
          const regex = /^.*(vimeo.com\/|video\/)(\d+).*/;
          return url.match(regex) ? RegExp.$2 : url;
        }
        function parseHash(url) {
          const regex = /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/;
          const found = url.match(regex);
          return found && found.length === 5 ? found[4] : null;
        }
        function assurePlaybackState$1(play) {
          if (play && !this.embed.hasPlayed) {
            this.embed.hasPlayed = true;
          }
          if (this.media.paused === play) {
            this.media.paused = !play;
            triggerEvent.call(this, this.media, play ? "play" : "pause");
          }
        }
        const vimeo = {
          setup() {
            const player = this;
            toggleClass(player.elements.wrapper, player.config.classNames.embed, true);
            player.options.speed = player.config.speed.options;
            setAspectRatio.call(player);
            if (!is.object(window.Vimeo)) {
              loadScript(player.config.urls.vimeo.sdk).then(() => {
                vimeo.ready.call(player);
              }).catch((error) => {
                player.debug.warn("Vimeo SDK (player.js) failed to load", error);
              });
            } else {
              vimeo.ready.call(player);
            }
          },
          ready() {
            const player = this;
            const config = player.config.vimeo;
            const _a = config, {
              premium,
              referrerPolicy
            } = _a, frameParams = __objRest(_a, [
              "premium",
              "referrerPolicy"
            ]);
            let source2 = player.media.getAttribute("src");
            let hash = "";
            if (is.empty(source2)) {
              source2 = player.media.getAttribute(player.config.attributes.embed.id);
              hash = player.media.getAttribute(player.config.attributes.embed.hash);
            } else {
              hash = parseHash(source2);
            }
            const hashParam = hash ? {
              h: hash
            } : {};
            if (premium) {
              Object.assign(frameParams, {
                controls: false,
                sidedock: false
              });
            }
            const params = buildUrlParams(__spreadValues(__spreadValues({
              loop: player.config.loop.active,
              autoplay: player.autoplay,
              muted: player.muted,
              gesture: "media",
              playsinline: player.config.playsinline
            }, hashParam), frameParams));
            const id = parseId$1(source2);
            const iframe = createElement("iframe");
            const src = format(player.config.urls.vimeo.iframe, id, params);
            iframe.setAttribute("src", src);
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture", "encrypted-media", "accelerometer", "gyroscope"].join("; "));
            if (!is.empty(referrerPolicy)) {
              iframe.setAttribute("referrerPolicy", referrerPolicy);
            }
            if (premium || !config.customControls) {
              iframe.setAttribute("data-poster", player.poster);
              player.media = replaceElement(iframe, player.media);
            } else {
              const wrapper = createElement("div", {
                class: player.config.classNames.embedContainer,
                "data-poster": player.poster
              });
              wrapper.appendChild(iframe);
              player.media = replaceElement(wrapper, player.media);
            }
            if (!config.customControls) {
              fetch(format(player.config.urls.vimeo.api, src)).then((response) => {
                if (is.empty(response) || !response.thumbnail_url) {
                  return;
                }
                ui.setPoster.call(player, response.thumbnail_url).catch(() => {
                });
              });
            }
            player.embed = new window.Vimeo.Player(iframe, {
              autopause: player.config.autopause,
              muted: player.muted
            });
            player.media.paused = true;
            player.media.currentTime = 0;
            if (player.supported.ui) {
              player.embed.disableTextTrack();
            }
            player.media.play = () => {
              assurePlaybackState$1.call(player, true);
              return player.embed.play();
            };
            player.media.pause = () => {
              assurePlaybackState$1.call(player, false);
              return player.embed.pause();
            };
            player.media.stop = () => {
              player.pause();
              player.currentTime = 0;
            };
            let {
              currentTime
            } = player.media;
            Object.defineProperty(player.media, "currentTime", {
              get() {
                return currentTime;
              },
              set(time) {
                const {
                  embed,
                  media: media2,
                  paused,
                  volume: volume2
                } = player;
                const restorePause = paused && !embed.hasPlayed;
                media2.seeking = true;
                triggerEvent.call(player, media2, "seeking");
                Promise.resolve(restorePause && embed.setVolume(0)).then(() => embed.setCurrentTime(time)).then(() => restorePause && embed.pause()).then(() => restorePause && embed.setVolume(volume2)).catch(() => {
                });
              }
            });
            let speed = player.config.speed.selected;
            Object.defineProperty(player.media, "playbackRate", {
              get() {
                return speed;
              },
              set(input) {
                player.embed.setPlaybackRate(input).then(() => {
                  speed = input;
                  triggerEvent.call(player, player.media, "ratechange");
                }).catch(() => {
                  player.options.speed = [1];
                });
              }
            });
            let {
              volume
            } = player.config;
            Object.defineProperty(player.media, "volume", {
              get() {
                return volume;
              },
              set(input) {
                player.embed.setVolume(input).then(() => {
                  volume = input;
                  triggerEvent.call(player, player.media, "volumechange");
                });
              }
            });
            let {
              muted
            } = player.config;
            Object.defineProperty(player.media, "muted", {
              get() {
                return muted;
              },
              set(input) {
                const toggle = is.boolean(input) ? input : false;
                player.embed.setMuted(toggle ? true : player.config.muted).then(() => {
                  muted = toggle;
                  triggerEvent.call(player, player.media, "volumechange");
                });
              }
            });
            let {
              loop
            } = player.config;
            Object.defineProperty(player.media, "loop", {
              get() {
                return loop;
              },
              set(input) {
                const toggle = is.boolean(input) ? input : player.config.loop.active;
                player.embed.setLoop(toggle).then(() => {
                  loop = toggle;
                });
              }
            });
            let currentSrc;
            player.embed.getVideoUrl().then((value) => {
              currentSrc = value;
              controls.setDownloadUrl.call(player);
            }).catch((error) => {
              this.debug.warn(error);
            });
            Object.defineProperty(player.media, "currentSrc", {
              get() {
                return currentSrc;
              }
            });
            Object.defineProperty(player.media, "ended", {
              get() {
                return player.currentTime === player.duration;
              }
            });
            Promise.all([player.embed.getVideoWidth(), player.embed.getVideoHeight()]).then((dimensions) => {
              const [width, height] = dimensions;
              player.embed.ratio = roundAspectRatio(width, height);
              setAspectRatio.call(this);
            });
            player.embed.setAutopause(player.config.autopause).then((state) => {
              player.config.autopause = state;
            });
            player.embed.getVideoTitle().then((title) => {
              player.config.title = title;
              ui.setTitle.call(this);
            });
            player.embed.getCurrentTime().then((value) => {
              currentTime = value;
              triggerEvent.call(player, player.media, "timeupdate");
            });
            player.embed.getDuration().then((value) => {
              player.media.duration = value;
              triggerEvent.call(player, player.media, "durationchange");
            });
            player.embed.getTextTracks().then((tracks) => {
              player.media.textTracks = tracks;
              captions.setup.call(player);
            });
            player.embed.on("cuechange", ({
              cues = []
            }) => {
              const strippedCues = cues.map((cue) => stripHTML(cue.text));
              captions.updateCues.call(player, strippedCues);
            });
            player.embed.on("loaded", () => {
              player.embed.getPaused().then((paused) => {
                assurePlaybackState$1.call(player, !paused);
                if (!paused) {
                  triggerEvent.call(player, player.media, "playing");
                }
              });
              if (is.element(player.embed.element) && player.supported.ui) {
                const frame = player.embed.element;
                frame.setAttribute("tabindex", -1);
              }
            });
            player.embed.on("bufferstart", () => {
              triggerEvent.call(player, player.media, "waiting");
            });
            player.embed.on("bufferend", () => {
              triggerEvent.call(player, player.media, "playing");
            });
            player.embed.on("play", () => {
              assurePlaybackState$1.call(player, true);
              triggerEvent.call(player, player.media, "playing");
            });
            player.embed.on("pause", () => {
              assurePlaybackState$1.call(player, false);
            });
            player.embed.on("timeupdate", (data) => {
              player.media.seeking = false;
              currentTime = data.seconds;
              triggerEvent.call(player, player.media, "timeupdate");
            });
            player.embed.on("progress", (data) => {
              player.media.buffered = data.percent;
              triggerEvent.call(player, player.media, "progress");
              if (parseInt(data.percent, 10) === 1) {
                triggerEvent.call(player, player.media, "canplaythrough");
              }
              player.embed.getDuration().then((value) => {
                if (value !== player.media.duration) {
                  player.media.duration = value;
                  triggerEvent.call(player, player.media, "durationchange");
                }
              });
            });
            player.embed.on("seeked", () => {
              player.media.seeking = false;
              triggerEvent.call(player, player.media, "seeked");
            });
            player.embed.on("ended", () => {
              player.media.paused = true;
              triggerEvent.call(player, player.media, "ended");
            });
            player.embed.on("error", (detail) => {
              player.media.error = detail;
              triggerEvent.call(player, player.media, "error");
            });
            if (config.customControls) {
              setTimeout(() => ui.build.call(player), 0);
            }
          }
        };
        function parseId(url) {
          if (is.empty(url)) {
            return null;
          }
          const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
          return url.match(regex) ? RegExp.$2 : url;
        }
        function assurePlaybackState(play) {
          if (play && !this.embed.hasPlayed) {
            this.embed.hasPlayed = true;
          }
          if (this.media.paused === play) {
            this.media.paused = !play;
            triggerEvent.call(this, this.media, play ? "play" : "pause");
          }
        }
        function getHost(config) {
          if (config.noCookie) {
            return "https://www.youtube-nocookie.com";
          }
          if (window.location.protocol === "http:") {
            return "http://www.youtube.com";
          }
          return void 0;
        }
        const youtube = {
          setup() {
            toggleClass(this.elements.wrapper, this.config.classNames.embed, true);
            if (is.object(window.YT) && is.function(window.YT.Player)) {
              youtube.ready.call(this);
            } else {
              const callback = window.onYouTubeIframeAPIReady;
              window.onYouTubeIframeAPIReady = () => {
                if (is.function(callback)) {
                  callback();
                }
                youtube.ready.call(this);
              };
              loadScript(this.config.urls.youtube.sdk).catch((error) => {
                this.debug.warn("YouTube API failed to load", error);
              });
            }
          },
          getTitle(videoId) {
            const url = format(this.config.urls.youtube.api, videoId);
            fetch(url).then((data) => {
              if (is.object(data)) {
                const {
                  title,
                  height,
                  width
                } = data;
                this.config.title = title;
                ui.setTitle.call(this);
                this.embed.ratio = roundAspectRatio(width, height);
              }
              setAspectRatio.call(this);
            }).catch(() => {
              setAspectRatio.call(this);
            });
          },
          ready() {
            const player = this;
            const config = player.config.youtube;
            const currentId = player.media && player.media.getAttribute("id");
            if (!is.empty(currentId) && currentId.startsWith("youtube-")) {
              return;
            }
            let source2 = player.media.getAttribute("src");
            if (is.empty(source2)) {
              source2 = player.media.getAttribute(this.config.attributes.embed.id);
            }
            const videoId = parseId(source2);
            const id = generateId(player.provider);
            const container = createElement("div", {
              id,
              "data-poster": config.customControls ? player.poster : void 0
            });
            player.media = replaceElement(container, player.media);
            if (config.customControls) {
              const posterSrc = (s) => `https://i.ytimg.com/vi/${videoId}/${s}default.jpg`;
              loadImage(posterSrc("maxres"), 121).catch(() => loadImage(posterSrc("sd"), 121)).catch(() => loadImage(posterSrc("hq"))).then((image) => ui.setPoster.call(player, image.src)).then((src) => {
                if (!src.includes("maxres")) {
                  player.elements.poster.style.backgroundSize = "cover";
                }
              }).catch(() => {
              });
            }
            player.embed = new window.YT.Player(player.media, {
              videoId,
              host: getHost(config),
              playerVars: extend({}, {
                autoplay: player.config.autoplay ? 1 : 0,
                hl: player.config.hl,
                controls: player.supported.ui && config.customControls ? 0 : 1,
                disablekb: 1,
                playsinline: player.config.playsinline && !player.config.fullscreen.iosNative ? 1 : 0,
                cc_load_policy: player.captions.active ? 1 : 0,
                cc_lang_pref: player.config.captions.language,
                widget_referrer: window ? window.location.href : null
              }, config),
              events: {
                onError(event) {
                  if (!player.media.error) {
                    const code = event.data;
                    const message = {
                      2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                      5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                      100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                      101: "The owner of the requested video does not allow it to be played in embedded players.",
                      150: "The owner of the requested video does not allow it to be played in embedded players."
                    }[code] || "An unknown error occurred";
                    player.media.error = {
                      code,
                      message
                    };
                    triggerEvent.call(player, player.media, "error");
                  }
                },
                onPlaybackRateChange(event) {
                  const instance = event.target;
                  player.media.playbackRate = instance.getPlaybackRate();
                  triggerEvent.call(player, player.media, "ratechange");
                },
                onReady(event) {
                  if (is.function(player.media.play)) {
                    return;
                  }
                  const instance = event.target;
                  youtube.getTitle.call(player, videoId);
                  player.media.play = () => {
                    assurePlaybackState.call(player, true);
                    instance.playVideo();
                  };
                  player.media.pause = () => {
                    assurePlaybackState.call(player, false);
                    instance.pauseVideo();
                  };
                  player.media.stop = () => {
                    instance.stopVideo();
                  };
                  player.media.duration = instance.getDuration();
                  player.media.paused = true;
                  player.media.currentTime = 0;
                  Object.defineProperty(player.media, "currentTime", {
                    get() {
                      return Number(instance.getCurrentTime());
                    },
                    set(time) {
                      if (player.paused && !player.embed.hasPlayed) {
                        player.embed.mute();
                      }
                      player.media.seeking = true;
                      triggerEvent.call(player, player.media, "seeking");
                      instance.seekTo(time);
                    }
                  });
                  Object.defineProperty(player.media, "playbackRate", {
                    get() {
                      return instance.getPlaybackRate();
                    },
                    set(input) {
                      instance.setPlaybackRate(input);
                    }
                  });
                  let {
                    volume
                  } = player.config;
                  Object.defineProperty(player.media, "volume", {
                    get() {
                      return volume;
                    },
                    set(input) {
                      volume = input;
                      instance.setVolume(volume * 100);
                      triggerEvent.call(player, player.media, "volumechange");
                    }
                  });
                  let {
                    muted
                  } = player.config;
                  Object.defineProperty(player.media, "muted", {
                    get() {
                      return muted;
                    },
                    set(input) {
                      const toggle = is.boolean(input) ? input : muted;
                      muted = toggle;
                      instance[toggle ? "mute" : "unMute"]();
                      instance.setVolume(volume * 100);
                      triggerEvent.call(player, player.media, "volumechange");
                    }
                  });
                  Object.defineProperty(player.media, "currentSrc", {
                    get() {
                      return instance.getVideoUrl();
                    }
                  });
                  Object.defineProperty(player.media, "ended", {
                    get() {
                      return player.currentTime === player.duration;
                    }
                  });
                  const speeds = instance.getAvailablePlaybackRates();
                  player.options.speed = speeds.filter((s) => player.config.speed.options.includes(s));
                  if (player.supported.ui && config.customControls) {
                    player.media.setAttribute("tabindex", -1);
                  }
                  triggerEvent.call(player, player.media, "timeupdate");
                  triggerEvent.call(player, player.media, "durationchange");
                  clearInterval(player.timers.buffering);
                  player.timers.buffering = setInterval(() => {
                    player.media.buffered = instance.getVideoLoadedFraction();
                    if (player.media.lastBuffered === null || player.media.lastBuffered < player.media.buffered) {
                      triggerEvent.call(player, player.media, "progress");
                    }
                    player.media.lastBuffered = player.media.buffered;
                    if (player.media.buffered === 1) {
                      clearInterval(player.timers.buffering);
                      triggerEvent.call(player, player.media, "canplaythrough");
                    }
                  }, 200);
                  if (config.customControls) {
                    setTimeout(() => ui.build.call(player), 50);
                  }
                },
                onStateChange(event) {
                  const instance = event.target;
                  clearInterval(player.timers.playing);
                  const seeked = player.media.seeking && [1, 2].includes(event.data);
                  if (seeked) {
                    player.media.seeking = false;
                    triggerEvent.call(player, player.media, "seeked");
                  }
                  switch (event.data) {
                    case -1:
                      triggerEvent.call(player, player.media, "timeupdate");
                      player.media.buffered = instance.getVideoLoadedFraction();
                      triggerEvent.call(player, player.media, "progress");
                      break;
                    case 0:
                      assurePlaybackState.call(player, false);
                      if (player.media.loop) {
                        instance.stopVideo();
                        instance.playVideo();
                      } else {
                        triggerEvent.call(player, player.media, "ended");
                      }
                      break;
                    case 1:
                      if (config.customControls && !player.config.autoplay && player.media.paused && !player.embed.hasPlayed) {
                        player.media.pause();
                      } else {
                        assurePlaybackState.call(player, true);
                        triggerEvent.call(player, player.media, "playing");
                        player.timers.playing = setInterval(() => {
                          triggerEvent.call(player, player.media, "timeupdate");
                        }, 50);
                        if (player.media.duration !== instance.getDuration()) {
                          player.media.duration = instance.getDuration();
                          triggerEvent.call(player, player.media, "durationchange");
                        }
                      }
                      break;
                    case 2:
                      if (!player.muted) {
                        player.embed.unMute();
                      }
                      assurePlaybackState.call(player, false);
                      break;
                    case 3:
                      triggerEvent.call(player, player.media, "waiting");
                      break;
                  }
                  triggerEvent.call(player, player.elements.container, "statechange", false, {
                    code: event.data
                  });
                }
              }
            });
          }
        };
        const media = {
          setup() {
            if (!this.media) {
              this.debug.warn("No media element found!");
              return;
            }
            toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), true);
            toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), true);
            if (this.isEmbed) {
              toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), true);
            }
            if (this.isVideo) {
              this.elements.wrapper = createElement("div", {
                class: this.config.classNames.video
              });
              wrap(this.media, this.elements.wrapper);
              this.elements.poster = createElement("div", {
                class: this.config.classNames.poster
              });
              this.elements.wrapper.appendChild(this.elements.poster);
            }
            if (this.isHTML5) {
              html5.setup.call(this);
            } else if (this.isYouTube) {
              youtube.setup.call(this);
            } else if (this.isVimeo) {
              vimeo.setup.call(this);
            }
          }
        };
        const destroy = (instance) => {
          if (instance.manager) {
            instance.manager.destroy();
          }
          if (instance.elements.displayContainer) {
            instance.elements.displayContainer.destroy();
          }
          instance.elements.container.remove();
        };
        class Ads {
          constructor(player) {
            _defineProperty$1(this, "load", () => {
              if (!this.enabled) {
                return;
              }
              if (!is.object(window.google) || !is.object(window.google.ima)) {
                loadScript(this.player.config.urls.googleIMA.sdk).then(() => {
                  this.ready();
                }).catch(() => {
                  this.trigger("error", new Error("Google IMA SDK failed to load"));
                });
              } else {
                this.ready();
              }
            });
            _defineProperty$1(this, "ready", () => {
              if (!this.enabled) {
                destroy(this);
              }
              this.startSafetyTimer(12e3, "ready()");
              this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              });
              this.listeners();
              this.setupIMA();
            });
            _defineProperty$1(this, "setupIMA", () => {
              this.elements.container = createElement("div", {
                class: this.player.config.classNames.ads
              });
              this.player.elements.container.appendChild(this.elements.container);
              google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
              google.ima.settings.setLocale(this.player.config.ads.language);
              google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline);
              this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media);
              this.loader = new google.ima.AdsLoader(this.elements.displayContainer);
              this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (event) => this.onAdsManagerLoaded(event), false);
              this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error), false);
              this.requestAds();
            });
            _defineProperty$1(this, "requestAds", () => {
              const {
                container
              } = this.player.elements;
              try {
                const request = new google.ima.AdsRequest();
                request.adTagUrl = this.tagUrl;
                request.linearAdSlotWidth = container.offsetWidth;
                request.linearAdSlotHeight = container.offsetHeight;
                request.nonLinearAdSlotWidth = container.offsetWidth;
                request.nonLinearAdSlotHeight = container.offsetHeight;
                request.forceNonLinearFullSlot = false;
                request.setAdWillPlayMuted(!this.player.muted);
                this.loader.requestAds(request);
              } catch (error) {
                this.onAdError(error);
              }
            });
            _defineProperty$1(this, "pollCountdown", (start = false) => {
              if (!start) {
                clearInterval(this.countdownTimer);
                this.elements.container.removeAttribute("data-badge-text");
                return;
              }
              const update = () => {
                const time = formatTime(Math.max(this.manager.getRemainingTime(), 0));
                const label = `${i18n.get("advertisement", this.player.config)} - ${time}`;
                this.elements.container.setAttribute("data-badge-text", label);
              };
              this.countdownTimer = setInterval(update, 100);
            });
            _defineProperty$1(this, "onAdsManagerLoaded", (event) => {
              if (!this.enabled) {
                return;
              }
              const settings = new google.ima.AdsRenderingSettings();
              settings.restoreCustomPlaybackStateOnAdBreakComplete = true;
              settings.enablePreloading = true;
              this.manager = event.getAdsManager(this.player, settings);
              this.cuePoints = this.manager.getCuePoints();
              this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (error) => this.onAdError(error));
              Object.keys(google.ima.AdEvent.Type).forEach((type) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[type], (e) => this.onAdEvent(e));
              });
              this.trigger("loaded");
            });
            _defineProperty$1(this, "addCuePoints", () => {
              if (!is.empty(this.cuePoints)) {
                this.cuePoints.forEach((cuePoint) => {
                  if (cuePoint !== 0 && cuePoint !== -1 && cuePoint < this.player.duration) {
                    const seekElement = this.player.elements.progress;
                    if (is.element(seekElement)) {
                      const cuePercentage = 100 / this.player.duration * cuePoint;
                      const cue = createElement("span", {
                        class: this.player.config.classNames.cues
                      });
                      cue.style.left = `${cuePercentage.toString()}%`;
                      seekElement.appendChild(cue);
                    }
                  }
                });
              }
            });
            _defineProperty$1(this, "onAdEvent", (event) => {
              const {
                container
              } = this.player.elements;
              const ad = event.getAd();
              const adData = event.getAdData();
              const dispatchEvent = (type) => {
                triggerEvent.call(this.player, this.player.media, `ads${type.replace(/_/g, "").toLowerCase()}`);
              };
              dispatchEvent(event.type);
              switch (event.type) {
                case google.ima.AdEvent.Type.LOADED:
                  this.trigger("loaded");
                  this.pollCountdown(true);
                  if (!ad.isLinear()) {
                    ad.width = container.offsetWidth;
                    ad.height = container.offsetHeight;
                  }
                  break;
                case google.ima.AdEvent.Type.STARTED:
                  this.manager.setVolume(this.player.volume);
                  break;
                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                  if (this.player.ended) {
                    this.loadAds();
                  } else {
                    this.loader.contentComplete();
                  }
                  break;
                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                  this.pauseContent();
                  break;
                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                  this.pollCountdown();
                  this.resumeContent();
                  break;
                case google.ima.AdEvent.Type.LOG:
                  if (adData.adError) {
                    this.player.debug.warn(`Non-fatal ad error: ${adData.adError.getMessage()}`);
                  }
                  break;
              }
            });
            _defineProperty$1(this, "onAdError", (event) => {
              this.cancel();
              this.player.debug.warn("Ads error", event);
            });
            _defineProperty$1(this, "listeners", () => {
              const {
                container
              } = this.player.elements;
              let time;
              this.player.on("canplay", () => {
                this.addCuePoints();
              });
              this.player.on("ended", () => {
                this.loader.contentComplete();
              });
              this.player.on("timeupdate", () => {
                time = this.player.currentTime;
              });
              this.player.on("seeked", () => {
                const seekedTime = this.player.currentTime;
                if (is.empty(this.cuePoints)) {
                  return;
                }
                this.cuePoints.forEach((cuePoint, index) => {
                  if (time < cuePoint && cuePoint < seekedTime) {
                    this.manager.discardAdBreak();
                    this.cuePoints.splice(index, 1);
                  }
                });
              });
              window.addEventListener("resize", () => {
                if (this.manager) {
                  this.manager.resize(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
                }
              });
            });
            _defineProperty$1(this, "play", () => {
              const {
                container
              } = this.player.elements;
              if (!this.managerPromise) {
                this.resumeContent();
              }
              this.managerPromise.then(() => {
                this.manager.setVolume(this.player.volume);
                this.elements.displayContainer.initialize();
                try {
                  if (!this.initialized) {
                    this.manager.init(container.offsetWidth, container.offsetHeight, google.ima.ViewMode.NORMAL);
                    this.manager.start();
                  }
                  this.initialized = true;
                } catch (adError) {
                  this.onAdError(adError);
                }
              }).catch(() => {
              });
            });
            _defineProperty$1(this, "resumeContent", () => {
              this.elements.container.style.zIndex = "";
              this.playing = false;
              silencePromise(this.player.media.play());
            });
            _defineProperty$1(this, "pauseContent", () => {
              this.elements.container.style.zIndex = 3;
              this.playing = true;
              this.player.media.pause();
            });
            _defineProperty$1(this, "cancel", () => {
              if (this.initialized) {
                this.resumeContent();
              }
              this.trigger("error");
              this.loadAds();
            });
            _defineProperty$1(this, "loadAds", () => {
              this.managerPromise.then(() => {
                if (this.manager) {
                  this.manager.destroy();
                }
                this.managerPromise = new Promise((resolve) => {
                  this.on("loaded", resolve);
                  this.player.debug.log(this.manager);
                });
                this.initialized = false;
                this.requestAds();
              }).catch(() => {
              });
            });
            _defineProperty$1(this, "trigger", (event, ...args) => {
              const handlers = this.events[event];
              if (is.array(handlers)) {
                handlers.forEach((handler) => {
                  if (is.function(handler)) {
                    handler.apply(this, args);
                  }
                });
              }
            });
            _defineProperty$1(this, "on", (event, callback) => {
              if (!is.array(this.events[event])) {
                this.events[event] = [];
              }
              this.events[event].push(callback);
              return this;
            });
            _defineProperty$1(this, "startSafetyTimer", (time, from) => {
              this.player.debug.log(`Safety timer invoked from: ${from}`);
              this.safetyTimer = setTimeout(() => {
                this.cancel();
                this.clearSafetyTimer("startSafetyTimer()");
              }, time);
            });
            _defineProperty$1(this, "clearSafetyTimer", (from) => {
              if (!is.nullOrUndefined(this.safetyTimer)) {
                this.player.debug.log(`Safety timer cleared from: ${from}`);
                clearTimeout(this.safetyTimer);
                this.safetyTimer = null;
              }
            });
            this.player = player;
            this.config = player.config.ads;
            this.playing = false;
            this.initialized = false;
            this.elements = {
              container: null,
              displayContainer: null
            };
            this.manager = null;
            this.loader = null;
            this.cuePoints = null;
            this.events = {};
            this.safetyTimer = null;
            this.countdownTimer = null;
            this.managerPromise = new Promise((resolve, reject) => {
              this.on("loaded", resolve);
              this.on("error", reject);
            });
            this.load();
          }
          get enabled() {
            const {
              config
            } = this;
            return this.player.isHTML5 && this.player.isVideo && config.enabled && (!is.empty(config.publisherId) || is.url(config.tagUrl));
          }
          get tagUrl() {
            const {
              config
            } = this;
            if (is.url(config.tagUrl)) {
              return config.tagUrl;
            }
            const params = {
              AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
              AV_CHANNELID: "5a0458dc28a06145e4519d21",
              AV_URL: window.location.hostname,
              cb: Date.now(),
              AV_WIDTH: 640,
              AV_HEIGHT: 480,
              AV_CDIM2: config.publisherId
            };
            const base = "https://go.aniview.com/api/adserver6/vast/";
            return `${base}?${buildUrlParams(params)}`;
          }
        }
        function clamp(input = 0, min = 0, max = 255) {
          return Math.min(Math.max(input, min), max);
        }
        const parseVtt = (vttDataString) => {
          const processedList = [];
          const frames = vttDataString.split(/\r\n\r\n|\n\n|\r\r/);
          frames.forEach((frame) => {
            const result = {};
            const lines = frame.split(/\r\n|\n|\r/);
            lines.forEach((line) => {
              if (!is.number(result.startTime)) {
                const matchTimes = line.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                if (matchTimes) {
                  result.startTime = Number(matchTimes[1] || 0) * 60 * 60 + Number(matchTimes[2]) * 60 + Number(matchTimes[3]) + Number(`0.${matchTimes[4]}`);
                  result.endTime = Number(matchTimes[6] || 0) * 60 * 60 + Number(matchTimes[7]) * 60 + Number(matchTimes[8]) + Number(`0.${matchTimes[9]}`);
                }
              } else if (!is.empty(line.trim()) && is.empty(result.text)) {
                const lineSplit = line.trim().split("#xywh=");
                [result.text] = lineSplit;
                if (lineSplit[1]) {
                  [result.x, result.y, result.w, result.h] = lineSplit[1].split(",");
                }
              }
            });
            if (result.text) {
              processedList.push(result);
            }
          });
          return processedList;
        };
        const fitRatio = (ratio, outer) => {
          const targetRatio = outer.width / outer.height;
          const result = {};
          if (ratio > targetRatio) {
            result.width = outer.width;
            result.height = 1 / ratio * outer.width;
          } else {
            result.height = outer.height;
            result.width = ratio * outer.height;
          }
          return result;
        };
        class PreviewThumbnails {
          constructor(player) {
            _defineProperty$1(this, "load", () => {
              if (this.player.elements.display.seekTooltip) {
                this.player.elements.display.seekTooltip.hidden = this.enabled;
              }
              if (!this.enabled)
                return;
              this.getThumbnails().then(() => {
                if (!this.enabled) {
                  return;
                }
                this.render();
                this.determineContainerAutoSizing();
                this.listeners();
                this.loaded = true;
              });
            });
            _defineProperty$1(this, "getThumbnails", () => {
              return new Promise((resolve) => {
                const {
                  src
                } = this.player.config.previewThumbnails;
                if (is.empty(src)) {
                  throw new Error("Missing previewThumbnails.src config attribute");
                }
                const sortAndResolve = () => {
                  this.thumbnails.sort((x, y) => x.height - y.height);
                  this.player.debug.log("Preview thumbnails", this.thumbnails);
                  resolve();
                };
                if (is.function(src)) {
                  src((thumbnails) => {
                    this.thumbnails = thumbnails;
                    sortAndResolve();
                  });
                } else {
                  const urls = is.string(src) ? [src] : src;
                  const promises = urls.map((u) => this.getThumbnail(u));
                  Promise.all(promises).then(sortAndResolve);
                }
              });
            });
            _defineProperty$1(this, "getThumbnail", (url) => {
              return new Promise((resolve) => {
                fetch(url).then((response) => {
                  const thumbnail = {
                    frames: parseVtt(response),
                    height: null,
                    urlPrefix: ""
                  };
                  if (!thumbnail.frames[0].text.startsWith("/") && !thumbnail.frames[0].text.startsWith("http://") && !thumbnail.frames[0].text.startsWith("https://")) {
                    thumbnail.urlPrefix = url.substring(0, url.lastIndexOf("/") + 1);
                  }
                  const tempImage = new Image();
                  tempImage.onload = () => {
                    thumbnail.height = tempImage.naturalHeight;
                    thumbnail.width = tempImage.naturalWidth;
                    this.thumbnails.push(thumbnail);
                    resolve();
                  };
                  tempImage.src = thumbnail.urlPrefix + thumbnail.frames[0].text;
                });
              });
            });
            _defineProperty$1(this, "startMove", (event) => {
              if (!this.loaded)
                return;
              if (!is.event(event) || !["touchmove", "mousemove"].includes(event.type))
                return;
              if (!this.player.media.duration)
                return;
              if (event.type === "touchmove") {
                this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
              } else {
                var _this$player$config$m, _this$player$config$m2;
                const clientRect = this.player.elements.progress.getBoundingClientRect();
                const percentage = 100 / clientRect.width * (event.pageX - clientRect.left);
                this.seekTime = this.player.media.duration * (percentage / 100);
                if (this.seekTime < 0) {
                  this.seekTime = 0;
                }
                if (this.seekTime > this.player.media.duration - 1) {
                  this.seekTime = this.player.media.duration - 1;
                }
                this.mousePosX = event.pageX;
                this.elements.thumb.time.innerText = formatTime(this.seekTime);
                const point = (_this$player$config$m = this.player.config.markers) === null || _this$player$config$m === void 0 ? void 0 : (_this$player$config$m2 = _this$player$config$m.points) === null || _this$player$config$m2 === void 0 ? void 0 : _this$player$config$m2.find(({
                  time: t
                }) => t === Math.round(this.seekTime));
                if (point) {
                  this.elements.thumb.time.insertAdjacentHTML("afterbegin", `${point.label}<br>`);
                }
              }
              this.showImageAtCurrentTime();
            });
            _defineProperty$1(this, "endMove", () => {
              this.toggleThumbContainer(false, true);
            });
            _defineProperty$1(this, "startScrubbing", (event) => {
              if (is.nullOrUndefined(event.button) || event.button === false || event.button === 0) {
                this.mouseDown = true;
                if (this.player.media.duration) {
                  this.toggleScrubbingContainer(true);
                  this.toggleThumbContainer(false, true);
                  this.showImageAtCurrentTime();
                }
              }
            });
            _defineProperty$1(this, "endScrubbing", () => {
              this.mouseDown = false;
              if (Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime)) {
                this.toggleScrubbingContainer(false);
              } else {
                once.call(this.player, this.player.media, "timeupdate", () => {
                  if (!this.mouseDown) {
                    this.toggleScrubbingContainer(false);
                  }
                });
              }
            });
            _defineProperty$1(this, "listeners", () => {
              this.player.on("play", () => {
                this.toggleThumbContainer(false, true);
              });
              this.player.on("seeked", () => {
                this.toggleThumbContainer(false);
              });
              this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
            });
            _defineProperty$1(this, "render", () => {
              this.elements.thumb.container = createElement("div", {
                class: this.player.config.classNames.previewThumbnails.thumbContainer
              });
              this.elements.thumb.imageContainer = createElement("div", {
                class: this.player.config.classNames.previewThumbnails.imageContainer
              });
              this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
              const timeContainer = createElement("div", {
                class: this.player.config.classNames.previewThumbnails.timeContainer
              });
              this.elements.thumb.time = createElement("span", {}, "00:00");
              timeContainer.appendChild(this.elements.thumb.time);
              this.elements.thumb.imageContainer.appendChild(timeContainer);
              if (is.element(this.player.elements.progress)) {
                this.player.elements.progress.appendChild(this.elements.thumb.container);
              }
              this.elements.scrubbing.container = createElement("div", {
                class: this.player.config.classNames.previewThumbnails.scrubbingContainer
              });
              this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
            });
            _defineProperty$1(this, "destroy", () => {
              if (this.elements.thumb.container) {
                this.elements.thumb.container.remove();
              }
              if (this.elements.scrubbing.container) {
                this.elements.scrubbing.container.remove();
              }
            });
            _defineProperty$1(this, "showImageAtCurrentTime", () => {
              if (this.mouseDown) {
                this.setScrubbingContainerSize();
              } else {
                this.setThumbContainerSizeAndPos();
              }
              const thumbNum = this.thumbnails[0].frames.findIndex((frame) => this.seekTime >= frame.startTime && this.seekTime <= frame.endTime);
              const hasThumb = thumbNum >= 0;
              let qualityIndex = 0;
              if (!this.mouseDown) {
                this.toggleThumbContainer(hasThumb);
              }
              if (!hasThumb) {
                return;
              }
              this.thumbnails.forEach((thumbnail, index) => {
                if (this.loadedImages.includes(thumbnail.frames[thumbNum].text)) {
                  qualityIndex = index;
                }
              });
              if (thumbNum !== this.showingThumb) {
                this.showingThumb = thumbNum;
                this.loadImage(qualityIndex);
              }
            });
            _defineProperty$1(this, "loadImage", (qualityIndex = 0) => {
              const thumbNum = this.showingThumb;
              const thumbnail = this.thumbnails[qualityIndex];
              const {
                urlPrefix
              } = thumbnail;
              const frame = thumbnail.frames[thumbNum];
              const thumbFilename = thumbnail.frames[thumbNum].text;
              const thumbUrl = urlPrefix + thumbFilename;
              if (!this.currentImageElement || this.currentImageElement.dataset.filename !== thumbFilename) {
                if (this.loadingImage && this.usingSprites) {
                  this.loadingImage.onload = null;
                }
                const previewImage = new Image();
                previewImage.src = thumbUrl;
                previewImage.dataset.index = thumbNum;
                previewImage.dataset.filename = thumbFilename;
                this.showingThumbFilename = thumbFilename;
                this.player.debug.log(`Loading image: ${thumbUrl}`);
                previewImage.onload = () => this.showImage(previewImage, frame, qualityIndex, thumbNum, thumbFilename, true);
                this.loadingImage = previewImage;
                this.removeOldImages(previewImage);
              } else {
                this.showImage(this.currentImageElement, frame, qualityIndex, thumbNum, thumbFilename, false);
                this.currentImageElement.dataset.index = thumbNum;
                this.removeOldImages(this.currentImageElement);
              }
            });
            _defineProperty$1(this, "showImage", (previewImage, frame, qualityIndex, thumbNum, thumbFilename, newImage = true) => {
              this.player.debug.log(`Showing thumb: ${thumbFilename}. num: ${thumbNum}. qual: ${qualityIndex}. newimg: ${newImage}`);
              this.setImageSizeAndOffset(previewImage, frame);
              if (newImage) {
                this.currentImageContainer.appendChild(previewImage);
                this.currentImageElement = previewImage;
                if (!this.loadedImages.includes(thumbFilename)) {
                  this.loadedImages.push(thumbFilename);
                }
              }
              this.preloadNearby(thumbNum, true).then(this.preloadNearby(thumbNum, false)).then(this.getHigherQuality(qualityIndex, previewImage, frame, thumbFilename));
            });
            _defineProperty$1(this, "removeOldImages", (currentImage) => {
              Array.from(this.currentImageContainer.children).forEach((image) => {
                if (image.tagName.toLowerCase() !== "img") {
                  return;
                }
                const removeDelay = this.usingSprites ? 500 : 1e3;
                if (image.dataset.index !== currentImage.dataset.index && !image.dataset.deleting) {
                  image.dataset.deleting = true;
                  const {
                    currentImageContainer
                  } = this;
                  setTimeout(() => {
                    currentImageContainer.removeChild(image);
                    this.player.debug.log(`Removing thumb: ${image.dataset.filename}`);
                  }, removeDelay);
                }
              });
            });
            _defineProperty$1(this, "preloadNearby", (thumbNum, forward = true) => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  const oldThumbFilename = this.thumbnails[0].frames[thumbNum].text;
                  if (this.showingThumbFilename === oldThumbFilename) {
                    let thumbnailsClone;
                    if (forward) {
                      thumbnailsClone = this.thumbnails[0].frames.slice(thumbNum);
                    } else {
                      thumbnailsClone = this.thumbnails[0].frames.slice(0, thumbNum).reverse();
                    }
                    let foundOne = false;
                    thumbnailsClone.forEach((frame) => {
                      const newThumbFilename = frame.text;
                      if (newThumbFilename !== oldThumbFilename) {
                        if (!this.loadedImages.includes(newThumbFilename)) {
                          foundOne = true;
                          this.player.debug.log(`Preloading thumb filename: ${newThumbFilename}`);
                          const {
                            urlPrefix
                          } = this.thumbnails[0];
                          const thumbURL = urlPrefix + newThumbFilename;
                          const previewImage = new Image();
                          previewImage.src = thumbURL;
                          previewImage.onload = () => {
                            this.player.debug.log(`Preloaded thumb filename: ${newThumbFilename}`);
                            if (!this.loadedImages.includes(newThumbFilename))
                              this.loadedImages.push(newThumbFilename);
                            resolve();
                          };
                        }
                      }
                    });
                    if (!foundOne) {
                      resolve();
                    }
                  }
                }, 300);
              });
            });
            _defineProperty$1(this, "getHigherQuality", (currentQualityIndex, previewImage, frame, thumbFilename) => {
              if (currentQualityIndex < this.thumbnails.length - 1) {
                let previewImageHeight = previewImage.naturalHeight;
                if (this.usingSprites) {
                  previewImageHeight = frame.h;
                }
                if (previewImageHeight < this.thumbContainerHeight) {
                  setTimeout(() => {
                    if (this.showingThumbFilename === thumbFilename) {
                      this.player.debug.log(`Showing higher quality thumb for: ${thumbFilename}`);
                      this.loadImage(currentQualityIndex + 1);
                    }
                  }, 300);
                }
              }
            });
            _defineProperty$1(this, "toggleThumbContainer", (toggle = false, clearShowing = false) => {
              const className = this.player.config.classNames.previewThumbnails.thumbContainerShown;
              this.elements.thumb.container.classList.toggle(className, toggle);
              if (!toggle && clearShowing) {
                this.showingThumb = null;
                this.showingThumbFilename = null;
              }
            });
            _defineProperty$1(this, "toggleScrubbingContainer", (toggle = false) => {
              const className = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
              this.elements.scrubbing.container.classList.toggle(className, toggle);
              if (!toggle) {
                this.showingThumb = null;
                this.showingThumbFilename = null;
              }
            });
            _defineProperty$1(this, "determineContainerAutoSizing", () => {
              if (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) {
                this.sizeSpecifiedInCSS = true;
              }
            });
            _defineProperty$1(this, "setThumbContainerSizeAndPos", () => {
              const {
                imageContainer
              } = this.elements.thumb;
              if (!this.sizeSpecifiedInCSS) {
                const thumbWidth = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                imageContainer.style.height = `${this.thumbContainerHeight}px`;
                imageContainer.style.width = `${thumbWidth}px`;
              } else if (imageContainer.clientHeight > 20 && imageContainer.clientWidth < 20) {
                const thumbWidth = Math.floor(imageContainer.clientHeight * this.thumbAspectRatio);
                imageContainer.style.width = `${thumbWidth}px`;
              } else if (imageContainer.clientHeight < 20 && imageContainer.clientWidth > 20) {
                const thumbHeight = Math.floor(imageContainer.clientWidth / this.thumbAspectRatio);
                imageContainer.style.height = `${thumbHeight}px`;
              }
              this.setThumbContainerPos();
            });
            _defineProperty$1(this, "setThumbContainerPos", () => {
              const scrubberRect = this.player.elements.progress.getBoundingClientRect();
              const containerRect = this.player.elements.container.getBoundingClientRect();
              const {
                container
              } = this.elements.thumb;
              const min = containerRect.left - scrubberRect.left + 10;
              const max = containerRect.right - scrubberRect.left - container.clientWidth - 10;
              const position = this.mousePosX - scrubberRect.left - container.clientWidth / 2;
              const clamped = clamp(position, min, max);
              container.style.left = `${clamped}px`;
              container.style.setProperty("--preview-arrow-offset", `${position - clamped}px`);
            });
            _defineProperty$1(this, "setScrubbingContainerSize", () => {
              const {
                width,
                height
              } = fitRatio(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight
              });
              this.elements.scrubbing.container.style.width = `${width}px`;
              this.elements.scrubbing.container.style.height = `${height}px`;
            });
            _defineProperty$1(this, "setImageSizeAndOffset", (previewImage, frame) => {
              if (!this.usingSprites)
                return;
              const multiplier = this.thumbContainerHeight / frame.h;
              previewImage.style.height = `${previewImage.naturalHeight * multiplier}px`;
              previewImage.style.width = `${previewImage.naturalWidth * multiplier}px`;
              previewImage.style.left = `-${frame.x * multiplier}px`;
              previewImage.style.top = `-${frame.y * multiplier}px`;
            });
            this.player = player;
            this.thumbnails = [];
            this.loaded = false;
            this.lastMouseMoveTime = Date.now();
            this.mouseDown = false;
            this.loadedImages = [];
            this.elements = {
              thumb: {},
              scrubbing: {}
            };
            this.load();
          }
          get enabled() {
            return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
          }
          get currentImageContainer() {
            return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
          }
          get usingSprites() {
            return Object.keys(this.thumbnails[0].frames[0]).includes("w");
          }
          get thumbAspectRatio() {
            if (this.usingSprites) {
              return this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h;
            }
            return this.thumbnails[0].width / this.thumbnails[0].height;
          }
          get thumbContainerHeight() {
            if (this.mouseDown) {
              const {
                height
              } = fitRatio(this.thumbAspectRatio, {
                width: this.player.media.clientWidth,
                height: this.player.media.clientHeight
              });
              return height;
            }
            if (this.sizeSpecifiedInCSS) {
              return this.elements.thumb.imageContainer.clientHeight;
            }
            return Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
          }
          get currentImageElement() {
            return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
          }
          set currentImageElement(element) {
            if (this.mouseDown) {
              this.currentScrubbingImageElement = element;
            } else {
              this.currentThumbnailImageElement = element;
            }
          }
        }
        const source = {
          insertElements(type, attributes) {
            if (is.string(attributes)) {
              insertElement(type, this.media, {
                src: attributes
              });
            } else if (is.array(attributes)) {
              attributes.forEach((attribute) => {
                insertElement(type, this.media, attribute);
              });
            }
          },
          change(input) {
            if (!getDeep(input, "sources.length")) {
              this.debug.warn("Invalid source format");
              return;
            }
            html5.cancelRequests.call(this);
            this.destroy.call(this, () => {
              this.options.quality = [];
              removeElement(this.media);
              this.media = null;
              if (is.element(this.elements.container)) {
                this.elements.container.removeAttribute("class");
              }
              const {
                sources,
                type
              } = input;
              const [{
                provider = providers.html5,
                src
              }] = sources;
              const tagName = provider === "html5" ? type : "div";
              const attributes = provider === "html5" ? {} : {
                src
              };
              Object.assign(this, {
                provider,
                type,
                supported: support.check(type, provider, this.config.playsinline),
                media: createElement(tagName, attributes)
              });
              this.elements.container.appendChild(this.media);
              if (is.boolean(input.autoplay)) {
                this.config.autoplay = input.autoplay;
              }
              if (this.isHTML5) {
                if (this.config.crossorigin) {
                  this.media.setAttribute("crossorigin", "");
                }
                if (this.config.autoplay) {
                  this.media.setAttribute("autoplay", "");
                }
                if (!is.empty(input.poster)) {
                  this.poster = input.poster;
                }
                if (this.config.loop.active) {
                  this.media.setAttribute("loop", "");
                }
                if (this.config.muted) {
                  this.media.setAttribute("muted", "");
                }
                if (this.config.playsinline) {
                  this.media.setAttribute("playsinline", "");
                }
              }
              ui.addStyleHook.call(this);
              if (this.isHTML5) {
                source.insertElements.call(this, "source", sources);
              }
              this.config.title = input.title;
              media.setup.call(this);
              if (this.isHTML5) {
                if (Object.keys(input).includes("tracks")) {
                  source.insertElements.call(this, "track", input.tracks);
                }
              }
              if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
                ui.build.call(this);
              }
              if (this.isHTML5) {
                this.media.load();
              }
              if (!is.empty(input.previewThumbnails)) {
                Object.assign(this.config.previewThumbnails, input.previewThumbnails);
                if (this.previewThumbnails && this.previewThumbnails.loaded) {
                  this.previewThumbnails.destroy();
                  this.previewThumbnails = null;
                }
                if (this.config.previewThumbnails.enabled) {
                  this.previewThumbnails = new PreviewThumbnails(this);
                }
              }
              this.fullscreen.update();
            }, true);
          }
        };
        class Plyr2 {
          constructor(target, options) {
            _defineProperty$1(this, "play", () => {
              if (!is.function(this.media.play)) {
                return null;
              }
              if (this.ads && this.ads.enabled) {
                this.ads.managerPromise.then(() => this.ads.play()).catch(() => silencePromise(this.media.play()));
              }
              return this.media.play();
            });
            _defineProperty$1(this, "pause", () => {
              if (!this.playing || !is.function(this.media.pause)) {
                return null;
              }
              return this.media.pause();
            });
            _defineProperty$1(this, "togglePlay", (input) => {
              const toggle = is.boolean(input) ? input : !this.playing;
              if (toggle) {
                return this.play();
              }
              return this.pause();
            });
            _defineProperty$1(this, "stop", () => {
              if (this.isHTML5) {
                this.pause();
                this.restart();
              } else if (is.function(this.media.stop)) {
                this.media.stop();
              }
            });
            _defineProperty$1(this, "restart", () => {
              this.currentTime = 0;
            });
            _defineProperty$1(this, "rewind", (seekTime) => {
              this.currentTime -= is.number(seekTime) ? seekTime : this.config.seekTime;
            });
            _defineProperty$1(this, "forward", (seekTime) => {
              this.currentTime += is.number(seekTime) ? seekTime : this.config.seekTime;
            });
            _defineProperty$1(this, "increaseVolume", (step) => {
              const volume = this.media.muted ? 0 : this.volume;
              this.volume = volume + (is.number(step) ? step : 0);
            });
            _defineProperty$1(this, "decreaseVolume", (step) => {
              this.increaseVolume(-step);
            });
            _defineProperty$1(this, "airplay", () => {
              if (support.airplay) {
                this.media.webkitShowPlaybackTargetPicker();
              }
            });
            _defineProperty$1(this, "toggleControls", (toggle) => {
              if (this.supported.ui && !this.isAudio) {
                const isHidden = hasClass(this.elements.container, this.config.classNames.hideControls);
                const force = typeof toggle === "undefined" ? void 0 : !toggle;
                const hiding = toggleClass(this.elements.container, this.config.classNames.hideControls, force);
                if (hiding && is.array(this.config.controls) && this.config.controls.includes("settings") && !is.empty(this.config.settings)) {
                  controls.toggleMenu.call(this, false);
                }
                if (hiding !== isHidden) {
                  const eventName = hiding ? "controlshidden" : "controlsshown";
                  triggerEvent.call(this, this.media, eventName);
                }
                return !hiding;
              }
              return false;
            });
            _defineProperty$1(this, "on", (event, callback) => {
              on.call(this, this.elements.container, event, callback);
            });
            _defineProperty$1(this, "once", (event, callback) => {
              once.call(this, this.elements.container, event, callback);
            });
            _defineProperty$1(this, "off", (event, callback) => {
              off(this.elements.container, event, callback);
            });
            _defineProperty$1(this, "destroy", (callback, soft = false) => {
              if (!this.ready) {
                return;
              }
              const done = () => {
                document.body.style.overflow = "";
                this.embed = null;
                if (soft) {
                  if (Object.keys(this.elements).length) {
                    removeElement(this.elements.buttons.play);
                    removeElement(this.elements.captions);
                    removeElement(this.elements.controls);
                    removeElement(this.elements.wrapper);
                    this.elements.buttons.play = null;
                    this.elements.captions = null;
                    this.elements.controls = null;
                    this.elements.wrapper = null;
                  }
                  if (is.function(callback)) {
                    callback();
                  }
                } else {
                  unbindListeners.call(this);
                  html5.cancelRequests.call(this);
                  replaceElement(this.elements.original, this.elements.container);
                  triggerEvent.call(this, this.elements.original, "destroyed", true);
                  if (is.function(callback)) {
                    callback.call(this.elements.original);
                  }
                  this.ready = false;
                  setTimeout(() => {
                    this.elements = null;
                    this.media = null;
                  }, 200);
                }
              };
              this.stop();
              clearTimeout(this.timers.loading);
              clearTimeout(this.timers.controls);
              clearTimeout(this.timers.resized);
              if (this.isHTML5) {
                ui.toggleNativeControls.call(this, true);
                done();
              } else if (this.isYouTube) {
                clearInterval(this.timers.buffering);
                clearInterval(this.timers.playing);
                if (this.embed !== null && is.function(this.embed.destroy)) {
                  this.embed.destroy();
                }
                done();
              } else if (this.isVimeo) {
                if (this.embed !== null) {
                  this.embed.unload().then(done);
                }
                setTimeout(done, 200);
              }
            });
            _defineProperty$1(this, "supports", (type) => support.mime.call(this, type));
            this.timers = {};
            this.ready = false;
            this.loading = false;
            this.failed = false;
            this.touch = support.touch;
            this.media = target;
            if (is.string(this.media)) {
              this.media = document.querySelectorAll(this.media);
            }
            if (window.jQuery && this.media instanceof jQuery || is.nodeList(this.media) || is.array(this.media)) {
              this.media = this.media[0];
            }
            this.config = extend({}, defaults, Plyr2.defaults, options || {}, (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (_) {
                return {};
              }
            })());
            this.elements = {
              container: null,
              fullscreen: null,
              captions: null,
              buttons: {},
              display: {},
              progress: {},
              inputs: {},
              settings: {
                popup: null,
                menu: null,
                panels: {},
                buttons: {}
              }
            };
            this.captions = {
              active: null,
              currentTrack: -1,
              meta: /* @__PURE__ */ new WeakMap()
            };
            this.fullscreen = {
              active: false
            };
            this.options = {
              speed: [],
              quality: []
            };
            this.debug = new Console(this.config.debug);
            this.debug.log("Config", this.config);
            this.debug.log("Support", support);
            if (is.nullOrUndefined(this.media) || !is.element(this.media)) {
              this.debug.error("Setup failed: no suitable element passed");
              return;
            }
            if (this.media.plyr) {
              this.debug.warn("Target already setup");
              return;
            }
            if (!this.config.enabled) {
              this.debug.error("Setup failed: disabled by config");
              return;
            }
            if (!support.check().api) {
              this.debug.error("Setup failed: no support");
              return;
            }
            const clone = this.media.cloneNode(true);
            clone.autoplay = false;
            this.elements.original = clone;
            const _type = this.media.tagName.toLowerCase();
            let iframe = null;
            let url = null;
            switch (_type) {
              case "div":
                iframe = this.media.querySelector("iframe");
                if (is.element(iframe)) {
                  url = parseUrl(iframe.getAttribute("src"));
                  this.provider = getProviderByUrl(url.toString());
                  this.elements.container = this.media;
                  this.media = iframe;
                  this.elements.container.className = "";
                  if (url.search.length) {
                    const truthy = ["1", "true"];
                    if (truthy.includes(url.searchParams.get("autoplay"))) {
                      this.config.autoplay = true;
                    }
                    if (truthy.includes(url.searchParams.get("loop"))) {
                      this.config.loop.active = true;
                    }
                    if (this.isYouTube) {
                      this.config.playsinline = truthy.includes(url.searchParams.get("playsinline"));
                      this.config.youtube.hl = url.searchParams.get("hl");
                    } else {
                      this.config.playsinline = true;
                    }
                  }
                } else {
                  this.provider = this.media.getAttribute(this.config.attributes.embed.provider);
                  this.media.removeAttribute(this.config.attributes.embed.provider);
                }
                if (is.empty(this.provider) || !Object.values(providers).includes(this.provider)) {
                  this.debug.error("Setup failed: Invalid provider");
                  return;
                }
                this.type = types.video;
                break;
              case "video":
              case "audio":
                this.type = _type;
                this.provider = providers.html5;
                if (this.media.hasAttribute("crossorigin")) {
                  this.config.crossorigin = true;
                }
                if (this.media.hasAttribute("autoplay")) {
                  this.config.autoplay = true;
                }
                if (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) {
                  this.config.playsinline = true;
                }
                if (this.media.hasAttribute("muted")) {
                  this.config.muted = true;
                }
                if (this.media.hasAttribute("loop")) {
                  this.config.loop.active = true;
                }
                break;
              default:
                this.debug.error("Setup failed: unsupported type");
                return;
            }
            this.supported = support.check(this.type, this.provider);
            if (!this.supported.api) {
              this.debug.error("Setup failed: no support");
              return;
            }
            this.eventListeners = [];
            this.listeners = new Listeners(this);
            this.storage = new Storage(this);
            this.media.plyr = this;
            if (!is.element(this.elements.container)) {
              this.elements.container = createElement("div");
              wrap(this.media, this.elements.container);
            }
            ui.migrateStyles.call(this);
            ui.addStyleHook.call(this);
            media.setup.call(this);
            if (this.config.debug) {
              on.call(this, this.elements.container, this.config.events.join(" "), (event) => {
                this.debug.log(`event: ${event.type}`);
              });
            }
            this.fullscreen = new Fullscreen(this);
            if (this.isHTML5 || this.isEmbed && !this.supported.ui) {
              ui.build.call(this);
            }
            this.listeners.container();
            this.listeners.global();
            if (this.config.ads.enabled) {
              this.ads = new Ads(this);
            }
            if (this.isHTML5 && this.config.autoplay) {
              this.once("canplay", () => silencePromise(this.play()));
            }
            this.lastSeekTime = 0;
            if (this.config.previewThumbnails.enabled) {
              this.previewThumbnails = new PreviewThumbnails(this);
            }
          }
          get isHTML5() {
            return this.provider === providers.html5;
          }
          get isEmbed() {
            return this.isYouTube || this.isVimeo;
          }
          get isYouTube() {
            return this.provider === providers.youtube;
          }
          get isVimeo() {
            return this.provider === providers.vimeo;
          }
          get isVideo() {
            return this.type === types.video;
          }
          get isAudio() {
            return this.type === types.audio;
          }
          get playing() {
            return Boolean(this.ready && !this.paused && !this.ended);
          }
          get paused() {
            return Boolean(this.media.paused);
          }
          get stopped() {
            return Boolean(this.paused && this.currentTime === 0);
          }
          get ended() {
            return Boolean(this.media.ended);
          }
          set currentTime(input) {
            if (!this.duration) {
              return;
            }
            const inputIsValid = is.number(input) && input > 0;
            this.media.currentTime = inputIsValid ? Math.min(input, this.duration) : 0;
            this.debug.log(`Seeking to ${this.currentTime} seconds`);
          }
          get currentTime() {
            return Number(this.media.currentTime);
          }
          get buffered() {
            const {
              buffered
            } = this.media;
            if (is.number(buffered)) {
              return buffered;
            }
            if (buffered && buffered.length && this.duration > 0) {
              return buffered.end(0) / this.duration;
            }
            return 0;
          }
          get seeking() {
            return Boolean(this.media.seeking);
          }
          get duration() {
            const fauxDuration = parseFloat(this.config.duration);
            const realDuration = (this.media || {}).duration;
            const duration = !is.number(realDuration) || realDuration === Infinity ? 0 : realDuration;
            return fauxDuration || duration;
          }
          set volume(value) {
            let volume = value;
            const max = 1;
            const min = 0;
            if (is.string(volume)) {
              volume = Number(volume);
            }
            if (!is.number(volume)) {
              volume = this.storage.get("volume");
            }
            if (!is.number(volume)) {
              ({
                volume
              } = this.config);
            }
            if (volume > max) {
              volume = max;
            }
            if (volume < min) {
              volume = min;
            }
            this.config.volume = volume;
            this.media.volume = volume;
            if (!is.empty(value) && this.muted && volume > 0) {
              this.muted = false;
            }
          }
          get volume() {
            return Number(this.media.volume);
          }
          set muted(mute) {
            let toggle = mute;
            if (!is.boolean(toggle)) {
              toggle = this.storage.get("muted");
            }
            if (!is.boolean(toggle)) {
              toggle = this.config.muted;
            }
            this.config.muted = toggle;
            this.media.muted = toggle;
          }
          get muted() {
            return Boolean(this.media.muted);
          }
          get hasAudio() {
            if (!this.isHTML5) {
              return true;
            }
            if (this.isAudio) {
              return true;
            }
            return Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
          }
          set speed(input) {
            let speed = null;
            if (is.number(input)) {
              speed = input;
            }
            if (!is.number(speed)) {
              speed = this.storage.get("speed");
            }
            if (!is.number(speed)) {
              speed = this.config.speed.selected;
            }
            const {
              minimumSpeed: min,
              maximumSpeed: max
            } = this;
            speed = clamp(speed, min, max);
            this.config.speed.selected = speed;
            setTimeout(() => {
              if (this.media) {
                this.media.playbackRate = speed;
              }
            }, 0);
          }
          get speed() {
            return Number(this.media.playbackRate);
          }
          get minimumSpeed() {
            if (this.isYouTube) {
              return Math.min(...this.options.speed);
            }
            if (this.isVimeo) {
              return 0.5;
            }
            return 0.0625;
          }
          get maximumSpeed() {
            if (this.isYouTube) {
              return Math.max(...this.options.speed);
            }
            if (this.isVimeo) {
              return 2;
            }
            return 16;
          }
          set quality(input) {
            const config = this.config.quality;
            const options = this.options.quality;
            if (!options.length) {
              return;
            }
            let quality = [!is.empty(input) && Number(input), this.storage.get("quality"), config.selected, config.default].find(is.number);
            let updateStorage = true;
            if (!options.includes(quality)) {
              const value = closest(options, quality);
              this.debug.warn(`Unsupported quality option: ${quality}, using ${value} instead`);
              quality = value;
              updateStorage = false;
            }
            config.selected = quality;
            this.media.quality = quality;
            if (updateStorage) {
              this.storage.set({
                quality
              });
            }
          }
          get quality() {
            return this.media.quality;
          }
          set loop(input) {
            const toggle = is.boolean(input) ? input : this.config.loop.active;
            this.config.loop.active = toggle;
            this.media.loop = toggle;
          }
          get loop() {
            return Boolean(this.media.loop);
          }
          set source(input) {
            source.change.call(this, input);
          }
          get source() {
            return this.media.currentSrc;
          }
          get download() {
            const {
              download
            } = this.config.urls;
            return is.url(download) ? download : this.source;
          }
          set download(input) {
            if (!is.url(input)) {
              return;
            }
            this.config.urls.download = input;
            controls.setDownloadUrl.call(this);
          }
          set poster(input) {
            if (!this.isVideo) {
              this.debug.warn("Poster can only be set for video");
              return;
            }
            ui.setPoster.call(this, input, false).catch(() => {
            });
          }
          get poster() {
            if (!this.isVideo) {
              return null;
            }
            return this.media.getAttribute("poster") || this.media.getAttribute("data-poster");
          }
          get ratio() {
            if (!this.isVideo) {
              return null;
            }
            const ratio = reduceAspectRatio(getAspectRatio.call(this));
            return is.array(ratio) ? ratio.join(":") : ratio;
          }
          set ratio(input) {
            if (!this.isVideo) {
              this.debug.warn("Aspect ratio can only be set for video");
              return;
            }
            if (!is.string(input) || !validateAspectRatio(input)) {
              this.debug.error(`Invalid aspect ratio specified (${input})`);
              return;
            }
            this.config.ratio = reduceAspectRatio(input);
            setAspectRatio.call(this);
          }
          set autoplay(input) {
            this.config.autoplay = is.boolean(input) ? input : this.config.autoplay;
          }
          get autoplay() {
            return Boolean(this.config.autoplay);
          }
          toggleCaptions(input) {
            captions.toggle.call(this, input, false);
          }
          set currentTrack(input) {
            captions.set.call(this, input, false);
            captions.setup.call(this);
          }
          get currentTrack() {
            const {
              toggled,
              currentTrack
            } = this.captions;
            return toggled ? currentTrack : -1;
          }
          set language(input) {
            captions.setLanguage.call(this, input, false);
          }
          get language() {
            return (captions.getCurrentTrack.call(this) || {}).language;
          }
          set pip(input) {
            if (!support.pip) {
              return;
            }
            const toggle = is.boolean(input) ? input : !this.pip;
            if (is.function(this.media.webkitSetPresentationMode)) {
              this.media.webkitSetPresentationMode(toggle ? pip.active : pip.inactive);
            }
            if (is.function(this.media.requestPictureInPicture)) {
              if (!this.pip && toggle) {
                this.media.requestPictureInPicture();
              } else if (this.pip && !toggle) {
                document.exitPictureInPicture();
              }
            }
          }
          get pip() {
            if (!support.pip) {
              return null;
            }
            if (!is.empty(this.media.webkitPresentationMode)) {
              return this.media.webkitPresentationMode === pip.active;
            }
            return this.media === document.pictureInPictureElement;
          }
          setPreviewThumbnails(thumbnailSource) {
            if (this.previewThumbnails && this.previewThumbnails.loaded) {
              this.previewThumbnails.destroy();
              this.previewThumbnails = null;
            }
            Object.assign(this.config.previewThumbnails, thumbnailSource);
            if (this.config.previewThumbnails.enabled) {
              this.previewThumbnails = new PreviewThumbnails(this);
            }
          }
          static supported(type, provider) {
            return support.check(type, provider);
          }
          static loadSprite(url, id) {
            return loadSprite(url, id);
          }
          static setup(selector, options = {}) {
            let targets = null;
            if (is.string(selector)) {
              targets = Array.from(document.querySelectorAll(selector));
            } else if (is.nodeList(selector)) {
              targets = Array.from(selector);
            } else if (is.array(selector)) {
              targets = selector.filter(is.element);
            }
            if (is.empty(targets)) {
              return null;
            }
            return targets.map((t) => new Plyr2(t, options));
          }
        }
        Plyr2.defaults = cloneDeep(defaults);
        return Plyr2;
      });
    }
  });

  // frappe/public/js/video_player.bundle.js
  var import_plyr = __toESM(require_plyr_polyfilled());
  frappe.Plyr = import_plyr.default;
})();
//# sourceMappingURL=video_player.bundle.IOEIXC2G.js.map
