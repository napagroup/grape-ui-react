
`<TextField>` is our basic input control.

#### Basic Usage
```jsx inside Markdown
import useForm from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'
import { Header } from '../../typography';

const theme = {
  colors: {
    grapeSoda: {
      base: 'hsl(325, 84.6%, 28%)',
      dark: 'hsl(305, 33.9%, 23.7%)',
      light: 'hsl(313, 67.8%, 47.5%)',
    },
  },
};

<ThemeProvider theme={theme}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        color="grapeSoda.light"
        labelText="Name"
        name="name"
      />
    </Box>
  </Flex>
</ThemeProvider>
```
`<TextField>` Supports a ref attribute to get to the underlying input element.
You can pass in either a createRef(), or via "callback refs". Examples are demonstrated below
#### Ref support - Getting to the element
```jsx inside Markdown
import { useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'
import { Button } from '../../Button';

const onBtnClick = inputName => () => {
  if(this[inputName]) {
    this[inputName].focus();
  }
};
const nameRef = useRef();
const onRegisterClick = () => {
  nameRef.current.focus();
};

const theme = {
  colors: {
    grapeSoda: {
      base: 'hsl(325, 84.6%, 28%)',
      dark: 'hsl(305, 33.9%, 23.7%)',
      light: 'hsl(313, 67.8%, 47.5%)',
    },
  },
};

<ThemeProvider theme={theme}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        color="grapeSoda.light"
        labelText="Name"
        name="name"
        inputRef={e => { nameRef.current = e; }}
      />
      <TextField
        color="grapeSoda.light"
        inputRef={ref => { this.age = ref; }}
        integer
        labelText="Age"
        name="age"
      />
      <TextField
        color="grapeSoda.light"
        inputRef={ref => { this.desc = ref; }}
        labelText="Description"
        multiline
        name="description"
      />
      <Button
        onClick={onRegisterClick}
      >
        Focus on Name
      </Button>
      <Button
        onClick={onBtnClick('age')}
      >
        Focus on Age
      </Button>
      <Button
        onClick={onBtnClick('desc')}
      >
        Focus on Desc
      </Button>
    </Box>
  </Flex>
</ThemeProvider>
```

#### Demonstrating Controlled Components (via react-hook-form-input)
```jsx inside Markdown
import { useRef } from 'react';
import useForm from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'
import { Header } from '../../typography';
import { Button } from '../../Button';

const onBtnClick = inputName => () => {
  if(this[inputName]) {
    this[inputName].focus();
  }
};
const nameRef = useRef();
const onRegisterClick = () => {
  nameRef.current.focus();
};
const { getValues, register, setValue, watch } = useForm();
const name = watch('name');
const age = watch('age');
const description = watch('description');
const theme = {
  colors: {
    grapeSoda: {
      base: 'hsl(325, 84.6%, 28%)',
      dark: 'hsl(305, 33.9%, 23.7%)',
      light: 'hsl(313, 67.8%, 47.5%)',
    },
  },
};

<ThemeProvider theme={theme}>
  <Header.h5 margin="0 0 1rem">Name: {name} Age: {age} Description: {description}</Header.h5>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <RHFInput
        as={<TextField
          color="grapeSoda.light"
          labelText="Name"
          name="name"
          inputRef={e => { nameRef.current = e; }}
        />}
        register={register}
        setValue={setValue}
        name="name"
      />
      <RHFInput
        as={<TextField
          integer
          inputRef={ref => { this.ageRhf = ref; }}
          labelText="Age"
          name="age"

        />}
        register={register}
        setValue={setValue}
        name="age"
      />
      <RHFInput
        as={<TextField
          inputRef={ref => { this.descRhf = ref; }}
          multiline
          labelText="Description"
          name="description"
        />}
        register={register}
        setValue={setValue}
        name="description"
      />
      <Button
        onClick={onRegisterClick}
      >
        Focus on Name
      </Button>
      <Button
        onClick={onBtnClick('ageRhf')}
      >
        Focus on Age
      </Button>
      <Button
        onClick={onBtnClick('descRhf')}
      >
        Focus on Desc
      </Button>
      <Button
        onClick={() => {
          alert(JSON.stringify(getValues()));
        }}
      >
        Get Values
      </Button>
    </Box>
  </Flex>
</ThemeProvider>
```