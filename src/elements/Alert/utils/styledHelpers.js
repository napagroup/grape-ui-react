import { css } from 'styled-components';
import { variant } from 'styled-system';
import {
  readableColor,
  transparentize,
} from 'polished';
import { getGlobalOverrides } from 'src/global-styles';
import { resolveColor } from 'src/utils/styledHelpers';

const callback = props => (acc, cur) => {
  const myColor = resolveColor(cur.color, getGlobalOverrides(props));
  return {
    ...acc,
    [cur.variantName]: {
      bg: transparentize(0.825, myColor),
      color: myColor,
    },
    [`contained-${[cur.variantName]}`]: {
      bg: myColor,
      color: readableColor(myColor),
    },
    [`outlined-${[cur.variantName]}`]: {
      bg: 'transparent',
      borderColor: myColor,
      borderStyle: 'solid',
      borderWidth: 1,
      color: myColor,
    },
  };
};

export const alertVariants = props => {
  const { alertThemes } = props;
  const alertVariantsReducer = alertThemes.reduce(callback(props), {});
  return (
    css`
    ${variant({
      variants: alertVariantsReducer,
    })}
    `
  );
};
