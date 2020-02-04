import { css } from 'styled-components';
import { system, variant } from 'styled-system';

export const menuStyledHelper = props => css`
  .DayPickerInput-OverlayWrapper {
    pointer-events: none;
    .DayPickerInput-Overlay {
  ${variant({
    prop: 'menuPlacement',
    variants: {
      bottom: {},
      top: {
        transform: `translateX(0) translateY(calc(-100% - ${props.controlHeight}))`,
      },
    },
  })}
    }
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
    ${system({
    menuOverlayBottom: { property: 'bottom' },
    menuOverlayLeft: { property: 'left' },
    menuOverlayRight: { property: 'right' },
    menuOverlayTop: { property: 'top' },
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
