/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/buildingFactories.ts":
/*!**********************************!*\
  !*** ./src/buildingFactories.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return spawnBuilding; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n\r\nfunction spawnBuilding(player, type, x, y) {\r\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings.push({\r\n        player: player,\r\n        type: type,\r\n        gridX: x,\r\n        gridY: y,\r\n        gridSizeX: 5,\r\n        gridSizeY: 5,\r\n        radius: 75,\r\n        color: 'red',\r\n    });\r\n    for (var i = x; i < x + 5; i++) {\r\n        for (var j = y; j < y + 5; j++) {\r\n            _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].grid[i][j] = 1;\r\n        }\r\n    }\r\n    console.log(_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].grid);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/buildingFactories.ts?");

/***/ }),

/***/ "./src/collisionDetection.ts":
/*!***********************************!*\
  !*** ./src/collisionDetection.ts ***!
  \***********************************/
/*! exports provided: checkCollisionUnitUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkCollisionUnitUnits\", function() { return checkCollisionUnitUnits; });\nfunction checkCollisionUnitUnits(unit, units) {\r\n    for (var i = 0; i < units.length; i++) {\r\n        if (units[i].hash !== unit.hash) {\r\n            if (Math.sqrt(Math.pow(((units[i].x) - (unit.x + unit.xvel)), 2) +\r\n                Math.pow(((units[i].y) - (unit.y + unit.yvel)), 2))\r\n                < units[i].radius + unit.radius) {\r\n                return true;\r\n            }\r\n        }\r\n    }\r\n    return false;\r\n}\r\n// FOR CHECKING IF SPACE TO BUILD BUILDING\r\n// function checkCollisionBuildingBuilding(building:Ibuilding, buildings:Array<Ibuilding>):boolean {\r\n//     for(let i=0; i<buildings.length; i++) {\r\n//         if(buildings[i].name !== name) {\r\n//         if(\r\n//             isIn(buildings[i].x, buildings[i].x+buildings[i].sizex, building.x) && //top left corner\r\n//             isIn(buildings[i].y, buildings[i].y+buildings[i].sizey, building.y) ||\r\n//             isIn(buildings[i].x, buildings[i].x+buildings[i].sizex, building.x+building.sizex) && // top right corner\r\n//             isIn(buildings[i].y, buildings[i].y+buildings[i].sizey, building.y) ||\r\n//             isIn(buildings[i].x, buildings[i].x+buildings[i].sizex, building.x) && //bottom left corner\r\n//             isIn(buildings[i].y, buildings[i].y+buildings[i].sizey, building.y+building.sizey) ||\r\n//             isIn(buildings[i].x, buildings[i].x+buildings[i].sizex, building.x+building.sizex) && //bottom right corner\r\n//             isIn(buildings[i].y, buildings[i].y+buildings[i].sizey, building.y+building.sizey)\r\n//         )\r\n//             {\r\n//             return true\r\n//         }\r\n//     }\r\n//     }\r\n//     return false\r\n// }\r\nfunction isIn(x1, x2, point) {\r\n    if (point > x1 && point < x2) {\r\n        return true;\r\n    }\r\n    return false;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/collisionDetection.ts?");

/***/ }),

