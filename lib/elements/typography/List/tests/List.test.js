import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { List } from '..';
import 'jest-styled-components';
describe('List Component', function () {
  it('should return a List object with base styling', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, null, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-style: italic', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      italic: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: lg', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      lg: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      sm: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with custom margin and paddings', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      m: 1,
      p: 1
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('List Specific Styling', function () {
  it('should return an unstyled List object', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      unstyled: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline List object', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      inline: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a base color (implicit)', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      color: "green"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a base color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      color: "green.base"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a light color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      color: "green.light"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a dark color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      color: "green.dark"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with ellipsis', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      ellipsis: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified font-family', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified font-weight', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      sm: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified kerning', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      kerning: "2px"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified text-align', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      textAlign: "right"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified text-decoration', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Numbered List Component', function () {
  it('should return a Numbered List object with base styling', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, null, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-style: italic', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      italic: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered Numbered List object with font-size: lg', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      lg: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-size: sm', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      sm: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with roman numerals uppercase', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      type: "I"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with roman numerals lowercase', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      type: "i"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with Alpha uppercase', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      type: "A"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with Alpha lowercase', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      type: "a"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Numbered List Specific Styling', function () {
  it('should return an unstyled Numbered List object', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      unstyled: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline Numbered List object', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      inline: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a base color (implicit)', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      color: "green"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a base color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      color: "green.base"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a light color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      color: "green.light"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a dark color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      color: "green.dark"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified font-family', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified font-weight', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with font-size: sm', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      sm: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified kerning', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      kerning: "2px"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified text-align', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      textAlign: "right"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified text-decoration', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(List.ol, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});