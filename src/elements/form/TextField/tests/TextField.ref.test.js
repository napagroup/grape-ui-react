
import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { TextField } from '..';

configure({ adapter: new Adapter() });
describe('When supporting a forward ref for TextField ', () => {
  it('should reference the underlying input element', () => {
    const ref = React.createRef();
    const register = e => { ref.current = e; };
    const component = mount(
      <ThemeProvider theme={{}}>
        <TextField
          ref={register}
          labelText="name"
          name="name"
        />
      </ThemeProvider>
    );
    expect(component.find('input').instance()).toEqual(ref.current);
  });
  it('should reference the underlying Cleave element', () => {
    const ref = React.createRef();
    const register = e => { ref.current = e; };
    const component = mount(
      <ThemeProvider theme={{}}>
        <TextField
          ref={register}
          integer
          labelText="Quantity"
          name="quantity"
        />
      </ThemeProvider>
    );
    expect(component.find('input').instance()).toEqual(ref.current);
  });
  it('should reference the underlying TextareaAutosize element', () => {
    const ref = React.createRef();
    const register = e => { ref.current = e; };
    const component = mount(
      <ThemeProvider theme={{}}>
        <TextField
          ref={register}
          labelText="Description"
          multiline
          name="description"
        />
      </ThemeProvider>
    );
    expect(component.find('input').instance()).toEqual(ref.current);
  });
});
