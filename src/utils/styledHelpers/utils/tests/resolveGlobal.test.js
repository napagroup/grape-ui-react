import * as mockGlobalStyles from 'src/global-styles';
import { resolveGlobal } from '../..';

const colors = {
  grape: {
    base: 'hsl(325.3, 85.6%, 29%)',
    dark: 'hsl(305.9, 43.9%, 23.7%)',
    light: 'hsl(315.8, 77.8%, 47.5%)',
  },
  kiwi: {
    base: 'hsl(122.4, 39.4%, 49.2%)',
    dark: 'hsl(122.4, 39.4%, 29.2%)',
    light: 'hsl(122.4, 39.4%, 69.2%)',
  },
};

describe('When calling resolve global with no parameters', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors,
    });
    mockGlobalStyles.getGlobalOverrides = jest.fn();
  });
  it('should call the get global styles', () => {
    resolveGlobal();
    expect(mockGlobalStyles.getGlobalStyles).toHaveBeenCalledTimes(1);
  });
  it('should not call the get global overrides', () => {
    resolveGlobal();
    expect(mockGlobalStyles.getGlobalOverrides).toHaveBeenCalledTimes(0);
  });
  it('should return global styles', () => {
    const actual = resolveGlobal();
    expect(actual).toEqual({ colors });
  });
});

describe('When calling resolve global with no themes', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors,
    });
    mockGlobalStyles.getGlobalOverrides = jest.fn();
  });
  const cyan = {
    base: 'hsl(186.8, 100%, 41.6%)',
    dark: 'hsl(186.8, 100%, 21.6%)',
    light: 'hsl(186.8, 100%, 61.6%)',
  };
  const styles = { colors: { cyan } };
  it('should not call the get global styles', () => {
    resolveGlobal(styles);
    expect(mockGlobalStyles.getGlobalStyles).toHaveBeenCalledTimes(0);
  });
  it('should not call the get global overrides', () => {
    resolveGlobal(styles);
    expect(mockGlobalStyles.getGlobalOverrides).toHaveBeenCalledTimes(0);
  });
  it('should return the same style object as is', () => {
    const actual = resolveGlobal(styles);
    expect(actual).toEqual(styles);
  });
});


describe('When calling resolve global with themes', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors,
    });
    mockGlobalStyles.getGlobalOverrides = jest.fn();
  });
  const cyan = {
    base: 'hsl(186.8, 100%, 41.6%)',
    dark: 'hsl(186.8, 100%, 21.6%)',
    light: 'hsl(186.8, 100%, 61.6%)',
  };
  const props = { theme: { colors: { cyan } } };

  it('should call the get global styles', () => {
    resolveGlobal(props);
    expect(mockGlobalStyles.getGlobalStyles).toHaveBeenCalledTimes(0);
  });
  it('should call the get global overrides', () => {
    resolveGlobal(props);
    expect(mockGlobalStyles.getGlobalOverrides).toHaveBeenCalledWith(props);
  });
});
