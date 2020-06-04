import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'src/elements/grid';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { cardDefaultProps, cardPropTypes } from './utils';

export const CardComponent = ({
  children,
  ...props
}) => (
  <div {...removeSomeProps(props, Object.keys(cardPropTypes))}>
    {children}
  </div>
);

CardComponent.propTypes = {
  children: PropTypes.any,
  ...cardPropTypes,
};

CardComponent.defaultProps = {
  children: null,
  ...cardDefaultProps,
};
