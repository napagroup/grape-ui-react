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
  background: '#e0e0e0',
  flexDirection: ['column', 'row'],
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};
const detText = 'Determinate circular indicators fill the circular track with color, as the indicator moves from 0 to 360 degrees.';
const inDetText = 'Indeterminate circular indicators grow and shrink in size while moving along the track.';
<>
<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={detText}
      cardTitle="Determinate progress"
      {...baseCardStyleProps}
    >
      <Progress
        duration={8}
        hideTrack
        isDeterminate
        loop
        progressType="linear"
      />
    </Card>
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={inDetText}
      cardTitle="Indeterminate progress"
      {...baseCardStyleProps}
    >
      <Progress
        hideTrack
        isDeterminate={false}
        progressType="linear"
      />
    </Card>
  </Box>
</Flex>
<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={detText}
      cardTitle="Determinate progress (filled)"
      {...baseCardStyleProps}
    >
      <Progress
        duration={4}
        isDeterminate
        loop
        progressType="linear"
      />
    </Card>
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={inDetText}
      cardTitle="Indeterminate progress (filled)"
      {...baseCardStyleProps}
    >
      <Progress
        duration={8}
        isDeterminate={false}
        progressType="linear"
      />
    </Card>
  </Box>
</Flex>
</>

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
  background: '#e0e0e0',
  flexDirection: ['column', 'row'],
  justifyContent: 'space-evenly',
  p: [2, null, 3],
};
const circularDetText = 'Determinate circular indicators fill the circular track with color, as the indicator moves from 0 to 360 degrees.';
const circularInDetText = 'Indeterminate circular indicators grow and shrink in size while moving along the track.';
<>
<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={circularDetText}
      cardTitle="Determinate progress"
      {...baseCardStyleProps}
    >
      <Progress
        hideTrack
        isDeterminate
      />
    </Card>
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={circularInDetText}
      cardTitle="Indeterminate progress"
      {...baseCardStyleProps}
    >
      <Progress
        hideTrack
        isDeterminate={false}
      />
    </Card>
  </Box>
</Flex>
<Flex {...containerStyleProps}>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={circularDetText}
      cardTitle="Determinate progress (filled)"
      {...baseCardStyleProps}
    >
      <Progress
        isDeterminate
        indicatorColor="indigo.dark"
        trackColor="brandLight.dark"
      />
    </Card>
  </Box>
  <Box {...baseCardStyleProps}>
    <Card
      cardSubtitle={circularInDetText}
      cardTitle="Indeterminate progress (filled)"
      {...baseCardStyleProps}
    >
      <Progress
        isDeterminate={false}
        indicatorColor="indigo.dark"
        trackColor="brandLight.dark"
      />
    </Card>
  </Box>
</Flex>
</>

```
