import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { TextFieldComponent } from '..';

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

configure({
  adapter: new Adapter()
});
describe('TextFieldComponent base', function () {
  it('should return a TextFieldComponent object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, null));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      sm: true
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      lg: true
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a password attribute', function () {
  it('should return a TextFieldComponent of input type password', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      password: true
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with an email attribute', function () {
  it('should return a TextFieldComponent of input type email', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      email: true
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a currency attribute', function () {
  it('should return a TextFieldComponent that contains has currency style', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      currency: true
    })));
    expect(_findInstanceProperty(component).call(component, 'input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a integer attribute', function () {
  it('should return a TextFieldComponent that contains has integer style', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      integer: true
    })));
    expect(_findInstanceProperty(component).call(component, 'input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a numeric attribute', function () {
  it('should return a TextFieldComponent that contains has numeric style', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      numeric: true
    })));
    expect(_findInstanceProperty(component).call(component, 'input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a phone attribute', function () {
  it('should return a TextFieldComponent that contains has phone style', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      phone: true
    })));
    expect(_findInstanceProperty(component).call(component, 'input')).toMatchSnapshot();
  });
});
describe('TextFieldComponent with a postalCode attribute', function () {
  it('should return a TextFieldComponent that contains has postalCode style', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextFieldComponent, {
      numeric: true
    })));
    expect(_findInstanceProperty(component).call(component, 'input')).toMatchSnapshot();
  });
});