import React from 'react';
import { shallow } from 'enzyme';

import intl from '_comsave/mocks/intl';
import PickListObj from '../PickListObj';

const minProps = {
  onClick: jest.fn(),
  selected: 'first',
  items: {
    nl: {
      flag: '🇳🇱',
      fieldGuide: {
        zipcode: '1012VN',
        houseNumber: '179',
        houseNumberExtra: 'A',
      },
      intl: {
        CountryPickList: {
          id: 'app.components.CountryPickList.nl',
          defaultMessage: 'Netherlands',
        },
        OfferSearchBox: {
          id: 'app.containers.OfferSearchBox.nl',
          defaultMessage: 'Netherlands',
        },
      },
    },
    uk: {
      flag: '🇬🇧',
      fieldGuide: {
        zipcode: 'W1B5AN',
      },
      intl: {
        CountryPickList: {
          id: 'app.components.CountryPickList.uk',
          defaultMessage: 'United Kingdom',
        },
        OfferSearchBox: {
          id: 'app.containers.OfferSearchBox.uk',
          defaultMessage: 'United Kingdom',
        },
      },
    },
  },
};
const maxProps = {
  onClick: () => {},
  selected: 'first',
  items: {
    nl: {
      flag: '🇳🇱',
      fieldGuide: {
        zipcode: '1012VN',
        houseNumber: '179',
        houseNumberExtra: 'A',
      },
      intl: {
        CountryPickList: {
          id: 'app.components.CountryPickList.nl',
          defaultMessage: 'Netherlands',
        },
        OfferSearchBox: {
          id: 'app.containers.OfferSearchBox.nl',
          defaultMessage: 'Netherlands',
        },
      },
    },
    uk: {
      flag: '🇬🇧',
      fieldGuide: {
        zipcode: 'W1B5AN',
      },
      intl: {
        CountryPickList: {
          id: 'app.components.CountryPickList.uk',
          defaultMessage: 'United Kingdom',
        },
        OfferSearchBox: {
          id: 'app.containers.OfferSearchBox.uk',
          defaultMessage: 'United Kingdom',
        },
      },
    },
  },
  childLocation: 'end',
};

describe('<PickListObj />', () => {
  it('expect to match snapshot first', () => {
    const wrapper = shallow(<PickListObj {...minProps} />, {
      context: { intl },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('expect to match snapshot second', () => {
    const wrapper = shallow(<PickListObj {...minProps} selected="second" />, {
      context: { intl },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('expect to match snapshot second', () => {
    const wrapper = shallow(<PickListObj {...maxProps} selected="second" />, {
      context: { intl },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('expect to match snapshot max first', () => {
    const wrapper = shallow(<PickListObj {...maxProps} selected="first" />, {
      context: { intl },
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('expect to match snapshot first children', () => {
    const wrapper = shallow(
      <PickListObj {...minProps} selected="first">
        childtest
      </PickListObj>,
      { context: { intl } },
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('expect to match snapshot selected ,children', () => {
    const wrapper = shallow(
      <PickListObj {...maxProps} selected="first">
        childtest
      </PickListObj>,
      { context: { intl } },
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should call props onclick function on li click', () => {
    minProps.onClick.mockClear();

    const wrapper = shallow(<PickListObj {...minProps} selected="second" />, {
      context: { intl },
    });
    wrapper
      .find('PickListItem')
      .first()
      .simulate('click');
    expect(minProps.onClick).toHaveBeenCalled();
  });
});
