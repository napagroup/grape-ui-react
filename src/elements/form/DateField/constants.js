import { getGlobalOverrides } from 'src/global-styles';
import {
  resolveBoxShadow,
  resolveColor,
  resolveZIndex,
} from 'src/utils/styledHelpers';

export const DEFAULT_DATE_FORMAT = 'M/D/YYYY';
export const DEFAULT_DATE_VALUE_FORMAT = 'YYYY-MM-DD';

export const dayPickerClassTypes = [
  'body',
  'caption',
  'container',
  'day',
  'disabled',
  'month',
  'navBar',
  'navButtonNext',
  'navButtonPrev',
  'navButtonInteractionDisabled',
  'outside',
  'overlay',
  'overlayWrapper',
  'selected',
  'today',
  'week',
  'weekday',
  'weekdays',
  'weekdaysRow',
  'weekNumber',
];


export const DateFieldControlOverrides = `
  .DayPickerInput > input {
    background: transparent;
    border: 0;
    font: inherit;
    outline: 0;
    width: 100%;
  }
`;

export const DayPickerControlStyles = props => `
  .DayPicker {
    background-color: ${resolveColor(props.controlColorProps.menuBgColor, getGlobalOverrides(props))};
    box-shadow: ${resolveBoxShadow(props.menuElevation, getGlobalOverrides(props))};
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
    z-index: ${resolveZIndex(props.menuElevation, getGlobalOverrides(props))};;
    width: 100%;
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
    color: ${resolveColor(props.controlColorProps.captionColor, getGlobalOverrides(props))};
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
    color: ${resolveColor(props.controlColorProps.weekdayColor, getGlobalOverrides(props))};
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
        background-color: ${resolveColor(props.controlColorProps.selectedBetweenBgColor, getGlobalOverrides(props))};
        color: ${resolveColor(props.controlColorProps.selectedBetweenColor, getGlobalOverrides(props))};
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
    box-sizing: border-box;
    height: 40px;
    width: 40px;
    position: relative;
    &:not(.DayPicker-Day--disabled){
      :hover {
        background-color: ${resolveColor(props.controlColorProps.dayHoverBgColor, getGlobalOverrides(props))};
        color: ${resolveColor(props.controlColorProps.dayHoverColor, getGlobalOverrides(props))};
      }
    }
  }

  .DayPicker-WeekNumber {
    font-size: small;
    padding: 0.5rem;
    min-width: 1rem;
    border-right: 1px solid ${resolveColor(props.controlColorProps.weekNumberBorderColor, getGlobalOverrides(props))};
    color: ${resolveColor(props.controlColorProps.weekNumberColor, getGlobalOverrides(props))};
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
      border: 1px solid ${resolveColor(props.controlColorProps.todayBorderColor, getGlobalOverrides(props))};
      border-radius: 50%;
    }
  }

  .DayPicker-Day--selected {
    background-color: ${resolveColor(props.controlColorProps.selectedBgColor, getGlobalOverrides(props))};
    color: ${resolveColor(props.controlColorProps.selectedColor, getGlobalOverrides(props))};
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
    color: ${resolveColor(props.controlColorProps.outsideColor, getGlobalOverrides(props))};
    cursor: default;
    background: transparent !important;
  }

  .DayPicker-Day--disabled {
    color: ${resolveColor(props.controlColorProps.disabledColor, getGlobalOverrides(props))};
    cursor: default;
  }

`;
