import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import { getGlobalStyles } from 'src/global-styles';

const { grid: gridSchema } = getGlobalStyles();

const listFactory = (props, listTag = 'ul') => {
  const { unstyled, ...otherProps } = props;
  const ProtoList = styled[listTag]`
    ${textStylesBase()}
    margin: 0 0 ${gridSchema.gutter};
    padding-left:  ${unstyled ? '0' : '2.5rem'};
    ${unstyled ? 'list-style: none;' : ''}
  `;
  return <ProtoList {...otherProps} />;
};

listFactory.propTypes = {
  unstyled: PropTypes.bool,
};

listFactory.defaultProps = {
  unstyled: false,
};

const List = props => listFactory(props);

List.ul = List;
List.ol = props => listFactory(props, 'ol');

export { List };
