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

#### Demonstrating Individual Controlled Components with `<CheckboxField.Input>` and react-hook-form

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
  setValue([
    {
      courses: checked ? courseOptions.map(option =>  option.value) : new Array(courseOptions.length).fill(false),
    },
  ]);
};
const isChecked = values => values && values.filter(val => !val).length === 0;

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

### `<CheckboxField>` Component Props

Here is a list of all the props and subComponents for a card, sorted in order of appearance on the UI from top to bottom:

| Prop Name | Passed Props | Default Props | Description |
| - | - | - | - |
| `inputRef` | `N/A` | `() => {}` | Used to support a `ref` attribute to get to the underlying input element. |
| `name` | `N/A` | Required | Used to support the `name` attribute for every underlying input element. When `name="courses"` is defined, then every `i-th` input element will be defined the following attribute: `name="courses[i]"`. |
| `options` | `N/A` | Required | Expects an array of option elements. Each option element is defined as `{ label: string, value: node OR string }`. Used to support the underlying `label text` and `value` of each input element.
| `values` | `N/A` | `N/A` | Expects an array of values for elements. Used to support the `checked` attribute for every underlying input element. This is useful if you want to manually set a default checked state for every underlying input. Additionally, this prop is used to properly synchronize the `checked` state for the `Select All` input when `hasSelectAll` is true. |
| `hasSelectAll` | `N/A` | `false` | Used to enable the `Select All` toggle behavior for every underlying input element. Enabling this prop requires implementing `onChangeSelectAll` as the callback function when `Select All` input is toggled.
| `onChangeSelectAll` | `N/A` | `() => {}` | The callback function use to support the `onChange` attribute that will be invoked on the underlying  `Select All` input. |
| `enableAutoChecking` | `N/A` | `false` | Allows `<CheckboxField>` to automatically handle the `checked` attribute for every underlying input element inferred via the `values` prop. Useful when manually defining form state. |
| `onChange` | `N/A` | `() => {}` | Used to support the onChange attribute on the underlying input elements. Useful when manually defining form state. |
| `optionSelectAll` | `N/A` | `{ label: 'Select All', value: true }` | Used to support the `option` attribute on the underlying `Select All` input element. |

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
