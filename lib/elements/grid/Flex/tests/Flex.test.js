"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("../..");

require("jest-styled-components");

/* eslint-disable function-paren-newline */
describe('Flex base', () => {
  it('should return a Flex object with base styling', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, null, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with a box element as the child', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, null, /*#__PURE__*/_react.default.createElement(_.Box, null, "Lorem Ipsum"))));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with 2 responsive Box elements as the children', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      alignItems: "flex-start",
      flexWrap: "wrap"
    }, /*#__PURE__*/_react.default.createElement(_.Box, {
      width: [1, 1 / 3]
    }, "Lorem"), /*#__PURE__*/_react.default.createElement(_.Box, {
      width: [1, 2 / 3]
    }, "Ipsum"))));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified margins', () => {
  it('should return a Flex object with margin applying space all around', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      m: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on top', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      mt: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on right', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      mr: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on bottom', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      mb: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on left', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      ml: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on the left and right', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      mx: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on the top and bottom', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      my: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified padding', () => {
  it('should return a Flex object with padding applying space all around', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      p: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on top', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      pt: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on right', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      pr: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on bottom', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      pb: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on left', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      pl: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on the left and right', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      px: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on the top and bottom', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      py: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified widths', () => {
  it('should return a Flex object with a specified width', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      width: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with a percentage width', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      width: 1 / 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with an exact pixel width', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      width: 256
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with the exact width enter with the stated unit', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      width: "2em"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with width applied to different breakpoints', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      width: [1, 1 / 2]
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified layout properties', () => {
  it('should return a Flex object with maxWidth', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      maxWidth: 1024
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxWidth based on defined breakpoints', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      maxWidth: [768, null, null, 1024]
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with minWidth', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      minWidth: 128
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with minWidth based on defined breakpoints', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      minWidth: [96, 128]
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with height', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      height: 64
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with height based on defined breakpoints', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      height: [48, 64]
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxHeight', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      maxHeight: 1024
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxHeight based on defined breakpoints', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      maxHeight: [768, null, null, 1024]
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with size (width and height)', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      size: 32
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with size (width and height) based on defined breakpoints', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      size: [32, 48]
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with ratio (height * padding-bottom)', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      ratio: 3 / 4
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified alignment properties', () => {
  it('should return a Flex object with items aligned to the the center', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      alignItems: "center"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with content aligned to the the center', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      alignContent: "center"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with content justified to the the center', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      justifyContent: "center"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with flex-wrap styling applied', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      flexWrap: "wrap"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with auto flex basis applied', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      flexBasis: "wrap"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with column flex direction', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Flex, {
      flexDirection: "column"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex using custom theme breakpoints', () => {
  /*
    For testing reference, there are the following defaults:
    default breakpoints: 40em, 52em, 64em
    default space: 0, 4, 8, 16
  */
  describe('for Core Styling', () => {
    const theme = {
      breakpoints: ['35em', '47em', '67em'],
      space: [2, 7, 8, 18]
    };
    it('should return a Flex object with overridden breakpoints for margin', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        m: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for margin top', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        mt: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for padding', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        p: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for padding top', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        pt: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for width', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        width: [1, 1 / 2, 1 / 4, 1 / 8]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Layout', () => {
    const theme = {
      breakpoints: ['35em', '47em', '67em'],
      heights: ['1.1px', '0.8px', '0.6px', '0.33px'],
      maxHeights: ['1.1px', '0.8px', '0.6px', '0.33px']
    };
    it('should return a Flex object with overridden breakpoints for maxWidth', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        maxWidth: ['1.1px', '0.8px', '0.6px', '0.33px']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for minWidth', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        minWidth: [1, 1 / 2, 1 / 4]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for height', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        height: ['1.1px', '0.8px', '0.6px', '0.33px']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for maxHeight', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        maxHeight: ['1.1px', '0.8px', '0.6px', '0.33px']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for minHeight', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        minHeight: [1, 1 / 2, 1 / 4, 1 / 8]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for size', () => {
      const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/_react.default.createElement(_.Flex, {
        size: ['100%', '50%', '25%', '12.5']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location


      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});