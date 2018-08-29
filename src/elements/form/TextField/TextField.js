import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withControlGroup } from 'src/elements/form/ControlGroup/ControlGroup';
import { passThrough } from 'src/utils/componentHelpers';
import { TextFieldComponent } from '.';
// import Adapter from 'enzyme-adapter-react-16';
// import 'jest-styled-components';
// import { configure, mount } from 'enzyme';
// import toJson from 'enzyme-to-json';

export const TextField = props => {
  const { controlId } = props;
  const overrides = {
    ...props,
  };
  const child = () => (<div><TextFieldComponent {...passThrough(TextField, overrides)} /></div>);
  // const component = mount(<child />);
  // const componentJson = component.find(child);
  // const Foo = () => (<div className="in-foo" />);
  // const Bar = () => (<div className="in-bar"><Foo /></div>);

  // const wrapper = mount(<Bar />);
  // console.log('TextField - wrapper.find(Foo).render()', expect(wrapper.find(Foo).render().find('.in-foo')).to.have.lengthOf(1));
  // // expect(wrapper.find('div').render()).to.have.lengthOf(1);

  // console.log('TextField - componentJson', componentJson);
  const inputChild = () => (<input type="text" id={controlId} {...passThrough(TextField, overrides)} defaultValue="Replace this with textfield Component" />);
  const ProtoTextField = withControlGroup(inputChild);
  return <ProtoTextField {...overrides} />;
};

TextField.propTypes = {
  assistiveText: PropTypes.string,
  controlId: PropTypes.string.isRequired,
  controlLabel: PropTypes.string.isRequired,
  validationError: PropTypes.string,
};

TextField.defaultProps = {
  assistiveText: '',
  validationError: '',
};

