When adding in links, you can use `<Link>`. What's cool about this tag is that it will determine if it should use React Router's `<Link>` or `<a>`.

> <small>**NOTE:** A Router needs to be defined if using Link the React Router way.</small>

```jsx in Markdown
import { BrowserRouter as Router } from 'react-router-dom';
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'

<Router>
  <Flex flexDirection="column">
    <Link to="./">By using <code>to</code>, it is using React Router.</Link>
    <Link href="#">Leaving out <code>to</code>, it is using a native anchor tag.</Link>
    <Link href="mailto:respin@napa.com">
      Emailing will also use the native anchor tag when using <code>href=&quot;mailto:emailaddress@grape-ui.com&quot;</code>.
    </Link>
  </Flex>
</Router>
```