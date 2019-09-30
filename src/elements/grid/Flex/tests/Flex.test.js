/* eslint-disable function-paren-newline */
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from '../..';
import 'jest-styled-components';

describe('Flex base', () => {
  it('should return a Flex object with base styling', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with a box element as the child', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex><Box>Lorem Ipsum</Box></Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with 2 responsive Box elements as the children', () => {
    const component = renderer.create(
      <ThemeProvider theme={{}}>
        <Flex alignItems="flex-start" flexWrap="wrap">
          <Box width={[1, 1 / 3]}>Lorem</Box>
          <Box width={[1, 2 / 3]}>Ipsum</Box>
        </Flex>
      </ThemeProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified margins', () => {
  it('should return a Flex object with margin applying space all around', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex m={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on top', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex mt={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on right', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex mr={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on bottom', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex mb={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on left', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex ml={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on the left and right', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex mx={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on the top and bottom', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex my={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified padding', () => {
  it('should return a Flex object with padding applying space all around', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex p={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on top', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex pt={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on right', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex pr={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on bottom', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex pb={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on left', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex pl={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on the left and right', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex px={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on the top and bottom', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex py={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified widths', () => {
  it('should return a Flex object with a specified width', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex width={2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with a percentage width', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex width={1 / 2}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with an exact pixel width', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex width={256}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with the exact width enter with the stated unit', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex width="2em">Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with width applied to different breakpoints', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex width={[1, 1 / 2]}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified layout properties', () => {
  it('should return a Flex object with maxWidth', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex maxWidth={1024}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxWidth based on defined breakpoints', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex maxWidth={[768, null, null, 1024]}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with minWidth', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex minWidth={128}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with minWidth based on defined breakpoints', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex minWidth={[96, 128]}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with height', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex height={64}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with height based on defined breakpoints', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex height={[48, 64]}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxHeight', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex maxHeight={1024}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxHeight based on defined breakpoints', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex maxHeight={[768, null, null, 1024]}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with size (width and height)', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex size={32}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with size (width and height) based on defined breakpoints', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex size={[32, 48]}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with ratio (height * padding-bottom)', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex ratio={3 / 4}>Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified alignment properties', () => {
  it('should return a Flex object with items aligned to the the center', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex alignItems="center">Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with content aligned to the the center', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex alignContent="center">Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with content justified to the the center', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex justifyContent="center">Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with flex-wrap styling applied', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex flexWrap="wrap">Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with auto flex basis applied', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex flexBasis="wrap">Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with column flex direction', () => {
    const component = renderer.create(<ThemeProvider theme={{}}><Flex flexDirection="column">Lorem Ipsum</Flex></ThemeProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Flex using custom theme breakpoints', () => {
  /*
    For testing reference, there are the following defaults:
    default breakpoints: 40em, 52em, 64em
    default space: 0, 4, 8, 16
  */
  describe('for Core Styling', () => {
    const theme = {
      breakpoints: [
        '35em', '47em', '67em',
      ],
      space: [
        2, 7, 8, 18,
      ],
    };
    it('should return a Flex object with overridden breakpoints for margin', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex m={[0, 1, 2, 3]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for margin top', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex mt={[0, 1, 2, 3]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for padding', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex p={[0, 1, 2, 3]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for padding top', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex pt={[0, 1, 2, 3]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for width', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex width={[1, 1 / 2, 1 / 4, 1 / 8]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('for Layout', () => {
    const theme = {
      breakpoints: [
        '35em', '47em', '67em',
      ],
      heights: ['1.1px', '0.8px', '0.6px', '0.33px'],
      maxHeights: ['1.1px', '0.8px', '0.6px', '0.33px'],
    };
    it('should return a Flex object with overridden breakpoints for maxWidth', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex maxWidth={['1.1px', '0.8px', '0.6px', '0.33px']}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for minWidth', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex minWidth={[1, 1 / 2, 1 / 4]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for height', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex height={['1.1px', '0.8px', '0.6px', '0.33px']}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for maxHeight', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex maxHeight={['1.1px', '0.8px', '0.6px', '0.33px']}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for minHeight', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex minHeight={[1, 1 / 2, 1 / 4, 1 / 8]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for size', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex size={['100%', '50%', '25%', '12.5']}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
