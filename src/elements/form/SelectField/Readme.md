`<SelectField>` is our basic select control. It was built on top of [React Select](http://react-select.com).  All props that were introduced by 🍇UI as well as some important existing can be found in the props table above, but for a full list of props that come with React Select, visit [React Select's Props list](https://react-select.com/props).

> <small>**NOTE:** All examples below will demonstrate both Outlined and Filled views for each example.</small>

#### Basic Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];
const linkState = () => null;
<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        isClearable
        labelText="Color"
        name="exampleBasicUsageOutlined"
        onChange={linkState()}
        options={colorOptions}
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        formStyle="filled"
        isClearable
        labelText="Color"
        name="exampleBasicUsageFilled"
        onChange={linkState()}
        options={colorOptions}
      />
    </Box>
  </Flex>
</ThemeProvider>
```

`<SelectField>` Supports a ref attribute to get to the underlying input element.
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

const colorOptions = [
  { label: 'Red', value: 'red' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];
const linkState = () => null;
<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']} justifyContent="center" mb={[1, 2]}>
    <Button onClick={onRegisterClick}>
      Focus Outlined
    </Button>
    <Button onClick={onBtnClick('exampleColorFilled')}>
      Focus Filled
    </Button>
  </Flex>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        inputRef={e => { nameRef.current = e; }}
        isClearable
        labelText="Color"
        name="exampleColorOutlined"
        onChange={linkState()}
        options={colorOptions}
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        formStyle="filled"
        inputRef={ref => { this.exampleColorFilled = ref; }}
        isClearable
        labelText="Color"
        name="exampleColorFilled"
        onChange={linkState()}
        options={colorOptions}
      />
    </Box>
  </Flex>
</ThemeProvider>
```

#### Demonstrating Controlled Components (via react-hook-form-input)
```jsx inside Markdown
import useForm from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'
import { Header } from '../../typography';
import { Button } from '../../Button';

const colorOptions = [
  { label: 'Grape', value: 'grapeSoda.light' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];
const { getValues, register, setValue, watch  } = useForm();

const myColor = watch('myColor');
const getLabel = colorOption => {myColor ? myColor.label : 'None selected'}
const getValue = colorOption => {myColor ? myColor.value : ''}

<ThemeProvider theme={{}}>
  <Header.h5 margin="0 0 1rem">My color: {getLabel(myColor)} </Header.h5>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <RHFInput
        as={
          <SelectField
            color="grapeSoda.light"
            isClearable
            labelText="Color"
            options={colorOptions}
          />
        }
        register={register}
        setValue={setValue}
        name="myColor"
      />
    </Box>
    <Button
      onClick={() => {
        alert(JSON.stringify(getValues()));
      }}
    >
      Get Values
    </Button>
  </Flex>
</ThemeProvider>
```
#### Kitchen Sink Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'
const roguesOptions = [
  { label: 'Bane', value: 'bane' },
  { label: 'Joker', value: 'joker' },
  { label: 'Hush', value: 'hush' },
  { label: 'Scarecrow', value: 'scarecrow' },
  { label: 'Two-Face', value: 'twoFace' },
  { label: 'Ventriloquist', value: 'ventriloquist' },
  { label: 'Harley Quinn', value: 'harleyQuinn' },
  { label: 'Black Mask', value: 'blackMask' },
  { label: 'Mr. Freeze', value: 'mrFreeze' },
  { label: 'Deadshot', value: 'deadshot' },
  { label: 'Riddler', value: 'riddler' },
  { label: 'Killer Croc', value: 'killerCroc' },
];
const linkState = () => null;
<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        activeColor="blue"
        assistiveText="You may add any additional villains."
        isClearable
        isCreatable
        isMulti
        isRequired
        labelText="Batman Villain"
        menuElevation="03"
        name="exampleKitchenSinkUsageOutlined"
        onChange={linkState()}
        options={roguesOptions}
        placeholder="Choose as many as you'd like."
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        activeColor="yellow.dark"
        assistiveText="You may add any additional villains."
        formStyle="filled"
        isClearable
        isCreatable
        isMulti
        isRequired
        labelText="Batman Villain"
        menuElevation="03"
        name="exampleKitchenSinkUsageFilled"
        onChange={linkState()}
        options={roguesOptions}
        placeholder="Choose as many as you'd like."
      />
    </Box>
  </Flex>
</ThemeProvider>
```