/***/ "./src/draw.ts":
/*!*********************!*\
  !*** ./src/draw.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return draw; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n\r\nvar orientation = function (xvel, yvel) {\r\n    if (xvel === 0 && yvel === 0) {\r\n        return 0;\r\n    }\r\n    var x = xvel;\r\n    var y = yvel;\r\n    if (y > 0 && x > 0) {\r\n        if (y / x > 3)\r\n            return 0;\r\n        if (y / x < 1 / 3)\r\n            return 6;\r\n        return 7;\r\n    }\r\n    if (y < 0 && x > 0) {\r\n        if (y / x < -3)\r\n            return 4;\r\n        if (y / x > -1 / 3)\r\n            return 6;\r\n        return 5;\r\n    }\r\n    if (y < 0 && x < 0) {\r\n        if (y / x < 1 / 3)\r\n            return 2;\r\n        if (y / x > 3)\r\n            return 4;\r\n        return 3;\r\n    }\r\n    if (y > 0 && x < 0) {\r\n        if (y / x > -1 / 3)\r\n            return 2;\r\n        if (y / x < -3)\r\n            return 0;\r\n        return 1;\r\n    }\r\n};\r\nfunction draw(canvas, selectBox) {\r\n    var ctx = canvas.ctx, width = canvas.width, height = canvas.height;\r\n    var buildings = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings, units = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units, resources = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].resources, selectedBuilding = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedBuilding, selectedUnits = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedUnits, preSelectedBuildings = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].preSelectedBuildings, preSelectedUnits = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].preSelectedUnits, pngs = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].pngs, grid = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].grid;\r\n    for (var i = 0; i < grid.length; i++) {\r\n        for (var j = 0; j < grid[0].length; j++) {\r\n            ctx.strokeStyle = '#00ff00';\r\n            ctx.strokeRect(i * 30, j * 30, 30, 30);\r\n            if (grid[i][j]) {\r\n                ctx.fillStyle = '#00ff00';\r\n                ctx.fillRect(i * 30, j * 30, 30, 30);\r\n            }\r\n        }\r\n    }\r\n    buildings.forEach(function (el) {\r\n        ctx.drawImage(pngs[el.type], el.gridX * 30, el.gridY * 30);\r\n    });\r\n    units.forEach(function (el) {\r\n        ctx.drawImage(pngs[el.type], orientation(el.xvel, el.yvel) * 50, 0, 50, 49, el.x - 17, el.y - 17, 34, 34);\r\n    });\r\n    resources.forEach(function (el) {\r\n        ctx.drawImage(pngs[el.type], el.x, el.y, 75, 50);\r\n    });\r\n    if (selectedBuilding) {\r\n        ctx.drawImage(pngs.menu, 0, 800);\r\n        ctx.beginPath();\r\n        ctx.arc(selectedBuilding.gridX, selectedBuilding.gridY, selectedBuilding.radius, 0, 2 * Math.PI, false);\r\n        ctx.strokeStyle = ' #00ff00';\r\n        ctx.lineWidth = 2;\r\n        ctx.stroke();\r\n    }\r\n    preSelectedBuildings.forEach(function (el) {\r\n        ctx.beginPath();\r\n        ctx.arc(el.gridX * 30, el.gridY * 30, (el.radius + el.radius) / 2, 0, 2 * Math.PI, false);\r\n        ctx.strokeStyle = ' #00ff00';\r\n        ctx.lineWidth = 1;\r\n        ctx.stroke();\r\n    });\r\n    selectedUnits.forEach(function (el) {\r\n        ctx.beginPath();\r\n        ctx.arc(el.x, el.y, el.radius + 5, 0, 2 * Math.PI, false);\r\n        ctx.strokeStyle = ' #00ff00';\r\n        ctx.lineWidth = 2;\r\n        ctx.stroke();\r\n    });\r\n    preSelectedUnits.forEach(function (el) {\r\n        ctx.beginPath();\r\n        ctx.arc(el.x, el.y, el.radius + 5, 0, 2 * Math.PI, false);\r\n        ctx.strokeStyle = ' #00ff00';\r\n        ctx.lineWidth = 1;\r\n        ctx.stroke();\r\n    });\r\n    ctx.strokeStyle = ' #00ff00';\r\n    ctx.strokeRect(selectBox.xStart, selectBox.yStart, selectBox.xEnd - selectBox.xStart, selectBox.yEnd - selectBox.yStart);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/draw.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./draw */ \"./src/draw.ts\");\n/* harmony import */ var _moveUnits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveUnits */ \"./src/moveUnits.ts\");\n/* harmony import */ var _inputHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inputHandler */ \"./src/inputHandler.ts\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interfaces */ \"./src/interfaces/index.ts\");\n/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_interfaces__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _buildingFactories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildingFactories */ \"./src/buildingFactories.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\n\r\n\r\n\r\n\r\nvar root = document.querySelector('#root');\r\nvar ctx = root.getContext(\"2d\");\r\n\r\n// colors\r\nvar backgroundColor = '#665f4a';\r\nvar black = '#000000';\r\nvar red = '#ff0000';\r\nvar yellow = '#f6ff00';\r\nvar green = '#3ef238';\r\nvar blue = '#0044ff';\r\n// settings\r\nvar gridWidth = 40;\r\nvar gridHeight = 40;\r\nvar gridSize = 30;\r\nvar updateFrequency = 0.01; // seconds between each render\r\nvar canvas = {\r\n    ctx: ctx,\r\n    height: root.height,\r\n    width: root.width\r\n};\r\nvar selectBox = {\r\n    xStart: 0,\r\n    yStart: 0,\r\n    xEnd: 0,\r\n    yEnd: 0\r\n};\r\n// ENGINE\r\nvar start = Date.now();\r\nvar timeElapsed = 0;\r\nvar framesElapsed = 0;\r\n// Initiate listeners for clicking\r\nvar initiate = function () {\r\n    Object(_inputHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(root, selectBox);\r\n};\r\nvar createGrid = function () {\r\n    var column = [];\r\n    for (var i = 0; i < gridWidth; i++) {\r\n        for (var j = 0; j < gridHeight; j++) {\r\n            column[j] = 0;\r\n        }\r\n        _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].grid[i] = __spreadArrays(column);\r\n    }\r\n};\r\nvar renderEngine = function () {\r\n    var now = Date.now();\r\n    timeElapsed = (now - start) / 1000;\r\n    //if(Math.floor(timeElapsed/updateFrequency)>framesElapsed) { // everything in each render goes here\r\n    framesElapsed++;\r\n    ctx.fillStyle = backgroundColor;\r\n    ctx.fillRect(0, 0, root.width, root.height);\r\n    Object(_moveUnits__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].units);\r\n    Object(_draw__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(canvas, selectBox);\r\n    //}\r\n    window.requestAnimationFrame(renderEngine);\r\n};\r\nvar startGame = function () {\r\n    createGrid();\r\n    renderEngine();\r\n    initiate();\r\n    Object(_buildingFactories__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('PLAYER1', 'commandCenter', 10, 20);\r\n};\r\nvar pngs = {\r\n    marine: './media/marine.png',\r\n    commandCenter: './media/commandCenter.png',\r\n    mineral: './media/minerals.png',\r\n    menu: './media/menu.png'\r\n};\r\n// Img resource loading before game starts\r\nfunction loadResources(pngs) {\r\n    var counter = 0;\r\n    var keys = Object.keys(pngs);\r\n    var _loop_1 = function (i) {\r\n        var newPng = new Image;\r\n        newPng.addEventListener('load', function () {\r\n            var _a;\r\n            _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].pngs = __assign(__assign({}, _state__WEBPACK_IMPORTED_MODULE_3__[\"state\"].pngs), (_a = {}, _a[keys[i]] = newPng, _a));\r\n            console.log('loaded', newPng);\r\n            counter++;\r\n            if (counter === keys.length) {\r\n                startGame();\r\n            }\r\n        });\r\n        newPng.src = pngs[keys[i]];\r\n    };\r\n    for (var i = 0; i < keys.length; i++) {\r\n        _loop_1(i);\r\n    }\r\n}\r\nloadResources(pngs);\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/inputHandler.ts":
