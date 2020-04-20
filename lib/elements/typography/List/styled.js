"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.List = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _globalStyles = require("../../../global-styles");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _componentHelpers = require("../../../utils/componentHelpers");

const {
  grid: gridSchema
} = (0, _globalStyles.getGlobalStyles)();

const inlineStyle = props => {
  const style = `
    > li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: ${(0, _styledHelpers.scaleFont)(gridSchema.gutter, 0.5)};
      }
    }
  `;
  return `${props.inline ? style : ''}`;
};

const paddingLeft = props => `padding-left:  ${props.unstyled || props.inline ? '0' : '2.5rem'};`;

const listStyle = props => `${props.unstyled ? '> li { list-style: none; }' : ''}`;

const margin = props => `margin: 0 0 ${gridSchema.gutter};`;

const listComponentPropsToTrim = { ..._propTypes2.default.space,
  ..._styledHelpers.typography.propTypes,
  inline: _propTypes.default.bool,
  unstyled: _propTypes.default.bool
};

const listFactory = factoryProps => {
  const {
    tag
  } = factoryProps;

  const ListComponent = ({
    children,
    ...props
  }) => _react.default.createElement(tag, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(listComponentPropsToTrim)), children);

  ListComponent.propTypes = {
    children: _propTypes.default.any.isRequired
  };
  return (0, _styledComponents.default)(ListComponent)`
    ${_styledHelpers.colorCore}
    ${_styledHelpers.ellipsisCore}
    ${_styledHelpers.fontFamilyCore}
    ${_styledHelpers.fontSizeCore}
    ${_styledSystem.fontWeight}
    ${_styledHelpers.letterSpacingCore}
    ${_styledHelpers.lineHeightCore}
    ${_styledHelpers.fontStyleCore}
    ${_styledHelpers.textAlignCore}
    ${_styledHelpers.textDecorationCore}
    ${margin}
    ${paddingLeft}
    ${listStyle}
    ${inlineStyle}
    ${_styledSystem.space}
  `;
};

const List = listFactory({
  tag: 'ul'
});
exports.List = List;
List.ul = List;
List.ol = listFactory({
  tag: 'ol'
});
List.propTypes = { ..._styledHelpers.typography.propTypes,
  inline: _propTypes.default.bool,
  unstyled: _propTypes.default.bool
};
List.defaultProps = { ..._styledHelpers.defaultStylesBase
};
/** @component */