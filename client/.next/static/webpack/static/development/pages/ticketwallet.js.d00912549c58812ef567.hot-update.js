webpackHotUpdate("static/development/pages/ticketwallet.js",{

/***/ "./src/areas/TicketWallet/Sections/Completed.tsx":
false,

/***/ "./src/areas/TicketWallet/Sections/Pending.tsx":
false,

/***/ "./src/areas/TicketWallet/index.tsx":
/*!******************************************!*\
  !*** ./src/areas/TicketWallet/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Universal_PageUniversal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Universal/PageUniversal */ \"./src/areas/Universal/PageUniversal.tsx\");\n/* harmony import */ var _Sections_Sell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sections/Sell */ \"./src/areas/TicketWallet/Sections/Sell.tsx\");\n/* harmony import */ var _lib_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/UserContext */ \"./src/lib/UserContext.tsx\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _Universal_OpenPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Universal/OpenPage */ \"./src/areas/Universal/OpenPage.tsx\");\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib */ \"./src/lib/index.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst {\n  TabPane\n} = antd__WEBPACK_IMPORTED_MODULE_4__[\"Tabs\"];\n\nconst TicketWallet = props => {\n  _s();\n\n  const {\n    defaultValue,\n    setOpenModal,\n    openModal\n  } = props;\n  const {\n    api,\n    currentUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_lib_UserContext__WEBPACK_IMPORTED_MODULE_3__[\"UserContext\"]);\n  const [wallet, setWallet] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (currentUser !== null) {\n      getTicketWallet();\n    }\n  }, []);\n\n  const getTicketWallet = async () => {\n    const body = await api.getTicketWallet();\n    setWallet(body.data);\n  };\n\n  const postTicket = async ticketBody => {\n    var ticket;\n\n    if (ticketBody.venmo_phone === undefined) {\n      ticket = {\n        game: ticketBody.game,\n        section: ticketBody.section,\n        price: ticketBody.price\n      };\n    } else {\n      const phone = ticketBody.venmo_phone;\n      const phone_replaced = phone.replace(/-/g, \"\");\n      ticket = {\n        game: ticketBody.game,\n        section: ticketBody.section,\n        price: ticketBody.price,\n        venmo_phone: phone_replaced\n      };\n    }\n\n    await api.postTicket(ticket);\n    Object(_lib__WEBPACK_IMPORTED_MODULE_6__[\"resetSellingForm\"])();\n    await getTicketWallet();\n    console.log(Object(_lib__WEBPACK_IMPORTED_MODULE_6__[\"serialize\"])({\n      'post': ticketBody.game\n    }));\n    Object(_Universal_OpenPage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('/thankyou?' + Object(_lib__WEBPACK_IMPORTED_MODULE_6__[\"serialize\"])({\n      'post': ticketBody.game\n    }));\n  };\n\n  const removeTicket = async ticketId => {\n    await api.removeTicket({\n      id: ticketId\n    });\n    await getTicketWallet();\n  };\n\n  const confirmTransferSeller = async ticket_id => {\n    await api.transferredTicketSellerConfirmation({\n      ticket_id\n    });\n    await getTicketWallet();\n  };\n\n  const confirmTransferBuyer = async ticket_id => {\n    await api.transferredTicketBuyerConfirmation({\n      ticket_id\n    });\n    await getTicketWallet();\n  };\n\n  const refundTicket = async ticket_id => {\n    await api.refundTicket({\n      id: ticket_id\n    });\n    await getTicketWallet();\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Universal_PageUniversal__WEBPACK_IMPORTED_MODULE_1__[\"PageDashboard\"], {\n    isLoggedIn: currentUser === null ? false : true,\n    selected: -1\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sections_Sell__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    visible: openModal,\n    setVisibility: setOpenModal,\n    tickets: wallet,\n    postTicket: postTicket,\n    removeTicket: removeTicket,\n    confirmTransferSeller: confirmTransferSeller,\n    confirmTransferBuyer: confirmTransferBuyer,\n    refundTicket: refundTicket\n  }));\n};\n\n_s(TicketWallet, \"ur2WU5i9/IqljJ0/X2mz9VzFyv4=\");\n\n_c = TicketWallet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicketWallet);\n\nvar _c;\n\n$RefreshReg$(_c, \"TicketWallet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXJlYXMvVGlja2V0V2FsbGV0L2luZGV4LnRzeD9hY2NjIl0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwiVGlja2V0V2FsbGV0IiwicHJvcHMiLCJkZWZhdWx0VmFsdWUiLCJzZXRPcGVuTW9kYWwiLCJvcGVuTW9kYWwiLCJhcGkiLCJjdXJyZW50VXNlciIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIndhbGxldCIsInNldFdhbGxldCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0VGlja2V0V2FsbGV0IiwiYm9keSIsImRhdGEiLCJwb3N0VGlja2V0IiwidGlja2V0Qm9keSIsInRpY2tldCIsInZlbm1vX3Bob25lIiwidW5kZWZpbmVkIiwiZ2FtZSIsInNlY3Rpb24iLCJwcmljZSIsInBob25lIiwicGhvbmVfcmVwbGFjZWQiLCJyZXBsYWNlIiwicmVzZXRTZWxsaW5nRm9ybSIsImNvbnNvbGUiLCJsb2ciLCJzZXJpYWxpemUiLCJPcGVuUGFnZSIsInJlbW92ZVRpY2tldCIsInRpY2tldElkIiwiaWQiLCJjb25maXJtVHJhbnNmZXJTZWxsZXIiLCJ0aWNrZXRfaWQiLCJ0cmFuc2ZlcnJlZFRpY2tldFNlbGxlckNvbmZpcm1hdGlvbiIsImNvbmZpcm1UcmFuc2ZlckJ1eWVyIiwidHJhbnNmZXJyZWRUaWNrZXRCdXllckNvbmZpcm1hdGlvbiIsInJlZnVuZFRpY2tldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFjQyx5Q0FBcEI7O0FBUUEsTUFBTUMsWUFBeUMsR0FBR0MsS0FBSyxJQUFJO0FBQUE7O0FBQ3ZELFFBQU07QUFBQ0MsZ0JBQUQ7QUFBZUMsZ0JBQWY7QUFBNkJDO0FBQTdCLE1BQTBDSCxLQUFoRDtBQUNBLFFBQU07QUFBQ0ksT0FBRDtBQUFNQztBQUFOLE1BQXFCQyx3REFBVSxDQUFDQyw0REFB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QUtRLGdCQUFZLEVBQUVnQixZQUx0QjtBQU1RLHlCQUFxQixFQUFFRyxxQkFOL0I7QUFPUSx3QkFBb0IsRUFBRUcsb0JBUDlCO0FBUVEsZ0JBQVksRUFBRUU7QUFSdEIsSUFESixDQURKO0FBYUgsQ0EzRUQ7O0dBQU14QyxZOztLQUFBQSxZO0FBNkVTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9hcmVhcy9UaWNrZXRXYWxsZXQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtQYWdlRGFzaGJvYXJkfSBmcm9tICcuLi9Vbml2ZXJzYWwvUGFnZVVuaXZlcnNhbCdcbmltcG9ydCBTZWxsU2VjdGlvbiBmcm9tICcuL1NlY3Rpb25zL1NlbGwnXG5pbXBvcnQgUGVuZGluZ1NlY3Rpb24gZnJvbSAnLi9TZWN0aW9ucy9QZW5kaW5nJ1xuaW1wb3J0IENvbXBsZXRlZFNlY3Rpb24gZnJvbSAnLi9TZWN0aW9ucy9Db21wbGV0ZWQnXG5pbXBvcnQge1VzZXJDb250ZXh0fSBmcm9tICcuLi8uLi9saWIvVXNlckNvbnRleHQnXG5pbXBvcnQge1RpY2tldCwgUG9zdFRpY2tldEJvZHl9IGZyb20gJy4uLy4uLy4uL2FwaSdcbmltcG9ydCB7IFRhYnMgfSBmcm9tICdhbnRkJztcbmltcG9ydCBPcGVuUGFnZSBmcm9tICcuLi9Vbml2ZXJzYWwvT3BlblBhZ2UnXG5pbXBvcnQgeyBzZXJpYWxpemUsIHJlc2V0U2VsbGluZ0Zvcm0gfSBmcm9tICcuLi8uLi9saWInXG5cbmNvbnN0IHsgVGFiUGFuZSB9ID0gVGFicztcblxuaW50ZXJmYWNlIFRpY2tldFdhbGxldFByb3BzIHtcbiAgICBzZXRPcGVuTW9kYWw6ICh2aXNpYmxlOiBib29sZWFuKSA9PiB2b2lkLFxuICAgIG9wZW5Nb2RhbDogYm9vbGVhbixcbiAgICBkZWZhdWx0VmFsdWU6IHN0cmluZ1xufVxuXG5jb25zdCBUaWNrZXRXYWxsZXQ6IFJlYWN0LkZDPFRpY2tldFdhbGxldFByb3BzPiA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7ZGVmYXVsdFZhbHVlLCBzZXRPcGVuTW9kYWwsIG9wZW5Nb2RhbH0gPSBwcm9wc1xuICAgIGNvbnN0IHthcGksIGN1cnJlbnRVc2VyfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpXG4gICAgY29uc3QgW3dhbGxldCwgc2V0V2FsbGV0XSA9IHVzZVN0YXRlPFRpY2tldFtdPihbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjdXJyZW50VXNlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgZ2V0VGlja2V0V2FsbGV0KClcbiAgICAgICAgfVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgZ2V0VGlja2V0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gYXdhaXQgYXBpLmdldFRpY2tldFdhbGxldCgpXG4gICAgICAgIHNldFdhbGxldChib2R5LmRhdGEpXG4gICAgfVxuXG4gICAgY29uc3QgcG9zdFRpY2tldCA9IGFzeW5jICh0aWNrZXRCb2R5OiBQb3N0VGlja2V0Qm9keSkgPT4ge1xuICAgICAgICB2YXIgdGlja2V0OiBQb3N0VGlja2V0Qm9keSBcbiAgICAgICAgaWYgKHRpY2tldEJvZHkudmVubW9fcGhvbmUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGlja2V0ID0ge1xuICAgICAgICAgICAgICAgIGdhbWU6IHRpY2tldEJvZHkuZ2FtZSxcbiAgICAgICAgICAgICAgICBzZWN0aW9uOiB0aWNrZXRCb2R5LnNlY3Rpb24sXG4gICAgICAgICAgICAgICAgcHJpY2U6IHRpY2tldEJvZHkucHJpY2UsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwaG9uZSA9IHRpY2tldEJvZHkudmVubW9fcGhvbmVcbiAgICAgICAgICAgIGNvbnN0IHBob25lX3JlcGxhY2VkID0gcGhvbmUucmVwbGFjZSgvLS9nLFwiXCIpXG4gICAgICAgICAgICB0aWNrZXQgPSB7XG4gICAgICAgICAgICAgICAgZ2FtZTogdGlja2V0Qm9keS5nYW1lLFxuICAgICAgICAgICAgICAgIHNlY3Rpb246IHRpY2tldEJvZHkuc2VjdGlvbixcbiAgICAgICAgICAgICAgICBwcmljZTogdGlja2V0Qm9keS5wcmljZSxcbiAgICAgICAgICAgICAgICB2ZW5tb19waG9uZTogcGhvbmVfcmVwbGFjZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYXdhaXQgYXBpLnBvc3RUaWNrZXQodGlja2V0KVxuICAgICAgICByZXNldFNlbGxpbmdGb3JtKClcbiAgICAgICAgYXdhaXQgZ2V0VGlja2V0V2FsbGV0KClcbiAgICAgICAgY29uc29sZS5sb2coc2VyaWFsaXplKHsncG9zdCc6IHRpY2tldEJvZHkuZ2FtZX0pKVxuICAgICAgICBPcGVuUGFnZSgnL3RoYW5reW91PycgKyBzZXJpYWxpemUoeydwb3N0JzogdGlja2V0Qm9keS5nYW1lfSkpXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGlja2V0ID0gYXN5bmMgKHRpY2tldElkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgYXBpLnJlbW92ZVRpY2tldCh7aWQ6IHRpY2tldElkfSlcbiAgICAgICAgYXdhaXQgZ2V0VGlja2V0V2FsbGV0KClcbiAgICB9XG5cbiAgICBjb25zdCBjb25maXJtVHJhbnNmZXJTZWxsZXIgPSBhc3luYyAodGlja2V0X2lkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgYXdhaXQgYXBpLnRyYW5zZmVycmVkVGlja2V0U2VsbGVyQ29uZmlybWF0aW9uKHt0aWNrZXRfaWR9KVxuICAgICAgICBhd2FpdCBnZXRUaWNrZXRXYWxsZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmZpcm1UcmFuc2ZlckJ1eWVyID0gYXN5bmMgKHRpY2tldF9pZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGF3YWl0IGFwaS50cmFuc2ZlcnJlZFRpY2tldEJ1eWVyQ29uZmlybWF0aW9uKHt0aWNrZXRfaWR9KVxuICAgICAgICBhd2FpdCBnZXRUaWNrZXRXYWxsZXQoKVxuICAgIH1cblxuICAgIGNvbnN0IHJlZnVuZFRpY2tldCA9IGFzeW5jICh0aWNrZXRfaWQ6IHN0cmluZykgPT4ge1xuICAgICAgICBhd2FpdCBhcGkucmVmdW5kVGlja2V0KHtpZDogdGlja2V0X2lkfSlcbiAgICAgICAgYXdhaXQgZ2V0VGlja2V0V2FsbGV0KClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZURhc2hib2FyZCBpc0xvZ2dlZEluPXtjdXJyZW50VXNlciA9PT0gbnVsbCA/IGZhbHNlIDogdHJ1ZX0gc2VsZWN0ZWQ9ey0xfT5cbiAgICAgICAgICAgIDxTZWxsU2VjdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17b3Blbk1vZGFsfVxuICAgICAgICAgICAgICAgICAgICBzZXRWaXNpYmlsaXR5PXtzZXRPcGVuTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIHRpY2tldHM9e3dhbGxldH0gXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUaWNrZXQ9e3Bvc3RUaWNrZXR9IFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVUaWNrZXQ9e3JlbW92ZVRpY2tldH1cbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVRyYW5zZmVyU2VsbGVyPXtjb25maXJtVHJhbnNmZXJTZWxsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UcmFuc2ZlckJ1eWVyPXtjb25maXJtVHJhbnNmZXJCdXllcn1cbiAgICAgICAgICAgICAgICAgICAgcmVmdW5kVGlja2V0PXtyZWZ1bmRUaWNrZXR9Lz5cbiAgICAgICAgPC9QYWdlRGFzaGJvYXJkPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGlja2V0V2FsbGV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/areas/TicketWallet/index.tsx\n");

/***/ })

})