"use strict";

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ControlLabel Component base', function () {
  it('should return a ControlLabel object', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.ControlLabel, {
      htmlFor: "forWhatId"
    }, "Label text is here")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});