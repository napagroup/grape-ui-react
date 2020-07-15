import styled from 'styled-components';
import { withHideable } from 'src/elements/utils/Hideable';
import { AlertComponent } from './component';
import {
  alertDefaultProps,
  alertVariants,
} from './utils';

const Alert = styled(withHideable(AlertComponent))`
  ${alertVariants}
`;

Alert.defaultProps = {
  ...alertDefaultProps,
};

/** @component */
export { Alert };
