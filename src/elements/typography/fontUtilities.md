Here are some more utilities that could be used:

* `ellipsis`
* `fontWeight`
* `italic`
* `kerning`
* `textAlign`
* `textDecoration`

```jsx in Markdown
import { Paragraph, Text } from './index';

<div>
  <Paragraph ellipsis>Set <code>ellipsis</code> to true if you want the sentence to end in a single line. Set <code>ellipsis</code> to true if you want the sentence to end in a single line.</Paragraph>
  <Paragraph ellipsis={2}>Set <code>ellipsis</code> to a number if you want the sentence to end at N line. Set <code>ellipsis</code> to a number if you want the sentence to end at N line. Set <code>ellipsis</code> to a number if you want the sentence to end at N line. Set <code>ellipsis</code> to a number if you want the sentence to end at N line. </Paragraph>
  <Paragraph>Add <code>fontWeight</code> to make text <Text fontWeight="300">Different</Text> <Text fontWeight="500">font</Text> <Text fontWeight="700">weights</Text>.  Just define the value.</Paragraph>
  <Paragraph>Add <code>italic</code> to make text <Text italic>Italic</Text></Paragraph>
  <Paragraph>Add <code>kerning</code> to adjust the spacing <Text kerning="1px">between</Text> <Text kerning="0.25rem">letters</Text>.  Just use any numeric value to adjust.</Paragraph>
  <Paragraph>Add <code>textAlign</code> to align any text element.  Just use any <code>text-align</code> property as the value.</Paragraph>
  <Paragraph textAlign="left">Left Aligned<br /><code>textAlign=&quot;left&quot;</code> is set.</Paragraph>
  <Paragraph textAlign="center">Center Aligned<br /><code>textAlign=&quot;center&quot;</code> is set.</Paragraph>
  <Paragraph textAlign="right">Right Aligned<br /><code>textAlign=&quot;right&quot;</code> is set.</Paragraph>
  <Paragraph>Add <code>textDecoration</code> to set <Text textDecoration="underline">one</Text> or <Text textDecoration="line-through"> more</Text> <Text textDecoration="underline overline">text-decorations.</Text></Paragraph>
</div>
```
