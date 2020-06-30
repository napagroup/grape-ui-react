import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  background,
  border,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  system,
} from 'styled-system';
import { withHideable } from 'src/elements/utils/Hideable';
import { BoxComponent } from './component';

const Box = styled(withHideable(BoxComponent))`
  ${system({ boxSizing: true })}
  ${background}
  ${border}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`;

Box.propTypes = {
  /** Defines the boxSizing of the Box component. */
  boxSizing: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
  /** Hides component */
  isHidden: PropTypes.bool,
};

Box.defaultProps = {
  boxSizing: 'border-box',
  isHidden: false,
};

/** @component */
export { Box };
