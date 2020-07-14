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
  background: 'rgba(0, 0, 0, 0.8)',
  borderRadius: 4,
  children: '',
  color: 'white',
  display: 'inline-block',
  flexContainerProps: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  m: [2, null, 3],
  maxWidth: [1, 600],
  minWidth: 300,
  p: 3,
};
