'use strict';

var _Button = require('./elements/Button');

var _Paragraph = require('./elements/typography/Paragraph');

var _textStyles = require('./elements/typography/textStyles');

var _globalStyles = require('./global-styles');

module.exports = {
  Button: _Button.Button,
  generateGlobalStyles: _globalStyles.generateGlobalStyles,
  getDefaultGlobalStyles: _globalStyles.getDefaultGlobalStyles,
  Paragraph: _Paragraph.Paragraph,
  textStylesBase: _textStyles.textStylesBase
};