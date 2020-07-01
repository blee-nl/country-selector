import React from 'react';
import PropTypes from 'prop-types';

import { Field } from 'redux-form/immutable';
import { CountrySettings } from '_comsave/countries';
import { FilterName } from './constants';
import messages from './messages';
import MobilePickListWrapper from './MobilePickListWrapper';

export class MobilePickList extends React.PureComponent {
  onClick = (e, key) => {
    e.preventDefault();
    this.props.onSelect(key);
  };

  render() {
    const { selected, label } = this.props;
    const {
      intl: { formatMessage },
    } = this.context;
    return (
      <MobilePickListWrapper {...this.props}>
        {label && <label htmlFor={label}> {label} :</label>}
        <div className="select-wrapper">
          <Field name={FilterName} className={selected} selected={selected} component="select" onChange={this.onClick}>
            {Object.keys(CountrySettings)
              .sort((a, b) => (formatMessage(messages[a]) > formatMessage(messages[b]) ? 1 : -1))
              .map(key => (
                <option value={key} key={`picklist-item-${key}`} className={selected === key ? 'active' : null}>
                  &nbsp;{CountrySettings[key].flag} &nbsp;&nbsp;
                  {formatMessage(messages[key])}
                </option>
              ))}
          </Field>
          <span className="down-icon" aria-hidden="true" />
        </div>
      </MobilePickListWrapper>
    );
  }
}

MobilePickList.contextTypes = {
  intl: PropTypes.object.isRequired,
};

MobilePickList.defaultProps = {
  selected: 'nl',
};
MobilePickList.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default MobilePickList;
