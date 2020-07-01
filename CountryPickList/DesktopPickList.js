import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field } from 'redux-form/immutable';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import FlagImg from 'components/UI/FlagImg';
import { CountrySettings } from '_comsave/countries';
import { FilterName } from './constants';
import PickListWrapper from './PickListWrapper';
import PickListObj from './PickListObj';

import messages from './messages';

export const HiddenInput = ({ input: { ...input }, selected }) => <input type="hidden" value={selected} />;

HiddenInput.propTypes = {
  input: PropTypes.object.isRequired,
  selected: PropTypes.string,
};
export const checkLanguage = lang => lang === 'en' || lang === 'es';
export class DesktopPickList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isWindows: navigator.platform.indexOf('Win') > -1,
    };
  }
  onToggle = () => {
    document.querySelector('#content-box-wrapper').classList.toggle('reset-content-box');
    this.setState({
      open: !this.state.open,
    });
  };

  onClick = (e, key) => {
    e.preventDefault();
    this.props.onSelect(key);
    this.onToggle();
  };

  render() {
    const { selected, name, children, childLocation, label, locale } = this.props;
    const { open, isWindows } = this.state;
    const {
      intl: { formatMessage },
    } = this.context;
    const picklistClassName = name ? `${name} picklist-content` : 'picklist-content';
    return (
      <PickListWrapper
        {...this.props}
        isWindows={isWindows}
        shortLetters={checkLanguage(locale)}
      >
        {label && <label htmlFor={label}> {label} :</label>}
        <div className={picklistClassName}>
          <div className={`selected ${selected}`} onClick={this.onToggle} role="button" tabIndex="0">
            {isWindows && <FlagImg country={selected} />}
            {formatMessage(messages[selected])}
          </div>
          {open && (
            <PickListObj
              selected={selected}
              items={CountrySettings}
              onClick={this.onClick}
              childLocation={childLocation}
              isWindows={isWindows}
            >
              {children}
            </PickListObj>
          )}
        </div>

        <Field name={FilterName} selected={selected} component={HiddenInput} />
      </PickListWrapper>
    );
  }
}

DesktopPickList.contextTypes = {
  intl: PropTypes.object.isRequired,
};
DesktopPickList.defaultProps = {
  selected: 'nl',
};

export const mapStateToProps = state => ({
  locale: makeSelectLocale()(state),
});

const withConnect = connect(
  mapStateToProps,
  null,
);
DesktopPickList.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  name: PropTypes.string,
  childLocation: PropTypes.string,
  children: PropTypes.node,
  label: PropTypes.string,
  locale: PropTypes.string,
};
export default withConnect(DesktopPickList);
