'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index');

require('jest-styled-components');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });
// import { configure } from 'enzyme';


describe('Form Component base', function () {
  it('should return a Form object without class inline', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_index.Form, null));
    expect((0, _enzymeToJson2.default)(component.find('Form'))).toMatchSnapshot();
  });
  it('should return a Form object with class inline', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_index.Form, { formInline: true }));
    expect((0, _enzymeToJson2.default)(component.find('Form'))).toMatchSnapshot();
  });
});