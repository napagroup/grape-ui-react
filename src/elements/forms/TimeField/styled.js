import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withHideable } from 'src/elements/utils/Hideable';
import { TimeComponent } from './component';
import {
  timeFieldPropTypes,
  timeFieldDefaultProps,
} from './utils';

const TimeField = styled(withHideable(TimeComponent))`
`;

TimeField.propTypes = {
  ...timeFieldPropTypes,
};

TimeField.defaultProps = {
  ...timeFieldDefaultProps,
};

/** @component */
export { TimeField };
