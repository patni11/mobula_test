"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0";
exports.ids = ["vendor-chunks/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RemoveScrollBar: () => (/* binding */ RemoveScrollBar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_style_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-style-singleton */ \"(ssr)/./node_modules/.pnpm/react-style-singleton@2.2.1_@types+react@18.2.48_react@18.2.0/node_modules/react-style-singleton/dist/es2015/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js\");\n\n\n\n\nvar Style = (0,react_style_singleton__WEBPACK_IMPORTED_MODULE_1__.styleSingleton)();\n// important tip - once we measure scrollBar width and remove them\n// we could not repeat this operation\n// thus we are using style-singleton - only the first \"yet correct\" style will be applied.\nvar getStyles = function(_a, allowRelative, gapMode, important) {\n    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;\n    if (gapMode === void 0) {\n        gapMode = \"margin\";\n    }\n    return \"\\n  .\".concat(_constants__WEBPACK_IMPORTED_MODULE_2__.noScrollbarsClassName, \" {\\n   overflow: hidden \").concat(important, \";\\n   padding-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  body {\\n    overflow: hidden \").concat(important, \";\\n    overscroll-behavior: contain;\\n    \").concat([\n        allowRelative && \"position: relative \".concat(important, \";\"),\n        gapMode === \"margin\" && \"\\n    padding-left: \".concat(left, \"px;\\n    padding-top: \").concat(top, \"px;\\n    padding-right: \").concat(right, \"px;\\n    margin-left:0;\\n    margin-top:0;\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n    \"),\n        gapMode === \"padding\" && \"padding-right: \".concat(gap, \"px \").concat(important, \";\")\n    ].filter(Boolean).join(\"\"), \"\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" {\\n    right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" {\\n    margin-right: \").concat(gap, \"px \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.zeroRightClassName, \" {\\n    right: 0 \").concat(important, \";\\n  }\\n  \\n  .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" .\").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.fullWidthClassName, \" {\\n    margin-right: 0 \").concat(important, \";\\n  }\\n  \\n  body {\\n    \").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.removedBarSizeVariable, \": \").concat(gap, \"px;\\n  }\\n\");\n};\n/**\n * Removes page scrollbar and blocks page scroll when mounted\n */ var RemoveScrollBar = function(props) {\n    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? \"margin\" : _a;\n    /*\n     gap will be measured on every component mount\n     however it will be used only by the \"first\" invocation\n     due to singleton nature of <Style\n     */ var gap = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function() {\n        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getGapWidth)(gapMode);\n    }, [\n        gapMode\n    ]);\n    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Style, {\n        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? \"!important\" : \"\")\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStCO0FBQ3dCO0FBQzZEO0FBQzlFO0FBQ3RDLElBQUlPLFFBQVFOLHFFQUFjQTtBQUMxQixrRUFBa0U7QUFDbEUscUNBQXFDO0FBQ3JDLDBGQUEwRjtBQUMxRixJQUFJTyxZQUFZLFNBQVVDLEVBQUUsRUFBRUMsYUFBYSxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7SUFDM0QsSUFBSUMsT0FBT0osR0FBR0ksSUFBSSxFQUFFQyxNQUFNTCxHQUFHSyxHQUFHLEVBQUVDLFFBQVFOLEdBQUdNLEtBQUssRUFBRUMsTUFBTVAsR0FBR08sR0FBRztJQUNoRSxJQUFJTCxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVO0lBQVU7SUFDOUMsT0FBTyxRQUFRTSxNQUFNLENBQUNiLDZEQUFxQkEsRUFBRSw0QkFBNEJhLE1BQU0sQ0FBQ0wsV0FBVyx5QkFBeUJLLE1BQU0sQ0FBQ0QsS0FBSyxPQUFPQyxNQUFNLENBQUNMLFdBQVcsMkNBQTJDSyxNQUFNLENBQUNMLFdBQVcsOENBQThDSyxNQUFNLENBQUM7UUFDdlFQLGlCQUFpQixzQkFBc0JPLE1BQU0sQ0FBQ0wsV0FBVztRQUN6REQsWUFBWSxZQUNSLHVCQUF1Qk0sTUFBTSxDQUFDSixNQUFNLDBCQUEwQkksTUFBTSxDQUFDSCxLQUFLLDRCQUE0QkcsTUFBTSxDQUFDRixPQUFPLGtFQUFrRUUsTUFBTSxDQUFDRCxLQUFLLE9BQU9DLE1BQU0sQ0FBQ0wsV0FBVztRQUMvTkQsWUFBWSxhQUFhLGtCQUFrQk0sTUFBTSxDQUFDRCxLQUFLLE9BQU9DLE1BQU0sQ0FBQ0wsV0FBVztLQUNuRixDQUNJTSxNQUFNLENBQUNDLFNBQ1BDLElBQUksQ0FBQyxLQUFLLGtCQUFrQkgsTUFBTSxDQUFDZCwwREFBa0JBLEVBQUUsbUJBQW1CYyxNQUFNLENBQUNELEtBQUssT0FBT0MsTUFBTSxDQUFDTCxXQUFXLG1CQUFtQkssTUFBTSxDQUFDZiwwREFBa0JBLEVBQUUsMEJBQTBCZSxNQUFNLENBQUNELEtBQUssT0FBT0MsTUFBTSxDQUFDTCxXQUFXLG1CQUFtQkssTUFBTSxDQUFDZCwwREFBa0JBLEVBQUUsTUFBTWMsTUFBTSxDQUFDZCwwREFBa0JBLEVBQUUscUJBQXFCYyxNQUFNLENBQUNMLFdBQVcsbUJBQW1CSyxNQUFNLENBQUNmLDBEQUFrQkEsRUFBRSxNQUFNZSxNQUFNLENBQUNmLDBEQUFrQkEsRUFBRSw0QkFBNEJlLE1BQU0sQ0FBQ0wsV0FBVyw4QkFBOEJLLE1BQU0sQ0FBQ1osOERBQXNCQSxFQUFFLE1BQU1ZLE1BQU0sQ0FBQ0QsS0FBSztBQUN2aUI7QUFDQTs7Q0FFQyxHQUNNLElBQUlLLGtCQUFrQixTQUFVQyxLQUFLO0lBQ3hDLElBQUlDLGFBQWFELE1BQU1DLFVBQVUsRUFBRUMsY0FBY0YsTUFBTUUsV0FBVyxFQUFFZixLQUFLYSxNQUFNWCxPQUFPLEVBQUVBLFVBQVVGLE9BQU8sS0FBSyxJQUFJLFdBQVdBO0lBQzdIOzs7O0tBSUMsR0FDRCxJQUFJTyxNQUFNaEIsMENBQWEsQ0FBQztRQUFjLE9BQU9NLG1EQUFXQSxDQUFDSztJQUFVLEdBQUc7UUFBQ0E7S0FBUTtJQUMvRSxxQkFBT1gsZ0RBQW1CLENBQUNPLE9BQU87UUFBRW9CLFFBQVFuQixVQUFVUSxLQUFLLENBQUNPLFlBQVlaLFNBQVMsQ0FBQ2EsY0FBYyxlQUFlO0lBQUk7QUFDdkgsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhckAyLjMuNF9AdHlwZXMrcmVhY3RAMTguMi40OF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LXJlbW92ZS1zY3JvbGwtYmFyL2Rpc3QvZXMyMDE1L2NvbXBvbmVudC5qcz9lMWMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0eWxlU2luZ2xldG9uIH0gZnJvbSAncmVhY3Qtc3R5bGUtc2luZ2xldG9uJztcbmltcG9ydCB7IGZ1bGxXaWR0aENsYXNzTmFtZSwgemVyb1JpZ2h0Q2xhc3NOYW1lLCBub1Njcm9sbGJhcnNDbGFzc05hbWUsIHJlbW92ZWRCYXJTaXplVmFyaWFibGUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRHYXBXaWR0aCB9IGZyb20gJy4vdXRpbHMnO1xudmFyIFN0eWxlID0gc3R5bGVTaW5nbGV0b24oKTtcbi8vIGltcG9ydGFudCB0aXAgLSBvbmNlIHdlIG1lYXN1cmUgc2Nyb2xsQmFyIHdpZHRoIGFuZCByZW1vdmUgdGhlbVxuLy8gd2UgY291bGQgbm90IHJlcGVhdCB0aGlzIG9wZXJhdGlvblxuLy8gdGh1cyB3ZSBhcmUgdXNpbmcgc3R5bGUtc2luZ2xldG9uIC0gb25seSB0aGUgZmlyc3QgXCJ5ZXQgY29ycmVjdFwiIHN0eWxlIHdpbGwgYmUgYXBwbGllZC5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiAoX2EsIGFsbG93UmVsYXRpdmUsIGdhcE1vZGUsIGltcG9ydGFudCkge1xuICAgIHZhciBsZWZ0ID0gX2EubGVmdCwgdG9wID0gX2EudG9wLCByaWdodCA9IF9hLnJpZ2h0LCBnYXAgPSBfYS5nYXA7XG4gICAgaWYgKGdhcE1vZGUgPT09IHZvaWQgMCkgeyBnYXBNb2RlID0gJ21hcmdpbic7IH1cbiAgICByZXR1cm4gXCJcXG4gIC5cIi5jb25jYXQobm9TY3JvbGxiYXJzQ2xhc3NOYW1lLCBcIiB7XFxuICAgb3ZlcmZsb3c6IGhpZGRlbiBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICAgcGFkZGluZy1yaWdodDogXCIpLmNvbmNhdChnYXAsIFwicHggXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW4gXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xcbiAgICBcIikuY29uY2F0KFtcbiAgICAgICAgYWxsb3dSZWxhdGl2ZSAmJiBcInBvc2l0aW9uOiByZWxhdGl2ZSBcIi5jb25jYXQoaW1wb3J0YW50LCBcIjtcIiksXG4gICAgICAgIGdhcE1vZGUgPT09ICdtYXJnaW4nICYmXG4gICAgICAgICAgICBcIlxcbiAgICBwYWRkaW5nLWxlZnQ6IFwiLmNvbmNhdChsZWZ0LCBcInB4O1xcbiAgICBwYWRkaW5nLXRvcDogXCIpLmNvbmNhdCh0b3AsIFwicHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IFwiKS5jb25jYXQocmlnaHQsIFwicHg7XFxuICAgIG1hcmdpbi1sZWZ0OjA7XFxuICAgIG1hcmdpbi10b3A6MDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBcIikuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICAgIFwiKSxcbiAgICAgICAgZ2FwTW9kZSA9PT0gJ3BhZGRpbmcnICYmIFwicGFkZGluZy1yaWdodDogXCIuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XCIpLFxuICAgIF1cbiAgICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgICAuam9pbignJyksIFwiXFxuICB9XFxuICBcXG4gIC5cIikuY29uY2F0KHplcm9SaWdodENsYXNzTmFtZSwgXCIge1xcbiAgICByaWdodDogXCIpLmNvbmNhdChnYXAsIFwicHggXCIpLmNvbmNhdChpbXBvcnRhbnQsIFwiO1xcbiAgfVxcbiAgXFxuICAuXCIpLmNvbmNhdChmdWxsV2lkdGhDbGFzc05hbWUsIFwiIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBcIikuY29uY2F0KGdhcCwgXCJweCBcIikuY29uY2F0KGltcG9ydGFudCwgXCI7XFxuICB9XFxuICBcXG4gIC5cIikuY29uY2F0KHplcm9SaWdodENsYXNzTmFtZSwgXCIgLlwiKS5jb25jYXQoemVyb1JpZ2h0Q2xhc3NOYW1lLCBcIiB7XFxuICAgIHJpZ2h0OiAwIFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gIH1cXG4gIFxcbiAgLlwiKS5jb25jYXQoZnVsbFdpZHRoQ2xhc3NOYW1lLCBcIiAuXCIpLmNvbmNhdChmdWxsV2lkdGhDbGFzc05hbWUsIFwiIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwIFwiKS5jb25jYXQoaW1wb3J0YW50LCBcIjtcXG4gIH1cXG4gIFxcbiAgYm9keSB7XFxuICAgIFwiKS5jb25jYXQocmVtb3ZlZEJhclNpemVWYXJpYWJsZSwgXCI6IFwiKS5jb25jYXQoZ2FwLCBcInB4O1xcbiAgfVxcblwiKTtcbn07XG4vKipcbiAqIFJlbW92ZXMgcGFnZSBzY3JvbGxiYXIgYW5kIGJsb2NrcyBwYWdlIHNjcm9sbCB3aGVuIG1vdW50ZWRcbiAqL1xuZXhwb3J0IHZhciBSZW1vdmVTY3JvbGxCYXIgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICB2YXIgbm9SZWxhdGl2ZSA9IHByb3BzLm5vUmVsYXRpdmUsIG5vSW1wb3J0YW50ID0gcHJvcHMubm9JbXBvcnRhbnQsIF9hID0gcHJvcHMuZ2FwTW9kZSwgZ2FwTW9kZSA9IF9hID09PSB2b2lkIDAgPyAnbWFyZ2luJyA6IF9hO1xuICAgIC8qXG4gICAgIGdhcCB3aWxsIGJlIG1lYXN1cmVkIG9uIGV2ZXJ5IGNvbXBvbmVudCBtb3VudFxuICAgICBob3dldmVyIGl0IHdpbGwgYmUgdXNlZCBvbmx5IGJ5IHRoZSBcImZpcnN0XCIgaW52b2NhdGlvblxuICAgICBkdWUgdG8gc2luZ2xldG9uIG5hdHVyZSBvZiA8U3R5bGVcbiAgICAgKi9cbiAgICB2YXIgZ2FwID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiBnZXRHYXBXaWR0aChnYXBNb2RlKTsgfSwgW2dhcE1vZGVdKTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChTdHlsZSwgeyBzdHlsZXM6IGdldFN0eWxlcyhnYXAsICFub1JlbGF0aXZlLCBnYXBNb2RlLCAhbm9JbXBvcnRhbnQgPyAnIWltcG9ydGFudCcgOiAnJykgfSk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVTaW5nbGV0b24iLCJmdWxsV2lkdGhDbGFzc05hbWUiLCJ6ZXJvUmlnaHRDbGFzc05hbWUiLCJub1Njcm9sbGJhcnNDbGFzc05hbWUiLCJyZW1vdmVkQmFyU2l6ZVZhcmlhYmxlIiwiZ2V0R2FwV2lkdGgiLCJTdHlsZSIsImdldFN0eWxlcyIsIl9hIiwiYWxsb3dSZWxhdGl2ZSIsImdhcE1vZGUiLCJpbXBvcnRhbnQiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJnYXAiLCJjb25jYXQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIlJlbW92ZVNjcm9sbEJhciIsInByb3BzIiwibm9SZWxhdGl2ZSIsIm5vSW1wb3J0YW50IiwidXNlTWVtbyIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fullWidthClassName: () => (/* binding */ fullWidthClassName),\n/* harmony export */   noScrollbarsClassName: () => (/* binding */ noScrollbarsClassName),\n/* harmony export */   removedBarSizeVariable: () => (/* binding */ removedBarSizeVariable),\n/* harmony export */   zeroRightClassName: () => (/* binding */ zeroRightClassName)\n/* harmony export */ });\nvar zeroRightClassName = \"right-scroll-bar-position\";\nvar fullWidthClassName = \"width-before-scroll-bar\";\nvar noScrollbarsClassName = \"with-scroll-bars-hidden\";\n/**\n * Name of a CSS variable containing the amount of \"hidden\" scrollbar\n * ! might be undefined ! use will fallback!\n */ var removedBarSizeVariable = \"--removed-body-scroll-bar-size\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb25zdGFudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQUlBLHFCQUFxQiw0QkFBNEI7QUFDckQsSUFBSUMscUJBQXFCLDBCQUEwQjtBQUNuRCxJQUFJQyx3QkFBd0IsMEJBQTBCO0FBQzdEOzs7Q0FHQyxHQUNNLElBQUlDLHlCQUF5QixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9jb25zdGFudHMuanM/ZWMzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIHplcm9SaWdodENsYXNzTmFtZSA9ICdyaWdodC1zY3JvbGwtYmFyLXBvc2l0aW9uJztcbmV4cG9ydCB2YXIgZnVsbFdpZHRoQ2xhc3NOYW1lID0gJ3dpZHRoLWJlZm9yZS1zY3JvbGwtYmFyJztcbmV4cG9ydCB2YXIgbm9TY3JvbGxiYXJzQ2xhc3NOYW1lID0gJ3dpdGgtc2Nyb2xsLWJhcnMtaGlkZGVuJztcbi8qKlxuICogTmFtZSBvZiBhIENTUyB2YXJpYWJsZSBjb250YWluaW5nIHRoZSBhbW91bnQgb2YgXCJoaWRkZW5cIiBzY3JvbGxiYXJcbiAqICEgbWlnaHQgYmUgdW5kZWZpbmVkICEgdXNlIHdpbGwgZmFsbGJhY2shXG4gKi9cbmV4cG9ydCB2YXIgcmVtb3ZlZEJhclNpemVWYXJpYWJsZSA9ICctLXJlbW92ZWQtYm9keS1zY3JvbGwtYmFyLXNpemUnO1xuIl0sIm5hbWVzIjpbInplcm9SaWdodENsYXNzTmFtZSIsImZ1bGxXaWR0aENsYXNzTmFtZSIsIm5vU2Nyb2xsYmFyc0NsYXNzTmFtZSIsInJlbW92ZWRCYXJTaXplVmFyaWFibGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RemoveScrollBar: () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_0__.RemoveScrollBar),\n/* harmony export */   fullWidthClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.fullWidthClassName),\n/* harmony export */   getGapWidth: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.getGapWidth),\n/* harmony export */   noScrollbarsClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.noScrollbarsClassName),\n/* harmony export */   removedBarSizeVariable: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.removedBarSizeVariable),\n/* harmony export */   zeroRightClassName: () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_1__.zeroRightClassName)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/component.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/constants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEM7QUFDc0U7QUFDOUU7QUFDMEYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS9pbmRleC5qcz83YjhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbW92ZVNjcm9sbEJhciB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IHplcm9SaWdodENsYXNzTmFtZSwgZnVsbFdpZHRoQ2xhc3NOYW1lLCBub1Njcm9sbGJhcnNDbGFzc05hbWUsIHJlbW92ZWRCYXJTaXplVmFyaWFibGUgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXRHYXBXaWR0aCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHsgUmVtb3ZlU2Nyb2xsQmFyLCB6ZXJvUmlnaHRDbGFzc05hbWUsIGZ1bGxXaWR0aENsYXNzTmFtZSwgbm9TY3JvbGxiYXJzQ2xhc3NOYW1lLCByZW1vdmVkQmFyU2l6ZVZhcmlhYmxlLCBnZXRHYXBXaWR0aCwgfTtcbiJdLCJuYW1lcyI6WyJSZW1vdmVTY3JvbGxCYXIiLCJ6ZXJvUmlnaHRDbGFzc05hbWUiLCJmdWxsV2lkdGhDbGFzc05hbWUiLCJub1Njcm9sbGJhcnNDbGFzc05hbWUiLCJyZW1vdmVkQmFyU2l6ZVZhcmlhYmxlIiwiZ2V0R2FwV2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getGapWidth: () => (/* binding */ getGapWidth),\n/* harmony export */   zeroGap: () => (/* binding */ zeroGap)\n/* harmony export */ });\nvar zeroGap = {\n    left: 0,\n    top: 0,\n    right: 0,\n    gap: 0\n};\nvar parse = function(x) {\n    return parseInt(x || \"\", 10) || 0;\n};\nvar getOffset = function(gapMode) {\n    var cs = window.getComputedStyle(document.body);\n    var left = cs[gapMode === \"padding\" ? \"paddingLeft\" : \"marginLeft\"];\n    var top = cs[gapMode === \"padding\" ? \"paddingTop\" : \"marginTop\"];\n    var right = cs[gapMode === \"padding\" ? \"paddingRight\" : \"marginRight\"];\n    return [\n        parse(left),\n        parse(top),\n        parse(right)\n    ];\n};\nvar getGapWidth = function(gapMode) {\n    if (gapMode === void 0) {\n        gapMode = \"margin\";\n    }\n    if (true) {\n        return zeroGap;\n    }\n    var offsets = getOffset(gapMode);\n    var documentWidth = document.documentElement.clientWidth;\n    var windowWidth = window.innerWidth;\n    return {\n        left: offsets[0],\n        top: offsets[1],\n        right: offsets[2],\n        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLFVBQVU7SUFDakJDLE1BQU07SUFDTkMsS0FBSztJQUNMQyxPQUFPO0lBQ1BDLEtBQUs7QUFDVCxFQUFFO0FBQ0YsSUFBSUMsUUFBUSxTQUFVQyxDQUFDO0lBQUksT0FBT0MsU0FBU0QsS0FBSyxJQUFJLE9BQU87QUFBRztBQUM5RCxJQUFJRSxZQUFZLFNBQVVDLE9BQU87SUFDN0IsSUFBSUMsS0FBS0MsT0FBT0MsZ0JBQWdCLENBQUNDLFNBQVNDLElBQUk7SUFDOUMsSUFBSWIsT0FBT1MsRUFBRSxDQUFDRCxZQUFZLFlBQVksZ0JBQWdCLGFBQWE7SUFDbkUsSUFBSVAsTUFBTVEsRUFBRSxDQUFDRCxZQUFZLFlBQVksZUFBZSxZQUFZO0lBQ2hFLElBQUlOLFFBQVFPLEVBQUUsQ0FBQ0QsWUFBWSxZQUFZLGlCQUFpQixjQUFjO0lBQ3RFLE9BQU87UUFBQ0osTUFBTUo7UUFBT0ksTUFBTUg7UUFBTUcsTUFBTUY7S0FBTztBQUNsRDtBQUNPLElBQUlZLGNBQWMsU0FBVU4sT0FBTztJQUN0QyxJQUFJQSxZQUFZLEtBQUssR0FBRztRQUFFQSxVQUFVO0lBQVU7SUFDOUMsSUFBSSxJQUFrQixFQUFhO1FBQy9CLE9BQU9UO0lBQ1g7SUFDQSxJQUFJZ0IsVUFBVVIsVUFBVUM7SUFDeEIsSUFBSVEsZ0JBQWdCSixTQUFTSyxlQUFlLENBQUNDLFdBQVc7SUFDeEQsSUFBSUMsY0FBY1QsT0FBT1UsVUFBVTtJQUNuQyxPQUFPO1FBQ0hwQixNQUFNZSxPQUFPLENBQUMsRUFBRTtRQUNoQmQsS0FBS2MsT0FBTyxDQUFDLEVBQUU7UUFDZmIsT0FBT2EsT0FBTyxDQUFDLEVBQUU7UUFDakJaLEtBQUtrQixLQUFLQyxHQUFHLENBQUMsR0FBR0gsY0FBY0gsZ0JBQWdCRCxPQUFPLENBQUMsRUFBRSxHQUFHQSxPQUFPLENBQUMsRUFBRTtJQUMxRTtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtcmVtb3ZlLXNjcm9sbC1iYXJAMi4zLjRfQHR5cGVzK3JlYWN0QDE4LjIuNDhfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1yZW1vdmUtc2Nyb2xsLWJhci9kaXN0L2VzMjAxNS91dGlscy5qcz82ZjJkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgemVyb0dhcCA9IHtcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBnYXA6IDAsXG59O1xudmFyIHBhcnNlID0gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHBhcnNlSW50KHggfHwgJycsIDEwKSB8fCAwOyB9O1xudmFyIGdldE9mZnNldCA9IGZ1bmN0aW9uIChnYXBNb2RlKSB7XG4gICAgdmFyIGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSk7XG4gICAgdmFyIGxlZnQgPSBjc1tnYXBNb2RlID09PSAncGFkZGluZycgPyAncGFkZGluZ0xlZnQnIDogJ21hcmdpbkxlZnQnXTtcbiAgICB2YXIgdG9wID0gY3NbZ2FwTW9kZSA9PT0gJ3BhZGRpbmcnID8gJ3BhZGRpbmdUb3AnIDogJ21hcmdpblRvcCddO1xuICAgIHZhciByaWdodCA9IGNzW2dhcE1vZGUgPT09ICdwYWRkaW5nJyA/ICdwYWRkaW5nUmlnaHQnIDogJ21hcmdpblJpZ2h0J107XG4gICAgcmV0dXJuIFtwYXJzZShsZWZ0KSwgcGFyc2UodG9wKSwgcGFyc2UocmlnaHQpXTtcbn07XG5leHBvcnQgdmFyIGdldEdhcFdpZHRoID0gZnVuY3Rpb24gKGdhcE1vZGUpIHtcbiAgICBpZiAoZ2FwTW9kZSA9PT0gdm9pZCAwKSB7IGdhcE1vZGUgPSAnbWFyZ2luJzsgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gemVyb0dhcDtcbiAgICB9XG4gICAgdmFyIG9mZnNldHMgPSBnZXRPZmZzZXQoZ2FwTW9kZSk7XG4gICAgdmFyIGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGVmdDogb2Zmc2V0c1swXSxcbiAgICAgICAgdG9wOiBvZmZzZXRzWzFdLFxuICAgICAgICByaWdodDogb2Zmc2V0c1syXSxcbiAgICAgICAgZ2FwOiBNYXRoLm1heCgwLCB3aW5kb3dXaWR0aCAtIGRvY3VtZW50V2lkdGggKyBvZmZzZXRzWzJdIC0gb2Zmc2V0c1swXSksXG4gICAgfTtcbn07XG4iXSwibmFtZXMiOlsiemVyb0dhcCIsImxlZnQiLCJ0b3AiLCJyaWdodCIsImdhcCIsInBhcnNlIiwieCIsInBhcnNlSW50IiwiZ2V0T2Zmc2V0IiwiZ2FwTW9kZSIsImNzIiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRvY3VtZW50IiwiYm9keSIsImdldEdhcFdpZHRoIiwib2Zmc2V0cyIsImRvY3VtZW50V2lkdGgiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIndpbmRvd1dpZHRoIiwiaW5uZXJXaWR0aCIsIk1hdGgiLCJtYXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-remove-scroll-bar@2.3.4_@types+react@18.2.48_react@18.2.0/node_modules/react-remove-scroll-bar/dist/es2015/utils.js\n");

/***/ })

};
;