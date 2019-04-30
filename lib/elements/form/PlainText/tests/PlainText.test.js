"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("..");

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('PlainText Component base', function () {
  it('should return a PlainText object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.PlainText, null, "Lorem Ipsum"));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});