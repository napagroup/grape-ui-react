HOWDY

```jsx is Markdown
import { Button } from 'src/elements/Button';
import { Flex } from 'src/elements/grid';
import { Image } from 'src/elements/Image';
import { Header, Paragraph } from 'src/elements/typography';

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

const getRandomBill = (min, max, ratio) => {
  const numberX = Math.floor(Math.random() * (max - min) + min);
  const numberY = Math.floor(numberX / ratio);
  console.log({numberX});
  console.log({numberY});
  return `http://www.fillmurray.com/${numberX}/${numberY}`;
}

const ExampleCardImage01 = (
  <Image
    display="block" // be sure to mark this as block or else the image can cause unwanted spacing on the bottom of the card
    src={getRandomBill(400, 1000, 16 / 9)}
    title="Placeholder photo from FillMurray.com"
  />
);

const baseCardStyleProps = {
  m: 1,
  maxWidth: 300,
  width: 1,
};

<div>
  <Header.h3 textAlign="center">Basic Card</Header.h3>
  <Flex
    alignItems="center"
    flexDirection={['column', 'row']}
    justifyContent="space-evenly"
    mb={[2, 3]}
    width={1}
  >
    <Card
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
    </Card>
  </Flex>

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
</div>
```
