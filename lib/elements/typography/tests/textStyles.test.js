'use strict';

var _textStyles = require('../textStyles');

describe('Given a TextStyles Component', function () {
  it('should return a base font size ', function () {
    expect(_textStyles.textStylesBase).toBeTruthy();
  });
});