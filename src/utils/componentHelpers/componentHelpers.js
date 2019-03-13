import except from 'except';

const removeSomeProps = (originalProps, toBeRemovedProps) => except(originalProps, toBeRemovedProps);

const passThrough = (component, props) => {
  const omit = Object.keys(component.propTypes || {});
  return except(props, omit);
};

export {
  passThrough,
  removeSomeProps,
};
