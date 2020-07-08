`<Form>` is the wrapping flex container for all form control elements. It displays all controls in a column layout.

```jsx inside Markdown
import { TextField } from 'src/elements/forms';

<div>
  <Form>
    <TextField
      assistiveText="First and Last Name"
      labelText="Full name"
      name="exampleFormTextField1"
    />
    <TextField
      name="exampleFormTextField2"
      labelText="Address"
    />
  </Form>
  <Form flexDirection="row">
    <TextField
      assistiveText="First and Last Name"
      labelText="Full name"
      name="exampleFormTextField1"
    />
    <TextField
      name="exampleFormTextField2"
      labelText="Address"
    />
  </Form>
</div>
```

`<Form>` can have `formStyle` applied which will trickle down to all children form components without their `formStyle` explicitly stated.  And since `<Form>` uses principles found in `flexbox`, you can apply all sorts of [styled system props](https://styled-system.com/api).

```jsx inside Markdown
import {
  Box,
  Flex,
} from 'src/elements/grid';
import { TextField } from 'src/elements/forms';

<Flex flexDirection={['column', 'row']}>
  <Box
    pr={[null, 1, 2, 3]}
    width={[1, 1 / 2]}
  >
    <Form formStyle="outlined">
      <TextField
        name="exampleFormFormStyleOutlinedTextField1"
        placeholder="Address"
      />
      <TextField
        name="exampleFormFormStyleOutlinedTextField2"
        placeholder="Address Line 2"
      />
    </Form>
    <Form
      flexDirection={['column', null, 'row']}
    >
      <TextField
        name="exampleFormFlexDirectionOutlinedTextField1"
        placeholder="Month"
      />
      <TextField
        controlGroupProps={{
          mx: [null, null, 1]
        }}
        formStyle="filled"
        name="exampleFormFlexDirectionFilledTextField2"
        placeholder="Date"
      />
      <TextField
        name="exampleFormFlexDirectionOutlinedTextField3"
        placeholder="Year"
      />
    </Form>
  </Box>
  <Box
    pl={[null, 1, 2, 3]}
    width={[1, 1 / 2]}
  >
    <Form formStyle="filled">
      <TextField
        name="exampleFormFormStyleFilledTextField1"
        placeholder="Address"
      />
      <TextField
        name="exampleFormFormStyleFilledTextField2"
        placeholder="Address Line 2"
      />
    </Form>
    <Form
      flexDirection={['column', null, 'row']}
      formStyle="filled"
    >
      <TextField
        name="exampleFormFlexDirectionFilledTextField1"
        placeholder="Month"
      />
      <TextField
        controlGroupProps={{
          mx: [null, null, 1]
        }}
        formStyle="outlined"
        name="exampleFormFlexDirectionOutlinedTextField2"
        placeholder="Date"
      />
      <TextField
        name="exampleFormFlexDirectionFilledTextField3"
        placeholder="Year"
      />
    </Form>
  </Box>
</Flex>
```

#### Hide Form

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid';
import { TextField } from 'src/elements/forms';
import { Button } from 'src/elements/Button';

const [hide, setHidden] = useState(false);

<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <Form isHidden={hide}>
        <TextField
          labelText="Name"
          name="name"
        />
      </Form>
    </Box>
  </Flex>
</ThemeProvider>
```