/*!*****************************!*\
  !*** ./src/inputHandler.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return inputHandler; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n/* harmony import */ var _unitFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unitFactories */ \"./src/unitFactories.ts\");\n\r\n\r\nfunction inputHandler(root, selectBox) {\r\n    window.oncontextmenu = function () {\r\n        return false;\r\n    };\r\n    root.addEventListener('mousedown', mousedown, false);\r\n    function mousedown(e) {\r\n        if (e.button === 0) {\r\n            selectBox.xStart = e.clientX;\r\n            selectBox.yStart = e.clientY;\r\n            selectBox.xEnd = e.clientX;\r\n            selectBox.yEnd = e.clientY;\r\n            root.addEventListener('mouseup', mouseup, false);\r\n            root.addEventListener('mousemove', mousemove, false);\r\n        }\r\n    }\r\n    function mouseup(e) {\r\n        root.removeEventListener('mouseup', mouseup, false);\r\n        root.removeEventListener('mousemove', mousemove, false);\r\n        var xStart = selectBox.xStart, xEnd = selectBox.xEnd, yStart = selectBox.yStart, yEnd = selectBox.yEnd;\r\n        if (Math.abs(xStart - xEnd) + Math.abs(yStart - yEnd) < 5) {\r\n            selectBox.xStart = 0;\r\n            selectBox.yStart = 0;\r\n            selectBox.xEnd = 0;\r\n            selectBox.yEnd = 0;\r\n            _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedUnits = [];\r\n            _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedBuilding = undefined;\r\n            for (var i = 0; i < _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units.length; i++) {\r\n                if (Math.pow((_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units[i].x - xStart), 2) + Math.pow((_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units[i].y - yStart), 2) < Math.pow(_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units[i].radius, 2)) {\r\n                    _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedUnits = [_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units[i]];\r\n                    break;\r\n                }\r\n            }\r\n            if (!_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedUnits.length) {\r\n                for (var i = 0; i < _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings.length; i++) {\r\n                    if (Math.pow((_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings[i].gridX * _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings[i].gridSizeX - xStart), 2) + Math.pow((_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings[i].gridY * _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings[i].gridSizeY - yStart), 2) < Math.pow(_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings[i].radius, 2)) {\r\n                        _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedBuilding = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings[i];\r\n                        Object(_unitFactories__WEBPACK_IMPORTED_MODULE_1__[\"spawnMarine\"])(_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedBuilding.player, _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedBuilding.gridX * _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings[i].gridSizeX, _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedBuilding.gridY * _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings[i].gridSizeY);\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        else {\r\n            _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].preSelectedUnits = [];\r\n            var smallestX_1 = xStart < xEnd ? xStart : xEnd;\r\n            var biggestX_1 = xStart < xEnd ? xEnd : xStart;\r\n            var smallestY_1 = yStart < yEnd ? yStart : yEnd;\r\n            var biggestY_1 = yStart < yEnd ? yEnd : yStart;\r\n            _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedUnits = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units.filter(function (el) {\r\n                return el.x > smallestX_1 && el.x < biggestX_1 &&\r\n                    el.y > smallestY_1 && el.y < biggestY_1;\r\n            });\r\n            if (!_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedUnits.length) {\r\n                _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedBuilding = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].buildings.filter(function (el) {\r\n                    return el.gridX * el.gridSizeX > smallestX_1 && el.gridX * el.gridSizeX < biggestX_1 &&\r\n                        el.gridY * el.gridSizeY > smallestY_1 && el.gridY * el.gridSizeY < biggestY_1;\r\n                })[0];\r\n            }\r\n            selectBox.xStart = 0;\r\n            selectBox.yStart = 0;\r\n            selectBox.xEnd = 0;\r\n            selectBox.yEnd = 0;\r\n        }\r\n        if (_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedUnits.length) {\r\n            root.addEventListener('mousedown', rightclick, false);\r\n        }\r\n        if (_state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedBuilding) {\r\n            root.addEventListener('mousedown', rightclick, false);\r\n            console.log('building selected');\r\n        }\r\n    }\r\n    function mousemove(e) {\r\n        selectBox.xEnd = e.clientX;\r\n        selectBox.yEnd = e.clientY;\r\n        var xStart = selectBox.xStart, xEnd = selectBox.xEnd, yStart = selectBox.yStart, yEnd = selectBox.yEnd;\r\n        var smallestX = xStart < xEnd ? xStart : xEnd;\r\n        var biggestX = xStart < xEnd ? xEnd : xStart;\r\n        var smallestY = yStart < yEnd ? yStart : yEnd;\r\n        var biggestY = yStart < yEnd ? yEnd : yStart;\r\n        _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].preSelectedUnits = _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units.filter(function (el) {\r\n            return el.x > smallestX && el.x < biggestX &&\r\n                el.y > smallestY && el.y < biggestY;\r\n        });\r\n    }\r\n    function rightclick(e) {\r\n        if (e.button === 2) {\r\n            _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].selectedUnits.forEach(function (el) {\r\n                var x = el.x - e.clientX;\r\n                var y = el.y - e.clientY;\r\n                if (Math.abs(x) > Math.abs(y)) {\r\n                    el.xvel = -(x / Math.abs(x)) * el.speed;\r\n                    el.yvel = -(y / Math.abs(x)) * el.speed;\r\n                }\r\n                else {\r\n                    el.xvel = -(x / Math.abs(y)) * el.speed;\r\n                    el.yvel = -(y / Math.abs(y)) * el.speed;\r\n                }\r\n                el.moveCommand = true;\r\n                el.gotoX = e.clientX;\r\n                el.gotoY = e.clientY;\r\n            });\r\n        }\r\n        else {\r\n            root.removeEventListener('mousedown', rightclick, false);\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/inputHandler.ts?");

