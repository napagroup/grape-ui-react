**NOTE:** Some `Flex` examples below that have background colors are only to demonstrate the components boundaries.

`<Flex>` is a container level element that can be used to wrap children into a grid.  It is meant to be a parent element of `<Box>`, but can wrap any elements.

### Basic Usage

```jsx in Markdown
import { Box } from 'src/elements/grid';
import {
  Paragraph,
  Text,
} from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<Flex>
  <Box>
    <Text>
      I am a box inside of a Flex component.
    </Text>
  </Box>
  <Paragraph>
    I am paragraph component inside of a Flex component.
  </Paragraph>
  <Text>
    I am text component inside  of a Flex component.
  </Text>
</Flex>
```

### Margins

When applying margin to `<Flex>`, simply use the `m` attribute for margins.

```jsx
import { ThemeProvider } from 'styled-components';
import {
  Code,
  Text,
} from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex m={48} style={{ background: '#ee525f' }}>
    <Text>
      {'There is a '}
      <Code codeString="margin" />
      {' set to '}
      <Code codeString="48" />
      {' on this '}
      <Code codeString="<Flex>" />
      .
    </Text>
  </Flex>
</ThemeProvider>
```

#### Margin Variants

`<Flex>` can have different variants defined for margin.

```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex m={12}>
    <Text>
      Applies margin all around
    </Text>
  </Flex>
  <Flex mt={12}>
    <Text>
      Applies margin-top
    </Text>
  </Flex>
  <Flex mr={12}>
    <Text>
      Applies margin-right
    </Text>
  </Flex>
  <Flex mb={12}>
    <Text>
      Applies margin-bottom
    </Text>
  </Flex>
  <Flex ml={12}>
    <Text>
      Applies margin-left
    </Text>
  </Flex>
  <Flex mx={12}>
    <Text>
      Applies margin-x
    </Text>
  </Flex>
  <Flex my={12}>
    <Text>
      Applies margin-y
    </Text>
  </Flex>
</ThemeProvider>
```

### Padding

When applying padding to `<Flex>`, simply use the `p` attribute for padding.

```jsx
import { ThemeProvider } from 'styled-components';
import {
  Code,
  Text,
} from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex
    p={48}
    style={{
      background: '#4b9002'
    }}
  >
    <Text>
      {'There is a '}
      <Code codeString="padding" />
      {' set to '}
      <Code codeString="48" />
      {' on this '}
      <Code codeString="<Flex>" />
      .
    </Text>
  </Flex>
</ThemeProvider>
```

#### Padding Variants

`<Flex>` can have different variants defined for padding.

```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex p={12}>
    <Text>
      Applies padding all around
    </Text>
  </Flex>
  <Flex pt={12}>
    <Text>
      Applies padding-top
    </Text>
  </Flex>
  <Flex pr={12}>
    <Text>
      Applies padding-right
    </Text>
  </Flex>
  <Flex pb={12}>
    <Text>
      Applies padding-bottom
    </Text>
  </Flex>
  <Flex pl={12}>
    <Text>
      Applies padding-left
    </Text>
  </Flex>
  <Flex px={12}>
    <Text>
      Applies padding-x
    </Text>
  </Flex>
  <Flex py={12}>
    <Text>
      Applies padding-y
    </Text>
  </Flex>
</ThemeProvider>
```

### Width

When applying width to `<Flex>`, simply use the `width` attribute for widths.

```jsx
import { ThemeProvider } from 'styled-components';
import {
  Code,
  Text,
} from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex
    style={{
      background: '#68ce72'
    }}
    width={1 / 8}
  >
    <Text>
      {'There is a '}
      <Code codeString="width" />
      {' set to '}
      <Code codeString="1 / 8" />
      {' on this '}
      <Code codeString="<Flex>" />
    </Text>
  </Flex>
</ThemeProvider>
```

#### Width Variants

`<Flex>` can have different variants defined for `width`, including responsive ones!

```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex width={1 / 2}>
    <Text>
      Applies a percentage width
    </Text>
  </Flex>
  <Flex width={256}>
    <Text>
      Applies an exact pixel width
    </Text>
  </Flex>
  <Flex width="4em">
    <Text>
      Applies the exact width enter with the stated unit
    </Text>
  </Flex>
  <Flex width={[1, 1 / 2]}>
    <Text>
      Applies the width to different breakpoints
    </Text>
  </Flex>
</ThemeProvider>
```

