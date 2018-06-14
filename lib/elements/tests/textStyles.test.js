'use strict';

var _textStyles = require('../typography/textStyles');

describe('TextStyles Component', function () {
  it('should return a TextStyles object', function () {
    expect(_textStyles.textStylesBase).toBeTruthy();
  });
});