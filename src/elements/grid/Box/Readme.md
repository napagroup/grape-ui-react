**NOTE:** Some `Box` examples below that have background colors are only to demonstrate the components boundaries.

`<Box>` is a content level element that can be used to define different columns of your grid.  It is meant to be a child element of `<Flex>`.

### Basic Usage

```jsx in Markdown
import { Flex } from '../';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from '../examples';

<Flex>
  <Box>
    <Text>
      I am inside a box.
    </Text>
  </Box>
  <Box>
    <Text>
      I am inside a box.
    </Text>
  </Box>
  <Box>
    <Text>
      I am inside a box.
    </Text>
  </Box>
  <Text>
    {'I am '}
    <Text italic>not</Text>
    {' inside a box.'}
  </Text>
</Flex>
```

### Margins

When applying margin to `<Box>`, simply use the `m` attribute for margins.

```jsx
import { ThemeProvider } from 'styled-components';
import {
  Code,
  Text,
} from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from '../examples';

<ThemeProvider theme={{}}>
  <Box m={48}>
    <Text>
      {'There is a '}
      <Code code="margin" />
      {' set to '}
      <Code code="{48}" />
      {' on this '}
      <Code code="<Box>" />
      .
    </Text>
  </Box>
</ThemeProvider>
```

#### Margin Variants

`<Box>` can have different variants defined for margin.

```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from '../examples';

<ThemeProvider theme={{}}>
  <Box m={3}>
    <Text>
      Applies margin all around
    </Text>
  </Box>
  <Box mt={3}>
    <Text>
      Applies margin-top
    </Text>
  </Box>
  <Box mr={3}>
    <Text>
      Applies margin-right
    </Text>
  </Box>
  <Box mb={3}>
    <Text>
      Applies margin-bottom
    </Text>
  </Box>
  <Box ml={3}>
    <Text>
      Applies margin-left
    </Text>
  </Box>
  <Box mx={3}>
    <Text>
      Applies margin-x
    </Text>
  </Box>
  <Box my={3}>
    <Text>
      Applies margin-y
    </Text>
  </Box>
</ThemeProvider>
```

### Padding

When applying padding to `<Box>`, simply use the `p` attribute for padding.

```jsx
import { ThemeProvider } from 'styled-components';
import { Code, Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from '../examples';

<ThemeProvider theme={{}}>
  <Box p={48}>
    <Text>
      {'There is a '}
      <Code code="padding" />
      {' set to '}
      <Code code="{48}" />
      {' on this '}
      <Code code="<Box>" />
      .
    </Text>
  </Box>
</ThemeProvider>
```

#### Padding Variants

`<Box>` can have different variants defined for padding.

```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from '../examples';

<ThemeProvider theme={{}}>
  <Box p={3}>
    <Text>
      Applies padding all around
    </Text>
  </Box>
  <Box pt={3}>
    <Text>
      Applies padding-top
    </Text>
  </Box>
  <Box pr={3}>
    <Text>
      Applies padding-right
    </Text>
  </Box>
  <Box pb={3}>
    <Text>
      Applies padding-bottom
    </Text>
  </Box>
  <Box pl={3}>
    <Text>
      Applies padding-left
    </Text>
  </Box>
  <Box px={3}>
    <Text>
      Applies padding-x
    </Text>
  </Box>
  <Box py={3}>
    <Text>
      Applies padding-y
    </Text>
  </Box>
</ThemeProvider>
```

### Width

When applying width to `<Box>`, simply use the `width` attribute for widths.

```jsx
import { ThemeProvider } from 'styled-components';
import { Code, Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from '../examples';

<ThemeProvider theme={{}}>
  <Box width={1 / 8}>
    <Text>
      {'There is a '}
      <Code code="width" />
      {' set to '}
      <Code code="{1 / 8}" />
      {' on this '}
      <Code code="<Box>" />
    </Text>
  </Box>
</ThemeProvider>
```

#### Width Variants

`<Box>` can have different variants defined for `width`, including responsive ones!

