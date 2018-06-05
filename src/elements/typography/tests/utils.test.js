import { getScaledFontSize, getScaledSize } from '../utils';

describe('Typography Utils', () => {
  describe('Given calculating scaled size', () => {
    describe('When size and scaleFactor are null or undefined', () => {
      it('should return default size of 1', () => {
        const scaledSize = getScaledSize();
        expect(scaledSize).toEqual('1');
      });
    });

    describe('When size is given and scaleFactor is null or undefined', () => {
      it('should return the size', () => {
        const size = '15';
        const scaledSize = getScaledSize(size);
        expect(scaledSize).toEqual(size);
      });
    });

    describe('When size is null or undefined and scaleFactor is given', () => {
      it('should return the scale factor', () => {
        const scaleFactor = '3';
        const scaledSize = getScaledSize(null, scaleFactor);
        expect(scaledSize).toEqual(scaleFactor);
      });
    });

    describe('When size and scaleFactor are given as strings', () => {
      it('should return the correct scaled size', () => {
        const size = '15';
        const scaleFactor = '1.2';
        const expectedSize = '18';
        const scaledSize = getScaledSize(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When size and scaleFactor are given as numbers', () => {
      it('should return the correct scaled size', () => {
        const size = 15;
        const scaleFactor = 1.2;
        const expectedSize = '18';
        const scaledSize = getScaledSize(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });
  });

  describe('Given calculating scaled font size', () => {
    describe('When size or scaleFactor is null or undefined', () => {
      it('should return default font size of 12px', () => {
        const expectedSize = '12px';
        const scaledSize = getScaledFontSize();
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When % size and scaleFactor is given', () => {
      it('should return default font size of 12px', () => {
        const size = '100%';
        const scaleFactor = 1.2;
        const expectedSize = '120%';
        const scaledSize = getScaledFontSize(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When em size and scaleFactor is given', () => {
      it('should return default font size of 12px', () => {
        const size = '1em';
        const scaleFactor = 1.2;
        const expectedSize = '1.2em';
        const scaledSize = getScaledFontSize(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When px size and scaleFactor is given', () => {
      it('should return default font size of 12px', () => {
        const size = '15px';
        const scaleFactor = 1.5;
        const expectedSize = '22.5px';
        const scaledSize = getScaledFontSize(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });

    describe('When rem size and scaleFactor is given', () => {
      it('should return default font size of 12px', () => {
        const size = '1rem';
        const scaleFactor = 0.8;
        const expectedSize = '0.8rem';
        const scaledSize = getScaledFontSize(size, scaleFactor);
        expect(scaledSize).toEqual(expectedSize);
      });
    });
  });
});
