"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emailHrefString = emailHrefString;

function emailHrefString(props) {
  var otherProps = {
    bcc: props.bcc,
    body: props.body,
    cc: props.cc,
    subject: props.subject
  };
  var trimmedProps = Object.keys(otherProps).filter(function (key) {
    return !!props[key];
  }).map(function (key) {
    return encodeURI("".concat(key, "=").concat(props[key]));
  }).join('&');
  return "".concat(props.to || trimmedProps ? 'mailto:' : '').concat(props.to || '').concat(trimmedProps ? "?".concat(trimmedProps) : '');
}