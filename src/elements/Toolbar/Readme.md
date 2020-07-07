Toolbar is grape-ui's take on the [AppBar found in Material Design](https://material.io/components/app-bars-top). It can be used to help define navigation for your site. Toolbar can take direct children, however there are shortcuts for defining content to appear in different areas of the toolbar. Use these props to achieve it:

* `leftArea`
* `centerArea`
* `rightArea`

#### Basic Examples

```jsx in Markdown

<Toolbar>
  Plain Toolbar
</Toolbar>

<Toolbar
  background="cornflowerblue"
>
  Using background color.
</Toolbar>

<Toolbar
  leftArea="I'm on the left"
  centerArea="I'm in the middle"
  rightArea="I'm on the right"
>
  I'm the rest of the children!
</Toolbar>

```

#### Material Example

```jsx in Markdown
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'src/elements/Button';
import { TextField } from 'src/elements/forms';
import { Flex } from 'src/elements/grid';
import { Header } from 'src/elements/typography';

const ToolbarButton = styled(Button)``;

ToolbarButton.defaultProps = {
  bgActiveColor: 'purple.light',
  bgHoverColor: 'purple',
  color: 'white'
};

const leftArea = (
  <Flex alignItems="center" ml={-3}>
    <ToolbarButton>
      <FontAwesomeIcon icon={faBars} />
    </ToolbarButton>
    <Header.h5
      color="white"
      mb="0"
    >
      App
    </Header.h5>
  </Flex>
);

const rightArea = (
  <ToolbarButton>
    Login
  </ToolbarButton>
);

<ThemeProvider
  theme={{
    colors: {
      brandPrimary: 'rgb(203, 39, 168)',
    },
  }}
>
  <Toolbar
    bg="brandPrimary"
    leftArea={leftArea}
    rightArea={rightArea}
  />
</ThemeProvider>

```

#### This Styleguide's Toolbar

```jsx in Markdown
import { ReactSVG } from 'react-svg';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'src/elements/Button';
import { Box, Flex } from 'src/elements/grid';
import { Link, Text } from 'src/elements/typography';
import logo from 'src/assets/images/grape-ui-header-logo.svg'

const leftArea = (
  <Flex alignItems="center" flexDirection={['column', 'row']}>
    <Box maxWidth={175}>
      <Link>
        <ReactSVG src={logo} />
      </Link>
    </Box>
    <Link>
      <Button color="black" fontWeight="bold">DOCS</Button>
    </Link>
  </Flex>
);

const rightArea = (version) => (
  <Flex alignItems="center">
    <Box mx={1} px={[1, 2, 3]}>
      <Text>v{version}</Text>
    </Box>
    <Button pl={[1, 2]} pr={[1, 2]}>
      <FontAwesomeIcon icon={faGithub} />
    </Button>
    <Button pl={[1, 2]} pr={[1, 2]}>
      <FontAwesomeIcon icon={faTwitter} />
    </Button>
    <Box display={['none', 'block']}>
      <Link>
        <Button color="brandPrimary">Getting Started</Button>
      </Link>
    </Box>
  </Flex>
);

<Toolbar
  borderBottom="1px solid rgb(203, 39, 168)"
  boxShadow="rgb(132, 11, 85) 0px 1px 0px"
  leftArea={leftArea}
  minHeight={null}
  px={[2, 3, 4, 5]}
  py={2}
  rightArea={rightArea('#.##')}
  toolbarInnerProps={{
    alignItems: 'center',
    flexDirection: ['column', 'row'],
    maxWidth: 'none',
    width: 1,
  }}
/>

```

#### Hide Toolbar

```jsx in Markdown
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'src/elements/Button';
import { TextField } from 'src/elements/forms';
import { Flex } from 'src/elements/grid';
import { Header } from 'src/elements/typography';

const ToolbarButton = styled(Button)``;

ToolbarButton.defaultProps = {
  bgActiveColor: 'purple.light',
  bgHoverColor: 'purple',
  color: 'white'
};

const leftArea = (
  <Flex alignItems="center" ml={-3}>
    <ToolbarButton>
      <FontAwesomeIcon icon={faBars} />
    </ToolbarButton>
    <Header.h5
      color="white"
      mb="0"
    >
      App
    </Header.h5>
  </Flex>
);

const rightArea = (
  <ToolbarButton>
    Login
  </ToolbarButton>
);

const [hide, setHidden] = useState(false);

<ThemeProvider
  theme={{
    colors: {
      brandPrimary: 'rgb(203, 39, 168)',
    },
  }}
>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Toolbar
    bg="brandPrimary"
    isHidden={hide}
    leftArea={leftArea}
    rightArea={rightArea}
  />
</ThemeProvider>

```

#### Loading Toolbar

```jsx in Markdown
import styled, { ThemeProvider } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'src/elements/Button';
import { TextField } from 'src/elements/forms';
import { Flex } from 'src/elements/grid';
import { Header } from 'src/elements/typography';

const ToolbarButton = styled(Button)``;

ToolbarButton.defaultProps = {
  bgActiveColor: 'purple.light',
  bgHoverColor: 'purple',
  color: 'white'
};

const leftArea = (
  <Flex alignItems="center" ml={-3}>
    <ToolbarButton>
      <FontAwesomeIcon icon={faBars} />
    </ToolbarButton>
    <Header.h5
      color="white"
      mb="0"
    >
      App
    </Header.h5>
  </Flex>
);

const rightArea = (
  <ToolbarButton>
    Login
  </ToolbarButton>
);

<ThemeProvider
  theme={{
    colors: {
      brandPrimary: {
        base: 'rgb(203, 39, 168)',
      },
    },
  }}
>
  <Toolbar
    bg="brandPrimary.base"
    leftArea={leftArea}
    progressProps={{
      indicatorColor: '#27cb4a',
    }}
    rightArea={rightArea}
    showProgress
  />
</ThemeProvider>

```
