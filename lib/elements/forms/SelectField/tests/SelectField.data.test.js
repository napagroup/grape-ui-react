"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom");

require("jest-styled-components");

var _reactSelectEvent = _interopRequireDefault(require("react-select-event"));

var _reactHookForm = require("react-hook-form");

var _Button = require("../../../../elements/Button");

var _forms = require("../../../../elements/forms");

var _ = require("..");

/* eslint-disable react/prop-types */
const buttonText = 'Submit form';
const labelText = 'Courses';
const defaultValues = {
  courses: {
    label: '🎨 Arts & Humanities',
    value: 'artsHumanities'
  }
};
const courseOptions = [{
  label: '🎨 Arts & Humanities',
  value: 'artsHumanities'
}, {
  label: '👔 Business',
  value: 'business'
}, {
  label: '🤖 Artificial Intelligence',
  value: 'artificialIntelligence'
}, {
  label: '🤸‍♀️ Health',
  value: 'health'
}, {
  label: '💃 Music & Dance',
  value: 'musicDance'
}, {
  label: '🌎 Language Learning',
  value: 'languageLearning'
}];

function App({
  defaultFormData,
  getFormData
}) {
  const _useForm = (0, _reactHookForm.useForm)({
    defaultValues: defaultFormData
  }),
        control = _useForm.control,
        getValues = _useForm.getValues;

  return /*#__PURE__*/_react.default.createElement(_forms.Form, {
    role: "form"
  }, /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    control: control,
    name: "courses",
    render: ({
      onChange,
      value
    }) => /*#__PURE__*/_react.default.createElement(_.SelectField, {
      labelText: labelText,
      name: "courses",
      onChange: onChange,
      options: courseOptions
    })
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    onClick: () => {
      getFormData(getValues({
        nest: true
      }));
    }
  }, buttonText));
}

describe('SelectField - data', () => {
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
  it('should have updated value when an option is selected', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var expected, actual;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          expected = {
            courses: courseOptions[1]
          };
          _context.next = 3;
          return _reactSelectEvent.default.select(_react2.screen.getByLabelText(labelText), [courseOptions[1].label]);

        case 3:
          _react2.fireEvent.click(_react2.screen.getByText(buttonText));

          actual = getFormData.mock.calls[0][0];
          expect(actual).toEqual(expected);

        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
});