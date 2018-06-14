// Use this function to convert sizes and avoid IE quirks
export const getScaledSize = (size, scaleFactor, defaultSize, defaultUnit) => {
  // Convert the font size and scale factor to floats for calculation
  const floatSize = parseFloat(size) || defaultSize || 1;
  const floatScaleFactor = parseFloat(scaleFactor) || 1;

  // Get the unit of measurement
  let unit = defaultUnit || ''; // default
  if (size) {
    if (size.toString().indexOf('%') !== -1) {
      unit = '%';
    } else if (size.toString().indexOf('px') !== -1) {
      unit = 'px';
    } else if (size.toString().indexOf('rem') !== -1) {
      unit = 'rem';
    } else if (size.toString().indexOf('em') !== -1) {
      unit = 'em';
    }
  }

  // Calculate the final font size
  return (floatSize * floatScaleFactor).toString() + unit;
};

export const getScaledFontSize = (size, scaleFactor) => getScaledSize(size, scaleFactor, 1, 'rem');
