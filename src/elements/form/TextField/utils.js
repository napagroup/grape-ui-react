const cleaveMap = new Map();
cleaveMap.set('phone', {
  delimiter: '-',
  phone: true,
  phoneRegionCode: 'US',
});
cleaveMap.set('currency', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
  prefix: '$',
});
cleaveMap.set('integer', {
  numeral: true,
  numeralDecimalScale: 0,
  numeralThousandsGroupStyle: 'thousand',
});
cleaveMap.set('numeric', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand',
});
cleaveMap.set('postalCode', {
  blocks: [5, 4],
  delimiter: '-',
  delimiterLazyShow: true,
  numericOnly: true,
});

export const isCleaveInput = props => {
  if (props.email || props.password) {
    return false;
  }
  if (props.formatterOptions) {
    return true;
  }
  let foundKey = false;
  const checkKeys = (value, key) => {
    if (props[key] && !foundKey) {
      foundKey = true;
    }
  };

  cleaveMap.forEach(checkKeys);
  return foundKey;
};

export const cleaveOption = props => {
  if (props.formatterOptions) {
    return props.formatterOptions;
  }
  let options = null;
  const setOptionWhenFound = (value, key) => {
    if (props[key]) {
      options = value;
    }
  };

  cleaveMap.forEach(setOptionWhenFound);
  return options;
};
