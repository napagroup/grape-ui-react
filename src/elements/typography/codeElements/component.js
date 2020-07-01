import React from 'react';
import PropTypes from 'prop-types';
import reactElementToJSXString from 'react-element-to-jsx-string';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { codePropTypes, grapeUICustomStyle } from './utils';

const getCode = props => {
  const {
    code,
    codeOptions,
  } = props;
  if (React.isValidElement(code)) {
    return reactElementToJSXString(code, codeOptions);
  }
  return code;
};

export const CodeComponent = ({
  language,
  style,
  ...props
}) => (
  <SyntaxHighlighter
    language={language}
    style={style}
    {...removeSomeProps(props, Object.keys(codePropTypes))}
  >
    {getCode(props)}
  </SyntaxHighlighter>
);

CodeComponent.propTypes = {
  language: PropTypes.string,
  style: PropTypes.any,
};

CodeComponent.defaultProps = {
  language: 'javascript',
  style: grapeUICustomStyle,
};
