import React from 'react';
import { shallow } from 'enzyme';
import intl from '_comsave/mocks/intl';

import MobilePickList from '../MobilePickList';

const maxProps = {
  onSelect: jest.fn(),
  selected: 'first',
  label: 'country',
};

describe('<MobilePickList />', () => {
  it('expect to match snapshot first', () => {
    const wrapper = shallow(<MobilePickList {...maxProps} />, {
      context: { intl },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to match snapshow onClick', () => {
    maxProps.onSelect.mockClear();
    const wrapper = shallow(<MobilePickList {...maxProps} />, {
      context: { intl },
    });
    const eventArg = {
      preventDefault: () => {},
    };
    wrapper.instance().onClick(eventArg, 0);

    expect(maxProps.onSelect).toHaveBeenCalled();
  });
});
