import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { SelectField } from '..';

configure({ adapter: new Adapter() });
describe('When supporting a forward ref for SelectField ', () => {
  it('should reference the underlying input element', () => {
    const ref = React.createRef();
    const register = e => { ref.current = e; };
    const component = mount(
      <ThemeProvider theme={{}}>
        <SelectField
          inputRef={register}
          labelText="Name"
          name="name"
        />
      </ThemeProvider>
    );
    const instance = component.find('input').at(0).getDOMNode();
    expect(instance).toEqual(ref.current.select.inputRef);
  });
});
