/* eslint-disable react/prop-types */
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import {
  Controller,
  useForm,
} from 'react-hook-form';
import { Button } from 'src/elements/Button';
import { DateField } from '..';

const buttonText = 'Submit form';
const defaultValues = {
  enrollmentDate: new Date('2020-07-14'),
};
function App({ defaultFormData, getFormData }) {
  const {
    control,
    getValues,
  } = useForm({ defaultValues: defaultFormData });

  return (
    <ThemeProvider theme={{}}>
      <Controller
        control={control}
        name="enrollmentDate"
        render={({ onChange, onBlur, value }) => (
          <DateField
            labelText="Enrollment Date"
            locale="it"
            onChange={selected => onChange(selected.selectedDay)}
          />
        )}
      />
      <Button
        onClick={() => {
          getFormData(getValues({ nest: true }));
        }}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
}

describe('DateField - data', () => {
  let getFormData;

  beforeEach(() => {
    jest.clearAllMocks();
    getFormData = jest.fn();
    render(
      <App defaultFormData={defaultValues} getFormData={getFormData} />
    );
  });
  it('should have the default value', () => {
    fireEvent.click(screen.getByText(buttonText));
    const actual = getFormData.mock.calls[0][0];
    expect(actual).toEqual(defaultValues);
  });
  it('should have updated value when a new date is selected', () => {
    fireEvent.click(screen.getByPlaceholderText('M/D/YYYY'));
    const cells = screen.getAllByRole('gridcell');
    fireEvent.click(cells[30]);
    fireEvent.click(screen.getByText(buttonText));
    const actual = getFormData.mock.calls[0][0];
    expect(actual.enrollmentDate.getDate()).toEqual(31);
  });
});
