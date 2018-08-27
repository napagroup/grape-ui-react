import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ControlLabel } from './ControlLabel';

const ControlGroup = styled.div``;
const AssistiveText = styled.small``;
const ValidationText = styled.small``;

const ControlStylesBase = props => {
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
    return <ValidationText id={`${id}Help`}>{error}</ValidationText>;
  };


  return (
    <ControlGroup>
      <ControlLabel for={controlId}>{controlLabel}</ControlLabel>
      {children}
      {displayAssistive(assistiveText, validationError, controlId)}
    </ControlGroup>
  );
};

ControlStylesBase.propTypes = {
  assistiveText: PropTypes.string,
  children: PropTypes.any.isRequired,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

ControlStylesBase.defaultProps = {
  assistiveText: '',
  validationError: '',
};

const withControlStyles = Child => {
  class ControlStylesComponent extends React.Component {
    render() {
      const {
        controlLabel,
        controlId,
        assistiveText,
        validationError,
        ...otherProps
      } = this.props;
      const controlJSX = (<ControlStylesBase assistiveText={assistiveText} controlId={controlId} controlLabel={controlLabel} validationError={validationError} > <Child {...otherProps} /> </ControlStylesBase>);
      return `${controlJSX}`;
    }
  }
  ControlStylesComponent.propTypes = {
    assistiveText: PropTypes.string,
    controlId: PropTypes.string.isRequired,
    controlLabel: PropTypes.string.isRequired,
    validationError: PropTypes.string,
  };
  ControlStylesComponent.defaultProps = {
    assistiveText: '',
    validationError: '',
  };
  return ControlStylesComponent;
};

export { ControlStylesBase, withControlStyles };
