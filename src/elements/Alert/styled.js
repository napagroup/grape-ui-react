import styled from 'styled-components';
import { withHideable } from 'src/elements/utils/Hideable';
import { AlertComponent } from './component';
import { alertDefaultProps } from './utils';

const Alert = styled(withHideable(AlertComponent))``;

Alert.defaultProps = {
  ...alertDefaultProps,
};

/** @component */
export { Alert };
