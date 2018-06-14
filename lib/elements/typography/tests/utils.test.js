'use strict';

var _utils = require('../utils');

describe('Typography Utils', function () {
  describe('Given calculating scaled size', function () {
    describe('When size and scaleFactor are null or undefined', function () {
      it('should return default size of 1', function () {
        var scaledSize = (0, _utils.getScaledSize)();
        expect(scaledSize).toEqual('1');
      });
    });

    describe('When size is given and scaleFactor is null or undefined', function () {
      it('should return the size', function () {
        var size = '15';
        var scaledSize = (0, _utils.getScaledSize)(size);
        expect(scaledSize).toEqual(size);
      });
    });

    describe('When size is null or undefined and scaleFactor is given', function () {
      it('should return the scale factor', function () {
        var scaleFactor = '3';
        var scaledSize = (0, _utils.getScaledSize)(null, scaleFactor);
        expect(scaledSize).toEqual(scaleFactor);
      });
    });

    describe('When size and scaleFactor are given as strings', function () {
      it('should return the correct scaled size', function () {
        var size = '15';
        var scaleFactor = '1.2';
        var expectedSize = '18';
        var scaledSize = (0, _utils.getScaledSize)(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When size and scaleFactor are given as numbers', function () {
      it('should return the correct scaled size', function () {
        var size = 15;
        var scaleFactor = 1.2;
        var expectedSize = '18';
        var scaledSize = (0, _utils.getScaledSize)(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });
  });

  describe('Given calculating scaled font size', function () {
    describe('When size or scaleFactor is null or undefined', function () {
      it('should return default font size of 1rem', function () {
        var expectedSize = '1rem';
        var scaledSize = (0, _utils.getScaledFontSize)();
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When % size and scaleFactor is given', function () {
      it('should return default font size of 12px', function () {
        var size = '100%';
        var scaleFactor = 1.2;
        var expectedSize = '120%';
        var scaledSize = (0, _utils.getScaledFontSize)(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When em size and scaleFactor is given', function () {
      it('should return default font size of 12px', function () {
        var size = '1em';
        var scaleFactor = 1.2;
        var expectedSize = '1.2em';
        var scaledSize = (0, _utils.getScaledFontSize)(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When px size and scaleFactor is given', function () {
      it('should return default font size of 12px', function () {
        var size = '15px';
        var scaleFactor = 1.5;
        var expectedSize = '22.5px';
        var scaledSize = (0, _utils.getScaledFontSize)(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When rem size and scaleFactor is given', function () {
      it('should return default font size of 12px', function () {
        var size = '1rem';
        var scaleFactor = 0.8;
        var expectedSize = '0.8rem';
        var scaledSize = (0, _utils.getScaledFontSize)(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });
  });
});