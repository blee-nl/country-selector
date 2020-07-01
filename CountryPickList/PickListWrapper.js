import PropTypes from 'prop-types';
import styled from 'styled-components';

import { CountrySettings } from '_comsave/countries';
import { colors, screen } from '_comsave/global-style-variables';
import arrowDown from '_comsave/assets/images/icons/arrow-down-black.svg';

function flagCss() {
  let css = '';
  Object.keys(CountrySettings).forEach(key => {
    css += `&.${key}::before {
      content: '${CountrySettings[key].flag}';
    }`;
  });

  return css;
}

const PickListWrapper = styled.div`
  position: relative;
  border: 0;
  display: inline-flex;
  padding: 0;
  position: relative;

  flex-direction: column;
  vertical-align: top;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */

  margin-top: 10px;
  label {
    text-align: left;
    display: block;
    font-size: 12px;
    height: 19px;
    font-weight: 600;
    color: white;
  }
  .picklist-content {
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-align: center;
    border-radius: 6px;
    box-sizing: border-box;
    margin-top: 5px;

    transition: all 0.4s linear;

    @media screen and (max-width: ${screen.small}) {
      margin-top: 22px;
    }
    position: relative;
    border: 0;
    padding: 0;
    min-width: auto;

    min-width: max-content;
    @media screen and (max-width: ${screen.semiSmall}) {
      width: 100%;
      transition: all 0.4s linear;
    }
    &.bottom-squared {
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    height: 45px;
    color: ${colors.carbonBlack};
    background: #ffffff;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    line-height: 26px;
    .selected {
      transition: all 0.4s linear;
      text-align: left;
      height: 100%;
      width: 100%;
      outline: none;

      ${({ isWindows }) => (isWindows ? 'padding: 11px 36px 6px 14px' : 'padding: 11px 36px 6px 40px')};
      @media screen and (max-width: ${screen.small}) {
        ${({ isWindows }) => (isWindows ? 'padding: 15px 36px 12px 14px' : 'padding: 15px 38px 12px')};
      }
      position: relative;
      background: url(${arrowDown}) no-repeat center right 13px;
      .flag-icon {
        margin-right: 11px;
      }
      ${({ isWindows }) =>
        isWindows
          ? ''
          : `
      &:before {
        position: absolute;

        top: 12px;
        @media screen and (max-width: ${screen.small}) {
          top: 15px;
        }
        left: 12px;
        width: 25px;
        height: 25px;
      }
      ${flagCss()}`};
    }

    .options {
      text-align: left;
      display: block;
      max-height: none;
      ul {
        ${({ shortLetters }) => (shortLetters ? 'max-width: 505px;' : 'max-width: 635px;')}
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.08), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 1px 0px rgba(0, 0, 0, 0.08);
        li {
          &.space {
            @media screen and (max-width: ${screen.default}) {
              display: none;
            }
            &:hover {
              background: white;
              cursor: default;
            }
          }
          line-height: 160%;
          min-width: 158px;
          ${({ isWindows }) => (isWindows ? 'padding: 5px' : 'padding: 7px 0px 6px 35px')};
          @media screen and (max-width: ${screen.small}) {
            ${({ isWindows }) => (isWindows ? 'padding: 15px 36px 12px 14px' : 'padding: 7px 0px 6px 35px')};
          }
          margin: 5px;
          border-bottom: none;
          &:hover {
            background: #f6f6f6;
            border-radius: 4px;
            font-size: 14px;
            color: #172439;
          }
          &:before {
            left: 8px;
          }
          flex: 1 1 0;
        }
        @media screen and (max-width: ${screen.default}) {
          max-width: initial;
          width: 100%;
          li {
            min-width: 230px;
          }
        }
      }
      overflow-y: scroll;
      position: absolute;
      z-index: 3;
      background: #ffffff;
      line-height: 30px;
      left: 0;
      min-width: max-content;
      transition: all 0.4s linear;
      box-sizing: border-box;
      border-radius: 8px;
      margin-top: 4px;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 0px, rgba(0, 0, 0, 0.1) 0px 2px 6px, rgba(0, 0, 0, 0.1) 0px 10px 20px;
      @media screen and (max-width: ${screen.small}) {
        line-height: 23px;
        padding-top: 5px;
      }
    }

    @media screen and (max-width: ${screen.small}) {
      height: 46px;
      line-height: 16px;
      top: 1px;

      &:after {
        top: 18px;
      }
    }
  }
`;

PickListWrapper.defaultProps = {
  small: false,
  uppercase: false,
};

PickListWrapper.propTypes = {
  small: PropTypes.bool,
  uppercase: PropTypes.bool,
};

export default PickListWrapper;
