The `Progress` component is used to indicate to users the status of ongoing processes such as loading state of a page or a form submission.

#### Linear Progess Indicators

```jsx in Markdown
import { css, keyframes } from 'styled-components';
import { Card } from 'src/elements/Card';
import { Flex } from 'src/elements/grid';
import {
  CodeBlock,
  Paragraph,
} from 'src/elements/typography';

const customKeyframe = keyframes`
  0% {
    background-color: red;
    opacity: 0.7;
    width: 0%;
  }
  20% {
    background-color: orange;
    width: 10%;
  }
  29% {
    width: 40%;
  }
  30% {
    background-color: yellow;
    width: 50%;
  }
  50% {
    background-color: green;
    width: 70%;
  }
  70% {
    background-color: blue;
    width: 75%;
  }
  80% {
    width: 77%;
  }
  93% {
    width: 90%;
  }
  100% {
    background-color: purple;
    opacity: 1;
    width: 100%;
  }
`;

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
    description: 'Determinate linear indicators may have transparent tracks.',
    example: (
      <Progress
        indicatorColor="red"
        isDeterminate
        trackColor="white.dark"
      />
    ),
    subtitle: 'Custom Colors',
    title: 'Determinate Progress',
  },
  {
    description: 'Indeterminate linear indicators may have transparent tracks.',
    example: (
      <Progress
        indicatorColor="orange"
        trackColor="#e0ffff"
      />
    ),
    subtitle: 'Custom Colors',
    title: 'Indeterminate Progress',
  },
  {
    description: 'Linear indicators can have custom animations via styled props.',
    example: (
      <Progress
        animationDuration="5s"
        animationName={
          // styled components keyframes and css functions
          css`${customKeyframe}`
        }
        caption={(
          <Flex
            justifyContent="flex-end"
            py={2}
          >
            <Progress
              animationDuration="5s"
              diameter={20}
              isDeterminate
              loop={false}
              progressType="circular"
              strokeWidth={2}
            />
          </Flex>
        )}
        loop={false}
      />
    ),
    subtitle: 'Custom Animations',
    title: 'Custom Progress',
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
          caption={`3/5`}
          total={5}
          value={3}
        />
      </div>
    ),
    subtitle: 'Custom Captions, Values, and Totals',
    title: 'Manual Progress',
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
import { css, keyframes } from 'styled-components';
import { Card } from 'src/elements/Card';
import { Flex } from 'src/elements/grid';
import {
  CodeBlock,
  Paragraph,
} from 'src/elements/typography';

const customKeyframe = props => keyframes`
  0% {
    stroke: rgba(50, 205, 50, 0.5);
    stroke-dashoffset: ${props.circumference};
  }
  50% {
    stroke: rgba(50, 205, 50, 1);
  }
  100% {
    stroke: rgba(50, 205, 50, 0.4);
    stroke-dashoffset: ${-1 * props.circumference};
  }
`;

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
    description: 'Determinate circular indicators fill the linear track with color, as the indicator moves from 0% to 100%.',
    example: (
      <Progress
        isDeterminate
        progressType="circular"
      />
    ),
    subtitle: 'Base Example',
    title: 'Determinate Progress',
  },
  {
    description: 'Indeterminate circular indicators grow and shrink in size while moving along the track.',
    example: <Progress progressType="circular" />,
    subtitle: 'Base Example',
    title: 'Indeterminate Progress',
  },
  {
    description: 'Determinate circular indicators may have transparent tracks.',
    example: (
      <Progress
        hideTrack
        isDeterminate
        progressType="circular"
      />
    ),
    subtitle: 'Hidden track',
    title: 'Determinate Progress',
  },
  {
    description: 'Indeterminate circular indicators may have transparent tracks.',
    example: (
      <Progress
        hideTrack
        progressType="circular"
      />
    ),
    subtitle: 'Hidden track',
    title: 'Indeterminate Progress',
  },
  {
    description: 'Determinate circular indicators may have transparent tracks.',
    example: (
      <Progress
        indicatorColor="red"
        isDeterminate
        progressType="circular"
        trackColor="white.dark"
      />
    ),
    subtitle: 'Custom Colors',
    title: 'Determinate Progress',
  },
  {
    description: 'Indeterminate circular indicators may have transparent tracks.',
    example: (
      <Progress
        indicatorColor="orange"
        progressType="circular"
        trackColor="blue"
      />
    ),
    subtitle: 'Custom Colors',
    title: 'Indeterminate Progress',
  },
  {
    description: 'Circular indicators can have custom animations via styled props.',
    example: (
      <Progress
        animationDuration="1s"
        animationName={
          // styled components keyframes and css functions
          css`${customKeyframe}`
        }
        hideTrack
        progressType="circular"
      />
    ),
    subtitle: 'Custom Animations',
    title: 'Custom Progress',
  },
  {
    description: 'Determinate circular indicators can also be provided with custom values and/or totals.',
    example: (
      <div>
        <Progress
          caption="10% of 100%"
          captionProps={{
            textAlign: 'center'
          }}
          progressType="circular"
          value={10}
        />
        <Progress
          caption={`3/5`}
          captionProps={{
            textAlign: 'center'
          }}
          progressType="circular"
          total={5}
          value={3}
        />
      </div>
    ),
    subtitle: 'Custom Captions, Values, and Totals',
    title: 'Manual Progress',
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
