The Image component in grape-ui was built upon [react-image](https://www.npmjs.com/package/react-image). `<Image>` is set to a default `width` and a `maxWidth` of 100%. The `alt` attribute is a requirement for the `<Image>`, and descriptive alt content is recommended for the image. [Here is a great article from Moz to know what kind of alt text is considered to be optimal](https://moz.com/learn/seo/alt-text).

```jsx in Markdown
import exampleImg from './examples/nacho-dominguez-argenta-cCVzi_mKovs-unsplash.jpg';
import { Image } from './';
import { Link } from 'src/elements/typography';

const exampleAlt = "Green grapes hanging from a vine; Photo by Nacho Domínguez Argenta on Unsplash";

const imageLink = "https://unsplash.com/@nachoargenta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";

<Link
  href={imageLink}
  target="_blank"
>
  <Image
    alt={exampleAlt}
    src={exampleImg}
  />
  Photo by Nacho Domínguez Argenta on Unsplash
</Link>
```

`<Image>` also utilizes the `layout` functions found in Styled System that can be used to define values in different screen resolutions.  For full list of what `layout` brings, [visit styled-system's API docs on it](https://styled-system.com/api#layout).

```jsx in Markdown
import ImageSrc01 from './examples/nacho-dominguez-argenta-cCVzi_mKovs-unsplash.jpg';
import { Image } from './';
import { Paragraph } from 'src/elements/typography';

const altText01 = "Green grapes hanging from a vine; Photo by Nacho Domínguez Argenta on Unsplash";

<div>
  <Image
    alt={altText01}
    src={ImageSrc01}
    width={[1, 1 / 2, 1 / 3, 1 / 4]}
  />
  <Paragraph fontFamily="monospace">
    width=&#123;[1, 1 / 2, 1 / 3, 1 / 4]&#125;
  </Paragraph>å
  <Image
    alt={altText01}
    display={['block', 'inline']}
    src={ImageSrc01}
  />
  <Paragraph fontFamily="monospace">
    display=&#123;['block', 'inline']&#125;
  </Paragraph>
  <Image
    alt={altText01}
    minWidth={128}
    src={ImageSrc01}
  />
  <Paragraph fontFamily="monospace">
    minWidth=&#123;128&#125;
  </Paragraph>
  <Image
    alt={altText01}
    maxWidth={1024}
    src={ImageSrc01}
  />
  <Paragraph fontFamily="monospace">
    maxWidth=&#123;1024&#125;
  </Paragraph>
  <Image
    alt={altText01}
    height={[48, 64]}
    src={ImageSrc01}
  />
  <Paragraph fontFamily="monospace">
    height=&#123;[48, 64]&#125;
  </Paragraph>
  <Image
    alt={altText01}
    minHeight={[384, 512]}
    src={ImageSrc01}
  />
  <Paragraph fontFamily="monospace">
    minHeight=&#123;[384, 512]&#125;
  </Paragraph>
  <Image
    alt={altText01}
    src={ImageSrc01}
    maxHeight={[384, 512]}
  />
  <Paragraph fontFamily="monospace">
    maxHeight=&#123;[384, 512]&#125;
  </Paragraph>
</div>
```
