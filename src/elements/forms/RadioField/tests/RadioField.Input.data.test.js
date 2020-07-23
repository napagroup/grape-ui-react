/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {
  useForm,
} from 'react-hook-form';
import { Button } from 'src/elements/Button';
import { Form } from 'src/elements/forms';
import { RadioField } from '..';

const defaultValues = {
  courses: '🎨',
};

const courseOptions = [
  {
    label: '🎨 Arts & Humanities',
    value: '🎨',
  },
  {
    label: '🤸‍♀️ Health',
    value: '🤸‍♀️',
  },
  {
    label: '💃 Music & Dance',
    value: '💃',
  },
  {
    label: '🌎 Language Learning',
    value: '🌎',
  },
];
function App({ defaultFormData, getFormData, options }) {
  const {
    getValues,
    register,
  } = useForm({ defaultValues: defaultFormData });
  const radioInputs = courseOptions.map((option, idx) => (
    <RadioField.Input
      key={`courses[${idx}]`}
      inputRef={register}
      name="courses"
      option={option}
      value={option.value}
    />
  ));

  return (
    <Form role="form">
      {radioInputs}
      <Button
        onClick={() => {
          getFormData(getValues({ nest: true }));
        }}
      />
    </Form>
  );
}
describe('RadioField.Input - data', () => {
  let getFormData;
  beforeEach(() => {
    jest.clearAllMocks();
    getFormData = jest.fn();
    render(
      <App defaultFormData={defaultValues} getFormData={getFormData} options={courseOptions} />
    );
  });
  it('should have options with default selections', () => {
    fireEvent.click(screen.getByRole('button'));
    const actual = getFormData.mock.calls[0][0];
    expect(actual.courses).toEqual(defaultValues.courses);
  });
  it('should have the option checked when selected', () => {
    const { label, value } = courseOptions[courseOptions.length - 1];
    fireEvent.click(screen.getByLabelText(label));
    fireEvent.click(screen.getByRole('button'));
    const actual = getFormData.mock.calls[0][0];
    const expected = value;
    expect(actual.courses).toEqual(expected);
  });
});
