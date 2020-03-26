"use strict";

require("jest-styled-components");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require("enzyme");

var _styledComponents = require("styled-components");

var _moment = require("react-day-picker/moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment/locale/ja");

var _styled = require("../styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact2["default"]()
});
describe('DateField Component base', function () {
  it('should return a DateField object as Input', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  }); // TODO: Should be replace with a proper test of the underlying value, not a snapshot test.

  test.skip('should return a DateField object as Calendar', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, {
      calendarOnly: true,
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 12/18/2019 with default format', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, {
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as PlainText component displaying value as 12/18/2019 with default format', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, {
      plainText: true,
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, {
      format: "YYYY-MM-DD",
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD and a validationError message', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, {
      format: "YYYY-MM-DD",
      validationError: "You cannot select this date",
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object as disabled', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, {
      disabled: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object with custom menu overlay values', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, {
      menuOverlayBottom: ['auto', 20, null, 40],
      menuOverlayLeft: [100, 'auto', 300],
      menuOverlayRight: [10, null, 30, 'auto'],
      menuOverlayTop: ['auto', 20, null, 'auto']
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale (日本語ロケールの入力としてDateFieldComponentオブジェクトを返す必要があります)', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_styled.DateField, {
      dayPickerProps: {
        locale: 'ja',
        localeUtils: _moment2["default"]
      },
      format: "LL",
      formStyle: "filled",
      labelText: "Japanese",
      locale: "ja",
      name: "exampleJADateField",
      value: new Date('12/18/2019'),
      valueFormat: "LL"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});