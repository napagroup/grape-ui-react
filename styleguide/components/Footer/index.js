import { Flex, Link, Paragraph } from 'src';
import React from 'react';
import styled from 'styled-components';
import urlRoutes from '../constants';

const FooterParagraph = styled(Paragraph)`
  white-space: nowrap;
`;

FooterParagraph.defaultProps = {
  m: 0,
  mx: 1,
  sm: true,
  textAlign: 'center',
};

const Footer = () => (
  <Flex
    alignItems="center"
    flex="none"
    flexWrap="wrap"
    justifyContent="center"
    p={[1, 2, 3]}
    style={{ backgroundColor: '#dbdbdb' }}
  >
    <FooterParagraph>
      {'grape-ui created by '}
      <Link href={urlRoutes.externalNapa}>Napa Group LLC</Link>
      .
    </FooterParagraph>
    <FooterParagraph>
      {'Documentation created with '}
      <Link href={urlRoutes.externalReactStyleguidist}>React Styleguidist</Link>
      .
    </FooterParagraph>
    <FooterParagraph>
      {'Site generated with '}
      <Link href={urlRoutes.externalGatsby}>Gatsby</Link>
      .
    </FooterParagraph>
  </Flex>
);

export { Footer };
