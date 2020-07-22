/* eslint-disable react/prop-types */

import React from 'react';
import * as ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from 'src/elements/grid';
import { Button } from 'src/elements/Button';
import { Alert } from '..';

describe('Alert - kitchen sink snapshot', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return Alert with all components & styling', () => {
    const UndoButton = () => <Button color="white">Undo</Button>;
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Alert
            alertAction={<UndoButton />}
          >
            <Flex>
              <Box>Uh oh</Box>
              <Box>Spaghettios</Box>
            </Flex>
          </Alert>
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
});

describe('Alert - Variant Example', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
  });
  it('should return Alert with variant styling', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <Alert
            variant="danger"
          >
            Variant Alert.
          </Alert>
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should return Alert with custom variant styling', () => {
    const colorThemeProps = {
      colors: {
        brandDanger: 'red',
      },
    };
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={colorThemeProps}>
          <Alert
            variant="danger"
          >
            Variant Alert with Custom Theme.
          </Alert>
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
  it('should return Alert Toast Container', () => {
    act(() => {
      ReactDOM.render(
        <ThemeProvider theme={{}}>
          <div>
            <div id="subContainer">
              <span>I am the top sibling.</span>
              <Alert.ToastContainer toastPortalTarget={document && document.getElementById('subContainer')} />
            </div>
          </div>
        </ThemeProvider>,
        container
      );
    });
    expect(container).toMatchSnapshot();
  });
});
