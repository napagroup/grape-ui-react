'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.control = exports.positionProps = exports.miscProps = exports.flexboxProps = exports.layoutProps = exports.spaceProps = exports.typography = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typography = exports.typography = {
  propTypes: {
    bg: _propTypes2.default.string,
    border: _propTypes2.default.string,
    borderRadius: _propTypes2.default.string,
    color: _propTypes2.default.string,
    display: _propTypes2.default.any,
    fontFamily: _propTypes2.default.string,
    fontSize: _propTypes2.default.any,
    fontWeight: _propTypes2.default.any,
    italic: _propTypes2.default.bool,
    kerning: _propTypes2.default.any,
    letterSpacing: _propTypes2.default.any,
    lg: _propTypes2.default.bool,
    lineHeight: _propTypes2.default.any,
    sm: _propTypes2.default.bool,
    textAlign: _propTypes2.default.string,
    textDecoration: _propTypes2.default.string
  }
};

var spaceProps = exports.spaceProps = {
  propTypes: {
    m: _propTypes2.default.any,
    mb: _propTypes2.default.any,
    ml: _propTypes2.default.any,
    mr: _propTypes2.default.any,
    mt: _propTypes2.default.any,
    mx: _propTypes2.default.any,
    my: _propTypes2.default.any,
    p: _propTypes2.default.any,
    pb: _propTypes2.default.any,
    pl: _propTypes2.default.any,
    pr: _propTypes2.default.any,
    pt: _propTypes2.default.any,
    px: _propTypes2.default.any,
    py: _propTypes2.default.any,
    width: _propTypes2.default.any
  }
};

var layoutProps = exports.layoutProps = {
  propTypes: {
    display: _propTypes2.default.any,
    height: _propTypes2.default.any,
    maxHeight: _propTypes2.default.any,
    maxWidth: _propTypes2.default.any,
    minHeight: _propTypes2.default.any,
    minWidth: _propTypes2.default.any,
    size: _propTypes2.default.any,
    verticalAlign: _propTypes2.default.any
  }
};

var flexboxProps = exports.flexboxProps = {
  propTypes: {
    alignContent: _propTypes2.default.any,
    alignItems: _propTypes2.default.any,
    alignSelf: _propTypes2.default.any,
    flex: _propTypes2.default.any,
    flexBasis: _propTypes2.default.any,
    flexDirection: _propTypes2.default.any,
    flexWrap: _propTypes2.default.any,
    justifyContent: _propTypes2.default.any,
    justifyItems: _propTypes2.default.any,
    justifySelf: _propTypes2.default.any,
    order: _propTypes2.default.any
  }
};
var miscProps = exports.miscProps = {
  propTypes: {
    border: _propTypes2.default.any,
    borderBottom: _propTypes2.default.any,
    borderColor: _propTypes2.default.any,
    borderLeft: _propTypes2.default.any,
    borderRadius: _propTypes2.default.any,
    borderRight: _propTypes2.default.any,
    borderStyle: _propTypes2.default.any,
    borderTop: _propTypes2.default.any,
    opacity: _propTypes2.default.any,
    overflow: _propTypes2.default.any
  }
};
var positionProps = exports.positionProps = {
  propTypes: {
    bottom: _propTypes2.default.any,
    left: _propTypes2.default.any,
    position: _propTypes2.default.any,
    right: _propTypes2.default.any,
    top: _propTypes2.default.any,
    zIndex: _propTypes2.default.any
  }
};

var control = exports.control = {
  propTypes: {
    activeColor: _propTypes2.default.string,
    bg: _propTypes2.default.string,
    borderColor: _propTypes2.default.string,
    borderRadius: _propTypes2.default.string,
    isFocused: _propTypes2.default.bool,
    padding: _propTypes2.default.string,
    placeholderColor: _propTypes2.default.string,
    plainText: _propTypes2.default.bool
  }
};