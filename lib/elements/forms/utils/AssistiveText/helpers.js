export var getAssistiveText = function getAssistiveText(props) {
  var assistiveText = props.assistiveText,
      isRequired = props.isRequired;

  if (isRequired && !assistiveText) {
    return '*Required';
  }

  return assistiveText || '';
};