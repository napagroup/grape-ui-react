import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  width,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
} from 'styled-system';
import { ImageComponent } from './component';

export const Image = styled(ImageComponent)`
  ${width}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
`;

Image.propTypes = {
  alt: PropTypes.string,
  maxWidth: PropTypes.string,
  ...width.propTypes,
  ...display.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
};

Image.defaultProps = {
  alt: '',
  maxWidth: '100%',
  width: '100%',
};
