"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.cleaveOption = exports.isCleaveInput = void 0;

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/map"));

var cleaveMap = new _map["default"]();
cleaveMap.set('phone', {
  delimiter: '-',
  phone: true,
  phoneRegionCode: 'US'
});
cleaveMap.set('currency', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  prefix: '$'
});
cleaveMap.set('integer', {
  numeral: true,
  numeralDecimalScale: 0,
  numeralThousandsGroupStyle: 'thousand'
});
cleaveMap.set('numeric', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand'
});
cleaveMap.set('postalCode', {
  blocks: [5, 4],
  delimiter: '-',
  delimiterLazyShow: true,
  numericOnly: true
});

var isCleaveInput = function isCleaveInput(props) {
  if (props.email || props.password) {
    return false;
  }

  if (props.formatterOptions) {
    return true;
  }

  var foundKey = false;

  var checkKeys = function checkKeys(value, key) {
    if (props[key] && !foundKey) {
      foundKey = true;
    }
  };

  (0, _forEach["default"])(cleaveMap).call(cleaveMap, checkKeys);
  return foundKey;
};

exports.isCleaveInput = isCleaveInput;

var cleaveOption = function cleaveOption(props) {
  if (props.formatterOptions) {
    return props.formatterOptions;
  }

  var options = null;

  var setOptionWhenFound = function setOptionWhenFound(value, key) {
    if (props[key]) {
      options = value;
    }
  };

  (0, _forEach["default"])(cleaveMap).call(cleaveMap, setOptionWhenFound);
  return options;
};

exports.cleaveOption = cleaveOption;