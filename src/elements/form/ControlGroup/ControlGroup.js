import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ControlLabel } from './ControlLabel';
import { AssistiveText } from './AssistiveText';

const ControlGroup = styled.div``;

export const ControlGroupBase = props => {
  const {
    controlLabel,
    controlId,
    assistiveText,
    validationError,
    children,
  } = props;

  const displayAssistive = (text, error, id) => {
    if (!text && !error) {
      return null;
    } else if (text && !error) {
      return <AssistiveText id={`${id}Help`}>{text}</AssistiveText>;
    }
    return <AssistiveText color="brandDanger" id={`${id}Error`}>{error}</AssistiveText>;
  };

  return (
    <ControlGroup>
      <ControlLabel for={controlId}>{controlLabel}</ControlLabel>
      {children}
      {displayAssistive(assistiveText, validationError, controlId)}
    </ControlGroup>
  );
};

ControlGroupBase.propTypes = {
  assistiveText: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

ControlGroupBase.defaultProps = {
  assistiveText: '',
  validationError: '',
};
