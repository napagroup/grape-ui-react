"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.Toaster = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _ = require(".");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  .Toastify__progress-bar {\n    animation: ", " linear 1;\n  }\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  0% {\n    transform: scaleX(1);\n  }\n  100% {\n    transform: scaleX(0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const toastPlacementCenter = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  justifySelf: 'center',
  left: '50vw',
  transform: 'translateX(-50%)'
};
const toastifyTrackProgress = (0, _styledComponents.keyframes)(_templateObject());
const Toaster = (0, _styledComponents.default)(_.ToasterComponent)(_templateObject2(), toastifyTrackProgress, props => props.closeButtonCss, props => props.closeOnClick ? 'cursor: pointer;' : '', (0, _styledSystem.system)({
  transform: true
}), (0, _styledSystem.variant)({
  prop: 'toastPlacement',
  variants: {
    'bottom-center': _objectSpread({
      bottom: 0
    }, toastPlacementCenter),
    'bottom-left': {
      bottom: 0,
      left: 0
    },
    'bottom-right': {
      bottom: 0,
      right: 0
    },
    'top-center': _objectSpread({}, toastPlacementCenter, {
      top: 0
    }),
    'top-left': {
      left: 0,
      top: 0
    },
    'top-right': {
      right: 0,
      top: 0
    }
  }
}));
exports.Toaster = Toaster;
Toaster.propTypes = _objectSpread({}, _.toasterPropTypes);
Toaster.defaultProps = _objectSpread({}, _.toasterDefaultProps);