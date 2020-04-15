There are times when inline text needs the a different font property. All of the base styles can be applied to `<Text>`, which can be utilized nested inside any typography element.

```jsx inside Markdown
import { Paragraph } from '../index';

<Paragraph>
  If I want to highlight an individual word
  <Text color="red">red</Text>
  , or make it
  <Text fontWeight="bold">bold</Text>
  , or
  <Text color="red" fontWeight="bold">both</Text>
  {', I can just use the inline '}
  <code>&lt;Text&gt;</code>
  {' element.'}
</Paragraph>
```
