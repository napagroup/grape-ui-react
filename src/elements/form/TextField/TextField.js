import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withControlGroup } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough } from 'src/utils/componentHelpers';
import { TextFieldComponent } from '.';

export const TextField = props => {
  const overrides = {
    ...props,
  };
  const child = <TextFieldComponent {...passThrough(TextField, overrides)} />;
  console.log('TextField - child', child);
  const ProtoTextField = withControlGroup(child, overrides);
  return <ProtoTextField />;
};

TextField.propTypes = {
  assistiveText: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

TextField.defaultProps = {
  assistiveText: '',
  validationError: '',
};

