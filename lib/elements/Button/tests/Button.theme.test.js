"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

var _ = require("..");

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

describe('Button using Theme color', () => {
  it('should return a Button object with custom color', () => {
    const theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Button using Theme Font Family', () => {
  it('should return a Button object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

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
          sm: '4px'
        }
      }
    }
  };
  const globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const theme = {
    space: [0, 4, 8, 16],
    ...globalOverrides
  };
  describe('Button', () => {
    it('should return a Button with lg border radius styling based on theme.border.borderRadius', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        lg: true
      }, "Custom lg button"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Button using variant styles', () => {
  const theme = {
    buttons: { ...(0, _styledHelpers.buttonThemes)()
    },
    space: [0, 4, 8, 16]
  };
  describe('Button with variant set to primary', () => {
    it('should return a Button with primary styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "primary"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to danger', () => {
    it('should return a Button with danger styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-light', () => {
    it('should return a Button with contained-light styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "contained-light"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button with variant set to contained-danger', () => {
    it('should return a Button with contained-danger styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "contained-danger"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set to an unknown variant', () => {
    it('should return a Button with no variant styling', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "not-a-variant"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with no variant', () => {
    it('should return a Button with bg and color styling preserved', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        bg: "yellow",
        color: "yellow.dark"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
  describe('Button set with variant, bg and color', () => {
    it('should return a Button with bg and color styling overwriting the variant bg and color style', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        bg: "yellow",
        color: "yellow.dark",
        variant: "contained-danger"
      }, "Do this"));

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
          light: 'hsl(312.81, 68.81%, 48.51%)'
        }
      }
    }
  };
  const globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const theme = {
    buttons: { ...(0, _styledHelpers.buttonThemes)(null, globalOverrides)
    },
    space: [0, 4, 8, 16]
  };
  describe('Button with variant set to contained-primary', () => {
    it('should return a Button with contained-primary styling based on theme.colors', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Button, {
        variant: "contained-primary"
      }, "Do this"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});