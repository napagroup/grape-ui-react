```jsx in Markdown
import { HashRouter as Router } from 'react-router-dom';
import { Header, Link, Paragraph } from 'src/elements/typography';
import { Box, Flex } from './';

<Router>
  <Header.h3>Flexbox</Header.h3>
  <Flex flexWrap="wrap">
    <Box p={[2, 3]} width={[1, null, 1 / 2, 1 / 3]}>
      <Link lg to="./Components/Box">Box</Link>
      <Paragraph>Learn about our box component.</Paragraph>
    </Box>
    <Box p={[2, 3]} width={[1, null, 1 / 2, 1 / 3]}>
      <Link lg to="./Components/Flex">Flex</Link>
      <Paragraph>Learn about flex component.</Paragraph>
    </Box>
  </Flex>
</Router>
```