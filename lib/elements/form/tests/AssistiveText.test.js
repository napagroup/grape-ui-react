'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AssistiveText = require('../AssistiveText');

require('jest-styled-components');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _enzymeToJson = require('enzyme-to-json');

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });
// import { configure } from 'enzyme';


describe('Assistive Text Component base', function () {
  it('should return an Assistive Text object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(
      _AssistiveText.AssistiveText,
      { id: 'assitiveTextIdHelp' },
      'Helper text is here'
    ));
    expect((0, _enzymeToJson2.default)(component.find('AssistiveText'))).toMatchSnapshot();
  });
  it('should return an Assistive Text object with danger text color', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(
      _AssistiveText.AssistiveText,
      { id: 'assitiveTextIdError', color: 'brandDanger' },
      'Error text is here'
    ));
    expect((0, _enzymeToJson2.default)(component.find('AssistiveText'))).toMatchSnapshot();
  });
});