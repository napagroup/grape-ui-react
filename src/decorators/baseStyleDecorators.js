import { textStylesBase } from 'src/elements/typography/textStyles';

const withBaseStyles = (component, props) => {
  const base = textStylesBase(props);
  return component.extend`
    ${base}
  `;
};

export { withBaseStyles };
