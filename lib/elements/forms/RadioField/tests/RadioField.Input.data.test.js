"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _reactHookForm = require("react-hook-form");

var _Button = require("../../../../elements/Button");

var _forms = require("../../../../elements/forms");

var _ = require("..");

/* eslint-disable react/no-array-index-key */

/* eslint-disable react/prop-types */
const defaultValues = {
  courses: '🎨'
};
const courseOptions = [{
  label: '🎨 Arts & Humanities',
  value: '🎨'
}, {
  label: '🤸‍♀️ Health',
  value: '🤸‍♀️'
}, {
  label: '💃 Music & Dance',
  value: '💃'
}, {
  label: '🌎 Language Learning',
  value: '🌎'
}];

function App({
  defaultFormData,
  getFormData,
  options
}) {
  const _useForm = (0, _reactHookForm.useForm)({
    defaultValues: defaultFormData
  }),
        getValues = _useForm.getValues,
        register = _useForm.register;

  const radioInputs = (0, _map.default)(courseOptions).call(courseOptions, (option, idx) => /*#__PURE__*/_react.default.createElement(_.RadioField.Input, {
    key: "courses[".concat(idx, "]"),
    inputRef: register,
    name: "courses",
    option: option,
    value: option.value
  }));
  return /*#__PURE__*/_react.default.createElement(_forms.Form, {
    role: "form"
  }, radioInputs, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: () => {
      getFormData(getValues({
        nest: true
      }));
    }
  }));
}

describe('RadioField.Input - data', () => {
  let getFormData;
  beforeEach(() => {
    jest.clearAllMocks();
    getFormData = jest.fn();
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(App, {
      defaultFormData: defaultValues,
      getFormData: getFormData,
      options: courseOptions
    }));
  });
  it('should have options with default selections', () => {
    _react2.fireEvent.click(_react2.screen.getByRole('button'));

    const actual = getFormData.mock.calls[0][0];
    expect(actual.courses).toEqual(defaultValues.courses);
  });
  it('should have the option checked when selected', () => {
    const _courseOptions = courseOptions[courseOptions.length - 1],
          label = _courseOptions.label,
          value = _courseOptions.value;

    _react2.fireEvent.click(_react2.screen.getByLabelText(label));

    _react2.fireEvent.click(_react2.screen.getByRole('button'));

    const actual = getFormData.mock.calls[0][0];
    const expected = value;
    expect(actual.courses).toEqual(expected);
  });
});