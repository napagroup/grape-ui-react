import React from 'react';
import { Portal } from 'react-portal';
import { ToastContainer } from 'react-toastify';
import { Box } from 'src/elements/grid';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { animationCss } from '.';
import { toasterDefaultProps, toasterPropTypes } from './props';

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
    closeOnClick,
    draggable,
    hideProgressBar,
    limit,
    transition,
    ...toastContainerProps,
  };
  const propsToTrim = {
    ...baseToastContainerProps,
    ...toasterPropTypes,
  };
  return (
    <Portal {...portalProps}>
      <style>
        {animationCss}
      </style>
      <Box {...removeSomeProps(props, Object.keys(propsToTrim))}>
        <ToastContainer closeButton={closeButton} {...baseToastContainerProps} />
      </Box>
    </Portal>
  );
};

ToasterComponent.propTypes = {
  ...toasterPropTypes,
};

ToasterComponent.defaultProps = {
  ...toasterDefaultProps,
};

export { ToasterComponent };
