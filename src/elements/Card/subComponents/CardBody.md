Card body is reserved for the content of the card.  It appears below the secondary media area and above the actions area.  It is a [`<Box>`](#/Flexbox/Components/Box) component.

#### Examples

```jsx in Markdown
import { Card } from 'src/elements/Card';
import { Box, Flex } from 'src/elements/grid';

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
  <Box {...baseCardStyleProps}>
    <Card
      cardBody="This is the body."
      {...baseCardStyleProps}
    />
  </Box>
</Flex>
```

### List of Props

| Prop Name | Passed Props | SubComponent | Root Component | Default Props | Description |
| - | - | - | - | - | - |
| `cardBody` | `cardBodyProps` | `<Card.Body>` | [`<Box>`](#/Flexbox/Components/Box) | None | Container for the body content of the card. |
