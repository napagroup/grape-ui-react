"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _dom = require("@testing-library/dom");

require("@testing-library/jest-dom");

var _react2 = require("@testing-library/react");

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

describe('When supporting a forward ref for TextField ', () => {
  let renderUtils;
  it('should reference the underlying input element', () => {
    const ref = _react.default.createRef();

    const register = e => {
      ref.current = e;
    };

    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      inputRef: register,
      labelText: "name",
      name: "name"
    })));
    const _renderUtils = renderUtils,
          container = _renderUtils.container;
    const input = (0, _dom.getByLabelText)(container, 'name');
    expect(input).toEqual(ref.current);
  });
  it('should reference the underlying Cleave DOM element', () => {
    const ref = _react.default.createRef();

    const register = e => {
      ref.current = e;
    };

    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      inputRef: register,
      integer: true,
      labelText: "Quantity",
      name: "quantity"
    })));
    const _renderUtils2 = renderUtils,
          container = _renderUtils2.container;
    const input = (0, _dom.getByLabelText)(container, 'Quantity');
    expect(input).toEqual(ref.current);
  });
  it('should reference the underlying TextareaAutosize DOM element', () => {
    const ref = _react.default.createRef();

    const expected = document.createElement('textarea');

    const register = e => {
      ref.current = e;
    };

    _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.TextField, {
      inputRef: register,
      labelText: "Description",
      multiline: true,
      name: "description"
    })), {
      createNodeMock: () => expected
    });

    expect(ref.current).toEqual(expected);
  });
});