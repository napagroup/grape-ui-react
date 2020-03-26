`<SelectField>` is our basic select control. It was built on top of [React Select](http://react-select.com).  All props that were introduced by 🍇UI as well as some important existing can be found in the props table above, but for a full list of props that come with React Select, visit [React Select's Props list](https://react-select.com/props).

> <small>**NOTE:** All examples below will demonstrate both Outlined and Filled views for each example.</small>

#### Basic Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Paragraph, Text } from 'src/elements/typography';

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
  <Paragraph lg>Disabled <code>disabled=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        defaultValue={colorOptions[0]}
        disabled
        isClearable
        labelText="Color"
        name="exampleSelectFieldDisabledOutlined"
        onChange={linkState()}
        options={colorOptions}
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        defaultValue={colorOptions[0]}
        disabled
        formStyle="filled"
        isClearable
        labelText="Color"
        name="exampleSelectFieldDisabledFilled"
        onChange={linkState()}
        options={colorOptions}
      />
    </Box>
  </Flex>
  <Paragraph lg>Plain Text <code>plainText=&#123;true&#125;</code></Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        isClearable
        isMulti
        labelText="Color"
        name="exampleSelectFieldPlainTextOutlined"
        onChange={linkState()}
        options={colorOptions}
        plainText
        value={[colorOptions[0], colorOptions[1]]}
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        formStyle="filled"
        isClearable
        labelText="Color"
        name="exampleSelectFieldPlainTextFilled"
        onChange={linkState()}
        options={colorOptions}
        plainText
        value={colorOptions[0]}
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

<!-- #### Demonstrating Controlled Components (via react-hook-form-input)
```jsx inside Markdown
import { useForm } from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Header } from 'src/elements/typography';
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
``` -->

#### Kitchen Sink Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { rogueOptions } from '../examples/';

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
        options={rogueOptions}
        placeholder="Choose as many as you'd like."
        styleOverrides={{
          multiValue: {
            backgroundColor: 'cornflowerblue',
            color: 'white',
            maxWidth: '100%',
            overflow: 'hidden',
          },
          multiValueLabel: {
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
        }}
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
        options={rogueOptions}
        placeholder="Choose as many as you'd like."
      />
    </Box>
  </Flex>
</ThemeProvider>
```

#### Custom Components, Styles, and Format Option Label
You can also use custom components within the SelectField control.  This is useful when you need more than what is given from a simple dropdown.  [Read this article for info on Custom Components](https://blog.logrocket.com/getting-started-with-react-select/).

```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Text } from 'src/elements/typography'; // ... from 'grape-ui-react'
import { components } from 'react-select';
import { rogueOptions } from '../examples/';

const linkState = () => null;
const formatOptionLabel = ({ value, label }) => (
  <Flex flexDirection="row">
    <Box>
      <Text>{label}</Text>
    </Box>
    <Box ml={[1, 2]}>
      <Text color="gray.light">{value}</Text>
    </Box>
  </Flex>
);
const CustomOption = ({ children, ...props }) => (
  <components.Option {...props}>
    <Flex flexDirection="column">
      <Text>{children}</Text>
      <Text color="gray.light" sm>{props.data.value}</Text>
    </Flex>
  </components.Option>
);
<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        assistiveText="This uses components"
        components={{ Option: CustomOption }}
        labelText="Custom Option"
        name="exampleCustomOptionsOutlined"
        onChange={linkState()}
        options={rogueOptions}
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        assistiveText="This uses format options"
        formatOptionLabel={formatOptionLabel}
        formStyle="filled"
        labelText="Format Option Label"
        name="exampleFormatOptionFilled"
        onChange={linkState()}
        options={rogueOptions}
      />
    </Box>
  </Flex>
</ThemeProvider>
```

You can also use custom styles within the SelectField control.  Simply use `styleOverrides` along with any of React-Select's style keys. [A full list of React-Select's style keys can be found here](https://react-select.com/styles).

```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { afkapSongOptions, princeSongOptions } from '../examples';

const linkState = () => null;

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']} mb={180}>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        activeColor="purple.dark"
        isClearable
        isMulti
        labelText="Prince Songs"
        name="exampleStyleOverridesOutlined"
        onChange={linkState()}
        options={princeSongOptions}
        styleOverrides={{
          multiValue: {
            backgroundColor: '#493e63',
            color: '#fff',
            fontFamily: 'cursive',
          }
        }}
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        activeColor="orange.dark"
        formStyle="filled"
        isClearable
        isMulti
        labelText="The Artist Formerly Known as Prince songs"
        name="exampleStyleOverridesFilled"
        onChange={linkState()}
        options={afkapSongOptions}
        styleOverrides={{
          multiValue: {
            background: 'radial-gradient(circle, rgba(255,238,17,1) 0%, rgba(255,198,17,1) 95%, rgba(255,139,17,1) 100%);',
            fontFamily: 'Gill Sans, Gill Sans MT, Calibri, sans-serif',
          }
        }}
      />
    </Box>
  </Flex>
</ThemeProvider>
```

🍇UI controls can be integrated with Form Validation libraries. Below we demonstrate registering the component(s) as controlled inputs via [react-hook-form](https://react-hook-form.com/).
For further documentation on integrating UI component libraries with react-hook-form refer to [Working with UI Library](https://react-hook-form.com/get-started/#WorkwithUIlibrary).

#### Demonstrating Controlled Components (via react-hook-form)
```jsx inside Markdown
import { useForm, Controller } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Header } from 'src/elements/typography';
import { Button } from '../../Button';

