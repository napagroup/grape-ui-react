`<Paragraph>` are useful for defining blocks of text. It takes on all base text styles and adds a margin of the gutter size to the bottom of the element.

```jsx in Markdown
<div>
  <Paragraph>
    This paragraph is normal.
  </Paragraph>
  <Paragraph lg>
    This paragraph is large.
  </Paragraph>
  <Paragraph sm>
    This paragraph is small.
  </Paragraph>
  <Paragraph
    color="brandPrimary"
  >
    This paragraph is set to a custom brand primary color.
  </Paragraph>
  <Paragraph
    color="gray"
  >
    Ellipsis examples down below.
  </Paragraph>
  <Paragraph
    ellipsis
  >
    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.
  </Paragraph>
  <Paragraph
    ellipsis={4}
  >
    "What's happened to me?" he thought. It wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.
  </Paragraph>
</div>
```

### Lead Paragraphs

To define a lead paragraph, just add `lead` to `<Paragraph>`.

```jsx in Markdown
import { Code } from 'src/elements/typography';

<Paragraph lead>
  {'This is a lead paragraph. It is leading and meant to start off a block of text. This is using '}
  <Code codeString="<Paragraph lead>" />
  .
</Paragraph>
```

#### Hide Paragraph

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'src/elements/Button';

const [hide, setHidden] = useState(false);
<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
<Paragraph isHidden={hide}>
  This paragraph is hideable.
</Paragraph>
</ThemeProvider>
```
