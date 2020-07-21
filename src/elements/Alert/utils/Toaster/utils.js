import React from 'react';
import { toast } from 'react-toastify';
import { Alert } from 'src/elements/Alert';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { resolveBoxShadow } from 'src/utils/styledHelpers';

const alertToast = (alertMessage, props = {}) => () => {
  const {
    autoClose,
    bodyClassName,
    className,
    closeButton,
    closeOnClick,
    closeToast,
    containerId,
    delay,
    draggable,
    draggablePercent,
    hideProgressBar,
    onClick,
    onClose,
    onOpen,
    pauseOnFocusLoss,
    pauseOnHover,
    position,
    progressClassName,
    progressStyle,
    render,
    role,
    style,
    transition,
  } = props;
  const nativeToastProps = {
    autoClose,
    bodyClassName,
    className,
    closeButton,
    closeOnClick,
    closeToast,
    containerId,
    delay,
    draggable,
    draggablePercent,
    hideProgressBar,
    onClick,
    onClose,
    onOpen,
    pauseOnFocusLoss,
    pauseOnHover,
    position,
    progressClassName,
    progressStyle,
    render,
    role,
    style,
    transition,
  };
  return toast(
    <Alert
      alertActionProps={{
        mr: 2,
      }}
      boxShadow={resolveBoxShadow('02')}
      progressProps={{
        animationDuration: `${autoClose}ms`,
        isDeterminate: true,
        loop: false,
      }}
      showProgress={!hideProgressBar && autoClose > 0}
      {...removeSomeProps(props, Object.keys(nativeToastProps))}
    >
      {alertMessage}
    </Alert>, { nativeToastProps }
  );
};

export { alertToast };
