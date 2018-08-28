'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withControlGroup = exports.ControlGroupBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ControlLabel = require('./ControlLabel');

var _AssistiveText = require('./AssistiveText');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ControlGroup = _styledComponents2.default.div(_templateObject);

var ControlGroupBase = function ControlGroupBase(props) {
  var controlLabel = props.controlLabel,
      controlId = props.controlId,
      assistiveText = props.assistiveText,
      validationError = props.validationError,
      children = props.children;


  console.log('ControlGroupBase - props', props);

  var displayAssistive = function displayAssistive(text, error, id) {
    if (!text && !error) {
      return null;
    } else if (text && !error) {
      return _react2.default.createElement(
        _AssistiveText.AssistiveText,
        { id: id + 'Help' },
        text
      );
    }
    return _react2.default.createElement(
      _AssistiveText.AssistiveText,
      { color: 'brandDanger', id: id + 'Error' },
      error
    );
  };

  return _react2.default.createElement(
    ControlGroup,
    null,
    _react2.default.createElement(
      _ControlLabel.ControlLabel,
      { 'for': controlId },
      controlLabel
    ),
    children,
    displayAssistive(assistiveText, validationError, controlId)
  );
};

ControlGroupBase.propTypes = {
  assistiveText: _propTypes2.default.string,
  children: _propTypes2.default.any.isRequired,
  controlId: _propTypes2.default.string,
  controlLabel: _propTypes2.default.string,
  // controlId: PropTypes.string.isRequired,
  // controlLabel: PropTypes.string.isRequired,
  validationError: _propTypes2.default.string
};

ControlGroupBase.defaultProps = {
  assistiveText: '',
  validationError: '',
  controlId: '',
  controlLabel: ''
};

var withControlGroup = function withControlGroup(Child, props) {
  var ControlGroupComponent = function (_React$Component) {
    _inherits(ControlGroupComponent, _React$Component);

    function ControlGroupComponent() {
      _classCallCheck(this, ControlGroupComponent);

      return _possibleConstructorReturn(this, (ControlGroupComponent.__proto__ || Object.getPrototypeOf(ControlGroupComponent)).apply(this, arguments));
    }

    _createClass(ControlGroupComponent, [{
      key: 'render',
      value: function render() {
        var controlLabel = props.controlLabel,
            controlId = props.controlId,
            assistiveText = props.assistiveText,
            validationError = props.validationError,
            otherProps = _objectWithoutProperties(props, ['controlLabel', 'controlId', 'assistiveText', 'validationError']);
        // console.log('withControlGroup - props', props);
        // console.log('withControlGroup - Child', Child);


        var controlJSX = _react2.default.createElement(
          ControlGroupBase,
          { assistiveText: assistiveText, controlId: controlId, controlLabel: controlLabel, validationError: validationError },
          ' ',
          _react2.default.createElement(Child, otherProps),
          ' '
        );
        return '' + controlJSX;
      }
    }]);

    return ControlGroupComponent;
  }(_react2.default.Component);

  ControlGroupComponent.propTypes = {
    assistiveText: _propTypes2.default.string,
    controlId: _propTypes2.default.string,
    controlLabel: _propTypes2.default.string,
    // controlId: PropTypes.string.isRequired,
    // controlLabel: PropTypes.string.isRequired,
    validationError: _propTypes2.default.string
  };
  ControlGroupComponent.defaultProps = {
    assistiveText: '',
    validationError: '',
    controlId: '',
    controlLabel: ''
  };
  return ControlGroupComponent;
};

exports.ControlGroupBase = ControlGroupBase;
exports.withControlGroup = withControlGroup;