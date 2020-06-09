`<CheckboxField>` is our control that handles Checkbox groups.

```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { CheckboxInput } from 'src/elements/forms/CheckboxField/CheckboxInput';

const beatlesOptions = [
  {
    label: 'George Harrison',
    value: 'george'
  },
  {
    label: 'John Lennon',
    value: 'john'
  },
  {
    label: <span>Paul McCartney</span>,
    value: 'paul'
  },
  {
    label: 'Ringo Starr',
    value: 'ringo'
  },
];

const checkboxFields = beatlesOptions.map((option, idx)  => <CheckboxInput key={`beatles[${idx}]`} option={option} />);

<ThemeProvider theme={{}}>
  {checkboxFields}
</ThemeProvider>
```

#### Demonstrating Controlled Components (via react-hook-form)

```jsx inside Markdown
import {
  Controller,
  useForm,
} from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid'; // ... from 'grape-ui-react'
import { CheckboxInput } from 'src/elements/forms/CheckboxField/CheckboxInput';
import { Header } from 'src/elements/typography';
import { Button } from 'src/elements/Button';

const {
  control,
  getValues,
  register,
  setValue,
  watch,
} = useForm({
  defaultValues: {
    courses: ['🎨'],
  },
});

const courseOptions = [
  {
    label: '🎨 Arts & Humanities',
    value: '🎨',
  },
  {
    label: '👔 Business',
    value: '👔',
  },
  {
    label: '🤖 Artificial Intelligence',
    value: '🤖',
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
const selectedCourseOptions = watch('courses') || [];
const chosenCourses = selectedCourseOptions.filter(option => option).map(option => option).join(', ');
const checkboxFields = courseOptions.map((option, idx)  => {

  return (
    <CheckboxInput
      inputRef={register}
      key={`courses[${idx}]`}
      name={`courses[${idx}]`}
      option={option}
      placeholder="Choose as many courses that interest you"
      value={option.value}
    />
  );
});
const onSelectAll = e => {
  const { target: { checked } } = e;
  setValue([
    {
      courses: courseOptions.map(option =>  checked ? option.value : false),
    }
  ]);
};

<ThemeProvider theme={{}}>
  <button
    type="button"
    onClick={() => {
      console.log({ formData: getValues({ nest: true }) });
    }}
  >
    Get values
  </button>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <CheckboxInput
        inputRef={register}
        name={`selectAll`}
        option={{ label: 'Select All', value:'select_all' }}
        value="select_all"
        onChange={onSelectAll}
      />
      {checkboxFields}
    </Box>
  </Flex>
  <Header.h5 margin="0 0 1rem">
    {chosenCourses ?
    `You've chosen interest in the following courses: ${chosenCourses}.`
    : ''}
  </Header.h5>
</ThemeProvider>
```

#### Demonstrating Group Controlled Components (via react-hook-form)

```jsx inside Markdown
import {
  Controller,
  useForm,
} from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Header } from 'src/elements/typography';
import { Button } from 'src/elements/Button';

const defaultValues = {
  courses: ['🎨', false, false, false, '💃', false, ],
};
const {
  control,
  getValues,
  register,
  setValue,
  watch,
} = useForm({ defaultValues });

const courseOptions = [
  {
    label: '🎨 Arts & Humanities',
    value: '🎨',
  },
  {
    label: '👔 Business',
    value: '👔',
  },
  {
    label: '🤖 Artificial Intelligence',
    value: '🤖',
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
const selectedCourseOptions = watch('courses') || [];
const chosenCourses = selectedCourseOptions.filter(option => option).map(option => option).join(', ');

<ThemeProvider theme={{}}>
  <button
    type="button"
    onClick={() => {
      console.log({ formData: getValues({ nest: true }) });
    }}
  >
    Get values
  </button>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <CheckboxField
        inputRef={register}
        name="courses"
        options={courseOptions}
        hasSelectAll
        setValue={setValue}
      />
    </Box>
  </Flex>
  <Header.h5 margin="0 0 1rem">
    {chosenCourses ?
    `You've chosen interest in the following courses: ${chosenCourses}.`
    : ''}
  </Header.h5>
</ThemeProvider>
```
