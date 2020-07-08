The `Card` component is intended to convey content and actions relating to a single idea.  In `grape-ui`, you can use `Card` and pass in contents via its props, its children, or via sub components.

#### Basic Example

```jsx is Markdown
import { Card } from 'src/elements/Card';
import { Box, Flex } from 'src/elements/grid';
import { CodeBlock } from 'src/elements/typography';

const baseCardStyleProps = {
  m: 1,
  maxWidth: 300,
  width: 1,
};

const containerStyleProps = {
  alignItems: 'center',
  background: '#fdf4fb',
  flexDirection: ['column', 'row'],
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};

<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <CodeBlock code="// Passed in through Props" />
    <Card
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <CodeBlock code="// Using subComponents" />
    <Card {...baseCardStyleProps}>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
    </Card>
  </Box>
</Flex>
```

#### Kitchen Sink

```jsx is Markdown
import { Button } from 'src/elements/Button';
import { Card } from 'src/elements/Card';
import {
  Box,
  Flex,
} from 'src/elements/grid';
import { Image } from 'src/elements/Image';
import {
  CodeBlock,
  Paragraph,
} from 'src/elements/typography';

const getRandomBill = (min, max, ratio) => {
  const numberX = Math.floor(Math.random() * (max - min) + min);
  const numberY = Math.floor(numberX / ratio);
  return `http://www.fillmurray.com/${numberX}/${numberY}`;
};

const ExampleCardActions01 = (
  <Button bg="brandPrimary" bgHoverColor="brandPrimary.light" color="white" m={0}>Action</Button>
);

const ExampleCardActions02 = (
  <Button>🏌️‍♀️</Button>
);

const ExampleCardBody01 = (
  <Paragraph ellipsis={5} mb="0">
    What an incredible Cinderella story. This unknown comes outta nowhere to lead the pack at Augusta. He’s at the final hole. He’s about 455 yards away, he’s gonna hit about a two iron, I think … (Carl reels back and swats the head off of a mum. Petals fly like confetti) Boy, he got all of that. The crowd is standing on its feet here at Augusta. The normally reserved Augusta crowd is going wild … (he pauses as he notices some golfers coming) for this young Cinderella who’s come out of nowhere. He’s got about 350 yards left. He’s going to hit about a five iron, it looks like, don’t you think? (Carl pulls the grass whip back to demolish the next mum) He’s got a beautiful backswing … That’s … Oh! He got all of that one! He’s gotta be pleased with that. The crowd is just on its feet here. He’s a Cinderella boy, tears in his eyes, I guess, as he lines up this last shot. And he’s got about 195 yards left, and he’s got a, it looks like he’s got about an eight iron. This crowd has gone deadly silent. Cinderella story, out of nowhere, former greenskeeper, now about to become the Masters champion. (Carl reels back one last time and — Swat! — blasts the third mum to smithereens) It looks like a mirac . . . It’s in the hole! IT’S IN THE HOLE!!!
  </Paragraph>
);

const ExampleCardImage01 = (
  <Image
    alt="Placeholder photo from FillMurray.com"
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(400, 1000, 16 / 9)}
  />
);

const ExampleCardImage02 = (
  <Image
    alt="Placeholder photo from FillMurray.com"
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(400, 1000, 4 / 3)}
  />
);

const ExampleCardThumbnail01 = (
  <Image
    alt="Placeholder photo from FillMurray.com"
    borderRadius="50%"
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(40, 100, 1)}
    width={40}
  />
);

const exampleCardPadding = 3;

const baseBoxStyleProps = {
  m: 1,
  maxWidth: 300,
  width: 1,
}

const baseCardStyleProps = {
  ...baseBoxStyleProps,
  showProgress: true,
};

const containerStyleProps = {
  alignItems: 'center',
  background: '#fdf4fb',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  p: exampleCardPadding,
};

<Flex {...containerStyleProps}>
  <Box {...baseBoxStyleProps}>
    <CodeBlock code="// Passed in through Props" />
    <Card
      cardActions={ExampleCardActions01}
      cardActionsRight={ExampleCardActions02}
      cardBody={ExampleCardBody01}
      cardRichMedia={ExampleCardImage02}
      cardSubtitle="Secondary text"
      cardThumbnail={ExampleCardThumbnail01}
      cardTitle="Card title"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseBoxStyleProps}>
    <CodeBlock code="// Using subComponents" />
    <Card cardPadding={0} pb={exampleCardPadding} {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Flex alignItems="center" p={exampleCardPadding}>
        {ExampleCardThumbnail01}
        <Box pl={exampleCardPadding}>
          <Card.Title>
            Card title
          </Card.Title>
          <Card.Subtitle>
            Secondary text
          </Card.Subtitle>
        </Box>
      </Flex>
      <Card.Body pb={exampleCardPadding} px={exampleCardPadding}>
        {ExampleCardBody01}
      </Card.Body>
      <Card.Actions justifyContent="space-between" px={exampleCardPadding}>
        {ExampleCardActions01}
        {ExampleCardActions02}
      </Card.Actions>
    </Card>
  </Box>
  <Box {...baseBoxStyleProps}>
    <CodeBlock code="// Passed in through Props" />
    <Card
      cardActions={ExampleCardActions01}
      cardActionsRight={ExampleCardActions02}
      cardBody={ExampleCardBody01}
      cardSecondaryMedia={ExampleCardImage01}
      cardSubtitle="Secondary text"
      cardThumbnail={ExampleCardThumbnail01}
      cardTitle="Card title"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseBoxStyleProps}>
    <CodeBlock code="// Using subComponents" />
    <Card cardPadding={0} pb={exampleCardPadding} {...baseCardStyleProps}>
      <Flex alignItems="center" p={exampleCardPadding}>
        {ExampleCardThumbnail01}
        <Box pl={exampleCardPadding}>
          <Card.Title>
            Card title
          </Card.Title>
          <Card.Subtitle>
            Secondary text
          </Card.Subtitle>
        </Box>
      </Flex>
      <Card.SecondaryMedia>
        {ExampleCardImage02}
      </Card.SecondaryMedia>
      <Card.Body p={exampleCardPadding}>
        {ExampleCardBody01}
      </Card.Body>
      <Card.Actions justifyContent="space-between" px={exampleCardPadding}>
        {ExampleCardActions01}
        {ExampleCardActions02}
      </Card.Actions>
    </Card>
  </Box>
</Flex>
```

#### Hide Card

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Card } from 'src/elements/Card';
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
  <Card isHidden={hide}>
    <Card.Body>
      <Flex flexDirection={['column', 'row']}>
        <Box px={1}>
        <Text>
          Hideable
        </Text>
        </Box>
      </Flex>
    </Card.Body>
  </Card>
</ThemeProvider>
```
