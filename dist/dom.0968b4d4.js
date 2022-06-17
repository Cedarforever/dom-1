// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"fRxd":[function(require,module,exports) {
window.dom = {
    create: function create(string) {
        var container = document.createElement('template');
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after: function after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before: function before(node, node2) {
        node.parentNode.insertBefore(node2, node);
    },
    append: function append(parent, node) {
        parent.appendChild(node);
    },
    warp: function warp(node, parent) {
        dom.before(node, parent);
        dom.append(parent, node);
    },
    remove: function remove(node) {
        node.parentNode.removeChild(node); // 等价于新语法 node.remove()
        return node;
    },
    empty: function empty(node) {
        var arr = [];
        var x = node.firstChild;
        while (x) {
            arr.push(dom.remove(node.firstChild));
            x = node.firstChild;
        }
        return arr;
    },
    attr: function attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value);
        } else if (arguments.length === 2) {
            return node.getAttribute(name);
        }
    },
    text: function text(node, string) {
        if (arguments.length === 2) {
            if ('innerHTML' in node) {
                node.innerHTML = string;
            } else {
                node.innerContent = string;
            }
        } else if (arguments.length === 1) {
            if ('innerHTML' in node) {
                return node.innerHTML;
            } else {
                return node.innerContent;
            }
        }
    },
    html: function html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string;
        } else if (arguments.length === 1) {
            return node.innerHTML;
        }
    },
    style: function style(node, name, value) {
        if (arguments.length === 3) {
            node.style[name] = value;
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]; // 这里注意一下
            } else if (name instanceof Object) {
                for (var key in name) {
                    node.style[key] = name[key];
                }
            }
        }
    },


    class: {
        //class是个对象  所以创建时候是 class:{}   {}里面放它的各种方法(函数)
        add: function add(node, className) {
            node.classList.add(className);
        },
        //注意对象里面的元素用逗号隔开
        remove: function remove(node, className) {
            node.classList.remove(className);
        },
        has: function has(node, className) {
            return node.classList.contains(className);
        }
    },

    on: function on(node, eventName, fn) {
        //eventName变量 表示事件名 例如事件名'click' 意思不能乱取名字 必须是事件名
        node.addEventListener(eventName, fn);
    },
    off: function off(node, eventName, fn) {
        node.removeEventListener(eventName, fn);
    },
    find: function find(selector, scope) {
        //scope 范围的意思
        return (scope || document).querySelectorAll(selector);
    },
    parent: function parent(node) {
        return node.parentNode;
    },
    children: function children(node) {
        return node.children;
    },
    siblings: function siblings(node) {
        return Array.from(node.parentNode.children).filter(function (n) {
            return n !== node;
        });
    },
    next: function next(node) {
        var x = node.nextSibling;
        while (x && x.nodeType === 3) {
            x = x.nextSibling;
        }
        return x;
    },
    previous: function previous(node) {
        var x = node.previousSibling; //前面是找弟弟 现在是找哥哥 就改个前缀即可
        while (x && x.nodeType === 3) {
            x = x.previousSibling;
        }
        return x;
    },
    each: function each(nodeList, fn) {
        for (var i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i]);
        }
    },
    index: function index(node) {
        var dd = dom.children(node.parentNode); //这里表示为node.parentNode.children 
        //思路是通过node 找到他父亲node.parentNode， 再通过dom.children找到父亲的所有儿子(包括这个node)
        var i = void 0; //外面声明i i就是个全局变量 这个i可以拿到闭合作用域i的值
        for (i = 0; i < dd.length; i++) {
            if (dd[i] === node) {
                break;
            }
        }return i; //注意return写的位置 是在那个{}外面写
        //如果let i=0写在for()里面 那么此时就return 不到i  因为作用域的问题 所以声明let i在全局
    }
};
},{}]},{},["fRxd"], null)
//# sourceMappingURL=dom.0968b4d4.map