### Layout

There are times when you may need to apply various layout attributes on `<Flex>`.  Here are some examples:

```jsx
import styled, { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

const FlexWrapper = styled(Flex)`background: transparent;`;

<ThemeProvider theme={{}}>
  <FlexWrapper flexWrap="wrap">
    <Flex display="inline-block">
      <Text>
        Applies display to the styling
      </Text>
    </Flex>
    <Flex
      display={[
        'block',
        'inline-block'
      ]}
    >
      <Text>
        Applies display to the styling of the defined breakpoints
      </Text>
    </Flex>
    <Flex maxWidth={1024}>
      <Text>
        Applies max-width to the styling
      </Text>
    </Flex>
    <Flex
      maxWidth={[
        768,
        null,
        null,
        1024
      ]}
      >
      <Text>
        Applies max-width to the styling of the defined breakpoints
      </Text>
    </Flex>
    <Flex minWidth={128}>
      <Text>
        Applies min-width to the styling
      </Text>
    </Flex>
    <Flex minWidth={[96, 128]}>
      <Text>
        Applies min-width to the styling of the defined breakpoints
      </Text>
    </Flex>
    <Flex height={64}>
      <Text>
        Applies height to the styling
      </Text>
    </Flex>
    <Flex height={[48, 64]}>
      <Text>
        Applies height to the styling of the defined breakpoints
      </Text>
    </Flex>
    <Flex maxHeight={1024}>
      <Text>
        Applies max-width to the styling
      </Text>
    </Flex>
    <Flex
      maxHeight={[
        768,
        null,
        null,
        1024
      ]}
    >
      <Text>
        Applies max-width to the styling of the defined breakpoints
      </Text>
    </Flex>
    <Flex minHeight={128}>
      <Text>
        Applies min-width to the styling
      </Text>
    </Flex>
    <Flex minHeight={[384, 512]}>
      <Text>
        Applies min-width to the styling of the defined breakpoints
      </Text>
    </Flex>
    <Flex size={320}>
      <Text>
        Applies width &amp; height to the styling
      </Text>
    </Flex>
    <Flex size={[320, 480]}>
      <Text>
        Applies width &amp; height to the styling of the defined breakpoints
      </Text>
    </Flex>
    <Flex ratio={3 / 4}>
      <Text>
        Applies height &amp; padding-bottom to the styling
      </Text>
    </Flex>
  </FlexWrapper>
</ThemeProvider>
```

### Position

There are times when you may need to apply various position attributes on `<Flex>`.  Here are some examples:

```jsx
import styled, { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

const FlexWrapper = styled(Flex)`background: transparent;`;

<ThemeProvider theme={{}}>
  <FlexWrapper
    p={[1, 2, 3, 4]}
    position="relative"
  >
    <Flex
      position="absolute"
      top={0}
    >
      <Text>
        Applies position top to the styling
      </Text>
    </Flex>
    <Flex
      left="50%"
      position="relative"
      zIndex={2}
    >
      <Text>
        Applies z-index to the styling
      </Text>
    </Flex>
    <Flex
      left={0}
      position="absolute"
    >
      <Text>
        Applies left to the styling
      </Text>
    </Flex>
    <Flex
      position="absolute"
      right={0}
    >
      <Text>
        Applies right to the styling
      </Text>
    </Flex>
    <Flex
      bottom={0}
      position="absolute"
    >
      <Text>
        Applies bottom to the styling
      </Text>
    </Flex>
  </FlexWrapper>
</ThemeProvider>
```

### Flexbox

`<Flex>` supports different flexbox attributes.  This is essential for creating layouts.  A great read about Flexbox can be found [here on CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).  Here are some examples:

