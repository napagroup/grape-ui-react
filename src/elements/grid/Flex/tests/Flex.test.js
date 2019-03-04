/* eslint-disable function-paren-newline */
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Flex } from '..';
import { Box } from '../../Box';
import 'jest-styled-components';

describe('Flex base', () => {
  it('should return a Flex object with base styling', () => {
    const component = renderer.create(<Flex>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with a box element as the child', () => {
    const component = renderer.create(<Flex><Box>Lorem Ipsum</Box></Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with 2 responsive Box elements as the children', () => {
    const component = renderer.create(
      <Flex align="flex-start" wrap="wrap">
        <Box w={[1, 1 / 3]}>Lorem</Box>
        <Box w={[1, 2 / 3]}>Ipsum</Box>
      </Flex>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified margins', () => {
  it('should return a Flex object with margin applying space all around', () => {
    const component = renderer.create(<Flex m={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on top', () => {
    const component = renderer.create(<Flex mt={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on right', () => {
    const component = renderer.create(<Flex mr={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on bottom', () => {
    const component = renderer.create(<Flex mb={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on left', () => {
    const component = renderer.create(<Flex ml={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on the left and right', () => {
    const component = renderer.create(<Flex mx={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with margin applying space on the top and bottom', () => {
    const component = renderer.create(<Flex my={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified padding', () => {
  it('should return a Flex object with padding applying space all around', () => {
    const component = renderer.create(<Flex p={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on top', () => {
    const component = renderer.create(<Flex pt={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on right', () => {
    const component = renderer.create(<Flex pr={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on bottom', () => {
    const component = renderer.create(<Flex pb={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on left', () => {
    const component = renderer.create(<Flex pl={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on the left and right', () => {
    const component = renderer.create(<Flex px={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with padding applying space on the top and bottom', () => {
    const component = renderer.create(<Flex py={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified widths', () => {
  it('should return a Flex object with a specified width', () => {
    const component = renderer.create(<Flex width={2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with a percentage width', () => {
    const component = renderer.create(<Flex width={1 / 2}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with an exact pixel width', () => {
    const component = renderer.create(<Flex width={256}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with the exact width enter with the stated unit', () => {
    const component = renderer.create(<Flex width="2em">Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with width applied to different breakpoints', () => {
    const component = renderer.create(<Flex width={[1, 1 / 2]}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified layout properties', () => {
  it('should return a Flex object with maxWidth', () => {
    const component = renderer.create(<Flex maxWidth={1024}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxWidth based on defined breakpoints', () => {
    const component = renderer.create(<Flex maxWidth={[768, null, null, 1024]}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with minWidth', () => {
    const component = renderer.create(<Flex minWidth={128}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with minWidth based on defined breakpoints', () => {
    const component = renderer.create(<Flex minWidth={[96, 128]}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with height', () => {
    const component = renderer.create(<Flex height={64}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with height based on defined breakpoints', () => {
    const component = renderer.create(<Flex height={[48, 64]}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxHeight', () => {
    const component = renderer.create(<Flex maxHeight={1024}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with maxHeight based on defined breakpoints', () => {
    const component = renderer.create(<Flex maxHeight={[768, null, null, 1024]}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with size (width and height)', () => {
    const component = renderer.create(<Flex size={32}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with size (width and height) based on defined breakpoints', () => {
    const component = renderer.create(<Flex size={[32, 48]}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with ratio (height * padding-bottom)', () => {
    const component = renderer.create(<Flex ratio={3 / 4}>Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Flex with specified alignment properties', () => {
  it('should return a Flex object with items aligned to the the center', () => {
    const component = renderer.create(<Flex alignItems="center">Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with content aligned to the the center', () => {
    const component = renderer.create(<Flex alignContent="center">Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with content justified to the the center', () => {
    const component = renderer.create(<Flex justifyContent="center">Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with flex-wrap styling applied', () => {
    const component = renderer.create(<Flex flexWrap="wrap">Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with auto flex basis applied', () => {
    const component = renderer.create(<Flex flexBasis="wrap">Lorem Ipsum</Flex>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Flex object with column flex direction', () => {
    const component = renderer.create(<Flex flexDirection="column">Lorem Ipsum</Flex>);
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
      maxWidths: ['1.1px', '0.8px', '0.6px', '0.33px'],
    };
    it('should return a Flex object with overridden breakpoints for maxWidth', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex maxWidth={[0, 1, 2, 3]}>Lorem Ipsum</Flex>
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
        <Flex height={[0, 1, 2, 3]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Flex object with overridden breakpoints for maxHeight', () => {
      const component = renderer.create(<ThemeProvider theme={theme}>
        <Flex maxHeight={[0, 1, 2, 3]}>Lorem Ipsum</Flex>
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
        <Flex size={[1, 1 / 2, 1 / 4, 1 / 8]}>Lorem Ipsum</Flex>
      </ThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
