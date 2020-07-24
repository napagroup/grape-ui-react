`<TimeField>` allows the user to set time. It was built on top of [rc-time-picker](http://react-component.github.io/time-picker/).[^1]

### TimeField Example

```jsx in Markdown
import 'rc-time-picker/assets/index.css';
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
      className="xxx"
      defaultValue={moment()}
      inputReadOnly
      name="courseTime"
      onChange={onChange}
      showSecond={showSecond}
      style={{ width: 100 }}
      use12Hours
    />
  </Flex>
</ThemeProvider>
```

### Disabled TimeField Example

```jsx in Markdown
import 'rc-time-picker/assets/index.css';
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
      className="xxx"
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
import 'rc-time-picker/assets/index.css';
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-us';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';

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
    <TimeField
      className="xxx"
      defaultValue={moment()}
      disabledHours={disabledHours}
      disabledMinutes={disabledMinutes}
      disabledSeconds={disabledSeconds}
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
import 'rc-time-picker/assets/index.css';
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/es-us';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';
import { Code, CodeBlock, Header } from 'src/elements/typography';

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
import 'rc-time-picker/assets/index.css';
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
      className="xxx"
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
import 'rc-time-picker/assets/index.css';
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
          className="xxx"
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