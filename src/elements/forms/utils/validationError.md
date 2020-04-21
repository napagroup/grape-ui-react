When you need to mark a field with an error, simply provide the inline validation through the `validationError` prop as either a string or a bool.

```jsx in Markdown
import {
  Box,
  Flex,
} from 'src/elements/grid'; // ... from 'grape-ui-react'
import {
  TextField
} from 'src/elements/forms'; // ... from 'grape-ui-react'

<Flex flexDirection={['column', 'row']}>
  <Box px={[1, 2]} width={[1, 1 / 2]}>
    <TextField
      name="validationErrorExampleOutlined"
      validationError="Error message"
    />
  </Box>
  <Box px={[1, 2]} width={[1, 1 / 2]}>
    <TextField
      formStyle="filled"
      name="validationErrorExampleFilled"
      placeholder="validationError is set to true."
      validationError
    />
  </Box>
</Flex>
```

### With `assistiveText`

If `validationError` is set to a string value where there is also `assistiveText` provided, it will not display the `assistiveText`. If `validationError` is set to a bool where there is also `assistiveText` provided, it will display the `assistiveText` with a `brandDanger` color.

```jsx in Markdown
import {
  Box,
  Flex,
} from 'src/elements/grid'; // ... from 'grape-ui-react'
import {
  CheckboxField,
  DateField,
  SelectField,
  TextField,
} from 'src/elements/forms'; // ... from 'grape-ui-react'
import {
  List,
  ListItem,
  Paragraph,
  Text,
} from 'src/elements/typography'; // ... from 'grape-ui-react'

const cheeseOptions = [
  { label: 'Whiz', value: 'whiz' },
  { label: 'American', value: 'american' },
  { label: 'Provolone', value: 'provolone' },
];

<Flex flexDirection="column">
  <Paragraph mb="0">
    validationError is a string where there is also assistiveText.
  </Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={[1, 2]} width={[1, 1 / 2]}>
      <TextField
        assistiveText="youremail@domain.com"
        labelText="Email Address"
        isRequired
        name="validationErrorStringAssistiveTextExampleOutlined"
        validationError="Email is invalid."
      />
    </Box>
    <Box px={[1, 2]} width={[1, 1 / 2]}>
      <TextField
        assistiveText="youremail@domain.com"
        formStyle="filled"
        labelText="Email Address"
        isRequired
        name="validationErrorStringAssistiveTextExampleFilled"
        validationError="Email is invalid."
      />
    </Box>
  </Flex>
  <Paragraph mb="0">
    validationError is a bool where there is also assistiveText.
  </Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={[1, 2]} width={[1, 1 / 2]}>
      <TextField
        assistiveText="Password must contain an upper case letter, a numeric character, and a special character."
        labelText="Password"
        isRequired
        name="validationErrorBoolAssistiveTextExampleOutlined"
        password
        validationError
      />
    </Box>
    <Box px={[1, 2]} width={[1, 1 / 2]}>
      <TextField
        assistiveText="Password must contain an upper case letter, a numeric character, and a special character."
        formStyle="filled"
        labelText="Password"
        isRequired
        name="validationErrorBoolAssistiveTextExampleFilled"
        password
        validationError
      />
    </Box>
  </Flex>
  <Paragraph mb="0">
    validationError is a bool, isRequired is set to true, no assistiveText is provided.
  </Paragraph>
  <Box mb={1} px={[1, 2]} width={[1, 1 / 2]}>
    <CheckboxField
      isRequired
      labelText="Cheesesteak cheese (select all that apply)"
      name="validationErrorBoolNoAssistiveTextExample"
      options={cheeseOptions}
      validationError
    />
  </Box>
</Flex>
```
