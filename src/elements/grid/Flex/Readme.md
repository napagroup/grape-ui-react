<small>**NOTE:** Some <code>Flex</code> examples below that have background colors are only to demonstrate the components boundaries.</small>

`<Flex>` is a container level element that can be used to wrap children into a grid.  It is meant to be a child element of `<Box>`, but can wrap any elements.

### Basic Usage
```jsx in Markdown
import { Box } from '../';
import { Paragraph, Text } from 'src/elements/typography'; // from 'grape-ui-react'

<Flex>
  <Box>
    <Text>I am a box inside of a Flex component.</Text>
  </Box>
  <Paragraph>I am paragraph component inside of a Flex component.</Paragraph>
  <Text>I am text component inside  of a Flex component.</Text>
</Flex>
```

### Margins
When applying margin to `<Flex>`, simply use the `m` attribute for margins.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'

<ThemeProvider theme={{}}>
  <Flex m={48} style={{ background: '#ee525f' }}>
    <Text>There is a <code>margin</code> set to <code>48</code> on this <code>&lt;Flex&gt;</code>.</Text>
  </Flex>
</ThemeProvider>
```

#### Variants
`<Flex>` can have different variants defined for margin.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex m={12}>
    <Text>Applies margin all around</Text>
  </Flex>
  <Flex mt={12}>
    <Text>Applies margin-top</Text>
  </Flex>
  <Flex mr={12}>
    <Text>Applies margin-right</Text>
  </Flex>
  <Flex mb={12}>
    <Text>Applies margin-bottom</Text>
  </Flex>
  <Flex ml={12}>
    <Text>Applies margin-left</Text>
  </Flex>
  <Flex mx={12}>
    <Text>Applies margin-x</Text>
  </Flex>
  <Flex my={12}>
    <Text>Applies margin-y</Text>
  </Flex>
</ThemeProvider>
```

### Padding
When applying padding to `<Flex>`, simply use the `p` attribute for padding.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'

<ThemeProvider theme={{}}>
  <Flex p={48} style={{ background: '#4b9002' }}>
    <Text>There is a <code>padding</code> set to <code>48</code> on this <code>&lt;Flex&gt;</code>.</Text>
  </Flex>
</ThemeProvider>
```

#### Variants
`<Flex>` can have different variants defined for padding.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex p={12}>
    <Text>Applies padding all around</Text>
  </Flex>
  <Flex pt={12}>
    <Text>Applies padding-top</Text>
  </Flex>
  <Flex pr={12}>
    <Text>Applies padding-right</Text>
  </Flex>
  <Flex pb={12}>
    <Text>Applies padding-bottom</Text>
  </Flex>
  <Flex pl={12}>
    <Text>Applies padding-left</Text>
  </Flex>
  <Flex px={12}>
    <Text>Applies padding-x</Text>
  </Flex>
  <Flex py={12}>
    <Text>Applies padding-y</Text>
  </Flex>
</ThemeProvider>
```

### Width
When applying width to `<Flex>`, simply use the `width` attribute for widths.
```jsx
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'

<ThemeProvider theme={{}}>
  <Flex style={{ background: '#68ce72' }} width={1 / 8}>
    <Text>There is a <code>width</code> set to <code>1 / 8</code> on this <code>&lt;Flex&gt;</code></Text>
  </Flex>
</ThemeProvider>
```

