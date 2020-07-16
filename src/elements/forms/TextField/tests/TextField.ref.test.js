import React from 'react';
import renderer from 'react-test-renderer';
import { getByLabelText } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { TextField } from '..';
import 'jest-styled-components';

describe('When supporting a forward ref for TextField ', () => {
  let renderUtils;
  it('should reference the underlying input element', () => {
    const ref = React.createRef();
    const register = e => { ref.current = e; };
    renderUtils = render(
      <ThemeProvider theme={{}}>
        <TextField
          inputRef={register}
          labelText="name"
          name="name"
        />
      </ThemeProvider>
    );
    const { container } = renderUtils;
    const input = getByLabelText(container, 'name');
    expect(input).toEqual(ref.current);
  });
  it('should reference the underlying Cleave DOM element', () => {
    const ref = React.createRef();
    const register = e => { ref.current = e; };
    renderUtils = render(
      <ThemeProvider theme={{}}>
        <TextField
          inputRef={register}
          integer
          labelText="Quantity"
          name="quantity"
        />
      </ThemeProvider>
    );
    const { container } = renderUtils;
    const input = getByLabelText(container, 'Quantity');
    expect(input).toEqual(ref.current);
  });
  it('should reference the underlying TextareaAutosize DOM element', () => {
    const ref = React.createRef();
    const expected = document.createElement('textarea');
    const register = e => { ref.current = e; };
    renderer.create(
      <ThemeProvider theme={{}}>
        <TextField
          inputRef={register}
          labelText="Description"
          multiline
          name="description"
        />
      </ThemeProvider>,
      {
        createNodeMock: () => expected,
      },
    );
    expect(ref.current).toEqual(expected);
  });
});
