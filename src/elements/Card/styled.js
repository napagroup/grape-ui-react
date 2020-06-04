import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { Box, Flex } from 'src/elements/grid';
import { Image } from 'src/elements/Image';
import { Header, Paragraph } from 'src/elements/typography';
import {
  CardActions,
  CardHeader,
  CardInner,
  getCardBody,
  getCardRichMedia,
} from './subComponents';

const Card = props => {
  const {
    cardPadding,
    children,
  } = props;
  return (
    <Box {...props}>
      {getCardRichMedia(props)}
      <CardInner {...props}>
        <CardHeader {...props} />
        {getCardBody(props)}
        {children ? <Box p={cardPadding}>{children}</Box> : ''}
      </CardInner>
      <CardActions {...props} />
    </Box>
  );
};

Card.propTypes = {
  cardPadding: PropTypes.any,
  children: PropTypes.node,
  ...propTypes.border,
  ...propTypes.space,
};

Card.defaultProps = {
  border: '1px solid #ddd',
  borderRadius: 4,
  cardPadding: [2, null, 3],
  children: '',
  mb: [1, null, 2],
};

Card.Actions = props => {
  const { children } = props;
  return (
    <Flex {...props}>{children}</Flex>
  );
};

Card.Actions.propTypes = {
  children: PropTypes.node,
};

Card.Actions.defaultProps = {
  children: '',
};

Card.Body = props => {
  const { children } = props;
  return (
    <Box {...props}>{children}</Box>
  );
};

Card.Body.propTypes = {
  children: PropTypes.node,
};

Card.Body.defaultProps = {
  children: '',
};

Card.Body.displayName = 'Body';

Card.Image = props => (
  <Image {...props} />
);

Card.Inner = props => {
  const { children } = props;
  return (
    <Box {...props}>{children}</Box>
  );
};

Card.Inner.propTypes = {
  children: PropTypes.node,
};

Card.Inner.defaultProps = {
  children: '',
};

Card.RichMedia = props => {
  const { children } = props;
  return (
    <Box {...props}>{children}</Box>
  );
};

Card.RichMedia.propTypes = {
  children: PropTypes.node,
  ...propTypes.layout,
};

Card.RichMedia.defaultProps = {
  children: '',
  width: 1,
};

Card.Title = ({ children }) => (
  <Header.h5 mb={0}>{children}</Header.h5>
);

Card.Title.propTypes = {
  children: PropTypes.node,
};

Card.Title.defaultProps = {
  children: '',
};

Card.Title.displayName = 'Title';

Card.Subtitle = ({ children }) => (
  <Paragraph
    color="gray"
    mb={0}
    sm
  >
    {children}
  </Paragraph>
);

Card.Subtitle.propTypes = {
  children: PropTypes.node,
};

Card.Subtitle.defaultProps = {
  children: '',
};

Card.Subtitle.displayName = 'Subtitle';

/** @component */
export { Card };
