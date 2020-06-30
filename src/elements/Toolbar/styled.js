import styled from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
} from 'styled-system';
import { withHideable } from 'src/elements/utils/Hideable';
import { ToolbarComponent } from './component';
import { toolbarDefaultProps, toolbarPropTypes } from './utils';

const Toolbar = styled(withHideable(ToolbarComponent))`
  ${system({ boxSizing: true })}
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
`;

Toolbar.propTypes = {
  ...toolbarPropTypes,
};

Toolbar.defaultProps = {
  ...toolbarDefaultProps,
};

/** @component */
export { Toolbar };
