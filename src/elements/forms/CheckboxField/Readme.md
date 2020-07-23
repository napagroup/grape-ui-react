`<CheckboxField>` is our control that handles Checkbox groups.

```jsx in Markdown
import { ThemeProvider } from 'styled-components';

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

<ThemeProvider theme={{}}>
  <CheckboxField
    name="courses"
    options={beatlesOptions}
  />
</ThemeProvider>
```

### `<CheckboxField>` Component Props

Here is a list of all the props and subComponents for CheckboxField, sorted in order of appearance on the UI from top to bottom:

| Prop Name | Default Props | Description |
| - | - | - | - |
| `checkboxSize` | `12` | Defines the height and width of the checkbox. Supports styled-system's responsive scale. |
| `inputRef` | `() => {}` | Used to support a `ref` attribute to get to the underlying input element. |
| `name` | Required | Used to support the `name` attribute for every underlying input element. When `name="courses"` is defined, then every `i-th` input element will be defined by the following attribute: `name="courses[i]"`. |
| `options` | Required | Expects an array of option elements. Each option element is defined as `{ label: string, value: node OR string }`. Used to support the underlying `label text` and `value` of each input element.
| `values` | `N/A` | Expects an array of values for elements. Used to support the `checked` attribute for every underlying input element. This is useful if you want to manually set a default checked state for every underlying input. Additionally, this prop is used to properly synchronize the `checked` state for the `Select All` input when `hasSelectAll` is true. |
| `hasSelectAll` | `false` | Used to enable the `Select All` toggle behavior for every underlying input element. Enabling this prop requires implementing `onChangeSelectAll` as the callback function when `Select All` input is toggled.
| `onChangeSelectAll` | `() => {}` | The callback function supporting the `onChange` attribute that will be invoked on the underlying  `Select All` input. |
| `enableAutoChecking` | `false` | Allows `<CheckboxField>` to automatically handle the `checked` attribute for every underlying input element inferred via the `values` prop. Useful when manually defining form state. |
| `onChange` | `() => {}` | Used to support the onChange attribute on the underlying input elements. Useful when manually defining form state. |
| `optionSelectAll` | `{ label: 'Select All', value: true }` | Used to support the `option` attribute on the underlying `Select All` input element. |

#### Demonstrating Individual Controlled Components with `<CheckboxField.Input>` using react-hook-form

```jsx inside Markdown
import { useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Header } from 'src/elements/typography';
import { Button } from 'src/elements/Button';

const {
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
    <CheckboxField.Input
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
  setValue(
    'courses',
    checked ? courseOptions.map(option => option.value) : new Array(courseOptions.length).fill(false),
  );
};
const isChecked = values => values && values.filter(val => val).length === courseOptions.length;

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <CheckboxField.Input
        inputRef={register}
        checked={isChecked(courses)}
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

#### Demonstrating Group Controlled Components with `<CheckboxField>` using react-hook-form

```jsx inside Markdown
import { useForm } from 'react-hook-form';
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
  setValue(
    'courses',
    checked ? courseOptions.map(option => option.value) : new Array(courseOptions.length).fill(false),
  );
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

#### Hide CheckboxField

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Button } from 'src/elements/Button'; // ... from 'grape-ui-react'

const [hide, setHidden] = useState(false);

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
<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
    <CheckboxField
      isHidden={hide}
      name="courses"
      options={courseOptions}
    />
    </Box>
  </Flex>
</ThemeProvider>
```

#### Demonstrating Controlled Components with `<RadioField[.Input]>` using react-hook-form

<RadioField[.Input]> behind the scenes is really just a shorthand wrapper for <CheckboxField[.Input] type="radio">

```jsx inside Markdown
import { Controller, useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Header } from 'src/elements/typography';
import { Button } from 'src/elements/Button';
import { RadioField } from 'src/elements/forms/RadioField';

const {
  control,
  getValues,
  register,
  setValue,
  watch,
} = useForm({
  defaultValues: {
    courses: '🎨',
    coursesTwo: '🎨',
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
const courses = watch('courses') || {};
const courses2 = watch('coursesTwo') || {};
const radioInputs = courseOptions.map((option, idx)  => {
  return (
    <RadioField.Input
      inputRef={register}
      key={`courses[${idx}]`}
      name="courses"
      option={option}
      value={option.value}
    />
  );
});

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <Header.h5 margin="0 0 1rem">
        Using input field Control
      </Header.h5>
      {radioInputs}
      <Header.h5 margin="0 0 1rem">
        Using group field Control
      </Header.h5>
      <RadioField
        inputRef={register}
        name="coursesTwo"
        options={courseOptions}
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
    {courses ?
    `You've chosen interest in: ${courses} & ${courses2}.`
    : ''}
  </Header.h5>
</ThemeProvider>
```
