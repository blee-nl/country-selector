import React from 'react';
import { shallow } from 'enzyme';

import CountryPickList from '../index';

const maxProps = {
  onClick: () => {},
  selected: 'first',
  items: {
    first: 'First',
    second: 'Second',
  },
  childLocation: 'end',
};
describe('<CountryPickList />', () => {
  let userAgentGetter;
  beforeEach(() => {
    userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
  });

  it('should do thing 1', () => {
    userAgentGetter.mockReturnValue('Android');
    expect(shallow(<CountryPickList {...maxProps} />)).toMatchSnapshot();
  });

  it('should do thing 1', () => {
    userAgentGetter.mockReturnValue('Window');
    expect(shallow(<CountryPickList {...maxProps} />)).toMatchSnapshot();
  });
});
