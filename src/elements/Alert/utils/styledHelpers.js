import { css } from 'styled-components';
import { variant } from 'styled-system';
import {
  readableColor,
  transparentize,
} from 'polished';
import { getGlobalOverrides } from 'src/global-styles';
import { resolveColor } from 'src/utils/styledHelpers';

const callback = (acc, cur) => ({
  ...acc,
  [cur.variantName]: {
    bg: transparentize(0.825, resolveColor(cur.color, getGlobalOverrides())),
    color: resolveColor(cur.color, getGlobalOverrides()),
  },
  [`contained-${[cur.variantName]}`]: {
    bg: resolveColor(cur.color, getGlobalOverrides()),
    color: readableColor(resolveColor(cur.color, getGlobalOverrides())),
  },
  [`outlined-${[cur.variantName]}`]: {
    bg: 'transparent',
    borderColor: resolveColor(cur.color, getGlobalOverrides()),
    borderStyle: 'solid',
    borderWidth: 1,
    color: resolveColor(cur.color, getGlobalOverrides()),
  },
});

export const alertVariants = ({ alertThemes }) => {
  console.log({ alertThemes });

  const alertVariantsReducer = alertThemes.reduce(callback, {});
  return (
    css`
    ${variant({
      variants: alertVariantsReducer,
    })}
    `
  );
};
