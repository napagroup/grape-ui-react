"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

describe('List Component', () => {
  it('should return a List object with base styling', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, null, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-style: italic', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      italic: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: lg', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      lg: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      sm: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with custom margin and paddings', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      m: 1,
      p: 1
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('List Specific Styling', () => {
  it('should return an unstyled List object', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      unstyled: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline List object', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      inline: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a base color (implicit)', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      color: "green"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a base color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      color: "green.base"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a light color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      color: "green.light"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a dark color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      color: "green.dark"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with ellipsis', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      ellipsis: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified font-family', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified font-weight', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      sm: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified kerning', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      kerning: "2px"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified text-align', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified text-decoration', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Numbered List Component', () => {
  it('should return a Numbered List object with base styling', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, null, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-style: italic', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      italic: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered Numbered List object with font-size: lg', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      lg: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-size: sm', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      sm: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with roman numerals uppercase', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      type: "I"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with roman numerals lowercase', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      type: "i"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with Alpha uppercase', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      type: "A"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with Alpha lowercase', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      type: "a"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Numbered List Specific Styling', () => {
  it('should return an unstyled Numbered List object', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      unstyled: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline Numbered List object', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      inline: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a base color (implicit)', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      color: "green"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a base color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      color: "green.base"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a light color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      color: "green.light"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a dark color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      color: "green.dark"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified font-family', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified font-weight', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with font-size: sm', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      sm: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified kerning', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      kerning: "2px"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified text-align', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified text-decoration', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.List.ol, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});