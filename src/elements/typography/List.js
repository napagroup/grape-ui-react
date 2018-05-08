import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { textStylesBase } from './textStyles';
import * as gridSchema from '../../assets/json/grid.json';

const listFactory = (props, listTag = 'ul') => {
  const { unstyled, ...otherProps } = props;
  let paddingLeft = '2.5rem';
  let listStyle = '';
  if (unstyled) {
    paddingLeft = '0';
    listStyle = 'list-style: none;';
  };
  const ProtoList = styled[listTag]`
    ${textStylesBase({})}
    margin: 0 0 ${gridSchema.gutter};
    padding-left: ${paddingLeft};
    ${listStyle}
  `;
  return <ProtoList {...otherProps} />;
};

const List = props => listFactory(props);

List.ul = List;
List.ol = props => listFactory(props, 'ol');

export { List };
