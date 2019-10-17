import styled from 'styled-components';
import { space } from 'styled-system';
import {
  colorCore,
  spaceProps,
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
  ...spaceProps.propTypes,
  ...typography.propTypes,
};

ControlGroup.defaultProps = {
  pb: 3,
  pt: 1,
};
