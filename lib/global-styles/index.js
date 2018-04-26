'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDefaultGlobalStyles = exports.generateGlobalStyles = undefined;

var _globalStyles = require('../configs/global-styles.json');

var globals = _interopRequireWildcard(_globalStyles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var generateGlobalStyles = exports.generateGlobalStyles = function generateGlobalStyles(overrides) {
    return Object.assign({}, globals, overrides);
};

var getDefaultGlobalStyles = exports.getDefaultGlobalStyles = function getDefaultGlobalStyles() {
    return Object.assign({}, globals);
};