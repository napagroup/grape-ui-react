The grid found in grape-ui is a Flexbox Grid that was created using [styled-system](https://styled-system.com/).

A lot of the props for these components were created using styled-system's functions.

**Both `<Flex>` and `<Box>` use:**

* `background` [(API)](https://styled-system.com/api#background)
* `border` [(API)](https://styled-system.com/api#border)
* `flexbox` [(API)](https://styled-system.com/api#flexbox)
* `grid` [(API)](https://styled-system.com/api#grid)
* `layout` [(API)](https://styled-system.com/api#layout)
* `position` [(API)](https://styled-system.com/api#position)
* `shadow` [(API)](https://styled-system.com/api#shadow)
* `space` [(API)](https://styled-system.com/api#space)

`<Flex>` is meant to be used as the parent container, where as `<Box>` is meant to be used as the child item.  A great article on how to approach Flexbox design can be found [here on css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Here are some examples that were based on the examples found in the above article:

#### CSS Tricks Example 1 [source](https://codepen.io/team/css-tricks/pen/EKEYob)

```jsx in Markdown
import {
  Box,
  Flex,
} from './'; // ... from 'grape-ui-react';
import styled from 'styled-components';

const TomatoBox = styled(Box)`
  background: tomato;
  line-height: 150px;
  color: white;
  font-weight: bold;
  font-size: 3em;
  text-align: center;
`;

TomatoBox.defaultProps = {
  maxWidth: 200,
  height: 150,
  mt: 1,
  p: 1,
  width: 200,
};

<Flex
  flexDirection="row"
  flexWrap="wrap"
  justifyContent="space-around"
>
  <TomatoBox>1</TomatoBox>
  <TomatoBox>2</TomatoBox>
  <TomatoBox>3</TomatoBox>
  <TomatoBox>4</TomatoBox>
  <TomatoBox>5</TomatoBox>
  <TomatoBox>6</TomatoBox>
</Flex>
```

#### CSS Tricks Example 2 [source](https://codepen.io/team/css-tricks/pen/YqaKYR)

```jsx in Markdown
import {
  Box,
  Flex
} from './'; // ... from 'grape-ui-react';
import { Link } from 'src/elements/typography';
import styled from 'styled-components';

const NavLink = styled(Link)``;

NavLink.defaultProps = {
  color: 'white',
  display: 'block',
  p: [1, 2, 3],
  textAlign: 'center',
  textDecoration: 'none',
};

<Flex
  flexDirection={['column', 'row']}
  flexWrap="wrap"
  justifyContent={
    ['space-around', null, 'flex-end']
  }
  style={{ background: 'deepskyblue' }}
>
  <NavLink href="#">Home</NavLink>
  <NavLink href="#">About</NavLink>
  <NavLink href="#">Products</NavLink>
  <NavLink href="#">Contact</NavLink>
</Flex>
```

#### CSS Tricks Example 3 [source](https://codepen.io/chriscoyier/pen/vWEMWw)

```jsx in Markdown
import {
  Box,
  Flex,
} from './'; // ... from 'grape-ui-react';
import { Paragraph } from '../typography';
import styled from 'styled-components';

const BaseBox = styled(Box)``;

BaseBox.defaultProps = {
  flex: '1 100%',
  p: 3,
};

const BoxAside = styled(BaseBox)`
  background: ${props => props.bg};
`;
const BoxFooter = styled(BaseBox)`
  background: lightgreen;
`;
const BoxHeader = styled(BaseBox)`
  background: tomato;
`;
const BoxMain = styled(BaseBox)`
  background: skyblue;
  text-align: left;
`;

BoxAside.defaultProps = {
  flex: [null, '1 0 0'],
}

const FlexWrapper = styled(Flex)`
  font-weight: bold;
  text-align: center;
`;

FlexWrapper.defaultProps = {
  flexDirection: ['column', 'row'],
  flexWrap: 'wrap',
};

<FlexWrapper>
  <BoxHeader>
    Header
  </BoxHeader>
  <BoxMain
    flex={[null, null, '3 0px']}
    order={[null, null, 2]}
  >
    <Paragraph>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
    </Paragraph>
  </BoxMain>
  <BoxAside
    bg="gold"
    order={[null, null, 1]}
  >
    Aside 1
  </BoxAside>
  <BoxAside
    bg="hotpink"
    order={[null, null, 3]}
  >
    Aside 2
  </BoxAside>
  <BoxFooter
    order={[null, null, 4]}
  >
    Footer
  </BoxFooter>
</FlexWrapper>
```
