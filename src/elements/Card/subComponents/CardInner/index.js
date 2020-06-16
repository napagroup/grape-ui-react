import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'src/elements/grid';
import {
  cardBaseDefaultProps,
  cardBasePropTypes,
  cardBodyBaseDefaultProps,
  cardBodyBasePropTypes,
  cardHeaderBaseDefaultProps,
  cardHeaderBasePropTypes,
  cardInnerBaseDefaultProps,
  cardInnerBasePropTypes,
} from 'src/elements/Card/utils';
import { getCardHeader } from '../CardHeader';

const getPaddingBottom = props => {
  const {
    cardBody,
    cardPadding,
    cardSecondaryMedia,
  } = props;
  if ((getCardHeader(props) || cardBody) && !cardSecondaryMedia) {
    return cardPadding;
  }
  return '';
};

const getPaddingX = props => {
  const {
    cardBody,
    cardPadding,
  } = props;
  if (getCardHeader(props) || cardBody) {
    return cardPadding;
  }
  return '';
};

const getPaddingTop = props => {
  const {
    cardActions,
    cardActionsLeft,
    cardActionsRight,
    cardPadding,
  } = props;
  if (!getCardHeader(props) && (cardActions || cardActionsLeft || cardActionsRight)) {
    return cardPadding;
  }
  return '';
};

export const CardInner = props => {
  const {
    cardInnerProps,
    children,
  } = props;
  return (
    <Box
      pb={getPaddingBottom(props)}
      pt={getPaddingTop(props)}
      px={getPaddingX(props)}
      {...cardInnerProps}
    >
      {children}
    </Box>
  );
};

CardInner.propTypes = {
  ...cardBasePropTypes,
  ...cardBodyBasePropTypes,
  ...cardHeaderBasePropTypes,
  ...cardInnerBasePropTypes,
  children: PropTypes.node,
};

CardInner.defaultProps = {
  ...cardBaseDefaultProps,
  ...cardBodyBaseDefaultProps,
  ...cardHeaderBaseDefaultProps,
  ...cardInnerBaseDefaultProps,
  cardPadding: [2, null, 3],
  children: '',
};
