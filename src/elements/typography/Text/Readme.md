There are times when inline text needs the a different font property. All of the base styles can be applied to `<Text>`, which can be utilized nested inside any typography element.

```jsx inside Markdown
import { Code, Paragraph } from 'src/elements/typography';

<Paragraph>
  If I want to highlight an individual word
  <Text color="red">red</Text>
  , or make it
  <Text fontWeight="bold">bold</Text>
  , or
  <Text color="red" fontWeight="bold">both</Text>
  {', I can just use the inline '}
  <Code code="<Text>" />
  {' element.'}
</Paragraph>
```

#### Hide Text

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from 'src/elements/Button';
import { Paragraph } from 'src/elements/typography';

const [hide, setHidden] = useState(false);
<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Paragraph>
    <Text isHidden={hide}>
      This text is hideable.
    </Text>
  </Paragraph>
</ThemeProvider>
```
