import React from 'react';
import { Card } from 'src/elements/Card';
import {
  cardBasePropTypes,
  cardBaseDefaultProps,
  cardBodyBaseDefaultProps,
  cardBodyBasePropTypes,
  cardHeaderBaseDefaultProps,
  cardHeaderBasePropTypes,
  cardSecondaryMediaBasePropTypes,
  cardSecondaryMediaBaseDefaultProps,
} from 'src/elements/Card/utils';
import { Box, Flex } from 'src/elements/grid';

const getCardTitle = ({ cardTitle, cardTitleProps }) => {
  if (typeof cardTitle === 'object') {
    return (
      <Box {...cardTitleProps}>
        {cardTitle}
      </Box>
    );
  }
  if (cardTitle) {
    return (
      <Card.Title {...cardTitleProps}>
        {cardTitle}
      </Card.Title>
    );
  }
  return '';
};

const getCardSubtitle = ({ cardSubtitle, cardSubtitleProps }) => {
  if (typeof cardSubtitle === 'object') {
    return (
      <Box {...cardSubtitleProps}>
        {cardSubtitle}
      </Box>
    );
  }
  if (cardSubtitle) {
    return (
      <Card.Subtitle {...cardSubtitleProps}>
        {cardSubtitle}
      </Card.Subtitle>
    );
  }
  return '';
};

const getCardThumbnail = ({
  cardPadding,
  cardThumbnail,
  cardThumbnailProps,
}) => {
  if (cardThumbnail) {
    return (
      <Card.Thumbnail
        pr={cardPadding}
        {...cardThumbnailProps}
      >
        {cardThumbnail}
      </Card.Thumbnail>
    );
  }
  return '';
};

const getPaddingBottom = ({
  cardPadding,
  cardSubtitle,
  cardThumbnail,
  cardTitle,
}) => {
  if (!cardTitle && !cardSubtitle && !cardThumbnail) {
    return '';
  }
  return cardPadding;
};

export const getCardHeader = ({
  cardSubtitle,
  cardThumbnail,
  cardTitle,
}) => {
  if (cardSubtitle || cardThumbnail || cardTitle) {
    return true;
  }
  return false;
};

export const CardHeader = props => {
  const {
    cardBody,
    cardHeaderProps,
    cardPadding,
    cardSecondaryMedia,
    cardTitleContainerProps,
  } = props;
  return (
    <Flex
      alignItems="center"
      pb={!cardBody && !cardSecondaryMedia ? '' : getPaddingBottom(props)}
      pt={getCardHeader(props) ? cardPadding : ''}
      {...cardHeaderProps}
    >
      {getCardThumbnail(props)}
      <Box {...cardTitleContainerProps}>
        {getCardTitle(props)}
        {getCardSubtitle(props)}
      </Box>
    </Flex>
  );
};

CardHeader.propTypes = {
  ...cardBasePropTypes,
  ...cardBodyBasePropTypes,
  ...cardHeaderBasePropTypes,
  ...cardSecondaryMediaBasePropTypes,
};

CardHeader.defaultProps = {
  ...cardBaseDefaultProps,
  ...cardBodyBaseDefaultProps,
  ...cardHeaderBaseDefaultProps,
  ...cardSecondaryMediaBaseDefaultProps,
};
