`<DateField>` is our basic date control. It was built on top of [React-Day-Picker v7.3.2](https://react-day-picker.js.org).[^1]
All props that were introduced by 🍇UI as well as some important existing can be found in the props table above, but for a full list of props that come with React Day Picker, visit [react-day-picker docs](https://react-day-picker.js.org/api/DayPicker).

[^1] Kept to this version until bug React-Day-Picker#955 is resolved.

> <small>**NOTE:** All examples below will demonstrate both Outlined and Filled views for each example.</small>

#### Basic Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from '../../grid'; // ... from 'grape-ui-react'
import { Text } from '../../typography'; // ... from 'grape-ui-react'

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField name="exampleDateField" />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField formStyle="filled" name="exampleDateField" />
    </Box>
  </Flex>
  <Text lg>Calendar Only <code>calendarOnly=&#123;true&#125;</code></Text>
  <Flex flexDirection={['column', null, 'row']}>
    <Box px={1} width={[1, null, 1 / 2]}>
      <DateField
        calendarOnly
        name="dateFieldCalendarOnlyOutlined"
      />
    </Box>
    <Box px={1} width={[1, null, 1 / 2]}>
      <DateField
        calendarOnly
        formStyle="filled"
        name="dateFieldCalendarOnlyFilled"
      />
    </Box>
  </Flex>
  <Text lg>Plain Text <code>plainText=&#123;true&#125;</code></Text>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField
        name="dateFieldPlainTextOutlined"
        plainText
        value="12/12/2019"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField
        formStyle="filled"
        name="dateFieldPlainTextFilled"
        plainText
        value="12/25/2019"
      />
    </Box>
  </Flex>
</ThemeProvider>
```

#### Kitchen Sink Usage
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from '../../grid'; // ... from 'grape-ui-react'

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField
        activeColor="blue"
        assistiveText="Select or enter your date."
        format="LL"
        isRequired
        labelText="Last Time Departed"
        menuAlignment="left"
        name="lastTimeDeparted"
        placeholder="The time where you were."
        value="November 12, 1955"
        valueFormat="X"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField
        activeColor="blue"
        assistiveText="Select or enter your date."
        format="LL"
        formStyle="filled"
        isRequired
        labelText="Destination Time"
        menuAlignment={['left','right']}
        name="destinationTime"
        placeholder="The time where you are going."
        value="October 21, 2015"
        valueFormat="X"
      />
    </Box>
  </Flex>
</ThemeProvider>
```

#### Theme Overrides
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from '../../grid'; // ... from 'grape-ui-react'

const styles = {
  assistiveTextProps: {
    color: 'black',
  },
  bg: 'black',
  controlColorProps: {
    captionColor: 'white.light',
    dayHoverBgColor: 'red.light',
    dayHoverColor: 'white',
    menuBgColor: 'black',
    outsideColor: 'blue.light',
    selectedBetweenBgColor: 'red.light',
    selectedBetweenColor: 'black',
    selectedBgColor: 'red',
    selectedColor: 'white',
    todayBorderColor: 'green',
    weekdayColor: 'yellow.light',
    weekNumberBorderColor: 'white.dark',
    weekNumberColor: 'white.dark',
  },
  controlGroupProps: {
    bg: 'gray',
  },
  controlLabelProps: {
    bg: 'black.dark',
    color: 'white',
  }
};

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField
        activeColor="yellow"
        assistiveText="Select or enter your date."
        color="yellow"
        fontFamily="monospace"
        format="LL"
        isRequired
        labelText="Last Time Departed"
        menuAlignment="left"
        name="lastTimeDeparted"
        placeholder="The time where you were."
        value="November 12, 1955"
        valueFormat="X"
        {...styles}
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField
        activeColor="red"
        assistiveText="Select or enter your date."
        color="red"
        fontFamily="monospace"
        format="LL"
        formStyle="filled"
        isRequired
        labelText="Destination Time"
        menuAlignment={['left', 'right']}
        name="destinationTime"
        placeholder="The time where you are going."
        value="October 21, 2015"
        valueFormat="X"
        {...styles}
      />
    </Box>
  </Flex>
</ThemeProvider>
```

### Formats and State Usage
`<DateField>` can accept value from string format or date format. In the example below, `selectedDay` is set to `"2020-01-09"` and `birthday` is set to a date object.

The state is being set via the `onChange` function. `onChange` is calling a function that gets 4 parameters:
   * `formattedDay`: string format output based on valueFormat,
   * `input`: the inner input which has the value,
   * `modifiers`: matching day for the given modifiers,
   * `selectedDay`: the date object of the selected date.


> <small>**NOTE:**
   * Selected date example `format` prop is set as `"YYYY-MM-DD"` explicitly so that input text date will display in "YYYY-MM-DD".
   * `valueFormat` prop is `"YYYY-MM-DD"` by default so that the value `formattedDay` on the `onChange` will be `"YYYY-MM-DD"`.
   * Birthday example uses `selectedDay` which is the date object to set the state. `format` prop is `"M/D/YYYY"` by default so that it input text date will display in "YYYY-MM-DD".</small>

#### Selected Date in State
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'

class DateFieldExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
    this.state = {
      birthday: new Date("5/25/2018"),
      isBirthdayEmpty: false,
      isDisabled: false,
      isEmpty: true,
      selectedDay: "2020-01-09",
    };
  }

  handleDayChange({ formattedDay, input, modifiers, selectedDay }) {
    this.setState({
      selectedDay:formattedDay,
      isEmpty: !input.value.trim(),
      isDisabled: modifiers.disabled === true,
    });
  }


  handleBirthdayChange({ formattedDay, input, modifiers, selectedDay }) {
    this.setState({
      birthday: selectedDay,
      isBirthdayEmpty: !selectedDay,
      isDisabled: modifiers.disabled === true,
    });
  }


  render() {
    const { birthday, selectedDay, isDisabled, isEmpty, isBirthdayEmpty } = this.state;
    const selectedLocalString= `You chose ${selectedDay}`;
    const birthdayLocalString= `You chose ${new Date(birthday).toLocaleDateString()}`;
      return (
        <ThemeProvider theme={{}}>
          <Flex flexDirection={['column', 'row']}>
            <Box px={1} width={[1, 1 / 2]}>
              <DateField
                assistiveText={
                  isEmpty && 'Please type or pick a day' ||
                  selectedDay &&
                  !isDisabled &&
                  selectedLocalString
                  }
                dayPickerProps={{
                  disabledDays: {
                    daysOfWeek: [0, 6],
                  },
                }}
                labelText="Selected Date"
                format="YYYY-MM-DD"
                name="exampleDateFieldState"
                onChange={this.handleDayChange}
                validationError={
                  !isEmpty && !selectedDay && 'This day is invalid' ||
                  selectedDay && isDisabled && 'This day is disabled' ||
                  ''
                }
                value={selectedDay}
              />
            </Box>
            <Box px={1} width={[1, 1 / 2]}>
              <DateField
                assistiveText={
                  isEmpty && 'Please pick a birthday' ||
                  birthday &&
                  !isDisabled &&
                  birthdayLocalString
                  }
                dayPickerProps={{
                  disabledDays: {
                    daysOfWeek: [0, 6],
                  },
                }}
                isRequired
                labelText="Birthday"
                formStyle="filled"
                name="exampleDateFieldStateFilled"
                onChange={this.handleBirthdayChange}
                validationError={
                  !birthday && 'This day is invalid' ||
                  birthday && isDisabled && 'This day is disabled' ||
                  ''
                }
                value={birthday}
              />
            </Box>
          </Flex>
        </ThemeProvider>
    );
  }
};<DateFieldExample />
```

### Date Range
This example shows how two `DateField` components can work together for selecting a range of dates.

#### Selected Date Range in State
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'
import { Paragraph } from '../../typography'; // ... from 'grape-ui-react'
import { Button } from '../../Button'; // ... from 'grape-ui-react'
import moment from 'moment';
class DateFieldExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange  = this.handleFromChange .bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.inputRef = React.createRef();
    this.state = {
      from: undefined, //new Date("11/13/2019"),
      to: undefined, //new Date("12/17/2019"),
      isFromValid: true,
      isToValid: true,
    };
  }
  handleClear() {
    this.setState({
      from: '',
      isFromValid:true,
      isToValid:true,
      to: '',
    });
  }

 handleFromChange({ formattedDay, input, modifiers, selectedDay }) {
   this.setState({
      from: selectedDay,
      isFromValid: !input.value || moment(selectedDay, "M/D/YYYY").isValid(),
    });
  }

  handleToChange({ formattedDay, input, modifiers, selectedDay }) {
     this.setState({
      to: selectedDay,
      isToValid: !input.value || moment(selectedDay, "M/D/YYYY").isValid(),
    });
  }

  render() {
    const { from, to, isFromValid, isToValid } = this.state;
    const modifiers = { start: from, end: to };
    const fromLocalString= from && isFromValid ? `From: ${new Date(from).toLocaleDateString()}` : "" ;
    const toLocalString= to && isToValid ? `To: ${new Date(to).toLocaleDateString()}` : "";
      return (
        <ThemeProvider theme={{}}>
          <Paragraph>{`${fromLocalString}${fromLocalString && toLocalString ? ' - ' : ''}${toLocalString} `}</Paragraph>
          <Flex flexDirection={['column', 'row']}>
            <Box px={1} width={[1, 1 / 2]}>
              <DateField
                dayPickerProps={{
                  selectedDays: [from, { from, to }],
                  disabledDays: { after: to },
                  month: from,
                  modifiers,
                  numberOfMonths: 2,
                  toMonth: to,
                }}
                menuDirection={['column', null, 'row']}
                menuDirectionViewportBreakpoint={{ column:  '879px', row: '880px' }}
                labelText="From"
                name="fromDateFieldState"
                onChange={this.handleFromChange}
                value={from}
                valueFormat="M/D/YYYY"
                validationError={!isFromValid ? 'This day is invalid' : ''}
              />
            </Box>
            <Box px={1} width={[1, 1 / 2]}>
              <DateField
                dayPickerProps={{
                  selectedDays: [to, { from, to }],
                  disabledDays: { before: from },
                  modifiers,
                  month: from,
                  fromMonth: from,
                  numberOfMonths: 2,
                }}
                formStyle="filled"
                labelText="To"
                menuAlignment={['left','right']}
                menuDirection={['column', null, 'row']}
                name="toDateFieldState"
                onChange={this.handleToChange}
                value={to}
                valueFormat="M/D/YYYY"
                validationError={!isToValid ? 'This day is invalid' : ''}
              />
            </Box>
          </Flex>
          <Button onClick={this.handleClear}>Clear</Button>
        </ThemeProvider>
    );
  }
};<DateFieldExample />
```

### Locale

`<DateField>` can be localized to any language. Make sure you need to import the locale from moment/locale.
> * ex: import 'moment/locale/ja';

[More details can be found here](https://react-day-picker.js.org/docs/localization).

#### Date Field with locale
```jsx inside Markdown
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from '../../grid'; // ... from 'grape-ui-react'
import 'moment/locale/it';
import 'moment/locale/ja';
import MomentLocaleUtils from 'react-day-picker/moment';

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField
        assistiveText="Famous Italian explorer's date of birth."
        dayPickerProps={{
          locale: 'it',
          localeUtils: MomentLocaleUtils,
        }}
        format="LL"
        labelText="data di nascita🇮🇹"
        locale="it"
        name="exampleItDateField"
        value={new Date("1/1/1451")}
        valueFormat="LL"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <DateField
        assistiveText="Famous Japanese film director's date of birth."
        dayPickerProps={{
          locale: 'ja',
          localeUtils: MomentLocaleUtils,
        }}
        formStyle="filled"
        format="LL"
        labelText="生年月日🇯🇵"
        locale="ja"
        name="exampleJaDateField"
        value={new Date("1/5/1941")}
        valueFormat="LL"
      />
    </Box>
  </Flex>
</ThemeProvider>
```