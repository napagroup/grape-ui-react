"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.menuStyledHelper = void 0;

var _styledComponents = require("styled-components");

var _styledSystem = require("styled-system");

const menuStyledHelper = props => (0, _styledComponents.css)`
  .DayPickerInput-OverlayWrapper {
    pointer-events: none;
    .DayPickerInput-Overlay {
  ${(0, _styledSystem.variant)({
  prop: 'menuPlacement',
  variants: {
    bottom: {},
    top: {
      transform: `translateX(0) translateY(calc(-100% - ${props.controlHeight}))`
    }
  }
})}
    }
  ${(0, _styledSystem.variant)({
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
})}
    ${(0, _styledSystem.system)({
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
})}

    .DayPickerInput-Overlay {
      justify-content: flex-end;
      width: 100%;
  ${(0, _styledSystem.variant)({
  prop: 'menuAlignment',
  variants: {
    left: {
      display: 'block'
    },
    right: {
      display: 'flex'
    }
  }
})}
    }
  }
  .DayPicker-Months {
    flex-wrap: nowrap;
  ${(0, _styledSystem.variant)({
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
})}
  }
`;

exports.menuStyledHelper = menuStyledHelper;