"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var navi_1 = require("navi");
var react_navi_1 = require("react-navi");
function Landing() {
    return react_1.default.createElement("div", null, "Landing...");
}
var routes = navi_1.mount({
    '/': navi_1.route({
        title: "Hats 'n' Flamethrowers 'r' Us",
        view: react_1.default.createElement(Landing, null),
    }),
});
function Abc() {
    return (react_1.default.createElement(react_navi_1.Router, { routes: routes },
        react_1.default.createElement(react_1.Suspense, { fallback: null },
            react_1.default.createElement(react_navi_1.View, null))));
}
exports.Abc = Abc;
//# sourceMappingURL=index.js.map