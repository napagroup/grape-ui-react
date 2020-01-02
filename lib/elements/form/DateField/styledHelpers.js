"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuStyledHelper = undefined;

var _styledComponents = require("styled-components");

var _styledSystem = require("styled-system");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .DayPickerInput-OverlayWrapper {\n    ", "\n    .DayPickerInput-Overlay {\n      justify-content: flex-end;\n      width: 100%;\n      ", "\n    }\n  }\n  .DayPicker-Months {\n    flex-wrap: nowrap;\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var menuStyledHelper = exports.menuStyledHelper = (0, _styledComponents.css)(_templateObject(), (0, _styledSystem.variant)({
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