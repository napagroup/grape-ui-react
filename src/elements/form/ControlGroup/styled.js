import styled from 'styled-components';
import { space } from 'styled-system';
import { resolveColor } from 'src/utils/componentHelpers';
import { ControlGroupComponent } from './component';

const bgColor = props => `background-color: ${resolveColor(props.bgColor)};`;

export const ControlGroup = styled(ControlGroupComponent)`
  position: relative;
  ${bgColor}
  ${space}
  width: 100%;
`;
ControlGroup.propTypes = {
  ...space.propTypes,
};
