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
  /** Define which style of form controls should be used
  * @see See [Material Design/Components/Text Fields/Usage](https://material.io/components/text-fields/#usage) for more on these styles. */
  formStyle: PropTypes.string,
};

Form.defaultProps = {
  display: 'flex',
  flexDirection: 'column',
  formStyle: '',
};

/** @component */
export { Form };
