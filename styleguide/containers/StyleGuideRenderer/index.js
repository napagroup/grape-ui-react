import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from 'src';
import * as styledHelpers from 'src/utils/styledHelpers';
import styled, { ThemeProvider } from 'styled-components';
import { Footer, Toolbar } from '../../components';

const theme = {
  buttons: {
    ...styledHelpers.buttonThemes(),
  },
};

const TocFlex = styled(Box)`
  background: linear-gradient(180deg, rgba(219, 219, 219, 0.086) 0%, rgba(219, 219, 219, 0.014) 100%);
  border-right: 1px solid rgba(36, 36, 36, 0.1);
`;

TocFlex.defaultProps = {
  px: [2, 3, 4, 5],
  py: [1, 2, 3],
};

const StyleGuideRenderer = ({
  version,
  homepageUrl,
  toc,
  children,
}) => (
  <ThemeProvider theme={theme}>
    <Flex className="root" flexDirection="column" minHeight="100vh">
      <Toolbar version={version} />
      <Flex
        flex={1}
        flexDirection={['column', 'row']}
        justifyContent={['center', 'flex-start']}
      >
        <TocFlex>
          {toc}
        </TocFlex>
        <Box flex={[null, 1]}>
          <Box maxWidth={960} mx="auto" px={[1, 2, 3, 4]} py={[1, 2, 3]}>
            {children}
          </Box>
        </Box>
      </Flex>
      <Footer />
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
