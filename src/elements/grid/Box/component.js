
import React from 'react';
import PropTypes from 'prop-types';
import {
  bottom,
  display,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  ratio,
  right,
  size,
  space,
  top,
  width,
  zIndex,
} from 'styled-system';

import { removeSomeProps } from 'src/utils/componentHelpers';

const propsToTrim = {
  ...bottom.propTypes,
  ...display.propTypes,
  ...left.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...minHeight.propTypes,
  ...maxWidth.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...ratio.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
};
export const BoxComponent = ({ children, ...props }) => (
  <div {...removeSomeProps(props, Object.keys(propsToTrim))}>
    {children}
  </div>
);
BoxComponent.propTypes = {
  children: PropTypes.any.isRequired,
};
