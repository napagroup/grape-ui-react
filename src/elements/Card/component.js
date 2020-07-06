import React from 'react';
import { Box } from 'src/elements/grid';
import { getProgress } from 'src/elements/Progress';
import { Hideable } from 'src/elements/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  cardDefaultProps,
  cardPropTypes,
} from './utils';
import {
  CardHeader,
  CardInner,
  getCardActions,
  getCardBody,
  getCardRichMedia,
  getCardSecondaryMedia,
} from './subComponents';

export const CardComponent = props => {
  const {
    cardPadding,
    cardSecondaryMedia,
    children,
  } = props;
  return (
    <Box {...removeSomeProps(props, Object.keys(cardPropTypes))}>
      {getCardRichMedia(props)}
      <CardInner {...props}>
        <CardHeader {...props} />
        {!cardSecondaryMedia ? getCardBody(props) : ''}
        {children ? <Box p={cardPadding}>{children}</Box> : ''}
      </CardInner>
      {getCardSecondaryMedia(props)}
      {getCardActions(props)}
    </Box>
  );
};

CardComponent.propTypes = {
  ...cardPropTypes,
};

CardComponent.defaultProps = {
  ...cardDefaultProps,
};
