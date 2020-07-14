
/* eslint-disable react/prop-types */
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import {
  useForm,
} from 'react-hook-form';
import { Button } from 'src/elements/Button';
import { DateField } from '..';

const defaultValues = {
  enrollmentDate: new Date(),
};
function App({ defaultFormData, getFormData }) {
  const {
    getValues,
    register,
  } = useForm({ defaultValues: defaultFormData });

  return (
    <ThemeProvider theme={{}}>
      <DateField
        inputRef={register}
        labelText="Enrollment Date"
        locale="it"
        name="enrollmentDate"
      />
      <Button
        onClick={() => {
          getFormData(getValues({ nest: true }));
        }}
      />
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
  it('should have options with default selections', () => {
    fireEvent.click(screen.getByRole('button'));
    const actual = getFormData.mock.calls[0][0];
    expect(actual).toEqual(defaultValues);
  });
});
