```jsx in Markdown
import { HashRouter as Router } from 'react-router-dom';
import { Header, Link, Paragraph } from './';
import { Box, Flex } from 'src/elements/grid';

<Router>
  <Header.h3>Typography</Header.h3>
  <Flex flexWrap="wrap">
    <Box p={[2, 3]} width={[1, null, 1 / 2, 1 / 3]}>
      <Link lg to="./Components/Header">Header</Link>
      <Paragraph>Learn about our header title tags.</Paragraph>
    </Box>
    <Box p={[2, 3]} width={[1, null, 1 / 2, 1 / 3]}>
      <Link lg to="./Components/Link">Link</Link>
      <Paragraph>Learn about link components.</Paragraph>
    </Box>
    <Box p={[2, 3]} width={[1, null, 1 / 2, 1 / 3]}>
      <Link lg to="./Components/List">List</Link>
      <Paragraph>Learn about list components.</Paragraph>
    </Box>
    <Box p={[2, 3]} width={[1, null, 1 / 2, 1 / 3]}>
      <Link lg to="./Components/ListItem">ListItem</Link>
      <Paragraph>Learn about list components.</Paragraph>
    </Box>
    <Box p={[2, 3]} width={[1, null, 1 / 2, 1 / 3]}>
      <Link lg to="./Components/Paragraph">Paragraph</Link>
      <Paragraph>Learn about paragraph components.</Paragraph>
    </Box>
    <Box p={[2, 3]} width={[1, null, 1 / 2, 1 / 3]}>
      <Link lg to="./Components/Text">Text</Link>
      <Paragraph>Learn about text components.</Paragraph>
    </Box>
  </Flex>
</Router>
```