`<ControlGroup>` is a wrapping block element for use within a form control, such as:
* `<CheckboxField>`
* `<DateField>`
* `<SelectField>`
* `<TextField>`
`<ControlGroup` holds the control together and maps the other components in the field including the `<AssistiveText>`, `<ControlLabel>`, and styling for `validationError`. Props for `<ControlGroup>` can be modified by using `controlGroupProps` on the form element.

```jsx inside Markdown
import { Box, Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { CheckboxField, DateField, SelectField, TextField } from 'src/elements/form';

const marioOptions = [
  { label: 'Mario', value: 'mario' },
  { label: 'Luigi', value: 'luigi' },
  { label: 'Peach', value: 'peach' },
  { label: 'Toad', value: 'toad' },
];

const controlGroupSpacing = [1, 2, 3];

<Box>
  <ControlGroup>I'm inside a ControlGroup.</ControlGroup>
  <Flex flexDirection={['column', 'row']}>
    <Box pr={[ 0, ...controlGroupSpacing ]} width={[1, 1 / 2]}>
      <TextField
        controlGroupProps={{
          mx: controlGroupSpacing,
        }}
        labelText="I've got my x-axis margins modified"
        name="controlGroupPropsOutlinedExample"
      />
    </Box>
    <Box pl={[ 0, ...controlGroupSpacing ]} width={[1, 1 / 2]}>
      <TextField
        controlGroupProps={{
          my: controlGroupSpacing,
        }}
        formStyle="filled"
        labelText="I've got my y-axis margins modified"
        name="controlGroupPropsFilledExample"
      />
    </Box>
  </Flex>
</Box>
```