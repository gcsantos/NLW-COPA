"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({\r\n    value: true\r\n}));\r\nexports[\"default\"] = _interopRequireDefault;\r\nfunction _interopRequireDefault(obj) {\r\n    return obj && obj.__esModule ? obj : {\r\n        default: obj\r\n    };\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/OWI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = void 0;\nvar _interop_require_default = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nvar _react = _interop_require_default(__webpack_require__(/*! react */ \"react\"));\nvar _head = _interop_require_default(__webpack_require__(/*! ../shared/lib/head */ \"../shared/lib/head\"));\nconst statusCodes = {\n    400: \"Bad Request\",\n    404: \"This page could not be found\",\n    405: \"Method Not Allowed\",\n    500: \"Internal Server Error\"\n};\nfunction _getInitialProps({ res , err  }) {\n    const statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n}\nconst styles = {\n    error: {\n        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif',\n        height: \"100vh\",\n        textAlign: \"center\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\"\n    },\n    desc: {\n        display: \"inline-block\",\n        textAlign: \"left\",\n        lineHeight: \"49px\",\n        height: \"49px\",\n        verticalAlign: \"middle\"\n    },\n    h1: {\n        display: \"inline-block\",\n        margin: 0,\n        marginRight: \"20px\",\n        padding: \"0 23px 0 0\",\n        fontSize: \"24px\",\n        fontWeight: 500,\n        verticalAlign: \"top\",\n        lineHeight: \"49px\"\n    },\n    h2: {\n        fontSize: \"14px\",\n        fontWeight: \"normal\",\n        lineHeight: \"49px\",\n        margin: 0,\n        padding: 0\n    }\n};\nvar _Component;\nclass Error extends (_Component = _react.default.Component) {\n    render() {\n        const { statusCode , withDarkMode =true  } = this.props;\n        const title = this.props.title || statusCodes[statusCode] || \"An unexpected error has occurred\";\n        return /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.error\n        }, /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement(\"title\", null, statusCode ? `${statusCode}: ${title}` : \"Application error: a client-side exception has occurred\")), /*#__PURE__*/ _react.default.createElement(\"div\", null, /*#__PURE__*/ _react.default.createElement(\"style\", {\n            dangerouslySetInnerHTML: {\n                __html: `\r\n                body { margin: 0; color: #000; background: #fff; }\r\n                .next-error-h1 {\r\n                  border-right: 1px solid rgba(0, 0, 0, .3);\r\n                }\r\n\r\n                ${withDarkMode ? `@media (prefers-color-scheme: dark) {\r\n                  body { color: #fff; background: #000; }\r\n                  .next-error-h1 {\r\n                    border-right: 1px solid rgba(255, 255, 255, .3);\r\n                  }\r\n                }` : \"\"}`\n            }\n        }), statusCode ? /*#__PURE__*/ _react.default.createElement(\"h1\", {\n            className: \"next-error-h1\",\n            style: styles.h1\n        }, statusCode) : null, /*#__PURE__*/ _react.default.createElement(\"div\", {\n            style: styles.desc\n        }, /*#__PURE__*/ _react.default.createElement(\"h2\", {\n            style: styles.h2\n        }, this.props.title || statusCode ? title : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, \"Application error: a client-side exception has occurred (see the browser console for more information)\"), \".\"))));\n    }\n}\nError.displayName = \"ErrorPage\";\nError.getInitialProps = _getInitialProps;\nError.origGetInitialProps = _getInitialProps;\nexports[\"default\"] = Error; //# sourceMappingURL=_error.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19lcnJvci5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiQSw4Q0FBNkM7SUFDekNHLE9BQU8sSUFBSTtBQUNmLENBQUMsRUFBQztBQUNGRCxrQkFBZSxHQUFHLEtBQUs7QUFDdkIsSUFBSUcsMkJBQTJCQyxtSkFBK0Q7QUFDOUYsSUFBSUMsU0FBU0YseUJBQXlCQyxtQkFBT0EsQ0FBQyxvQkFBTztBQUNyRCxJQUFJRSxRQUFRSCx5QkFBeUJDLG1CQUFPQSxDQUFDLDhDQUFvQjtBQUNqRSxNQUFNRyxjQUFjO0lBQ2hCLEtBQUs7SUFDTCxLQUFLO0lBQ0wsS0FBSztJQUNMLEtBQUs7QUFDVDtBQUNBLFNBQVNDLGlCQUFpQixFQUFFQyxJQUFHLEVBQUdDLElBQUcsRUFBRyxFQUFFO0lBQ3RDLE1BQU1DLGFBQWFGLE9BQU9BLElBQUlFLFVBQVUsR0FBR0YsSUFBSUUsVUFBVSxHQUFHRCxNQUFNQSxJQUFJQyxVQUFVLEdBQUcsR0FBRztJQUN0RixPQUFPO1FBQ0hBO0lBQ0o7QUFDSjtBQUNBLE1BQU1DLFNBQVM7SUFDWEMsT0FBTztRQUNIQyxZQUFZO1FBQ1pDLFFBQVE7UUFDUkMsV0FBVztRQUNYQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsWUFBWTtRQUNaQyxnQkFBZ0I7SUFDcEI7SUFDQUMsTUFBTTtRQUNGSixTQUFTO1FBQ1RELFdBQVc7UUFDWE0sWUFBWTtRQUNaUCxRQUFRO1FBQ1JRLGVBQWU7SUFDbkI7SUFDQUMsSUFBSTtRQUNBUCxTQUFTO1FBQ1RRLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsWUFBWTtRQUNaTixlQUFlO1FBQ2ZELFlBQVk7SUFDaEI7SUFDQVEsSUFBSTtRQUNBRixVQUFVO1FBQ1ZDLFlBQVk7UUFDWlAsWUFBWTtRQUNaRyxRQUFRO1FBQ1JFLFNBQVM7SUFDYjtBQUNKO0FBQ0EsSUFBSUk7QUFDSixNQUFNQyxjQUFlRCxDQUFBQSxhQUFhMUIsT0FBT0gsT0FBTyxDQUFDK0IsU0FBUztJQUN0REMsU0FBUztRQUNMLE1BQU0sRUFBRXZCLFdBQVUsRUFBR3dCLGNBQWMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDQyxLQUFLO1FBQ3ZELE1BQU1DLFFBQVEsSUFBSSxDQUFDRCxLQUFLLENBQUNDLEtBQUssSUFBSTlCLFdBQVcsQ0FBQ0ksV0FBVyxJQUFJO1FBQzdELE9BQU8sV0FBVyxHQUFHTixPQUFPSCxPQUFPLENBQUNvQyxhQUFhLENBQUMsT0FBTztZQUNyREMsT0FBTzNCLE9BQU9DLEtBQUs7UUFDdkIsR0FBRyxXQUFXLEdBQUdSLE9BQU9ILE9BQU8sQ0FBQ29DLGFBQWEsQ0FBQ2hDLE1BQU1KLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxHQUFHRyxPQUFPSCxPQUFPLENBQUNvQyxhQUFhLENBQUMsU0FBUyxJQUFJLEVBQUUzQixhQUFhLENBQUMsRUFBRUEsV0FBVyxFQUFFLEVBQUUwQixNQUFNLENBQUMsR0FBRyx5REFBeUQsSUFBSSxXQUFXLEdBQUdoQyxPQUFPSCxPQUFPLENBQUNvQyxhQUFhLENBQUMsT0FBTyxJQUFJLEVBQUUsV0FBVyxHQUFHakMsT0FBT0gsT0FBTyxDQUFDb0MsYUFBYSxDQUFDLFNBQVM7WUFDM1VFLHlCQUF5QjtnQkFDckJDLFFBQVEsQ0FBQztZQVliO1FBQ0osSUFBSTlCLGFBQWE7WUFDYitCLFdBQVc7WUFDWEg7O1lBRUFBLE9BQU8zQixPQUFPUyxJQUFJO1FBQ3RCLEdBQUcsV0FBVyxHQUFHaEIsT0FBT0gsT0FBTyxDQUFDb0MsYUFBYSxDQUFDO1lBQzFDQyxPQUFPM0IsT0FBT2tCLEVBQUU7UUFDcEIsR0FBRyxJQUFJLENBQUNNLEtBQUssQ0FBQ0MsS0FBSyxJQUFJMUIsYUFBYTBCLFFBQVEsV0FBVyxHQUFHaEM7SUFDOUQ7QUFDSjtBQUNBMkIsTUFBTVk7QUFDTlosTUFBTWEsZUFBZSxHQUFHckM7QUFDeEJ3QixNQUFNYyxtQkFBbUIsR0FBR3RDO0FBQzVCUixRQUFRRSxPQUFPLEdBQUc4QixPQUVsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2Vycm9yLmpzPzE4ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdCA9IHJlcXVpcmUoXCJAc3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdC5qc1wiKS5kZWZhdWx0O1xyXG52YXIgX3JlYWN0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfaGVhZCA9IF9pbnRlcm9wX3JlcXVpcmVfZGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcclxuY29uc3Qgc3RhdHVzQ29kZXMgPSB7XHJcbiAgICA0MDA6ICdCYWQgUmVxdWVzdCcsXHJcbiAgICA0MDQ6ICdUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kJyxcclxuICAgIDQwNTogJ01ldGhvZCBOb3QgQWxsb3dlZCcsXHJcbiAgICA1MDA6ICdJbnRlcm5hbCBTZXJ2ZXIgRXJyb3InXHJcbn07XHJcbmZ1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoeyByZXMgLCBlcnIgIH0pIHtcclxuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgJiYgcmVzLnN0YXR1c0NvZGUgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXNDb2RlXHJcbiAgICB9O1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGVycm9yOiB7XHJcbiAgICAgICAgZm9udEZhbWlseTogJy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsXHJcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xyXG4gICAgfSxcclxuICAgIGRlc2M6IHtcclxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCcsXHJcbiAgICAgICAgaGVpZ2h0OiAnNDlweCcsXHJcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcclxuICAgIH0sXHJcbiAgICBoMToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBtYXJnaW5SaWdodDogJzIwcHgnLFxyXG4gICAgICAgIHBhZGRpbmc6ICcwIDIzcHggMCAwJyxcclxuICAgICAgICBmb250U2l6ZTogJzI0cHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnNDlweCdcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzQ5cHgnLFxyXG4gICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICBwYWRkaW5nOiAwXHJcbiAgICB9XHJcbn07XHJcbnZhciBfQ29tcG9uZW50O1xyXG5jbGFzcyBFcnJvciBleHRlbmRzIChfQ29tcG9uZW50ID0gX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50KSB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlICwgd2l0aERhcmtNb2RlID10cnVlICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZXNbc3RhdHVzQ29kZV0gfHwgJ0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztcclxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5lcnJvclxyXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBzdGF0dXNDb2RlID8gYCR7c3RhdHVzQ29kZX06ICR7dGl0bGV9YCA6ICdBcHBsaWNhdGlvbiBlcnJvcjogYSBjbGllbnQtc2lkZSBleGNlcHRpb24gaGFzIG9jY3VycmVkJykpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiwge1xyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xyXG4gICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICBib2R5IHsgbWFyZ2luOiAwOyBjb2xvcjogIzAwMDsgYmFja2dyb3VuZDogI2ZmZjsgfVxyXG4gICAgICAgICAgICAgICAgLm5leHQtZXJyb3ItaDEge1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAke3dpdGhEYXJrTW9kZSA/IGBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGJvZHkgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzAwMDsgfVxyXG4gICAgICAgICAgICAgICAgICAubmV4dC1lcnJvci1oMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1gIDogJyd9YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksIHN0YXR1c0NvZGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJuZXh0LWVycm9yLWgxXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuaDFcclxuICAgICAgICB9LCBzdGF0dXNDb2RlKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XHJcbiAgICAgICAgICAgIHN0eWxlOiBzdHlsZXMuZGVzY1xyXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIsIHtcclxuICAgICAgICAgICAgc3R5bGU6IHN0eWxlcy5oMlxyXG4gICAgICAgIH0sIHRoaXMucHJvcHMudGl0bGUgfHwgc3RhdHVzQ29kZSA/IHRpdGxlIDogLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBcIkFwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQgKHNlZSB0aGUgYnJvd3NlciBjb25zb2xlIGZvciBtb3JlIGluZm9ybWF0aW9uKVwiKSwgXCIuXCIpKSkpO1xyXG4gICAgfVxyXG59XHJcbkVycm9yLmRpc3BsYXlOYW1lID0gJ0Vycm9yUGFnZSc7XHJcbkVycm9yLmdldEluaXRpYWxQcm9wcyA9IF9nZXRJbml0aWFsUHJvcHM7XHJcbkVycm9yLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBfZ2V0SW5pdGlhbFByb3BzO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBFcnJvcjtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkZWZhdWx0IiwiX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl9oZWFkIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsInN0eWxlcyIsImVycm9yIiwiZm9udEZhbWlseSIsImhlaWdodCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZGVzYyIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiaDEiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoMiIsIl9Db21wb25lbnQiLCJFcnJvciIsIkNvbXBvbmVudCIsInJlbmRlciIsIndpdGhEYXJrTW9kZSIsInByb3BzIiwidGl0bGUiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNsYXNzTmFtZSIsIkZyYWdtZW50IiwiZGlzcGxheU5hbWUiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/pages/_error.js\n");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/pages/_error.js"));
module.exports = __webpack_exports__;

})();