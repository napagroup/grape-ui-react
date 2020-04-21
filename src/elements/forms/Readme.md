Forms in grape-ui are designed to be as easy as possible for developers. The controls are intended to look identical on both the UI and the code behind it.

```jsx in Markdown

import {
  CheckboxField,
  DateField,
  Form,
  SelectField,
  TextField,
} from './';
import {
  Box,
  Flex,
} from 'src/elements/grid';
import {
  afkapSongOptions,
  princeSongOptions,
} from './examples';

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

const ExampleFormContent = props => {
  const { formStyle } = props;
  return (
    <Box px={[1, 2, 3, 4]} width={[1, 1 / 2]}>
      <Form formStyle={formStyle}>
        <TextField
          isRequired
          labelText="Full Name"
          name={`exampleFullName${formStyle}`}
        />
        <TextField
          email
          labelText="Email Address"
          name={`exampleEmail${formStyle}`}
          placeholder="email@domain.com"
        />
        <TextField
          isRequired
          labelText="Password"
          name={`examplePassword${formStyle}`}
          password
        />
        <TextField
          labelText="Company"
          name={`exampleUserNum${formStyle}`}
          plainText
        />
        <TextField
          disabled
          labelText="Job Title"
          name={`exampleUserNum${formStyle}`}
        />
        <DateField
          formStyle={formStyle}
          labelText="Hire Date"
          name={`exampleDob${formStyle}`}
        />
        <TextField
          labelText="Phone Number"
          name={`examplePhone${formStyle}`}
          phone
          placeholder="212-555-2368"
        />
        <TextField
          labelText="Zip Code"
          name={`exampleZip${formStyle}`}
          postalCode
        />
        <TextField
          formatterOptions={{
            blocks: [4, 4],
            delimiter: '-',
            numericOnly: true,
          }}
          labelText="Account Number"
          name={`exampleCustom${formStyle}`}
          placeholder="XXXX-XXXX"
        />
        <TextField
          assistiveText="Rounded to nearest thousand"
          currency
          labelText="Estimated Net Worth"
          name={`exampleNetWorth${formStyle}`}
        />
        <SelectField
          isClearable
          labelText="Favorite Prince Song"
          name={`examplePrinceSong${formStyle}`}
          options={princeSongOptions}
        />
        <SelectField
          isClearable
          isMulti
          labelText="Second and Third Favorite Prince Songs"
          name={`examplePrinceSong${formStyle}`}
          options={afkapSongOptions}
        />
        <TextField
          email
          labelText="Short Bio"
          minRows={2}
          multiline
          name={`exampleBio${formStyle}`}
        />
        <TextField
          assistiveText="Max two decimals"
          labelText="What is pi (π)?"
          name={`examplePi${formStyle}`}
          numeric
        />
        <CheckboxField
          labelText="What courses are you interested in?"
          options={courseOptions}
        />
      </Form>
    </Box>
  )
};

ExampleFormContent.defaultProps = {
  formStyle: 'outlined',
};

<Flex
  flexDirection={['column', 'row']}
  justifyContent="space-evenly"
>
  <ExampleFormContent />
  <ExampleFormContent
    formStyle="filled"
  />
</Flex>

```
