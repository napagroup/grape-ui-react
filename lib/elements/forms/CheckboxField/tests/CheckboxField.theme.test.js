import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { CheckboxField } from '..';
var colorOptions = [{
  label: 'Red',
  value: 'red'
}, {
  label: 'Yellow',
  value: 'yellow'
}, {
  label: 'Green',
  value: 'green'
}];
var selectedValue = ['red'];
describe('CheckboxField using Theme color', function () {
  it('should return a CheckboxField object with custom color', function () {
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
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light",
      controlId: "checkbox",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }, "Lorem Ipsum"));
    var component = renderer.create(element);
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('CheckboxField using Theme Font Family', function () {
  it('should return a CheckboxField object with a custom font family', function () {
    var theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "checkbox",
      fontFamily: "trueSpace",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }, "Lorem Ipsum"));
    var component = renderer.create(element);
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a CheckboxField object with a custom base font family defined', function () {
    var theme = {
      fonts: {
        base: 'Nunito, sans-serif'
      }
    };
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      color: "red",
      controlId: "checkbox",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      sm: true,
      value: selectedValue
    }, "This should be Nunito and red"));
    var component = renderer.create(element);
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});