'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _textStyles = require('../../elements/typography/textStyles');

var _componentHelpers = require('../../utils/componentHelpers');

var _baseControlStyle = require('../form/ControlGroup/baseControlStyle');

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.getInitialState = function () {
      return {
        childrenState: null
      };
    };

    _this.applyChildrenContent = function () {
      var children = _this.props.children;

      _this.setState({
        childrenState: children
      });
      _this.forceUpdate();
    };

    _this.applyOnClickContent = function () {
      var onClickContent = _this.props.onClickContent;

      _this.setState({
        childrenState: onClickContent
      });
      _this.forceUpdate();
    };

    _this.handleClick = function (e) {
      if (e) {
        e.preventDefault();
      }
      var _this$props = _this.props,
          onClickContent = _this$props.onClickContent,
          onHandleClick = _this$props.onHandleClick;

      if (onClickContent !== '') {
        _this.applyOnClickContent();
        var callHandler = new Promise(function (resolve) {
          onHandleClick();
          resolve();
        });
        Promise.resolve(callHandler).then(function () {
          return setTimeout(function () {
            _this.applyChildrenContent();
          }, 1000);
        });
      } else {
        onHandleClick();
      }
    };

    _this.state = _this.getInitialState();
    return _this;
  }

  _createClass(Button, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var children = this.props.children;

      this.setState({
        childrenState: children
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProp) {
      var onClickContent = nextProp.onClickContent;

      this.setState({
        childrenState: onClickContent
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          type = _props.type,
          otherProps = _objectWithoutProperties(_props, ['disabled', 'type']);

      var overrides = Object.assign({}, otherProps);
      var childrenState = this.state.childrenState;

      return _react2.default.createElement(
        _styled.StyledButton,
        _extends({
          disabled: disabled,
          onClick: this.handleClick,
          type: type
        }, (0, _componentHelpers.passThrough)(Button, overrides)),
        childrenState
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.contextTypes = {
  theme: _propTypes2.default.any
};
Button.propTypes = {
  bgColor: _propTypes2.default.string,
  children: _propTypes2.default.any.isRequired,
  color: _propTypes2.default.string,
  contained: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  lg: _propTypes2.default.bool,
  onClickContent: _propTypes2.default.string,
  onHandleClick: _propTypes2.default.func,
  outline: _propTypes2.default.bool,
  raised: _propTypes2.default.bool,
  sm: _propTypes2.default.bool,
  type: _propTypes2.default.string
};

Button.defaultProps = {
  bgColor: _baseControlStyle.defaultControlStylesBase.bgColor,
  color: _textStyles.defaultTextStylesBase.color,
  contained: false,
  disabled: false,
  lg: _textStyles.defaultTextStylesBase.lg,
  onClickContent: '',
  onHandleClick: function onHandleClick() {},
  outline: false,
  raised: false,
  sm: _textStyles.defaultTextStylesBase.sm,
  type: 'button'
};