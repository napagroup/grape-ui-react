'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTextFieldComponentConvertor = exports.TextFieldComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    ', '\n  '], ['\n    ', '\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('../../../elements/typography/textStyles');

var _baseControlStyle = require('../ControlGroup/baseControlStyle');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextFieldComponent = exports.TextFieldComponent = function TextFieldComponent(props) {
  var textBase = (0, _textStyles.textStylesBase)(props);
  var controlBase = (0, _baseControlStyle.controlStylesBase)(props);
  var ProtoTextFieldComponent = _styledComponents2.default.input.attrs({
    type: 'text'
  })(_templateObject, textBase, controlBase);
  return _react2.default.createElement(ProtoTextFieldComponent, (0, _componentHelpers.passThrough)(TextFieldComponent, props));
};

TextFieldComponent.propTypes = {
  color: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string,
  borderColor: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string,
  padding: _propTypes2.default.string
};

TextFieldComponent.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration,
  borderColor: _baseControlStyle.defaultControlStylesBase.borderColor,
  borderRadius: _baseControlStyle.defaultControlStylesBase.borderRadius,
  padding: _baseControlStyle.defaultControlStylesBase.padding
};

var withTextFieldComponentConvertor = function withTextFieldComponentConvertor() {
  var TextFieldComponentConvertor = function (_React$Component) {
    _inherits(TextFieldComponentConvertor, _React$Component);

    function TextFieldComponentConvertor() {
      _classCallCheck(this, TextFieldComponentConvertor);

      return _possibleConstructorReturn(this, (TextFieldComponentConvertor.__proto__ || Object.getPrototypeOf(TextFieldComponentConvertor)).apply(this, arguments));
    }

    _createClass(TextFieldComponentConvertor, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            controlId = _props.controlId,
            otherProps = _objectWithoutProperties(_props, ['controlId']);

        var controlJSX = _react2.default.createElement(TextFieldComponent, _extends({ id: controlId }, otherProps));
        return controlJSX;
      }
    }]);

    return TextFieldComponentConvertor;
  }(_react2.default.Component);

  TextFieldComponentConvertor.propTypes = {
    controlId: _propTypes2.default.string
  };
  TextFieldComponentConvertor.defaultProps = {
    controlId: ''
  };
  return TextFieldComponentConvertor;
};
exports.withTextFieldComponentConvertor = withTextFieldComponentConvertor;