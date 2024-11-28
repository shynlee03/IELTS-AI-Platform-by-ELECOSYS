"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/agents/speaking/page",{

/***/ "(app-pages-browser)/./src/data/speakingTemplates.ts":
/*!***************************************!*\
  !*** ./src/data/speakingTemplates.ts ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   speakingTemplates: () => (/* binding */ speakingTemplates)\n/* harmony export */ });\n/* harmony import */ var _speakingQuestions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speakingQuestions */ \"(app-pages-browser)/./src/data/speakingQuestions.ts\");\n\nconst speakingInstructions = \"\\n**Tham số phản hồi**:\\n- Giới hạn độ d\\xe0i phản hồi: 2500 tokens\\n- Tập trung v\\xe0o phản hồi ngắn gọn, r\\xf5 r\\xe0ng\\n- Ưu ti\\xean c\\xe1c nhận x\\xe9t quan trọng\\n- Sử dụng gạch đầu d\\xf2ng để dễ đọc\\n\\n**Khung học tập th\\xedch ứng**:\\n1. Ph\\xe2n t\\xedch ph\\xe1t \\xe2m:\\n   - Đ\\xe1nh gi\\xe1 độ r\\xf5 r\\xe0ng\\n   - Nhận x\\xe9t về ngữ điệu\\n   - G\\xf3p \\xfd về trọng \\xe2m từ\\n   - Đề xuất cải thiện\\n\\n2. Đ\\xe1nh gi\\xe1 nội dung:\\n   - T\\xednh li\\xean kết của c\\xe2u trả lời\\n   - Độ phong ph\\xfa từ vựng\\n   - Cấu tr\\xfac c\\xe2u v\\xe0 ngữ ph\\xe1p\\n   - T\\xednh ph\\xf9 hợp với chủ đề\\n\\n3. Chiến lược trả lời:\\n   - Hướng dẫn quản l\\xfd thời gian\\n   - C\\xe1ch ph\\xe1t triển \\xfd tưởng\\n   - Kỹ thuật trả lời tự nhi\\xean\\n   - C\\xe1ch xử l\\xfd khi gặp kh\\xf3 khăn\\n\";\n// Convert templates to array format for compatibility\nconst speakingTemplates = [\n    // Free Chat\n    {\n        id: 'free_chat',\n        titleVi: 'Trò chuyện tự do',\n        titleEn: 'Free Chat Practice',\n        descriptionVi: 'Trò chuyện tự do với AI tutor để luyện tập tiếng Anh',\n        descriptionEn: 'Practice general conversation skills without a specific template',\n        taskType: 'free_chat',\n        level: 'All Levels',\n        targetBand: 'Any',\n        criteria: [\n            'Fluency',\n            'Vocabulary',\n            'Grammar',\n            'Pronunciation'\n        ]\n    },\n    // Part 1 Templates\n    ...Object.entries(_speakingQuestions__WEBPACK_IMPORTED_MODULE_0__.part1Questions).map((param)=>{\n        let [id, questions] = param;\n        var _id_split_pop, _id_split_pop1, _id_split_pop2, _id_split_pop3;\n        return {\n            id,\n            titleVi: 'Phần 1 - ' + ((_id_split_pop = id.split('_').pop()) === null || _id_split_pop === void 0 ? void 0 : _id_split_pop.charAt(0).toUpperCase()) + ((_id_split_pop1 = id.split('_').pop()) === null || _id_split_pop1 === void 0 ? void 0 : _id_split_pop1.slice(1)),\n            titleEn: 'Part 1 - ' + ((_id_split_pop2 = id.split('_').pop()) === null || _id_split_pop2 === void 0 ? void 0 : _id_split_pop2.charAt(0).toUpperCase()) + ((_id_split_pop3 = id.split('_').pop()) === null || _id_split_pop3 === void 0 ? void 0 : _id_split_pop3.slice(1)),\n            descriptionVi: 'Luyện tập trả lời các câu hỏi về chủ đề quen thuộc',\n            descriptionEn: 'Practice answering questions about familiar topics',\n            taskType: 'speaking_part1',\n            level: 'B1',\n            targetBand: '5.0-6.0',\n            criteria: [\n                'Self-introduction',\n                'Description',\n                'Daily Life'\n            ],\n            questions\n        };\n    }),\n    // Part 2 Templates\n    ...Object.entries(_speakingQuestions__WEBPACK_IMPORTED_MODULE_0__.part2Questions).map((param)=>{\n        let [id, topic] = param;\n        return {\n            id,\n            titleVi: 'Phần 2 - ' + topic.topic,\n            titleEn: 'Part 2 - ' + topic.topic,\n            descriptionVi: 'Luyện tập nói dài với thẻ gợi ý',\n            descriptionEn: 'Long turn speaking practice with cue card',\n            taskType: 'speaking_part2',\n            level: 'B2',\n            targetBand: '6.0-7.0',\n            criteria: [\n                'Description',\n                'Organization',\n                'Fluency'\n            ],\n            topic\n        };\n    }),\n    // Part 3 Templates\n    ...Object.entries(_speakingQuestions__WEBPACK_IMPORTED_MODULE_0__.part3Questions).map((param)=>{\n        let [id, questions] = param;\n        var _id_split_pop, _id_split_pop1, _id_split_pop2, _id_split_pop3;\n        return {\n            id,\n            titleVi: 'Phần 3 - ' + ((_id_split_pop = id.split('_').pop()) === null || _id_split_pop === void 0 ? void 0 : _id_split_pop.charAt(0).toUpperCase()) + ((_id_split_pop1 = id.split('_').pop()) === null || _id_split_pop1 === void 0 ? void 0 : _id_split_pop1.slice(1)),\n            titleEn: 'Part 3 - ' + ((_id_split_pop2 = id.split('_').pop()) === null || _id_split_pop2 === void 0 ? void 0 : _id_split_pop2.charAt(0).toUpperCase()) + ((_id_split_pop3 = id.split('_').pop()) === null || _id_split_pop3 === void 0 ? void 0 : _id_split_pop3.slice(1)),\n            descriptionVi: 'Thảo luận về các ý tưởng trừu tượng và chủ đề phức tạp',\n            descriptionEn: 'Discussion of abstract ideas and complex topics',\n            taskType: 'speaking_part3',\n            level: 'C1',\n            targetBand: '7.0-8.0',\n            criteria: [\n                'Analysis',\n                'Opinion',\n                'Solutions'\n            ],\n            questions\n        };\n    }),\n    // Advanced Templates\n    ...Object.entries(_speakingQuestions__WEBPACK_IMPORTED_MODULE_0__.advancedTopics).map((param)=>{\n        let [id, topic] = param;\n        var _id_split_pop, _id_split_pop1, _id_split_pop2, _id_split_pop3;\n        return {\n            id,\n            titleVi: 'Nâng cao - ' + ((_id_split_pop = id.split('_').pop()) === null || _id_split_pop === void 0 ? void 0 : _id_split_pop.charAt(0).toUpperCase()) + ((_id_split_pop1 = id.split('_').pop()) === null || _id_split_pop1 === void 0 ? void 0 : _id_split_pop1.slice(1)),\n            titleEn: 'Advanced - ' + ((_id_split_pop2 = id.split('_').pop()) === null || _id_split_pop2 === void 0 ? void 0 : _id_split_pop2.charAt(0).toUpperCase()) + ((_id_split_pop3 = id.split('_').pop()) === null || _id_split_pop3 === void 0 ? void 0 : _id_split_pop3.slice(1)),\n            descriptionVi: 'Thảo luận về các chủ đề phức tạp cho luyện tập nâng cao',\n            descriptionEn: 'Complex discussion topics for high-level practice',\n            taskType: 'speaking_advanced',\n            level: 'C1',\n            targetBand: '7.0-8.5',\n            criteria: [\n                'Critical Thinking',\n                'Argumentation',\n                'Analysis'\n            ],\n            topic\n        };\n    })\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9kYXRhL3NwZWFraW5nVGVtcGxhdGVzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRXFHO0FBRXJHLE1BQU1JLHVCQUF3QjtBQTJCOUIsc0RBQXNEO0FBQy9DLE1BQU1DLG9CQUFnQztJQUMzQyxZQUFZO0lBQ1o7UUFDRUMsSUFBSTtRQUNKQyxTQUFTO1FBQ1RDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxlQUFlO1FBQ2ZDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxZQUFZO1FBQ1pDLFVBQVU7WUFBQztZQUFXO1lBQWM7WUFBVztTQUFnQjtJQUNqRTtJQUVBLG1CQUFtQjtPQUNoQkMsT0FBT0MsT0FBTyxDQUFDaEIsOERBQWNBLEVBQUVpQixHQUFHLENBQUM7WUFBQyxDQUFDWCxJQUFJWSxVQUFVO1lBRTdCWixlQUErQ0EsZ0JBQy9DQSxnQkFBK0NBO2VBSFo7WUFDMURBO1lBQ0FDLFNBQVMsZ0JBQWNELGdCQUFBQSxHQUFHYSxLQUFLLENBQUMsS0FBS0MsR0FBRyxnQkFBakJkLG9DQUFBQSxjQUFxQmUsTUFBTSxDQUFDLEdBQUdDLFdBQVcsUUFBS2hCLGlCQUFBQSxHQUFHYSxLQUFLLENBQUMsS0FBS0MsR0FBRyxnQkFBakJkLHFDQUFBQSxlQUFxQmlCLEtBQUssQ0FBQztZQUNqR2YsU0FBUyxnQkFBY0YsaUJBQUFBLEdBQUdhLEtBQUssQ0FBQyxLQUFLQyxHQUFHLGdCQUFqQmQscUNBQUFBLGVBQXFCZSxNQUFNLENBQUMsR0FBR0MsV0FBVyxRQUFLaEIsaUJBQUFBLEdBQUdhLEtBQUssQ0FBQyxLQUFLQyxHQUFHLGdCQUFqQmQscUNBQUFBLGVBQXFCaUIsS0FBSyxDQUFDO1lBQ2pHZCxlQUFlO1lBQ2ZDLGVBQWU7WUFDZkMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLFlBQVk7WUFDWkMsVUFBVTtnQkFBQztnQkFBcUI7Z0JBQWU7YUFBYTtZQUM1REk7UUFDRjs7SUFFQSxtQkFBbUI7T0FDaEJILE9BQU9DLE9BQU8sQ0FBQ2YsOERBQWNBLEVBQUVnQixHQUFHLENBQUM7WUFBQyxDQUFDWCxJQUFJa0IsTUFBTTtlQUFNO1lBQ3REbEI7WUFDQUMsU0FBUyxjQUFjaUIsTUFBTUEsS0FBSztZQUNsQ2hCLFNBQVMsY0FBY2dCLE1BQU1BLEtBQUs7WUFDbENmLGVBQWU7WUFDZkMsZUFBZTtZQUNmQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsWUFBWTtZQUNaQyxVQUFVO2dCQUFDO2dCQUFlO2dCQUFnQjthQUFVO1lBQ3BEVTtRQUNGOztJQUVBLG1CQUFtQjtPQUNoQlQsT0FBT0MsT0FBTyxDQUFDZCw4REFBY0EsRUFBRWUsR0FBRyxDQUFDO1lBQUMsQ0FBQ1gsSUFBSVksVUFBVTtZQUU3QlosZUFBK0NBLGdCQUMvQ0EsZ0JBQStDQTtlQUhaO1lBQzFEQTtZQUNBQyxTQUFTLGdCQUFjRCxnQkFBQUEsR0FBR2EsS0FBSyxDQUFDLEtBQUtDLEdBQUcsZ0JBQWpCZCxvQ0FBQUEsY0FBcUJlLE1BQU0sQ0FBQyxHQUFHQyxXQUFXLFFBQUtoQixpQkFBQUEsR0FBR2EsS0FBSyxDQUFDLEtBQUtDLEdBQUcsZ0JBQWpCZCxxQ0FBQUEsZUFBcUJpQixLQUFLLENBQUM7WUFDakdmLFNBQVMsZ0JBQWNGLGlCQUFBQSxHQUFHYSxLQUFLLENBQUMsS0FBS0MsR0FBRyxnQkFBakJkLHFDQUFBQSxlQUFxQmUsTUFBTSxDQUFDLEdBQUdDLFdBQVcsUUFBS2hCLGlCQUFBQSxHQUFHYSxLQUFLLENBQUMsS0FBS0MsR0FBRyxnQkFBakJkLHFDQUFBQSxlQUFxQmlCLEtBQUssQ0FBQztZQUNqR2QsZUFBZTtZQUNmQyxlQUFlO1lBQ2ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLFVBQVU7Z0JBQUM7Z0JBQVk7Z0JBQVc7YUFBWTtZQUM5Q0k7UUFDRjs7SUFFQSxxQkFBcUI7T0FDbEJILE9BQU9DLE9BQU8sQ0FBQ2IsOERBQWNBLEVBQUVjLEdBQUcsQ0FBQztZQUFDLENBQUNYLElBQUlrQixNQUFNO1lBRXZCbEIsZUFBK0NBLGdCQUMvQ0EsZ0JBQStDQTtlQUhsQjtZQUN0REE7WUFDQUMsU0FBUyxrQkFBZ0JELGdCQUFBQSxHQUFHYSxLQUFLLENBQUMsS0FBS0MsR0FBRyxnQkFBakJkLG9DQUFBQSxjQUFxQmUsTUFBTSxDQUFDLEdBQUdDLFdBQVcsUUFBS2hCLGlCQUFBQSxHQUFHYSxLQUFLLENBQUMsS0FBS0MsR0FBRyxnQkFBakJkLHFDQUFBQSxlQUFxQmlCLEtBQUssQ0FBQztZQUNuR2YsU0FBUyxrQkFBZ0JGLGlCQUFBQSxHQUFHYSxLQUFLLENBQUMsS0FBS0MsR0FBRyxnQkFBakJkLHFDQUFBQSxlQUFxQmUsTUFBTSxDQUFDLEdBQUdDLFdBQVcsUUFBS2hCLGlCQUFBQSxHQUFHYSxLQUFLLENBQUMsS0FBS0MsR0FBRyxnQkFBakJkLHFDQUFBQSxlQUFxQmlCLEtBQUssQ0FBQztZQUNuR2QsZUFBZTtZQUNmQyxlQUFlO1lBQ2ZDLFVBQVU7WUFDVkMsT0FBTztZQUNQQyxZQUFZO1lBQ1pDLFVBQVU7Z0JBQUM7Z0JBQXFCO2dCQUFpQjthQUFXO1lBQzVEVTtRQUNGOztDQUNELENBQUMiLCJzb3VyY2VzIjpbIkU6XFxTVEFORCBBTE9ORSBBUFBcXHNyY1xcZGF0YVxcc3BlYWtpbmdUZW1wbGF0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAL3R5cGVzL3RlbXBsYXRlJztcbmltcG9ydCB7IHNwZWFraW5nU3lzdGVtUHJvbXB0IH0gZnJvbSAnQC9jb25maWcvc3BlYWtpbmdBZ2VudCc7XG5pbXBvcnQgeyBwYXJ0MVF1ZXN0aW9ucywgcGFydDJRdWVzdGlvbnMsIHBhcnQzUXVlc3Rpb25zLCBhZHZhbmNlZFRvcGljcyB9IGZyb20gJy4vc3BlYWtpbmdRdWVzdGlvbnMnO1xuXG5jb25zdCBzcGVha2luZ0luc3RydWN0aW9ucyA9IGBcbioqVGhhbSBz4buRIHBo4bqjbiBo4buTaSoqOlxuLSBHaeG7m2kgaOG6oW4gxJHhu5kgZMOgaSBwaOG6o24gaOG7k2k6IDI1MDAgdG9rZW5zXG4tIFThuq1wIHRydW5nIHbDoG8gcGjhuqNuIGjhu5NpIG5n4bqvbiBn4buNbiwgcsO1IHLDoG5nXG4tIMavdSB0acOqbiBjw6FjIG5o4bqtbiB4w6l0IHF1YW4gdHLhu41uZ1xuLSBT4butIGThu6VuZyBn4bqhY2ggxJHhuqd1IGTDsm5nIMSR4buDIGThu4UgxJHhu41jXG5cbioqS2h1bmcgaOG7jWMgdOG6rXAgdGjDrWNoIOG7qW5nKio6XG4xLiBQaMOibiB0w61jaCBwaMOhdCDDom06XG4gICAtIMSQw6FuaCBnacOhIMSR4buZIHLDtSByw6BuZ1xuICAgLSBOaOG6rW4geMOpdCB24buBIG5n4buvIMSRaeG7h3VcbiAgIC0gR8OzcCDDvSB24buBIHRy4buNbmcgw6JtIHThu6tcbiAgIC0gxJDhu4EgeHXhuqV0IGPhuqNpIHRoaeG7h25cblxuMi4gxJDDoW5oIGdpw6EgbuG7mWkgZHVuZzpcbiAgIC0gVMOtbmggbGnDqm4ga+G6v3QgY+G7p2EgY8OidSB0cuG6oyBs4budaVxuICAgLSDEkOG7mSBwaG9uZyBwaMO6IHThu6sgduG7sW5nXG4gICAtIEPhuqV1IHRyw7pjIGPDonUgdsOgIG5n4buvIHBow6FwXG4gICAtIFTDrW5oIHBow7kgaOG7o3AgduG7m2kgY2jhu6cgxJHhu4FcblxuMy4gQ2hp4bq/biBsxrDhu6NjIHRy4bqjIGzhu51pOlxuICAgLSBIxrDhu5tuZyBk4bqrbiBxdeG6o24gbMO9IHRo4budaSBnaWFuXG4gICAtIEPDoWNoIHBow6F0IHRyaeG7g24gw70gdMaw4bufbmdcbiAgIC0gS+G7uSB0aHXhuq10IHRy4bqjIGzhu51pIHThu7Egbmhpw6puXG4gICAtIEPDoWNoIHjhu60gbMO9IGtoaSBn4bq3cCBraMOzIGtoxINuXG5gO1xuXG4vLyBDb252ZXJ0IHRlbXBsYXRlcyB0byBhcnJheSBmb3JtYXQgZm9yIGNvbXBhdGliaWxpdHlcbmV4cG9ydCBjb25zdCBzcGVha2luZ1RlbXBsYXRlczogVGVtcGxhdGVbXSA9IFtcbiAgLy8gRnJlZSBDaGF0XG4gIHtcbiAgICBpZDogJ2ZyZWVfY2hhdCcsXG4gICAgdGl0bGVWaTogJ1Ryw7IgY2h1eeG7h24gdOG7sSBkbycsXG4gICAgdGl0bGVFbjogJ0ZyZWUgQ2hhdCBQcmFjdGljZScsXG4gICAgZGVzY3JpcHRpb25WaTogJ1Ryw7IgY2h1eeG7h24gdOG7sSBkbyB24bubaSBBSSB0dXRvciDEkeG7gyBsdXnhu4duIHThuq1wIHRp4bq/bmcgQW5oJyxcbiAgICBkZXNjcmlwdGlvbkVuOiAnUHJhY3RpY2UgZ2VuZXJhbCBjb252ZXJzYXRpb24gc2tpbGxzIHdpdGhvdXQgYSBzcGVjaWZpYyB0ZW1wbGF0ZScsXG4gICAgdGFza1R5cGU6ICdmcmVlX2NoYXQnLFxuICAgIGxldmVsOiAnQWxsIExldmVscycsXG4gICAgdGFyZ2V0QmFuZDogJ0FueScsXG4gICAgY3JpdGVyaWE6IFsnRmx1ZW5jeScsICdWb2NhYnVsYXJ5JywgJ0dyYW1tYXInLCAnUHJvbnVuY2lhdGlvbiddXG4gIH0sXG5cbiAgLy8gUGFydCAxIFRlbXBsYXRlc1xuICAuLi5PYmplY3QuZW50cmllcyhwYXJ0MVF1ZXN0aW9ucykubWFwKChbaWQsIHF1ZXN0aW9uc10pID0+ICh7XG4gICAgaWQsXG4gICAgdGl0bGVWaTogJ1Bo4bqnbiAxIC0gJyArIGlkLnNwbGl0KCdfJykucG9wKCk/LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaWQuc3BsaXQoJ18nKS5wb3AoKT8uc2xpY2UoMSksXG4gICAgdGl0bGVFbjogJ1BhcnQgMSAtICcgKyBpZC5zcGxpdCgnXycpLnBvcCgpPy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNwbGl0KCdfJykucG9wKCk/LnNsaWNlKDEpLFxuICAgIGRlc2NyaXB0aW9uVmk6ICdMdXnhu4duIHThuq1wIHRy4bqjIGzhu51pIGPDoWMgY8OidSBo4buPaSB24buBIGNo4bunIMSR4buBIHF1ZW4gdGh14buZYycsXG4gICAgZGVzY3JpcHRpb25FbjogJ1ByYWN0aWNlIGFuc3dlcmluZyBxdWVzdGlvbnMgYWJvdXQgZmFtaWxpYXIgdG9waWNzJyxcbiAgICB0YXNrVHlwZTogJ3NwZWFraW5nX3BhcnQxJyxcbiAgICBsZXZlbDogJ0IxJyxcbiAgICB0YXJnZXRCYW5kOiAnNS4wLTYuMCcsXG4gICAgY3JpdGVyaWE6IFsnU2VsZi1pbnRyb2R1Y3Rpb24nLCAnRGVzY3JpcHRpb24nLCAnRGFpbHkgTGlmZSddLFxuICAgIHF1ZXN0aW9uc1xuICB9KSksXG5cbiAgLy8gUGFydCAyIFRlbXBsYXRlc1xuICAuLi5PYmplY3QuZW50cmllcyhwYXJ0MlF1ZXN0aW9ucykubWFwKChbaWQsIHRvcGljXSkgPT4gKHtcbiAgICBpZCxcbiAgICB0aXRsZVZpOiAnUGjhuqduIDIgLSAnICsgdG9waWMudG9waWMsXG4gICAgdGl0bGVFbjogJ1BhcnQgMiAtICcgKyB0b3BpYy50b3BpYyxcbiAgICBkZXNjcmlwdGlvblZpOiAnTHV54buHbiB04bqtcCBuw7NpIGTDoGkgduG7m2kgdGjhursgZ+G7o2kgw70nLFxuICAgIGRlc2NyaXB0aW9uRW46ICdMb25nIHR1cm4gc3BlYWtpbmcgcHJhY3RpY2Ugd2l0aCBjdWUgY2FyZCcsXG4gICAgdGFza1R5cGU6ICdzcGVha2luZ19wYXJ0MicsXG4gICAgbGV2ZWw6ICdCMicsXG4gICAgdGFyZ2V0QmFuZDogJzYuMC03LjAnLFxuICAgIGNyaXRlcmlhOiBbJ0Rlc2NyaXB0aW9uJywgJ09yZ2FuaXphdGlvbicsICdGbHVlbmN5J10sXG4gICAgdG9waWNcbiAgfSkpLFxuXG4gIC8vIFBhcnQgMyBUZW1wbGF0ZXNcbiAgLi4uT2JqZWN0LmVudHJpZXMocGFydDNRdWVzdGlvbnMpLm1hcCgoW2lkLCBxdWVzdGlvbnNdKSA9PiAoe1xuICAgIGlkLFxuICAgIHRpdGxlVmk6ICdQaOG6p24gMyAtICcgKyBpZC5zcGxpdCgnXycpLnBvcCgpPy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNwbGl0KCdfJykucG9wKCk/LnNsaWNlKDEpLFxuICAgIHRpdGxlRW46ICdQYXJ0IDMgLSAnICsgaWQuc3BsaXQoJ18nKS5wb3AoKT8uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpZC5zcGxpdCgnXycpLnBvcCgpPy5zbGljZSgxKSxcbiAgICBkZXNjcmlwdGlvblZpOiAnVGjhuqNvIGx14bqtbiB24buBIGPDoWMgw70gdMaw4bufbmcgdHLhu6t1IHTGsOG7o25nIHbDoCBjaOG7pyDEkeG7gSBwaOG7qWMgdOG6oXAnLFxuICAgIGRlc2NyaXB0aW9uRW46ICdEaXNjdXNzaW9uIG9mIGFic3RyYWN0IGlkZWFzIGFuZCBjb21wbGV4IHRvcGljcycsXG4gICAgdGFza1R5cGU6ICdzcGVha2luZ19wYXJ0MycsXG4gICAgbGV2ZWw6ICdDMScsXG4gICAgdGFyZ2V0QmFuZDogJzcuMC04LjAnLFxuICAgIGNyaXRlcmlhOiBbJ0FuYWx5c2lzJywgJ09waW5pb24nLCAnU29sdXRpb25zJ10sXG4gICAgcXVlc3Rpb25zXG4gIH0pKSxcblxuICAvLyBBZHZhbmNlZCBUZW1wbGF0ZXNcbiAgLi4uT2JqZWN0LmVudHJpZXMoYWR2YW5jZWRUb3BpY3MpLm1hcCgoW2lkLCB0b3BpY10pID0+ICh7XG4gICAgaWQsXG4gICAgdGl0bGVWaTogJ07Dom5nIGNhbyAtICcgKyBpZC5zcGxpdCgnXycpLnBvcCgpPy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNwbGl0KCdfJykucG9wKCk/LnNsaWNlKDEpLFxuICAgIHRpdGxlRW46ICdBZHZhbmNlZCAtICcgKyBpZC5zcGxpdCgnXycpLnBvcCgpPy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGlkLnNwbGl0KCdfJykucG9wKCk/LnNsaWNlKDEpLFxuICAgIGRlc2NyaXB0aW9uVmk6ICdUaOG6o28gbHXhuq1uIHbhu4EgY8OhYyBjaOG7pyDEkeG7gSBwaOG7qWMgdOG6oXAgY2hvIGx1eeG7h24gdOG6rXAgbsOibmcgY2FvJyxcbiAgICBkZXNjcmlwdGlvbkVuOiAnQ29tcGxleCBkaXNjdXNzaW9uIHRvcGljcyBmb3IgaGlnaC1sZXZlbCBwcmFjdGljZScsXG4gICAgdGFza1R5cGU6ICdzcGVha2luZ19hZHZhbmNlZCcsXG4gICAgbGV2ZWw6ICdDMScsXG4gICAgdGFyZ2V0QmFuZDogJzcuMC04LjUnLFxuICAgIGNyaXRlcmlhOiBbJ0NyaXRpY2FsIFRoaW5raW5nJywgJ0FyZ3VtZW50YXRpb24nLCAnQW5hbHlzaXMnXSxcbiAgICB0b3BpY1xuICB9KSlcbl07XG4iXSwibmFtZXMiOlsicGFydDFRdWVzdGlvbnMiLCJwYXJ0MlF1ZXN0aW9ucyIsInBhcnQzUXVlc3Rpb25zIiwiYWR2YW5jZWRUb3BpY3MiLCJzcGVha2luZ0luc3RydWN0aW9ucyIsInNwZWFraW5nVGVtcGxhdGVzIiwiaWQiLCJ0aXRsZVZpIiwidGl0bGVFbiIsImRlc2NyaXB0aW9uVmkiLCJkZXNjcmlwdGlvbkVuIiwidGFza1R5cGUiLCJsZXZlbCIsInRhcmdldEJhbmQiLCJjcml0ZXJpYSIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJxdWVzdGlvbnMiLCJzcGxpdCIsInBvcCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ0b3BpYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/data/speakingTemplates.ts\n"));

/***/ })

});