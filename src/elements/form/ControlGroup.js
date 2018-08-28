import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ControlLabel } from './ControlLabel';
import { AssistiveText } from './AssistiveText';

const ControlGroup = styled.div``;

const ControlGroupBase = props => {
  const {
    controlLabel,
    controlId,
    assistiveText,
    validationError,
    children,
  } = props;

  console.log('ControlGroupBase - props', props);

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
  controlId: PropTypes.string,
  controlLabel: PropTypes.string,
  // controlId: PropTypes.string.isRequired,
  // controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

ControlGroupBase.defaultProps = {
  assistiveText: '',
  validationError: '',
  controlId: '',
  controlLabel: '',
};

const withControlGroup = (Child, props) => {
  class ControlGroupComponent extends React.Component {
    render() {
      const {
        controlLabel,
        controlId,
        assistiveText,
        validationError,
        ...otherProps
      } = props;
      // console.log('withControlGroup - props', props);
      // console.log('withControlGroup - Child', Child);
      const controlJSX = (<ControlGroupBase assistiveText={assistiveText} controlId={controlId} controlLabel={controlLabel} validationError={validationError} > <Child {...otherProps} /> </ControlGroupBase>);
      return `${controlJSX}`;
    }
  }
  ControlGroupComponent.propTypes = {
    assistiveText: PropTypes.string,
    controlId: PropTypes.string,
    controlLabel: PropTypes.string,
    // controlId: PropTypes.string.isRequired,
    // controlLabel: PropTypes.string.isRequired,
    validationError: PropTypes.string,
  };
  ControlGroupComponent.defaultProps = {
    assistiveText: '',
    validationError: '',
    controlId: '',
    controlLabel: '',
  };
  return ControlGroupComponent;
};

export { ControlGroupBase, withControlGroup };
