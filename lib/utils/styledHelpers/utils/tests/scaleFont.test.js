'use strict';

var _ = require('../');

var _globalStyles = require('../../../../global-styles');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize;

var _fontSizeSchema$sizeV = fontSizeSchema.sizeVariants,
    schemaSm = _fontSizeSchema$sizeV.sm,
    schemaLg = _fontSizeSchema$sizeV.lg;


describe('Scale Factor', function () {
  describe('Given no scale factor specification on props', function () {
    it('should return default size of 2', function () {
      var scaledSize = (0, _.scaleFactor)({});
      expect(scaledSize).toEqual(null);
    });
  });
  describe('Given sm for props', function () {
    it('should return default size of 1', function () {
      var scaledSize = (0, _.scaleFactor)({ sm: true });
      expect(scaledSize).toEqual(schemaSm);
    });
  });
  describe('Given lg for props', function () {
    it('should return default size of 1', function () {
      var scaledSize = (0, _.scaleFactor)({ lg: true });
      expect(scaledSize).toEqual(schemaLg);
    });
  });
});
describe('Scaled Font', function () {
  describe('When size or scaleFactor is null or undefined', function () {
    it('should return default font size of 1rem', function () {
      var expectedSize = '1rem';
      var scaledSize = (0, _.scaleFont)();
      expect(scaledSize).toEqual(expectedSize);
    });
  });

  describe('When % size and scaleFactor is given', function () {
    it('should return default font size of 12px', function () {
      var size = '100%';
      var factor = 1.2;
      var expectedSize = '120%';
      var scaledSize = (0, _.scaleFont)(size, factor);
      expect(scaledSize).toEqual(expectedSize);
    });
  });

  describe('When em size and scaleFactor is given', function () {
    it('should return default font size of 12px', function () {
      var size = '1em';
      var factor = 1.2;
      var expectedSize = '1.2em';
      var scaledSize = (0, _.scaleFont)(size, factor);
      expect(scaledSize).toEqual(expectedSize);
    });
  });

  describe('When px size and scaleFactor is given', function () {
    it('should return default font size of 12px', function () {
      var size = '15px';
      var factor = 1.5;
      var expectedSize = '22.5px';
      var scaledSize = (0, _.scaleFont)(size, factor);
      expect(scaledSize).toEqual(expectedSize);
    });
  });

  describe('When rem size and scaleFactor is given', function () {
    it('should return default font size of 12px', function () {
      var size = '1rem';
      var factor = 0.8;
      var expectedSize = '0.8rem';
      var scaledSize = (0, _.scaleFont)(size, factor);
      expect(scaledSize).toEqual(expectedSize);
    });
  });
});