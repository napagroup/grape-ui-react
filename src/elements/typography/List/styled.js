import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from '../utils';
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
} from '../textStyles';
import { passThrough } from 'src/utils/componentHelpers';

const { grid: gridSchema } = getGlobalStyles();

const getInLineStyles = props => {
  const inlineStyles = `
    > li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: ${getScaledSize(gridSchema.gutter, 0.5)};
      }
    }
  `;
  return `${props.inline ? inlineStyles : ''}`;
};

const getPaddingLeft = props => `padding-left:  ${(props.unstyled || props.inline) ? '0' : '2.5rem'};`;
const getListStyle = props => `${props.unstyled ? '> li { list-style: none; }' : ''}`;

const listFactory = factoryProps => {
  const { tag } = factoryProps;
  const ListComponent = ({
    children, ...props
  }) => React.createElement(tag, passThrough(ListComponent, props), children);
  ListComponent.propTypes = {
    children: PropTypes.any.isRequired,
    inline: PropTypes.bool,
    ...typography.propTypes,
    unstyled: PropTypes.bool,
  };
  ListComponent.defaultProps = {
    inline: false,
    unstyled: false,
  };

  return styled(ListComponent)`
    ${getFontFamily}
    ${getFontSize}
    ${getFontWeight}
    ${getLetterSpacing}
    ${getLineHeight}
    ${getFontStyle}
    ${getColor}
    ${getTextAlign}
    ${getTextDecoration}
    margin: 0 0 ${gridSchema.gutter};
    ${getPaddingLeft}
    ${getListStyle}
    ${getInLineStyles}
    `;
};

const List = listFactory({ tag: 'ul' });
List.ul = List;
List.ol = listFactory({ tag: 'ol' });
List.propTypes = {
  inline: PropTypes.bool,
  ...typography.propTypes,
  unstyled: PropTypes.bool,
};
export { List };
