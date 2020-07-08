When adding in links, you can use `<Link>`. What's cool about this tag is that it will determine if it should use React Router's `<Link>` or `<a>`.

**NOTE:** A Router needs to be defined if using Link the React Router way.

```jsx in Markdown
import { BrowserRouter as Router } from 'react-router-dom';
import { Flex } from 'src/elements/grid'; // ... from 'grape-ui-react'
import { Code } from 'src/elements/typography';

<Router>
  <Flex
    flexDirection="column"
  >
    <Link to="./">
      {'By using '}
      <Code code="to" />
      , it is using React Router.
    </Link>
    <Link href="#">
      {'Leaving out '}
      <Code code="to" />
      , it is using a native anchor tag.
    </Link>
    <Link
      href="http://www.google.com"
      target="_blank"
    >
      {'Basic '}
      <Code code="target" />
      {' attribute works as well.'}
    </Link>
    <Link
      emailHref={{
        to: 'emailaddress@grapeui.com'
      }}>
      {'For mailto links '}
      <Code code={'href="mailto:emailaddress@grape-ui.com"'} />
      .
    </Link>
    <Link
      emailHref={{
        bcc: 'bcc@grapeui.com, bcc2@grapeui.com',
        body: 'WHOAAAAAAAAAAA big body.',
        cc: 'cc@grapeui.com',
        subject: 'Kitchen Sink Example',
      }}
    >
      Kitchen sink email example.
    </Link>
  </Flex>
</Router>
```

#### Hide Link

```jsx inside Markdown
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Flex } from 'src/elements/grid';
import { Button } from 'src/elements/Button';

const [hide, setHidden] = useState(false);
<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Router>
    <Flex
      flexDirection="column"
    >
      <Link href="#" isHidden={hide}>
        Hideable Link
      </Link>
    </Flex>
  </Router>
</ThemeProvider>
```
