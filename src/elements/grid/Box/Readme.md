`<Box>` is a content level container that can be used to define different columns of your grid.
### Margins
When applying margin to `<Box>`, simply use the `m` attribute for margins.
```jsx
<Box m={48}>
  There is a <code>margin</code> set to <code>48</code> on this <code>&lt;Box&gt;</code>.
</Box>
```
#### Variants
`<Box>` can have different variants defined for margin.
```jsx
<Box m={3}>Applies margin all around</Box>
<Box mt={3}>Applies margin-top</Box>
<Box mr={3}>Applies margin-right</Box>
<Box mb={3}>Applies margin-bottom</Box>
<Box ml={3}>Applies margin-left</Box>
<Box mx={3}>Applies margin-x</Box>
<Box my={3}>Applies margin-y</Box>
```
### Padding
When applying padding to `<Box>`, simply use the `p` attribute for padding.
```jsx
<Box p={48}>
  There is a <code>padding</code> set to <code>48</code> on this <code>&lt;Box&gt;</code>.
</Box>
```
#### Variants
`<Box>` can have different variants defined for padding.
```jsx
<Box p={3}>Applies padding all around</Box>
<Box pt={3}>Applies padding-top</Box>
<Box pr={3}>Applies padding-right</Box>
<Box pb={3}>Applies padding-bottom</Box>
<Box pl={3}>Applies padding-left</Box>
<Box px={3}>Applies padding-x</Box>
<Box py={3}>Applies padding-y</Box>
```
### Width
When applying width to `<Box>`, simply use the `width` attribute for widths.
```jsx
<Box width={1 / 8}>
  There is a <code>width</code> set to <code>1 / 8</code> on this <code>&lt;Box&gt;</code>
</Box>
```
#### Variants
`<Box>` can have different variants defined for `width`, including responsive ones!
```jsx
<Box width={1 / 2}>Applies a percentage width</Box>
<Box width={256}>}Applies an exact pixel width</Box>
<Box width={'2em'}>Applies the exact width enter with the stated unit</Box>
<Box width={[1, 1 / 2]}>Applies the width to different breakpoints</Box>
```
### Layout
There are times when you may need to apply various layout attributes on `<Box>`.  Here are some examples:
```jsx
<Box display="inline-block">Applies display to the styling</Box>
<Box display={['block', 'inline-block']}> Applies display to the styling of the defined breakpoints</Box>
<Box maxWidth={1024}>Applies max-width to the styling</Box>
<Box maxWidth={[768, null, null, 1024]}> Applies max-width to the styling of the defined breakpoints</Box>
<Box minWidth={128}>Applies min-width to the styling</Box>
<Box minWidth={[96, 128]}>Applies min-width to the styling of the defined breakpoints</Box>
<Box height={64}>Applies height to the styling</Box>
<Box height={[48, 64]}>Applies height to the styling of the defined breakpoints</Box>
<Box maxHeight={1024}>Applies max-width to the styling</Box>
<Box maxHeight={[768, null, null, 1024]}>Applies max-width to the styling of the defined breakpoints</Box>
<Box minHeight={128}>Applies min-width to the styling</Box>
<Box minHeight={[384, 512]}>Applies min-width to the styling of the defined breakpoints</Box>
<Box size={320}>Applies width &amp; height to the styling</Box>
<Box size={[320, 480]}>Applies width &amp; height to the styling of the defined breakpoints</Box>
<Box ratio={3 / 4}>Applies height &amp; padding-bottom to the styling</Box>
```
### Position
There are times when you may need to apply various position attributes on `<Box>`.  Here are some examples:
```jsx
<Box p={[1, 2, 3, 4]} position="relative">
  <Box position="absolute" top={0}>Applies position top to the styling</Box>
  <Box zIndex={2}>Applies z-index to the styling</Box>
  <Box position="absolute" left={0}>Applies left to the styling</Box>
  <Box position="absolute" right={0}>Applies right to the styling</Box>
  <Box position="absolute" bottom={0}>Applies bottom to the styling</Box>
</Box>
```
