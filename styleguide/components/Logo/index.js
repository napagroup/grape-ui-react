import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import logo from 'src/assets/images/vert-logo.svg'

export const Logo = styled(ReactSVG)`
  height: 40px;
  width: 130px;
  svg {
    max-height: 100%;
    max-width: 100%;
  }
`;

Logo.defaultProps = {
  src: logo,
  wrapper: 'span',
};
