import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { ControlLabel } from '..';
describe('ControlLabel using Theme color', function () {
  it('should return a ControlLabel object with custom color', function () {
    var theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(ControlLabel, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));
    var component = renderer.create(element);
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('ControlLabel using Theme Font Family', function () {
  it('should return a ControlLabel object with a custom font family', function () {
    var theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(ControlLabel, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));
    var component = renderer.create(element);
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});