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
describe('When supporting a forward ref for SelectField ', () => {
  it('should reference the underlying input element', () => {
    const ref = _react.default.createRef();

    const register = e => {
      ref.current = e;
    };

    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.SelectField, {
      inputRef: register,
      labelText: "Name",
      name: "name"
    })));
    const instance = (0, _find.default)(component).call(component, 'input').at(0).getDOMNode();
    expect(instance).toEqual(ref.current.select.inputRef);
  });
});