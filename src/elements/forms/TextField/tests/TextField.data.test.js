/* eslint-disable react/prop-types */
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { useForm } from 'react-hook-form';
import { Button } from 'src/elements/Button';
import { Form } from 'src/elements/forms';
import { TextField } from '..';

const buttonText = 'Submit form';
const enrolleeNameLabelText = 'Enrollee Name';
const defaultValues = {
  enrolleeName: 'Student',
};
function App({ defaultFormData, getFormData }) {
  const {
    register,
    getValues,
  } = useForm({ defaultValues: defaultFormData });

  return (
    <Form role="form">
      <TextField
        inputRef={register}
        labelText={enrolleeNameLabelText}
        name="enrolleeName"
      />
      <Button
        onClick={() => {
          getFormData(getValues({ nest: true }));
        }}
      >
        {buttonText}
      </Button>
    </Form>
  );
}

describe('TextField - data', () => {
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
  it('should have updated value when text is changed', () => {
    const expected = { enrolleeName: 'Joules D.' };
    fireEvent.change(screen.getByLabelText(enrolleeNameLabelText), { target: { value: expected.enrolleeName } });
    fireEvent.click(screen.getByText(buttonText));
    const actual = getFormData.mock.calls[0][0];
    expect(actual).toEqual(expected);
  });
});
