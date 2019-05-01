import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { getGlobalOverrides } from 'src/global-styles';
import { Button } from '..';
import { buttonThemes } from 'src/utils/styledHelpers';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Button using Theme color', () => {
  it('should return a Button object with custom color', () => {
    const theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)',
        },
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <Button bg="grapeSoda.dark" color="grapeSoda.light">Lorem Ipsum</Button>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button using Theme Font Family', () => {
  it('should return a Button object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier',
      },
    };
    const element = (
      <ThemeProvider theme={theme}>
        <Button fontFamily="trueSpace">Lorem Ipsum</Button>
      </ThemeProvider>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Button using theme border radius', () => {
  const props = {
    theme: {
      border: {
        borderRadius: {
          base: '8px',
          lg: '12px',
          sm: '4px',
        },
      },
    },
  };
  const globalOverrides = getGlobalOverrides(props);
  const theme = {
    space: [0, 4, 8, 16],
    ...globalOverrides,
  };
  describe('Button', () => {
    it('should return a Button with lg border radius styling based on theme.border.borderRadius', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button lg>Custom lg button</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Button using variant styles', () => {
  const theme = {
    buttons: {
      ...buttonThemes(),
    },
    space: [0, 4, 8, 16],
  };
  describe('Button with variant set to primary', () => {
    it('should return a Button with primary styling', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button variant="primary">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to danger', () => {
    it('should return a Button with danger styling', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button variant="danger">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-light', () => {
    it('should return a Button with contained-light styling', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button variant="contained-light">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-danger', () => {
    it('should return a Button with contained-danger styling', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button variant="contained-danger">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set to an unknown variant', () => {
    it('should return a Button with no variant styling', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button variant="not-a-variant">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with no variant', () => {
    it('should return a Button with bg and color styling preserved', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button bg="yellow" color="yellow.dark">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with variant, bg and color', () => {
    it('should return a Button with bg and color styling overwriting the variant bg and color style', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button bg="yellow" color="yellow.dark" variant="contained-danger">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});

describe('Button using variant styles with theme colors', () => {
  const props = {
    theme: {
      colors: {
        brandPrimary: {
          base: 'hsl(323.31, 85.61%, 29.98%)',
          dark: 'hsl(302.91, 34.91%, 24.71%)',
          light: 'hsl(312.81, 68.81%, 48.51%)',
        },
      },
    },
  };
  const globalOverrides = getGlobalOverrides(props);
  const theme = {
    buttons: {
      ...buttonThemes(null, globalOverrides),
    },
    space: [0, 4, 8, 16],
  };
  describe('Button with variant set to contained-primary', () => {
    it('should return a Button with contained-primary styling based on theme.colors', () => {
      const element = (
        <ThemeProvider theme={theme}>
          <Button variant="contained-primary">Do this</Button>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
