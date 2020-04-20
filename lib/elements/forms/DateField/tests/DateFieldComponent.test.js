import "core-js/modules/es.date.to-json";
import "core-js/modules/es.date.to-string";
import "core-js/modules/web.url.to-json";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ja';
import { DateFieldComponent } from '../component';

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

configure({
  adapter: new Adapter()
});
describe('DateFieldComponent Component base', function () {
  it('should return a DateFieldComponent object as Input', function () {
    var element = /*#__PURE__*/React.createElement(DateFieldComponent, null);
    expect(assertReactElement(element)).toMatchSnapshot();
  }); // TODO: Should be replace with a proper test of the underlying value, not a snapshot test.

  test.skip('should return a DateFieldComponent object as Calendar', function () {
    var element = /*#__PURE__*/React.createElement(DateFieldComponent, {
      calendarOnly: true,
      value: new Date('12/18/2019')
    });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input displaying value as 12/18/2019 with default format', function () {
    var element = /*#__PURE__*/React.createElement(DateFieldComponent, {
      value: new Date('12/18/2019')
    });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', function () {
    var element = /*#__PURE__*/React.createElement(DateFieldComponent, {
      format: "YYYY-MM-DD",
      value: new Date('12/18/2019')
    });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale', function () {
    var element = /*#__PURE__*/React.createElement(DateFieldComponent, {
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
    var component = mount( /*#__PURE__*/React.createElement(DateFieldComponent, {
      onChange: onChangeMock,
      value: "12/14/2019"
    }));

    _findInstanceProperty(component).call(component, 'input').simulate('change');

    expect(onChangeMock).toBeCalledWith(expect.objectContaining({
      formattedDay: callbackData.formattedDay,
      modifiers: callbackData.modifiers,
      selectedDay: callbackData.selectedDate
    }));
  });
});