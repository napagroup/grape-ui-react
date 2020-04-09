`<AssistiveText>` is a plain block element that is intended for text and for use within a form control, such as:

* `<CheckboxField>`
* `<DateField>`
* `<SelectField>`
* `<TextField>`

[Style usage for this element can be found here](https://material.io/components/text-fields/#anatomy).

```jsx inside Markdown
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { CheckboxField, DateField, SelectField, TextField } from 'src/elements/forms';

const jazzOptions = [
  { label: 'Kind of Blue', value: 'kindOfBlue' },
  { label: 'A Love Supreme', value: 'aLoveSupreme' },
  { label: 'The Shape of Jazz to Come', value: 'theShapeOfJazzToCome' },
];

const controlGroupSpacing = [1, 2, 3];

<Flex flexDirection="column" maxWidth={400}>
  <AssistiveText>I am an assistive text element.</AssistiveText>
  <CheckboxField
    assistiveText="Here I am in a CheckboxField"
    controlGroupProps={{ my: controlGroupSpacing }}
    labelText="Which jazz album is your favorite (select all that apply)?"
    options={jazzOptions}
  />
  <DateField
    assistiveText="Here I am in a DateField"
    controlGroupProps={{ my: controlGroupSpacing }}
  />
  <SelectField
    assistiveText="Here I am in a SelectField"
    controlGroupProps={{ my: controlGroupSpacing }}
    options={jazzOptions}
  />
  <TextField
    assistiveText="Here I am in a TextField"
    controlGroupProps={{ my: controlGroupSpacing }}
    name="assitiveTextTextFieldExample"
  />
</Flex>
```

### Part of Form Controls

`<AssistiveText>` can be used directly through the `assistiveText` prop on any form control.  When no `assistiveText` is provided on a form control marked with `isRequired`, it will populate with "*Required" (see Example 1).  If any `validationError` is provided, `assistiveText`'s content will not appear (see Example 2).  Since `<AssistiveText>` is a block element with minimal styling, you can also pass in any element through the `assistiveText` prop (see Example 3).  And if you'd like to make specific changes to the `<AssistiveText>` element via its props, you can utilize `assistiveTextProps` on any form element (see Example 4).

```jsx inside Markdown
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { CheckboxField, DateField, SelectField, TextField } from 'src/elements/forms';
import { Link, Paragraph } from 'src/elements/typography';

const dayOptions = [
  { label: 'Sunday', value: 'sunday' },
  { label: 'Monday', value: 'monday' },
  { label: 'Tuesday', value: 'tuesday' },
  { label: 'Wednesday', value: 'wednesday' },
  { label: 'Thursday', value: 'thursday' },
  { label: 'Friday', value: 'friday' },
  { label: 'Saturday', value: 'saturday' },
];

const controlGroupSpacing = [1, 2, 3];

<Flex flexDirection="column" maxWidth={400}>
  <Paragraph color="gray.dark">Example 1. No assistive text provided on an element marked as isRequired:</Paragraph>
  <CheckboxField
    controlGroupProps={{ mb: controlGroupSpacing }}
    isRequired
    labelText="What days are you available?"
    options={dayOptions}
  />
  <Paragraph color="gray.dark">Example 2. Validation error overriding assistive text:</Paragraph>
  <TextField
    assistiveText="I am assistive text."
    controlGroupProps={{ mb: controlGroupSpacing }}
    name="assitiveTextValidationErrorExample"
    validationError="I am overwriting the assistive text."
  />
  <Paragraph color="gray.dark">Example 3. Using components instead of plain text:</Paragraph>
  <SelectField
    assistiveText={<Link href="http://calendar.google.com" target="_blank">You may want to check your Google calendar.</Link>}
    controlGroupProps={{ mb: controlGroupSpacing }}
    labelText="Which day of the week works best?"
    options={dayOptions}
  />
  <Paragraph color="gray.dark">Example 4. Passing through <code>assistiveTextProps</code>:</Paragraph>
  <DateField
    assistiveText="Please choose any upcoming date."
    assistiveTextProps={{
      color: 'orange.dark',
      ellipsis: 2,
      pt: 1,
      px: 0,
      textAlign: 'center',
    }}
    controlGroupProps={{ mb: controlGroupSpacing }}
    labelText="When would you like to set your appointment?"
  />
</Flex>
```
