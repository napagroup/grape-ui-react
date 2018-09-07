import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ControlLabel } from './ControlLabel';
import { AssistiveText } from './AssistiveText';
import { space } from 'styled-system';
import { defaultControlStylesBase } from './baseControlStyle';
import { resolveColor } from 'src/utils/componentHelpers';

const getBgColor = props => {
  const { bgColor } = props;
  if (!bgColor) {
    return resolveColor(defaultControlStylesBase.bgColor);
  }
  return resolveColor(bgColor);
};

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
    background-color: ${getBgColor(props)};
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
    assistiveText,
    controlLabel,
    controlId,
    validationError,
    children,
<<<<<<< HEAD
    disabled,
=======
>>>>>>> features/form
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
      {children}
      <ControlLabel
        activeColor={activeColor}
        bgColor={getBgColor(props)}
<<<<<<< HEAD
        disabled={disabled}
=======
>>>>>>> features/form
        htmlFor={controlId}
        validationError={validationError}
      >{controlLabel}
      </ControlLabel>
      {displayAssistive(assistiveText, validationError, controlId)}
    </ControlGroup>
  );
};

ControlGroupBase.propTypes = {
  activeColor: PropTypes.string,
  assistiveText: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
<<<<<<< HEAD
  disabled: PropTypes.bool,
=======
>>>>>>> features/form
  validationError: PropTypes.string,
};

ControlGroupBase.defaultProps = {
  activeColor: defaultControlStylesBase.activeColor,
  assistiveText: '',
  bgColor: defaultControlStylesBase.bgColor,
<<<<<<< HEAD
  disabled: false,
=======
>>>>>>> features/form
  validationError: '',
};
