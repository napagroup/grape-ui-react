import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { ToastCloseButton, Zoom } from './styledHelpers';

export const toasterPropTypes = {
  autoClose: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  closeButton: PropTypes.any,
  closeButtonCss: PropTypes.any,
  closeOnClick: PropTypes.bool,
  closeToast: PropTypes.any,
  draggable: PropTypes.bool,
  hideProgressBar: PropTypes.bool,
  limit: PropTypes.number,
  portalProps: PropTypes.object,
  toastContainerProps: PropTypes.object,
  toastPlacement: PropTypes.oneOf([
    'bottom-center',
    'bottom-left',
    'bottom-right',
    'top-center',
    'top-left',
    'top-right',
  ]),
  transition: PropTypes.any,
};

export const toasterDefaultProps = {
  autoClose: 4000,
  boxSizing: 'border-box',
  closeButton: ToastCloseButton,
  closeButtonCss: css`.Toastify__toast-body {
    > div {
      margin: 0;
    }
    + button {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%) translateY(-6px);
    }
  }`,
  closeOnClick: true,
  closeToast: () => {},
  draggable: false,
  hideProgressBar: true,
  limit: 1,
  portalProps: {},
  position: 'fixed',
  toastContainerProps: {},
  toastPlacement: 'bottom-center',
  transition: Zoom,
};
