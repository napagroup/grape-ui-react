import PropTypes from 'prop-types';

const alertStyledProps = {
  borderRadius: 4,
  display: 'inline-block',
  m: [2, null, 3],
  maxWidth: [1, 600],
  minWidth: 300,
  overflow: 'hidden',
  px: 3,
  py: 2,
  variant: 'contained-default',
};

export const alertPropTypes = {
  alertAction: PropTypes.node,
  alertActionProps: PropTypes.object,
  alertThemes: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      variantName: PropTypes.string,
    })
  ),
  children: PropTypes.any,
  flexContainerProps: PropTypes.object,
  variant: PropTypes.any,
};

export const alertDefaultProps = {
  alertAction: null,
  alertActionProps: {},
  alertThemes: [
    {
      color: 'black',
      variantName: 'default',
    },
    {
      color: 'brandDanger',
      variantName: 'danger',
    },
    {
      color: 'brandDark',
      variantName: 'dark',
    },
    {
      color: 'brandInfo',
      variantName: 'info',
    },
    {
      color: 'brandLight',
      variantName: 'light',
    },
    {
      color: 'brandLink',
      variantName: 'link',
    },
    {
      color: 'brandPrimary',
      variantName: 'primary',
    },
    {
      color: 'brandSecondary',
      variantName: 'secondary',
    },
    {
      color: 'brandSuccess',
      variantName: 'success',
    },
    {
      color: 'brandWarning',
      variantName: 'warning',
    },
  ],
  ...alertStyledProps,
  children: '',
  flexContainerProps: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressPlacement: 'bottom',
};
