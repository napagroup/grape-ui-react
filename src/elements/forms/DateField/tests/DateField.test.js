import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import * as MomentLocaleUtils from 'src/utils/momentHelpers';
import 'moment/locale/ja';
import { DateField } from '../styled';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
configure({ adapter: new Adapter() });
describe('DateField Component base', () => {
  it('should return a DateField object as Input', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  // TODO: Should be replace with a proper test of the underlying value, not a snapshot test.
  test.skip('should return a DateField object as Calendar', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField
          calendarOnly
          value={new Date('12/18/2019')}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 12/18/2019 with default format', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField
          value={new Date('12/18/2019')}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as PlainText component displaying value as 12/18/2019 with default format', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField
          plainText
          value={new Date('12/18/2019')}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField
          format="YYYY-MM-DD"
          value={new Date('12/18/2019')}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD and a validationError message', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField
          format="YYYY-MM-DD"
          validationError="You cannot select this date"
          value={new Date('12/18/2019')}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object as disabled', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField disabled />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateField Input object with custom menu overlay values', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField
          menuOverlayBottom={['auto', 20, null, 40]}
          menuOverlayLeft={[100, 'auto', 300]}
          menuOverlayRight={[10, null, 30, 'auto']}
          menuOverlayTop={['auto', 20, null, 'auto']}
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale (日本語ロケールの入力としてDateFieldComponentオブジェクトを返す必要があります)', () => {
    const element = (
      <ThemeProvider theme={{}}>
        <DateField
          dayPickerProps={{
            locale: 'ja',
            localeUtils: MomentLocaleUtils,
          }}
          format="LL"
          formStyle="filled"
          labelText="Japanese"
          locale="ja"
          name="exampleJADateField"
          value={new Date('12/18/2019')}
          valueFormat="LL"
        />
      </ThemeProvider>
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
