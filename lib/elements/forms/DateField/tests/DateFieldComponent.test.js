"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzyme = require("enzyme");

var _moment = _interopRequireDefault(require("react-day-picker/moment"));

require("moment/locale/ja");

var _component = require("../component");

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('DateFieldComponent Component base', () => {
  it('should return a DateFieldComponent object as Input', () => {
    const element = /*#__PURE__*/_react.default.createElement(_component.DateFieldComponent, null);

    expect(assertReactElement(element)).toMatchSnapshot();
  }); // TODO: Should be replace with a proper test of the underlying value, not a snapshot test.

  test.skip('should return a DateFieldComponent object as Calendar', () => {
    const element = /*#__PURE__*/_react.default.createElement(_component.DateFieldComponent, {
      calendarOnly: true,
      value: new Date('12/18/2019')
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input displaying value as 12/18/2019 with default format', () => {
    const element = /*#__PURE__*/_react.default.createElement(_component.DateFieldComponent, {
      value: new Date('12/18/2019')
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', () => {
    const element = /*#__PURE__*/_react.default.createElement(_component.DateFieldComponent, {
      format: "YYYY-MM-DD",
      value: new Date('12/18/2019')
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale', () => {
    const element = /*#__PURE__*/_react.default.createElement(_component.DateFieldComponent, {
      dayPickerProps: {
        locale: 'ja',
        localeUtils: _moment.default
      },
      format: "LL",
      formStyle: "filled",
      labelText: "Japanese",
      locale: "ja",
      name: "exampleJADateField",
      value: new Date('12/18/2019'),
      valueFormat: "LL"
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('DateFieldComponent OnChange', () => {
  it('should test Input OnChange function toBeCalledWith callbackData', () => {
    const callbackData = {
      formattedDay: '2019-12-14',
      modifiers: {},
      selectedDate: new Date('12/14/2019')
    };
    const onChangeMock = jest.fn();
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_component.DateFieldComponent, {
      onChange: onChangeMock,
      value: "12/14/2019"
    }));
    (0, _find.default)(component).call(component, 'input').simulate('change');
    expect(onChangeMock).toBeCalledWith(expect.objectContaining({
      formattedDay: callbackData.formattedDay,
      modifiers: callbackData.modifiers,
      selectedDay: callbackData.selectedDate
    }));
  });
});