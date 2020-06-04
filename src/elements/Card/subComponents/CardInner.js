import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'src/elements/grid';

const getPadding = props => {
  const {
    cardBody,
    cardPadding,
    cardSubtitle,
    cardTitle,
  } = props;
  if (cardTitle || cardSubtitle || cardBody) {
    return cardPadding;
  }
  return '';
};

const getPaddingTop = props => {
  const {
    cardActions,
    cardBody,
    cardPadding,
    cardSubtitle,
    cardTitle,
  } = props;
  if (!cardTitle && !cardSubtitle && !cardBody && cardActions) {
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
      pb={getPadding(props)}
      pt={getPaddingTop(props)}
      px={getPadding(props)}
      {...cardInnerProps}
    >
      {children}
    </Box>
  );
};

CardInner.propTypes = {
  cardBody: PropTypes.node,
  cardInnerProps: PropTypes.object,
  cardPadding: PropTypes.any,
  cardSubtitle: PropTypes.string,
  cardTitle: PropTypes.string,
  children: PropTypes.node,
};

CardInner.defaultProps = {
  cardBody: '',
  cardInnerProps: {},
  cardPadding: [2, null, 3],
  cardSubtitle: '',
  cardTitle: '',
  children: '',
};
