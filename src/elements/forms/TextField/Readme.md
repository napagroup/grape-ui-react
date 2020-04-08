
`<TextField>` is our control that handles input groups (Control Label, Control, Assistive Text). Its basic props are `labelText` for displaying the control's label, and `name`, which defines the following identifiers:
* `input[id]`
* `input[name]`
* `label[for]`
* `AsssitiveText[id]`

> <small>**NOTE:** All examples below will demonstrate both Outlined and Filled views for each example.</small>

#### Basic Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Link, Paragraph, Text } from 'src/elements/typography';
import { cantHardlyWaitAssistiveText, cantHardlyWaitLyrics } from '../examples';

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
  <Paragraph lg>Multiline <code>multiline=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        assistiveText={cantHardlyWaitAssistiveText}
        labelText="Lyrics"
        multiline
        name="exampleMultilineOutlined"
        defaultValue={cantHardlyWaitLyrics}
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        formStyle="filled"
        labelText="Lyrics"
        multiline
        name="exampleMultilineOutlined"
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
import { Paragraph } from 'src/elements/typography';

const onBtnClick = inputName => () => {
  if(this[inputName]) {
    this[inputName].focus();
  }
};
const nameRef = useRef();
const onRegisterClick = () => {
  nameRef.current.focus();
};

<ThemeProvider theme={{}}>
  <Paragraph lg>With <code>useRef</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TextField
        color="grapeSoda.light"
        inputRef={ref => { nameRef.current = ref; }}
        labelText="Name"
        name="name"
      />
    </Box>
  </Flex>
  <Paragraph lg>With callback refs</Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
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

grape-ui controls can be integrated with Form Validation libraries. Below we demonstrate registering the component(s) as controlled inputs via [react-hook-form](https://react-hook-form.com/).
For further documentation on integrating UI component libraries with react-hook-form refer to [Working with UI Library](https://react-hook-form.com/get-started/#WorkwithUIlibrary).

#### Demonstrating Controlled Components (via react-hook-form)
```jsx inside Markdown
import { useForm, Controller } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Button } from 'src/elements/Button'; // ... from 'grape-ui-react'

function MyFormComponent(props) {
  const {
    control,
    getValues,
    register,
    watch,
  } = useForm({ defaultValues: { name: 'Bruce Wayne'} });

  return (
    <>
      <Button onClick={() => alert(getValues().name)}>Get Name</Button>
      <Flex flexDirection={['column', 'row']}>
        <Box px={1} width={[1, 1 / 2]}>
        <Controller
            as={<TextField />}
            control={control}
            defaultValue={name}
            inputRef={register}
            labelText="Name"
            name="name"
            isRequired
          />
        </Box>
      </Flex>
    </>
  );
}
<ThemeProvider theme={{}}>
  <MyFormComponent />
</ThemeProvider>
```
