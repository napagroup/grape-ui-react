The `Progress Bar` component is used to indicate to users the status of ongoing processes such as loading state of a page or a form submission.

#### Linear Progess Indicators

```jsx in Markdown
import { Card } from 'src/elements/Card';
import { Flex } from 'src/elements/grid';
import {
  CodeBlock,
  Paragraph,
} from 'src/elements/typography';

const baseCardStyleProps = {
  m: 1,
  width: [1, 1 / 2.5],
};

const containerStyleProps = {
  alignItems: 'center',
  background: '#f9e8d7',
  flexDirection: ['column', 'row'],
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};

const examples = [
  {
    description: 'Determinate linear indicators fill the linear track with color, as the indicator moves from 0% to 100%.',
    example: <Progress isDeterminate />,
    subtitle: 'Base Example',
    title: 'Determinate Progress',
  },
  {
    description: 'Indeterminate linear indicators grow and shrink in size while moving along the track.',
    example: <Progress />,
    subtitle: 'Base Example',
    title: 'Indeterminate Progress',
  },
  {
    description: 'Determinate linear indicators may have transparent tracks.',
    example: (
      <Progress
        hideTrack
        isDeterminate
      />
    ),
    subtitle: 'Hidden track',
    title: 'Determinate Progress',
  },
  {
    description: 'Indeterminate linear indicators may have transparent tracks.',
    example: <Progress hideTrack />,
    subtitle: 'Hidden track',
    title: 'Indeterminate Progress',
  },
  {
    description: 'Determinate linear indicators can also be provided with custom values and/or totals.',
    example: (
      <div>
        <Progress
          caption="10% of 100%"
          value={10}
        />
        <Progress
          caption="3/5"
          total={5}
          value={3}
        />
      </div>
    ),
    subtitle: 'Custom Values and Totals',
    title: 'Determinate Progress',
  }
];

const exampleCards = examples.map((example) =>
  <Card
    cardBody={(
      <div>
        {example.example}
        <CodeBlock
          code={example.example}
        />
        <Paragraph
          mb={0}
          mt={2}
        >
          {example.description}
        </Paragraph>
      </div>
    )}
    cardSubtitle={example.subtitle}
    cardTitle={example.title}
    {...baseCardStyleProps}
  />
);

<Flex {...containerStyleProps}>
  {exampleCards}
</Flex>

```

#### Circular Progess Indicators

```jsx in Markdown

import { Card } from 'src/elements/Card';
import {
  Box,
  Flex,
} from 'src/elements/grid';

const baseCardStyleProps = {
  m: 1,
  maxWidth: 300,
  width: 1,
};

const containerStyleProps = {
  alignItems: 'center',
  background: '#f9e8d7',
  flexDirection: ['column', 'row'],
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};
const detText = 'Determinate circular indicators fill the circular track with color, as the indicator moves from 0 to 360 degrees.';
const inDetText = 'Indeterminate circular indicators grow and shrink in size while moving along the track.';

<Flex {...containerStyleProps}>
  <Card
    cardBody={(
      <Progress
        isDeterminate
        progressType="circular"
      />
    )}
    cardSubtitle={detText}
    cardTitle="Determinate progress"
    {...baseCardStyleProps}
  />
  <Card
    cardBody={(
      <Progress
        isDeterminate={false}
        progressType="circular"
      />
    )}
    cardSubtitle={inDetText}
    cardTitle="Indeterminate progress"
    {...baseCardStyleProps}
  />
  <Card
    cardBody={(
      <Progress
        hideTrack
        isDeterminate
        progressType="circular"
      />
    )}
    cardSubtitle={detText}
    cardTitle="Determinate progress (hideTrack)"
    {...baseCardStyleProps}
  />
  <Card
    cardBody={(
      <Progress
        hideTrack
        isDeterminate={false}
        progressType="circular"
      />
    )}
    cardSubtitle={inDetText}
    cardTitle="Indeterminate progress (hideTrack)"
    {...baseCardStyleProps}
  />
  <Card
    cardBody={(
      <Progress
        progressType="circular"
        total={12}
        value={10.85}
      />
    )}
    cardSubtitle={detText}
    cardTitle="Manual Progress Value"
    {...baseCardStyleProps}
  />
</Flex>

```
