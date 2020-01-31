import styled from 'styled-components';
import {
  flexbox,
  position,
  layout,
  space,
} from 'styled-system';
import PropTypes from 'prop-types';
import { FormComponent } from './component';

const Form = styled(FormComponent)`
  ${flexbox}
  ${position}
  ${layout}
  ${space}
`;

Form.propTypes = {
  formStyle: PropTypes.string,
};

Form.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  formStyle: '',
};

/** @component */
export { Form };
