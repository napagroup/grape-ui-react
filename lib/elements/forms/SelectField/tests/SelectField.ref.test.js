"use strict";

require("core-js/modules/es.array.find");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _styledComponents = require("styled-components");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});
describe('When supporting a forward ref for SelectField ', function () {
  it('should reference the underlying input element', function () {
    var ref = _react["default"].createRef();

    var register = function register(e) {
      ref.current = e;
    };

    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.SelectField, {
      inputRef: register,
      labelText: "Name",
      name: "name"
    })));
    var instance = component.find('input').at(0).getDOMNode();
    expect(instance).toEqual(ref.current.select.inputRef);
  });
});