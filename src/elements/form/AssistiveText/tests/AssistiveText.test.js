import React from 'react';
import { AssistiveText } from '../';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
describe('Assistive Text Component base', () => {
  it('should return an Assistive Text object', () => {
    const element = <AssistiveText id="assitiveTextIdHelp">Helper text is here</AssistiveText>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an Assistive Text object with danger text color', () => {
    const element = <AssistiveText color="brandDanger" id="assitiveTextIdError">Error text is here</AssistiveText>;
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
