import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withHideable } from 'src/elements/utils/Hideable';
import { AlertComponent } from './component';
import {
  alertVariants,
  Toaster,
} from './utils';

const Alert = styled(withHideable(AlertComponent))`
  ${alertVariants}
`;

Alert.propTypes = {
  /** Define a component in the action area of an alert. */
  alertAction: PropTypes.node,
  /** Define the props on the containing `<Box>` component for the alert action. */
  alertActionProps: PropTypes.object,
  /** Define the color and variantName for the theme. */
  alertThemes: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      variantName: PropTypes.string,
    })
  ),
  children: PropTypes.any,
  /** Define the props on the `<Flex>` component containing the `children` and `alertAction`. */
  flexContainerProps: PropTypes.object,
  /** Define the variant used for the `<Alert>`.
   * Variant options are:
   * '`alertThemes.variantName`',
   * 'contained-`alertThemes.variantName`',
   * 'outlined-`alertThemes.variantName`', */
  variant: PropTypes.any,
};

Alert.defaultProps = {
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
  overflow: 'hidden',
  progressPlacement: 'bottom',
  px: 3,
  py: 2,
  variant: 'contained-default',
};

Alert.ToastContainer = Toaster;

/** @component */
export { Alert };
