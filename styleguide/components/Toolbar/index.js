import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Box,
  Button,
  Flex,
  Header,
  Link,
  Text,
} from 'src';
import { resolveBoxShadow, resolveZIndex } from 'src/utils/styledHelpers';
import { HashRouter as Router } from 'react-router-dom';
import { faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from '../index';

const ToolbarOuter = styled(Flex)`
  box-shadow: ${resolveBoxShadow('01')};
  box-sizing: border-box;
`;

ToolbarOuter.defaultProps = {
  alignContent: 'center',
  position: 'relative',
  py: 1,
  width: 1,
  zIndex: resolveZIndex('01'),
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
  <ToolbarOuter>
    <Flex height={40} justifyContent="center" mx="auto" width={200}>
      <Router>
        <Link to="./">
          <Logo
            beforeInjection={svg => {
              svg.setAttribute('style', 'height: 40px');
            }}
          />
        </Link>
      </Router>
      <Box p={2}>
        <Text>
          v
          {version}
        </Text>
      </Box>
    </Flex>
    <Box width="calc(100vw - 200px)">
      <ToolbarInner>
        <Header.h6>{title}</Header.h6>
        <Button href="https://bitbucket.org/napagroupnyc/grape-ui-react/src/master/" target="_blank">
          <FontAwesomeIcon icon={faBitbucket} />
        </Button>
      </ToolbarInner>
    </Box>
  </ToolbarOuter>
);

Toolbar.propTypes = {
  title: PropTypes.string,
  version: PropTypes.string,
};

Toolbar.defaultProps = {
  title: '',
  version: '',
};
