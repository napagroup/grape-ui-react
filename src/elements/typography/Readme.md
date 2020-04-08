### "Typography is the craft of endowing human language with a durable visual form.”

&mdash; Robert Bringhurst, [The Elements of Typographic Style](https://www.amazon.com/Elements-Typographic-Style-Version-Anniversary/dp/088179211X/ref=dp_ob_title_bk)

Typography is important in grape-ui.  Here is an example using the typography components in grape-ui based on [an example from Simon Friffee](https://www.simongriffee.com/typography/)

```jsx in Markdown
import {
  Header,
  Link,
  List,
  ListItem,
  Paragraph,
  Text,
} from '/';

<div>
  <Header>The Earth <br /><Text italic>The Starting Point</Text></Header>
  <Paragraph lead>One night when I had tasted bitterness I went out on to the hill. Dark heather checked my feet. Below marched the suburban lamps.</Paragraph>
  <Paragraph>Windows, their curtains drawn, were shut eyes, inwardly watching the lives of dreams. Beyond the sea’s level darkness a lighthouse pulsed. Overhead, obscurity. I distinguished our own house, our islet in the tumultuous and bitter currents of the world. There, for a decade and a half, we two, so different in quality, had grown in and in to one another, for mutual support and nourishment, in intricate symbiosis. There daily we planned our several undertakings, and recounted the day’s oddities and vexations. There letters piled up to be answered, socks to be darned. There the children were born, those sudden new lives. There, under that roof, our own two lives, recalcitrant sometimes to one another, were all the while thankfully one, one larger, more <Link href="http://www.astro.sunysb.edu/fwalter/AST389/TEXTS/StarMaker.pdf">conscious life</Link> than either alone.</Paragraph>
  <Header.h2>All This, Surely, Was Good</Header.h2>
  <Paragraph>Yet there was bitterness. And bitterness not only invaded us from the world; it welled up also within our own magic circle. For horror at our futility, at our own unreality, and not only at the world’s delirium, had driven me out on to the hill.</Paragraph>
  <Paragraph>We were always hurrying from one little urgent task to another, but the upshot was insubstantial. Had we, perhaps, misconceived our whole existence? Were we, as it were, living from false premises? And in particular, this partnership of ours, this seemingly so well-based fulcrum for activity in the world, was it after all nothing but a little eddy of complacent and ingrown domesticity, ineffectively whirling on the surface of the great flux, having in itself no depth of being, and no significance? Had we perhaps after all deceived ourselves? Behind those rapt windows did we, like so many others, indeed live only a dream? In a sick world even the hale are sick. And we two, spinning our little life mostly by rote, seldom with clear cognizance, seldom with firm intent, were products of a sick world.</Paragraph>
  <Paragraph>Yet this life of ours was not all sheer and barren fantasy. Was it not spun from the actual fibres of reality, which we gathered in with all the comings and goings through our door, all our traffic with the suburb and the city and with remoter cities, and with the ends of the earth? And were we not spinning together an authentic expression of our own nature? Did not our life issue daily as more or less firm threads of active living, and mesh itself into the growing web, the intricate, ever-proliferating pattern of mankind?</Paragraph>

  <Header.h3>I Considered “Us” With Quiet Interest</Header.h3>

  <Paragraph>And a kind of amused awe. How could I describe our relationship even to myself without either disparaging it or insulting it with the tawdry decoration of sentimentality? For this our delicate balance of dependence and independence, this coolly critical, shrewdly ridiculing, but loving mutual contact, was surely a microcosm of true community, was after all in its simple style an actual and living example of that high goal which the world seeks.</Paragraph>

  <blockquote>
    <Paragraph>I reflected that not one of the visible features of this celestial and living gem revealed the presence of man. Displayed before me, though invisible, were some of the most congested centers of human population. There below me lay huge industrial regions, blackening the air with smoke. Yet all this thronging life and humanly momentous enterprise had made no mark whatever on the features of the planet. From this high look-out the Earth would have appeared no different before the dawn of man. No visiting angel, or explorer from another planet, could have guessed that this bland orb teemed with vermin, with world-mastering, self-torturing, incipiently angelic beasts. <Text sm>— Olaf Stapledon, <cite title="Star Maker">Star Maker</cite></Text></Paragraph>
  </blockquote>

  <Paragraph>The whole world? The whole universe? Overhead, obscurity unveiled a star. One tremulous arrow of light, projected how many thousands of years ago, now stung my nerves with vision, and my heart with fear. For in such a universe as this what significance could there be in our fortuitous, our frail, our evanescent community?</Paragraph>

  <Header.h4>But Now Irrationally I Was Seized</Header.h4>

  <Paragraph>With a strange worship, not, surely of the star, that mere furnace which mere distance falsely sanctified, but of something other, which the dire contrast of the star and us signified to the heart. Yet what, what could thus be signified? Intellect, peering beyond the star, discovered no Star Maker, but only darkness; no Love, no Power even, but only Nothing.</Paragraph>

  <Header.h5>And Yet the Heart Praised</Header.h5>

  <Paragraph>Impatiently I shook off this folly, and reverted from the inscrutable to the familiar and the concrete. Thrusting aside worship, and fear also and bitterness, I determined to examine more coldly this remarkable “us,” this surprisingly impressive datum, which to ourselves remained basic to the universe, though in relation to the stars it appeared so slight a thing.</Paragraph>

  <Header.h6>Considered Even Without Reference to Our Belittling Cosmical Background</Header.h6>

  <Paragraph>We were after all insignificant, perhaps ridiculous. We were such a commonplace occurrence, so trite, so respectable. We were just a married couple, making shift to live together without undue strain. Marriage in our time was suspect. And ours, with its trivial romantic origin, was doubly suspect.</Paragraph>

  <List>
    <ListItem>We had first met when she was a child</ListItem>
    <ListItem>Our eyes encountered</ListItem>
    <ListItem>She looked at me for a moment with quiet attention</ListItem>
    <ListItem>Even, I had romantically imagined, with obscure, deep-lying recognition
      <List>
        <ListItem>I, at any rate, recognized in that look</ListItem>
        <ListItem>So I persuaded myself in my fever of adolescence</ListItem>
      </List>
    </ListItem>
    <ListItem>My destiny</ListItem>
  </List>

  <Paragraph><Text fontWeight="bold">Yes!</Text> <Text italic>How predestinate had seemed our union!</Text> Yet now, in retrospect, how accidental. True, <del>of course</del>, that as a long-married couple we <kbd>fitted</kbd> rather neatly, like <Text sm>two close trees whose trunks</Text> have grown upwards together as a single shaft, mutually distorting, but mutually supporting. <abbr title="abbreviation title">ABC</abbr></Paragraph>

  <List.ol>
    <ListItem>The Diversity of Worlds</ListItem>
    <ListItem>Strange Mankinds</ListItem>
    <ListItem>Nautiloids</ListItem>
    <ListItem>The Earth
      <List>
        <ListItem>The Starting Point</ListItem>
        <ListItem>Earth Among the Stars</ListItem>
      </List>
    </ListItem>
    <ListItem>More Worlds</ListItem>
  </List.ol>

  <Paragraph>Here's some code: <Text fontFamily="monospace">e = mc<sup>2</sup></Text></Paragraph>

  <pre>

    <Text fontFamily="monospace">And
      Some
      Poetry
    </Text>
  </pre>

  <dl>
    <dt>Coldly</dt>
    <dd>I now assessed her as merely a useful, but often infuriating adjunct to my personal life.</dd>
    <dt>We</dt>
    <dd>Were on the whole sensible companions.</dd>
    <dd>We left one another a certain freedom, and so we were able to endure our proximity.</dd>
    <dt>Such</dt>
    <dd>Was our relationship.</dd>
  </dl>

  <hr />

  <Paragraph sm>
    Text excerpt from <Link href="http://www.astro.sunysb.edu/fwalter/AST389/TEXTS/StarMaker.pdf"><Text italic>Star Maker</Text> by Olaf Stapledon</Link>
    <br />
    <Link href="https://gitlab.com/simongriffee/typography">Free template</Link> by <Link href="https://www.simongriffee.com/design/earth-among-the-stars/">Simon Griffee</Link>.
  </Paragraph>

</div>
```
