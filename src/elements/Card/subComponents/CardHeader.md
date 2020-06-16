The header is comprised of a thumbnail, title, and subtitle.

### Card Title

Card title is the reserved spot for the title of the card in the header.  When provided a string, the content will render as a [`<Header.h5>`](#/Typography/Components/Header). If its provided with an object, it will just render the object in a [`<Box>`](#/Flexbox/Components/Box) component.

#### Card Title Example

```jsx in Markdown
import { Card } from 'src/elements/Card';
import { Box, Flex } from 'src/elements/grid';
import { Text } from 'src/elements/typography';

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

const CustomExample = () => (
  <Flex>
    <Box background="#4ea0a2" borderBottom="8px solid #a2504e" pb={1} px={3} pt={2}>
      <Text color="white">Custom</Text>
    </Box>
    <Box background="#a2504e" borderBottom="8px solid #4ea0a2" pb={1} px={3} pt={2}>
      <Text color="white">Component</Text>
    </Box>
  </Flex>
);

<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardTitle="Card Title"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardTitle={<CustomExample />}
      {...baseCardStyleProps}
    />
  </Box>
</Flex>
```

#### Card Title Props

| Prop Name | Passed Props | SubComponent | Root Component | Default Props | Description |
| - | - | - | - | - | - |
| `cardTitle` | `cardTitleProps` | `<Card.Title>` | [`<Header.h5>`](#/Typography/Components/Header) or [`<Box>`](#/Flexbox/Components/Box) | `mb: 0` | The title of the card. If provided a string, it will render in a `<Header.h5>`, otherwise, it will render in a `<Box>`. |

### Card Subtitle

Card Subtitle is the reserved spot for the subtitle of the card in the header.  When provided a string, the content will render as a [`<Paragraph>`](#/Typography/Components/Paragraph). If its provided with an object, it will just render the object as is in a [`<Box>`](#/Flexbox/Components/Box) component.

#### Card Subtitle Example

```jsx in Markdown
import { Card } from 'src/elements/Card';
import { Box, Flex } from 'src/elements/grid';
import { Text } from 'src/elements/typography';

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

const CustomExample = () => (
  <Flex>
    <Box background="#4ea0a2" borderBottom="8px solid #a2504e" pb={1} px={3} pt={2}>
      <Text color="white">Custom</Text>
    </Box>
    <Box background="#a2504e" borderBottom="8px solid #4ea0a2" pb={1} px={3} pt={2}>
      <Text color="white">Component</Text>
    </Box>
  </Flex>
);

<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle="Card Subtitle"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={<CustomExample />}
      {...baseCardStyleProps}
    />
  </Box>
</Flex>
```

#### Card Subtitle Props

| Prop Name | Passed Props | SubComponent | Root Component | Default Props | Description |
| - | - | - | - | - | - |
| `cardSubtitle` | `cardSubtitleProps` | `<Card.Subtitle>` | [`<Paragraph>`](#/Typography/Components/Paragraph) | `color: 'gray', mb: 0, sm: true` | The subtitle of the card. If provided a string, it will render in a `<Paragraph>`, otherwise, it will render in a `<Box>`. |

### Card Thumbnail

Card Thumbnail is the reserved spot for the thumbnail area of the card in the header.  It is simply a [`<Box>`](#/Flexbox/Components/Box) component.

#### Card Thumbnail Example

```jsx in Markdown
import { Card } from 'src/elements/Card';
import { Box, Flex } from 'src/elements/grid';
import { Image } from 'src/elements/Image';
import { Text } from 'src/elements/typography';

const getRandomBill = (min, max, ratio) => {
  const numberX = Math.floor(Math.random() * (max - min) + min);
  const numberY = Math.floor(numberX / ratio);
  return `http://www.fillmurray.com/${numberX}/${numberY}`;
}

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

const ExampleThumbnail01 = (
  <Image
    alt="Placeholder photo from FillMurray.com"
    borderRadius="50%"
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(40, 100, 1 / 1)}
    width={40}
  />
);

<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardThumbnail={ExampleThumbnail01}
      {...baseCardStyleProps}
    />
  </Box>
</Flex>
```

#### Card Thumbnail Props

| Prop Name | Passed Props | SubComponent | Root Component | Default Props | Description |
| - | - | - | - | - | - |
| `cardThumbnail` | `cardThumbnailProps` | `<Card.Thumbnail>` | [`<Box>`](#/Flexbox/Components/Box) | None | Defines placements for the thumbnail area. Intended for a 40px image circle, but can hold any content. |

### Examples Together

```jsx in Markdown
import { Card } from 'src/elements/Card';
import { Box, Flex } from 'src/elements/grid';
import { Image } from 'src/elements/Image';
import { Text } from 'src/elements/typography';

const getRandomBill = (min, max, ratio) => {
  const numberX = Math.floor(Math.random() * (max - min) + min);
  const numberY = Math.floor(numberX / ratio);
  return `http://www.fillmurray.com/${numberX}/${numberY}`;
}

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

const ExampleThumbnail01 = (ratio) => (
  <Image
    alt="Placeholder photo from FillMurray.com"
    borderRadius="50%"
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(40, 100, ratio)}
    width={40}
  />
);

<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle="Card Subtitle"
      cardThumbnail={ExampleThumbnail01(1)}
      cardTitle="Card Title"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardThumbnail={ExampleThumbnail01(1)}
      cardTitle="Card Title"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle="Card Subtitle"
      cardThumbnail={ExampleThumbnail01(1)}
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle="Card Subtitle"
      cardTitle="Card Title"
      {...baseCardStyleProps}
    />
  </Box>
</Flex>
```

### Additional Props

| Prop Name | Passed Props | SubComponent | Root Component | Default Props | Description |
| - | - | - | - | - | - |
| N/A | `cardHeaderProps` | N/A | [`<Flex>`](#/Flexbox/Components/Flex) | `alignItems: 'center'` | A surrounding flex container for the header area that contains the thumbnail, title, and subtitle. |
| N/A | `cardTitleContainerProps` | N/A | [`<Box>`](#/Flexbox/Components/Box) | None | A surrounding container for the title and subtitle. |
