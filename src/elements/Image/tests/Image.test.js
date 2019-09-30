import React from 'react';
import 'jest-styled-components';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { ThemeProvider } from 'styled-components';
import { Image } from '..';

configure({ adapter: new Adapter() });

describe('Image Component base', () => {
  it('should return a shallow Image object with base styling', () => {
    const component = mount(<ThemeProvider theme={{}}><Image alt="blue flower" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" /></ThemeProvider>);
    expect(toJson(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with a console error', () => {
    const component = mount(<ThemeProvider theme={{}}><Image src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" /></ThemeProvider>);
    expect(toJson(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with maxWidth applied', () => {
    const component = mount(<ThemeProvider theme={{}}><Image alt="blue flower" maxWidth="200px" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" /></ThemeProvider>);
    expect(toJson(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with width applied', () => {
    const component = mount(<ThemeProvider theme={{}}><Image alt="blue flower" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" width={[1, 3 / 4, 2 / 3, 1 / 2]} /></ThemeProvider>);
    expect(toJson(component.find('Img'))).toMatchSnapshot();
  });
});
