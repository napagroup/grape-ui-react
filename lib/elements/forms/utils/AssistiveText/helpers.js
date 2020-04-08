"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssistiveText = void 0;

var getAssistiveText = function getAssistiveText(props) {
  var assistiveText = props.assistiveText,
      isRequired = props.isRequired;

  if (isRequired && !assistiveText) {
    return '*Required';
  }

  return assistiveText || '';
};

exports.getAssistiveText = getAssistiveText;