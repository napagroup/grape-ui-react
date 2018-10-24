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
// import renderer from 'react-test-renderer';

var colorOptions = [{ value: 'red', label: 'Red' }, { value: 'yellow', label: 'Yellow' }, { value: 'green', label: 'Green' }];

describe('CheckboxFieldComponent Component base', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', function () {
    var selectedValue = ['red'];
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.CheckboxFieldComponent, { id: 'exampleColor', name: 'Color', options: colorOptions, value: selectedValue }));
    expect((0, _enzymeToJson2.default)(component.find('CheckboxFieldComponent'))).toMatchSnapshot();
  });
});