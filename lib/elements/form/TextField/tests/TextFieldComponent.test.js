'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextFieldComponent = require('../TextFieldComponent');

require('jest-styled-components');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });
// import { configure } from 'enzyme';


describe('TextFieldComponent base', function () {
  it('should return a TextFieldComponent object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_TextFieldComponent.TextFieldComponent, null));
    expect((0, _enzymeToJson2.default)(component.find('TextFieldComponent'))).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_TextFieldComponent.TextFieldComponent, { sm: true }));
    expect((0, _enzymeToJson2.default)(component.find('TextFieldComponent'))).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_TextFieldComponent.TextFieldComponent, { lg: true }));
    expect((0, _enzymeToJson2.default)(component.find('TextFieldComponent'))).toMatchSnapshot();
  });
});

describe('TextField with a responsive width', function () {
  it('should return a TextFieldComponent object with a responsive width', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_TextFieldComponent.TextFieldComponent, { controlId: 'exampleFullName', controlLabel: 'Full name', width: [1, 1 / 2, 1 / 3, 1 / 4] }));
    expect((0, _enzymeToJson2.default)(component.find('TextFieldComponent'))).toMatchSnapshot();
  });
});