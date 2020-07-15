import styled from 'styled-components';
import { variant } from 'styled-system';
import {
  readableColor,
  transparentize,
} from 'polished';
import { withHideable } from 'src/elements/utils/Hideable';
import { getGlobalOverrides } from 'src/global-styles';
import { resolveColor } from 'src/utils/styledHelpers';
import { AlertComponent } from './component';
import { alertDefaultProps } from './utils';

const alertThemes = [
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
];

const callback = (acc, cur) => ({
  ...acc,
  [cur.variantName]: {
    bg: transparentize(0.825, resolveColor(cur.color, getGlobalOverrides())),
    color: resolveColor(cur.color, getGlobalOverrides()),
  },
  [`contained-${[cur.variantName]}`]: {
    bg: resolveColor(cur.color, getGlobalOverrides()),
    color: readableColor(resolveColor(cur.color, getGlobalOverrides())),
  },
  [`outlined-${[cur.variantName]}`]: {
    bg: 'transparent',
    borderColor: resolveColor(cur.color, getGlobalOverrides()),
    borderStyle: 'solid',
    borderWidth: 1,
    color: resolveColor(cur.color, getGlobalOverrides()),
  },
});

const alertVariants = alertThemes.reduce(callback, {});

const Alert = styled(withHideable(AlertComponent))`
  ${variant({
    variants: alertVariants,
  })}
`;

Alert.defaultProps = {
  ...alertDefaultProps,
};

/** @component */
export { Alert };
