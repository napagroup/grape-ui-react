"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ = require("..");

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2.default.create(element);

  return component.toJSON();
};

describe('TextField Component base', function () {
  it('should return a TextField object', function () {
    var element = _react2.default.createElement(_.TextField, {
      controlId: "exampleFullName",
      labelText: "Full name"
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with assistive text', function () {
  it('should return a TextField object contain Assistive Text', function () {
    var element = _react2.default.createElement(_.TextField, {
      assistiveText: "Please tell me your name",
      controlId: "exampleFullName",
      labelText: "Full name"
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with validation error', function () {
  it('should return a TextField object contain Assistive Text with error style', function () {
    var element = _react2.default.createElement(_.TextField, {
      controlId: "exampleFullName",
      labelText: "Full name",
      validationError: "This is a required field."
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with some other props', function () {
  it('should return a TextField object contain input with those other props ', function () {
    var element = _react2.default.createElement(_.TextField, {
      controlId: "exampleFullName",
      labelText: "Full name",
      link: "abc",
      required: true
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField  a large TextField object', function () {
  it('should return a large TextField object ', function () {
    var element = _react2.default.createElement(_.TextField, {
      controlId: "exampleFullName",
      labelText: "Full name",
      lg: true
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextField object', function () {
  it('should return a small TextField object ', function () {
    var element = _react2.default.createElement(_.TextField, {
      controlId: "exampleFullName",
      labelText: "Full name",
      sm: true
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextField object', function () {
  it('should return a small TextField object with space mb ', function () {
    var element = _react2.default.createElement(_.TextField, {
      controlId: "exampleFullName2",
      labelText: "Full name2",
      m: "1"
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextField object', function () {
  it('should return a small TextField object with a red activeColor ', function () {
    var element = _react2.default.createElement(_.TextField, {
      activeColor: "red",
      controlId: "exampleFullName2",
      labelText: "Full name2"
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextField object', function () {
  it('should return a disabled TextField', function () {
    var element = _react2.default.createElement(_.TextField, {
      activeColor: "red",
      controlId: "exampleFullName2",
      disabled: true,
      labelText: "Full name2"
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a plainText TextField', function () {
  it('should return a disabled TextField', function () {
    var element = _react2.default.createElement(_.TextField, {
      activeColor: "red",
      controlId: "exampleFullName2",
      labelText: "Full name2",
      plainText: true
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a TextField object', function () {
  it('should return a TextField object with a red bg', function () {
    var element = _react2.default.createElement(_.TextField, {
      bg: "red",
      controlId: "exampleFullName2",
      labelText: "Full name2"
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with a password attribute', function () {
  it('should return a TextField of input type password', function () {
    var element = _react2.default.createElement(_.TextField, {
      controlId: "password",
      password: true
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with an email attribute', function () {
  it('should return a TextField of input type email', function () {
    var element = _react2.default.createElement(_.TextField, {
      controlId: "email",
      email: true
    });

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});