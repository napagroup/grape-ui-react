"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _reactHookForm = require("react-hook-form");

var _Button = require("../../../../elements/Button");

var _ = require("..");

/* eslint-disable react/prop-types */
const buttonText = 'Submit form';
const defaultValues = {
  enrollmentDate: new Date('2020-07-14')
};

function App({
  defaultFormData,
  getFormData
}) {
  const _useForm = (0, _reactHookForm.useForm)({
    defaultValues: defaultFormData
  }),
        control = _useForm.control,
        getValues = _useForm.getValues;

  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    control: control,
    name: "enrollmentDate",
    render: ({
      onChange: _onChange,
      onBlur,
      value
    }) => /*#__PURE__*/_react.default.createElement(_.DateField, {
      labelText: "Enrollment Date",
      locale: "it",
      onChange: selected => _onChange(selected.selectedDay)
    })
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: () => {
      getFormData(getValues({
        nest: true
      }));
    }
  }, buttonText));
}

describe('DateField - data', () => {
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
  it('should have updated value when a new date is selected', () => {
    _react2.fireEvent.click(_react2.screen.getByPlaceholderText('M/D/YYYY'));

    const cells = _react2.screen.getAllByRole('gridcell');

    _react2.fireEvent.click(cells[30]);

    _react2.fireEvent.click(_react2.screen.getByText(buttonText));

    const actual = getFormData.mock.calls[0][0];
    expect(actual.enrollmentDate.getDate()).toEqual(31);
  });
});