```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import {
  ElementOne,
  ElementTwo,
  ElementThree,
  ElementFour,
  ElementFive,
  ElementSix,
  ElementSeven,
  ElementEight,
  StyledBox,
} from '../examples';
import {
  CodeBlock,
  Code,
  Link,
  Text,
} from 'src/elements/typography'; // from 'grape-ui-react'

const alignItemsExample01 = { alignItems: 'stretch' };
const alignItemsExample02 = { alignItems: 'flex-start' };

const FlexExample = ({ exampleCode, count = 3, boxWidth = 1 / count }) => {
  const exampleString = JSON.stringify(exampleCode);

  const examples = [];
  for (let i = 0; i < count; ++i) {
    const exampleItem = {
      component: StyledBox,
      props: {
        height: 70 + (20 * i),
        width: boxWidth,
      },
    };
    examples.push(exampleItem);
  }
  const listItems = [];
  for (let i = 0; i < examples.length; ++i) {
    const ElementWrapper = examples[i].component;
    const elementItem = (
      <ElementWrapper
        key={`element-wrapper-${i}`}
        {...examples[i].props}
      >
        <CodeBlock codeString={exampleString} />
      </ElementWrapper>
    );
    listItems.push(elementItem);
  }

  return (
    <Flex
      mb={[1, 2, 3, 4]}
      {...exampleCode}
    >
      {listItems}
    </Flex>
  );
};

<ThemeProvider theme={{}}>
  <div>
    <hr />
    <Text lg>
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items"
        target="_blank"
      >
        Align Items
      </Link>
      <Code codeString={'alignItems="string"'} />
    </Text>
    <FlexExample
      exampleCode={{
        alignItems: 'baseline',
      }}
    />
    <FlexExample
      exampleCode={{
        alignItems: 'center',
      }}
    />
    <FlexExample
      exampleCode={{
        alignItems: 'flex-start',
      }}
    />
    <FlexExample
      exampleCode={{
        alignItems: 'flex-end',
      }}
    />
    <FlexExample
      exampleCode={{
        alignItems: 'stretch',
      }}
    />
    <FlexExample
      exampleCode={{
        alignItems: [
          'flex-start',
          'flex-end',
          'center'
        ]
      }}
    />
    <hr />
    <Text lg>
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction"
        target="_blank"
      >
        Flex Direction
      </Link>
      <Code codeString={'flexDirection="string"'} />
    </Text>
    <FlexExample
      count={2}
      exampleCode={{
        flexDirection: "column",
      }}
    />
    <FlexExample
      count={2}
      exampleCode={{
        flexDirection: "row",
      }}
    />
    <FlexExample
      count={2}
      exampleCode={{
        flexDirection: [
          'column',
          'row',
          'column-reverse',
          'row-reverse'
        ],
      }}
    />
    <hr />
    <Text lg>
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap"
        target="_blank"
      >Flex Wrap</Link>
      <Code codeString={'flexWrap="string"'} />
    </Text>
    <FlexExample
      boxWidth={1 / 2}
      count={6}
      exampleCode={{
        flexWrap: 'nowrap',
      }}
    />
    <FlexExample
      boxWidth={1 / 2}
      count={8}
      exampleCode={{
        flexWrap: 'wrap',
      }}
    />
    <FlexExample
      boxWidth={1 / 2}
      count={6}
      exampleCode={{
        flexWrap: [
          'wrap',
          'nowrap',
          'wrap-reverse',
        ],
      }}
    />
    <hr />
    <Text lg>
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content"
        target="_blank"
      >
        Justify Content
      </Link>
      <Code codeString={'justifyContent="string"'} />
    </Text>
    <FlexExample
      boxWidth="auto"
      count={2}
      exampleCode={{
        justifyContent: 'center',
      }}
    />
    <FlexExample
      boxWidth="auto"
      count={2}
      exampleCode={{
        justifyContent: 'flex-start',
      }}
    />
    <FlexExample
      boxWidth="auto"
      count={2}
      exampleCode={{
        justifyContent: 'flex-end',
      }}
    />
    <FlexExample
      boxWidth="auto"
      count={2}
      exampleCode={{
        justifyContent: 'space-around',
      }}
    />
    <FlexExample
      boxWidth="auto"
      count={2}
      exampleCode={{
        justifyContent: 'space-between',
      }}
    />
    <FlexExample
      boxWidth="auto"
      count={2}
      exampleCode={{
        justifyContent: 'space-evenly',
      }}
    />
  </div>
</ThemeProvider>
```

#### Hide Flex

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
  <Flex flexDirection={['column', 'row']} isHidden={hide}>
    <Box px={1}>
    <Text>
      Hideable
    </Text>
    </Box>
  </Flex>
</ThemeProvider>
```
