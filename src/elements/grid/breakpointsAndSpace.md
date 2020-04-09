Breakpoints and space are two keys in the theme object that are needed for styled-system to work.  If you would like to override the defaults, you are able to. The breakpoints and space for `<Flex>` & `<Box>` are capable of being overridden via the `<ThemeProvider>`. Below we import the providers and define overrides for our custom theme.

```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { Box, Flex } from './';

const theme = {
  breakpoints: [
    '35em', '47em', '59em',
  ],
  space: [2, 7, 8, 18, 27, 39],
};

<ThemeProvider theme={theme}>
  <Flex flexDirection={['column', null, 'row']}>
    <Box m={[1, 2, 3, 4]}>
      Margin is 7px at 0 - 35em, 8px at 35em - 47em, 18px at 47em - 59em, 27px at 59em+.
    </Box>
    <Box m={[2, 3, 4]}>
      Margin is 8px at 0 - 35em, 18px at 35em - 47em, 27px at 47em+.
    </Box>
    <Box m={[3, null, 4]}>
      Margin is 18px at 0 - 47em, and 27px at 47em+.
    </Box>
    <Box m={4}>
      Margin is 27px at all resolutions.
    </Box>
  </Flex>
</ThemeProvider>
```

[Additional reading on styled-system theme keys can be found here](https://styled-system.com/theme-specification#keys).
