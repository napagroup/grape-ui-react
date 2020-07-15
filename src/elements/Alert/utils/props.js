import PropTypes from 'prop-types';

export const alertPropTypes = {
  alertAction: PropTypes.node,
  alertActionProps: PropTypes.object,
  children: PropTypes.any,
  flexContainerProps: PropTypes.object,
};

export const alertDefaultProps = {
  alertAction: null,
  alertActionProps: {},
  borderRadius: 4,
  children: '',
  display: 'inline-block',
  flexContainerProps: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  m: [2, null, 3],
  maxWidth: [1, 600],
  minWidth: 300,
  px: 3,
  py: 2,
  variant: 'contained-default',
};
