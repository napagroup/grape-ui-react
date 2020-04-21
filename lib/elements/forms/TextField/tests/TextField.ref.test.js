"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _styledComponents = require("styled-components");

var _ = require("..");

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('When supporting a forward ref for TextField ', () => {
  it('should reference the underlying input element', () => {
    const ref = _react.default.createRef();

    const register = e => {
      ref.current = e;
    };

    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      inputRef: register,
      labelText: "name",
      name: "name"
    })));
    expect((0, _find.default)(component).call(component, 'input').instance()).toEqual(ref.current);
  });
  it('should reference the underlying Cleave DOM element', () => {
    const ref = _react.default.createRef();

    const register = e => {
      ref.current = e;
    };

    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      inputRef: register,
      integer: true,
      labelText: "Quantity",
      name: "quantity"
    })));
    expect((0, _find.default)(component).call(component, 'input').instance()).toEqual(ref.current);
  });
  it('should reference the underlying TextareaAutosize DOM element', () => {
    const ref = _react.default.createRef();

    const register = e => {
      ref.current = e;
    };

    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      inputRef: register,
      labelText: "Description",
      multiline: true,
      name: "description"
    })));
    expect((0, _find.default)(component).call(component, 'textarea').instance()).toEqual(ref.current);
  });
});