'use strict';

var _Button = require('./elements/Button');

var _GrapeHtmlStylesInjector = require('./elements/GrapeHtmlStylesInjector');

var _typography = require('./elements/typography');

var Typography = _interopRequireWildcard(_typography);

var _globalStyles = require('./global-styles');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = Object.assign({
  Button: _Button.Button,
  getGlobalStyles: _globalStyles.getGlobalStyles,
  grapeHtmlStylesInjector: _GrapeHtmlStylesInjector.grapeHtmlStylesInjector
}, Typography);