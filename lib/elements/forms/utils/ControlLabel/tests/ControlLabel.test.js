import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { ControlLabel } from '..';
import 'jest-styled-components';
describe('ControlLabel Component base', function () {
  it('should return a ControlLabel object', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(ControlLabel, {
      htmlFor: "forWhatId"
    }, "Label text is here")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});