```jsx
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from '../examples';

<ThemeProvider theme={{}}>
  <Flex flexWrap="wrap">
    <Box width={1 / 2}>
      <Text>
        Applies a percentage width
      </Text>
    </Box>
    <Box width={256}>
      <Text>
        Applies an exact pixel width
      </Text>
    </Box>
    <Box width="2em">
      <Text>
        Applies the exact width enter with the stated unit
      </Text>
    </Box>
    <Box width={[1, 1 / 2]}>
      <Text>
        Applies the width to different breakpoints
      </Text>
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
import { StyledBox as Box } from '../examples';

<ThemeProvider theme={{}}>
  <Flex flexWrap="wrap">
    <Box display="inline-block">
      <Text>
        Applies display to the styling
      </Text>
    </Box>
    <Box display={[
      'block',
      'inline-block'
    ]}>
      <Text>
        Applies display to the styling of the defined breakpoints
      </Text>
    </Box>
    <Box maxWidth={1024}>
      <Text>
        Applies max-width to the styling
      </Text>
    </Box>
    <Box maxWidth={[
      768,
      null,
      null,
      1024
    ]}>
      <Text>
        Applies max-width to the styling of the defined breakpoints
      </Text>
    </Box>
    <Box minWidth={128}>
      <Text>
        Applies min-width to the styling
      </Text>
    </Box>
    <Box minWidth={[96, 128]}>
      <Text>
        Applies min-width to the styling of the defined breakpoints
      </Text>
    </Box>
    <Box height={64}>
      <Text>
        Applies height to the styling
      </Text>
    </Box>
    <Box height={[48, 64]}>
      <Text>
        Applies height to the styling of the defined breakpoints
      </Text>
    </Box>
    <Box maxHeight={1024}>
      <Text>
        Applies max-width to the styling
      </Text>
    </Box>
    <Box maxHeight={[768, null, null, 1024]}>
      <Text>
        Applies max-width to the styling of the defined breakpoints
      </Text>
    </Box>
    <Box minHeight={128}>
      <Text>
        Applies min-width to the styling
      </Text>
    </Box>
    <Box minHeight={[384, 512]}>
      <Text>
        Applies min-width to the styling of the defined breakpoints
      </Text>
    </Box>
    <Box size={320}>
      <Text>
        Applies width &amp; height to the styling
      </Text>
    </Box>
    <Box size={[320, 480]}>
      <Text>
        Applies width &amp; height to the styling of the defined breakpoints
      </Text>
    </Box>
    <Box ratio={3 / 4}>
      <Text>
        Applies height &amp; padding-bottom to the styling
      </Text>
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
import { StyledBox as Box } from '../examples';

<ThemeProvider theme={{}}>
  <Flex p={[1, 2, 3, 4]} position="relative">
    <Box position="absolute" top={0}>
      <Text>
        Applies position top to the styling
      </Text>
    </Box>
    <Box zIndex={2}>
      <Text>
        Applies z-index to the styling
      </Text>
    </Box>
    <Box position="absolute" left={0}>
      <Text>
        Applies left to the styling
      </Text>
    </Box>
    <Box position="absolute" right={0}>
      <Text>
        Applies right to the styling
      </Text>
    </Box>
    <Box position="absolute" bottom={0}>
      <Text>
        Applies bottom to the styling
      </Text>
    </Box>
  </Flex>
</ThemeProvider>
```

### Flexbox

`<Box>` supports different flexbox attributes.  This is essential for creating layouts.  A great read about Flexbox can be found [here on CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).  Here are some examples:

