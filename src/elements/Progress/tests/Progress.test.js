import React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { css, keyframes, ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';
import { Progress } from '../index';

const customKeyframe = keyframes`
  0% {
    background-color: red;
    opacity: 0.7;
    width: 0%;
  }
  20% {
    background-color: orange;
    width: 10%;
  }
  29% {
    width: 40%;
  }
  30% {
    background-color: yellow;
    width: 50%;
  }
  50% {
    background-color: green;
    width: 70%;
  }
  70% {
    background-color: blue;
    width: 75%;
  }
  80% {
    width: 77%;
  }
  93% {
    width: 90%;
  }
  100% {
    background-color: purple;
    opacity: 1;
    width: 100%;
  }
`;

const customCircularKeyframe = props => keyframes`
  0% {
    stroke: rgba(0,0,0,0);
    stroke-dashoffset: ${props.circumference};
  }
  50% {
    stroke: #32cd32;
  }
  100% {
    stroke: rgba(0,0,0,0);
    stroke-dashoffset: ${-1 * props.circumference};
  }
`;
describe('Linear Progress - snapshots', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return an Indeterminate Linear Progress with default styling', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Progress />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Determinate Linear Progress with the appropriate styling', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Progress
            diameter={20}
            indicatorColor="orange"
            isDeterminate
            trackColor="#e0ffff"
          />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Linear Progress with custom animations and captions', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Progress
            animationDuration="5s"
            animationIterationCount={2}
            animationName={
              // styled components keyframes and css functions
              css`${customKeyframe}`
            }
            caption={(
              <Flex
                justifyContent="flex-end"
                py={2}
              >
                <Progress
                  animationDuration="5s"
                  diameter={20}
                  isDeterminate
                  loop={false}
                  progressType="circular"
                  strokeWidth={2}
                />
              </Flex>
            )}
            hideTrack
            loop={false}
          />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Linear Progress with custom caption, value and total', () => {
    const value = 20;
    const total = 150;
    const caption = `${value}% of ${total}`;
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Progress
            caption={caption}
            total={total}
            value={value}
          />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
});
describe('Circular Progress - snapshots', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return an Indeterminate Circular Progress with default styling', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Progress
            progressType="circular"
          />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Determinate Circular Progress with the appropriate styling', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Progress
            indicatorColor="red"
            isDeterminate
            progressType="circular"
            trackColor="white.dark"
          />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Circular Progress with custom animations', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Progress
            animationDuration="5s"
            animationName={
              // styled components keyframes and css functions
              css`${customCircularKeyframe}`
            }
            progressType="circular"
          />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should return a Circular Progress with custom caption, value and total', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Progress
            caption="3/5"
            captionProps={{
              textAlign: 'center',
            }}
            progressType="circular"
            total={5}
            value={3}
          />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
});
