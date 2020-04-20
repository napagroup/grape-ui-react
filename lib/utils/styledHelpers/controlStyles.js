"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.controlStyles = exports.getFinalFieldPadding = exports.disabledStyle = exports.focusStyles = exports.controlColor = void 0;

var _parseInt = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/number/parse-int"));

var _globalStyles = require("../../global-styles");

var _constants = require("../../elements/forms/DateField/constants");

var _utils = require("./utils");

var _cssDefaults = require("./cssDefaults");

var _core = require("./core");

const {
  border: borderSchema,
  grid: gridSchema
} = (0, _globalStyles.getGlobalStyles)();

const controlColor = props => {
  const {
    bg,
    formStyle
  } = props;
  const nextBg = formStyle === 'filled' && !bg ? 'formControlFilledBg' : bg || _cssDefaults.defaultStylesBase.bg;
  return (0, _core.colorCore)({ ...props,
    bg: nextBg
  });
};

exports.controlColor = controlColor;

const focusStyles = props => {
  const {
    activeColor,
    formStyle
  } = props;
  const focusColor = !activeColor ? (0, _utils.resolveColor)(_cssDefaults.defaultControlStyles.activeColor, props) : (0, _utils.resolveColor)(activeColor, props);

  if (formStyle === 'filled') {
    return `
      border-bottom: 2px solid ${focusColor};
      margin-bottom: -1px;
      + label { color: ${focusColor}; }
    `;
  }

  return `
    border-color: ${focusColor};
    box-shadow: 0 0 0 1px ${focusColor};
    + label { color: ${focusColor}; }
  `;
};

exports.focusStyles = focusStyles;
const disabledStyle = `
  opacity: 0.3;
  ~ * { color: rgba(0,0,0,0.3); }
`;
exports.disabledStyle = disabledStyle;

const scaleFactor = props => {
  const {
    sm,
    lg
  } = props;
  const {
    borderRadius: {
      base: schemaBase,
      sm: schemaSm,
      lg: schemaLg
    }
  } = borderSchema;
  let value = schemaBase;

  if (lg) {
    value = schemaLg;
  } else if (sm) {
    value = schemaSm;
  } else {
    value = schemaBase;
  }

  return value;
};

const getFinalFieldPadding = (padding, formStyle, labelText) => formStyle === 'filled' && labelText ? `
    padding: ${(0, _parseInt.default)(padding, 10) * 1.5}rem ${padding} ${(0, _parseInt.default)(padding, 10) / 2}rem;
    .grape-ui-select__control,
    .DayPickerInput > input {
      margin: -${(0, _parseInt.default)(padding, 10) * 1.5}rem -${padding} -${(0, _parseInt.default)(padding, 10) / 2}rem;
      padding: ${(0, _parseInt.default)(padding, 10) * 1.5}rem ${padding} ${(0, _parseInt.default)(padding, 10) / 2}rem;
      + .DayPickerInput-OverlayWrapper {
        transform: translateX(-${padding}) translateY(calc(${(0, _parseInt.default)(padding, 10) / 2}rem + 2px));
      }
    }
    + label {
      background: transparent;
      line-height: 1;
      top: ${(0, _parseInt.default)(padding, 10) - 0.2}rem;
    }
  ` : `
    padding: ${padding};
    .grape-ui-select__control,
    .DayPickerInput > input {
      margin: -${padding};
      padding: ${padding};
      + .DayPickerInput-OverlayWrapper {
        transform: translateX(-${padding}) translateY(calc(${padding} + 2px));
      }
    }
  `;

exports.getFinalFieldPadding = getFinalFieldPadding;

const getFinalStyle = props => {
  const {
    activeColor,
    borderColor,
    formStyle,
    labelText,
    padding,
    placeholderColor
  } = props;
  const scale = scaleFactor(props);
  const globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  const focusStyle = focusStyles({
    activeColor,
    formStyle,
    ...globalOverrides
  });
  const resolvedBorderColor = (0, _utils.resolveColor)(borderColor, globalOverrides);
  const resolvedPlaceholderColor = (0, _utils.resolveColor)(placeholderColor, globalOverrides);
  const controlSharedStyle = `
    appearance: none;
    border-radius: ${(0, _utils.resolveBorderRadius)(props)};
    outline: 0;
    width: 100%;
    box-sizing: border-box;
    ${getFinalFieldPadding(padding, formStyle, labelText)}
    &[disabled] {
      ${disabledStyle}
    }
    &:focus, &:focus-within{ ${focusStyle} }
    &::placeholder,
    input::placeholder {
      color: ${resolvedPlaceholderColor}
    }
    ${_constants.DateFieldControlOverrides}
  `;

  if (formStyle === 'filled') {
    return `
      border: 0;
      border-bottom: 1px solid ${resolvedBorderColor};
      border-radius: ${scale} ${scale} 0 0;
      ${controlSharedStyle}
    `;
  }

  return `
    border: 1px solid ${resolvedBorderColor};
    border-radius: ${scale};
    ${controlSharedStyle}
  `;
};

const controlStyles = (props = {}) => {
  let overrides = null;
  overrides = { ..._cssDefaults.defaultControlStyles,
    ...props,
    padding: gridSchema[props.gutter] || _cssDefaults.defaultControlStyles.padding
  };
  return getFinalStyle({ ...props,
    ...overrides
  });
};

exports.controlStyles = controlStyles;