"use strict";

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer["default"].create(element);

  return component.toJSON();
};

describe('Assistive Text Component base', function () {
  it('should return an Assistive Text object', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react["default"].createElement(_.AssistiveText, {
      id: "assitiveTextIdHelp"
    }, "Helper text is here"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an Assistive Text object with danger text color', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react["default"].createElement(_.AssistiveText, {
      color: "brandDanger",
      id: "assitiveTextIdError"
    }, "Error text is here"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});