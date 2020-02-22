import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  border,
  boxShadow,
  buttonStyle,
  display,
  flexbox,
  fontWeight,
  layout,
  lineHeight,
  maxWidth,
  position,
  space,
  verticalAlign,
} from 'styled-system';
import {
  borderRadiusCore,
  colorCore,
  defaultStylesBase,
  ellipsisCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  POSITION_DEFAULT_VALUE,
  resolveBoxShadow,
  resolveColor,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import propTypes from '@styled-system/prop-types';
import { activeColorButton, hoverColorButton } from './utils';
import { ButtonComponent } from './component';

const borderButton = props => border({
  ...props,
  border: props.outline ? props.border : '0',
});

const boxShadowButtonMemoized = (value = '01') => props => boxShadow({
  ...props,
  boxShadow: props.raised ? resolveBoxShadow(value) : '',
});

const scaleButton = props => {
  const {
    pb: pbProps,
    pl: plProps,
    pr: prProps,
    pt: ptProps,
  } = props;
  let pb = pbProps;
  let pl = plProps;
  let pr = prProps;
  let pt = ptProps;
  const { sm, lg } = props;
  if (lg) {
    pb = 2;
    pl = 4;
    pr = 4;
    pt = 2;
  } else if (sm) {
    pb = 0;
    pl = 2;
    pr = 2;
    pt = 0;
  }
  const nextProps = {
    ...props,
    pb,
    pl,
    pr,
    pt,
  };
  return space(nextProps);
};


const Button = styled(ButtonComponent)`
  ${borderButton}
  ${borderRadiusCore}
  ${boxShadowButtonMemoized()}
  ${buttonStyle}
  ${colorCore}
  ${flexbox}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${layout}
  ${letterSpacingCore}
  ${lineHeight}
  ${position}
  ${scaleButton}
  ${textAlignCore}
  ${textDecorationCore}
  outline: 0;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    ${hoverColorButton};
  }
  &:active {
    ${boxShadowButtonMemoized('02')};
    ${activeColorButton};
  }
  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
    cursor: not-allowed;
  }
  > div {
    ${borderRadiusCore}
    ${display}
    ${ellipsisCore}
    ${maxWidth}
    ${verticalAlign}
  }
`;

Button.propTypes = {
  /** Defines the active background color for the control. */
  bgActiveColor: PropTypes.string,
  /** Defines the hover background color for the control. */
  bgHoverColor: PropTypes.string,
  ...boxShadow.propTypes,
  /** Makes the button a "contained" button.
   * @see See [Material Design/Components/Buttons/Contained Button](https://material.io/components/buttons/#contained-button) for more on this style. */
  contained: PropTypes.bool,
  ...display.propTypes,
  ...fontWeight.propTypes,
  /** Will use an anchor tag instead of a button tag. */
  href: PropTypes.string,
  ...lineHeight.propTypes,
  ...maxWidth.propTypes,
  /** Makes the button a "contained" button.
   * @see See [Material Design/Components/Buttons/Outlined Button](https://material.io/components/buttons/#outlined-button) for more on this style. */
  outline: PropTypes.bool,
  ...position.propTypes,
  /** Makes the button a "raised" button.
   * @see See [Material Design/Components/Buttons/Hierarchy and Placement](https://material.io/components/buttons/#hierarchy-placement) for more on this style. */
  raised: PropTypes.bool,
  ...space.propTypes,
  /** Will use react-router's Link component. You will still need to wrap this in a Router component. */
  to: PropTypes.string,
  ...typography.propTypes,
  ...propTypes.border,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
};

Button.defaultProps = {
  ...defaultStylesBase,
  bg: null,
  bgActiveColor: null,
  bgHoverColor: null,
  border: `1px solid ${resolveColor('borderColor')}`,
  borderRadius: '',
  color: null,
  contained: false,
  display: 'inline-block',
  href: null,
  m: 1,
  maxWidth: '100%',
  outline: false,
  pb: 1,
  pl: 3,
  position: POSITION_DEFAULT_VALUE,
  pr: 3,
  pt: 1,
  raised: false,
  textAlign: 'center',
  textDecoration: 'none',
  to: null,
  verticalAlign: 'top',
};

/** @component */
export { Button };
