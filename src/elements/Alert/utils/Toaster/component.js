import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import {
  cssTransition,
  ToastContainer,
} from 'react-toastify';
import { Box } from 'src/elements/grid';
import { animationCss } from '.';

export const Zoom = cssTransition({
  duration: [250, 125],
  enter: 'zoomIn',
  exit: 'zoomOut',
});

const ToasterComponent = props => {
  const {
    autoClose,
    closeButton,
    closeOnClick,
    draggable,
    hideProgressBar,
    limit,
    portalProps,
    toastContainerProps,
    transition,
  } = props;
  const baseToastContainerProps = {
    autoClose,
    closeButton,
    closeOnClick,
    draggable,
    hideProgressBar,
    limit,
    transition,
    ...toastContainerProps,
  };
  return (
    <Portal {...portalProps}>
      <style>
        {animationCss}
      </style>
      <Box {...props}>
        <ToastContainer {...baseToastContainerProps} />
      </Box>
    </Portal>
  );
};

ToasterComponent.propTypes = {
  autoClose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  closeButton: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
  ]),
  closeOnClick: PropTypes.bool,
  draggable: PropTypes.bool,
  hideProgressBar: PropTypes.bool,
  limit: PropTypes.number,
  portalProps: PropTypes.object,
  toastContainerProps: PropTypes.object,
  transition: PropTypes.node,
};

ToasterComponent.defaultProps = {
  autoClose: 4000,
  closeButton: false,
  closeOnClick: true,
  draggable: false,
  hideProgressBar: true,
  limit: 1,
  portalProps: {},
  toastContainerProps: {},
  transition: Zoom,
};

export { ToasterComponent };
