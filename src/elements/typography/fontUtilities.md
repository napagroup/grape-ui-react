Here are some more utilities that could be used:

* `ellipsis`
* `fontWeight`
* `italic`
* `kerning`
* `textAlign`
* `textDecoration`

```jsx in Markdown
import {
  Code,
  Paragraph,
  Text,
} from './index';

<div>
  <Paragraph
    ellipsis
  >
    {'Set '}
    <Code codeString="ellipsis" />
    {' to true if you want the sentence to end in a single line. Set '}
    <Code codeString="ellipsis" />
    {' to true if you want the sentence to end in a single line.'}
  </Paragraph>
  <Paragraph
    ellipsis={2}
  >
    {'Set '}
    <Code codeString="ellipsis" />
    {' to a number if you want the sentence to end at N line.'}
    {'Set '}
    <Code codeString="ellipsis" />
    {' to a number if you want the sentence to end at N line.'}
    {'Set '}
    <Code codeString="ellipsis" />
    {' to a number if you want the sentence to end at N line.'}
    {'Set '}
    <Code codeString="ellipsis" />
    {' to a number if you want the sentence to end at N line.'}
  </Paragraph>
  <Paragraph>
    {'Add '}
    <Code codeString="fontWeight" />
    {' to make text '}
    <Text
      fontWeight="300"
    >
      Different
    </Text>
    {' '}
    <Text
      fontWeight="500"
    >
      font
    </Text>
    {' '}
    <Text
      fontWeight="700"
    >
      weights
    </Text>
    {'.  Just define the value.'}
  </Paragraph>
  <Paragraph>
    {'Add '}
    <Code codeString="italic" />
    {' to make text '}
    <Text italic>
      Italic
    </Text>
  </Paragraph>
  <Paragraph>
    {'Add '}
    <Code codeString="kerning" />
    {' to adjust the spacing '}
    <Text
      kerning="1px"
    >
      between
    </Text>
    {' '}
    <Text
      kerning="0.25rem"
    >
      letters
    </Text>
    .  Just use any numeric value to adjust.
  </Paragraph>
  <Paragraph>
    {'Add '}
    <Code codeString="textAlign" />
    {' to align any text element. Just use any '}
    <Code codeString="text-align" language="css" />
    {' property as the value.'}
  </Paragraph>
  <Paragraph
    textAlign="left"
  >
    Left Aligned
    <br />
    <Code codeString={'textAlign="left"'} />
    {' is set.'}
  </Paragraph>
  <Paragraph
    textAlign="center"
  >
    Center Aligned
    <br />
    <Code codeString={'textAlign="center"'} />
    {' is set.'}
  </Paragraph>
  <Paragraph
    textAlign="right"
  >
    Right Aligned
    <br />
    <Code codeString={'textAlign="right"'} />
    {' is set.'}
  </Paragraph>
  <Paragraph>
    {'Add '}
    <Code codeString="textDecoration" />
    {' to set '}
    <Text
      textDecoration="underline"
    >
      one
    </Text>
    {' or '}
    <Text
      textDecoration="line-through"
    >
      {' more '}
    </Text>
    <Text
      textDecoration="underline overline"
    >
      text-decorations.
    </Text>
  </Paragraph>
</div>
```
