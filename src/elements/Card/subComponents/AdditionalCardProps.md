| Prop Name | Passed Props | SubComponent | Root Component | Default Props | Description |
| - | - | - | - | - | - |
| N/A | `cardInnerProps` | N/A | [`<Box>`](#/Flexbox/Components/Box) | None | Only for card components where props are passed through. Intended to control the padding of the card.  Contains the contents of `cardThumbnail`, `cardTitle`, `cardSubtitle`, `cardSecondaryMedia`, and the `children` of `<Card>`. |

#### `cardInnerProps` Example

```jsx is Markdown
import { Button } from 'src/elements/Button';
import { Card } from 'src/elements/Card';
import { Flex } from 'src/elements/grid';
import { Image } from 'src/elements/Image';
import { Header, Paragraph } from 'src/elements/typography';

const getRandomBill = (min, max, ratio) => {
  const numberX = Math.floor(Math.random() * (max - min) + min);
  const numberY = Math.floor(numberX / ratio);
  return `http://www.fillmurray.com/${numberX}/${numberY}`;
}

const ExampleActions01 = (
  <div>
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </div>
);

const ExampleActions02 = (
  <Button>🍕</Button>
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
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};

<Flex {...containerStyleProps}>
  <Card
    cardActions={ExampleActions01}
    cardActionsRight={ExampleActions02}
    cardBody={ExampleBody01}
    cardInnerProps={{ background: '#ece3ea', borderBottom: '5px solid rebeccapurple' }}
    cardSubtitle="Secondary text"
    cardThumbnail={ExampleThumbnail01}
    cardTitle="Card title"
    {...baseCardStyleProps}
  />
  <Card
    cardActions={ExampleActions01}
    cardActionsRight={ExampleActions02}
    cardBody={ExampleBody01}
    cardInnerProps={{ background: '#ece3ea', borderBottom: '5px solid rebeccapurple' }}
    cardSecondaryMedia={ExampleCardImage02}
    cardSubtitle="Secondary text"
    cardThumbnail={ExampleThumbnail01}
    cardTitle="Card title"
    {...baseCardStyleProps}
  />
</Flex>
```
