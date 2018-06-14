import React from 'react';
import { Paragraph } from '../Paragraph';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Paragraph Component base', () => {
  it('should return a Paragraph object with base styling', () => {
    const component = renderer.create(<Paragraph>Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Paragraph Component specified styles', () => {
  it('should return a Paragraph object with a green color', () => {
    const component = renderer.create(<Paragraph color="green">Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a serif font-family', () => {
    const component = renderer.create(<Paragraph fontFamily="serif">Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a bold font-weight', () => {
    const component = renderer.create(<Paragraph fontWeight="bold">Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-style: italic', () => {
    const component = renderer.create(<Paragraph italic>Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with specified kerning', () => {
    const component = renderer.create(<Paragraph kerning="1px">Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: lg', () => {
    const component = renderer.create(<Paragraph lg>Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: sm', () => {
    const component = renderer.create(<Paragraph sm>Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-align: right', () => {
    const component = renderer.create(<Paragraph textAlign="right">Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a lead paragraph stlying', () => {
    const component = renderer.create(<Paragraph lead>Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-decoration: underline', () => {
    const component = renderer.create(<Paragraph textDecoration="underline">Lorem Ipsum</Paragraph>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
