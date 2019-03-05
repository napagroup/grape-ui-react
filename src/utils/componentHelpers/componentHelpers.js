import except from 'except';

const removeSomeProps = (originalProps, toBeRemovedProps) => except(originalProps, toBeRemovedProps);

const passThrough = (component, props) => {
  const omit = Object.keys(component.propTypes || {});
  return except(props, omit);
};
const addPassthroughMethod = component => {
  const refComponent = component;
  refComponent.prototype.passThrough = () => {
    const omit = Object.keys(component.propTypes || {});
    return except(this.props, omit);
  };
};

export {
  passThrough,
  addPassthroughMethod,
  removeSomeProps,
};
