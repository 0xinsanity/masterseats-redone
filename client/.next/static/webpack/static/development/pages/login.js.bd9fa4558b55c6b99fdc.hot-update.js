webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_areas_LoginCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/areas/LoginCard */ \"./src/areas/LoginCard/index.tsx\");\n/* harmony import */ var _src_components_LoginBackground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/LoginBackground */ \"./src/components/LoginBackground.tsx\");\n/* harmony import */ var _src_areas_Universal_OpenPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/areas/Universal/OpenPage */ \"./src/areas/Universal/OpenPage.tsx\");\n/* harmony import */ var _src_lib_UserContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/lib/UserContext */ \"./src/lib/UserContext.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst Login = () => {\n  _s();\n\n  const {\n    setToken,\n    api,\n    currentUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_src_lib_UserContext__WEBPACK_IMPORTED_MODULE_6__[\"UserContext\"]);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  const onFinish = async ({\n    uniq_id,\n    password\n  }) => {\n    try {\n      const email = uniq_id;\n      const res = await api.login({\n        email,\n        password\n      });\n      localStorage.setItem('email', email);\n      localStorage.setItem('password', password);\n      await setToken(res.data, true);\n\n      if (router.query.fromverify !== undefined) {\n        Object(_src_areas_Universal_OpenPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('/ticketwallet?fromverify');\n      } else {\n        Object(_src_areas_Universal_OpenPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('/dashboard');\n      }\n    } catch (error) {\n      if (error.response.status === 410) {\n        antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].info(\"Please remember to verify your email before trying to login.\");\n      } else {\n        antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].error(\"Your email and/or password were incorrect. Please try again.\");\n      }\n    }\n  };\n\n  console.log(localStorage.getItem('game'));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"title\", null, \"MasterSeats \\u2022 Login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_LoginBackground__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_areas_LoginCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    title: \"Login\",\n    onFinish: onFinish\n  })));\n};\n\n_s(Login, \"fAIzBga9oiw0mkgUFYYxjqgQoBk=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi50c3g/ZDc1ZiJdLCJuYW1lcyI6WyJMb2dpbiIsInNldFRva2VuIiwiYXBpIiwiY3VycmVudFVzZXIiLCJ1c2VDb250ZXh0IiwiVXNlckNvbnRleHQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvbkZpbmlzaCIsInVuaXFfaWQiLCJwYXNzd29yZCIsImVtYWlsIiwicmVzIiwibG9naW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsInF1ZXJ5IiwiZnJvbXZlcmlmeSIsInVuZGVmaW5lZCIsIk9wZW5QYWdlIiwiZXJyb3IiLCJyZXNwb25zZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxLQUFlLEdBQUcsTUFBTTtBQUFBOztBQUMxQixRQUFNO0FBQUVDLFlBQUY7QUFBWUMsT0FBWjtBQUFpQkM7QUFBakIsTUFBaUNDLHdEQUFVLENBQUNDLGdFQUFELENBQWpEO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxRQUFRLEdBQUcsT0FBTztBQUFDQyxXQUFEO0FBQVVDO0FBQVYsR0FBUCxLQUErQjtBQUM1QyxRQUFJO0FBQ0EsWUFBTUMsS0FBSyxHQUFHRixPQUFkO0FBQ0EsWUFBTUcsR0FBRyxHQUFHLE1BQU1WLEdBQUcsQ0FBQ1csS0FBSixDQUFVO0FBQUNGLGFBQUQ7QUFBUUQ7QUFBUixPQUFWLENBQWxCO0FBQ0FJLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJKLEtBQTlCO0FBQ0FHLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUNMLFFBQWpDO0FBQ0EsWUFBTVQsUUFBUSxDQUFDVyxHQUFHLENBQUNJLElBQUwsRUFBVyxJQUFYLENBQWQ7O0FBQ0EsVUFBSVYsTUFBTSxDQUFDVyxLQUFQLENBQWFDLFVBQWIsS0FBNEJDLFNBQWhDLEVBQTJDO0FBQ3ZDQyxxRkFBUSxDQUFDLDBCQUFELENBQVI7QUFDSCxPQUZELE1BRU87QUFDSEEscUZBQVEsQ0FBQyxZQUFELENBQVI7QUFDSDtBQUNKLEtBWEQsQ0FXRSxPQUFPQyxLQUFQLEVBQWM7QUFDWixVQUFJQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsTUFBZixLQUEwQixHQUE5QixFQUFtQztBQUMvQkMsb0RBQU8sQ0FBQ0MsSUFBUixDQUFhLDhEQUFiO0FBQ0gsT0FGRCxNQUVPO0FBQ0hELG9EQUFPLENBQUNILEtBQVIsQ0FBYyw4REFBZDtBQUNIO0FBQ0o7QUFDSixHQW5CRDs7QUFxQkFLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZYixZQUFZLENBQUNjLE9BQWIsQ0FBcUIsTUFBckIsQ0FBWjtBQUVBLHNCQUNJLHFJQUNJLDJEQUFDLGdEQUFELHFCQUNJLHFHQURKLENBREosZUFJSSwyREFBQyx1RUFBRCxxQkFDSSwyREFBQyw0REFBRDtBQUFXLFNBQUssRUFBRSxPQUFsQjtBQUEyQixZQUFRLEVBQUVwQjtBQUFyQyxJQURKLENBSkosQ0FESjtBQVVILENBckNEOztHQUFNUixLO1VBRWFPLHFEOzs7S0FGYlAsSztBQXVDU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7bWVzc2FnZX0gZnJvbSAnYW50ZCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMb2dpbkNhcmQgZnJvbSAnLi4vc3JjL2FyZWFzL0xvZ2luQ2FyZCdcbmltcG9ydCBMb2dpbkJhY2tncm91bmQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvTG9naW5CYWNrZ3JvdW5kJ1xuaW1wb3J0IE9wZW5QYWdlIGZyb20gJy4uL3NyYy9hcmVhcy9Vbml2ZXJzYWwvT3BlblBhZ2UnXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi9zcmMvbGliL1VzZXJDb250ZXh0J1xuaW1wb3J0IHsgcmVzZXRTZWxsaW5nSWZVbmRlZmluZWQgfSBmcm9tICcuLi9zcmMvbGliJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IExvZ2luOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNldFRva2VuLCBhcGksIGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgXG4gICAgY29uc3Qgb25GaW5pc2ggPSBhc3luYyAoe3VuaXFfaWQsIHBhc3N3b3JkfSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSB1bmlxX2lkXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkubG9naW4oe2VtYWlsLCBwYXNzd29yZH0pXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZW1haWwnLCBlbWFpbClcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgICAgICAgICAgYXdhaXQgc2V0VG9rZW4ocmVzLmRhdGEsIHRydWUpXG4gICAgICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LmZyb212ZXJpZnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIE9wZW5QYWdlKCcvdGlja2V0d2FsbGV0P2Zyb212ZXJpZnknKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPcGVuUGFnZSgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MTApIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLmluZm8oXCJQbGVhc2UgcmVtZW1iZXIgdG8gdmVyaWZ5IHlvdXIgZW1haWwgYmVmb3JlIHRyeWluZyB0byBsb2dpbi5cIilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIllvdXIgZW1haWwgYW5kL29yIHBhc3N3b3JkIHdlcmUgaW5jb3JyZWN0LiBQbGVhc2UgdHJ5IGFnYWluLlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dhbWUnKSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TWFzdGVyU2VhdHMg4oCiIExvZ2luPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxMb2dpbkJhY2tncm91bmQ+XG4gICAgICAgICAgICAgICAgPExvZ2luQ2FyZCB0aXRsZT17XCJMb2dpblwifSBvbkZpbmlzaD17b25GaW5pc2h9IC8+XG4gICAgICAgICAgICA8L0xvZ2luQmFja2dyb3VuZD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ })

})