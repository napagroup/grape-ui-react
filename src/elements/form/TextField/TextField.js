import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withControlGroup } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough } from 'src/utils/componentHelpers';
import { withTextFieldComponentConvertor } from '.';
// import Adapter from 'enzyme-adapter-react-16';
// import 'jest-styled-components';
// import { configure, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

export const TextField = props => {
  const { controlId } = props;
  const overrides = {
    ...props,
  };
  const child = withTextFieldComponentConvertor(<div controlId={controlId} {...passThrough(TextField, overrides)} />);
  // const inputChild = () => (<input type="text" id={controlId} {...passThrough(TextField, overrides)} defaultValue="Replace this with textfield Component" />);
  const ProtoTextField = withControlGroup(child);
  return <ProtoTextField {...overrides} />;
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

