import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";

/* eslint-disable function-paren-newline */
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from '../..';
import 'jest-styled-components';
describe('Flex base', function () {
  it('should return a Flex object with base styling', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, null, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with a box element as the child', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, null, "Lorem Ipsum"))));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with 2 responsive Box elements as the children', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      alignItems: "flex-start",
      flexWrap: "wrap"
    }, /*#__PURE__*/React.createElement(Box, {
      width: [1, 1 / 3]
    }, "Lorem"), /*#__PURE__*/React.createElement(Box, {
      width: [1, 2 / 3]
    }, "Ipsum"))));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified margins', function () {
  it('should return a Flex object with margin applying space all around', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      m: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on top', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      mt: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on right', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      mr: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on bottom', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      mb: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on left', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      ml: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on the left and right', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      mx: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on the top and bottom', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      my: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified padding', function () {
  it('should return a Flex object with padding applying space all around', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      p: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on top', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      pt: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on right', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      pr: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on bottom', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      pb: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on left', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      pl: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on the left and right', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      px: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on the top and bottom', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      py: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified widths', function () {
  it('should return a Flex object with a specified width', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      width: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with a percentage width', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      width: 1 / 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with an exact pixel width', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      width: 256
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with the exact width enter with the stated unit', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      width: "2em"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with width applied to different breakpoints', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      width: [1, 1 / 2]
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified layout properties', function () {
  it('should return a Flex object with maxWidth', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      maxWidth: 1024
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxWidth based on defined breakpoints', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      maxWidth: [768, null, null, 1024]
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with minWidth', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      minWidth: 128
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with minWidth based on defined breakpoints', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      minWidth: [96, 128]
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with height', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      height: 64
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with height based on defined breakpoints', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      height: [48, 64]
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxHeight', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      maxHeight: 1024
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxHeight based on defined breakpoints', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      maxHeight: [768, null, null, 1024]
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with size (width and height)', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      size: 32
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with size (width and height) based on defined breakpoints', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      size: [32, 48]
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with ratio (height * padding-bottom)', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      ratio: 3 / 4
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified alignment properties', function () {
  it('should return a Flex object with items aligned to the the center', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      alignItems: "center"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with content aligned to the the center', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      alignContent: "center"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with content justified to the the center', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      justifyContent: "center"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with flex-wrap styling applied', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      flexWrap: "wrap"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with auto flex basis applied', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      flexBasis: "wrap"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with column flex direction', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Flex, {
      flexDirection: "column"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex using custom theme breakpoints', function () {
  /*
    For testing reference, there are the following defaults:
    default breakpoints: 40em, 52em, 64em
    default space: 0, 4, 8, 16
  */
  describe('for Core Styling', function () {
    var theme = {
      breakpoints: ['35em', '47em', '67em'],
      space: [2, 7, 8, 18]
    };
    it('should return a Flex object with overridden breakpoints for margin', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        m: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for margin top', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        mt: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for padding', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        p: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for padding top', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        pt: [0, 1, 2, 3]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for width', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        width: [1, 1 / 2, 1 / 4, 1 / 8]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Layout', function () {
    var theme = {
      breakpoints: ['35em', '47em', '67em'],
      heights: ['1.1px', '0.8px', '0.6px', '0.33px'],
      maxHeights: ['1.1px', '0.8px', '0.6px', '0.33px']
    };
    it('should return a Flex object with overridden breakpoints for maxWidth', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        maxWidth: ['1.1px', '0.8px', '0.6px', '0.33px']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for minWidth', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        minWidth: [1, 1 / 2, 1 / 4]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for height', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        height: ['1.1px', '0.8px', '0.6px', '0.33px']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for maxHeight', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        maxHeight: ['1.1px', '0.8px', '0.6px', '0.33px']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for minHeight', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        minHeight: [1, 1 / 2, 1 / 4, 1 / 8]
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for size', function () {
      var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: theme
      }, /*#__PURE__*/React.createElement(Flex, {
        size: ['100%', '50%', '25%', '12.5']
      }, "Lorem Ipsum"))); // eslint-disable-line react/jsx-closing-tag-location

      var tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});