import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Box } from '../..';

/*
  For testing reference, there are the following defaults:
  default breakpoints: 40em, 52em, 64em
  default space: 0, 4, 8, 16
*/

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('Box Component base', () => {
  it('should return an empty Box object with base styling', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with acceptable attributes', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box id="my-box-id">Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified margins', () => {
  it('should return a Box object with margin', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box m={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with top margin', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box mt={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin right', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box mr={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin bottom', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box mb={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin left', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box ml={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin left and right', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box mx={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with margin top and bottom', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box my={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified padding', () => {
  it('should return a Box object with padding', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box p={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding top', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box pt={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding right', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box pr={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding bottom', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box pb={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding left', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box pl={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding left and right', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box px={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with padding top and bottom', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box py={2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified widths', () => {
  it('should return a Box object with a percentage width', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box width={1 / 2}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with an exact pixel width', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box width={256}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with an exact pixel width in the stated unit', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box width="2em">Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with width applied to different breakpoints', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box width={[1, 1 / 2]}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Box Component with specified layout properties', () => {
  it('should return a Box object with display', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box display="inline-block">Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with display applied to different breakpoints', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box display={['block', 'inline-block']}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxWidth', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box maxWidth={1024}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxWidth applied to different breakpoints', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box maxWidth={[768, null, null, 1024]}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minWidth', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box minWidth={128}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minWidth applied to different breakpoints', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box minWidth={[96, 128]}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with height', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box height={64}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with height applied to different breakpoints', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box height={[48, 64]}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxHeight', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box maxHeight={1024}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with maxHeight applied to different breakpoints', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box maxHeight={[768, null, null, 1024]}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minHeight', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box minHeight={128}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with minHeight applied to different breakpoints', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box minHeight={[384, 512]}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with size', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box size={32}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with size applied to different breakpoints', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Box size={[32, 48]}>Lorem Ipsum</Box>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  describe('Box Component with specified position properties', () => {
    it('should return a Box object with position', () => {
      const element = (
        <ThemeProvider theme={emptyTheme}>
          <Box position="absolute">Lorem Ipsum</Box>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with zIndex', () => {
      const element = (
        <ThemeProvider theme={emptyTheme}>
          <Box zIndex={2}>Lorem Ipsum</Box>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with top', () => {
      const element = (
        <ThemeProvider theme={emptyTheme}>
          <Box top={0}>Lorem Ipsum</Box>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with right', () => {
      const element = (
        <ThemeProvider theme={emptyTheme}>
          <Box right={0}>Lorem Ipsum</Box>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with bottom', () => {
      const element = (
        <ThemeProvider theme={emptyTheme}>
          <Box bottom={0}>Lorem Ipsum</Box>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
    it('should return a Box object with left', () => {
      const element = (
        <ThemeProvider theme={emptyTheme}>
          <Box left={0}>Lorem Ipsum</Box>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
  });
});
describe('Box Component using custom theme breakpoints', () => {
  describe('for Core Styling', () => {
    const theme = {
      breakpoints: ['35em', '47em', '67em'],
      space: [2, 7, 8, 18],
    };
    it('should return a Box object with overridden breakpoints for margin', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Box m={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for margin top', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Box mt={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for padding', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Box p={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for padding top', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Box pt={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for width', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Box width={[1, 1 / 2, 1 / 4, 1 / 8]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Layout', () => {
    const themeLayout = {
      breakpoints: [
        '35em', '47em', '67em',
      ],
      space: [
        2, 7, 8, 18,
      ],
    };
    it('should return a Box object with overridden breakpoints for display', () => {
      const element = (
        <ThemeProvider
          theme={{
            breakpoints: [
              '35em', '47em', '67em',
            ],
          }}
        >
          <Box display={['block', 'inline-block']}>I am block until 35em</Box>
        </ThemeProvider>
      );
      expect(assertReactElement(element)).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for maxWidth', () => {
      const component = renderer.create(<ThemeProvider theme={themeLayout}>
        <Box maxWidth={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for minWidth', () => {
      const component = renderer.create(<ThemeProvider theme={themeLayout}>
        <Box minWidth={[1, 1 / 2, 1 / 4]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for height', () => {
      const component = renderer.create(<ThemeProvider theme={themeLayout}>
        <Box height={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for maxHeight', () => {
      const component = renderer.create(<ThemeProvider theme={themeLayout}>
        <Box maxHeight={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for minHeight', () => {
      const component = renderer.create(<ThemeProvider theme={themeLayout}>
        <Box minHeight={[1, 1 / 2, 1 / 4, 1 / 8]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    test.skip('should return a Box object with overridden breakpoints for size', () => {
      const component = renderer.create(<ThemeProvider theme={themeLayout}>
        <Box size={[32, 48, 60, 120]}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Position', () => {
    const theme = {
      breakpoints: [
        '35em', '47em', '67em',
      ],
    };
    it('should return a Box object with overridden breakpoints for position', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Box position={['block', 'inline-block']}>Lorem Ipsum</Box>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
