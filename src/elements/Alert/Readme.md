Yo.

#### Variants Example

```jsx in Markdown
// Alert children as string.
import { Flex } from 'src/elements/grid';
import { CodeBlock } from 'src/elements/typography';

const examples = [
  'default',
  'danger',
  'dark',
  'info',
  'light',
  'link',
  'primary',
  'secondary',
  'success',
  'warning',
];

const exampleAlerts = examples.map((example, idx) =>
  <Flex
    key={`alert-variant-example-${idx}`}
    flexDirection="column"
    maxWidth={400}
    mx={1}
  >
    <CodeBlock code={`// ${example}`} />
    <Alert variant={example}>Basic {example} alert.</Alert>
    <Alert variant={`contained-${example}`}>Basic contained-{example} alert.</Alert>
    <Alert variant={`outlined-${example}`}>Basic outlined-{example} alert.</Alert>
  </Flex>
);

<Flex
  flexWrap="wrap"
  justifyContent="space-evenly"
>
  {exampleAlerts}
</Flex>
```

#### Custom Variants Example

```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';
import { CodeBlock } from 'src/elements/typography';

const colorThemeProps = {
  colors: {
    brandDanger: 'red',
    brandDark: 'black',
    brandInfo: 'lightcyan',
    brandLight: 'oldlace',
    brandLink: 'darkturquoise',
    brandLinkHover: 'lightseagreen',
    brandPrimary: 'rosybrown',
    brandSecondary: '#9cc',
    brandSuccess: 'limegreen',
    brandWarning: 'darkorange',
  },
};

const examples = [
  'default',
  'danger',
  'dark',
  'info',
  'light',
  'link',
  'primary',
  'secondary',
  'success',
  'warning',
];

const exampleAlerts = examples.map((example, idx) =>
  <Flex
    key={`alert-variant-example-${idx}`}
    flexDirection="column"
    maxWidth={400}
    mx={1}
  >
    <CodeBlock code={`// ${example}`} />
    <Alert variant={example}>Basic {example} alert.</Alert>
    <Alert variant={`contained-${example}`}>Basic contained-{example} alert.</Alert>
    <Alert variant={`outlined-${example}`}>Basic outlined-{example} alert.</Alert>
  </Flex>
);

<ThemeProvider theme={colorThemeProps}>
  <Flex
    flexWrap="wrap"
    justifyContent="space-evenly"
  >
    {exampleAlerts}
  </Flex>
</ThemeProvider>
```

#### Basic Node Example

```jsx in Markdown
// Alert children as node.
import { Box, Flex } from 'src/elements/grid';

<Alert>
  <Flex>
    <Box>Uh oh</Box>
    <Box>Spaghettios</Box>
  </Flex>
</Alert>
```

```jsx in Markdown
// Alert with action
import { Button } from 'src/elements/Button';

const UndoButton = () => <Button color="white">Undo</Button>;

<Alert
  alertAction={<UndoButton />}
>
  Changes saved.
</Alert>
```

```jsx in Markdown
// Alert as toast
import React from 'react';
import { Button } from 'src/elements/Button';
import { Box } from 'src/elements/grid';
import { ToastContainer, toast } from 'react-toastify';

const getToast = () => toast(<Alert isToast>This chick is toast.</Alert>);

<div>
  <Button
    onClick={getToast}
  >
    Notify
  </Button>
  <ToastContainer
    position="bottom-center"
  />
</div>
```
