`<CheckboxField>` uses [react-checkbox-group v4](https://github.com/ziad-saab/react-checkbox-group/tree/v4.0.0).

```jsx inside Markdown
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
    label: 'Paul McCartney',
    value: 'paul'
  },
  {
    label: 'Ringo Starr',
    value: 'ringo'
  },
];

<CheckboxField options={beatlesOptions} />
```

grape-ui controls can be integrated with Form Validation libraries. Below we demonstrate registering the component(s) as controlled inputs via [react-hook-form](https://react-hook-form.com/).

For further documentation on integrating UI component libraries with react-hook-form refer to [Working with UI Library](https://react-hook-form.com/get-started/#WorkwithUIlibrary).

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
import { Header } from 'src/elements/typography';
import { Button } from 'src/elements/Button';

const {
  control,
  register,
  watch,
} = useForm();

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
const chosenCourses = selectedCourseOptions.map(option => option).join(', ');

<ThemeProvider theme={{}}>
  <Header.h5 margin="0 0 1rem">
    {chosenCourses ?
    `You've chosen interest in the following courses: ${chosenCourses}.`
    : ''}
  </Header.h5>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <Controller
        as={<CheckboxField />}
        control={control}
        labelText="Courses"
        name="courses"
        options={courseOptions}
        onChange={([selected]) => selected}
        placeholder="Choose as many courses that interest you"
      />
    </Box>
  </Flex>
</ThemeProvider>
```
