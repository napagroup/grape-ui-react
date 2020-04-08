/* eslint-disable react/prop-types */

import React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { withHideable } from '..';

describe('Table - basic rendering', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  function MyComponent(props) {
    return <div {...props}>innerText</div>;
  }
  const MyHideable = withHideable(MyComponent);
  it('should not return any markup if no children', () => {
    const hide = true;
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <MyHideable hide={hide} />
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should not have rendered children when hide is true', () => {
    act(() => {
      const hide = true;
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <MyHideable hide={hide}>
            <div title="test-div-children">
              innerText
            </div>
          </MyHideable>
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should render children when hide is false', () => {
    act(() => {
      const hide = false;
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <MyHideable hide={hide}>
            <div title="test-div-children">
              innerText
            </div>
          </MyHideable>
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
});
