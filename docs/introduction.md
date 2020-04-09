## Getting Started
These instructions will allow you to use the extensible grape-ui component library in any React project.

### Prerequisites
* [ReactJS](https://reactjs.org/)
* [Styled Components](https://www.styled-components.com/)
* [React-Router](https://reacttraining.com/react-router/)
* [GemFury](https://gemfury.com/)

### Installing
Add grape-ui as a dependency to your project
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
Import grape-ui components into your project
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
