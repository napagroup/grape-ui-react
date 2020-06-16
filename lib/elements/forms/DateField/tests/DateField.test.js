"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("jest-styled-components");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _styledComponents = require("styled-components");

var MomentLocaleUtils = _interopRequireWildcard(require("../../../../utils/momentHelpers"));

require("moment/locale/ja");

var _styled = require("../styled");

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('DateField Component base', () => {
  it('should return a DateField object as Input', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  }); // TODO: Should be replace with a proper test of the underlying value, not a snapshot test.

  test.skip('should return a DateField object as Calendar', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, {
      calendarOnly: true,
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 12/18/2019 with default format', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, {
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as PlainText component displaying value as 12/18/2019 with default format', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, {
      plainText: true,
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, {
      format: "YYYY-MM-DD",
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD and a validationError message', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, {
      format: "YYYY-MM-DD",
      validationError: "You cannot select this date",
      value: new Date('12/18/2019')
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object as disabled', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, {
      disabled: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object with custom menu overlay values', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, {
      menuOverlayBottom: ['auto', 20, null, 40],
      menuOverlayLeft: [100, 'auto', 300],
      menuOverlayRight: [10, null, 30, 'auto'],
      menuOverlayTop: ['auto', 20, null, 'auto']
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale (日本語ロケールの入力としてDateFieldComponentオブジェクトを返す必要があります)', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_styled.DateField, {
      dayPickerProps: {
        locale: 'ja',
        localeUtils: MomentLocaleUtils
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