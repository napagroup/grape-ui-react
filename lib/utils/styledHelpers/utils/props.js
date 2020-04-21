"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.plaintextPropsToTrim = exports.control = exports.positionProps = exports.miscProps = exports.flexboxProps = exports.layoutProps = exports.spaceProps = exports.typography = exports.refType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

const refType = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]);

exports.refType = refType;
const typography = {
  propTypes: {
    bg: _propTypes.default.string,
    border: _propTypes.default.string,
    borderRadius: _propTypes.default.string,
    color: _propTypes.default.string,
    display: _propTypes.default.any,
    ellipsis: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number]),
    fontFamily: _propTypes.default.string,
    fontSize: _propTypes.default.any,
    fontWeight: _propTypes.default.any,
    hoverColor: _propTypes.default.string,
    hoverStyle: _propTypes.default.any,
    italic: _propTypes.default.bool,
    kerning: _propTypes.default.any,
    letterSpacing: _propTypes.default.any,
    lg: _propTypes.default.bool,
    lineHeight: _propTypes.default.any,
    sm: _propTypes.default.bool,
    textAlign: _propTypes.default.string,
    textDecoration: _propTypes.default.string
  }
};
exports.typography = typography;
const spaceProps = {
  propTypes: {
    /** Margin space on all four sides */
    m: _propTypes.default.any,
    mb: _propTypes.default.any,
    ml: _propTypes.default.any,
    mr: _propTypes.default.any,
    mt: _propTypes.default.any,
    mx: _propTypes.default.any,
    my: _propTypes.default.any,
    p: _propTypes.default.any,
    pb: _propTypes.default.any,
    pl: _propTypes.default.any,
    pr: _propTypes.default.any,
    pt: _propTypes.default.any,
    px: _propTypes.default.any,
    py: _propTypes.default.any,
    width: _propTypes.default.any
  }
};
exports.spaceProps = spaceProps;
const layoutProps = {
  propTypes: {
    display: _propTypes.default.any,
    height: _propTypes.default.any,
    maxHeight: _propTypes.default.any,
    maxWidth: _propTypes.default.any,
    minHeight: _propTypes.default.any,
    minWidth: _propTypes.default.any,
    size: _propTypes.default.any,
    verticalAlign: _propTypes.default.any
  }
};
exports.layoutProps = layoutProps;
const flexboxProps = {
  propTypes: {
    alignContent: _propTypes.default.any,
    alignItems: _propTypes.default.any,
    alignSelf: _propTypes.default.any,
    flex: _propTypes.default.any,
    flexBasis: _propTypes.default.any,
    flexDirection: _propTypes.default.any,
    flexGrow: _propTypes.default.any,
    flexShrink: _propTypes.default.any,
    flexWrap: _propTypes.default.any,
    justifyContent: _propTypes.default.any,
    justifyItems: _propTypes.default.any,
    justifySelf: _propTypes.default.any,
    order: _propTypes.default.any
  }
};
exports.flexboxProps = flexboxProps;
const miscProps = {
  propTypes: {
    border: _propTypes.default.any,
    borderBottom: _propTypes.default.any,
    borderColor: _propTypes.default.any,
    borderLeft: _propTypes.default.any,
    borderRadius: _propTypes.default.any,
    borderRight: _propTypes.default.any,
    borderStyle: _propTypes.default.any,
    borderTop: _propTypes.default.any,
    opacity: _propTypes.default.any,
    overflow: _propTypes.default.any
  }
};
exports.miscProps = miscProps;
const positionProps = {
  propTypes: {
    bottom: _propTypes.default.any,
    left: _propTypes.default.any,
    position: _propTypes.default.any,
    right: _propTypes.default.any,
    top: _propTypes.default.any,
    zIndex: _propTypes.default.any
  }
};
exports.positionProps = positionProps;
const control = {
  propTypes: {
    activeColor: _propTypes.default.string,
    bg: _propTypes.default.string,
    borderColor: _propTypes.default.string,
    borderRadius: _propTypes.default.string,
    isFocused: _propTypes.default.bool,
    isRequired: _propTypes.default.bool,
    padding: _propTypes.default.string,
    placeholderColor: _propTypes.default.string,
    plainText: _propTypes.default.bool
  }
};
exports.control = control;
const plaintextPropsToTrim = ['assistiveText', 'assistiveTextProps', 'calendarOnly', 'controlColorProps', 'controlGroupProps', 'controlHeight', 'controlLabelProps', 'controlId', 'dayPickerProps', 'disabled', 'inputProps', 'inputRef', 'isClearable', 'isCreatable', 'isMulti', 'isRequired', 'menuAlignment', 'menuDirection', 'menuDirectionViewportBreakpoint', 'menuElevation', 'menuOverlayBottom', 'menuOverlayLeft', 'menuOverlayRight', 'menuOverlayTop', 'menuPlacement', 'menuZIndex', 'multiline', 'styleOverrides', 'validationError', 'valueFormat'];
exports.plaintextPropsToTrim = plaintextPropsToTrim;