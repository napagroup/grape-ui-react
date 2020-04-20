import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { CheckboxField } from '..';
import 'jest-styled-components';
var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

var colorOptions = [{
  label: 'Red',
  value: 'red'
}, {
  label: 'Yellow',
  value: 'yellow'
}, {
  label: 'Green',
  value: 'green'
}];
describe('CheckboxFieldComponent Component base', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with disabled', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      disabled: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with assistive text', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent with assistive text', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      assistiveText: "Tell me your color",
      controlId: "exampleColor",
      isRequired: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: ""
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with required', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent is required', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      isRequired: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: ""
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with validationError', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent validationError', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      assistiveText: "",
      controlId: "exampleColor",
      isRequired: true,
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      validationError: "This is required",
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 1 plaintext', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with plainText', function () {
    var selectedValue = colorOptions[0];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      assistiveText: "Please select one",
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      plainText: true,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with 2 plaintext', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with disabled', function () {
    var selectedValue = [colorOptions[0], colorOptions[1]];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      plainText: true,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxFieldComponent Component with flex-direction', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object with flex-direction', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with no label', function () {
  it('should return a CheckboxField that contains no ControlLabel', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom assistive text props', function () {
  it('should return a CheckboxField that contains custom assistive text props', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      assistiveText: "Select at least one",
      assistiveTextProps: {
        px: 0,
        py: 3
      },
      controlId: "exampleColor",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom controlGroupProps', function () {
  it('should return a CheckboxField that contains custom controlGroupProps', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlGroupProps: {
        pb: 0,
        pt: 0
      },
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom controlLabelProps', function () {
  it('should return a CheckboxField that contains custom controlLabelProps', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      controlLabelProps: {
        px: 0,
        py: 1
      },
      labelText: "Color",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('CheckboxField Component with custom wrapper props', function () {
  it('should return a CheckboxField that contain custom wrapper props', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(CheckboxField, {
      controlId: "exampleColor",
      flexDirection: ['column', 'row'],
      name: "Color",
      options: colorOptions,
      value: selectedValue,
      wrapperProps: {
        pb: 1,
        px: 2
      }
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});