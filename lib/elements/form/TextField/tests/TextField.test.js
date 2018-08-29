'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('../TextField');

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
    var component = (0, _enzyme.mount)(_react2.default.createElement(_TextField.TextField, { controlId: 'exampleFullName', controlLabel: 'Full name' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField with assistive text', function () {
  it('should return a TextField object contain Assistive Text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_TextField.TextField, { assistiveText: 'Please tell me your name', controlId: 'exampleFullName', controlLabel: 'Full name' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField with validation error', function () {
  it('should return a TextField object contain Assistive Text with error style', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_TextField.TextField, { controlId: 'exampleFullName', controlLabel: 'Full name', validationError: 'This is a require field.' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});
describe('TextField with some other props', function () {
  it('should return a TextField object contain input with those other props ', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_TextField.TextField, { controlId: 'exampleFullName', controlLabel: 'Full name', link: 'abc', onChange: 'changethis' }));
    expect((0, _enzymeToJson2.default)(component.find('TextField'))).toMatchSnapshot();
  });
});