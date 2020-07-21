import React from 'react';
import { toast } from 'react-toastify';
import { Alert } from 'src/elements/Alert';
import { Button } from 'src/elements/Button';
import { resolveBoxShadow } from 'src/utils/styledHelpers';

const getCloseButton = ({
  closeButton,
  closeToast,
}) => {
  if (!closeButton) {
    return null;
  }
  return ({
    alertAction: (
      <Button
        bgActiveColor="rgba(255,255,255,0.2)"
        bgHoverColor="rgba(255,255,255,0.1)"
        m={0}
        onClick={closeToast}
        pb={0}
        pl={2}
        pr={2}
        pt={0}
        width={28}
      >
        &times;
      </Button>
    ),
    alertActionProps: {
      mr: -1,
    },
  });
};

const alertToast = (alertMessage, props = {}) => () => {
  const {
    autoClose,
    bodyClassName,
    className,
    closeButton = true,
    closeOnClick,
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
      boxShadow={resolveBoxShadow('02')}
      progressProps={{
        animationDuration: `${autoClose}ms`,
        isDeterminate: true,
        loop: false,
      }}
      showProgress={!hideProgressBar && autoClose > 0}
      {...getCloseButton(nativeToastProps)}
      {...props}
    >
      {alertMessage}
    </Alert>, { nativeToastProps }
  );
};

export { alertToast };
