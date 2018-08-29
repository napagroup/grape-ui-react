'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ControlLabel = require('../ControlLabel');

require('jest-styled-components');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });
// import { configure } from 'enzyme';


describe('ControlLabel Component base', function () {
  it('should return a ControlLabel object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(
      _ControlLabel.ControlLabel,
      { 'for': 'forWhatId' },
      'Label text is here'
    ));
    expect((0, _enzymeToJson2.default)(component.find('ControlLabel'))).toMatchSnapshot();
  });
});