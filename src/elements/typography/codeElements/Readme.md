When showing example code, `<Code>` and `<CodeBlock>` are the components you should use.  It is built on top of the powerful [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) and uses the same utilities that can be found on all typography elements in grape-ui.  Just provide your code as a string in the `codeString` prop, and you're ready to go.

* `<Code>`: for inline code.
* `<CodeBlock>`: for block code.

### Examples

```jsx in Markdown
import { CodeBlock } from 'src/elements/typography';

const exampleCode01 = `<Code codeString={exampleCode01} />`;
const exampleCode02 = `
import React from 'react';
import { Paragraph } from 'grape-ui-react';
const App = () => {
  return (
    <div className="App">
      <Paragraph>
        grape-ui is Groovy
      </Paragraph>
    </div>
  )
};
export default App;

`;
const exampleCode03 = "npm i grape-ui-react";
const exampleCode04 = `

![grape-ui logo](http://www.grapeui.com/assets/images/grape-ui-header-logo.svg)

## Getting Started

These instructions will allow you to use the extensible grape-ui component library in any React project.

### Prerequisites

* [ReactJS](https://reactjs.org/)
* [Styled Components](https://www.styled-components.com/)

### Installing

Add grape-ui as a dependency to your project

\`\`\`bash
npm install grape-ui-react
\`\`\`

### Usage

Import grape-ui components into your project

\`\`\`jsx static
import { Paragraph } from 'grape-ui-react';
\`\`\`

Use the components in your app

\`\`\`jsx static
render() {
  return (
    <div className="App">
      ...
      <Paragraph>grape-ui is Groovy</Paragraph>
      ...
    </div>
  );
};
\`\`\`

And that's it!

`;

<div>
  <Code
    codeString={exampleCode01}
  />
  <CodeBlock
    codeString={exampleCode02}
  />
  <CodeBlock
    codeString={exampleCode03}
    language="bash"
  />
  <CodeBlock
    codeString={exampleCode04}
    language="markdown"
  />
</div>
```

The base styling for this is based off of the colors provided in ThemeProvider. For additional tools and info, please refer to [react-syntax-highlighter's docs](https://github.com/conorhastings/react-syntax-highlighter).

#### Hide Code & CodeBlock

```jsx inside Markdown
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Box,
  Flex,
} from 'src/elements/grid';
import { Button } from 'src/elements/Button';
import { CodeBlock } from 'src/elements/typography';

const exampleCode01 = `<Code codeString={exampleCode01} isHidden={hide} />`;
const exampleCode02 = `
const [hide, setHidden] = useState(false);

<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <Code
        codeString={exampleCode01}
        isHidden={hide}
      />
      <CodeBlock
        codeString={exampleCode02}
        isHidden={hide}
      />
    </Box>
  </Flex>
</ThemeProvider>
`;
const [hide, setHidden] = useState(false);

<ThemeProvider theme={{}}>
  <Button
    onClick={() => setHidden(!hide)}
  >
    Toggle Visibility
  </Button>
  <Flex flexDirection={['column', 'row']}>
    <Box px={1} width={[1, 1 / 2]}>
      <Code
        codeString={exampleCode01}
        isHidden={hide}
      />
      <CodeBlock
        codeString={exampleCode02}
        isHidden={hide}
      />
    </Box>
  </Flex>
</ThemeProvider>
```
