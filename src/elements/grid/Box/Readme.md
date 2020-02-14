<small>**NOTE:** Some <code>Box</code> examples below that have background colors are only to demonstrate the components boundaries.</p></small>

`<Box>` is a content level element that can be used to define different columns of your grid.  It is meant to be a child element of `<Flex>`.

### Basic Usage
```jsx in Markdown
import { Flex } from '../';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<Flex>
  <Box>
    <Text>I am inside a box.</Text>
  </Box>
  <Box>
    <Text>I am inside a box.</Text>
  </Box>
  <Box>
    <Text>I am inside a box.</Text>
  </Box>
  <Text>I am <Text italic>not</Text> inside a box.</Text>
</Flex>
```

### Margins
When applying margin to `<Box>`, simply use the `m` attribute for margins.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Box m={48}>
    <Text>There is a <code>margin</code> set to <code>48</code> on this <code>&lt;Box&gt;</code>.</Text>
  </Box>
</ThemeProvider>
```
#### Variants
`<Box>` can have different variants defined for margin.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Box m={3}>
    <Text>Applies margin all around</Text>
  </Box>
  <Box mt={3}>
    <Text>Applies margin-top</Text>
  </Box>
  <Box mr={3}>
    <Text>Applies margin-right</Text>
  </Box>
  <Box mb={3}>
    <Text>Applies margin-bottom</Text>
  </Box>
  <Box ml={3}>
    <Text>Applies margin-left</Text>
  </Box>
  <Box mx={3}>
    <Text>Applies margin-x</Text>
  </Box>
  <Box my={3}>
    <Text>Applies margin-y</Text>
  </Box>
</ThemeProvider>
```

### Padding
When applying padding to `<Box>`, simply use the `p` attribute for padding.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Box p={48}>
    <Text>There is a <code>padding</code> set to <code>48</code> on this <code>&lt;Box&gt;</code>.</Text>
  </Box>
</ThemeProvider>
```

#### Variants
`<Box>` can have different variants defined for padding.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Box p={3}>
    <Text>Applies padding all around</Text>
  </Box>
  <Box pt={3}>
    <Text>Applies padding-top</Text>
  </Box>
  <Box pr={3}>
    <Text>Applies padding-right</Text>
  </Box>
  <Box pb={3}>
    <Text>Applies padding-bottom</Text>
  </Box>
  <Box pl={3}>
    <Text>Applies padding-left</Text>
  </Box>
  <Box px={3}>
    <Text>Applies padding-x</Text>
  </Box>
  <Box py={3}>
    <Text>Applies padding-y</Text>
  </Box>
</ThemeProvider>
```

### Width
When applying width to `<Box>`, simply use the `width` attribute for widths.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Box width={1 / 8}>
    <Text>There is a <code>width</code> set to <code>1 / 8</code> on this <code>&lt;Box&gt;</code></Text>
  </Box>
</ThemeProvider>
```

#### Variants
`<Box>` can have different variants defined for `width`, including responsive ones!
```jsx
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Flex flexWrap="wrap">
    <Box width={1 / 2}>
      <Text>Applies a percentage width</Text>
    </Box>
    <Box width={256}>
      <Text>Applies an exact pixel width</Text>
    </Box>
    <Box width="2em">
      <Text>Applies the exact width enter with the stated unit</Text>
    </Box>
    <Box width={[1, 1 / 2]}>
      <Text>Applies the width to different breakpoints</Text>
    </Box>
  </Flex>
</ThemeProvider>
```

### Layout
There are times when you may need to apply various layout attributes on `<Box>`.  Here are some examples:
```jsx
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Flex flexWrap="wrap">
    <Box display="inline-block">
      <Text>Applies display to the styling</Text>
    </Box>
    <Box display={['block', 'inline-block']}>
      <Text>Applies display to the styling of the defined breakpoints</Text>
    </Box>
    <Box maxWidth={1024}>
      <Text>Applies max-width to the styling</Text>
    </Box>
    <Box maxWidth={[768, null, null, 1024]}>
      <Text>Applies max-width to the styling of the defined breakpoints</Text>
    </Box>
    <Box minWidth={128}>
      <Text>Applies min-width to the styling</Text>
    </Box>
    <Box minWidth={[96, 128]}>
      <Text>Applies min-width to the styling of the defined breakpoints</Text>
    </Box>
    <Box height={64}>
      <Text>Applies height to the styling</Text>
    </Box>
    <Box height={[48, 64]}>
      <Text>Applies height to the styling of the defined breakpoints</Text>
    </Box>
    <Box maxHeight={1024}>
      <Text>Applies max-width to the styling</Text>
    </Box>
    <Box maxHeight={[768, null, null, 1024]}>
      <Text>Applies max-width to the styling of the defined breakpoints</Text>
    </Box>
    <Box minHeight={128}>
      <Text>Applies min-width to the styling</Text>
    </Box>
    <Box minHeight={[384, 512]}>
      <Text>Applies min-width to the styling of the defined breakpoints</Text>
    </Box>
    <Box size={320}>
      <Text>Applies width &amp; height to the styling</Text>
    </Box>
    <Box size={[320, 480]}>
      <Text>Applies width &amp; height to the styling of the defined breakpoints</Text>
    </Box>
    <Box ratio={3 / 4}>
      <Text>Applies height &amp; padding-bottom to the styling</Text>
    </Box>
  </Flex>
