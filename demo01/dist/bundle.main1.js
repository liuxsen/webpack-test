webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	var a = __webpack_require__(5);
	a.sayHello();
	var b = __webpack_require__(6);
	b.sayHello();
	var c = __webpack_require__(7);
	c.sayHello();

	document.write('hello webpack3')

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	module.exports = {
		helloText: 'hello c',
		sayHello: function(){
			console.log(this.helloText)
		}
	}

/***/ }
]);