"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.menuStyledHelper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _styledSystem = require("styled-system");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  .DayPickerInput-OverlayWrapper {\n    pointer-events: none;\n    .DayPickerInput-Overlay {\n  ", "\n    }\n  ", "\n    ", "\n\n    .DayPickerInput-Overlay {\n      justify-content: flex-end;\n      width: 100%;\n  ", "\n    }\n  }\n  .DayPicker-Months {\n    flex-wrap: nowrap;\n  ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const menuStyledHelper = props => (0, _styledComponents.css)(_templateObject(), (0, _styledSystem.variant)({
  prop: 'menuPlacement',
  variants: {
    bottom: {},
    top: {
      transform: "translateX(0) translateY(calc(-100% - ".concat(props.controlHeight, "))")
    }
  }
}), (0, _styledSystem.variant)({
  prop: 'menuAlignment',
  variants: {
    left: {
      left: '1rem',
      right: 'auto'
    },
    right: {
      left: 'auto',
      right: '-1rem'
    }
  }
}), (0, _styledSystem.system)({
  menuOverlayBottom: {
    property: 'bottom'
  },
  menuOverlayLeft: {
    property: 'left'
  },
  menuOverlayRight: {
    property: 'right'
  },
  menuOverlayTop: {
    property: 'top'
  }
}), (0, _styledSystem.variant)({
  prop: 'menuAlignment',
  variants: {
    left: {
      display: 'block'
    },
    right: {
      display: 'flex'
    }
  }
}), (0, _styledSystem.variant)({
  prop: 'menuDirection',
  variants: {
    column: {
      flexDirection: 'column'
    },
    row: {
      flexDirection: 'row',
      minWidth: 625
    }
  }
}));

exports.menuStyledHelper = menuStyledHelper;