/***/ }),

/***/ "./src/interfaces/index.ts":
/*!*********************************!*\
  !*** ./src/interfaces/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/interfaces/index.ts?");

/***/ }),

/***/ "./src/moveUnits.ts":
/*!**************************!*\
  !*** ./src/moveUnits.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return moveUnits; });\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.ts\");\n\r\nfunction moveUnits(units) {\r\n    var movingUnits = units.filter(function (el) { return el.xvel !== 0 || el.yvel !== 0; });\r\n    for (var i = 0; i < movingUnits.length; i++) {\r\n        if (Math.pow((movingUnits[i].x - movingUnits[i].gotoX), 2) + Math.pow((movingUnits[i].y - movingUnits[i].gotoY), 2) < 100) { //less than 10px from target\r\n            movingUnits[i].xvel = 0;\r\n            movingUnits[i].yvel = 0;\r\n            movingUnits[i].moveCommand = false;\r\n        }\r\n        var collision = Object(_collisionDetection__WEBPACK_IMPORTED_MODULE_0__[\"checkCollisionUnitUnits\"])(movingUnits[i], units);\r\n        if (!collision && movingUnits[i].moveCommand) {\r\n            movingUnits[i].x = movingUnits[i].x + movingUnits[i].xvel;\r\n            movingUnits[i].y = movingUnits[i].y + movingUnits[i].yvel;\r\n        }\r\n        if (collision && movingUnits[i].moveCommand) {\r\n            movingUnits[i].moveCommand = false;\r\n        }\r\n        if (!collision && !movingUnits[i].moveCommand) {\r\n            movingUnits[i].moveCommand = true;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/moveUnits.ts?");

/***/ }),

