"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _react = _interopRequireDefault(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable react/prop-types */
describe('Table - basic rendering', function () {
  var container;
  beforeEach(function () {
    container = document.createElement('div');
  });

  function MyComponent(props) {
    return /*#__PURE__*/_react["default"].createElement("div", props, "innerText");
  }

  var MyHideable = (0, _.withHideable)(MyComponent);
  it('should not return any markup if no children', function () {
    var hide = true;
    (0, _testUtils.act)(function () {
      ReactDOM.render( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react["default"].createElement(MyHideable, {
        hide: hide
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should not have rendered children when hide is true', function () {
    (0, _testUtils.act)(function () {
      var hide = true;
      ReactDOM.render( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react["default"].createElement(MyHideable, {
        hide: hide
      }, /*#__PURE__*/_react["default"].createElement("div", {
        title: "test-div-children"
      }, "innerText"))), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should render children when hide is false', function () {
    (0, _testUtils.act)(function () {
      var hide = false;
      ReactDOM.render( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react["default"].createElement(MyHideable, {
        hide: hide
      }, /*#__PURE__*/_react["default"].createElement("div", {
        title: "test-div-children"
      }, "innerText"))), container);
    });
    expect(container).toMatchSnapshot();
  });
});