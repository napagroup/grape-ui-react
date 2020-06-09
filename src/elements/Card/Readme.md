The `Card` component is intended to convey content and actions relating to a single idea.  In `grape-ui`, you can use `Card` and pass in contents via its props, its children, or via sub components.

#### Basic Example

```jsx is Markdown
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
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};

<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <CodeBlock codeString="// Passed in through Props" />
    <Card
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />
  </Box>
  <Box {...baseCardStyleProps}>
    <CodeBlock codeString="// Using subComponents" />
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

### `cardPadding`

The `<Card>` component is meant to be easy for quick designs that match Material's guidelines, while still allowing for styled-system's built in styling functions.  When defining the base spacing settings for your `<Card>`, please use the prop `cardPadding` to define props.  This will assure that al of the additional prop provided areas having the proper spacing.

**Note:** if you are using `<Card>` via subComponents, please default `cardPadding: 0`.

#### `cardPadding` Example

```jsx is Markdown
import { Button } from 'src/elements/Button';
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
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>
  </Box>
</Flex>
```

### Component Props

Here is a list of all the props and subComponents for a card, sorted in order of appearance on the UI from top to bottom:

| Prop Name | Passed Props |Subcomponent Name | Parent Component | Default Props | Description |
| - | - | - | - | - | - |
| `cardRichMedia` | `cardRichMediaProps` | `<Card.RichMedia>` | [`<Box>`](#/Flexbox/Components/Box) | `width: 1` | Intended for media to be displayed at the top of the card.  Usually an image, but can be other content. **NOTE:** Should not be used with `cardSecondaryMedia`. |
| N/A | `cardInnerProps` | N/A | [`<Box>`](#/Flexbox/Components/Box) | None | Only for card components where props are passed through. Intended to control the padding of the card.  Contains the contents of `cardThumbnail`, `cardTitle`, `cardSubtitle`, `cardSecondaryMedia`, and the `children` of `<Card>`. |
| N/A | `cardHeaderProps` | N/A | [`<Flex>`](#/Flexbox/Components/Flex) | `alignItems: 'center'` | A surrounding flex container for the header area that contains the thumbnail, title, and subtitle. |
| `cardThumbnail` | `cardThumbnailProps` | `<Card.Thumbnail>` | [`<Box>`](#/Flexbox/Components/Box) | None | Defines placements for the thumbnail area. Intended for a 40px image circle, but can hold any content. |
| N/A | `cardTitleContainerProps` | N/A | [`<Box>`](#/Flexbox/Components/Box) | None | A surrounding container for the title and subtitle. |
| `cardTitle` | `cardTitleProps` | `<Card.Title>` | [`<Header.h5>`](#/Typography/Components/Header) | `mb: 0` | The title of the card. |
| `cardSubtitle` | `cardSubtitleProps` | `<Card.Subtitle>` | [`<Paragraph>`](#/Typography/Components/Paragraph) | `color: 'gray', mb: 0, sm: true` | The subtitle of the card. |
| `cardSecondaryMedia` | `cardSecondaryMediaProps` | `<Card.SecondaryMedia>` | [`<Box>`](#/Flexbox/Components/Box) | `width: 1` | Intended for media to be displayed under the header area.  Usually an image, but can be other content. **NOTE:** Should not be used with `cardRichMedia`. |
| `cardBody` | `cardBodyProps` | `<Card.Body>` | [`<Box>`](#/Flexbox/Components/Box) | None | Container for the body content of the card. |
| `cardActions` | `cardActionsProps` | `<Card.Actions>` | [`<Flex>`](#/Flexbox/Components/Flex) | `pb: cardPadding` | Container for the action area of the card that appears on the bottom. |
| `cardActionsLeft` | `cardActionsLeftProps` | N/A | [`<Box>`](#/Flexbox/Components/Box) | None | Container for the left side area of the actions area. **NOTE:** Items will only appear on the left side if no elements are passed through `cardActions`. |
| `cardActionsRight` | `cardActionsRightProps` | N/A | [`<Box>`](#/Flexbox/Components/Box) | None | Container for the right side area of the actions area. |

#### Kitchen Sink Example

```jsx is Markdown
import { Button } from 'src/elements/Button';
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