```jsx
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import {
  Code,
  CodeBlock,
  Link,
  Text,
} from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledBox as Box } from '../examples';

const alignSelfExample01 = [
  'auto',
  'flex-start',
  'flex-end',
  'center'
];
const alignSelfExample02 = 'stretch';
const alignSelfExample03 = 'baseline';

const flexExample01 = 1;
const flexExample02 = [2, 1, 3, 2];
const flexExample03 = '1 1 auto';

const flexBasisExample01 = 120;
const flexBasisExample02 = [200, 100, 300, 200];
const flexBasisExample03 = 'auto';

const flexGrowExample01 = [2, 1, 3, 2];
const flexGrowExample02 = 1;

const flexShrinkExample01 = [2, 1, 3, 2];
const flexShrinkExample02 = 1;

const justifySelfExample01 = [
  'auto',
  'flex-start',
  'flex-end',
  'center'
];
const justifySelfExample02 = 'stretch';
const justifySelfExample03 = 'baseline';

const orderExample01 = 1;
const orderExample02 = -1;
const orderExample03 = [9, 21, 13, 2];
const orderExample04 = [17, 12, null, 7];
const orderExample05 = 20;

<ThemeProvider theme={{}}>
  <Text lg>
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self"
      target="_blank"
    >
      Align Self
    </Link>
    <Code code={'alignSelf="string"'} />
  </Text>
  <Flex
    flexDirection={['column', 'row']}
    mb={[1, 2, 3, 4]}
  >
    <Box
      alignSelf={alignSelfExample01}
    >
      <CodeBlock
        code={`alignSelf={[${alignSelfExample01}]}`}
      />
    </Box>
    <Box alignSelf={alignSelfExample02}>
      <CodeBlock
        code={`alignSelf="${alignSelfExample02}"`}
      />
    </Box>
    <Box alignSelf={alignSelfExample03}>
      <CodeBlock
        code={`alignSelf="${alignSelfExample03}"`}
      />
    </Box>
  </Flex>

  <Text lg>
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex"
      target="_blank"
    >
      Flex
    </Link>
    <Code
      code={'flex={number} or "string"'}
    />
  </Text>
  <Flex
    flexDirection={['column', 'row']}
    mb={[1, 2, 3, 4]}
  >
    <Box flex={flexExample01}>
      <CodeBlock code={`flex={${flexExample01}}`} />
    </Box>
    <Box flex={flexExample02}>
      <CodeBlock code={`flex={[${flexExample02}]}`} />
    </Box>
    <Box flex={flexExample03}>
      <CodeBlock code={`flex="${flexExample03}"`} />
    </Box>
  </Flex>

  <Text lg>
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis"
      target="_blank"
    >
      Flex Basis
    </Link>
    <Code code={'flexBasis={number} or "string"'} />
  </Text>
  <Flex
    flexDirection={['column', 'row']}
    mb={[1, 2, 3, 4]}
  >
    <Box flexBasis={flexBasisExample01}>
      <CodeBlock code={`flexBasis={${flexBasisExample01}}`} />
    </Box>
    <Box flexBasis={flexBasisExample02}>
      <CodeBlock code={`flexBasis={[${flexBasisExample02}]}`} />
    </Box>
    <Box flexBasis={flexBasisExample03}>
      <CodeBlock code={`flexBasis={${flexBasisExample03}}`} />
    </Box>
  </Flex>

  <Text lg>
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow"
      target="_blank"
    >
      Flex Grow
    </Link>
    <Code code="flexGrow={number}" />
  </Text>
  <Flex
    flexDirection={['column', 'row']}
    mb={[1, 2, 3, 4]}
  >
    <Box flexGrow={flexGrowExample01}>
      <CodeBlock code={`flexGrow={[${flexGrowExample01}]}`} />
    </Box>
    <Box flexGrow={flexGrowExample02}>
      <CodeBlock code={`flexGrow={${flexGrowExample02}}`} />
    </Box>
  </Flex>

  <Text lg>
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink"
      target="_blank"
    >
      Flex Shrink
    </Link>
    <Code code="flexShrink={number}" />
  </Text>
  <Flex
    flexDirection={['column', 'row']}
    mb={[1, 2, 3, 4]}
  >
    <Box flexShrink={flexShrinkExample01}>
      <CodeBlock code={`flexShrink={[${flexShrinkExample01}]}`} />
    </Box>
    <Box flexShrink={flexShrinkExample02}>
      <CodeBlock code={`flexShrink={${flexShrinkExample02}}`} />
    </Box>
  </Flex>

  <Text lg>
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self"
      target="_blank"
    >
      Justify Self
    </Link>
    <Code code={'justifySelf="string"'} />
  </Text>
  <Flex
    flexDirection={['column', 'row']}
    mb={[1, 2, 3, 4]}
  >
    <Box justifySelf={justifySelfExample01}>
      <CodeBlock code={`justifySelf={[${justifySelfExample01}]}`} />
    </Box>
    <Box justifySelf={justifySelfExample02}>
      <CodeBlock code={`justifySelf={${justifySelfExample02}}`} />
    </Box>
    <Box justifySelf={justifySelfExample03}>
      <CodeBlock code={`justifySelf={${justifySelfExample03}}`} />
    </Box>
  </Flex>

  <Text lg>
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/order"
      target="_blank"
    >
      Order
    </Link>
    <Code code="order={number}" />
  </Text>
  <Flex
    flexDirection="column"
    mb={[1, 2, 3, 4]}
  >
    <Box order={orderExample01}>
      <Code code={`order={${orderExample01}}`} />
    </Box>
    <Box order={orderExample02}>
      <Code code={`order={${orderExample02}}`} />
    </Box>
    <Box order={orderExample03}>
      <Code code={`order={[${orderExample03}]}`} />
    </Box>
    <Box order={orderExample04}>
      <Code code={`order={[${orderExample04}]}`} />
    </Box>
    <Box order={orderExample05}>
      <Code code={`order={${orderExample05}}`} />
    </Box>
  </Flex>
</ThemeProvider>
```

#### Hide Box

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography';
import {
  Box,
  Flex,
} from 'src/elements/grid';
import { Button } from 'src/elements/Button';

const [hide, setHidden] = useState(false);

<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} isHidden={hide}>
    <Text>
      Hideable
    </Text>
    </Box>
  </Flex>
</ThemeProvider>
```
