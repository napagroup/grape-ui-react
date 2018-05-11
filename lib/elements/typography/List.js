'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    ', '\n    margin: 0 0 ', ';\n    padding-left:  ', ';\n    ', '\n  '], ['\n    ', '\n    margin: 0 0 ', ';\n    padding-left:  ', ';\n    ', '\n  ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _textStyles = require('./textStyles');

var _globalStyles = require('../../global-styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var listFactory = function listFactory(props) {
  var listTag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ul';

  var unstyled = props.unstyled,
      otherProps = _objectWithoutProperties(props, ['unstyled']);

  var ProtoList = _styledComponents2.default[listTag](_templateObject, (0, _textStyles.textStylesBase)(), gridSchema.gutter, unstyled ? '0' : '2.5rem', unstyled ? 'list-style: none;' : '');
  return _react2.default.createElement(ProtoList, otherProps);
};

listFactory.propTypes = {
  unstyled: _propTypes2.default.bool
};

listFactory.defaultProps = {
  unstyled: false
};

var List = function List(props) {
  return listFactory(props);
};

List.ul = List;
List.ol = function (props) {
  return listFactory(props, 'ol');
};

exports.List = List;