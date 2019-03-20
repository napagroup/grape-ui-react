import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { getGlobalStyles, getGlobalOverrides } from 'src/global-styles';
import { MemoryRouter as Router } from 'react-router-dom';
import { Button } from '..';
import { buttonThemes } from 'src/utils/styledHelpers';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Button base', () => {
  it('should return a Button', () => {
    const element = (
      <Button>Button Base</Button>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an outlined Button', () => {
    const element = <Button id="buttonOutline" outline>Button Outline</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an contained Button', () => {
    const element = <Button contained id="buttonContained">Button Contained</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return an contained raised Button', () => {
    const element = <Button contained id="buttonContainedRaised" raised>Button Contained and Raised</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with disabled', () => {
    const element = <Button disabled id="exampleColor">Disabled button</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button Component base with style', () => {
  it('should return a Button with bg and color', () => {
    const element = <Button bg="green" color="white" id="exampleColor">Happy St. Patrick&#39;s Day!</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with bg and color and bgActiveColor and bgHoverColor ', () => {
    const element = <Button bg="green" bgActiveColor="green.light" bgHoverColor="green.dark" color="white" id="exampleColor">Happy St. Patrick&#39;s Day!</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', () => {
    const element = <Button id="exampleColor" sm>Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', () => {
    const element = <Button id="exampleColor" lg>Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with a zIndex when using a string', () => {
    const element = <Button zIndex="500">Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', () => {
    const element = <Button zIndex={500}>Do this</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with href with button look', () => {
    const element = <Button href="https://www.google.com/" target="_blank">google</Button>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with to with button look', () => {
    const element = <Router><Button to="/404">404</Button></Router>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button using theme colors', () => {
  it('should return a Button', () => {
    const globalStyles = getGlobalStyles();
    const { colors } = globalStyles;
    const theme = {
      colors: {
        ...colors,
        yellow: {
          base: 'hsl(65, 65%, 50%)',
          dark: 'hsl(65, 65%, 25%)',
          light: 'hsl(65, 65%, 68%)',
        },
      },
      space: [0, 4, 8, 16],
    };
    const element = (
      <ThemeProvider theme={theme}>
        <Button bg="yellow" color="yellow.dark">Do this</Button>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  describe('Button using styled system fontSize', () => {
    it('should return a Button with specified font size', () => {
      const element = (
        <Button fontSize={3} variant="primary">Do this</Button>
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
