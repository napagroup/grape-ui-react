"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Header = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

var _componentHelpers = require("../../../utils/componentHelpers");

const {
  fontSize: fontSizeSchema,
  grid: gridSchema
} = (0, _globalStyles.getGlobalStyles)();

const getHeaderFontSizeFromTag = factoryProps => {
  const {
    tag: factoryPropsTag
  } = factoryProps;
  const tag = factoryPropsTag || 'h1';

  const getHeaderFontSizeMemoized = props => {
    const {
      displayHeader
    } = props;
    const overrides = { ...props,
      fontSize: displayHeader ? fontSizeSchema.displayHeader[tag] : fontSizeSchema[tag]
    };
    return (0, _styledHelpers.fontSizeCore)(overrides);
  };

  return getHeaderFontSizeMemoized;
};

const getHeaderFontWeight = props => {
  const {
    displayHeader,
    fontWeight: fontWeightFromProps
  } = props;
  const overrides = { ...props,
    fontWeight: displayHeader ? '300' : fontWeightFromProps || _styledHelpers.defaultStylesBase.fontWeight
  };
  return (0, _styledSystem.fontWeight)(overrides);
};

const propsToTrim = { ..._styledHelpers.spaceProps.propTypes,
  ..._styledHelpers.typography.propTypes,
  children: _propTypes.default.any.isRequired,
  displayHeader: _propTypes.default.bool
};

const headerFactory = factoryProps => {
  const {
    tag
  } = factoryProps;

  const HeaderComponent = ({
    children,
    ...props
  }) => _react.default.createElement(tag, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrim)), children); // This is stated here strictly as a interface reference. Unfortunately as this component is dynamically created there is no propType required or defaultProps enforced.


  HeaderComponent.propTypes = {
    children: _propTypes.default.any.isRequired
  };
  const getHeaderFontSize = getHeaderFontSizeFromTag(factoryProps);
  return (0, _styledComponents.default)(HeaderComponent)`
    ${_styledHelpers.colorCore}
    ${_styledHelpers.ellipsisCore}
    ${_styledHelpers.fontFamilyCore}
    ${_styledHelpers.fontStyleCore}
    ${getHeaderFontSize}
    ${getHeaderFontWeight}
    ${_styledHelpers.letterSpacingCore}
    ${_styledHelpers.lineHeightCore}
    ${_styledHelpers.textAlignCore}
    ${_styledHelpers.textDecorationCore}
    ${_styledSystem.space}
  `;
};

const Header = headerFactory({
  tag: 'h1'
});
exports.Header = Header;
Header.h1 = Header;

for (let i = 2; i <= 6; i++) {
  const subHeaderTag = `h${i}`;
  Header[subHeaderTag] = headerFactory({
    tag: subHeaderTag
  });
  Header[subHeaderTag].propTypes = {
    displayHeader: _propTypes.default.bool,
    ..._styledHelpers.typography.propTypes
  };
  Header[subHeaderTag].defaultProps = { ..._styledHelpers.defaultStylesBase,
    displayHeader: false,
    fontWeight: _styledHelpers.defaultStylesBase.fontWeight,
    mb: gridSchema.gutter,
    mt: 0
  };
}

Header.propTypes = { ..._styledHelpers.typography.propTypes,
  displayHeader: _propTypes.default.bool
};
Header.defaultProps = { ..._styledHelpers.defaultStylesBase,
  displayHeader: false,
  fontWeight: _styledHelpers.defaultStylesBase.fontWeight,
  mb: gridSchema.gutter,
  mt: 0
};
/** @component */