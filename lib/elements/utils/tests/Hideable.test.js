/* eslint-disable react/prop-types */
import React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { withHideable } from '..';
describe('Table - basic rendering', function () {
  var container;
  beforeEach(function () {
    container = document.createElement('div');
  });

  function MyComponent(props) {
    return /*#__PURE__*/React.createElement("div", props, "innerText");
  }

  var MyHideable = withHideable(MyComponent);
  it('should not return any markup if no children', function () {
    var hide = true;
    act(function () {
      ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/React.createElement(MyHideable, {
        hide: hide
      })), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should not have rendered children when hide is true', function () {
    act(function () {
      var hide = true;
      ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/React.createElement(MyHideable, {
        hide: hide
      }, /*#__PURE__*/React.createElement("div", {
        title: "test-div-children"
      }, "innerText"))), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should render children when hide is false', function () {
    act(function () {
      var hide = false;
      ReactDOM.render( /*#__PURE__*/React.createElement(ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/React.createElement(MyHideable, {
        hide: hide
      }, /*#__PURE__*/React.createElement("div", {
        title: "test-div-children"
      }, "innerText"))), container);
    });
    expect(container).toMatchSnapshot();
  });
});