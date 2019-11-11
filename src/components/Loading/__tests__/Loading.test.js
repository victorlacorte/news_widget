import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../Loading';

describe('<Loading />', () => {
  it('creates a Loading component', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
