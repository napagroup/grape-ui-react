"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Alert = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Hideable = require("../../elements/utils/Hideable");

var _component = require("./component");

var _utils = require("./utils");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const Alert = (0, _styledComponents.default)((0, _Hideable.withHideable)(_component.AlertComponent))(_templateObject(), _utils.alertVariants);
exports.Alert = Alert;
Alert.propTypes = {
  /** Define a component in the action area of an alert. */
  alertAction: _propTypes.default.node,

  /** Define the props on the containing `<Box>` component for the alert action. */
  alertActionProps: _propTypes.default.object,

  /** Define the color and variantName for the theme. */
  alertThemes: _propTypes.default.arrayOf(_propTypes.default.shape({
    color: _propTypes.default.string,
    variantName: _propTypes.default.string
  })),
  children: _propTypes.default.any,

  /** Define the props on the `<Flex>` component containing the `children` and `alertAction`. */
  flexContainerProps: _propTypes.default.object,

  /** Define the variant used for the `<Alert>`.
   * Variant options are:
   * '`alertThemes.variantName`',
   * 'contained-`alertThemes.variantName`',
   * 'outlined-`alertThemes.variantName`', */
  variant: _propTypes.default.any
};
Alert.defaultProps = {
  alertAction: null,
  alertActionProps: {},
  alertThemes: [{
    color: 'black',
    variantName: 'default'
  }, {
    color: 'brandDanger',
    variantName: 'danger'
  }, {
    color: 'brandDark',
    variantName: 'dark'
  }, {
    color: 'brandInfo',
    variantName: 'info'
  }, {
    color: 'brandLight',
    variantName: 'light'
  }, {
    color: 'brandLink',
    variantName: 'link'
  }, {
    color: 'brandPrimary',
    variantName: 'primary'
  }, {
    color: 'brandSecondary',
    variantName: 'secondary'
  }, {
    color: 'brandSuccess',
    variantName: 'success'
  }, {
    color: 'brandWarning',
    variantName: 'warning'
  }],
  borderRadius: 4,
  children: '',
  display: 'inline-block',
  flexContainerProps: {
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  m: [2, null, 3],
  maxWidth: [1, 600],
  minWidth: 300,
  overflow: 'hidden',
  progressPlacement: 'bottom',
  px: 3,
  py: 2,
  variant: 'contained-default'
};
Alert.ToastContainer = _utils.Toaster;
/** @component */