import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ControlGroup = styled.div``;
const ControlLabel = styled.label``;
const AssistiveText = styled.small``;
const ValidationText = styled.small``;

export const defaultControlStylesBase = {
  assistiveText: '',
  controlLabel: '',
  controlId: '',
  validationError: '',
};

export const controlStylesBase = props => {
  const {
    controlLabel, controlId, assistiveText, validationError,
  } = props;

  const displayAssistive = (text, error, id) => {
    if (!text && !error) {
      return null;
    } else if (text && !error) {
      return <AssistiveText id={`${id}Help`}>{text}</AssistiveText>;
    }
    return <ValidationText id={`${id}Help`}>{error}</ValidationText>;
  };

  //   let overrides = null;
  //   if (!props || Array.isArray(props)) {
  //     overrides = defaultControlStylesBase;
  //   } else {
  //     overrides = {
  //       ...defaultControlStylesBase,
  //       ...props,
  //     };
  //   }

  return (
    <ControlGroup>
      <ControlLabel for={controlId}>{controlLabel}</ControlLabel>
      {displayAssistive(assistiveText, validationError, controlId)}
    </ControlGroup>
  );
};
