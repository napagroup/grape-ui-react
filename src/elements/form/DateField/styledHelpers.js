import { css } from 'styled-components';
import { variant } from 'styled-system';

export const menuStyledHelper = css`
  .DayPickerInput-OverlayWrapper {
    pointer-events: none;
    ${variant({
    prop: 'menuAlignment',
    variants: {
      left: {
        left: '1rem',
        right: 'auto',
      },
      right: {
        left: 'auto',
        right: '-1rem',
      },
    },
  })}
    .DayPickerInput-Overlay {
      justify-content: flex-end;
      width: 100%;
      ${variant({
    prop: 'menuAlignment',
    variants: {
      left: {
        display: 'block',
      },
      right: {
        display: 'flex',
      },
    },
  })}
    }
  }
  .DayPicker-Months {
    flex-wrap: nowrap;
    ${variant({
    prop: 'menuDirection',
    variants: {
      column: {
        flexDirection: 'column',
      },
      row: {
        flexDirection: 'row',
        minWidth: 625,
      },
    },
  })}
  }
`;
