import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { TextField } from '..';
configure({
  adapter: new Adapter()
});
describe('When supporting a forward ref for TextField ', function () {
  it('should reference the underlying input element', function () {
    var ref = React.createRef();

    var register = function register(e) {
      ref.current = e;
    };

    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextField, {
      inputRef: register,
      labelText: "name",
      name: "name"
    })));
    expect(_findInstanceProperty(component).call(component, 'input').instance()).toEqual(ref.current);
  });
  it('should reference the underlying Cleave DOM element', function () {
    var ref = React.createRef();

    var register = function register(e) {
      ref.current = e;
    };

    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextField, {
      inputRef: register,
      integer: true,
      labelText: "Quantity",
      name: "quantity"
    })));
    expect(_findInstanceProperty(component).call(component, 'input').instance()).toEqual(ref.current);
  });
  it('should reference the underlying TextareaAutosize DOM element', function () {
    var ref = React.createRef();

    var register = function register(e) {
      ref.current = e;
    };

    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(TextField, {
      inputRef: register,
      labelText: "Description",
      multiline: true,
      name: "description"
    })));
    expect(_findInstanceProperty(component).call(component, 'textarea').instance()).toEqual(ref.current);
  });
});