import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'src/elements/Card';

export const getCardBody = ({
  cardBody,
  cardBodyProps,
}) => {
  if (cardBody) {
    return <Card.Body {...cardBodyProps}>{cardBody}</Card.Body>;
  }
  return null;
};

getCardBody.propTypes = {
  cardBody: PropTypes.node,
  cardBodyProps: PropTypes.object,
};

getCardBody.defaultProps = {
  cardBody: '',
  cardBodyProps: {},
};
