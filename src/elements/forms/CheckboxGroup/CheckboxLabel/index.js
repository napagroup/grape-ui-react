
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight } from 'styled-system';
import {
  colorCore,
  ellipsisCore,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  scaleFont,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { getGlobalStyles } from 'src/global-styles';

const { grid: { gutter } } = getGlobalStyles();
const opacity = props => `${props.disabled ? 'opacity: 0.6;' : ''}`;
const marginRight = () => `margin-right: ${scaleFont(gutter, 1)};`;
const CheckboxLabelComponent = ({ children, ...props }) => {
  const propsToTrim = [
    ...Object.keys(typography.propTypes),
  ];
  const labelProps = removeSomeProps(props, propsToTrim);
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for
    <label {...labelProps}>
      { children }
    </label>
  );
};

CheckboxLabelComponent.propTypes = {
  children: PropTypes.any,
};

CheckboxLabelComponent.defaultProps = {
  children: null,
};

const CheckboxLabel = styled(CheckboxLabelComponent)`
  ${colorCore}
  ${ellipsisCore}
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${marginRight}
  ${opacity}
  align-items: baseline;
  align-self: flex-start;
  cursor: pointer;
`;

export { CheckboxLabel };
