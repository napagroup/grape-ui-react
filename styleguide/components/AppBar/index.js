import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  Toolbar,
} from 'src';
import { HashRouter as Router } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from 'src/assets/images/grape-ui-header-logo.svg'
import urlRoutes from '../constants';

const leftArea = (
  <Flex alignItems="center" flexDirection={['column', 'row']}>
    <Box maxWidth={175}>
      <Link href={urlRoutes.homePage}>
        <ReactSVG src={logo} />
      </Link>
    </Box>
    <Link to={urlRoutes.docsPage}>
      <Button color="black" fontWeight="bold">DOCS</Button>
    </Link>
  </Flex>
);

const rightArea = (version) => (
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
);

export const AppBar = ({ title, version }) => (
  <Router>
    <Toolbar
      borderBottom="1px solid rgb(203, 39, 168)"
      boxShadow="rgb(132, 11, 85) 0px 1px 0px"
      leftArea={leftArea}
      minHeight={null}
      px={[2, 3, 4, 5]}
      py={2}
      rightArea={rightArea(version)}
      toolbarInnerProps={{
        alignItems: 'center',
        flexDirection: ['column', 'row'],
        maxWidth: 'none',
        width: 1,
      }}
    />
  </Router>
);

AppBar.propTypes = {
  title: PropTypes.string,
  version: PropTypes.string,
};

AppBar.defaultProps = {
  title: '',
  version: '',
};
