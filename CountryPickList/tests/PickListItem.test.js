import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import PickListItem from '../PickListItem';

describe('<PickListItem />', () => {
  it('expect to match snapshot', () => {
    expect(shallow(<PickListItem>child</PickListItem>)).toMatchSnapshot();
  });
  it('expect to match snapshot', () => {
    expect(shallow(<PickListItem isWindows>child</PickListItem>)).toMatchSnapshot();
  });
});
