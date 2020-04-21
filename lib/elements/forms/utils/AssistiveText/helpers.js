"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getAssistiveText = void 0;

const getAssistiveText = props => {
  const assistiveText = props.assistiveText,
        isRequired = props.isRequired;

  if (isRequired && !assistiveText) {
    return '*Required';
  }

  return assistiveText || '';
};

exports.getAssistiveText = getAssistiveText;