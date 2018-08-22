import React from 'react';
import { Box } from '../index';
import { GrapeThemeProvider } from '../../../providers';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Box Component base', () => {
  it('should return a Box object with base styling', () => {
    const component = renderer.create(<Box>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Box Component with specified margins', () => {
  it('should return a Box object with margin', () => {
    const component = renderer.create(<Box m={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with top margin', () => {
    const component = renderer.create(<Box mt={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with margin right', () => {
    const component = renderer.create(<Box mr={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with margin bottom', () => {
    const component = renderer.create(<Box mb={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with margin left', () => {
    const component = renderer.create(<Box ml={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with margin left and right', () => {
    const component = renderer.create(<Box mx={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with margin top and bottom', () => {
    const component = renderer.create(<Box my={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Box Component with specified padding', () => {
  it('should return a Box object with padding', () => {
    const component = renderer.create(<Box p={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with padding top', () => {
    const component = renderer.create(<Box pt={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with padding right', () => {
    const component = renderer.create(<Box pr={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with padding bottom', () => {
    const component = renderer.create(<Box pb={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with padding left', () => {
    const component = renderer.create(<Box pl={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with padding left and right', () => {
    const component = renderer.create(<Box px={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with padding top and bottom', () => {
    const component = renderer.create(<Box py={2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Box Component with specified widths', () => {
  it('should return a Box object with a percentage width', () => {
    const component = renderer.create(<Box width={1 / 2}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with an exact pixel width', () => {
    const component = renderer.create(<Box width={256}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with an exact pixel width in the stated unit', () => {
    const component = renderer.create(<Box width="2em">Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with width applied to different breakpoints', () => {
    const component = renderer.create(<Box width={[1, 1 / 2]}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Box Component with specified layout properties', () => {
  it('should return a Box object with display', () => {
    const component = renderer.create(<Box display="inline-block">Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with display applied to different breakpoints', () => {
    const component = renderer.create(<Box display={['block', 'inline-block']}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with maxWidth', () => {
    const component = renderer.create(<Box maxWidth={1024}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with maxWidth applied to different breakpoints', () => {
    const component = renderer.create(<Box maxWidth={[768, null, null, 1024]}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with minWidth', () => {
    const component = renderer.create(<Box minWidth={128}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with minWidth applied to different breakpoints', () => {
    const component = renderer.create(<Box minWidth={[96, 128]}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with height', () => {
    const component = renderer.create(<Box height={64}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with height applied to different breakpoints', () => {
    const component = renderer.create(<Box height={[48, 64]}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with maxHeight', () => {
    const component = renderer.create(<Box maxHeight={1024}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with maxHeight applied to different breakpoints', () => {
    const component = renderer.create(<Box maxHeight={[768, null, null, 1024]}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with minHeight', () => {
    const component = renderer.create(<Box minHeight={128}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with minHeight applied to different breakpoints', () => {
    const component = renderer.create(<Box minHeight={[384, 512]}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with size', () => {
    const component = renderer.create(<Box size={32}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with size applied to different breakpoints', () => {
    const component = renderer.create(<Box size={[32, 48]}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Box object with ratio', () => {
    const component = renderer.create(<Box ratio={1 / 4}>Lorem Ipsum</Box>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe('Box Component with specified position properties', () => {
    it('should return a Box object with position', () => {
      const component = renderer.create(<Box position="absolute">Lorem Ipsum</Box>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with zIndex', () => {
      const component = renderer.create(<Box zIndex={2}>Lorem Ipsum</Box>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with top', () => {
      const component = renderer.create(<Box top={0}>Lorem Ipsum</Box>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with right', () => {
      const component = renderer.create(<Box right={0}>Lorem Ipsum</Box>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with bottom', () => {
      const component = renderer.create(<Box bottom={0}>Lorem Ipsum</Box>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with left', () => {
      const component = renderer.create(<Box left={0}>Lorem Ipsum</Box>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
describe('Box Component using custom theme breakpoints', () => {
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
    it('should return a Box object with overridden breakpoints for margin', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box m={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for margin top', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box mt={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for padding', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box p={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for padding top', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box pt={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for width', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box width={[1, 1 / 2, 1 / 4, 1 / 8]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
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
      maxWidths: ['1.1px', '0.8px', '0.6px', '0.33px'],
      maxHeights: ['1.1px', '0.8px', '0.6px', '0.33px'],
    };
    it('should return a Box object with overridden breakpoints for display', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box display={['block', 'inline-block']}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for maxWidth', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box maxWidth={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for minWidth', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box minWidth={[1, 1 / 2, 1 / 4]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for height', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box height={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for maxHeight', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box maxHeight={[0, 1, 2, 3]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for minHeight', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box minHeight={[1, 1 / 2, 1 / 4, 1 / 8]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('should return a Box object with overridden breakpoints for size', () => {
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box size={[1, 1 / 2, 1 / 4, 1 / 8]}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
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
      const component = renderer.create(<GrapeThemeProvider theme={theme}>
        <Box position={['block', 'inline-block']}>Lorem Ipsum</Box>
      </GrapeThemeProvider>); // eslint-disable-line react/jsx-closing-tag-location
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
