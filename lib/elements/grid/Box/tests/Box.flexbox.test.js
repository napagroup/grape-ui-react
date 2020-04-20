import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../..';
var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

describe('Box Component flexbox base', function () {
  it('should return a Box object with alignSelf', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Flex, {
      alignItems: "center"
    }, /*#__PURE__*/React.createElement(Box, null, "I stay centered."), /*#__PURE__*/React.createElement(Box, {
      alignSelf: "baseline"
    }, "I am at baseline."), /*#__PURE__*/React.createElement(Box, {
      alignSelf: ['auto', 'flex-start', 'flex-end', 'stretch']
    }, "I am responsive.")));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flex', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, {
      flex: 1
    }, "I have Flex of 1"), /*#__PURE__*/React.createElement(Box, {
      flex: [2, 1, 3, 2]
    }, "I have a responsive Flex"), /*#__PURE__*/React.createElement(Box, {
      flex: "1 1 auto"
    }, "I have a flex string")));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexBasis', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, {
      flexBasis: 1
    }, "I have flex basis of 1"), /*#__PURE__*/React.createElement(Box, {
      flexBasis: [2, 1, 3, 2]
    }, "I have a responsive flex basis"), /*#__PURE__*/React.createElement(Box, {
      flexBasis: "auto"
    }, "I have flex basis of 1")));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexGrow', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, {
      flexGrow: 1
    }, "I have flex grow of 1"), /*#__PURE__*/React.createElement(Box, {
      flexGrow: [2, 1, 3, 2]
    }, "I have a responsive flex grow")));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexShrink', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, {
      flexShrink: 1
    }, "I have flex shrink of 1"), /*#__PURE__*/React.createElement(Box, {
      flexShrink: [2, 1, 3, 2]
    }, "I have a responsive flex shrink")));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with justifySelf', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Flex, {
      justifyContent: "center"
    }, /*#__PURE__*/React.createElement(Box, null, "I stay centered."), /*#__PURE__*/React.createElement(Box, {
      justifySelf: "baseline"
    }, "I am at baseline."), /*#__PURE__*/React.createElement(Box, {
      justifySelf: ['auto', 'flex-start', 'flex-end', 'stretch']
    }, "I am responsive.")));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with order', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(Flex, null, /*#__PURE__*/React.createElement(Box, {
      order: [1, 2, 3, 4]
    }, "I am first xs, second sm, third md, fourth lg"), /*#__PURE__*/React.createElement(Box, {
      order: [2, 1, 4, 3]
    }, "I am second xs, first sm, fourth md, third lg"), /*#__PURE__*/React.createElement(Box, {
      order: [3, 4, 2, 1]
    }, "I am third xs, fourth sm, second md, first lg"), /*#__PURE__*/React.createElement(Box, {
      order: [4, 3, 1, 2]
    }, "I am fourth xs, third sm, first md, second lg")));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});