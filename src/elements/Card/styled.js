import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import { withHideable } from 'src/elements/utils/Hideable';
import { Box, Flex } from 'src/elements/grid';
import { Header, Paragraph } from 'src/elements/typography';
import { CardComponent } from './component';
import { cardPropTypes, cardDefaultProps } from './utils';

const Card = styled(withHideable(CardComponent))``;

Card.propTypes = {
  ...cardPropTypes,
};

Card.defaultProps = {
  ...cardDefaultProps,
};

const subComponentStarter = [
  {
    component: Flex,
    componentDefaultProps: {},
    componentPropTypes: {},
    name: 'Actions',
  },
  {
    component: Box,
    componentDefaultProps: {},
    componentPropTypes: {},
    name: 'Body',
  },
  {
    component: Box,
    componentDefaultProps: {},
    componentPropTypes: {},
    name: 'Inner',
  },
  {
    component: Box,
    componentDefaultProps: {
      width: 1,
    },
    componentPropTypes: {
      ...propTypes.layout,
    },
    name: 'RichMedia',
  },
  {
    component: Box,
    componentDefaultProps: {
      width: 1,
    },
    componentPropTypes: {
      ...propTypes.layout,
    },
    name: 'SecondaryMedia',
  },
  {
    component: Paragraph,
    componentDefaultProps: {
      color: 'gray',
      mb: 0,
      sm: true,
    },
    componentPropTypes: {
      ...propTypes.space,
      color: PropTypes.string,
      sm: PropTypes.bool,
    },
    name: 'Subtitle',
  },
  {
    component: Box,
    componentDefaultProps: {},
    componentPropTypes: {},
    name: 'Thumbnail',
  },
  {
    component: Header.h5,
    componentDefaultProps: {
      mb: 0,
    },
    componentPropTypes: {
      ...propTypes.space,
    },
    name: 'Title',
  },
];

subComponentStarter.forEach(starter => {
  const {
    name,
    componentDefaultProps,
    componentPropTypes,
    component: SubComponent,
  } = starter;
  Card[name] = props => {
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    return (
      <SubComponent {...props}>{children}</SubComponent>
    );
  };
  Card[name].propTypes = {
    ...componentPropTypes,
    children: PropTypes.node,
  };
  Card[name].defaultProps = {
    ...componentDefaultProps,
    children: '',
  };
});

/** @component */
export { Card };
