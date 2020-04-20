import "core-js/modules/es.date.to-json";
import "core-js/modules/es.date.to-string";
import "core-js/modules/web.url.to-json";
import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ja';
import { DateField } from '../styled';

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

configure({
  adapter: new Adapter()
});
describe('DateField Component base', function () {
  it('should return a DateField object as Input', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, null));
    expect(assertReactElement(element)).toMatchSnapshot();
  }); // TODO: Should be replace with a proper test of the underlying value, not a snapshot test.

  test.skip('should return a DateField object as Calendar', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, {
      calendarOnly: true,
      value: new Date('12/18/2019')
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 12/18/2019 with default format', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, {
      value: new Date('12/18/2019')
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as PlainText component displaying value as 12/18/2019 with default format', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, {
      plainText: true,
      value: new Date('12/18/2019')
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, {
      format: "YYYY-MM-DD",
      value: new Date('12/18/2019')
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD and a validationError message', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, {
      format: "YYYY-MM-DD",
      validationError: "You cannot select this date",
      value: new Date('12/18/2019')
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object as disabled', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, {
      disabled: true
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object with custom menu overlay values', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, {
      menuOverlayBottom: ['auto', 20, null, 40],
      menuOverlayLeft: [100, 'auto', 300],
      menuOverlayRight: [10, null, 30, 'auto'],
      menuOverlayTop: ['auto', 20, null, 'auto']
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale (日本語ロケールの入力としてDateFieldComponentオブジェクトを返す必要があります)', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(DateField, {
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