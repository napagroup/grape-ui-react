"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _reactHookForm = require("react-hook-form");

var _Button = require("../../../../elements/Button");

var _forms = require("../../../../elements/forms");

var _ = require("..");

/* eslint-disable react/prop-types */
const buttonText = 'Submit form';
const enrolleeNameLabelText = 'Enrollee Name';
const defaultValues = {
  enrolleeName: 'Student'
};

function App({
  defaultFormData,
  getFormData
}) {
  const _useForm = (0, _reactHookForm.useForm)({
    defaultValues: defaultFormData
  }),
        register = _useForm.register,
        getValues = _useForm.getValues;

  return /*#__PURE__*/_react.default.createElement(_forms.Form, {
    role: "form"
  }, /*#__PURE__*/_react.default.createElement(_.TextField, {
    inputRef: register,
    labelText: enrolleeNameLabelText,
    name: "enrolleeName"
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: () => {
      getFormData(getValues({
        nest: true
      }));
    }
  }, buttonText));
}

describe('TextField - data', () => {
  let getFormData;
  beforeEach(() => {
    jest.clearAllMocks();
    getFormData = jest.fn();
    (0, _react2.render)( /*#__PURE__*/_react.default.createElement(App, {
      defaultFormData: defaultValues,
      getFormData: getFormData
    }));
  });
  it('should have the default value', () => {
    _react2.fireEvent.click(_react2.screen.getByText(buttonText));

    const actual = getFormData.mock.calls[0][0];
    expect(actual).toEqual(defaultValues);
  });
  it('should have updated value when text is changed', () => {
    const expected = {
      enrolleeName: 'Joules D.'
    };

    _react2.fireEvent.change(_react2.screen.getByLabelText(enrolleeNameLabelText), {
      target: {
        value: expected.enrolleeName
      }
    });

    _react2.fireEvent.click(_react2.screen.getByText(buttonText));

    const actual = getFormData.mock.calls[0][0];
    expect(actual).toEqual(expected);
  });
});