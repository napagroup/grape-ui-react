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
var colorOptions = [{ value: 'red', label: 'Red', color: '#FF5630' }, { value: 'yellow', label: 'Yellow', color: '#FFC400' }, { value: 'green', label: 'Green', color: '#36B37E' }];

describe('SelectField Component base', function () {
  it('should return a SelectField object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { controlId: 'exampleColor', controlLabel: 'Color', defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions }));
    expect((0, _enzymeToJson2.default)(component.find('SelectField'))).toMatchSnapshot();
  });
});