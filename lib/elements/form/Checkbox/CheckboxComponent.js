'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textStyles = require('../../../elements/typography/textStyles');

var _componentHelpers = require('../../../utils/componentHelpers');

var _reactCheckboxGroup = require('react-checkbox-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// import styled from 'styled-components';
// import { defaultTextStylesBase, textStylesBase } from 'src/elements/typography/textStyles';

// import { getGlobalStyles } from 'src/global-styles';


// const { grid: gridSchema } = getGlobalStyles();
// const checkboxMarginRight = gridSchema.gutter;

var CheckboxComponent = function CheckboxComponent(props) {
  var option = props.option,
      otherProps = _objectWithoutProperties(props, ['option']);
  // const overrides = {
  //   ...otherProps,
  // };
  // const actualBase = textStylesBase(overrides);
  // const CheckboxLabel = styled.label` ${actualBase} `;
  // const ProtoCheckbox = styled(Checkbox)`
  //   margin-right: ${checkboxMarginRight};
  // `;


  return _react2.default.createElement(_reactCheckboxGroup.Checkbox, _extends({ id: option.value }, (0, _componentHelpers.passThrough)(_reactCheckboxGroup.Checkbox, otherProps), { value: option.value }));
  //   <CheckboxLabel {...passThrough(Checkbox, otherProps)} >
  //     <ProtoCheckbox {...passThrough(Checkbox, otherProps)} value={option.value} /> {option.label}
  //   </CheckboxLabel>
  // );
};

exports.CheckboxComponent = CheckboxComponent;
CheckboxComponent.propTypes = {
  color: _propTypes2.default.string,
  // controlLabel: PropTypes.string,
  fontFamily: _propTypes2.default.string,
  fontWeight: _propTypes2.default.string,
  kerning: _propTypes2.default.string,
  lg: _propTypes2.default.bool,
  option: _propTypes2.default.any.isRequired,
  sm: _propTypes2.default.bool,
  textAlign: _propTypes2.default.string,
  textDecoration: _propTypes2.default.string
  // value: PropTypes.string,
};

CheckboxComponent.defaultProps = {
  color: _textStyles.defaultTextStylesBase.color,
  // controlLabel: '',
  fontFamily: _textStyles.defaultTextStylesBase.fontFamily,
  fontWeight: _textStyles.defaultTextStylesBase.fontWeight,
  kerning: _textStyles.defaultTextStylesBase.kerning,
  lg: _textStyles.defaultTextStylesBase.lg,
  sm: _textStyles.defaultTextStylesBase.sm,
  textAlign: _textStyles.defaultTextStylesBase.textAlign,
  textDecoration: _textStyles.defaultTextStylesBase.textDecoration
  // value: '',
};