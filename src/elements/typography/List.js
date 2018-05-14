import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';

const { grid: gridSchema } = getGlobalStyles();

const getInLineStyles = inline => {
  const inlineStyles = `
    > li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: calc(${gridSchema.gutter} / 2);
      }
    }
  `;
  return `${inline ? inlineStyles : ''}`;
};

const listFactory = props => {
  const {
    inline, unstyled, tag: listTag, ...otherProps
  } = props;
  const tag = listTag || 'ul';

  const ProtoList = styled[tag]`
    ${textStylesBase()}
    margin: 0 0 ${gridSchema.gutter};
    padding-left:  ${(unstyled || inline) ? '0' : '2.5rem'};
    ${unstyled ? '> li { list-style: none; }' : ''}
    ${getInLineStyles(inline)}
  `;
  return <ProtoList {...otherProps} />;
};

listFactory.propTypes = {
  inline: PropTypes.bool,
  tag: PropTypes.string,
  unstyled: PropTypes.bool,
};

listFactory.defaultProps = {
  inline: false,
  tag: 'ul',
  unstyled: false,
};

const List = props => listFactory(props);

List.ul = List;
List.ol = props => listFactory({ ...props, tag: 'ol' });

export { List };
