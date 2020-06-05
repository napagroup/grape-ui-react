`<CheckboxGroup>` is our control that handles Checkbox groups.

```jsx in Markdown
import { ThemeProvider } from 'styled-components';

const beatlesOptions = [
  {
    label: 'George Harrison',
    value: 'george'
  },
  {
    label: 'John Lennon',
    value: 'john'
  },
  {
    label: 'Paul McCartney',
    value: 'paul'
  },
  {
    label: 'Ringo Starr',
    value: 'ringo'
  },
];

const checkboxFields = beatlesOptions.map(option  => <CheckboxGroup option={option} />);

<ThemeProvider theme={{}}>
  {checkboxFields}
</ThemeProvider>
```
