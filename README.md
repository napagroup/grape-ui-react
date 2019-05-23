# Grape UI

# Project Title
A React component library built with styled-components.

## Getting Started
These instructions will allow you to use the extensible Grape UI component library in any React project.

### Prerequisites
- ReactJS
- Styled Components



## Setting up your npm registry on Gemfury

[https://gemfury.com/help/npm-registry](https://gemfury.com/help/npm-registry)

To start using your npm registry, you will need to update your npm config:

```
npm config set registry https://npm.fury.io/napadev/
```

It is important to include a trailing slash in the registry URL, otherwise npm may incorrectly connect to our registry.

At this point, you can start to npm install public packages from your account.

```
npm install
```

To publish and install private packages, you will first authenticate with your Gemfury credentials. If you do not have a token, you will have to [create one](https://manage.fury.io/manage/napadev/tokens/push):

```
npm login --registry=https://npm.fury.io/napadev/

Username: napadev
Password: ${PUSH_TOKEN}
Email: dev@napa.com
```

### Publish GrapeUI to Gemfury

Once logged in, you can npm publish and npm install private packages from your Gemfury account.

```
npm run publish
```

### Installing GrapeUI on your project
Add GrapeUI as a dependency to your project

```
"dependencies": {
  ...
    "grape-ui-react": "^0.4.0",
  ...
},
```
Login to gemfury with the napa account:
```
  npm login --registry=https://npm.fury.io/napadev/
```

Import Grape UI components into your project

```
import { Button } from 'grape-ui-react';
```

Use the components in your app

```
render() {
  return (
    <div className="App">
      ...
        <Button>Grape UI Button</Button>
      ...
    </div>
  );
}
```

## Running the tests
To run all the tests
```
  npm run test
```

## Built With
* [styled-components](https://github.com/styled-components/styled-components) - The visual primitives library used.
