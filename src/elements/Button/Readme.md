`<Button>` is 🍇UI's button component. It will translate to either a `<button>`, `<Link>`, or `<a>` element depending on what properties are given to it.

```jsx in Markdown
import { BrowserRouter as Router } from 'react-router-dom';
import { Flex } from '../grid'; // ... from 'grape-ui-react'
import { Paragraph } from '../typography'; // ... from 'grape-ui-react'

<Flex alignItems="flex-start" flexDirection="column">
  <Button>Basic Button <code>&lt;button&gt;</code></Button>
  <Button href="#">Basic Button <code>&lt;a&gt;</code></Button>
  <Router>
    <Button to="./">Basic Button <code>&lt;Link&gt;</code>*</Button>
    <Paragraph color="gray" sm>*Please note, <code>&lt;Button&gt;</code> components that use <code>&lt;Link&gt;</code> need to be wrapped in a <code>&lt;Router&gt;</code> component from 'react-router-dom'.</Paragraph>
  </Router>
</Flex>
```

#### Kitchen Sink Usage
```jsx in Markdown
import { useState } from 'react';
import { Flex } from '../grid'; // ... from 'grape-ui-react'
import { Text } from '../typography'; // ... from 'grape-ui-react'

const [count, setCount] = useState(0);

<Flex alignItems="center">
  <Button
    bg="white"
    bgActiveColor="pink"
    bgHoverColor="pink.light"
    border="3px solid #fdd7e4"
    borderRadius="9px"
    color="white"
    contained
    ellipsis
    m={[1, 2, 3, 4]}
    name="exampleColor"
    onClick={e => this.console.log('Oink')}
    outline
    pl={20}
    pt={2}
    raised
    title="Click on me and check out the console."
  >
    🐷
  </Button>
  <Button
    bg="white"
    bgActiveColor="blue"
    bgHoverColor="blue.light"
    border="3px solid cornflowerblue"
    borderRadius="100%"
    color="cornflowerblue"
    contained
    m={[1, 2, 3, 4]}
    name="exampleColor"
    onClick={() => setCount(count + 1)}
    outline
    pb={0}
    pl={0}
    pr={0}
    pt={0}
    raised
    textAlign="center"
    title="Click on me and check out the console."
  >
    <Flex
      alignItems="center"
      justifyContent="center"
      mb="-2px"
      ml="2px"
      mr={-1}
      mt="-2px"
      size={40}
    >
      🍪
    </Flex>
  </Button>
  <Text>You have clicked the cookie {`${count} time${count == 1 ? '' : 's'}`}.</Text>
</Flex>
```

### Variants
Instead of typing in the background and foreground colors manually, you can utilize `<Button>`'s `variant` attribute. You can also combine this with `<ThemeProvider>` to fully define direct variant colors.

```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { Flex } from '../grid'; // ... from 'grape-ui-react'
import * as styledHelpers from '../../utils/styledHelpers'; // ... import { styledHelpers} from 'grape-ui-react'

const theme = {
  buttons: {
    ...styledHelpers.buttonThemes(),
  },
};

<ThemeProvider theme={theme}>
  <Flex flexWrap="wrap" my={[2, 3]}>
    <Button variant="default">
      Default
    </Button>
    <Button variant="primary">
      Primary
    </Button>
    <Button variant="danger">
      Danger
    </Button>
    <Button variant="dark">
      Dark
    </Button>
    <Button variant="info">
      Info
    </Button>
    <Button variant="light">
      Light
    </Button>
    <Button variant="link">
      Link
    </Button>
    <Button variant="secondary">
      Secondary
    </Button>
    <Button variant="success">
      Success
    </Button>
    <Button variant="warning">
      Warning
    </Button>
  </Flex>
  <Flex flexWrap="wrap" my={[2, 3]}>
    <Button variant="contained-default">
      Contained-Default
    </Button>
    <Button variant="contained-primary">
      Contained-Primary
    </Button>
    <Button variant="contained-danger">
      Contained-Danger
    </Button>
    <Button variant="contained-dark">
      Contained-Dark
    </Button>
    <Button variant="contained-info">
      Contained-Info
    </Button>
    <Button variant="contained-light">
      Contained-Light
    </Button>
    <Button variant="contained-link">
      Contained-Link
    </Button>
    <Button variant="contained-secondary">
      Contained-Secondary
    </Button>
    <Button variant="contained-success">
      Contained-Success
    </Button>
    <Button variant="contained-warning">
      Contained-Warning
    </Button>
  </Flex>
</ThemeProvider>
```

