"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _fill = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/fill"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _reactHookForm = require("react-hook-form");

var _Button = require("../../../../elements/Button");

var _ = require("..");

/* eslint-disable react/prop-types */
const defaultValues = {
  courses: ['🎨', false, false, false]
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
        register = _useForm.register,
        setValue = _useForm.setValue,
        watch = _useForm.watch;

  const courses = watch('courses') || [];

  const handleSelectAll = e => {
    var _context;

    const checked = e.target.checked;
    setValue('courses', checked ? (0, _map.default)(options).call(options, option => option.value) : (0, _fill.default)(_context = new Array(options.length)).call(_context, false));
  };

  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: {}
  }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
    hasSelectAll: true,
    inputRef: register,
    name: "courses",
    onChangeSelectAll: handleSelectAll,
    options: options,
    values: courses
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: () => {
      getFormData(getValues({
        nest: true
      }));
    }
  }));
}

describe('CheckboxField - data', () => {
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
    expect(actual.courses_selectAll).toEqual(false);
  });
  it('should have the option checked when selected', () => {
    const label = '🌎 Language Learning';

    _react2.fireEvent.click(_react2.screen.getByLabelText(label));

    _react2.fireEvent.click(_react2.screen.getByRole('button'));

    const actual = getFormData.mock.calls[0][0];
    const expected = [...defaultValues.courses];
    expected[3] = '🌎';
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual(false);
  });
  it('should have Select All checked when all options are selected', () => {
    var _context2;

    (0, _forEach.default)(_context2 = [1, 2, 3]).call(_context2, idx => _react2.fireEvent.click(_react2.screen.getByLabelText(courseOptions[idx].label)));

    _react2.fireEvent.click(_react2.screen.getByRole('button'));

    const actual = getFormData.mock.calls[0][0];
    const expected = (0, _map.default)(courseOptions).call(courseOptions, option => option.value);
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual('true');
  });
  it('should have all options checked when Select All is selected', () => {
    const label = 'courses_selectAll';

    _react2.fireEvent.click(_react2.screen.getByAltText(label));

    _react2.fireEvent.click(_react2.screen.getByRole('button'));

    const actual = getFormData.mock.calls[0][0];
    const expected = (0, _map.default)(courseOptions).call(courseOptions, option => option.value);
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual('true');
  });
  it('should have all options unchecked when Select All is unselected', () => {
    const label = 'courses_selectAll'; // Select All checked

    _react2.fireEvent.click(_react2.screen.getByAltText(label)); // Select All unchecked


    _react2.fireEvent.click(_react2.screen.getByAltText(label));

    _react2.fireEvent.click(_react2.screen.getByRole('button'));

    const actual = getFormData.mock.calls[0][0];
    const expected = (0, _map.default)(courseOptions).call(courseOptions, option => false);
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual(false);
  });
  it('should have Select All unchecked when an option is unselected', () => {
    const label = 'courses_selectAll'; // Select All checked

    _react2.fireEvent.click(_react2.screen.getByAltText(label)); // Uncheck an option


    _react2.fireEvent.click(_react2.screen.getByLabelText(courseOptions[0].label));

    _react2.fireEvent.click(_react2.screen.getByRole('button'));

    const actual = getFormData.mock.calls[0][0];
    const expected = [...(0, _map.default)(courseOptions).call(courseOptions, option => option.value)];
    expected[0] = false;
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual(false);
  });
});