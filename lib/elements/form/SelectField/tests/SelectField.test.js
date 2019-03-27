"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require("enzyme");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _PlainText = require("../../../../elements/form/PlainText");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2.default.create(element);

  return component.toJSON();
};

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact2.default()
});
var colorOptions = [{
  color: '#FF5630',
  label: 'Red',
  value: 'red'
}, {
  color: '#FFC400',
  label: 'Yellow',
  value: 'yellow'
}, {
  color: '#36B37E',
  label: 'Green',
  value: 'green'
}];
describe('SelectField Component base', function () {
  it('should return a SelectField that contains SelectFieldComponent object', function () {
    var element = _react2.default.createElement(_.SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField that contains ControlLabel object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    }));
    expect(component.find('label')).toMatchSnapshot();
  });
});
describe('SelectField Component with assistive text', function () {
  it('should return a SelectField with assistive text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      value: colorOptions[1]
    }));
    expect(component.find('div[id="exampleColorHelp"]')).toMatchSnapshot();
  });
  it('should return a SelectField with error text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      validationError: "This is a required field.",
      value: colorOptions[1]
    }));
    expect(component.find('div[id="exampleColorError"]')).toMatchSnapshot();
  });
});
describe('SelectField Component with ControlLabel with *', function () {
  it('should return a SelectField  with ControlLabel with *', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      required: true,
      value: colorOptions[1]
    }));
    expect(component.find('label')).toMatchSnapshot();
  });
});
describe('SelectField Component with style', function () {
  it('should return a SelectFieldComponent with props where lg={true}', function () {
    var element = _react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      lg: true,
      options: colorOptions,
      value: colorOptions[1]
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent with props where sm={true}', function () {
    var element = _react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      sm: true,
      value: colorOptions[1]
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with background-color: hsl(4.1,89.6%,58.4%) in c0 and c2 ', function () {
    var element = _react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      bg: "red",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      value: colorOptions[1]
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectField with orange borderColor with border: 1px solid orange in c1;', function () {
    var element = _react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      borderColor: "orange",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      options: colorOptions,
      value: colorOptions[1]
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with space', function () {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', function () {
    var element = _react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color",
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      m: 4,
      options: colorOptions,
      p: 4,
      value: colorOptions[1]
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectField Component with plainText or disabled', function () {
  it('should return a SelectField with plainText with <div> Yellow </div> rendered', function () {
    var element = _react2.default.createElement(_.SelectField, {
      controlId: "exampleColor",
      id: "exampleColor",
      labelText: "Color",
      plainText: true,
      value: colorOptions[1]
    });

    var component = (0, _enzyme.mount)(element);
    expect(component.find(_PlainText.PlainText).find('div')).toMatchSnapshot();
  });
  it('should return an input with disabled: true', function () {
    var element = _react2.default.createElement(_.SelectField, {
      controlId: "exampleColor",
      disabled: true,
      labelText: "Color",
      value: colorOptions[1]
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
}); // TODO: This test down below isn't running.  Not sure why.  --R

describe('SelectField Component with react-select predefined props', function () {
  it('should return a SelectField with isClearable set to true', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, {
      assistiveText: "Please tell me your color, hit x to clear",
      controlId: "exampleColor",
      id: "exampleColor",
      isClearable: true,
      labelText: "Color",
      m: 4,
      options: colorOptions,
      p: 4,
      placeholder: "Please search your color"
    }));
    expect(component.find('SelectField').props().isClearable).toEqual(true);
  });
});