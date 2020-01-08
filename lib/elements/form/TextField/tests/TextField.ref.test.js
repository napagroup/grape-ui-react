"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require("enzyme");

var _styledComponents = require("styled-components");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact2["default"]()
});
describe('When supporting a forward ref for TextField ', function () {
  it('should reference the underlying input element', function () {
    var ref = _react2["default"].createRef();

    var register = function register(e) {
      ref.current = e;
    };

    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      inputRef: register,
      labelText: "name",
      name: "name"
    })));
    expect(component.find('input').instance()).toEqual(ref.current);
  });
  it('should reference the underlying Cleave DOM element', function () {
    var ref = _react2["default"].createRef();

    var register = function register(e) {
      ref.current = e;
    };

    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      inputRef: register,
      integer: true,
      labelText: "Quantity",
      name: "quantity"
    })));
    expect(component.find('input').instance()).toEqual(ref.current);
  });
  it('should reference the underlying TextareaAutosize DOM element', function () {
    var ref = _react2["default"].createRef();

    var register = function register(e) {
      ref.current = e;
    };

    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextField, {
      inputRef: register,
      labelText: "Description",
      multiline: true,
      name: "description"
    })));
    expect(component.find('textarea').instance()).toEqual(ref.current);
  });
});