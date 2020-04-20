import _findInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/find";
import React from 'react';
import 'jest-styled-components';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { Image } from '..';
configure({
  adapter: new Adapter()
});
describe('Image Component base', function () {
  it('should return a shallow Image object with base styling', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Image, {
      alt: "blue flower",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect(toJson(_findInstanceProperty(component).call(component, 'Img'))).toMatchSnapshot();
  });
  it('should return a Image object with a console error', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Image, {
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect(toJson(_findInstanceProperty(component).call(component, 'Img'))).toMatchSnapshot();
  });
  it('should return a Image object with maxWidth applied', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Image, {
      alt: "blue flower",
      maxWidth: "200px",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect(toJson(_findInstanceProperty(component).call(component, 'Img'))).toMatchSnapshot();
  });
  it('should return a Image object with width applied', function () {
    var component = mount( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Image, {
      alt: "blue flower",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
      width: [1, 3 / 4, 2 / 3, 1 / 2]
    })));
    expect(toJson(_findInstanceProperty(component).call(component, 'Img'))).toMatchSnapshot();
  });
});