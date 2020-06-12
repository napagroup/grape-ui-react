import React from 'react';
import { Card } from 'src/elements/Card';
import {
  cardRichMediaBasePropTypes,
  cardRichMediaBaseDefaultProps,
} from 'src/elements/Card/utils';

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
  ...cardRichMediaBasePropTypes,
};

getCardRichMedia.defaultProps = {
  ...cardRichMediaBaseDefaultProps,
};
