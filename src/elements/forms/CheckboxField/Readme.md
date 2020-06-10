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

#### Demonstrating Individual Controlled Components with `<CheckboxInput>` and react-hook-form

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
const courses = watch('courses') || [];
const chosenCourses = courses.filter(value => value).map(value => value).join(', ');
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

const handleSelectAll = e => {
  const { target: { checked } } = e;
  setValue([
    {
      courses: checked ? courseOptions.map(option =>  option.value) : new Array(courseOptions.length).fill(false),
    },
  ]);
};
<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <CheckboxInput
        inputRef={register}
        name={`selectAll`}
        option={{ label: 'Select All', value: true }}
        onChange={handleSelectAll}
      />
      {checkboxFields}
    </Box>
  </Flex>
  <Button
    onClick={() => {
      console.log({ formData: getValues({ nest: true }) });
    }}
  >
    Get values (shown in console)
  </Button>
  <Header.h5 margin="0 0 1rem">
    {chosenCourses ?
    `You've chosen interest in the following courses: ${chosenCourses}.`
    : ''}
  </Header.h5>
</ThemeProvider>
```

#### Demonstrating Group Controlled Components with `<CheckboxField>` and react-hook-form

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
const courses = watch('courses') || [];
const chosenCourses = courses.filter(value => value).map(value => value).join(', ');
const handleSelectAll = e => {
  const { target: { checked } } = e;
  setValue([
    {
      courses: checked ? courseOptions.map(option =>  option.value) : new Array(courseOptions.length).fill(false),
    },
  ]);
};
<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <CheckboxField
        inputRef={register}
        name="courses"
        options={courseOptions}
        onChangeSelectAll={handleSelectAll}
        hasSelectAll
        values={courses}
      />
    </Box>
  </Flex>
  <Button
    onClick={() => {
      console.log({ formData: getValues({ nest: true }) });
    }}
  >
    Get values (shown in console)
  </Button>
  <Header.h5 margin="0 0 1rem">
    {chosenCourses ?
    `You've chosen interest in the following courses: ${chosenCourses}.`
    : ''}
  </Header.h5>
</ThemeProvider>
```