const {
  control,
  register,
  watch,
} = useForm();

const enrollmentStatusOptions = [
  {
    label: 'Active',
    value: 'active',
  },
  {
    label: 'Inactive',
    value: 'inactive',
  },
  {
    label: 'Free (Audit Only)',
    value: 'audit',
  },
];

const courseOptions = [
  {
    label: '🎨 Arts & Humanities',
    value: 'artsHumanities',
  },
  {
    label: '👔 Business',
    value: 'business',
  },
  {
    label: '🤖 Artificial Intelligence',
    value: 'artificialIntelligence',
  },
  {
    label: '🤸‍♀️ Health',
    value: 'health',
  },
  {
    label: '💃 Music & Dance',
    value: 'musicDance',
  },
  {
    label: '🌎 Language Learning',
    value: 'languageLearning',
  },
];
const selectedStatusOption = watch('status');
const selectedCourseOptions = watch('courses') || [];
const chosenCourses = selectedCourseOptions.map(option => option.label).join(', ');

<ThemeProvider theme={{}}>
  <Header.h5 margin="0 0 1rem">{selectedStatusOption && selectedStatusOption.label ? `Your Enrollment Status is currently ${selectedStatusOption.label}` : '' } </Header.h5>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <Controller
        as={<SelectField />}
        control={control}
        isClearable
        labelText="Status"
        name="status"
        options={enrollmentStatusOptions}
        onChange={([selected]) => ({ value: selected })}
        placeholder="Please choose an enrollment status"
      />
    </Box>
  </Flex>
  <Header.h5 margin="0 0 1rem">{chosenCourses ? `You've chosen interest in the following courses: ${chosenCourses}.` : ''} </Header.h5>
  <Flex flexDirection={['column', 'row']} pb={7}>
    <Box px={1} width={[1, 1 / 2]}>
      <Controller
        as={<SelectField />}
        control={control}
        isClearable
        isMulti
        labelText="Courses"
        name="courses"
        options={courseOptions}
        onChange={([selected]) => ({ value: selected })}
        placeholder="Choose as many courses that interest you"
      />
    </Box>
  </Flex>
</ThemeProvider>
```

#### isAsync

Enable loading options asynchronously by adding the isAsync property and a callback function in loadOptions.

*Note: isClearable is always set to true when using isAsync.*

```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'
import { Paragraph, Text } from '../../typography';

const colorOptions = [
  { label: 'Black', value: 'black' },
  { label: 'Blue', value: 'blue' },
  { label: 'Green', value: 'green' },
  { label: 'Orange', value: 'orange' },
  { label: 'Red', value: 'red' },
  { label: 'White', value: 'white' },
  { label: 'Yellow', value: 'yellow' },
];
const loadOptionsPromise = inputValue => {
  return new Promise(resolve => {
    setTimeout(() => {
      const sInputValue = inputValue ? inputValue.toLowerCase() : '';
      resolve(colorOptions.filter(colorOption => colorOption.label === sInputValue || colorOption.value === sInputValue));
    }, 1000);
  });
};
const linkState = () => null;
const formatCreateLabel = value => `Set value to "${value}"`;
<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        isAsync
        labelText="Outlined"
        loadOptions={loadOptionsPromise}
        name="exampleBasicUsageOutlined"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <SelectField
        isAsync
        isCreatable
        formatCreateLabel={formatCreateLabel}
        formStyle="filled"
        labelText="Filled & Creatable"
        name="exampleBasicUsageFilled"
        loadOptions={loadOptionsPromise}
      />
    </Box>
  </Flex>
</ThemeProvider>
```