</ThemeProvider>
```

### Position
There are times when you may need to apply various position attributes on `<Box>`.  Here are some examples:
```jsx
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid'; // from 'grape-ui-react'
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Flex p={[1, 2, 3, 4]} position="relative">
    <Box position="absolute" top={0}>
      <Text>Applies position top to the styling</Text>
    </Box>
    <Box zIndex={2}>
      <Text>Applies z-index to the styling</Text>
    </Box>
    <Box position="absolute" left={0}>
      <Text>Applies left to the styling</Text>
    </Box>
    <Box position="absolute" right={0}>
      <Text>Applies right to the styling</Text>
    </Box>
    <Box position="absolute" bottom={0}>
      <Text>Applies bottom to the styling</Text>
    </Box>
  </Flex>
</ThemeProvider>
```

### Flexbox
`<Box>` supports different flexbox attributes.  This is essential for creating layouts.  A great read about Flexbox can be found [here on CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).  Here are some examples:
```jsx
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Link, Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from 'docs/examples';

<ThemeProvider theme={{}}>
  <Text lg>
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self" target="_blank">Align Self</Link>
    <code> alignSelf="string"</code>
  </Text>
  <Flex flexDirection={['column', 'row']} mb={[1, 2, 3, 4]}>
    <Box alignSelf={['auto', 'flex-start', 'flex-end', 'center']}>
      <Text fontFamily="monospace">alignSelf=&#123;['auto', 'flex-start', 'flex-end', 'center']&#125;</Text>
    </Box>
    <Box alignSelf="stretch">
      <Text fontFamily="monospace">alignSelf="stretch"</Text>
    </Box>
    <Box alignSelf="baseline">
      <Text fontFamily="monospace">alignSelf="baseline"</Text>
    </Box>
  </Flex>
  <Text lg>
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" target="_blank">Flex</Link>
    <code> flex=&#123;number&#125; or "string"</code>
  </Text>
  <Flex flexDirection={['column', 'row']} mb={[1, 2, 3, 4]}>
    <Box flex={1}>
      <Text fontFamily="monospace">flex=&#123;1&#125;</Text>
    </Box>
    <Box flex={[2, 1, 3, 2]}>
      <Text fontFamily="monospace">flex=&#123;[2, 1, 3, 2]&#125;</Text>
    </Box>
    <Box flex="1 1 auto">
      <Text fontFamily="monospace">flex="1 1 auto"</Text>
    </Box>
  </Flex>
  <Text lg>
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" target="_blank">Flex Basis</Link>
    <code> flexBasis=&#123;number&#125; or "string"</code>
  </Text>
  <Flex flexDirection={['column', 'row']} mb={[1, 2, 3, 4]}>
    <Box flexBasis={120}>
      <Text fontFamily="monospace">flexBasis=&#123;1&#125;</Text>
    </Box>
    <Box flexBasis={[200, 100, 300, 200]}>
      <Text fontFamily="monospace">flexBasis=&#123;[2, 1, 3, 2]&#125;</Text>
    </Box>
    <Box flexBasis="auto">
      <Text fontFamily="monospace">flexBasis="auto"</Text>
    </Box>
  </Flex>
  <Text lg>
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank">Flex Grow</Link>
    <code> flexGrow=&#123;number&#125;</code></Text>
  <Flex flexDirection={['column', 'row']} mb={[1, 2, 3, 4]}>
    <Box flexGrow={[2, 1, 3, 2]}>
      <Text fontFamily="monospace">flexGrow=&#123;[2, 1, 3, 2]&#125;</Text>
    </Box>
    <Box flexGrow={1}>
      <Text fontFamily="monospace">flexGrow=&#123;1&#125;</Text>
    </Box>
  </Flex>
  <Text lg>
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink" target="_blank">Flex Shrink</Link>
    <code> flexShrink=&#123;number&#125;</code></Text>
  <Flex flexDirection={['column', 'row']} mb={[1, 2, 3, 4]}>
    <Box flexShrink={[2, 1, 3, 2]}>
      <Text fontFamily="monospace">flexShrink=&#123;[2, 1, 3, 2]&#125;</Text>
    </Box>
    <Box flexShrink={1}>
      <Text fontFamily="monospace">flexShrink=&#123;1&#125;</Text>
    </Box>
  </Flex>
  <Text lg>
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self" target="_blank">Justify Self</Link>
    <code> justifySelf="string"</code>
  </Text>
  <Flex flexDirection={['column', 'row']} mb={[1, 2, 3, 4]}>
    <Box justifySelf={['auto', 'flex-start', 'flex-end', 'center']}>
      <Text fontFamily="monospace">justifySelf=&#123;['auto', 'flex-start', 'flex-end', 'center']&#125;</Text>
    </Box>
    <Box justifySelf="stretch">
      <Text fontFamily="monospace">justifySelf="stretch"</Text>
    </Box>
    <Box justifySelf="baseline">
      <Text fontFamily="monospace">justifySelf="baseline"</Text>
    </Box>
  </Flex>
  <Text lg>
    <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/order" target="_blank">Order</Link>
    <code> order=&#123;number&#125;</code>
  </Text>
  <Flex flexDirection="column" mb={[1, 2, 3, 4]}>
    <Box order={1}>
      <Text fontFamily="monospace">order=&#123;1&#125;</Text>
    </Box>
    <Box order={-1}>
      <Text fontFamily="monospace">order=&#123;-1&#125;</Text>
    </Box>
    <Box order={[9, 21, 13, 2]}>
      <Text fontFamily="monospace">order=&#123;[9, 21, 13, 2]&#125;</Text>
    </Box>
    <Box order={[17, 12, null, 7]}>
      <Text fontFamily="monospace">order=&#123;[17, 12, null, 7]&#125;</Text>
    </Box>
    <Box order={20}>
      <Text fontFamily="monospace">order=&#123;99&#125;</Text>
    </Box>
  </Flex>
</ThemeProvider>
```
