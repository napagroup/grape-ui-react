'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItem = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require('../../../global-styles');

var _styledSystem = require('styled-system');

var _styledHelpers = require('../../../utils/styledHelpers');

var _component = require('./component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gutter = _getGlobalStyles.grid.gutter;

var marginBottom = function marginBottom(props) {
  return 'margin-bottom: ' + (0, _styledHelpers.scaleFont)(gutter, 0.25);
};

var ListItem = exports.ListItem = (0, _styledComponents2.default)(_component.ListItemComponent)(_templateObject, _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, marginBottom);

ListItem.propTypes = Object.assign({}, _styledHelpers.typography.propTypes);

ListItem.defaultProps = Object.assign({}, _styledHelpers.defaultStylesBase);