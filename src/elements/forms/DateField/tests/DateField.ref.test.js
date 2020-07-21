import React from 'react';
import 'jest-styled-components';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { DateField } from '..';

configure({ adapter: new Adapter() });
describe('When supporting a forward ref for TextField ', () => {
  it('should reference the underlying input element', () => {
    const ref = React.createRef();
    const register = e => { ref.current = e; };
    const component = mount(
      <ThemeProvider theme={{}}>
        <DateField
          inputRef={register}
          labelText="Desired Date"
          name="desiredDate"
        />
      </ThemeProvider>
    );
    expect(component.find('input').instance()).toEqual(ref.current);
  });
});
