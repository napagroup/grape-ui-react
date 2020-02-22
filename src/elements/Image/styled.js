import styled from 'styled-components';
import PropTypes from 'prop-types';
import { layout } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { ImageComponent } from './component';

const Image = styled(ImageComponent)`${layout}`;

Image.propTypes = {
  /** Required for web accessibility. Should be short and descriptive. */
  alt: PropTypes.string.isRequired,
  maxWidth: PropTypes.string,
  ...propTypes.layout,
};

Image.defaultProps = {
  maxWidth: '100%',
  width: '100%',
};

/** @component */
export { Image };
