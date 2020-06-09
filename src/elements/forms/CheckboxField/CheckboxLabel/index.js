
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  fontWeight,
  layout,
  space,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
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
const CheckboxLabelComponent = ({ children, ...props }) => {
  const propsToTrim = [
    ...Object.keys(typography.propTypes),
    ...Object.keys(propTypes.flexbox),
    ...Object.keys(propTypes.layout),
    ...Object.keys(propTypes.space),
    'controlGroupProps',
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
  ${layout}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${fontStyleCore}
  ${textAlignCore}
  ${textDecorationCore}
  ${opacity}
  ${space}
  cursor: pointer;
`;

CheckboxLabel.defaultProps = {
  display: 'inline-block',
  mr: scaleFont(gutter, 1),
};

export { CheckboxLabel };
