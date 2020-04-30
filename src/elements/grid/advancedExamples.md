### Jumbotron

[Bootstrap](https://getbootstrap.com) made the Jumbotron component popular, here's how it could be done in grape-ui.

#### Jumbotron Component Example

```jsx in Markdown
import { Box, Flex } from '/';
import { Header, Paragraph } from 'src/elements/typography';
import { Button } from 'src/elements/Button';
import styled, { ThemeProvider } from 'styled-components';
import * as styledHelpers from '../../utils/styledHelpers'; // ... import { styledHelpers} from 'grape-ui-react'

const theme = {
  buttons: {
    ...styledHelpers.buttonThemes(),
  },
};

const Jumbotron = styled(Box)``;

Jumbotron.defaultProps = {
  background: 'rgb(253, 244, 235)',
  borderRadius: '4px',
  px: [3, null, 4],
  py: [2, 3, 4, 5],
};

<ThemeProvider theme={theme}>
  <Jumbotron>
    <Header.h1>
      Hello, world!
    </Header.h1>
    <Paragraph lead>
      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
    </Paragraph>
    <hr />
    <Paragraph>
      It uses utility classes for typography and spacing to space content out within the larger container.
    </Paragraph>
    <Button
      bg="blue"
      bgActiveColor="blue.dark"
      bgHoverColor="blue.light"
      color="white"
      lg
    >
      Learn More
    </Button>
  </Jumbotron>
</ThemeProvider>

```

### Full Page Cover Image

The Flex and Box components can also handle background images, making for some fun cover designs.  Using [styled-system's background API](https://styled-system.com/api#background), we can responsively state which image to use in the bg for whichever resolution.

#### Full Page Cover Image Component Example

```jsx in Markdown
import { Box, Flex } from '/';
import { Text } from 'src/elements/typography';
import styled from 'styled-components';
import imgSmall from './examples/karly-jones-6aRIh3j_F4I-unsplash.jpg';
import imgLarge from './examples/amos-bar-zeev-GibvqWh_OcE-unsplash.jpg';

const Cover = styled(Flex)``;

Cover.defaultProps = {
  alignItems: 'flex-end',
  backgroundImage: [
    `url('${imgSmall}')`,
    null,
    `url('${imgLarge}')`,
  ],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: ['100vh', '75vh', '50vh'],
  px: [3, null, 4],
  py: 2,
};

<Cover>
  <Box
    background="rgba(0,0,0,0.6)"
    borderRadius="4px"
    p={2}
  >
    <Text color="white" sm>
      Small Screen Resolution Photo by Karly Jones on Unsplash,
      Large Screen Resolution Photo by Amos Bar-Zeev on Unsplash
    </Text>
  </Box>
</Cover>

```
