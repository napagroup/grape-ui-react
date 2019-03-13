import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  alignContent,
  alignItems,
  alignSelf,
  border,
  borderRadius,
  borderWidth,
  bottom,
  boxShadow,
  buttonStyle,
  display,
  flexBasis,
  flexDirection,
  flexWrap,
  fontWeight,
  height,
  justifyContent,
  left,
  lineHeight,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  right,
  size,
  space,
  top,
  width,
  zIndex,
} from 'styled-system';
import {
  colorCore,
  defaultStylesBase,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  resolveBoxShadow,
  resolveColor,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import {
  lineHeightButton,
  positionButton,
} from './utils';
import { ButtonComponent } from './component';

const borderButton = props => border({
  ...props,
  border: props.outline ? props.border : '',
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

export const Button = styled(ButtonComponent)`
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${borderButton}
  ${borderRadius}
  ${borderWidth}
  ${boxShadowButtonMemoized()}
  ${bottom}
  ${buttonStyle}
  ${colorCore}
  ${display}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${height}
  ${justifyContent}
  ${left}
  ${letterSpacingCore}
  ${lineHeightButton}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${positionButton}
  ${right}
  ${scaleButton}
  ${size}
  ${textAlignCore}
  ${textDecorationCore}
  ${top}
  ${width}
  ${zIndex}
  outline: 0;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
  &:active {
    ${boxShadowButtonMemoized('02')}
  }
  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...border.propTypes,
  ...borderRadius.propTypes,
  ...bottom.propTypes,
  ...boxShadow.propTypes,
  contained: PropTypes.bool,
  ...display.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...fontWeight.propTypes,
  ...height.propTypes,
  href: PropTypes.string,
  ...justifyContent.propTypes,
  ...left.propTypes,
  ...lineHeight.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  outline: PropTypes.bool,
  ...position.propTypes,
  raised: PropTypes.bool,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  to: PropTypes.string,
  ...top.propTypes,
  ...typography.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
};

Button.defaultProps = {
  ...defaultStylesBase,
  bg: null,
  border: `1px solid ${resolveColor('borderColor')}`,
  borderRadius: '4px',
  color: null,
  contained: false,
  display: 'inline-block',
  href: null,
  m: 1,
  outline: false,
  pb: 1,
  pl: 3,
  pr: 3,
  pt: 1,
  raised: false,
  textAlign: 'center',
  textDecoration: 'none',
  to: null,
};
