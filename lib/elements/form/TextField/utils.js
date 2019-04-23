"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cleaveMap = new Map();
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

var isCleaveInput = exports.isCleaveInput = function isCleaveInput(props) {
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

  cleaveMap.forEach(checkKeys);
  return foundKey;
};

var cleaveOption = exports.cleaveOption = function cleaveOption(props) {
  if (props.formatterOptions) {
    return props.formatterOptions;
  }

  var options = null;

  var setOptionWhenFound = function setOptionWhenFound(value, key) {
    if (props[key]) {
      options = value;
    }
  };

  cleaveMap.forEach(setOptionWhenFound);
  return options;
};