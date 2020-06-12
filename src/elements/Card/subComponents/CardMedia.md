Media displayed on the card could be defined as either **Rich Media** or **Secondary Media**.  Rich media appears at the very top of the card, above the card's header.  Secondary Media appears directly below the card's header.  It is not advised to use both.

Both Rich Media and Secondary Media can be accessed via props or subcomponets.  It is an extension of the [`<Box>`](#/Flexbox/Components/Box) component, therefore the media container can contain any DOM elements.

#### Examples

```jsx in Markdown
import { Card } from 'src/elements/Card';
import { Box, Flex } from 'src/elements/grid';
import { Image } from 'src/elements/Image';

const getRandomBill = (min, max, ratio) => {
  const numberX = Math.floor(Math.random() * (max - min) + min);
  const numberY = Math.floor(numberX / ratio);
  return `http://www.fillmurray.com/${numberX}/${numberY}`;
};

const baseCardStyleProps = {
  m: 1,
  maxWidth: 300,
  width: 1,
};

const containerStyleProps = {
  alignItems: 'center',
  background: '#fdf4fb',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};

const ExampleCardImage = (ratio) => (
  <Image
    alt="Placeholder photo from FillMurray.com"
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(400, 1000, ratio)}
  />
);

<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardRichMedia={ExampleCardImage(4/3)}
      cardSubtitle="cardRichMedia"
      cardSubtitleProps={{ fontFamily: 'monospace' }}
      cardTitle="Rich Media"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardSecondaryMedia={ExampleCardImage(16/9)}
      cardSubtitle="cardSecondaryMedia"
      cardSubtitleProps={{ fontFamily: 'monospace' }}
      cardTitle="Secondary Media"
      {...baseCardStyleProps}
    />
  </Box>

  <Box {...baseCardStyleProps}>
    <Card
      cardPadding={0}
      {...baseCardStyleProps}
    >
      <Card.RichMedia>
        {ExampleCardImage(16/9)}
      </Card.RichMedia>
      <Box p={[2, null, 3]}>
        <Card.Title>
          Rich Media
        </Card.Title>
        <Card.Subtitle fontFamily="monospace">
          {`<Card.RichMedia />`}
        </Card.Subtitle>
      </Box>
    </Card>
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardPadding={0}
      {...baseCardStyleProps}
    >
      <Box p={[2, null, 3]}>
        <Card.Title>
          Secondary Media
        </Card.Title>
        <Card.Subtitle fontFamily="monospace">
          {`<Card.SecondaryMedia />`}
        </Card.Subtitle>
      </Box>
      <Card.SecondaryMedia>
        {ExampleCardImage(4/3)}
      </Card.SecondaryMedia>
    </Card>
  </Box>
</Flex>
```

### List of Props

| Prop Name | Passed Props | SubComponent | Root Component | Default Props | Description |
| - | - | - | - | - | - |
| `cardRichMedia` | `cardRichMediaProps` | `<Card.RichMedia>` | [`<Box>`](#/Flexbox/Components/Box) | `width: 1` | Intended for media to be displayed at the top of the card.  Usually an image, but can be other content. **NOTE:** Should not be used with `cardSecondaryMedia`. |
| `cardSecondaryMedia` | `cardSecondaryMediaProps` | `<Card.SecondaryMedia>` | [`<Box>`](#/Flexbox/Components/Box) | `width: 1` | Intended for media to be displayed under the header area.  Usually an image, but can be other content. **NOTE:** Should not be used with `cardRichMedia`. |
