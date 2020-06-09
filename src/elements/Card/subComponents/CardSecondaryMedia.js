import React from 'react';
import { Card } from 'src/elements/Card';
import {
  cardActionsBasePropTypes,
  cardActionsBaseDefaultProps,
  cardBasePropTypes,
  cardBaseDefaultProps,
  cardSecondaryMediaBasePropTypes,
  cardSecondaryMediaBaseDefaultProps,
} from 'src/elements/Card/utils';
import { Box } from 'src/elements/grid';
import { getCardBody } from './CardBody';

export const getCardSecondaryMedia = props => {
  const {
    cardActions,
    cardBody,
    cardPadding,
    cardSecondaryMedia,
    cardSecondaryMediaProps,
  } = props;
  if (cardSecondaryMedia) {
    return (
      <Box pb={cardBody ? cardPadding : ''}>
        <Card.SecondaryMedia
          pb={(cardBody || cardActions) ? cardPadding : ''}
          {...cardSecondaryMediaProps}
        >
          {cardSecondaryMedia}
        </Card.SecondaryMedia>
        {getCardBody(props)}
      </Box>
    );
  }
  return null;
};

getCardSecondaryMedia.propTypes = {
  ...cardActionsBasePropTypes,
  ...cardBasePropTypes,
  ...cardSecondaryMediaBasePropTypes,
};

getCardSecondaryMedia.defaultProps = {
  ...cardActionsBaseDefaultProps,
  ...cardBaseDefaultProps,
  ...cardSecondaryMediaBaseDefaultProps,
};
