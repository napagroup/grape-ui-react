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
import { getCardBody } from 'src/elements/Card/subComponents';
import { getCardActions } from '../CardActions';

export const getCardSecondaryMedia = props => {
  const {
    cardBody,
    cardPadding,
    cardSecondaryMedia,
    cardSecondaryMediaProps,
  } = props;
  if (cardSecondaryMedia) {
    return (
      <Box pb={cardBody ? cardPadding : ''}>
        <Card.SecondaryMedia
          pb={(cardBody || getCardActions(props)) ? cardPadding : ''}
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
  ...cardBasePropTypes,
  ...cardSecondaryMediaBasePropTypes,
};

getCardSecondaryMedia.defaultProps = {
  ...cardBaseDefaultProps,
  ...cardSecondaryMediaBaseDefaultProps,
};
