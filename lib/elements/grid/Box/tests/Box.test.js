"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("../..");

/*
  For testing reference, there are the following defaults:
  default breakpoints: 40em, 52em, 64em
  default space: 0, 4, 8, 16
*/
const emptyTheme = {};

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

describe('Box Component base', () => {
  it('should return an empty Box object with base styling', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with acceptable attributes', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      id: "my-box-id"
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified margins', () => {
  it('should return a Box object with margin', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      m: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with top margin', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      mt: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin right', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      mr: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin bottom', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      mb: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin left', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      ml: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin left and right', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      mx: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin top and bottom', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      my: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified padding', () => {
  it('should return a Box object with padding', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      p: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding top', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      pt: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding right', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      pr: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding bottom', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      pb: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding left', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      pl: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding left and right', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      px: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding top and bottom', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      py: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified widths', () => {
  it('should return a Box object with a percentage width', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      width: 1 / 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with an exact pixel width', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      width: 256
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with an exact pixel width in the stated unit', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      width: "2em"
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with width applied to different breakpoints', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      width: [1, 1 / 2]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified layout properties', () => {
  it('should return a Box object with display', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      display: "inline-block"
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with display applied to different breakpoints', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      display: ['block', 'inline-block']
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxWidth', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      maxWidth: 1024
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxWidth applied to different breakpoints', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      maxWidth: [768, null, null, 1024]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minWidth', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      minWidth: 128
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minWidth applied to different breakpoints', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      minWidth: [96, 128]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with height', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      height: 64
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with height applied to different breakpoints', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      height: [48, 64]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxHeight', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      maxHeight: 1024
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxHeight applied to different breakpoints', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      maxHeight: [768, null, null, 1024]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minHeight', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      minHeight: 128
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minHeight applied to different breakpoints', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      minHeight: [384, 512]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with size', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      size: 32
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with size applied to different breakpoints', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      size: [32, 48]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  describe('Box Component with specified position properties', () => {
    it('should return a Box object with position', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        position: "absolute"
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with zIndex', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        zIndex: 2
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with top', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        top: 0
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with right', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        right: 0
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with bottom', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        bottom: 0
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with left', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        left: 0
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Box Component using custom theme breakpoints', () => {
  describe('for Core Styling', () => {
    const theme = {
      breakpoints: ['35em', '47em', '67em'],
      space: [2, 7, 8, 18]
    };
    it('should return a Box object with overridden breakpoints for margin', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        m: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for margin top', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        mt: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for padding', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        p: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for padding top', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        pt: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for width', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        width: [1, 1 / 2, 1 / 4, 1 / 8]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Layout', () => {
    const themeLayout = {
      breakpoints: ['35em', '47em', '67em'],
      space: [2, 7, 8, 18]
    };
    it('should return a Box object with overridden breakpoints for display', () => {
      const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {
          breakpoints: ['35em', '47em', '67em']
        }
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        display: ['block', 'inline-block']
      }, "I am block until 35em"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for maxWidth', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        maxWidth: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for minWidth', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        minWidth: [1, 1 / 2, 1 / 4]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for height', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        height: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for maxHeight', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        maxHeight: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for minHeight', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        minHeight: [1, 1 / 2, 1 / 4, 1 / 8]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for size', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        size: [32, 48, 60, 120]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Position', () => {
    const theme = {
      breakpoints: ['35em', '47em', '67em']
    };
    it('should return a Box object with overridden breakpoints for position', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Box, {
        position: ['block', 'inline-block']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});