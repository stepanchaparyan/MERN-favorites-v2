import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { shallow } from 'enzyme';

export function renderToJSON(Component, props = {}, Router) {
  if (Router) {
    return renderer
      .create(
        <Router>
          <Component {...props} />
        </Router>,
      )
      .toJSON();
  }
  return renderer.create(<Component {...props} />).toJSON();
}

export function renderSnapshot(Component, props = {}) {
  const wrapper = shallow(<Component {...props} />);
  expect(wrapper).toMatchSnapshot();
}
