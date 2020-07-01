The `Progress Bar` component is used to indicate to users the status of ongoing processes such as loading state of a page or a form submission.

#### Linear Progess Indicators

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
      <Progress isDeterminate />
    )}
    cardSubtitle={detText}
    cardTitle="Determinate progress"
    {...baseCardStyleProps}
  />
  <Card
    cardBody={(
      <Progress isDeterminate={false} />
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
      />
    )}
    cardSubtitle={inDetText}
    cardTitle="Indeterminate progress (hideTrack)"
    {...baseCardStyleProps}
  />
  <Card
    cardBody={(
      <Progress
        total={6}
        value={5}
      />
    )}
    cardSubtitle={detText}
    cardTitle="Manual Progress Value"
    {...baseCardStyleProps}
  />
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
