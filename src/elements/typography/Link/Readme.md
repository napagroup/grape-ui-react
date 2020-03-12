When adding in links, you can use `<Link>`. What's cool about this tag is that it will determine if it should use React Router's `<Link>` or `<a>`.

> <small>**NOTE:** A Router needs to be defined if using Link the React Router way.</small>

```jsx in Markdown
import { BrowserRouter as Router } from 'react-router-dom';
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'

<Router>
  <Flex flexDirection="column">
    <Link to="./">By using <code>to</code>, it is using React Router.</Link>
    <Link href="#">Leaving out <code>to</code>, it is using a native anchor tag.</Link>
    <Link href="http://www.google.com" target="_blank">Basic <code>target</code> attribute works as well.</Link>
    <Link emailHref={{ to: 'emailaddress@grape-ui.com' }}>
      For mailto links <code>href=&quot;mailto:emailaddress@grape-ui.com&quot;</code>.
    </Link>
    <Link emailHref={{
      bcc: 'bcc@grape-ui.com, bcc2@grape-ui.com',
      body: 'WHOAAAAAAAAAAA big body.',
      cc: 'cc@grape-ui.com',
      subject: 'Kitchen Sink Example',
    }}>
      Kitchen sink email example.
    </Link>
  </Flex>
</Router>
```