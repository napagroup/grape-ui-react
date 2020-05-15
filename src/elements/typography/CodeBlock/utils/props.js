import propTypes from '@styled-system/prop-types';
import { defaultStylesBase, typography } from 'src/utils/styledHelpers';

export const codeBlockPropTypes = {
  ...typography.propTypes,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
};

export const codeBlockDefaultProps = {
  ...defaultStylesBase,
  background: 'whitesmoke',
  border: '1px solid #eee',
  borderRadius: 4,
  color: 'black',
  display: 'block',
  fontFamily: 'monospace',
  my: [1, null, 2],
  overflowX: 'auto',
  p: [1, 2, 3],
  sm: true,
};
