import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Button } from '..';
var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

describe('Button base', function () {
  it('should return a Button', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, null, "Button Base"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an outlined Button', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      id: "buttonOutline",
      outline: true
    }, "Button Outline"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an contained Button', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      contained: true,
      id: "buttonContained"
    }, "Button Contained"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an contained raised Button', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      contained: true,
      id: "buttonContainedRaised",
      raised: true
    }, "Button Contained and Raised"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with disabled', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      disabled: true,
      id: "exampleColor"
    }, "Disabled button"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Button Component base with style', function () {
  it('should return a Button with bg and color', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      bg: "green",
      color: "white",
      id: "exampleColor"
    }, "Happy St. Patrick's Day!"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with bg and color and bgActiveColor and bgHoverColor ', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      bg: "green",
      bgActiveColor: "green.light",
      bgHoverColor: "green.dark",
      color: "white",
      id: "exampleColor"
    }, "Happy St. Patrick's Day!"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      id: "exampleColor",
      sm: true
    }, "Do this"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      id: "exampleColor",
      lg: true
    }, "Do this"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a string', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      zIndex: "500"
    }, "Do this"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      zIndex: 500
    }, "Do this"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with href with button look', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Button, {
      href: "https://www.google.com/",
      target: "_blank"
    }, "google"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with to with button look', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Button, {
      to: "/404"
    }, "404")));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button object with mailto props filled out', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Button, {
      emailHref: {
        bcc: 'email@napa.com',
        body: 'Body text for email.',
        cc: 'email@napa.com',
        subject: 'Subject line',
        to: 'email@napa.com'
      }
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});