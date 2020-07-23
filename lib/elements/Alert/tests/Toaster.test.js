"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _testUtils = require("react-dom/test-utils");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _Button = require("../../../elements/Button");

var _Alert = require("../../../elements/Alert");

jest.useFakeTimers();
describe('Alert toasts', () => {
  const alertCaption = 'hello';
  let renderUtils;
  it('should present a toast whenever a toast notification is invoked', () => {
    renderUtils = (0, _react2.render)( /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      onClick: (0, _Alert.alertToast)(alertCaption)
    }), /*#__PURE__*/_react.default.createElement(_Alert.Alert.ToastContainer, {
      limit: 2,
      toastPortalTarget: false
    })));
    const _renderUtils = renderUtils,
          getAllByText = _renderUtils.getAllByText;
    (0, _testUtils.act)(() => {
      _react2.fireEvent.click(_react2.screen.getByRole('button'));

      _react2.fireEvent.click(_react2.screen.getByRole('button'));

      jest.runAllTimers();
    });
    expect(getAllByText(alertCaption).length).toBe(2);
  });
});