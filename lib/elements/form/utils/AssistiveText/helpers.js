"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var getAssistiveText = exports.getAssistiveText = function getAssistiveText(props) {
  var assistiveText = props.assistiveText,
      isRequired = props.isRequired;

  if (isRequired && !assistiveText) {
    return '*Required';
  }

  return assistiveText || '';
};