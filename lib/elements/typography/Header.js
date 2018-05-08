'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n  '], ['\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeObject = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Header = function Header(props) {
  var h2 = props.h2,
      h3 = props.h3,
      h4 = props.h4,
      h5 = props.h5,
      h6 = props.h6,
      otherProps = _objectWithoutProperties(props, ['h2', 'h3', 'h4', 'h5', 'h6']);

  var headingElement = 'h1';
  var headingFontSize = fontSizeObject.h1;
  if (h2) {
    headingElement = 'h2';
    headingFontSize = fontSizeObject.h2;
  } else if (h3) {
    headingElement = 'h3';
    headingFontSize = fontSizeObject.h3;
  } else if (h4) {
    headingElement = 'h4';
    headingFontSize = fontSizeObject.h4;
  } else if (h5) {
    headingElement = 'h5';
    headingFontSize = fontSizeObject.h5;
  } else if (h6) {
    headingElement = 'h6';
    headingFontSize = fontSizeObject.h6;
  }
  var overrides = Object.assign({}, props, {
    fontSizeBase: headingFontSize
  });
  var actualBase = (0, _textStyles.textStylesBase)(overrides);
  var ProtoHeader = _styledComponents2.default[headingElement](_templateObject, actualBase);
  return _react2.default.createElement(ProtoHeader, otherProps);
};

exports.Header = Header;
Header.propTypes = {
  h2: _propTypes2.default.bool,
  h3: _propTypes2.default.bool,
  h4: _propTypes2.default.bool,
  h5: _propTypes2.default.bool,
  h6: _propTypes2.default.bool
};

Header.defaultProps = {
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false
};