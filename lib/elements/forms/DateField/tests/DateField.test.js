"use strict";

require("core-js/modules/es.date.to-json");

require("core-js/modules/es.date.to-string");

require("core-js/modules/web.url.to-json");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _styledComponents = require("styled-components");

var _moment = _interopRequireDefault(require("react-day-picker/moment"));

require("moment/locale/ja");

var _styled = require("../styled");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer["default"].create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});
describe('DateField Component base', function () {
  it('should return a DateField object as Input', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  }); // TODO: Should be replace with a proper test of the underlying value, not a snapshot test.

  test.skip('should return a DateField object as Calendar', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, {
      calendarOnly: true,
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 12/18/2019 with default format', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, {
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as PlainText component displaying value as 12/18/2019 with default format', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, {
      plainText: true,
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, {
      format: "YYYY-MM-DD",
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD and a validationError message', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, {
      format: "YYYY-MM-DD",
      validationError: "You cannot select this date",
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object as disabled', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, {
      disabled: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object with custom menu overlay values', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, {
      menuOverlayBottom: ['auto', 20, null, 40],
      menuOverlayLeft: [100, 'auto', 300],
      menuOverlayRight: [10, null, 30, 'auto'],
      menuOverlayTop: ['auto', 20, null, 'auto']
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale (日本語ロケールの入力としてDateFieldComponentオブジェクトを返す必要があります)', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_styled.DateField, {
      dayPickerProps: {
        locale: 'ja',
        localeUtils: _moment["default"]
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