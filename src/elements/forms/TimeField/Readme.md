`<TimeField>` allows the user to set time. It was built on top of [rc-time-picker](http://react-component.github.io/time-picker/).[^1]

### TimeField Example

```jsx in Markdown
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-us';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';

const showSecond = false;
const str = showSecond ? 'h:mm:ss' : 'h:mm';

function onChange(e) {
  console.log({ value: e && e.format(str) });
}

<ThemeProvider theme={{}}>
  <Flex background="#efedd6" flexDirection="column">
    <TimeField
      defaultValue={moment()}
      labelText="What time is it?"
      name="courseTime"
      onChange={onChange}
      showSecond={showSecond}
      use12Hours
    />
  </Flex>
</ThemeProvider>
```

### Disabled TimeField Example

```jsx in Markdown
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-us';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';

const showSecond = false;
const str = showSecond ? 'h:mm:ss' : 'h:mm';

function onChange(e) {
  console.log({ value: e && e.format(str) });
}

<ThemeProvider theme={{}}>
  <Flex background="#efedd6" flexDirection="column">
    <TimeField
      defaultValue={moment()}
      disabled
      name="courseTime"
      onChange={onChange}
      showSecond={showSecond}
      style={{ width: 100 }}
      use12Hours
    />
  </Flex>
</ThemeProvider>
```

### Disabled Picker TimeField Example

```jsx in Markdown
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-us';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';
import { Code } from 'src/elements/typography';

function generateOptions(length, excludedOptions) {
  const arr = [];
  for (let value = 0; value < length; value++) {
    if (excludedOptions.indexOf(value) < 0) {
      arr.push(value);
    }
  }
  return arr;
}

function disabledHours() {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23];
}

function disabledMinutes(h) {
  switch (h) {
    case 9:
      return generateOptions(60, [30]);
    case 21:
      return generateOptions(60, [0]);
    default:
      return generateOptions(60, [0, 30]);
  }
}

function disabledSeconds(h, m) {
  return [h + m % 60];
}
const showSecond = true;
const str = showSecond ? 'h:mm:ss' : 'h:mm';

function onChange(e) {
  console.log({ value: e && e.format(str) });
}
<ThemeProvider theme={{}}>
  <Flex background="#efedd6" flexDirection="column">
    <Code
      code="hideDisabledOptions={false}"
      language="html"
    />
    <TimeField
      defaultValue={moment()}
      disabledHours={disabledHours}
      disabledMinutes={disabledMinutes}
      disabledSeconds={disabledSeconds}
      hideDisabledOptions={false}
      name="courseTime"
      onChange={onChange}
      showSecond={showSecond}
      style={{ width: 100 }}
    />
    <Code
      code="hideDisabledOptions={true}"
      language="html"
    />
    <TimeField
      defaultValue={moment()}
      disabledHours={disabledHours}
      disabledMinutes={disabledMinutes}
      disabledSeconds={disabledSeconds}
      hideDisabledOptions
      name="courseTime"
      onChange={onChange}
      showSecond={showSecond}
      style={{ width: 100 }}
    />
  </Flex>
</ThemeProvider>
```

### Format TimeField Examples

```jsx in Markdown
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-us';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';
import { Code, CodeBlock } from 'src/elements/typography';

const showSecond = true;
const str = showSecond ? 'h:mm:ss' : 'h:mm';

function onChange(e) {
  console.log({ value: e && e.format(str) });
}
const codeStr = `showHour={false}
showMinute={false}`;
const format = 'HH:mm:ss:a';
const codeFormat=`format="${format}"`;

<ThemeProvider theme={{}}>
  <Flex background="#efedd6" flexDirection="column">
    <Code
      code="showSecond={false}"
      language="html"
    />
    <TimeField
      defaultValue={moment()}
      name="courseTime"
      onChange={onChange}
      showSecond={false}
      style={{ width: 100 }}
    />
    <CodeBlock
      code={codeStr}
      language="html"
    />
    <TimeField
      defaultValue={moment()}
      name="courseTime"
      onChange={onChange}
      showHour={false}
      showMinute={false}
      style={{ width: 100 }}
    />
    <Code
      code={codeFormat}
      language="html"
    />
    <TimeField
      defaultValue={moment()}
      format={format}
      name="courseTime"
      onChange={onChange}
      style={{ width: 100 }}
    />
  </Flex>
</ThemeProvider>
```

### Minute Step Example

```jsx in Markdown
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-us';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';

const showSecond = false;
const str = showSecond ? 'h:mm:ss' : 'h:mm';

function onChange(e) {
  console.log({ value: e && e.format(str) });
}

<ThemeProvider theme={{}}>
  <Flex background="#efedd6" flexDirection="column">
    <TimeField
      defaultValue={moment()}
      minuteStep={15}
      name="courseTime"
      onChange={onChange}
      showSecond={false}
      style={{ width: 100 }}
      use12Hours
    />
  </Flex>
</ThemeProvider>
```

### Controlled TimeField Example

```jsx in Markdown
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment';
import 'moment/locale/es-us';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';
import { Button } from 'src/elements/Button';

const {
  control,
  getValues,
} = useForm({
  defaultValues: {
    courseTime: moment(),
  },
});
const showSecond = true;
const str = showSecond ? 'h:mm:ss' : 'h:mm';

function changeHandler({ e, onChange, value }) {
  console.log({ e, value: value && value.format(str) });
  onChange(e);
}
const format = 'h:mm:ss:a';

<ThemeProvider theme={{}}>
  <Flex background="#efedd6" flexDirection="column">
    <Controller
      control={control}
      name="courseTime"
      render={({ onChange, onBlur, value }) => (
        <TimeField
          defaultValue={value}
          format={format}
          name="courseTime"
          onChange={e => changeHandler({ e, onChange, value })}
          showSecond={showSecond}
          style={{ width: 100 }}
          use12Hours
        />
      )}
    />
    <Button
      onClick={() => {
        console.log({ formData: getValues({ nest: true }) });
      }}
    >
      Get values (shown in console)
    </Button>
  </Flex>
</ThemeProvider>
```

#### Basic Usage

Doc: The way I see it, if you’re going to build a time machine into a car, why not do it with some style? – “Back To The Future”

```jsx inside Markdown
import moment from 'moment';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid';
import {
  Code,
  Link,
  Paragraph,
  Text,
} from 'src/elements/typography';
import {
  timeAssistiveText,
  timeAssistiveText2,
} from '../examples';

<ThemeProvider theme={{}}>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TimeField
        defaultValue={moment('Oct 26 1985, 1:00 am')}
        format="h:mm:a"
        labelText="One a.m., right, Marty?"
        name="timeOutlined"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TimeField
        defaultValue={moment('Oct 26 1985, 1:18 am')}
        format="h:mm:a"
        formStyle="filled"
        labelText="What time is it?"
        name="timeFilled"
      />
    </Box>
  </Flex>
  <Paragraph lg>
    {'Disabled '}
    <Code code="disabled={true}" />
  </Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TimeField
        defaultValue={moment('Nov 12 1955, 10:04 pm')}
        disabled
        format="h:mm:a"
        labelText="The Clock is stopped at:"
        name="timeDisabled"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TimeField
        defaultValue={moment('Oct 26 1985, 10:04 pm')}
        disabled
        format="h:mm:a"
        formStyle="filled"
        labelText="The Clock is stopped at:"
        name="timeFilledDisabled"
      />
    </Box>
  </Flex>
  <Paragraph lg>
    {'Assistive Text ' }
    <Code code="assistiveText={text}" />
  </Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TimeField
        assistiveText={timeAssistiveText}
        defaultValue={moment()}
        format="h:mm:a"
        labelText="What time is it?"
        name="timeAssistiveText"
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TimeField
        assistiveText={timeAssistiveText2}
        plainText
        defaultValue={moment()}
        format="h:mm:a"
        labelText="What time is it?"
        name="timeAssistiveText2"
      />
    </Box>
  </Flex>
  <Paragraph lg>
    {'Plain Text '}
    <Code code="plainText={true}" />
  </Paragraph>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <TimeField
        defaultValue={moment('Oct 26 1985, 1:24 am')}
        format="h:mm:a"
        labelText="Destination Time"
        name="timePlainText"
        plainText
      />
    </Box>
    <Box px={1} width={[1, 1 / 2]}>
      <TimeField
        defaultValue={moment('Nov 5 1955, 10:04 pm')}
        format="h:mm:a"
        formStyle="filled"
        labelText="Last Time Departed"
        name="timePlainTextFilled"
        plainText
      />
    </Box>
  </Flex>
</ThemeProvider>
```
