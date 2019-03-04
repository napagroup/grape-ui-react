import styled from 'styled-components';
import { space } from 'styled-system';
import {
  colorCore,
  typography,
} from 'src/utils/styledHelpers';
import { ControlGroupComponent } from './component';

export const ControlGroup = styled(ControlGroupComponent)`
  position: relative;
  ${colorCore}
  ${space}
  width: 100%;
`;
ControlGroup.propTypes = {
  ...typography.propTypes,
};
