(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["R"] = factory();
	else
		root["R"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.App = undefined;\n\nvar _Game = __webpack_require__(1);\n\nvar _Rect = __webpack_require__(4);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar App = exports.App = function App() {\n\t_classCallCheck(this, App);\n\n\tthis.game = new _Game.Game({\n\t\ttarget: '#game',\n\t\tsize: [650, 650]\n\t});\n\tthis.scene = this.game.getScene();\n\n\tvar rect = new _Rect.Rect({\n\t\tposition: [10, 200],\n\t\tsize: [50, 50],\n\t\tupdate: function update(delta) {\n\t\t\tthis.position.x += 10 * delta;\n\t\t}\n\t});\n\tthis.scene.addObject(rect);\n\n\tthis.game.start();\n};\n\nwindow.app = new App();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/index.js\n// module id = 0\n// module chunks = 0\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Game = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Scene = __webpack_require__(2);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = exports.Game = function () {\n\tfunction Game(options) {\n\t\t_classCallCheck(this, Game);\n\n\t\tthis.isRunning = false;\n\n\t\tthis.setScene(new _Scene.Scene(options));\n\t}\n\n\t_createClass(Game, [{\n\t\tkey: 'start',\n\t\tvalue: function start() {\n\t\t\tthis.isRunning = true;\n\t\t\tthis.nextLoop(Date.now());\n\t\t}\n\t}, {\n\t\tkey: 'stop',\n\t\tvalue: function stop() {\n\t\t\tthis.isRunning = false;\n\t\t}\n\t}, {\n\t\tkey: 'nextLoop',\n\t\tvalue: function nextLoop(lastTime) {\n\t\t\tvar _this = this;\n\n\t\t\tif (!this.isRunning) return;\n\n\t\t\tvar now = Date.now();\n\t\t\tvar deltaTime = (now - lastTime) / 1000;\n\t\t\tlastTime = now;\n\n\t\t\tthis.scene.update(deltaTime);\n\t\t\tthis.scene.draw();\n\n\t\t\trequestAnimationFrame(function (time) {\n\t\t\t\treturn _this.nextLoop(lastTime);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'setScene',\n\t\tvalue: function setScene(scene) {\n\t\t\tthis.scene = scene;\n\t\t}\n\t}, {\n\t\tkey: 'getScene',\n\t\tvalue: function getScene() {\n\t\t\treturn this.scene;\n\t\t}\n\t}]);\n\n\treturn Game;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Game.js\n// module id = 1\n// module chunks = 0\n//# sourceURL=webpack:///./src/Game.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Scene = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Renderer = __webpack_require__(3);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scene = exports.Scene = function () {\n\tfunction Scene(options) {\n\t\t_classCallCheck(this, Scene);\n\n\t\tthis.objects = [];\n\n\t\tthis.setRenderer(new _Renderer.Renderer(options));\n\t}\n\n\t_createClass(Scene, [{\n\t\tkey: 'setRenderer',\n\t\tvalue: function setRenderer(renderer) {\n\t\t\tthis.renderer = renderer;\n\t\t}\n\t}, {\n\t\tkey: 'getRenderer',\n\t\tvalue: function getRenderer() {\n\t\t\treturn this.renderer;\n\t\t}\n\t}, {\n\t\tkey: 'update',\n\t\tvalue: function update(deltaTime) {\n\t\t\tthis.objects.forEach(function (object) {\n\t\t\t\treturn object.update(deltaTime);\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'draw',\n\t\tvalue: function draw() {\n\t\t\tvar _this = this;\n\n\t\t\tthis.renderer.clear();\n\t\t\tthis.objects.forEach(function (object) {\n\t\t\t\treturn object.draw(_this.getRenderer());\n\t\t\t});\n\t\t}\n\t}, {\n\t\tkey: 'addObject',\n\t\tvalue: function addObject(object) {\n\t\t\tthis.objects.push(object);\n\t\t}\n\t}, {\n\t\tkey: 'removeObject',\n\t\tvalue: function removeObject(object) {\n\t\t\tvar index = this.objects.indexOf(object);\n\t\t\tthis.objects.splice(index, 1);\n\t\t}\n\t}]);\n\n\treturn Scene;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Scene.js\n// module id = 2\n// module chunks = 0\n//# sourceURL=webpack:///./src/Scene.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Renderer = exports.Renderer = function () {\n\tfunction Renderer(_ref) {\n\t\tvar size = _ref.size,\n\t\t    target = _ref.target,\n\t\t    _ref$bgColor = _ref.bgColor,\n\t\t    bgColor = _ref$bgColor === undefined ? 'white' : _ref$bgColor;\n\n\t\t_classCallCheck(this, Renderer);\n\n\t\tthis.container = document.querySelector(target);\n\t\tthis.canvas = document.createElement('canvas');\n\t\tthis.container.appendChild(this.canvas);\n\n\t\tvar _size = _slicedToArray(size, 2),\n\t\t    width = _size[0],\n\t\t    height = _size[1];\n\n\t\tthis.canvas.width = width;\n\t\tthis.canvas.height = height;\n\t\tthis.canvas.style.backgroundColor = bgColor;\n\n\t\tthis.ctx = this.canvas.getContext('2d');\n\t}\n\n\t_createClass(Renderer, [{\n\t\tkey: 'clear',\n\t\tvalue: function clear() {\n\t\t\tvar _size2 = _slicedToArray(this.size, 2),\n\t\t\t    w = _size2[0],\n\t\t\t    h = _size2[1];\n\n\t\t\tthis.ctx.clearRect(0, 0, w, h);\n\t\t}\n\t}, {\n\t\tkey: 'size',\n\t\tget: function get() {\n\t\t\treturn [this.canvas.width, this.canvas.height];\n\t\t}\n\t}]);\n\n\treturn Renderer;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Renderer.js\n// module id = 3\n// module chunks = 0\n//# sourceURL=webpack:///./src/Renderer.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.Rect = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _GraphicObject2 = __webpack_require__(5);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Rect = exports.Rect = function (_GraphicObject) {\n\t_inherits(Rect, _GraphicObject);\n\n\tfunction Rect(options) {\n\t\t_classCallCheck(this, Rect);\n\n\t\treturn _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).call(this, options));\n\t}\n\n\t_createClass(Rect, [{\n\t\tkey: 'draw',\n\t\tvalue: function draw(renderer) {\n\t\t\tvar ctx = renderer.ctx;\n\t\t\tvar _position = this.position,\n\t\t\t    x = _position.x,\n\t\t\t    y = _position.y;\n\n\t\t\tvar _size$toArray = this.size.toArray(),\n\t\t\t    _size$toArray2 = _slicedToArray(_size$toArray, 2),\n\t\t\t    w = _size$toArray2[0],\n\t\t\t    h = _size$toArray2[1];\n\n\t\t\tctx.fillRect(x, y, w, h);\n\t\t\tctx.fill();\n\t\t}\n\t}]);\n\n\treturn Rect;\n}(_GraphicObject2.GraphicObject);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/objects/Rect.js\n// module id = 4\n// module chunks = 0\n//# sourceURL=webpack:///./src/objects/Rect.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.GraphicObject = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _GameObject2 = __webpack_require__(6);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar GraphicObject = exports.GraphicObject = function (_GameObject) {\n\t_inherits(GraphicObject, _GameObject);\n\n\tfunction GraphicObject(options) {\n\t\t_classCallCheck(this, GraphicObject);\n\n\t\treturn _possibleConstructorReturn(this, (GraphicObject.__proto__ || Object.getPrototypeOf(GraphicObject)).call(this, options));\n\t}\n\n\t_createClass(GraphicObject, [{\n\t\tkey: 'draw',\n\t\tvalue: function draw() {}\n\t}]);\n\n\treturn GraphicObject;\n}(_GameObject2.GameObject);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/objects/GraphicObject.js\n// module id = 5\n// module chunks = 0\n//# sourceURL=webpack:///./src/objects/GraphicObject.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.GameObject = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Vector = __webpack_require__(7);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar GameObject = exports.GameObject = function () {\n\tfunction GameObject(_ref) {\n\t\tvar position = _ref.position,\n\t\t    size = _ref.size,\n\t\t    update = _ref.update;\n\n\t\t_classCallCheck(this, GameObject);\n\n\t\tthis.position = _Vector.Vector2.fromArray(position);\n\t\tthis.size = _Vector.Vector2.fromArray(size);\n\t\tthis.onUpdate = update.bind(this);\n\t}\n\n\t_createClass(GameObject, [{\n\t\tkey: 'update',\n\t\tvalue: function update(deltaTime) {\n\t\t\tthis.onUpdate(deltaTime);\n\t\t}\n\t}, {\n\t\tkey: 'setScene',\n\t\tvalue: function setScene(scene) {\n\t\t\tscene.addObject(this);\n\t\t}\n\t}]);\n\n\treturn GameObject;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/objects/GameObject.js\n// module id = 6\n// module chunks = 0\n//# sourceURL=webpack:///./src/objects/GameObject.js?");

/***/ },
/* 7 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Vector2 = exports.Vector2 = function () {\n\tfunction Vector2() {\n\t\tvar x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n\t\tvar y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n\n\t\t_classCallCheck(this, Vector2);\n\n\t\tthis.x = 0;\n\t\tthis.y = 0;\n\n\t\tthis.x = x;\n\t\tthis.y = y;\n\t}\n\n\t_createClass(Vector2, [{\n\t\tkey: \"add\",\n\t\tvalue: function add(vector) {\n\t\t\treturn new Vector2(this.x + vector.x, this.y + vector.y);\n\t\t}\n\t}, {\n\t\tkey: \"sub\",\n\t\tvalue: function sub(vector) {\n\t\t\treturn new Vector2(this.x - vector.x, this.y - vector.y);\n\t\t}\n\t}, {\n\t\tkey: \"toArray\",\n\t\tvalue: function toArray() {\n\t\t\treturn [this.x, this.y];\n\t\t}\n\t}], [{\n\t\tkey: \"fromArray\",\n\t\tvalue: function fromArray(array) {\n\t\t\tif (array instanceof Vector2) {\n\t\t\t\treturn array;\n\t\t\t}\n\n\t\t\tvar _array = _slicedToArray(array, 2),\n\t\t\t    x = _array[0],\n\t\t\t    y = _array[1];\n\n\t\t\treturn new Vector2(x, y);\n\t\t}\n\t}]);\n\n\treturn Vector2;\n}();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/Vector2.js\n// module id = 7\n// module chunks = 0\n//# sourceURL=webpack:///./src/Vector2.js?");

/***/ }
/******/ ])
});
;