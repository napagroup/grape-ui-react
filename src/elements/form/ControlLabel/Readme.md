`<ControlLabel>` is a plain `<label>` element that is intended for text and for use within a form control, such as:
* `<CheckboxField>`
* `<DateField>`
* `<SelectField>`
* `<TextField>`

[Style usage for this element can be found here](https://material.io/components/text-fields/#anatomy).

```jsx inside Markdown
import { Box, Flex } from '../../grid'; // ... from 'grape-ui-react'
import { CheckboxField } from '../CheckboxField';
import { DateField } from '../DateField';
import { SelectField } from '../SelectField';
import { TextField } from '../TextField';

const seasonOptions = [
  { label: 'Winter', value: 'winter' },
  { label: 'Spring', value: 'spring' },
  { label: 'Summer', value: 'summer' },
  { label: 'Fall', value: 'fall' },
];

const controlGroupSpacing = [1, 2, 3];
<Box>
  <ControlLabel>I am a control label.</ControlLabel>
  <CheckboxField
    controlGroupProps={{ my: controlGroupSpacing }}
    labelText="Here I am for a CheckboxField"
    options={seasonOptions}
  />
  <Flex flexDirection={['column', 'row']}>
    <Box pr={[ 0, ...controlGroupSpacing ]} width={[1, 1 / 2]}>
      <DateField
        controlGroupProps={{ my: controlGroupSpacing }}
        labelText="Here I am in a DateField"
      />
    </Box>
    <Box pl={[ 0, ...controlGroupSpacing ]} width={[1, 1 / 2]}>
      <DateField
        controlGroupProps={{ my: controlGroupSpacing }}
        formStyle="filled"
        labelText="Here I am in a DateField"
      />
    </Box>
  </Flex>
  <Flex flexDirection={['column', 'row']}>
    <Box pr={[ 0, ...controlGroupSpacing ]} width={[1, 1 / 2]}>
      <SelectField
        controlGroupProps={{ my: controlGroupSpacing }}
        labelText="Here I am for a SelectField"
        options={seasonOptions}
      />
    </Box>
    <Box pl={[ 0, ...controlGroupSpacing ]} width={[1, 1 / 2]}>
      <SelectField
        controlGroupProps={{ my: controlGroupSpacing }}
        formStyle="filled"
        labelText="Here I am for a SelectField"
        options={seasonOptions}
      />
    </Box>
  </Flex>
  <Flex flexDirection={['column', 'row']}>
    <Box pr={[ 0, ...controlGroupSpacing ]} width={[1, 1 / 2]}>
      <TextField
        controlGroupProps={{ my: controlGroupSpacing }}
        labelText="Here I am for a TextField"
        name="labelTextTextFieldOutlinedExample"
      />
    </Box>
    <Box pl={[ 0, ...controlGroupSpacing ]} width={[1, 1 / 2]}>
      <TextField
        controlGroupProps={{ my: controlGroupSpacing }}
        formStyle="filled"
        labelText="Here I am for a TextField"
        name="labelTextTextFieldFilledExample"
      />
    </Box>
  </Flex>
</Box>
```

### Part of Form Controls <span style="font-size: 0.8rem">`<CheckboxField>` `<DateField>` `<SelectField>` `<TextField>`</span>

`<ControlLabel>` can be used directly through the `label` prop on any form control.  When a `label` is provided on a form control marked with `isRequired`, it will append an asterisk to the label text (see Example 1).If you'd like to make specific changes to the `<LabelText>` element via its props, you can utilize `labelTextProps` on any form element (see Example 2).

```jsx inside Markdown
import { Flex } from '../../grid'; // ... from 'grape-ui-react'
import { CheckboxField } from '../CheckboxField';
import { DateField } from '../DateField';
import { SelectField } from '../SelectField';
import { TextField } from '../TextField';
import { Link, Paragraph } from '../../typography';

const beatlesOptions = [
  { label: 'George Harrison', value: 'george' },
  { label: 'John Lennon', value: 'john' },
  { label: 'Paul McCartney', value: 'paul' },
  { label: 'Ringo Starr', value: 'ringo' },
];

const controlGroupSpacing = [1, 2, 3];

<Flex flexDirection="column" maxWidth={400}>
  <Paragraph color="gray.dark">Example 1. An asterisk is appended to the end:</Paragraph>
  <CheckboxField
    controlGroupProps={{ mb: controlGroupSpacing }}
    isRequired
    labelText="Pick your favorite Beatle (select all that apply)"
    options={beatlesOptions}
  />
  <Paragraph color="gray.dark">Example 2. Passing through <code>controlLabelProps</code>:</Paragraph>
  <DateField
    assistiveText="Sgt. Pepper's, Track 6."
    controlGroupProps={{ mb: controlGroupSpacing }}
    controlLabelProps={{
      bg: 'green',
      color: 'yellow.light',
      height: 'auto',
      px: 4,
      py: 2,
      top: '-1rem',
    }}
    labelText="When did she leave home?"
  />
</Flex>
```
