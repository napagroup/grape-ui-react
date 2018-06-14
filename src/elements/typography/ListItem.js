import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from './utils';
import { passThrough } from '../../utils/componentHelpers';

const { grid: gridSchema } = getGlobalStyles();

export const ListItem = props => {
  const actualBase = textStylesBase(props);
  const { gutter } = gridSchema;
  const ProtoListItem = styled.li`
    ${actualBase}
    margin-bottom: ${getScaledSize(gutter, 0.25)};
  `;
  return <ProtoListItem {...passThrough(ListItem, props)} />;
};

ListItem.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
};

ListItem.defaultProps = {
  color: defaultTextStylesBase.color,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
};
