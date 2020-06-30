import styled from 'styled-components';
import PropTypes from 'prop-types';
import { border, layout } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { withHideable } from 'src/elements/utils/Hideable';
import { ImageComponent } from './component';

const Image = styled(withHideable(ImageComponent))`
  ${border}
  ${layout}
`;

Image.propTypes = {
  /** Required for web accessibility. Should be short and descriptive. */
  alt: PropTypes.string.isRequired,
  /** Hides component */
  isHidden: PropTypes.bool,
  ...propTypes.border,
  ...propTypes.layout,
};

Image.defaultProps = {
  isHidden: false,
  maxWidth: '100%',
  width: '100%',
};

/** @component */
export { Image };
