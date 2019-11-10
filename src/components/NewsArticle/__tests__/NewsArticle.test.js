import React from 'react';
import { shallow } from 'enzyme';

import NewsArticle from '../NewsArticle';

describe('<NewsArticle />', () => {
  it('creates a NewsArticle component', () => {
    const props = {
      title: 'Foo',
      url: 'www.foo.bar',
      publishedAt: '2019-11-08T11:00:00Z',
      sourceName: 'Bar',
    };

    const wrapper = shallow(<NewsArticle {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
