"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

const emptyTheme = {};

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

const colorOptions = [{
  label: 'Red',
  value: 'red'
}, {
  label: 'Yellow',
  value: 'yellow'
}, {
  label: 'Green',
  value: 'green'
}];
const selectedValue = ['red', false, false];
describe('CheckboxFieldComponent Component base', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with disabled', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      disabled: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with assistive text', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent with assistive text', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      assistiveText: "Tell me your color",
      controlId: "exampleColor",
      isRequired: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      values: ""
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with required', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent is required', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      isRequired: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      values: ""
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with validationError', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent validationError', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      assistiveText: "",
      controlId: "exampleColor",
      isRequired: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      validationError: "This is required",
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 1 plaintext', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with plainText', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      assistiveText: "Please select one",
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      plainText: true,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 2 plaintext', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', () => {
    const mySelectedValues = ['red', 'yellow', 'false'];

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      plainText: true,
      values: mySelectedValues
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with no label', () => {
  it('should return a CheckboxField that contains no ControlLabel', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      name: "Color",
      options: colorOptions,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom assistive text props', () => {
  it('should return a CheckboxField that contains custom assistive text props', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      assistiveText: "Select at least one",
      assistiveTextProps: {
        px: 0,
        py: 3
      },
      controlId: "exampleColor",
      name: "Color",
      options: colorOptions,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom controlGroupProps', () => {
  it('should return a CheckboxField that contains custom controlGroupProps', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlGroupProps: {
        pb: 0,
        pt: 0
      },
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      name: "Color",
      options: colorOptions,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom controlLabelProps', () => {
  it('should return a CheckboxField that contains custom controlLabelProps', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      controlLabelProps: {
        px: 0,
        py: 1
      },
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      values: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom wrapper props', () => {
  it('should return a CheckboxField that contain custom wrapper props', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      name: "Color",
      options: colorOptions,
      values: selectedValue,
      wrapperProps: {
        pb: 1,
        px: 2
      }
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});