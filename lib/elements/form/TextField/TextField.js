'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import styled from 'styled-components';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ControlGroup = require('../../../elements/form/ControlGroup/ControlGroup');

var _componentHelpers = require('../../../utils/componentHelpers');

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Adapter from 'enzyme-adapter-react-16';
// import 'jest-styled-components';
// import { configure, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

var TextField = exports.TextField = function TextField(props) {
  var overrides = Object.assign({}, props);
  var child = function child() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_.TextFieldComponent, (0, _componentHelpers.passThrough)(TextField, overrides))
    );
  };
  // const component = mount(<child />);
  // const componentJson = component.find(child);
  // const Foo = () => (<div className="in-foo" />);
  // const Bar = () => (<div className="in-bar"><Foo /></div>);

  // const wrapper = mount(<Bar />);
  // console.log('TextField - wrapper.find(Foo).render()', expect(wrapper.find(Foo).render().find('.in-foo')).to.have.lengthOf(1));
  // // expect(wrapper.find('div').render()).to.have.lengthOf(1);

  // console.log('TextField - componentJson', componentJson);
  var inputChild = function inputChild() {
    return _react2.default.createElement('input', _extends({ type: 'text' }, (0, _componentHelpers.passThrough)(TextField, overrides), { value: 'Replace this with textfield Component' }));
  };
  var ProtoTextField = (0, _ControlGroup.withControlGroup)(inputChild);
  return _react2.default.createElement(ProtoTextField, overrides);
};

TextField.propTypes = {
  assistiveText: _propTypes2.default.string,
  controlLabel: _propTypes2.default.string.isRequired,
  validationError: _propTypes2.default.string
};

TextField.defaultProps = {
  assistiveText: '',
  validationError: ''
};