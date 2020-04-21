"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

/* eslint-disable react/prop-types */
describe('Table - basic rendering', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });

  function MyComponent(props) {
    return /*#__PURE__*/_react.default.createElement("div", props, "innerText");
  }

  const MyHideable = (0, _.withHideable)(MyComponent);
  it('should not return any markup if no children', () => {
    const hide = true;
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(MyHideable, {
        hide: hide
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should not have rendered children when hide is true', () => {
    (0, _testUtils.act)(() => {
      const hide = true;
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(MyHideable, {
        hide: hide
      }, /*#__PURE__*/_react.default.createElement("div", {
        title: "test-div-children"
      }, "innerText"))), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should render children when hide is false', () => {
    (0, _testUtils.act)(() => {
      const hide = false;
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(MyHideable, {
        hide: hide
      }, /*#__PURE__*/_react.default.createElement("div", {
        title: "test-div-children"
      }, "innerText"))), container);
    });
    expect(container).toMatchSnapshot();
  });
});