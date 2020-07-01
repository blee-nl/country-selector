import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';

import intl from '_comsave/mocks/intl';
import { mapStateToProps, HiddenInput, checkLanguage, DesktopPickList } from '../DesktopPickList';

const minProps = {
  onSelect: () => {},
  selected: 'uk',
  items: {
    nl: 'First',
    uk: 'Second',
  },
};
const HiddenInputProps = { input: {}, selected: '1' };

const maxProps = {
  onSelect: jest.fn(),
  selected: 'nl',
  items: {
    nl: 'First',
    uk: 'Second',
  },
  name: 'Account',
  label: 'name',
};

describe('<DesktopPickList />', () => {
  let userAgentGetter;
  beforeEach(() => {
    userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
  });
  it('should match the expected output for mapStateToProps', () => {
    const state = fromJS({
      language: {
        locale: 'nl',
      },
    });
    const expectedResult = {
      locale: 'nl',
    };

    expect(mapStateToProps(state)).toEqual(expectedResult);
  });

  it('expect to match snapshot first', () => {
    userAgentGetter.mockReturnValue('Mac');
    const wrapper = shallow(<DesktopPickList {...minProps} />, {
      context: { intl },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('expect to match snapshot window', () => {
    userAgentGetter.mockReturnValue('Win');
    const wrapper = shallow(<DesktopPickList {...minProps} />, {
      context: { intl },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('expect to match snapshot input', () => {
    expect(shallow(<HiddenInput {...HiddenInputProps} />)).toMatchSnapshot();
  });
  it('expect to match snapshot max props', () => {
    const wrapper = shallow(<DesktopPickList {...maxProps} />, {
      context: { intl },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('expect to match checkLanguage', () => {
    const country = 'nl';

    expect(checkLanguage(country)).toEqual(false);
  });
  it('expect to match checkLanguage', () => {
    const country = 'es';

    expect(checkLanguage(country)).toEqual(true);
  });
});
