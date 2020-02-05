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
  bgActiveColor: PropTypes.string,
  bgHoverColor: PropTypes.string,
  ...boxShadow.propTypes,
  contained: PropTypes.bool,
  ...display.propTypes,
  ...fontWeight.propTypes,
  href: PropTypes.string,
  ...lineHeight.propTypes,
  ...maxWidth.propTypes,
  outline: PropTypes.bool,
  ...position.propTypes,
  raised: PropTypes.bool,
  ...space.propTypes,
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
