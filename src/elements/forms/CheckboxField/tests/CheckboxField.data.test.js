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
import { CheckboxField } from '..';

const defaultValues = {
  courses: ['🎨', false, false, false],
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
    setValue,
    watch,
  } = useForm({ defaultValues: defaultFormData });
  const courses = watch('courses') || [];

  const handleSelectAll = e => {
    const { target: { checked } } = e;
    setValue([
      {
        courses: checked ? options.map(option => option.value) : new Array(options.length).fill(false),
      },
    ]);
  };
  return (
    <ThemeProvider theme={{}}>
      <CheckboxField
        hasSelectAll
        inputRef={register}
        name="courses"
        onChangeSelectAll={handleSelectAll}
        options={options}
        values={courses}
      />
      <Button
        onClick={() => {
          getFormData(getValues({ nest: true }));
        }}
      />
    </ThemeProvider>
  );
}
describe('CheckboxField - data', () => {
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
    expect(actual.courses_selectAll).toEqual(false);
  });
  it('should have the option checked when selected', () => {
    const label = '🌎 Language Learning';
    fireEvent.click(screen.getByLabelText(label));
    fireEvent.click(screen.getByRole('button'));
    const actual = getFormData.mock.calls[0][0];
    const expected = [...defaultValues.courses];
    expected[3] = '🌎';
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual(false);
  });
  it('should have Select All checked when all options are selected', () => {
    [1, 2, 3].forEach(idx => fireEvent.click(screen.getByLabelText(courseOptions[idx].label)));
    fireEvent.click(screen.getByRole('button'));
    const actual = getFormData.mock.calls[0][0];
    const expected = courseOptions.map(option => option.value);
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual('true');
  });
  it('should have all options checked when Select All is selected', () => {
    const label = 'courses_selectAll';
    fireEvent.click(screen.getByAltText(label));
    fireEvent.click(screen.getByRole('button'));
    const actual = getFormData.mock.calls[0][0];
    const expected = courseOptions.map(option => option.value);
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual('true');
  });
  it('should have all options unchecked when Select All is unselected', () => {
    const label = 'courses_selectAll';
    // Select All checked
    fireEvent.click(screen.getByAltText(label));
    // Select All unchecked
    fireEvent.click(screen.getByAltText(label));
    fireEvent.click(screen.getByRole('button'));
    const actual = getFormData.mock.calls[0][0];
    const expected = courseOptions.map(option => false);
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual(false);
  });
  it('should have Select All unchecked when an option is unselected', () => {
    const label = 'courses_selectAll';
    // Select All checked
    fireEvent.click(screen.getByAltText(label));
    // Uncheck an option
    fireEvent.click(screen.getByLabelText(courseOptions[0].label));
    fireEvent.click(screen.getByRole('button'));
    const actual = getFormData.mock.calls[0][0];
    const expected = [...courseOptions.map(option => option.value)];
    expected[0] = false;
    expect(actual.courses).toEqual(expected);
    expect(actual.courses_selectAll).toEqual(false);
  });
});
