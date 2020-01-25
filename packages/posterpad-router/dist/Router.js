"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var navi_1 = require("navi");
var react_navi_1 = require("react-navi");
function createRoute(basepath) {
    if (basepath === void 0) { basepath = ''; }
    return function (elem) {
        console.log(elem.props);
        var path = elem.props.path;
        var getData = elem.props.fetchData;
        var Layout = elem.props.layout;
        var view = Layout ? react_1.default.createElement(Layout, null, elem) : elem;
        return [
            basepath + path,
            navi_1.route(tslib_1.__assign(tslib_1.__assign({}, elem.props.path), { getData: getData,
                view: view })),
        ];
    };
}
function Router(props) {
    var routes = props.children.reduce(function (acc, child) {
        var _a = createRoute(props.basepath)(child), path = _a[0], route_ = _a[1];
        acc[path] = route_;
        return acc;
    }, {});
    return (react_1.default.createElement(react_navi_1.Router, { routes: navi_1.mount(routes) },
        react_1.default.createElement(react_1.Suspense, { fallback: null },
            react_1.default.createElement(react_navi_1.View, null))));
}
exports.Router = Router;
//# sourceMappingURL=Router.js.map