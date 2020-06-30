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
} from 'styled-system';
import { withHideable } from 'src/elements/utils/Hideable';
import PropTypes from 'prop-types';
import { FlexComponent } from './component';

const Flex = styled(withHideable(FlexComponent))`
  ${background}
  ${border}
  ${flexbox}
  ${grid}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`;

Flex.propTypes = {
  /** Hides component */
  isHidden: PropTypes.bool,
};

Flex.defaultProps = {
  display: 'flex',
  isHidden: false,
};

/** @component */
export { Flex };
