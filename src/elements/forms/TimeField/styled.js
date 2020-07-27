import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight } from 'styled-system';
import {
  ControlGroup,
  getAssistiveText,
  PlainText,
} from 'src/elements/forms/utils';
import { removeSomeProps } from 'src/utils/componentHelpers';
import {
  control,
  controlColor,
  controlStyles,
  defaultControlStyles,
  fontFamilyCore,
  fontSizeCore,
  fontStyleCore,
  letterSpacingCore,
  lineHeightCore,
  plaintextPropsToTrim,
  refType,
  spaceProps,
  textAlignCore,
  textDecorationCore,
  typography,
} from 'src/utils/styledHelpers';
import { TimeComponent } from './component';
import {
  timeFieldPropTypes,
  timeFieldDefaultProps,
} from './utils';

const controlStylesTimeField = props => (!props.validationError ? controlStyles(props)
  : controlStyles({ ...props, activeColor: 'brandDanger', borderColor: 'brandDanger' }));

const TimeFieldComponent = styled(TimeComponent)`
  ${controlColor}
  .rc-time-picker-input {
    ${controlStylesTimeField}
  }
  ${fontFamilyCore}
  ${fontSizeCore}
  ${fontStyleCore}
  ${fontWeight}
  ${letterSpacingCore}
  ${lineHeightCore}
  ${textAlignCore}
  ${textDecorationCore}
`;

TimeFieldComponent.propTypes = {
  ...timeFieldPropTypes,
};

TimeFieldComponent.defaultProps = {
  ...timeFieldDefaultProps,
};

const propsToTrim = [
  'assistiveText',
  'controlId',
  'controlLabelProps',
  'labelText',
  'validationError',
  ...Object.keys(spaceProps.propTypes),
];

const renderValueOrComponent = propsFromComponent => {
  const {
    plainText,
  } = propsFromComponent;
  if (plainText) {
    const plainTextProps = removeSomeProps(propsFromComponent, plaintextPropsToTrim);
    return <PlainText {...plainTextProps} />;
  }
  return <TimeFieldComponent {...propsFromComponent} />;
};

const TimeField = props => {
  const {
    activeColor,
    assistiveTextProps,
    bg,
    controlGroupProps,
    controlId,
    controlLabelProps,
    formStyle,
    isHidden,
    isRequired,
    labelText,
    name,
    validationError,
    ...otherProps
  } = props;
  const childProps = {
    activeColor,
    bg,
    formStyle,
    id: controlId || name,
    isRequired,
    labelText,
    name,
    validationError,
    ...removeSomeProps(otherProps, propsToTrim),
  };
  const newlabel = !isRequired ? labelText : `${labelText}*`;
  return (
    <ControlGroup
      activeColor={activeColor}
      assistiveText={getAssistiveText(props)}
      assistiveTextProps={assistiveTextProps}
      bg={defaultControlStyles.bg}
      controlId={controlId}
      controlLabelProps={controlLabelProps}
      isHidden={isHidden}
      labelText={newlabel}
      name={name}
      validationError={validationError}
      {...controlGroupProps}
    >
      {renderValueOrComponent({ ...childProps })}
    </ControlGroup>
  );
};

/** @component */
export { TimeField };
