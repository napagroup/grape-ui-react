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


const ListFactory = factoryProps => {
  const { tag } = factoryProps;
  const ListComponent = ({
    children, className, ...props
  }) => {
    if (tag === 'ol') {
      return (
        <ol {...passThrough(ListComponent, props)} className={className}>
          {children}
        </ol>);
    }
    return (
      <ul {...passThrough(ListComponent, props)} className={className}>
        {children}
      </ul>);
  };
  ListComponent.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
    inline: PropTypes.bool,
    ...typography.propTypes,
    unstyled: PropTypes.bool,
  };
  ListComponent.defaultProps = {
    className: '',
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

const List = ListFactory({ tag: 'ul' });
List.ul = List;
List.ol = ListFactory({ tag: 'ol' });
List.propTypes = {
  inline: PropTypes.bool,
  ...typography.propTypes,
  unstyled: PropTypes.bool,
};
export { List };
