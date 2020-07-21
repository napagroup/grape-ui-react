import styled, { keyframes } from 'styled-components';
import {
  system,
  variant,
} from 'styled-system';
import { ToasterComponent } from '.';

const toastPlacementCenter = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  justifySelf: 'center',
  left: '50vw',
  transform: 'translateX(-50%)',
};

const toastifyTrackProgress = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;

const Toaster = styled(ToasterComponent)`
  .Toastify__progress-bar {
    animation: ${toastifyTrackProgress} linear 1;
  }
  .Toastify__close-button {
    display: none;
  }
  ${props => (props.closeOnClick ? 'cursor: pointer;' : '')}
  ${system({ transform: true })}
  ${
  variant({
    prop: 'toastPlacement',
    variants: {
      'bottom-center': {
        bottom: 0,
        ...toastPlacementCenter,
      },
      'bottom-left': {
        bottom: 0,
        left: 0,
      },
      'bottom-right': {
        bottom: 0,
        right: 0,
      },
      'top-center': {
        ...toastPlacementCenter,
        top: 0,
      },
      'top-left': {
        left: 0,
        top: 0,
      },
      'top-right': {
        right: 0,
        top: 0,
      },
    },
  })
}
`;

Toaster.defaultProps = {
  boxSizing: 'border-box',
  closeOnClick: true,
  position: 'fixed',
  toastPlacement: 'bottom-center',
};

export { Toaster };
