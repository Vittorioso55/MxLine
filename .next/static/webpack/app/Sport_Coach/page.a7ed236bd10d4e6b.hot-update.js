"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Sport_Coach/page",{

/***/ "(app-pages-browser)/./src/app/components/Sport_Collection_Coach.jsx":
/*!*******************************************************!*\
  !*** ./src/app/components/Sport_Collection_Coach.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst products = [\n    {\n        title: \"CLASSIC GILET\",\n        description: \"Comfortable and stylish.\",\n        images: [\n            \"bg-Sport_Coach-1a\",\n            \"bg-Sport_Coach-1b\",\n            \"bg-Sport_Coach-1c\",\n            \"bg-Sport_Coach-1d\"\n        ]\n    },\n    {\n        title: \"LITE JACKET\",\n        description: \"Lightweight and versatile.\",\n        images: [\n            \"bg-Sport_Coach-2a\",\n            \"bg-Sport_Coach-2b\",\n            \"bg-Sport_Coach-2c\",\n            \"bg-Sport_Coach-2d\"\n        ]\n    },\n    {\n        title: \"POLO\",\n        description: \"Soft and breathable.\",\n        images: [\n            \"bg-Sport_Coach-3a\",\n            \"bg-Sport_Coach-3b\",\n            \"bg-Sport_Coach-3c\",\n            \"bg-Sport_Coach-3d\"\n        ]\n    },\n    {\n        title: \"FACTORY JACKET\",\n        description: \"Durable and functional.\",\n        images: [\n            \"bg-Sport_Coach-4a\",\n            \"bg-Sport_Coach-4b\",\n            \"bg-Sport_Coach-4c\",\n            \"bg-Sport_Coach-4d\"\n        ]\n    }\n];\nconst Sport_Collection_Coach = ()=>{\n    _s();\n    const [currentIndexes, setCurrentIndexes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(products.map(()=>0));\n    const handlePrev = (index)=>{\n        setCurrentIndexes((prevIndexes)=>prevIndexes.map((currentIndex, i)=>i === index ? currentIndex === 0 ? products[index].images.length - 1 : currentIndex - 1 : currentIndex));\n    };\n    const handleNext = (index)=>{\n        setCurrentIndexes((prevIndexes)=>prevIndexes.map((currentIndex, i)=>i === index ? currentIndex === products[index].images.length - 1 ? 0 : currentIndex + 1 : currentIndex));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: products.map((product, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"relative w-full h-screen flex items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hidden lg:block w-full h-full bg-cover bg-center \".concat(product.images[currentIndexes[index]], \" bg-common relative\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute left-0 top-1/2 transform -translate-y-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black bg-opacity-50 text-white p-4 rounded-full bg-blur-lg\",\n                                    onClick: ()=>handlePrev(index),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-3xl\",\n                                        children: \"‹\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute right-0 top-1/2 transform -translate-y-1/2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"bg-black bg-opacity-50 text-white p-4 rounded-full bg-blur-lg\",\n                                    onClick: ()=>handleNext(index),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-3xl\",\n                                        children: \"›\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-full grid grid-cols-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative lg:hidden w-full h-screen bg-cover bg-center \".concat(product.images[currentIndexes[index]], \" bg-common\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute left-0 top-1/2 transform -translate-y-1/2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-black bg-opacity-50 text-white p-4 rounded-full bg-blur-lg\",\n                                            onClick: ()=>handlePrev(index),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-3xl\",\n                                                children: \"‹\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"absolute right-0 top-1/2 transform -translate-y-1/2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"bg-black bg-opacity-50 text-white p-4 rounded-full bg-blur-lg\",\n                                            onClick: ()=>handleNext(index),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-3xl\",\n                                                children: \"›\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"absolute inset-x-0 bottom-0 bg-black bg-opacity-75 p-4 text-center text-white lg:hidden\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-4xl font-extrabold leading-snug\",\n                                        children: product.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-base mt-2\",\n                                        children: product.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"hidden lg:flex flex-col justify-center items-center bg-black bg-opacity-75 p-10 text-center text-white w-full h-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-4xl lg:text-8xl font-extrabold leading-snug mb-4\",\n                                        children: product.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-2xl lg:text-4xl\",\n                                        children: product.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"/Users/vittoriogennuso/Desktop/MxLine/MxLine/src/app/components/Sport_Collection_Coach.jsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false);\n};\n_s(Sport_Collection_Coach, \"F49XpRmHT8XCZJ5LBp/U8U39KGo=\");\n_c = Sport_Collection_Coach;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sport_Collection_Coach);\nvar _c;\n$RefreshReg$(_c, \"Sport_Collection_Coach\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TcG9ydF9Db2xsZWN0aW9uX0NvYWNoLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM2QjtBQUNXO0FBRXhDLE1BQU1HLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsUUFBUTtZQUFDO1lBQXFCO1lBQXFCO1lBQXFCO1NBQW9CO0lBQzlGO0lBQ0E7UUFDRUYsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFFBQVE7WUFBQztZQUFxQjtZQUFxQjtZQUFxQjtTQUFvQjtJQUM5RjtJQUNBO1FBQ0VGLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxRQUFRO1lBQUM7WUFBcUI7WUFBcUI7WUFBcUI7U0FBb0I7SUFDOUY7SUFDQTtRQUNFRixPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsUUFBUTtZQUFDO1lBQXFCO1lBQXFCO1lBQXFCO1NBQW9CO0lBQzlGO0NBQ0Q7QUFFRCxNQUFNQyx5QkFBeUI7O0lBQzdCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR1AsK0NBQVFBLENBQUNDLFNBQVNPLEdBQUcsQ0FBQyxJQUFNO0lBRXhFLE1BQU1DLGFBQWEsQ0FBQ0M7UUFDbEJILGtCQUFrQixDQUFDSSxjQUNqQkEsWUFBWUgsR0FBRyxDQUFDLENBQUNJLGNBQWNDLElBQzdCQSxNQUFNSCxRQUFTRSxpQkFBaUIsSUFBSVgsUUFBUSxDQUFDUyxNQUFNLENBQUNOLE1BQU0sQ0FBQ1UsTUFBTSxHQUFHLElBQUlGLGVBQWUsSUFBS0E7SUFHbEc7SUFFQSxNQUFNRyxhQUFhLENBQUNMO1FBQ2xCSCxrQkFBa0IsQ0FBQ0ksY0FDakJBLFlBQVlILEdBQUcsQ0FBQyxDQUFDSSxjQUFjQyxJQUM3QkEsTUFBTUgsUUFBU0UsaUJBQWlCWCxRQUFRLENBQUNTLE1BQU0sQ0FBQ04sTUFBTSxDQUFDVSxNQUFNLEdBQUcsSUFBSSxJQUFJRixlQUFlLElBQUtBO0lBR2xHO0lBRUEscUJBQ0U7a0JBQ0dYLFNBQVNPLEdBQUcsQ0FBQyxDQUFDUSxTQUFTTixzQkFDdEIsOERBQUNPO2dCQUFvQkMsV0FBVTs7a0NBRTdCLDhEQUFDQzt3QkFBSUQsV0FBVyxvREFBMEYsT0FBdENGLFFBQVFaLE1BQU0sQ0FBQ0UsY0FBYyxDQUFDSSxNQUFNLENBQUMsRUFBQzs7MENBRXhHLDhEQUFDUztnQ0FBSUQsV0FBVTswQ0FDYiw0RUFBQ0U7b0NBQ0NGLFdBQVU7b0NBQ1ZHLFNBQVMsSUFBTVosV0FBV0M7OENBRTFCLDRFQUFDWTt3Q0FBS0osV0FBVTtrREFBVzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHL0IsOERBQUNDO2dDQUFJRCxXQUFVOzBDQUNiLDRFQUFDRTtvQ0FDQ0YsV0FBVTtvQ0FDVkcsU0FBUyxJQUFNTixXQUFXTDs4Q0FFMUIsNEVBQUNZO3dDQUFLSixXQUFVO2tEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1qQyw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUViLDhEQUFDQztnQ0FBSUQsV0FBVyx5REFBK0YsT0FBdENGLFFBQVFaLE1BQU0sQ0FBQ0UsY0FBYyxDQUFDSSxNQUFNLENBQUMsRUFBQzs7a0RBRTdHLDhEQUFDUzt3Q0FBSUQsV0FBVTtrREFDYiw0RUFBQ0U7NENBQ0NGLFdBQVU7NENBQ1ZHLFNBQVMsSUFBTVosV0FBV0M7c0RBRTFCLDRFQUFDWTtnREFBS0osV0FBVTswREFBVzs7Ozs7Ozs7Ozs7Ozs7OztrREFHL0IsOERBQUNDO3dDQUFJRCxXQUFVO2tEQUNiLDRFQUFDRTs0Q0FDQ0YsV0FBVTs0Q0FDVkcsU0FBUyxJQUFNTixXQUFXTDtzREFFMUIsNEVBQUNZO2dEQUFLSixXQUFVOzBEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQU1qQyw4REFBQ0M7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDWkYsUUFBUWQsS0FBSzs7Ozs7O2tEQUVoQiw4REFBQ2lCO3dDQUFJRCxXQUFVO2tEQUNaRixRQUFRYixXQUFXOzs7Ozs7Ozs7Ozs7MENBS3hCLDhEQUFDZ0I7Z0NBQUlELFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBSUQsV0FBVTtrREFDWkYsUUFBUWQsS0FBSzs7Ozs7O2tEQUVoQiw4REFBQ2lCO3dDQUFJRCxXQUFVO2tEQUNaRixRQUFRYixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBN0RkTzs7Ozs7O0FBcUV0QjtHQTNGTUw7S0FBQUE7QUE2Rk4sK0RBQWVBLHNCQUFzQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU3BvcnRfQ29sbGVjdGlvbl9Db2FjaC5qc3g/YmIxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBwcm9kdWN0cyA9IFtcbiAgeyBcbiAgICB0aXRsZTogJ0NMQVNTSUMgR0lMRVQnLCBcbiAgICBkZXNjcmlwdGlvbjogJ0NvbWZvcnRhYmxlIGFuZCBzdHlsaXNoLicsIFxuICAgIGltYWdlczogWydiZy1TcG9ydF9Db2FjaC0xYScsICdiZy1TcG9ydF9Db2FjaC0xYicsICdiZy1TcG9ydF9Db2FjaC0xYycsICdiZy1TcG9ydF9Db2FjaC0xZCddIFxuICB9LFxuICB7IFxuICAgIHRpdGxlOiAnTElURSBKQUNLRVQnLCBcbiAgICBkZXNjcmlwdGlvbjogJ0xpZ2h0d2VpZ2h0IGFuZCB2ZXJzYXRpbGUuJywgXG4gICAgaW1hZ2VzOiBbJ2JnLVNwb3J0X0NvYWNoLTJhJywgJ2JnLVNwb3J0X0NvYWNoLTJiJywgJ2JnLVNwb3J0X0NvYWNoLTJjJywgJ2JnLVNwb3J0X0NvYWNoLTJkJ10gXG4gIH0sXG4gIHsgXG4gICAgdGl0bGU6ICdQT0xPJywgXG4gICAgZGVzY3JpcHRpb246ICdTb2Z0IGFuZCBicmVhdGhhYmxlLicsIFxuICAgIGltYWdlczogWydiZy1TcG9ydF9Db2FjaC0zYScsICdiZy1TcG9ydF9Db2FjaC0zYicsICdiZy1TcG9ydF9Db2FjaC0zYycsICdiZy1TcG9ydF9Db2FjaC0zZCddIFxuICB9LFxuICB7IFxuICAgIHRpdGxlOiAnRkFDVE9SWSBKQUNLRVQnLCBcbiAgICBkZXNjcmlwdGlvbjogJ0R1cmFibGUgYW5kIGZ1bmN0aW9uYWwuJywgXG4gICAgaW1hZ2VzOiBbJ2JnLVNwb3J0X0NvYWNoLTRhJywgJ2JnLVNwb3J0X0NvYWNoLTRiJywgJ2JnLVNwb3J0X0NvYWNoLTRjJywgJ2JnLVNwb3J0X0NvYWNoLTRkJ10gXG4gIH0sXG5dO1xuXG5jb25zdCBTcG9ydF9Db2xsZWN0aW9uX0NvYWNoID0gKCkgPT4ge1xuICBjb25zdCBbY3VycmVudEluZGV4ZXMsIHNldEN1cnJlbnRJbmRleGVzXSA9IHVzZVN0YXRlKHByb2R1Y3RzLm1hcCgoKSA9PiAwKSk7XG5cbiAgY29uc3QgaGFuZGxlUHJldiA9IChpbmRleCkgPT4ge1xuICAgIHNldEN1cnJlbnRJbmRleGVzKChwcmV2SW5kZXhlcykgPT4gXG4gICAgICBwcmV2SW5kZXhlcy5tYXAoKGN1cnJlbnRJbmRleCwgaSkgPT4gXG4gICAgICAgIGkgPT09IGluZGV4ID8gKGN1cnJlbnRJbmRleCA9PT0gMCA/IHByb2R1Y3RzW2luZGV4XS5pbWFnZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbmRleCAtIDEpIDogY3VycmVudEluZGV4XG4gICAgICApXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVOZXh0ID0gKGluZGV4KSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4ZXMoKHByZXZJbmRleGVzKSA9PiBcbiAgICAgIHByZXZJbmRleGVzLm1hcCgoY3VycmVudEluZGV4LCBpKSA9PiBcbiAgICAgICAgaSA9PT0gaW5kZXggPyAoY3VycmVudEluZGV4ID09PSBwcm9kdWN0c1tpbmRleF0uaW1hZ2VzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEluZGV4ICsgMSkgOiBjdXJyZW50SW5kZXhcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXG4gICAgICAgIDxzZWN0aW9uIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHsvKiBJbW1hZ2luZSBkaSBzZm9uZG8gdmlzaWJpbGUgc3Ugc2NoZXJtaSBncmFuZGkgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoaWRkZW4gbGc6YmxvY2sgdy1mdWxsIGgtZnVsbCBiZy1jb3ZlciBiZy1jZW50ZXIgJHtwcm9kdWN0LmltYWdlc1tjdXJyZW50SW5kZXhlc1tpbmRleF1dfSBiZy1jb21tb24gcmVsYXRpdmVgfT5cbiAgICAgICAgICAgIHsvKiBGcmVjY2V0dGUgcGVyIGNhbWJpYXJlIGltbWFnaW5lICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsYWNrIGJnLW9wYWNpdHktNTAgdGV4dC13aGl0ZSBwLTQgcm91bmRlZC1mdWxsIGJnLWJsdXItbGdcIiBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmV2KGluZGV4KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+JiM4MjQ5Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB0b3AtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgYmctb3BhY2l0eS01MCB0ZXh0LXdoaXRlIHAtNCByb3VuZGVkLWZ1bGwgYmctYmx1ci1sZ1wiIFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU5leHQoaW5kZXgpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGxcIj4mIzgyNTA7PC9zcGFuPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIENvbnRlbnV0byAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgZ3JpZCBncmlkLWNvbHMtMVwiPlxuICAgICAgICAgICAgey8qIENvbG9ubmEgY29uIGwnaW1tYWdpbmUgdmlzaWJpbGUgc3Ugc2NoZXJtaSBwaWNjb2xpICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBsZzpoaWRkZW4gdy1mdWxsIGgtc2NyZWVuIGJnLWNvdmVyIGJnLWNlbnRlciAke3Byb2R1Y3QuaW1hZ2VzW2N1cnJlbnRJbmRleGVzW2luZGV4XV19IGJnLWNvbW1vbmB9PlxuICAgICAgICAgICAgICB7LyogRnJlY2NldHRlIHBlciBjYW1iaWFyZSBpbW1hZ2luZSAqL31cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHRleHQtd2hpdGUgcC00IHJvdW5kZWQtZnVsbCBiZy1ibHVyLWxnXCIgXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQcmV2KGluZGV4KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPiYjODI0OTs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibGFjayBiZy1vcGFjaXR5LTUwIHRleHQtd2hpdGUgcC00IHJvdW5kZWQtZnVsbCBiZy1ibHVyLWxnXCIgXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOZXh0KGluZGV4KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPiYjODI1MDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBUZXN0byBzb3R0byBsJ2ltbWFnaW5lIHN1IHNjaGVybWkgcGljY29saSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIGJvdHRvbS0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNzUgcC00IHRleHQtY2VudGVyIHRleHQtd2hpdGUgbGc6aGlkZGVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1leHRyYWJvbGQgbGVhZGluZy1zbnVnXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYmFzZSBtdC0yXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHsvKiBUZXN0byBhY2NhbnRvIGFsbCdpbW1hZ2luZSBzdSBzY2hlcm1pIGdyYW5kaSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWJsYWNrIGJnLW9wYWNpdHktNzUgcC0xMCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIHctZnVsbCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZzp0ZXh0LTh4bCBmb250LWV4dHJhYm9sZCBsZWFkaW5nLXNudWcgbWItNFwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBsZzp0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwb3J0X0NvbGxlY3Rpb25fQ29hY2g7XG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJwcm9kdWN0cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZXMiLCJTcG9ydF9Db2xsZWN0aW9uX0NvYWNoIiwiY3VycmVudEluZGV4ZXMiLCJzZXRDdXJyZW50SW5kZXhlcyIsIm1hcCIsImhhbmRsZVByZXYiLCJpbmRleCIsInByZXZJbmRleGVzIiwiY3VycmVudEluZGV4IiwiaSIsImxlbmd0aCIsImhhbmRsZU5leHQiLCJwcm9kdWN0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Sport_Collection_Coach.jsx\n"));

/***/ })

});