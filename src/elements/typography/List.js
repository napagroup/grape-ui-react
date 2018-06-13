import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { defaultTextStylesBase, textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';
import { getScaledSize } from './utils';
import { passThrough } from '../../utils/componentHelpers';

const { grid: gridSchema } = getGlobalStyles();

const getInLineStyles = inline => {
  const inlineStyles = `
    > li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: ${getScaledSize(gridSchema.gutter, 0.5)};
      }
    }
  `;
  return `${inline ? inlineStyles : ''}`;
};

const ListFactory = props => {
  const {
    inline, unstyled, tag: listTag,
  } = props;
  const tag = listTag || 'ul';
  const ProtoList = styled[tag]`
    ${textStylesBase(props)}
    margin: 0 0 ${gridSchema.gutter};
    padding-left:  ${(unstyled || inline) ? '0' : '2.5rem'};
    ${unstyled ? '> li { list-style: none; }' : ''}
    ${getInLineStyles(inline)}
  `;
  return <ProtoList {...passThrough(ListFactory, props)} />;
};

ListFactory.propTypes = {
  color: PropTypes.string,
  display: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  inline: PropTypes.bool,
  kerning: PropTypes.string,
  lg: PropTypes.bool,
  sm: PropTypes.bool,
  tag: PropTypes.string,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  unstyled: PropTypes.bool,
};

ListFactory.defaultProps = {
  color: defaultTextStylesBase.color,
  display: false,
  fontFamily: defaultTextStylesBase.fontFamily,
  fontWeight: defaultTextStylesBase.fontWeight,
  inline: false,
  kerning: defaultTextStylesBase.kerning,
  lg: defaultTextStylesBase.lg,
  sm: defaultTextStylesBase.sm,
  tag: 'ul',
  textAlign: defaultTextStylesBase.textAlign,
  textDecoration: defaultTextStylesBase.textDecoration,
  unstyled: false,
};

const List = props => ListFactory(props);

List.ul = List;
List.ol = props => ListFactory({ ...props, tag: 'ol' });

export { List };
