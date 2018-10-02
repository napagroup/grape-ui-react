'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzyme = require('enzyme');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });
var colorOptions = [{ value: 'red', label: 'Red', color: '#FF5630' }, { value: 'yellow', label: 'Yellow', color: '#FFC400' }, { value: 'green', label: 'Green', color: '#36B37E' }];

describe('SelectField Component base', function () {
  it('should return a SelectField that contains SelectFieldComponent object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', options: colorOptions, sm: true, value: colorOptions[1] }));
    expect(component.find('SelectFieldComponent').html()).toMatchSnapshot();
  });
  it('should return a SelectField that contains ControlLabel object', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', options: colorOptions, sm: true, value: colorOptions[1] }));
    expect(component.find('ControlLabel').html()).toMatchSnapshot();
  });
});

describe('SelectField Component with assistive text', function () {
  it('should return a SelectField with assistive text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', options: colorOptions, value: colorOptions[1] }));
    expect(component.find('AssistiveText').html()).toMatchSnapshot();
  });

  it('should return a SelectField with error text', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', options: colorOptions, validationError: 'This is a required field.', value: colorOptions[1] }));
    expect(component.find('AssistiveText').html()).toMatchSnapshot();
  });
});

describe('SelectField Component with ControlLabel with *', function () {
  it('should return a SelectField  with ControlLabel with *', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', options: colorOptions, required: true, value: colorOptions[1] }));
    expect(component.find('ControlLabel').html()).toMatchSnapshot();
  });
});

describe('SelectField Component with style', function () {
  it('should return a SelectFieldComponent with props where lg={true}', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', lg: true, options: colorOptions, value: colorOptions[1] }));
    expect(component.find('SelectFieldComponent').props('lg')).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent with props where sm={true}', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', options: colorOptions, sm: true, value: colorOptions[1] }));
    expect(component.find('SelectFieldComponent').props('sm')).toMatchSnapshot();
  });
  it('should return a SelectField with background-color: hsl(4.1,89.6%,58.4%) in c0 and c2 ', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', bgColor: 'red', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', options: colorOptions, value: colorOptions[1] }));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should return a SelectField with orange borderColor with border: 1px solid orange in c1;', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', borderColor: 'orange', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', options: colorOptions, value: colorOptions[1] }));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SelectField Component with space', function () {
  it('should return a SelectField with space with  margin: 32px;  padding: 32px; on c0', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', m: 4, options: colorOptions, p: 4, value: colorOptions[1] }));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SelectField Component with plainText or disabled', function () {
  it('should return a SelectField with plainText with <div> Yellow </div> rendered', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(_.SelectField, { controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', plainText: true, value: colorOptions[1] }));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a SelectField with disabled input contains a props "disabled": true', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { controlId: 'exampleColor', controlLabel: 'Color', disabled: true, id: 'exampleColor', value: colorOptions[1] }));
    expect(component.find('input').props('disabled')).toMatchSnapshot();
  });
});

describe('SelectField Component with react-select predefined props', function () {
  it('should return a SelectField with isClearable and placeholder contains a element svg that draw a x', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_.SelectField, { assistiveText: 'Please tell me your color, hit x to clear', controlId: 'exampleColor', controlLabel: 'Color', id: 'exampleColor', isSearchable: true, m: 4, options: colorOptions, p: 4, placeholder: 'Please search your color' }));
    expect(component.find('svg').props()).toMatchSnapshot();
  });
});