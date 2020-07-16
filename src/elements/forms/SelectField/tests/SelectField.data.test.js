/* eslint-disable react/prop-types */
import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import selectEvent from 'react-select-event';
import {
  Controller,
  useForm,
} from 'react-hook-form';
import { Button } from 'src/elements/Button';
import { Form } from 'src/elements/forms';
import { SelectField } from '..';

const buttonText = 'Submit form';
const labelText = 'Courses';
const defaultValues = {
  courses: {
    label: '🎨 Arts & Humanities',
    value: 'artsHumanities',
  },
};
const courseOptions = [
  {
    label: '🎨 Arts & Humanities',
    value: 'artsHumanities',
  },
  {
    label: '👔 Business',
    value: 'business',
  },
  {
    label: '🤖 Artificial Intelligence',
    value: 'artificialIntelligence',
  },
  {
    label: '🤸‍♀️ Health',
    value: 'health',
  },
  {
    label: '💃 Music & Dance',
    value: 'musicDance',
  },
  {
    label: '🌎 Language Learning',
    value: 'languageLearning',
  },
];
function App({ defaultFormData, getFormData }) {
  const {
    control,
    getValues,
  } = useForm({ defaultValues: defaultFormData });

  return (
    <Form role="form">
      <Controller
        control={control}
        name="courses"
        render={({ onChange, value }) => (
          <SelectField
            labelText={labelText}
            name="courses"
            onChange={onChange}
            options={courseOptions}
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
    </Form>
  );
}

describe('SelectField - data', () => {
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
  it('should have updated value when an option is selected', async () => {
    const expected = {
      courses: courseOptions[1],
    };
    await selectEvent.select(screen.getByLabelText(labelText), [courseOptions[1].label]);
    fireEvent.click(screen.getByText(buttonText));
    const actual = getFormData.mock.calls[0][0];
    expect(actual).toEqual(expected);
  });
});
