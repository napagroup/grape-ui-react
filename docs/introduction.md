## Getting Started
These instructions will allow you to use the extensible 🍇UI component library in any React project.

### Prerequisites
* [ReactJS](https://reactjs.org/)
* [Styled Components](https://www.styled-components.com/)
* [GemFury](https://gemfury.com/)

### Installing
Add 🍇UI as a dependency to your project
```bash
npm install grape-ui-react
```
or
```json
"dependencies": {
  ...
  "grape-ui-react": "git+https://bitbucket.org/napagroupnyc/grape-ui-react/grape-ui-react.git",
  ...
},
```

### Usage
Import 🍇UI components into your project
```jsx static
import { Paragraph } from 'grape-ui-react';
```
Use the components in your app
```jsx static
render() {
  return (
    <div className="App">
      ...
      <Paragraph>Grape is Groovy</Paragraph>
      ...
    </div>
  );
};
```
And that's it!
