import React from 'react';
import PropTypes from 'prop-types';

import FlagImg from 'components/UI/FlagImg';
import messages from './messages';
import PickListItem from './PickListItem';

export const PickListObj = ({ selected, items, onClick, childLocation, isWindows, children }, { intl: { formatMessage } }) => (
  <div className="options">
    {children && childLocation !== 'end' ? children : ''}
    <ul>
      {Object.keys(items)
        .sort((a, b) => (formatMessage(messages[a]) > formatMessage(messages[b]) ? 1 : -1))
        .map(key => (
          <PickListItem
            isWindows={isWindows}
            key={`picklist-item-${key}`}
            className={selected === key ? `active ${selected}` : key}
            onClick={e => onClick(e, key)}
          >
            {isWindows && <FlagImg country={key} />}
            {formatMessage(messages[key])}
          </PickListItem>
        ))}
      {Object.keys(items).length % 3 !== 0 && <li className="space" />}

      {Object.keys(items).length % 3 === 1 && <li className="space" />}
    </ul>
    {children && childLocation === 'end' ? children : ''}
  </div>
);

PickListObj.defaultProps = {
  isWindows: false,
};
PickListObj.contextTypes = {
  intl: PropTypes.object.isRequired,
};
PickListObj.propTypes = {
  selected: PropTypes.string.isRequired,
  items: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  childLocation: PropTypes.string,
  children: PropTypes.node,
  isWindows: PropTypes.bool,
};

export default PickListObj;
