"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _ = require("..");

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer["default"].create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});
describe('TextFieldComponent base', function () {
  it('should return a TextFieldComponent object', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      sm: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      lg: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a password attribute', function () {
  it('should return a TextFieldComponent of input type password', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      password: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with an email attribute', function () {
  it('should return a TextFieldComponent of input type email', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      email: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a currency attribute', function () {
  it('should return a TextFieldComponent that contains has currency style', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      currency: true
    })));
    expect((0, _find["default"])(component).call(component, 'input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a integer attribute', function () {
  it('should return a TextFieldComponent that contains has integer style', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      integer: true
    })));
    expect((0, _find["default"])(component).call(component, 'input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a numeric attribute', function () {
  it('should return a TextFieldComponent that contains has numeric style', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      numeric: true
    })));
    expect((0, _find["default"])(component).call(component, 'input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a phone attribute', function () {
  it('should return a TextFieldComponent that contains has phone style', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      phone: true
    })));
    expect((0, _find["default"])(component).call(component, 'input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a postalCode attribute', function () {
  it('should return a TextFieldComponent that contains has postalCode style', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.TextFieldComponent, {
      numeric: true
    })));
    expect((0, _find["default"])(component).call(component, 'input')).toMatchSnapshot();
  });
});