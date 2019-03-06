'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAssistiveText = exports.getAssistiveText = function getAssistiveText(props) {
  var assistiveText = props.assistiveText,
      required = props.required;

  if (required && !assistiveText) {
    return '*Required';
  }
  return assistiveText || '';
};