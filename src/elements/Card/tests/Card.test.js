import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Card } from 'src/elements/Card';

const emptyTheme = {};

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};

describe('Box Component base', () => {
  it('should return a Card with base styling', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Card
          cardActions="cardActions"
          cardActionsLeft="cardActionsLeft"
          cardActionsRight="cardActionsRight"
          cardBody="cardBody"
          cardRichMedia="cardRichMedia"
          cardSecondaryMedia="cardSecondaryMedia"
          cardSubtitle="cardSubtitle"
          cardThumbnail="cardThumbnail"
          cardTitle="cardTitle"
        >
          I am a child.
        </Card>
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Card with nuances', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Card
          cardActionsRight="Card Actions Right"
          cardBody="Card Body"
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Card with objects in title', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Card
          cardSubtitle={<div />}
          cardTitle={<div />}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an empty Card', () => {
    const element = (
      <ThemeProvider theme={emptyTheme}>
        <Card />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
