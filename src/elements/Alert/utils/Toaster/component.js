import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import { ToastContainer } from 'react-toastify';
import { Box } from 'src/elements/grid';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { animationCss } from '.';
import { toasterDefaultProps, toasterPropTypes } from './props';

const OuterToastContainer = props => {
  const {
    children,
    toastPortalTarget,
    ...otherProps
  } = props;
  if (toastPortalTarget) {
    return (
      <Portal
        node={toastPortalTarget}
        {...otherProps}
      >
        {children}
      </Portal>
    );
  }
  return <Box {...otherProps}>{children}</Box>;
};

OuterToastContainer.propTypes = {
  children: PropTypes.any,
  toastPortalTarget: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.instanceOf(Element),
  ]),
};

OuterToastContainer.defaultProps = {
  children: '',
  toastPortalTarget: document.body,
};

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
    toastPortalTarget,
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
  const outerToastContainerProps = {
    ...portalProps,
    toastPortalTarget,
  };
  return (
    <OuterToastContainer {...outerToastContainerProps}>
      <style>
        {animationCss}
      </style>
      <Box {...removeSomeProps(props, Object.keys(propsToTrim))}>
        <ToastContainer closeButton={closeButton} {...baseToastContainerProps} />
      </Box>
    </OuterToastContainer>
  );
};

ToasterComponent.propTypes = {
  ...toasterPropTypes,
};

ToasterComponent.defaultProps = {
  ...toasterDefaultProps,
};

export { ToasterComponent };
