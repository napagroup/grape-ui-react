
`<TextField>` is our control that handles input groups. Its basic props are `name` which defines the multiple identifiers for aspects of the control, and `labelText` for displaying the control's label.

> <small>**NOTE:** All examples below will demonstrate both Outlined and Filled views for each example.</small>

#### Basic Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Paragraph, Text } from 'src/elements/typography';

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        labelText="Name"
        name="exampleNameOutlined"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        formStyle="filled"
        labelText="Name"
        name="exampleNameFilled"
      />
    </Box>
  </Flex>
  <Paragraph lg>Disabled <code>disabled=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        disabled
        labelText="Address"
        name="exampleDisabledOutlined"
        value="240 Madison Ave"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        disabled
        formStyle="filled"
        labelText="Address"
        name="exampleDisabledFilled"
        value="240 Madison Ave"
      />
    </Box>
  </Flex>
  <Paragraph lg>Plain Text <code>plainText=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        labelText="Address"
        name="examplePlainTextOutlined"
        plainText
        value="5919 Trussville Crossings Pkwy, Birmingham AL 35235 5919 Trussville Crossings Pkwy, Birmingham AL 35235 5919 Trussville Crossings Pkwy, Birmingham AL 35235 5919 Trussville Crossings Pkwy, Birmingham AL 35235 5919 Trussville Crossings Pkwy, Birmingham AL 35235"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        ellipsis
        formStyle="filled"
        labelText="Address"
        name="examplePlainTextFilled"
        plainText
        value="5919 Trussville Crossings Pkwy, Birmingham AL 35235 5919 Trussville Crossings Pkwy, Birmingham AL 35235 5919 Trussville Crossings Pkwy, Birmingham AL 35235 5919 Trussville Crossings Pkwy, Birmingham AL 35235 5919 Trussville Crossings Pkwy, Birmingham AL 35235"
      />
    </Box>
  </Flex>
  <Text lg>Email <code>email=&#123;true&#125;</code></Text>
  <Paragraph sm><Text fontWeight="bold">NOTE:</Text> Email validation would still need to be handled separately</Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        email
        labelText="Email Address"
        name="exampleEmailOutlined"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        email
        formStyle="filled"
        labelText="Email Address"
        name="exampleEmailFilled"
      />
    </Box>
  </Flex>
  <Paragraph lg>Password <code>password=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        assistiveText="Password must contain an uppercase letter, a numeric character, and a special character."
        labelText="Password"
        name="examplePasswordOutlined"
        password
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        assistiveText="Password must contain an uppercase letter, a numeric character, and a special character."        formStyle="filled"
        labelText="Password"
        name="examplePasswordFilled"
        password
      />
    </Box>
  </Flex>
</ThemeProvider>
```

#### Kitchen Sink Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        activeColor="blue"
        assistiveText="If you forgot your name, we will mark you as SOL."
        bg="orange"
        fontFamily="serif"
        isRequired
        labelText="Full Name"
        name="exampleTextFieldKitchenSinkOutlined"
        placeholder="Enter your full name"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        activeColor="orange"
        assistiveText="If you forgot your name, we will mark you as SOL."
        bg="blue"
        fontFamily="monospace"
        formStyle="filled"
        isRequired
        labelText="Full Name"
        name="exampleTextFieldKitchenSinkFilled"
        placeholder="Enter your full name"
      />
    </Box>
  </Flex>
</ThemeProvider>
```

#### Numeric Controls
`<TextField>` also allows for numeric controls. All numeric text components use [Cleave.js](https://nosir.github.io/cleave.js/). Here is what we support out of the box:
* `currency`
* `integer`
* `numeric`
* `phone`
* `postalCode`

```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Paragraph, Text } from 'src/elements/typography';

<ThemeProvider theme={{}}>
  <Text lg>Currency <code>currency=&#123;true&#125;</code></Text>
  <Paragraph sm><Text fontWeight="bold">NOTE:</Text> Values only set in USD currently.</Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        currency
        labelText="Your Maximum Bid"
        name="exampleCurrencyOutlined"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        currency
        formStyle="filled"
        labelText="Name"
        name="exampleCurrencyFilled"
      />
    </Box>
  </Flex>
  <Paragraph lg>Integer <code>integer=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        integer
        labelText="How old are you?"
        name="exampleIntegerOutlined"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        formStyle="filled"
        integer
        labelText="How old are you?"
        name="exampleIntegerFilled"
      />
    </Box>
  </Flex>
  <Paragraph lg>Numeric <code>numeric=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        assistiveText="Hint: It is less than 100 million."
        labelText="How many miles are you away from the sun?"
        name="exampleNumericOutlined"
        numeric
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        assistiveText="Hint: It is less than 100 million."
        formStyle="filled"
        labelText="How many miles are you away from the sun?"
        name="exampleNumericFilled"
        numeric
      />
    </Box>
  </Flex>
  <Paragraph lg>Phone <code>phone=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        labelText="Phone Number"
        name="examplePhoneOutlined"
        phone
        placeholder="212-555-2368"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        formStyle="filled"
        labelText="Phone Number"
        name="examplePhoneFilled"
        phone
        placeholder="212-555-2368"
      />
    </Box>
  </Flex>
  <Paragraph lg>Postal Code <code>postalCode=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        labelText="Postal Code"
        name="examplePostalCodeOutlined"
        postalCode
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        formStyle="filled"
        labelText="Postal Code"
        name="examplePostalCodeFilled"
        postalCode
      />
    </Box>
  </Flex>
  <Paragraph lg>Custom Formatting</Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        formatterOptions={{
          blocks: [3, 7, 2],
          delimiter: '-',
          numericOnly: true,
        }}
        labelText="Account Number"
        name="exampleCustomFormattingOutlined"
        placeholder="XXX-XXXXXXX-XX"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        formatterOptions={{
          blocks: [3, 7, 2],
          delimiter: '-',
          numericOnly: true,
        }}
        formStyle="filled"
        labelText="Account Number"
        name="exampleCustomFormattingFilled"
        placeholder="XXX-XXXXXXX-XX"
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
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
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
        inputRef={e => { nameRef.current = e; }}
        labelText="Name"
        name="name"
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
      <Button onClick={onRegisterClick}>
        Focus on Name
      </Button>
      <Button onClick={onBtnClick('age')}>
        Focus on Age
      </Button>
      <Button onClick={onBtnClick('desc')}>
        Focus on Desc
      </Button>
    </Box>
  </Flex>
</ThemeProvider>
```

#### Demonstrating Controlled Components (via react-hook-form-input)
```jsx inside Markdown
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Header } from 'src/elements/typography';
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
          name="innerName"
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
          name="innerAge"

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
          name="innerDescription"
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