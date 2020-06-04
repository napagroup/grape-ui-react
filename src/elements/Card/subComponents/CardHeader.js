import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'src/elements/Card';
import { Box } from 'src/elements/grid';

const getCardTitle = ({ cardTitle, cardTitleProps }) => {
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
  if (cardSubtitle) {
    return (
      <Card.Subtitle {...cardSubtitleProps}>
        {cardSubtitle}
      </Card.Subtitle>
    );
  }
  return '';
};

export const CardHeader = props => {
  const {
    cardBody,
    cardPadding,
    cardSubtitle,
    cardTitle,
  } = props;
  return (
    <Box
      pb={cardBody ? cardPadding : ''}
      pt={cardTitle || cardSubtitle ? cardPadding : ''}
    >
      {getCardTitle(props)}
      {getCardSubtitle(props)}
    </Box>
  );
};

CardHeader.propTypes = {
  cardBody: PropTypes.node,
  cardPadding: PropTypes.any,
  cardSubtitle: PropTypes.string,
  cardTitle: PropTypes.string,
};

CardHeader.defaultProps = {
  cardBody: '',
  cardPadding: [2, null, 3],
  cardSubtitle: '',
  cardTitle: '',
};
