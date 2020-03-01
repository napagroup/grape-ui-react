import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Flex,
  Link,
  Paragraph,
} from 'src';
import * as styledHelpers from 'src/utils/styledHelpers';
import { ThemeProvider } from 'styled-components';
import { Toolbar } from '../../components';

const pageMaxHeight = [null, 'calc(100vh - 48px)'];

const theme = {
  buttons: {
    ...styledHelpers.buttonThemes(),
  },
};


const StyleGuideRenderer = ({
  version,
  homepageUrl,
  toc,
  children,
}) => (
  <ThemeProvider theme={theme}>
    <Flex className="root" flexDirection="column">
      <Toolbar version={version} />
      <Flex flexDirection={['column', 'row']} justifyContent="center" maxHeight={pageMaxHeight} overflow="hidden">
        <Flex height={pageMaxHeight} maxWidth={[null, 200]} minWidth={200} overflow="auto" width={1}>
          {toc}
        </Flex>
        <Box height={pageMaxHeight} overflow="auto" px={[1, 2, 3, 4]} width={1}>
          <Box maxWidth={960} mx="auto" py={[1, 2, 3]}>
            {children}
          </Box>
        </Box>
      </Flex>
      <Paragraph sm textAlign="center">
        <span aria-label="grape" role="img">🍇</span>
        UI created by
        {' '}
        <Link href="http://www.napa.com">Napa Group LLC</Link>
        .
        {' '}
        Documentation created with
        {' '}
        <Link href={homepageUrl} target="_blank">React Styleguidist</Link>
        .
      </Paragraph>
    </Flex>
  </ThemeProvider>
);

StyleGuideRenderer.propTypes = {
  children: PropTypes.node.isRequired,
  homepageUrl: PropTypes.string.isRequired,
  toc: PropTypes.any.isRequired,
  version: PropTypes.string.isRequired,
};

export default StyleGuideRenderer;
