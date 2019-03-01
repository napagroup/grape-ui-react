import { getGlobalStyles } from 'src/global-styles';

const {
  fontSize: fontSizeSchema,
} = getGlobalStyles();

export const scaleFactor = props => {
  const { sizeVariants: { sm: schemaSm, lg: schemaLg } } = fontSizeSchema;
  let value = null;
  const { sm, lg } = props;
  if (lg) {
    value = schemaLg;
  } else if (sm) {
    value = schemaSm;
  }
  return value;
};
const getUnit = (size, defaultUnit) => {
  // Get the unit of measurement
  let unit = defaultUnit;
  if (size.toString().indexOf('%') !== -1) {
    unit = '%';
  } else if (size.toString().indexOf('px') !== -1) {
    unit = 'px';
  } else if (size.toString().indexOf('rem') !== -1) {
    unit = 'rem';
  } else if (size.toString().indexOf('em') !== -1) {
    unit = 'em';
  }
  return unit;
};
export const scaleFont = (size, factor, defaultSize = 1, defaultUnit = 'rem') => {
  // Convert the font size and scale factor to floats for calculation
  const floatSize = parseFloat(size) || defaultSize || 1;
  const floatScaleFactor = parseFloat(factor) || 1;
  const unit = size ? getUnit(size, defaultUnit) : defaultUnit;
  // Calculate the final font size
  return (floatSize * floatScaleFactor).toString() + unit;
};
