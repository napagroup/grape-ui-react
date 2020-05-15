When showing example code, `<CodeBlock>` is the component you should use.  It is built on top of the powerful [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter) and uses the same utilities that can be found on all typography elements in grape-ui.  Just provide your code as a string in the `codeString` prop, and you're ready to go.

### Examples

```jsx in Markdown
const exampleCode01 = `<CodeBlock codeString={exampleCode01} />`;
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
  <CodeBlock
    codeString={exampleCode01}
    display="inline-block"
  />
  <CodeBlock codeString={exampleCode02} />
  <CodeBlock codeString={exampleCode03} language="bash" />
  <CodeBlock codeString={exampleCode04} language="markdown" />
</div>
```

For additional tools and info, please refer to [react-syntax-highlighter's docs](https://github.com/conorhastings/react-syntax-highlighter).
