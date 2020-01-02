"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require("enzyme");

var _moment = require("react-day-picker/moment");

var _moment2 = _interopRequireDefault(_moment);

require("moment/locale/ja");

var _component = require("../component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact2["default"]()
});
describe('DateFieldComponent Component base', function () {
  it('should return a DateFieldComponent object as Input', function () {
    var element = _react2["default"].createElement(_component.DateFieldComponent, null);

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Calendar', function () {
    var element = _react2["default"].createElement(_component.DateFieldComponent, {
      calendarOnly: true,
      value: new Date('12/18/2019')
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input displaying value as 12/18/2019 with default format', function () {
    var element = _react2["default"].createElement(_component.DateFieldComponent, {
      value: new Date('12/18/2019')
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', function () {
    var element = _react2["default"].createElement(_component.DateFieldComponent, {
      format: "YYYY-MM-DD",
      value: new Date('12/18/2019')
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale', function () {
    var element = _react2["default"].createElement(_component.DateFieldComponent, {
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
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('DateFieldComponent OnChange', function () {
  it('should test Input OnChange function toBeCalledWith callbackData', function () {
    var callbackData = {
      formattedDay: '2019-12-14',
      modifiers: {},
      selectedDate: new Date('12/14/2019')
    };
    var onChangeMock = jest.fn();
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_component.DateFieldComponent, {
      onChange: onChangeMock,
      value: "12/14/2019"
    }));
    component.find('input').simulate('change');
    expect(onChangeMock).toBeCalledWith(expect.objectContaining({
      formattedDay: callbackData.formattedDay,
      modifiers: callbackData.modifiers,
      selectedDay: callbackData.selectedDate
    }));
  });
  it('should test Calendar OnChange function toBeCalledWith callbackData', function () {
    var callbackData = {
      formattedDay: '2019-12-02'
    };
    var onChangeMock = jest.fn();
    var component = (0, _enzyme.mount)(_react2["default"].createElement(_component.DateFieldComponent, {
      calendarOnly: true,
      onChange: onChangeMock
    }));
    component.find('[aria-label="Mon Dec 2, 2019"]').simulate('click');
    expect(onChangeMock).toBeCalledWith(expect.objectContaining({
      formattedDay: callbackData.formattedDay
    }));
  });
});