import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  flexbox,
  layout,
  position,
  space,
  system,
} from 'styled-system';
import { BoxComponent } from './component';

const Box = styled(BoxComponent)`
  ${system({ boxSizing: true })}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

Box.propTypes = {
  /** Defines the boxSizing of the Box component. */
  boxSizing: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
};

Box.defaultProps = {
  boxSizing: 'border-box',
};

/** @component */
export { Box };
