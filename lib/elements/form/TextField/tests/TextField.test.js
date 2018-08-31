'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('TextField Component base', function () {
  it('should return a TextField object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { controlId: 'exampleFullName', controlLabel: 'Full name' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField with assistive text', function () {
  it('should return a TextField object contain Assistive Text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { assistiveText: 'Please tell me your name', controlId: 'exampleFullName', controlLabel: 'Full name' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField with validation error', function () {
  it('should return a TextField object contain Assistive Text with error style', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { controlId: 'exampleFullName', controlLabel: 'Full name', validationError: 'This is a required field.' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField with some other props', function () {
  it('should return a TextField object contain input with those other props ', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { controlId: 'exampleFullName', controlLabel: 'Full name', link: 'abc', required: true }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField  a large TextFieldComponent object', function () {
  it('should return a large TextFieldComponent object ', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { controlId: 'exampleFullName', controlLabel: 'Full name', lg: true }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', function () {
  it('should return a small TextFieldComponent object ', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { controlId: 'exampleFullName', controlLabel: 'Full name', sm: true }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', function () {
  it('should return a small TextFieldComponent object with space mb ', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { controlId: 'exampleFullName2', controlLabel: 'Full name2', m: '1' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', function () {
  it('should return a small TextFieldComponent object with a red activeColor ', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { activeColor: 'red', controlId: 'exampleFullName2', controlLabel: 'Full name2' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', function () {
  it('should return a disabled TextFieldComponent', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { activeColor: 'red', controlId: 'exampleFullName2', controlLabel: 'Full name2', disabled: true }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField a plainText TextFieldComponent', function () {
  it('should return a disabled TextFieldComponent', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { activeColor: 'red', controlId: 'exampleFullName2', controlLabel: 'Full name2', plainText: true }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField a TextFieldComponent object', function () {
  it('should return a TextFieldComponent object with a red bgColor ', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.TextField, { controlId: 'exampleFullName2', controlLabel: 'Full name2', bgColor: 'red' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});