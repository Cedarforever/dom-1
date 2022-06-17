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
})({"epB2":[function(require,module,exports) {
console.log('hi');
var div1 = dom.create("<div>222 <span>999<span>1</span></span></div>");
console.log(div1);
var div2 = dom.after(test, div1);
var div3 = dom.append(div1, test2);

var div4 = dom.create("<div id='parent11'> </div>");
dom.warp(test2, div4);

var aa = document.querySelector('#aaa'); //因为前面是id='aaa'  如果是class='aaa' 则是 .aaa
//重点就是我声明一个变量aa 去获得了这个元素 然后再删除、打印
console.log(aa); //这里能打印出   
dom.remove(aa);
console.log(aa); //这里也能打印了


var ab = dom.empty(test3);
console.log(ab);

dom.attr(test, 'title', 'hi i am Cedar');
var div6 = dom.attr(test, 'title');
console.log(div6);
console.log("div6: " + div6 + " ");

dom.text(test, '这是我第一次写文本内容');
var div7 = dom.text(test);
console.log(div7);

dom.html(okk, '上善若水 善天下');

dom.style(window.ab, 'color', 'red');
dom.style(window.ab, { color: 'blue' });
var cc = dom.style(window.ab, 'color');
console.log(cc);

dom.class.add(abc, 'same');
dom.class.add(abc, 'yellow');
dom.class.remove(abc, 'yellow');
dom.class.has(abc, 'same');
var a = dom.class.has(abc, 'same');
console.log(a);

var fn = function fn() {
                                  console.log('点击了');
};
dom.on(abc, 'click', fn);
dom.off(abc, 'click', fn);

var i = dom.find('#testDiv1')[0];
console.log(i);
var i1 = dom.find('.pp', i)[1];
console.log(i1);

var p11 = dom.find('.pp')[0];
console.log(dom.parent(p11));

var p12 = dom.find('#testDiv1')[0];
var p13 = dom.children(p12);
console.log(p13);

dom.siblings(dom.find('.pp')[1]);

var z1 = dom.find('.pp')[2];
var z2 = dom.next(z1);
console.log(z2);
console.log(dom.previous(z1));

var tt = dom.find('#testDiv1')[0]; //这里必须加个[] 不加找的就是数组！！ 加了[]表示找到某一个
dom.each(tt.children, function (n) {
                                  return dom.style(n, 'color', 'red');
}); //这里的n表示一个占位！！就好比函数里面写变量


var e1 = dom.find('.pp')[2]; //还是老规矩 我得先找到这个元素 所以必须加[2]  不然这找到的是个数组！！！
var e2 = dom.index(e1);
console.log(e2);
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.06dc0738.map