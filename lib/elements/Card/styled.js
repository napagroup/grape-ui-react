"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.Card = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _grid = require("../../elements/grid");

var _typography = require("../../elements/typography");

var _component = require("./component");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const Card = (0, _styledComponents.default)(_component.CardComponent)(_templateObject());
exports.Card = Card;
Card.propTypes = _objectSpread({}, _utils.cardPropTypes);
Card.defaultProps = _objectSpread({}, _utils.cardDefaultProps);
const subComponentStarter = [{
  component: _grid.Flex,
  componentDefaultProps: {},
  componentPropTypes: {},
  name: 'Actions'
}, {
  component: _grid.Box,
  componentDefaultProps: {},
  componentPropTypes: {},
  name: 'Body'
}, {
  component: _grid.Box,
  componentDefaultProps: {},
  componentPropTypes: {},
  name: 'Inner'
}, {
  component: _grid.Box,
  componentDefaultProps: {
    width: 1
  },
  componentPropTypes: _objectSpread({}, _propTypes2.default.layout),
  name: 'RichMedia'
}, {
  component: _grid.Box,
  componentDefaultProps: {
    width: 1
  },
  componentPropTypes: _objectSpread({}, _propTypes2.default.layout),
  name: 'SecondaryMedia'
}, {
  component: _typography.Paragraph,
  componentDefaultProps: {
    color: 'gray',
    mb: 0,
    sm: true
  },
  componentPropTypes: _objectSpread(_objectSpread({}, _propTypes2.default.space), {}, {
    color: _propTypes.default.string,
    sm: _propTypes.default.bool
  }),
  name: 'Subtitle'
}, {
  component: _grid.Box,
  componentDefaultProps: {},
  componentPropTypes: {},
  name: 'Thumbnail'
}, {
  component: _typography.Header.h5,
  componentDefaultProps: {
    mb: 0
  },
  componentPropTypes: _objectSpread({}, _propTypes2.default.space),
  name: 'Title'
}];
(0, _forEach.default)(subComponentStarter).call(subComponentStarter, starter => {
  const name = starter.name,
        componentDefaultProps = starter.componentDefaultProps,
        componentPropTypes = starter.componentPropTypes,
        SubComponent = starter.component;

  Card[name] = props => {
    // eslint-disable-next-line react/prop-types
    const children = props.children;
    return /*#__PURE__*/_react.default.createElement(SubComponent, props, children);
  };

  Card[name].propTypes = _objectSpread(_objectSpread({}, componentPropTypes), {}, {
    children: _propTypes.default.node
  });
  Card[name].defaultProps = _objectSpread(_objectSpread({}, componentDefaultProps), {}, {
    children: ''
  });
});
/** @component */