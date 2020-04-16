import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
} from 'src';
import { HashRouter as Router } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from 'src/assets/images/grape-ui-header-logo.svg'
import urlRoutes from '../constants';

const HeaderFlex = styled(Flex)`
  border-bottom: 1px solid #CB27A8;
  box-shadow: 0 1px 0 #840B55;
`;

HeaderFlex.defaultProps = {
  alignItems: 'center',
  flex: 'none',
  flexDirection: ['column', 'row'],
  justifyContent: 'center',
  mb: '1px',
  px: [2, 3, 4, 5],
  py: [1, null, 2],
};

const ToolbarInner = styled(Flex)`
  box-sizing: border-box;
`;

ToolbarInner.defaultProps = {
  justifyContent: 'space-between',
  maxWidth: 960,
  mx: 'auto',
  width: 1,
};

export const Toolbar = ({ title, version }) => (
  <HeaderFlex>
    <Router>
      <Box maxWidth={175}>
        <Link href={urlRoutes.homePage}>
          <ReactSVG src={logo} />
        </Link>
      </Box>
      <Flex flex={1} justifyContent={['center', 'space-between']} marginTop="-3px" style={{ boxSizing: 'border-box' }} width={[1, 'auto']}>
        <Link to={urlRoutes.docsPage}>
          <Button color="black" fontWeight="bold">DOCS</Button>
        </Link>
        <Box flex={[1, 'none']} />
        <Flex alignItems="center">
          <Box mx={1} px={[1, 2, 3]}>
            <Text>v{version}</Text>
          </Box>
          <Button href={urlRoutes.externalGithub} pl={[1, 2]} pr={[1, 2]}>
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button href={urlRoutes.externalTwitter} pl={[1, 2]} pr={[1, 2]}>
            <FontAwesomeIcon icon={faTwitter} />
          </Button>
          <Box display={['none', 'block']}>
            <Link to={urlRoutes.docsPage}>
              <Button color="brandPrimary">Getting Started</Button>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Router>
  </HeaderFlex>
);

Toolbar.propTypes = {
  title: PropTypes.string,
  version: PropTypes.string,
};

Toolbar.defaultProps = {
  title: '',
  version: '',
};