#### Custom Styles
```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { Flex } from '../grid'; // ... from 'grape-ui-react'
import * as styledHelpers from '../../utils/styledHelpers'; // ... import { styledHelpers} from 'grape-ui-react'
import { getGlobalOverrides, getGlobalStyles } from 'src/global-styles'; // ... from 'grape-ui-react'

const globalStyles = getGlobalStyles();
const { colors } = globalStyles;

const colorThemeProps = {
  theme: {
    colors: {
      brandDanger: {
        base: 'hsl(3.5, 90.3%, 51.4%)',
        dark: 'hsl(3.5, 90.3%, 41.4%)',
        light: 'hsl(3.5, 90.3%, 61.4%)',
      },
      brandDark: {
        base: 'hsl(110, 5.5%, 21.6%)',
        dark: 'hsl(110, 5.5%, 11.6%)',
        light: 'hsl(110, 5.5%, 31.6%)',
      },
      brandInfo: {
        base: 'hsl(170.6, 16.8%, 62.7%)',
        dark: 'hsl(170.6, 16.8%, 52.7%)',
        light: 'hsl(170.6, 16.8%, 72.7%)',
      },
      brandLight: {
        base: 'hsl(220.6, 100%, 93.3%)',
        dark: 'hsl(220.6, 100%, 83.3%)',
        light: 'hsl(220.6, 100%, 100%)',
      },
      brandLink: {
        base: 'hsl(146.5, 100%, 23.5%)',
        dark: 'hsl(146.5, 100%, 13.5%)',
        light: 'hsl(146.5, 100%, 33.5%)',
      },
      brandLinkHover: {
        base: 'hsl(87.4, 68.3%, 47.1%)',
        dark: 'hsl(87.4, 68.3%, 37.1%)',
        light: 'hsl(87.4, 68.3%, 57.1%)',
      },
      brandPrimary: {
        base: 'hsl(233.31, 85.61%, 29.98%)',
        dark: 'hsl(233.91, 34.91%, 24.71%)',
        light: 'hsl(233.81, 68.81%, 48.51%)',
      },
      brandSecondary: {
        base: 'hsl(53.1, 85.6%, 30%)',
        dark: 'hsl(53.1, 85.6%, 20%)',
        light: 'hsl(53.1, 85.6%, 40%)',
      },
      brandSuccess: {
        base: 'hsl(236, 17.8%, 49.6%)',
        dark: 'hsl(236, 17.8%, 39.6%)',
        light: 'hsl(236, 17.8%, 59.6%)',
      },
      brandWarning: {
        base: 'hsl(53.3, 100%, 47.1%)',
        dark: 'hsl(53.3, 100%, 37.1%)',
        light: 'hsl(53.3, 100%, 57.1%)',
      },
    },
  },
};
const globalOverrides = getGlobalOverrides(colorThemeProps);

const theme = {
  buttons: {
    ...styledHelpers.buttonThemes(null, globalOverrides),
  },
  border: {
    borderRadius: {
      base: '32px',
      lg: '64px',
      sm: '16px',
    },
  },
  colors: {
    ...colors,
    brandPrimary: {
      base: 'hsl(233.31, 85.61%, 29.98%)',
      dark: 'hsl(233.91, 34.91%, 24.71%)',
      light: 'hsl(233.81, 68.81%, 48.51%)',
    },
    yellow: {
      base: 'hsl(65, 65%, 50%)',
      dark: 'hsl(65, 65%, 25%)',
      light: 'hsl(65, 65%, 68%)',
    },
  },
  fonts: {
    base: 'Tahoma, Verdana, Segoe, sans-serif',
  },
  space: [0, 4, 8, 16],
};

<ThemeProvider theme={theme}>
  <Flex flexWrap="wrap" my={[2, 3]}>
    <Button variant="default">
      Default
    </Button>
    <Button variant="primary">
      Primary
    </Button>
    <Button variant="danger">
      Danger
    </Button>
    <Button variant="dark">
      Dark
    </Button>
    <Button variant="info">
      Info
    </Button>
    <Button variant="light">
      Light
    </Button>
    <Button variant="link">
      Link
    </Button>
    <Button variant="secondary">
      Secondary
    </Button>
    <Button variant="success">
      Success
    </Button>
    <Button variant="warning">
      Warning
    </Button>
  </Flex>
  <Flex flexWrap="wrap" my={[2, 3]}>
    <Button variant="contained-default">
      Contained-Default
    </Button>
    <Button variant="contained-primary">
      Contained-Primary
    </Button>
    <Button variant="contained-danger">
      Contained-Danger
    </Button>
    <Button variant="contained-dark">
      Contained-Dark
    </Button>
    <Button variant="contained-info">
      Contained-Info
    </Button>
    <Button variant="contained-light">
      Contained-Light
    </Button>
    <Button variant="contained-link">
      Contained-Link
    </Button>
    <Button variant="contained-secondary">
      Contained-Secondary
    </Button>
    <Button variant="contained-success">
      Contained-Success
    </Button>
    <Button variant="contained-warning">
      Contained-Warning
    </Button>
  </Flex>
</ThemeProvider>
```