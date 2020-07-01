import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { defaultStylesBase, typography } from 'src/utils/styledHelpers';

export const codePropTypes = {
  ...typography.propTypes,
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  code: PropTypes.any,
  isHidden: PropTypes.bool,
};

export const codeDefaultProps = {
  ...defaultStylesBase,
  background: 'whitesmoke',
  border: '1px solid #eee',
  borderRadius: 4,
  code: '',
  color: 'inherit',
  display: 'inline-block',
  fontFamily: 'monospace',
  fontSize: '80%',
  isHidden: false,
  my: 0,
  p: 1,
};
