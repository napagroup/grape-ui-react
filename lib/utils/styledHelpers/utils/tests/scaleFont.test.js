"use strict";

var _globalStyles = require("../../../../global-styles");

var _utils = require("../../../../utils/styledHelpers/utils");

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      fontSizeSchema = _getGlobalStyles.fontSize;

const _fontSizeSchema$sizeV = fontSizeSchema.sizeVariants,
      schemaSm = _fontSizeSchema$sizeV.sm,
      schemaLg = _fontSizeSchema$sizeV.lg;
describe('Scale Factor', () => {
  describe('Given no scale factor specification on props', () => {
    it('should return default size of 2', () => {
      const scaledSize = (0, _utils.scaleFactor)({});
      expect(scaledSize).toEqual(null);
    });
  });
  describe('Given sm for props', () => {
    it('should return default size of 1', () => {
      const scaledSize = (0, _utils.scaleFactor)({
        sm: true
      });
      expect(scaledSize).toEqual(schemaSm);
    });
  });
  describe('Given lg for props', () => {
    it('should return default size of 1', () => {
      const scaledSize = (0, _utils.scaleFactor)({
        lg: true
      });
      expect(scaledSize).toEqual(schemaLg);
    });
  });
});
describe('Scaled Font', () => {
  describe('When size or scaleFactor is null or undefined', () => {
    it('should return default font size of 1rem', () => {
      const expectedSize = '1rem';
      const scaledSize = (0, _utils.scaleFont)();
      expect(scaledSize).toEqual(expectedSize);
    });
  });
  describe('When % size and scaleFactor is given', () => {
    it('should return default font size of 12px', () => {
      const size = '100%';
      const factor = 1.2;
      const expectedSize = '120%';
      const scaledSize = (0, _utils.scaleFont)(size, factor);
      expect(scaledSize).toEqual(expectedSize);
    });
  });
  describe('When em size and scaleFactor is given', () => {
    it('should return default font size of 12px', () => {
      const size = '1em';
      const factor = 1.2;
      const expectedSize = '1.2em';
      const scaledSize = (0, _utils.scaleFont)(size, factor);
      expect(scaledSize).toEqual(expectedSize);
    });
  });
  describe('When px size and scaleFactor is given', () => {
    it('should return default font size of 12px', () => {
      const size = '15px';
      const factor = 1.5;
      const expectedSize = '22.5px';
      const scaledSize = (0, _utils.scaleFont)(size, factor);
      expect(scaledSize).toEqual(expectedSize);
    });
  });
  describe('When rem size and scaleFactor is given', () => {
    it('should return default font size of 12px', () => {
      const size = '1rem';
      const factor = 0.8;
      const expectedSize = '0.8rem';
      const scaledSize = (0, _utils.scaleFont)(size, factor);
      expect(scaledSize).toEqual(expectedSize);
    });
  });
});