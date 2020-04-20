import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Form, SelectField, TextField } from 'src/elements/forms';
import 'jest-styled-components';

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

var colorOptions = [{
  color: '#FF5630',
  label: 'Red',
  value: 'red'
}, {
  color: '#FFC400',
  label: 'Yellow',
  value: 'yellow'
}, {
  color: '#36B37E',
  label: 'Green',
  value: 'green'
}];
describe('Form Component base', function () {
  it('should return a Form object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Form, null));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with flex direction column', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Form, {
      display: "flex",
      flexDirection: "column"
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with div that do not get formStyle="filled"', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Form, {
      display: "flex",
      formStyle: "filled"
    }, /*#__PURE__*/React.createElement("div", {
      id: "1"
    })));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object and textField with filled formStyle', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Form, {
      display: "flex",
      formStyle: "filled"
    }, /*#__PURE__*/React.createElement(TextField, {
      controlId: "exampleFullName",
      labelText: "Full name"
    })));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with filled formStyle and textField with outlined', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Form, {
      display: "flex",
      formStyle: "filled"
    }, /*#__PURE__*/React.createElement(TextField, {
      controlId: "exampleFullName",
      formStyle: "outlined",
      labelText: "Full name"
    })));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with 2 filled formStyle with 2 textField and 1 SelectField', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Form, {
      display: "flex",
      formStyle: "filled"
    }, /*#__PURE__*/React.createElement(TextField, {
      controlId: "exampleFullName",
      labelText: "Full name"
    }), /*#__PURE__*/React.createElement(TextField, {
      controlId: "address",
      labelText: "Address"
    }), /*#__PURE__*/React.createElement(SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    })));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});