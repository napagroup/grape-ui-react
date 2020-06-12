The `<Card>` component is meant to be easy for quick designs that match Material's guidelines, while still allowing for styled-system's built in styling functions.  When defining the base spacing settings for your `<Card>`, please use the prop `cardPadding` to define props.  This will assure that al of the additional prop provided areas having the proper spacing.

**Note:** if you are using `<Card>` via subComponents, please default `cardPadding: 0`.

#### `cardPadding` Example

```jsx is Markdown
import { Button } from 'src/elements/Button';
import { Card } from 'src/elements/Card';
import { Box, Flex } from 'src/elements/grid';
import { Image } from 'src/elements/Image';
import { CodeBlock, Paragraph } from 'src/elements/typography';

const getRandomBill = (min, max, ratio) => {
  const numberX = Math.floor(Math.random() * (max - min) + min);
  const numberY = Math.floor(numberX / ratio);
  return `http://www.fillmurray.com/${numberX}/${numberY}`;
}

const ExampleActions01 = (
  <div>
    <Button bg="brandPrimary" bgHoverColor="brandPrimary.light" color="white" m={0} mr={1}>Action</Button>
    <Button bg="brandPrimary" bgHoverColor="brandPrimary.light" color="white" m={0} ml={1}>Action</Button>
  </div>
);

const ExampleActions02 = (
  <Button m={0}>⛳️</Button>
);

const ExampleBody01 = (
  <Paragraph mb={0}>
    Bacon ipsum dolor amet drumstick pork chop cupim tenderloin picanha short ribs landjaeger chicken, strip steak venison.
  </Paragraph>
);

const ExampleCardImage01 = (
  <Image
    alt="Placeholder photo from FillMurray.com"
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(400, 1000, 4 / 3)}
  />
);

const ExampleThumbnail01 = (
  <Image
    alt="Placeholder photo from FillMurray.com"
    borderRadius="50%"
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(40, 100, 1 / 1)}
    width={40}
  />
);

const baseCardStyleProps = {
  m: 1,
  maxWidth: 300,
  width: 1,
};

const containerStyleProps = {
  alignItems: 'center',
  background: '#fdf4fb',
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};

const codeStringProps = `// Passed in through Props
// cardPadding using default value
`;

const codeStringSub = `// Using subComponents
// cardPadding: 0
`;

<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <CodeBlock codeString={codeStringProps} />
    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardBody={ExampleBody01}
      cardSecondaryMedia={ExampleCardImage01}
      cardSubtitle="Secondary text"
      cardThumbnail={ExampleThumbnail01}
      cardTitle="Card title"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <CodeBlock codeString={codeStringSub} />
    <Card cardPadding={0}  pb={[2, null, 3]} {...baseCardStyleProps}>
      <Flex alignItems="center" p={[2, null, 3]}>
        <Card.Thumbnail>
          {ExampleThumbnail01}
        </Card.Thumbnail>
        <Box pl={[2, null, 3]}>
          <Card.Title>
            Card title
          </Card.Title>
          <Card.Subtitle>
            Secondary text
          </Card.Subtitle>
        </Box>
      </Flex>
      <Card.SecondaryMedia>
        {ExampleCardImage01}
      </Card.SecondaryMedia>
      <Card.Body p={[2, null, 3]}>
        {ExampleBody01}
      </Card.Body>
      <Card.Actions justifyContent="space-between" px={[2, null, 3]}>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>
  </Box>
</Flex>
```