/***/ "./src/state.ts":
/*!**********************!*\
  !*** ./src/state.ts ***!
  \**********************/
/*! exports provided: state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"state\", function() { return state; });\n// colors\r\nvar black = '#000000';\r\nvar red = '#ff0000';\r\nvar yellow = '#f6ff00';\r\nvar green = '#00ff00';\r\nvar blue = '#0044ff';\r\nvar state = {\r\n    grid: [],\r\n    pngs: {},\r\n    units: [],\r\n    buildings: [],\r\n    resources: [\r\n        {\r\n            type: 'mineral',\r\n            x: 0,\r\n            y: 700,\r\n            value: 1500\r\n        },\r\n        {\r\n            type: 'mineral',\r\n            x: 37,\r\n            y: 650,\r\n            value: 1500\r\n        },\r\n        {\r\n            type: 'mineral',\r\n            x: 0,\r\n            y: 600,\r\n            value: 1500\r\n        },\r\n        {\r\n            type: 'mineral',\r\n            x: 37,\r\n            y: 550,\r\n            value: 1500\r\n        },\r\n        {\r\n            type: 'mineral',\r\n            x: 0,\r\n            y: 500,\r\n            value: 1500\r\n        }\r\n    ],\r\n    selectedBuilding: undefined,\r\n    preSelectedBuildings: [],\r\n    selectedUnits: [],\r\n    preSelectedUnits: []\r\n};\r\n\n\n//# sourceURL=webpack:///./src/state.ts?");

/***/ }),

/***/ "./src/unitFactories.ts":
/*!******************************!*\
  !*** ./src/unitFactories.ts ***!
  \******************************/
/*! exports provided: spawnMarine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"spawnMarine\", function() { return spawnMarine; });\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ \"./src/state.ts\");\n\r\nfunction spawnMarine(player, x, y) {\r\n    _state__WEBPACK_IMPORTED_MODULE_0__[\"state\"].units.push({\r\n        player: player,\r\n        type: 'marine',\r\n        hash: Math.random(),\r\n        hp: 45,\r\n        damage: 5,\r\n        fireFrequency: 1,\r\n        armor: 0,\r\n        speed: 2,\r\n        x: x,\r\n        y: y,\r\n        xvel: 0,\r\n        yvel: 0,\r\n        radius: 15,\r\n        color: 'white',\r\n        moveCommand: false,\r\n        attackCommand: false,\r\n        gotoX: 0,\r\n        gotoY: 0,\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/unitFactories.ts?");

/***/ })

/******/ });