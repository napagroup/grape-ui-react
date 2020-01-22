import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../..';

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('Box Component flexbox base', () => {
  it('should return a Box object with alignSelf', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Flex alignItems="center">
          <Box>I stay centered.</Box>
          <Box alignSelf="baseline">I am at baseline.</Box>
          <Box alignSelf={['auto', 'flex-start', 'flex-end', 'stretch']}>I am responsive.</Box>
        </Flex>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flex', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Flex>
          <Box flex={1}>I have Flex of 1</Box>
          <Box flex={[2, 1, 3, 2]}>I have a responsive Flex</Box>
          <Box flex="1 1 auto">I have a flex string</Box>
        </Flex>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexBasis', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Flex>
          <Box flexBasis={1}>I have flex basis of 1</Box>
          <Box flexBasis={[2, 1, 3, 2]}>I have a responsive flex basis</Box>
          <Box flexBasis="auto">I have flex basis of 1</Box>
        </Flex>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexGrow', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Flex>
          <Box flexGrow={1}>I have flex grow of 1</Box>
          <Box flexGrow={[2, 1, 3, 2]}>I have a responsive flex grow</Box>
        </Flex>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexShrink', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Flex>
          <Box flexShrink={1}>I have flex shrink of 1</Box>
          <Box flexShrink={[2, 1, 3, 2]}>I have a responsive flex shrink</Box>
        </Flex>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with justifySelf', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Flex justifyContent="center">
          <Box>I stay centered.</Box>
          <Box justifySelf="baseline">I am at baseline.</Box>
          <Box justifySelf={['auto', 'flex-start', 'flex-end', 'stretch']}>I am responsive.</Box>
        </Flex>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with order', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Flex>
          <Box order={[1, 2, 3, 4]}>I am first xs, second sm, third md, fourth lg</Box>
          <Box order={[2, 1, 4, 3]}>I am second xs, first sm, fourth md, third lg</Box>
          <Box order={[3, 4, 2, 1]}>I am third xs, fourth sm, second md, first lg</Box>
          <Box order={[4, 3, 1, 2]}>I am fourth xs, third sm, first md, second lg</Box>
        </Flex>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
