"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var navi_1 = require("navi");
var db = {
    hat: {
        emoji: '🧢',
        title: 'Hat',
        price: '$50.00',
    },
    flamethrower: {
        emoji: '🔥🔫',
        title: 'Not a flamethrower',
        price: '$500.00',
    },
};
exports.default = {
    fetchProduct: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var product;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(1000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, db[id]];
                case 2:
                    product = _a.sent();
                    if (!product) {
                        throw new navi_1.NotFoundError();
                    }
                    return [2 /*return*/, product];
            }
        });
    }); },
    fetchProducts: function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, delay(1000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, db];
            }
        });
    }); },
};
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
//# sourceMappingURL=api.js.map