Forms in grape-ui are designed to be as easy as possible for developers. The controls are intended to look identical on both the UI and the code behind it.

```jsx in Markdown

import { Form, TextField } from './';
import { Flex } from 'src/elements/grid';

const ExampleFormContent = (
  <TextField
    isRequired
    labelText="Full Name"
    name="exampleFormName"
  />
  <TextField
    email
    labelText="Email Address"
    name="exampleFormEmail"
  />
  <TextField
    isRequired
    labelText="Password"
    name="examplePassword"
    password
  />
);

<Flex flexDirection={['column', 'row']}>
  <Form>
    {formContent}
  </Form>
  <Form formStyle="filled">
    {formContent}
  </Form>
</Flex>

```
