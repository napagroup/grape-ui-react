
export const getAssistiveText = props => {
  const { assistiveText, isRequired } = props;
  if (isRequired && !assistiveText) {
    return '*Required';
  }
  return assistiveText || '';
};
