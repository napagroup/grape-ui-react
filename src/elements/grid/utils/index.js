import propTypes from '@styled-system/prop-types';

export const defaultFlexBoxStylesPropsToTrim = [
  ...Object.keys(propTypes.background),
  ...Object.keys(propTypes.border),
  ...Object.keys(propTypes.flexbox),
  ...Object.keys(propTypes.grid),
  ...Object.keys(propTypes.layout),
  ...Object.keys(propTypes.position),
  ...Object.keys(propTypes.shadow),
  ...Object.keys(propTypes.space),
  'boxSizing',
];
