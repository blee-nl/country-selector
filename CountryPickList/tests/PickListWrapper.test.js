import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';

import PickListWrapper from '../PickListWrapper';

describe('<PickListWrapper />', () => {
  it('expect to match snapshot', () => {
    expect(shallow(<PickListWrapper>asd</PickListWrapper>)).toMatchSnapshot();
  });

  it('expect to match snapshot active', () => {
    expect(shallow(<PickListWrapper active>asd</PickListWrapper>)).toMatchSnapshot();
  });
  it('expect to match snapshot small true', () => {
    expect(shallow(<PickListWrapper small>asd</PickListWrapper>)).toMatchSnapshot();
  });

  it('expect to match snapshot shortLetters true', () => {
    expect(shallow(<PickListWrapper shortLetters>asd</PickListWrapper>)).toMatchSnapshot();
  });
  it('expect to match snapshot small true', () => {
    expect(
      shallow(
        <PickListWrapper active small>
          asd
        </PickListWrapper>,
      ),
    ).toMatchSnapshot();
  });
  it('expect to match snapshot small uppercase true', () => {
    expect(
      shallow(
        <PickListWrapper active small uppercase isWindows>
          asd
        </PickListWrapper>,
      ),
    ).toMatchSnapshot();
  });
});
