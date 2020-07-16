import styled, { keyframes } from 'styled-components';
import {
  flexbox,
  layout,
  position,
  system,
  variant,
} from 'styled-system';
import { ToastContainer } from 'react-toastify';

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

export const Toaster = styled(ToastContainer)`
  .Toastify__progress-bar {
    animation: ${toastifyTrackProgress} linear 1;
  }
  ${system({
    boxSizing: true,
    transform: true,
  })}
  ${flexbox}
  ${layout}
  ${position}
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
  autoClose: false,
  boxSizing: 'border-box',
  closeOnClick: true,
  draggable: false,
  hideProgressBar: false,
  newestOnTop: false,
  pauseOnHover: false,
  pauseOnVisibilityChange: false,
  position: 'fixed',
  rtl: false,
  toastPlacement: 'bottom-center',
};
