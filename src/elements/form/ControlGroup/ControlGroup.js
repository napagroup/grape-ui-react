import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ControlLabel } from './ControlLabel';
import { AssistiveText } from './AssistiveText';
import { space } from 'styled-system';

const ControlGroup = props => {
  const {
    controlLabel,
    controlId,
    assistiveText,
    validationError,
    children,
    ...otherProps
  } = props;
  const propsPass = {
    controlLabel, controlId, assistiveText, validationError, children,
  };
  const stylesControlGroup = `
    position: relative;
    background-color: white;
    width: 100%;
  `;
  const ProtoControlGroup = styled.div`
    ${(otherProps)}
    ${stylesControlGroup}
  `;
  return <ProtoControlGroup {...propsPass} />;
};

ControlGroup.propTypes = {
  ...space.propTypes,
};

export const ControlGroupBase = props => {
  const {
    activeColor,
    controlLabel,
    controlId,
    assistiveText,
    validationError,
    children,
    ...otherProps
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
    <ControlGroup {...otherProps}>
      <ControlLabel
        activeColor={activeColor}
        htmlFor={controlId}
      >{controlLabel}
      </ControlLabel>
      {children}
      {displayAssistive(assistiveText, validationError, controlId)}
    </ControlGroup>
  );
};

ControlGroupBase.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

ControlGroupBase.defaultProps = {
  activeColor: 'blue',
  assistiveText: '',
  validationError: '',
};
