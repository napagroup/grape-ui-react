import React from 'react';
import { Card } from 'src/elements/Card';
import {
  cardBaseDefaultProps,
  cardBasePropTypes,
  cardBodyBaseDefaultProps,
  cardBodyBasePropTypes,
  cardSecondaryMediaBasePropTypes,
  cardSecondaryMediaBaseDefaultProps,
} from 'src/elements/Card/utils';

const getPaddingTop = ({
  cardPadding,
  cardSubtitle,
  cardThumbnail,
  cardTitle,
}) => {
  if (!cardTitle && !cardThumbnail && !cardSubtitle) {
    return cardPadding;
  }
  return '';
};

export const getCardBody = props => {
  const {
    cardBody,
    cardBodyProps,
    cardPadding,
    cardSecondaryMedia,
  } = props;
  if (cardBody) {
    return (
      <Card.Body
        pt={getPaddingTop(props)}
        px={cardSecondaryMedia ? cardPadding : ''}
        {...cardBodyProps}
      >
        {cardBody}
      </Card.Body>
    );
  }
  return null;
};

getCardBody.propTypes = {
  ...cardBasePropTypes,
  ...cardBodyBasePropTypes,
  ...cardSecondaryMediaBasePropTypes,
};

getCardBody.defaultProps = {
  ...cardBaseDefaultProps,
  ...cardBodyBaseDefaultProps,
  ...cardSecondaryMediaBaseDefaultProps,
};
