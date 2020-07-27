`<Alert>` is grape-ui's way of letting the user know whats up.

### Form Example

```jsx in Markdown
import { Flex } from 'src/elements/grid';

<Flex background="#efedd6" flexDirection="column">
  <Alert>I am an alert.</Alert>
  <Alert>I'm a pretty long alert that goes into all sorts of detail, but am smart enough to know I have a max width and wrap appropriately within my container.</Alert>
</Flex>
```

### Custom Variants

`<Alert>` comes in many different styles by providing a `variant`.

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
  background="#efedd6"
  flexWrap="wrap"
  justifyContent="space-evenly"
>
  {exampleAlerts}
</Flex>
```

These `variant` styles can also be customized to your app's styles.

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
    background="#efedd6"
    flexWrap="wrap"
    justifyContent="space-evenly"
  >
    {exampleAlerts}
  </Flex>
</ThemeProvider>
```

### String vs. Components

When a string is passed in, `<Alert>` will wrap its content in a `<Text>` component.  Otherwise, it will spit out the literal instead.

#### Basic Node Example

```jsx in Markdown
// Alert children as node.
import { Flex } from 'src/elements/grid';
import { Image } from 'src/elements/Image';
import { Text } from 'src/elements/typography';

<Flex background="#efedd6">
  <Alert>
    <Image
      alt="Bill Murray avatar"
      borderRadius="50%"
      src="http://www.fillmurray.com/40/40"
      width={40}
    />
    <Flex flexDirection="column">
      <Text pl={2}>Bill Murray has left you a comment.</Text>
      <Text
        color="gray"
        pl={2}
        sm
      >
        Nobody will ever believe you.
      </Text>
    </Flex>
  </Alert>
</Flex>
```

### Alert action

If you'd like to add an additional action to the alerts, use `alertAction` to pass in any component and `alertActionProps` to handle the containing `<Box>` component.

**Note**: If using a button, [Material Design specifices](https://material.io/components/snackbars#anatomy) to not make the button color equal to the alert's color.  So no white with white..

```jsx in Markdown
// Alert with action
import { Button } from 'src/elements/Button';
import { Flex } from 'src/elements/grid';

const UndoButton = () => <Button color="brandLink">Undo</Button>;

<Flex background="#efedd6">
  <Alert
    alertAction={<UndoButton />}
  >
    Changes saved.
  </Alert>
</Flex>
```

### Progress bar

If you'd like to show a progress bar on the Alert, just use `showProgress` to add the progress bar. Use `progressProps` to change any props on the progress bar or the `progress` prop to use your own.

```jsx in Markdown
import { Flex } from 'src/elements/grid';

<Flex background="#efedd6">
  <Alert showProgress>
    Loading...
  </Alert>
</Flex>
```

### Toast

And now a toast! If you would like to use the `<Alert>` as a toast notification, you would need to use `alertToast` and `<Alert.ToastContainer>`.  This is built upon the fantastic [`react-toastify`](https://github.com/fkhadra/react-toastify) library.  It is preset to follow [Material Design's Snackbar specifications](https://material.io/components/snackbars).

The toast container will render inside of a portal and attach itself to the DOM.  If you would like to change that target, please use the `toastPortalTarget` props.  We are using [`react-portal`](https://github.com/tajo/react-portal) to do this, and you can use `react-portal`'s `node` prop to define the target.

#### Toast Example

```jsx in Markdown
// Alert as toast
import React from 'react';
import { alertToast } from 'src/elements/Alert/utils';
import { Button } from 'src/elements/Button';
import { Box, Flex } from 'src/elements/grid';

<Flex background="#efedd6">
  <Button onClick={alertToast('Basic Alert')}>
    Basic alert
  </Button>
  <Button onClick={alertToast(
    <Flex>
      <Box>Uh oh</Box>
      <Box>Spaghettios</Box>
    </Flex>
  )}>
    With node elements
  </Button>
  <Button onClick={alertToast('Success', {
    variant: 'success',
  })}>
    With variant
  </Button>
  <Button onClick={alertToast('Changes Saved', {
    alertAction: <Button color="brandLink">Undo</Button>
  })}>
    With an alert action
  </Button>
  <Alert.ToastContainer />
</Flex>
```
