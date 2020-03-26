export function emailHrefString(props) {
  const otherProps = {
    bcc: props.bcc,
    body: props.body,
    cc: props.cc,
    subject: props.subject,
  };
  const trimmedProps = Object.keys(otherProps).filter(key => !!props[key]).map(key => encodeURI(`${key}=${props[key]}`)).join('&');
  return `${props.to || trimmedProps ? 'mailto:' : ''}${props.to || ''}${trimmedProps ? `?${trimmedProps}` : ''}`;
}
