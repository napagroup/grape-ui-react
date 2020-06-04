import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'src/elements/Card';

export const getCardRichMedia = ({
  cardRichMedia,
  cardRichMediaProps,
}) => {
  if (cardRichMedia) {
    return <Card.RichMedia {...cardRichMediaProps}>{cardRichMedia}</Card.RichMedia>;
  }
  return null;
};

getCardRichMedia.propTypes = {
  cardRichMedia: PropTypes.node,
  cardRichMediaProps: PropTypes.object,
};

getCardRichMedia.defaultProps = {
  cardRichMedia: '',
  cardRichMediaProps: {},
};
