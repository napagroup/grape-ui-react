import { resolveColor } from '../componentHelpers';

const defaultValue = 'inherit';
describe('When resolving a color given an empty string or non-string value', () => {
  it('should return \'inherit\' when color is undefined (implicit)', () => {
    expect(resolveColor()).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is undefined (explicit)', () => {
    expect(resolveColor(undefined)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is null', () => {
    expect(resolveColor(null)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is false', () => {
    expect(resolveColor(false)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is empty string', () => {
    expect(resolveColor('')).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is 0', () => {
    expect(resolveColor(0)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is NaN', () => {
    expect(resolveColor(NaN)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is Infinity', () => {
    expect(resolveColor(Infinity)).toEqual(defaultValue);
  });
});

describe('When resolving a color given an unrecognized color', () => {
  it('should return \'inherit\' when color is ChocolateCoveredTunaEnchiladas', () => {
    expect(resolveColor('ChocolateCoveredTunaEnchiladas')).toEqual(defaultValue);
  });
});

describe('When resolving a color given an recognized color', () => {
  it('should return a base color', () => {
    expect(resolveColor('green')).toEqual('hsl(122.4, 39.4%, 49.2%)');
  });
  it('should return a dark color', () => {
    expect(resolveColor('green.dark')).toEqual('hsl(122.4, 39.4%, 29.2%)');
  });
  it('should return a light color', () => {
    expect(resolveColor('green.light')).toEqual('hsl(122.4, 39.4%, 69.2%)');
  });
});
