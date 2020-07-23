"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _testUtils = require("react-dom/test-utils");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _grid = require("../../../elements/grid");

var _Button = require("../../../elements/Button");

var _ = require("..");

/* eslint-disable react/prop-types */
describe('Alert - kitchen sink snapshot', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return Alert with all components & styling', () => {
    const UndoButton = () => /*#__PURE__*/_react.default.createElement(_Button.Button, {
      color: "white"
    }, "Undo");

    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_.Alert, {
        alertAction: /*#__PURE__*/_react.default.createElement(UndoButton, null)
      }, /*#__PURE__*/_react.default.createElement(_grid.Flex, null, /*#__PURE__*/_react.default.createElement(_grid.Box, null, "Uh oh"), /*#__PURE__*/_react.default.createElement(_grid.Box, null, "Spaghettios")))), container);
    });
    expect(container).toMatchSnapshot();
  });
});
describe('Alert - Variant Example', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return Alert with variant styling', () => {
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_.Alert, {
        variant: "danger"
      }, "Variant Alert.")), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should return Alert with custom variant styling', () => {
    const colorThemeProps = {
      colors: {
        brandDanger: 'red'
      }
    };
    (0, _testUtils.act)(() => {
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: colorThemeProps
      }, /*#__PURE__*/_react.default.createElement(_.Alert, {
        variant: "danger"
      }, "Variant Alert with Custom Theme.")), container);
    });
    expect(container).toMatchSnapshot();
  });
  it('should return Alert Toast Container', () => {
    (0, _testUtils.act)(() => {
      document.body.innerHTML = '<div id="root"></div><div id="custom"></div>';
      ReactDOM.render( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
        theme: {}
      }, /*#__PURE__*/_react.default.createElement(_.Alert.ToastContainer, {
        toastPortalTarget: document.getElementById('custom')
      })), document.getElementById('root'));
    });
    expect(document.getElementById('custom')).toMatchSnapshot();
  });
});