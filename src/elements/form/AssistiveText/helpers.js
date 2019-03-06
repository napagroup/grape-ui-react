
export const getAssistiveText = props => {
  const { assistiveText, required } = props;
  if (required && !assistiveText) {
    return '*Required';
  }
  return assistiveText || '';
};
