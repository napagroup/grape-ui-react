"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require("enzyme");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact2["default"]()
});
describe('TextFieldComponent base', function () {
  it('should return a TextFieldComponent object', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      sm: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      lg: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a password attribute', function () {
  it('should return a TextFieldComponent of input type password', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      password: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with an email attribute', function () {
  it('should return a TextFieldComponent of input type email', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      email: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a currency attribute', function () {
  it('should return a TextFieldComponent that contains has currency style', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      currency: true
    })));
    expect(component.find('input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a integer attribute', function () {
  it('should return a TextFieldComponent that contains has integer style', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      integer: true
    })));
    expect(component.find('input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a numeric attribute', function () {
  it('should return a TextFieldComponent that contains has numeric style', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      numeric: true
    })));
    expect(component.find('input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a phone attribute', function () {
  it('should return a TextFieldComponent that contains has phone style', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      phone: true
    })));
    expect(component.find('input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a postalCode attribute', function () {
  it('should return a TextFieldComponent that contains has postalCode style', function () {
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.TextFieldComponent, {
      numeric: true
    })));
    expect(component.find('input')).toMatchSnapshot();
  });
});