import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from './utils';
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getLetterSpacing,
  getLineHeight,
  getFontStyle,
  getColor,
  getTextAlign,
  getTextDecoration,
  typography,
} from './textStyles';
import { passThrough } from 'src/utils/componentHelpers';

const { grid: { gutter } } = getGlobalStyles();

const ListItemComponent = ({ children, ...props }) => (
  <li {...passThrough(ListItemComponent, props)}>
    {children}
  </li>
);
ListItemComponent.propTypes = {
  children: PropTypes.any.isRequired,
  ...typography.propTypes,
};

export const ListItem = styled(ListItemComponent)`
  ${getFontFamily}
  ${getFontSize}
  ${getFontWeight}
  ${getLetterSpacing}
  ${getLineHeight}
  ${getFontStyle}
  ${getColor}
  ${getTextAlign}
  ${getTextDecoration}
  margin-bottom: ${getScaledSize(gutter, 0.25)};
  `;

ListItem.propTypes = {
  ...typography.propTypes,
};