#### Variants
`<Flex>` can have different variants defined for `width`, including responsive ones!
```jsx in Markdown
import { ThemeProvider } from 'styled-components';
import { Text } from 'src/elements/typography'; // from 'grape-ui-react'
import { StyledFlex as Flex } from '../examples';

<ThemeProvider theme={{}}>
  <Flex width={1 / 2}>
    <Text>Applies a percentage width</Text>
  </Flex>
  <Flex width={256}>
    <Text>Applies an exact pixel width</Text>
  </Flex>
  <Flex width="4em">
    <Text>Applies the exact width enter with the stated unit</Text>
  </Flex>
  <Flex width={[1, 1 / 2]}>
    <Text>Applies the width to different breakpoints</Text>
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
      <Text>Applies display to the styling</Text>
    </Flex>
    <Flex display={['block', 'inline-block']}>
      <Text>Applies display to the styling of the defined breakpoints</Text>
    </Flex>
    <Flex maxWidth={1024}>
      <Text>Applies max-width to the styling</Text>
    </Flex>
    <Flex maxWidth={[768, null, null, 1024]}>
      <Text>Applies max-width to the styling of the defined breakpoints</Text>
    </Flex>
    <Flex minWidth={128}>
      <Text>Applies min-width to the styling</Text>
    </Flex>
    <Flex minWidth={[96, 128]}>
      <Text>Applies min-width to the styling of the defined breakpoints</Text>
    </Flex>
    <Flex height={64}>
      <Text>Applies height to the styling</Text>
    </Flex>
    <Flex height={[48, 64]}>
      <Text>Applies height to the styling of the defined breakpoints</Text>
    </Flex>
    <Flex maxHeight={1024}>
      <Text>Applies max-width to the styling</Text>
    </Flex>
    <Flex maxHeight={[768, null, null, 1024]}>
      <Text>Applies max-width to the styling of the defined breakpoints</Text>
    </Flex>
    <Flex minHeight={128}>
      <Text>Applies min-width to the styling</Text>
    </Flex>
    <Flex minHeight={[384, 512]}>
      <Text>Applies min-width to the styling of the defined breakpoints</Text>
    </Flex>
    <Flex size={320}>
      <Text>Applies width &amp; height to the styling</Text>
    </Flex>
    <Flex size={[320, 480]}>
      <Text>Applies width &amp; height to the styling of the defined breakpoints</Text>
    </Flex>
    <Flex ratio={3 / 4}>
      <Text>Applies height &amp; padding-bottom to the styling</Text>
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
  <FlexWrapper p={[1, 2, 3, 4]} position="relative">
    <Flex position="absolute" top={0}>
      <Text>Applies position top to the styling</Text>
    </Flex>
    <Flex left="50%" position="relative" zIndex={2}>
      <Text>Applies z-index to the styling</Text>
    </Flex>
    <Flex position="absolute" left={0}>
      <Text>Applies left to the styling</Text>
    </Flex>
    <Flex position="absolute" right={0}>
      <Text>Applies right to the styling</Text>
    </Flex>
    <Flex position="absolute" bottom={0}>
      <Text>Applies bottom to the styling</Text>
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
} from '../examples';
import { Link, Text } from 'src/elements/typography'; // from 'grape-ui-react'

<ThemeProvider theme={{}}>
  <div>
    <Text lg>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" target="_blank">Align Items</Link>
      <code> alignItems="string"</code>
    </Text>
    <hr />
    <Flex alignItems="stretch" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: alignItems="stretch"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: alignItems="stretch"</Text></ElementTwo>
      <ElementThree><Text fontFamily="monospace">Element 2: alignItems="stretch"</Text></ElementThree>
    </Flex>
    <Flex alignItems="flex-start" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: alignItems="flex-start"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: alignItems="flex-start"</Text></ElementTwo>
      <ElementThree><Text fontFamily="monospace">Element 2: alignItems="flex-start"</Text></ElementThree>
    </Flex>
    <Flex alignItems="flex-end" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: alignItems="flex-end"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: alignItems="flex-end"</Text></ElementTwo>
      <ElementThree><Text fontFamily="monospace">Element 3: alignItems="flex-end"</Text></ElementThree>
    </Flex>
    <Flex alignItems="center" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: alignItems="center"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: alignItems="center"</Text></ElementTwo>
      <ElementThree><Text fontFamily="monospace">Element 3: alignItems="center"</Text></ElementThree>
    </Flex>
    <Flex alignItems="baseline" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: alignItems="baseline"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: alignItems="baseline"</Text></ElementTwo>
      <ElementThree><Text fontFamily="monospace">Element 3: alignItems="baseline"</Text></ElementThree>
    </Flex>
    <Flex alignItems={['flex-start', 'flex-end', 'center']} mb={[1, 2, 3, 4]}>
      <ElementFour><Text fontFamily="monospace">Element 1: justifyContent=&#123;['flex-start', 'flex-end', 'center']&#125;</Text></ElementFour>
      <ElementSix><Text fontFamily="monospace">Element 2: justifyContent=&#123;['flex-start', 'flex-end', 'center']&#125;</Text></ElementSix>
      <ElementEight><Text fontFamily="monospace">Element 3: justifyContent=&#123;['flex-start', 'flex-end', 'center']&#125;</Text></ElementEight>
    </Flex>

    <Text lg>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target="_blank">Flex Direction</Link>
      <code> flexDirection="string"</code>
    </Text>
    <hr />
    <Flex flexDirection="column" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: flexDirection="column"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: flexDirection="column"</Text></ElementTwo>
    </Flex>
    <Flex flexDirection="row" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: flexDirection="row"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: flexDirection="row"</Text></ElementTwo>
    </Flex>
    <Flex flexDirection={['column', 'row', 'column-reverse', 'row-reverse']} mb={[1, 2, 3, 4]}>
      <ElementOne>
        <Text fontFamily="monospace">Element 1: flexDirection=&#123;['column', 'row', 'column-reverse', 'row-reverse']&#125;</Text>
      </ElementOne>
      <ElementTwo>
        <Text fontFamily="monospace">Element 2: flexDirection=&#123;['column', 'row', 'column-reverse', 'row-reverse']&#125;</Text>
      </ElementTwo>
    </Flex>

    <Text lg>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap" target="_blank">Flex Wrap</Link>
      <code> flexWrap="string"</code>
    </Text>
    <hr />
    <Flex flexWrap="nowrap" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: flexWrap="nowrap"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: flexWrap="nowrap"</Text></ElementTwo>
      <ElementThree><Text fontFamily="monospace">Element 3: flexWrap="nowrap"</Text></ElementThree>
      <ElementFour><Text fontFamily="monospace">Element 4: flexWrap="nowrap"</Text></ElementFour>
      <ElementFive><Text fontFamily="monospace">Element 5: flexWrap="nowrap"</Text></ElementFive>
      <ElementSix><Text fontFamily="monospace">Element 6: flexWrap="nowrap"</Text></ElementSix>
    </Flex>
    <Flex flexWrap="wrap" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: flexWrap="wrap"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: flexWrap="wrap"</Text></ElementTwo>
      <ElementThree><Text fontFamily="monospace">Element 3: flexWrap="wrap"</Text></ElementThree>
      <ElementFour><Text fontFamily="monospace">Element 4: flexWrap="wrap"</Text></ElementFour>
      <ElementFive><Text fontFamily="monospace">Element 5: flexWrap="wrap"</Text></ElementFive>
      <ElementSix><Text fontFamily="monospace">Element 6: flexWrap="wrap"</Text></ElementSix>
      <ElementSeven><Text fontFamily="monospace">Element 7: flexWrap="wrap"</Text></ElementSeven>
      <ElementEight><Text fontFamily="monospace">Element 8: flexWrap="wrap"</Text></ElementEight>
    </Flex>
    <Flex flexWrap={['wrap', 'nowrap', 'wrap-reverse']} mb={[1, 2, 3, 4]}>
      <ElementOne>
        <Text fontFamily="monospace">Element 1: flexWrap=&#123;['wrap', 'nowrap', 'wrap-reverse']&#125;</Text>
      </ElementOne>
      <ElementTwo>
        <Text fontFamily="monospace">Element 2: flexWrap=&#123;['wrap', 'nowrap', 'wrap-reverse']&#125;</Text>
      </ElementTwo>
      <ElementThree>
        <Text fontFamily="monospace">Element 3: flexWrap=&#123;['wrap', 'nowrap', 'wrap-reverse']&#125;</Text>
      </ElementThree>
      <ElementFour>
        <Text fontFamily="monospace">Element 4: flexWrap=&#123;['wrap', 'nowrap', 'wrap-reverse']&#125;</Text>
      </ElementFour>
      <ElementFive>
        <Text fontFamily="monospace">Element 5: flexWrap=&#123;['wrap', 'nowrap', 'wrap-reverse']&#125;</Text>
      </ElementFive>
      <ElementSix>
        <Text fontFamily="monospace">Element 6: flexWrap=&#123;['wrap', 'nowrap', 'wrap-reverse']&#125;</Text>
      </ElementSix>
    </Flex>

    <Text lg>
      <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content" target="_blank">Justify Content</Link>
      <code> justifyContent="string"</code>
    </Text>
    <hr />
    <Flex justifyContent="flex-start" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: justifyContent="flex-start"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: justifyContent="flex-start"</Text></ElementTwo>
    </Flex>
    <Flex justifyContent="flex-end" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: justifyContent="flex-end"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: justifyContent="flex-end"</Text></ElementTwo>
    </Flex>
    <Flex justifyContent="center" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: justifyContent="center"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: justifyContent="center"</Text></ElementTwo>
    </Flex>
    <Flex justifyContent="space-between" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: justifyContent="space-between"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: justifyContent="space-between"</Text></ElementTwo>
    </Flex>
    <Flex justifyContent="space-around" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: justifyContent="space-around"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: justifyContent="space-around"</Text></ElementTwo>
    </Flex>
    <Flex justifyContent="space-evenly" mb={[1, 2, 3, 4]}>
      <ElementOne><Text fontFamily="monospace">Element 1: justifyContent="space-evenly"</Text></ElementOne>
      <ElementTwo><Text fontFamily="monospace">Element 2: justifyContent="space-evenly"</Text></ElementTwo>
    </Flex>

  </div>
</ThemeProvider>
```
