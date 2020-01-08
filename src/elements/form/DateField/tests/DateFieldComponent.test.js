import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/ja';
import { DateFieldComponent } from '../component';

const assertReactElement = element => {
  const component = renderer.create(element);
  return component.toJSON();
};
configure({ adapter: new Adapter() });
describe('DateFieldComponent Component base', () => {
  it('should return a DateFieldComponent object as Input', () => {
    const element = (
      <DateFieldComponent />
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Calendar', () => {
    const element = (
      <DateFieldComponent
        calendarOnly
        value={new Date('12/18/2019')}
      />
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input displaying value as 12/18/2019 with default format', () => {
    const element = (
      <DateFieldComponent
        value={new Date('12/18/2019')}
      />
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input displaying value as 2019-12-18 with Format YYYY-MM-DD', () => {
    const element = (
      <DateFieldComponent
        format="YYYY-MM-DD"
        value={new Date('12/18/2019')}
      />
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a DateFieldComponent object as Input with Japanese locale', () => {
    const element = (
      <DateFieldComponent
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
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('DateFieldComponent OnChange', () => {
  it('should test Input OnChange function toBeCalledWith callbackData', () => {
    const callbackData = {
      formattedDay: '2019-12-14',
      modifiers: {},
      selectedDate: new Date('12/14/2019'),
    };

    const onChangeMock = jest.fn();
    const component = mount(<DateFieldComponent onChange={onChangeMock} value="12/14/2019" />);
    component.find('input').simulate('change');
    expect(onChangeMock).toBeCalledWith(expect.objectContaining({
      formattedDay: callbackData.formattedDay,
      modifiers: callbackData.modifiers,
      selectedDay: callbackData.selectedDate,
    }));
  });
});
