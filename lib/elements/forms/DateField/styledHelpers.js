import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .DayPickerInput-OverlayWrapper {\n    pointer-events: none;\n    .DayPickerInput-Overlay {\n  ", "\n    }\n  ", "\n    ", "\n\n    .DayPickerInput-Overlay {\n      justify-content: flex-end;\n      width: 100%;\n  ", "\n    }\n  }\n  .DayPicker-Months {\n    flex-wrap: nowrap;\n  ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { css } from 'styled-components';
import { system, variant } from 'styled-system';
export var menuStyledHelper = function menuStyledHelper(props) {
  return css(_templateObject(), variant({
    prop: 'menuPlacement',
    variants: {
      bottom: {},
      top: {
        transform: "translateX(0) translateY(calc(-100% - ".concat(props.controlHeight, "))")
      }
    }
  }), variant({
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
  }), system({
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
  }), variant({
    prop: 'menuAlignment',
    variants: {
      left: {
        display: 'block'
      },
      right: {
        display: 'flex'
      }
    }
  }), variant({
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
};