<div>


  <Header.h3 textAlign="center">Card w/ Rich Media</Header.h3>
  <Flex
    alignItems="center"
    flexDirection={['column', 'row']}
    flexWrap="wrap"
    justifyContent="space-evenly"
    width={1}
  >
    <Card
      cardRichMedia={ExampleCardImage01}
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
    </Card>

    <Card
      cardRichMedia={ExampleCardImage01}
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
    </Card>

  </Flex>

  <Header.h3 textAlign="center">Card w/ Body</Header.h3>
  <Flex
    alignItems="center"
    flexDirection={['column', 'row']}
    flexWrap="wrap"
    justifyContent="space-evenly"
    width={1}
  >
    <Card
      cardBody={ExampleBody01}
      cardRichMedia={ExampleCardImage01}
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.Body>
        {ExampleBody01}
      </Card.Body>
    </Card>

    <Card
      cardBody={ExampleBody01}
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.Body>
        {ExampleBody01}
      </Card.Body>
    </Card>

    <Card
      cardBody={ExampleBody01}
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Body>
        {ExampleBody01}
      </Card.Body>
    </Card>

  </Flex>

  <Header.h3 textAlign="center">Card w/ Action Buttons</Header.h3>
  <Flex
    alignItems="center"
    flexDirection={['column', 'row']}
    flexWrap="wrap"
    justifyContent="space-evenly"
    width={1}
  >
    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardBody={ExampleBody01}
      cardRichMedia={ExampleCardImage01}
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.Body>
        {ExampleBody01}
      </Card.Body>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardRichMedia={ExampleCardImage01}
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardRichMedia={ExampleCardImage01}
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

  </Flex>

  <Header.h3 textAlign="center">Card w/ Action Buttons</Header.h3>
  <Flex
    alignItems="center"
    flexDirection={['column', 'row']}
    flexWrap="wrap"
    justifyContent="space-evenly"
    width={1}
  >
    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardBody={ExampleBody01}
      cardRichMedia={ExampleCardImage01}
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.Body>
        {ExampleBody01}
      </Card.Body>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardRichMedia={ExampleCardImage01}
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardRichMedia={ExampleCardImage01}
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.RichMedia>
        {ExampleCardImage01}
      </Card.RichMedia>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

  </Flex>

  <Header.h3 textAlign="center">Card w/ Thumbnail</Header.h3>
  <Flex
    alignItems="center"
    flexDirection={['column', 'row']}
    flexWrap="wrap"
    justifyContent="space-evenly"
    width={1}
  >
    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardBody={ExampleBody01}
      cardSubtitle="Secondary text"
      cardThumbnail={ExampleThumbnail01}
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Thumbnail>
        {ExampleThumbnail01}
      </Card.Thumbnail>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.Body>
        {ExampleBody01}
      </Card.Body>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

    <Card
      cardSubtitle="Secondary text"
      cardTitle="Card title"
      cardThumbnail={ExampleThumbnail01}
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Thumbnail>
        {ExampleThumbnail01}
      </Card.Thumbnail>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
    </Card>

    <Card
      cardThumbnail={ExampleThumbnail01}
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Thumbnail>
        {ExampleThumbnail01}
      </Card.Thumbnail>
      <Card.Title>
        Card title
      </Card.Title>
    </Card>
  </Flex>

  <Header.h3 textAlign="center">Card w/ Secondary Media</Header.h3>
  <Flex
    alignItems="center"
    flexDirection={['column', 'row']}
    flexWrap="wrap"
    justifyContent="space-evenly"
    width={1}
  >
    <Card
      cardActions={ExampleActions01}
      cardActionsRight={ExampleActions02}
      cardBody={ExampleBody01}
      cardSecondaryMedia={ExampleCardImage02}
      cardSubtitle="Secondary text"
      cardThumbnail={ExampleThumbnail01}
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Thumbnail>
        {ExampleThumbnail01}
      </Card.Thumbnail>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.SecondaryMedia>
        {ExampleCardImage02}
      </Card.SecondaryMedia>
      <Card.Body>
        {ExampleBody01}
      </Card.Body>
      <Card.Actions>
        {ExampleActions01}
        {ExampleActions02}
      </Card.Actions>
    </Card>

    <Card
      cardBody={ExampleBody01}
      cardSecondaryMedia={ExampleCardImage02}
      cardSubtitle="Secondary text"
      cardThumbnail={ExampleThumbnail01}
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Thumbnail>
        {ExampleThumbnail01}
      </Card.Thumbnail>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.SecondaryMedia>
        {ExampleCardImage02}
      </Card.SecondaryMedia>
      <Card.Body>
        {ExampleBody01}
      </Card.Body>
    </Card>

    <Card
      cardSecondaryMedia={ExampleCardImage02}
      cardSubtitle="Secondary text"
      cardThumbnail={ExampleThumbnail01}
      cardTitle="Card title"
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.Thumbnail>
        {ExampleThumbnail01}
      </Card.Thumbnail>
      <Card.Title>
        Card title
      </Card.Title>
      <Card.Subtitle>
        Secondary text
      </Card.Subtitle>
      <Card.SecondaryMedia>
        {ExampleCardImage02}
      </Card.SecondaryMedia>
    </Card>

    <Card
      cardSecondaryMedia={ExampleCardImage02}
      {...baseCardStyleProps}
    />

    <Card {...baseCardStyleProps}>
      <Card.SecondaryMedia>
        {ExampleCardImage02}
      </Card.SecondaryMedia>
    </Card>

  </Flex>
</div>
```
