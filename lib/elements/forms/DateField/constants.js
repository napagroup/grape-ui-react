"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.DayPickerControlStyles = exports.DateFieldControlOverrides = exports.dayPickerClassTypes = exports.DEFAULT_DATE_VALUE_FORMAT = exports.DEFAULT_DATE_FORMAT = void 0;

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

const DEFAULT_DATE_FORMAT = 'M/D/YYYY';
exports.DEFAULT_DATE_FORMAT = DEFAULT_DATE_FORMAT;
const DEFAULT_DATE_VALUE_FORMAT = 'YYYY-MM-DD';
exports.DEFAULT_DATE_VALUE_FORMAT = DEFAULT_DATE_VALUE_FORMAT;
const dayPickerClassTypes = ['body', 'caption', 'container', 'day', 'disabled', 'month', 'navBar', 'navButtonNext', 'navButtonPrev', 'navButtonInteractionDisabled', 'outside', 'overlay', 'overlayWrapper', 'selected', 'today', 'week', 'weekday', 'weekdays', 'weekdaysRow', 'weekNumber'];
exports.dayPickerClassTypes = dayPickerClassTypes;
const DateFieldControlOverrides = `
  .DayPickerInput > input {
    background: transparent;
    border: 0;
    font: inherit;
    outline: 0;
    width: 100%;
  }
`;
exports.DateFieldControlOverrides = DateFieldControlOverrides;

const DayPickerControlStyles = props => `
  .DayPicker {
    background-color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.menuBgColor, (0, _globalStyles.getGlobalOverrides)(props))};
    box-shadow: ${(0, _styledHelpers.resolveBoxShadow)(props.menuElevation, (0, _globalStyles.getGlobalOverrides)(props))};
    display: inline-block;
    font: inherit;
    outline: 0;
  }

  .DayPicker-wrapper {
    position: relative;
    user-select: none;
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .DayPicker-Month {
    margin: 1rem;
  }

  .DayPickerInput-OverlayWrapper {
    position: absolute;
    z-index: ${(0, _styledHelpers.resolveZIndex)(props.menuElevation, (0, _globalStyles.getGlobalOverrides)(props))};;
    max-width: 100%;
    ${props.menuDirectionViewportBreakpoint.column ? `
      @media (max-width: ${props.menuDirectionViewportBreakpoint.column}) {
        .DayPicker-Months {
          flex-direction: column;
          min-width: 0;
        }
      }
    ` : ''}
    ${props.menuDirectionViewportBreakpoint.row ? `
      @media (min-width: ${props.menuDirectionViewportBreakpoint.row}) {
        min-width: 625px;
        .DayPicker-Months {
          flex-direction: row;
        }
      }
    ` : ''}
  }

  .DayPicker-NavButton {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    left: auto;
    display: inline-block;
    margin-top: 2px;
    width: 1.25rem;
    height: 1.25rem;
    background-position: center;
    background-size: 50%;
    background-repeat: no-repeat;
    cursor: pointer;
    pointer-events: auto;
    &:hover {
      opacity: 0.8;
    }
    &--prev {
      margin-right: 1.5rem;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC');
    }
    &--next {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==');
    }
    &--interactionDisabled {
      display: none;
    }
  }

  .DayPicker-Caption {
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
    text-align: left;
    color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.captionColor, (0, _globalStyles.getGlobalOverrides)(props))};
    > div {
      font-weight: 500;
      font-size: large;
    }
  }

  .DayPicker-Weekdays {
    display: flex;
    margin-top: 1rem;
    &Row { display: flex; }
  }

  .DayPicker-Weekday {
    color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.weekdayColor, (0, _globalStyles.getGlobalOverrides)(props))};
    text-align: center;
    height: 40px;
    width: 40px;
    box-sizing: border-box;
    abbr[title] {
      border-bottom: none;
      text-decoration: none;
    }
  }

  .DayPicker-Body {
    display: block;
  }

  .DayPicker-Week {
    display: flex;
    ${props.dayPickerProps.numberOfMonths > 1 ? `
    > .DayPicker-Day--selected:not(.DayPicker-Day--outside) {
      &:not(.DayPicker-Day--start):not(.DayPicker-Day--end):first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:not(.DayPicker-Day--start):not(.DayPicker-Day--end):last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      &:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(:first-child):not(:last-child) {
        border-radius: 0 !important;
      }
      &:not(.DayPicker-Day--start):not(.DayPicker-Day--end) {
        background-color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.selectedBetweenBgColor, (0, _globalStyles.getGlobalOverrides)(props))};
        color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.selectedBetweenColor, (0, _globalStyles.getGlobalOverrides)(props))};
      }
    }
    ` : ''}
  }

  .DayPicker-Day {
    flex: 1;
    margin: 0.1rem 0;
    padding: 0.4rem 0.5rem;
    border-radius: 50%;
    vertical-align: middle;
    text-align: center;
    cursor: pointer;
    pointer-events: auto;
    box-sizing: border-box;
    height: 40px;
    width: 40px;
    position: relative;
    &:not(.DayPicker-Day--disabled){
      :hover {
        background-color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.dayHoverBgColor, (0, _globalStyles.getGlobalOverrides)(props))};
        color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.dayHoverColor, (0, _globalStyles.getGlobalOverrides)(props))};
      }
    }
  }

  .DayPicker-WeekNumber {
    font-size: small;
    padding: 0.5rem;
    min-width: 1rem;
    pointer-events: auto;
    border-right: 1px solid ${(0, _styledHelpers.resolveColor)(props.controlColorProps.weekNumberBorderColor, (0, _globalStyles.getGlobalOverrides)(props))};
    color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.weekNumberColor, (0, _globalStyles.getGlobalOverrides)(props))};
    vertical-align: middle;
    text-align: right;
    cursor: pointer;
  }

  .DayPicker--interactionDisabled .DayPicker-Day {
    cursor: default;
  }

  .DayPicker-Footer {
    padding-top: 0.5em;
  }

  .DayPicker-TodayButton {
    border: none;
    background-color: transparent;
    background-image: none;
    box-shadow: none;
    color: #4A90E2;
    font-size: 0.875em;
    cursor: pointer;
    pointer-events: auto;
  }

  .DayPicker-Day--today {
    position: relative;
    :after {
      position: absolute;
      content: "";
      height: calc(100% - 2px);
      width: calc(100% - 2px);
      top: 0;
      left: 0;
      border: 1px solid ${(0, _styledHelpers.resolveColor)(props.controlColorProps.todayBorderColor, (0, _globalStyles.getGlobalOverrides)(props))};
      border-radius: 50%;
    }
  }

  .DayPicker-Day--selected {
    background-color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.selectedBgColor, (0, _globalStyles.getGlobalOverrides)(props))};
    color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.selectedColor, (0, _globalStyles.getGlobalOverrides)(props))};
    &.DayPicker-Day--start {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &.DayPicker-Day--end {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  .DayPicker-Day--outside {
    color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.outsideColor, (0, _globalStyles.getGlobalOverrides)(props))};
    cursor: default;
    background: transparent !important;
    visibility: hidden;
    pointer-events: none;
  }

  .DayPicker-Day--disabled {
    color: ${(0, _styledHelpers.resolveColor)(props.controlColorProps.disabledColor, (0, _globalStyles.getGlobalOverrides)(props))};
    cursor: default;
    pointer-events: none;
  }

`;

exports.DayPickerControlStyles = DayPickerControlStyles;