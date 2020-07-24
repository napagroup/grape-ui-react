`<TimeField>` allows the user to set time.

### TimeField Example

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
