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