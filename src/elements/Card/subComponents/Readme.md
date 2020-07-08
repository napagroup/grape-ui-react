The `<Card>` is made up of multiple subComponents that can be worked with directly, or handled via props.  Here are some more details of all the props and subComponents for a card, sorted in order of appearance on the UI from top to bottom:

## Visual Anatomy

```jsx in Markdown
import { Card } from 'src/elements/Card';
import { Flex } from 'src/elements/grid';
import { CodeBlock } from 'src/elements/typography';

const codeCardActions = `cardActions
cardActionsProps
<Card.Actions />
`;

const codeCardActionsLeft = `cardActionsLeft
cardActionsLeftProps
<Card.ActionsLeft />
`;

const codeCardActionsRight = `cardActionsRight
cardActionsRightProps
<Card.ActionsRight />
`;

const codeCardBody = `cardBody
cardBodyProps
<Card.Body />
`;

const codeCardRichMedia = `cardRichMedia
cardRichMediaProps
<Card.RichMedia />
`;

const codeCardSecondaryMedia = `cardSecondaryMedia
cardSecondaryMediaProps
<Card.SecondaryMedia />
`;

const codeCardSubtitle = `cardSubtitle
cardSubtitleProps
<Card.Subtitle />
`;

const codeCardThumbnail = `cardThumbnail
cardThumbnailProps
<Card.Thumbnail />
`;

const codeCardTitle = `cardTitle
cardTitleProps
<Card.Title />
`;

const containerStyleProps = {
  alignItems: 'center',
  background: '#fdf4fb',
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};

<Flex {...containerStyleProps}>
  <Card
    cardActions={
      <CodeBlock
        code={
          codeCardActions
        }
      />
    }
    cardActionsProps={{
      flexDirection: ['column', 'row'],
    }}
    cardActionsLeft={
      <CodeBlock
        code={
          codeCardActionsLeft
        }
      />
    }
    cardActionsRight={
      <CodeBlock
        code={
          codeCardActionsRight
        }
      />
    }
    cardBody={
      <CodeBlock
        code={
          codeCardBody
        }
      />
    }
    cardRichMedia={
      <CodeBlock
        code={
          codeCardRichMedia
        }
      />
    }
    cardSecondaryMedia={
      <CodeBlock
        code={
          codeCardSecondaryMedia
        }
      />
    }
    cardSubtitle={
      <CodeBlock
        code={
          codeCardSubtitle
        }
      />
    }
    cardThumbnail={
      <CodeBlock
        code={
          codeCardThumbnail
        }
      />
    }
    cardTitle={
      <CodeBlock
        code={
          codeCardTitle
        }
      />
    }
  />
</Flex>

```

## SubComponent Directory

### [Card Media](#/Card/Subcomponents/Card%20Media)

The area of card reserved for images, videos, or any other media that is meant to in the card.

Includes:

* Rich Media (Area at the very top of the card)
  * `cardRichMedia`
  * `cardRichMediaProps`
  * `<Card.RichMedia>`
* Secondary Media (Area below the card header)
  * `cardSecondaryMedia`
  * `cardSecondaryMediaProps`
  * `<Card.SecondaryMedia>`

***

### [Card Header](#/Card/Subcomponents/Card%20Header)

The area of card reserved for the top area of the card.

Includes:

* `cardHeaderProps`
* Thumbnail
  * `cardThumbnail`
  * `cardThumbnailProps`
  * `<Card.Thumbnail>`
* Title
  * `cardTitle`
  * `cardTitleProps`
  * `<Card.Title>`
* Subtitle
  * `cardSubtitle`
  * `cardSubtitleProps`
  * `<Card.Subtitle>`

***

### [Card Body](#/Card/Subcomponents/Card%20Body)

The area of card reserved for body of the card.

Includes:

* `cardBody`
* `cardBodyProps`
* `<Card.Body>`

***

### [Card Actions](#/Card/Subcomponents/Card%20Actions)

The area of card reserved for the top area of the card.

Includes:

* Actions Area
  * `cardActions`
  * `cardActionsProps`
  * `<Card.Actions>`
* Actions Left Area
  * `cardActionsLeft`
  * `cardActionsLeftProps`
* Actions Right Area
  * `cardActionsRight`
  * `cardActionsRightProps`

***

### [Additional Card Props](#/Card/Subcomponents/Additional%20Card%20Props)

The rest of the props reserved for the card.

Includes:

* `cardInnerProps`
  * `cardActionsProps`
  * `<Card.Actions>`
* Actions Left Area
  * `cardActionsLeft`
  * `cardActionsLeftProps`
* Actions Right Area
  * `cardActionsRight`
  * `cardActionsRightProps`

***
