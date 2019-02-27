import React from 'react';
import { Image } from '../';
import 'jest-styled-components';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('Image Component base', () => {
  it('should return a shallow Image object with base styling', () => {
    const component = mount(<Image alt="blue flower" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" />);
    expect(toJson(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object without alt base styling', () => {
    const component = mount(<Image src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" />);
    expect(toJson(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with maxWidth applied', () => {
    const component = mount(<Image alt="blue flower" maxWidth={200} src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" />);
    expect(toJson(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with width applied', () => {
    const component = mount(<Image alt="blue flower" src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg" w={[1, 3 / 4, 2 / 3, 1 / 2]} />);
    expect(toJson(component.find('Img'))).toMatchSnapshot();
  });
});
