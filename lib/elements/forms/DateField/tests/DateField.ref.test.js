import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { DateField } from '..';
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
    }, /*#__PURE__*/React.createElement(DateField, {
      inputRef: register,
      labelText: "Desired Date",
      name: "desiredDate"
    })));
    expect(_findInstanceProperty(component).call(component, 'input').instance()).toEqual(ref.current);
  });
});