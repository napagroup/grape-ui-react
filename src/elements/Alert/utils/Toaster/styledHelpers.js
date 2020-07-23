import React from 'react';
import PropTypes from 'prop-types';
import { cssTransition } from 'react-toastify';
import { Button } from 'src/elements/Button';

export const animationCss = `
  @keyframes zoomInKeyframes {
    from {
      opacity: 0;
      transform: scale3d(.9, .9, .9);
    }

    to {
      opacity: 1;
    }
  }

  @keyframes zoomOutKeyframes {
    from {
      opacity: 1;
    }

    50% {
      transform: scale3d(.9, .9, .9);
    }

    to {
      opacity: 0;
    }
  }

  .zoomIn { animation-name: zoomInKeyframes; }
  .zoomOut { animation-name: zoomOutKeyframes; }
`;

export const Zoom = cssTransition({
  duration: [250, 125],
  enter: 'zoomIn',
  exit: 'zoomOut',
});

export const ToastCloseButton = ({ closeToast }) => (
  <Button
    bgActiveColor="rgba(255,255,255,0.2)"
    bgHoverColor="rgba(255,255,255,0.1)"
    borderRadius="50%"
    color="white"
    m={1}
    onClick={closeToast}
    p="initial"
    pb={0}
    pl={0}
    pr={0}
    pt={0}
    size={24}
  >
    &times;
  </Button>
);

ToastCloseButton.propTypes = {
  closeToast: PropTypes.func,
};
ToastCloseButton.defaultProps = {
  closeToast: () => {},
};
