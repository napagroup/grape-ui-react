"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
  For testing reference, there are the following defaults:
  default breakpoints: 40em, 52em, 64em
  default space: 0, 4, 8, 16
*/
var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

describe('Box Component base', function () {
  it('should return an empty Box object with base styling', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with acceptable attributes', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      id: "my-box-id"
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified margins', function () {
  it('should return a Box object with margin', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      m: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with top margin', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      mt: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin right', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      mr: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin bottom', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      mb: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin left', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      ml: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin left and right', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      mx: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin top and bottom', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      my: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified padding', function () {
  it('should return a Box object with padding', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      p: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding top', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      pt: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding right', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      pr: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding bottom', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      pb: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding left', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      pl: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding left and right', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      px: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding top and bottom', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      py: 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified widths', function () {
  it('should return a Box object with a percentage width', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      width: 1 / 2
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with an exact pixel width', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      width: 256
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with an exact pixel width in the stated unit', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      width: "2em"
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with width applied to different breakpoints', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      width: [1, 1 / 2]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified layout properties', function () {
  it('should return a Box object with display', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      display: "inline-block"
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with display applied to different breakpoints', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      display: ['block', 'inline-block']
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxWidth', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      maxWidth: 1024
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxWidth applied to different breakpoints', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      maxWidth: [768, null, null, 1024]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minWidth', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      minWidth: 128
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minWidth applied to different breakpoints', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      minWidth: [96, 128]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with height', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      height: 64
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with height applied to different breakpoints', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      height: [48, 64]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxHeight', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      maxHeight: 1024
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxHeight applied to different breakpoints', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      maxHeight: [768, null, null, 1024]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minHeight', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      minHeight: 128
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minHeight applied to different breakpoints', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      minHeight: [384, 512]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with size', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      size: 32
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with size applied to different breakpoints', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Box, {
      size: [32, 48]
    }, "Lorem Ipsum"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  describe('Box Component with specified position properties', function () {
    it('should return a Box object with position', function () {
      var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, _react2["default"].createElement(_.Box, {
        position: "absolute"
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with zIndex', function () {
      var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, _react2["default"].createElement(_.Box, {
        zIndex: 2
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with top', function () {
      var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, _react2["default"].createElement(_.Box, {
        top: 0
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with right', function () {
      var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, _react2["default"].createElement(_.Box, {
        right: 0
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with bottom', function () {
      var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, _react2["default"].createElement(_.Box, {
        bottom: 0
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with left', function () {
      var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: emptyTheme
      }, _react2["default"].createElement(_.Box, {
        left: 0
      }, "Lorem Ipsum"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Box Component using custom theme breakpoints', function () {
  describe('for Core Styling', function () {
    var theme = {
      breakpoints: ['35em', '47em', '67em'],
      space: [2, 7, 8, 18]
    };
    it('should return a Box object with overridden breakpoints for margin', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2["default"].createElement(_.Box, {
        m: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for margin top', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2["default"].createElement(_.Box, {
        mt: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for padding', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2["default"].createElement(_.Box, {
        p: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for padding top', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2["default"].createElement(_.Box, {
        pt: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for width', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2["default"].createElement(_.Box, {
        width: [1, 1 / 2, 1 / 4, 1 / 8]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Layout', function () {
    var themeLayout = {
      breakpoints: ['35em', '47em', '67em'],
      space: [2, 7, 8, 18]
    };
    it('should return a Box object with overridden breakpoints for display', function () {
      var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {
          breakpoints: ['35em', '47em', '67em']
        }
      }, _react2["default"].createElement(_.Box, {
        display: ['block', 'inline-block']
      }, "I am block until 35em"));

      expect(assertReactElement(element)).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for maxWidth', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, _react2["default"].createElement(_.Box, {
        maxWidth: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for minWidth', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, _react2["default"].createElement(_.Box, {
        minWidth: [1, 1 / 2, 1 / 4]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for height', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, _react2["default"].createElement(_.Box, {
        height: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for maxHeight', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, _react2["default"].createElement(_.Box, {
        maxHeight: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for minHeight', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, _react2["default"].createElement(_.Box, {
        minHeight: [1, 1 / 2, 1 / 4, 1 / 8]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for size', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: themeLayout
      }, _react2["default"].createElement(_.Box, {
        size: [32, 48, 60, 120]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Position', function () {
    var theme = {
      breakpoints: ['35em', '47em', '67em']
    };
    it('should return a Box object with overridden breakpoints for position', function () {
      var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, _react2["default"].createElement(_.Box, {
        position: ['block', 'inline-block']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});