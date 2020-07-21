"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.alertVariants = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styledComponents = require("styled-components");

var _styledSystem = require("styled-system");

var _polished = require("polished");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n    ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const callback = props => (acc, cur) => {
  const myColor = (0, _styledHelpers.resolveColor)(cur.color, (0, _globalStyles.getGlobalOverrides)(props));
  return _objectSpread({}, acc, {
    [cur.variantName]: {
      bg: (0, _polished.transparentize)(0.825, myColor),
      color: myColor
    },
    ["contained-".concat([cur.variantName])]: {
      bg: myColor,
      color: (0, _polished.readableColor)(myColor)
    },
    ["outlined-".concat([cur.variantName])]: {
      bg: 'transparent',
      borderColor: myColor,
      borderStyle: 'solid',
      borderWidth: 1,
      color: myColor
    }
  });
};

const alertVariants = props => {
  const alertThemes = props.alertThemes;
  const alertVariantsReducer = (0, _reduce.default)(alertThemes).call(alertThemes, callback(props), {});
  return (0, _styledComponents.css)(_templateObject(), (0, _styledSystem.variant)({
    variants: alertVariantsReducer
  }));
};

exports.alertVariants = alertVariants;