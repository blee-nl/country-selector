import styled from 'styled-components';

import { colors, screen } from '_comsave/global-style-variables';

import arrowDown from '_comsave/assets/images/icons/arrow-down-black.svg';
const PickListWrapper = styled.div`
  position: relative;
  border: 0;
  display: inline-flex;
  padding: 0;
  position: relative;
  min-width: auto;
  flex-direction: column;
  vertical-align: top;
  margin-top: 10px;

  label {
    text-align: left;
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: white;
  }
  .select-wrapper{
    position: relative;
    box-sizing: border-box;
    select {
      display: block;
      background: hsla(0,0%,100%,.8);
      background-clip: padding-box;
      cursor: pointer;
      position: relative;
      display: inline-block;
      text-align: left;
      border-radius: 6px;
      box-sizing: border-box;
      margin-top: 5px;
      -webkit-appearance: none;
      position: relative;
      border: 0;
      padding: 7px 35px 6px 15px;
      min-width: auto;
      width: 100%;
      &.bottom-squared {
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
      }
      height: 45px;
      color: ${colors.carbonBlack};
      background: #ffffff;
      font-size: 16px;
      font-weight: 600;
      text-align: left;
      line-height: 26px;
      }

      select:focus{font-size: 16px; }
      option{
            font-size: 14px;
            text-align: left;
            text-align: -moz-left;
            text-align: -webkit-left;
      }
      .down-icon{
        top: 15px;
        right: 12px;
        display: block;
        pointer-events: none;
        color: #888;
        font-size: 21px;
        font-weight: 300;
        line-height: 0;
        position: absolute;
        &:after{
          content: "";
          width: 25px;
          height: 25px;
          background: url(${arrowDown}) no-repeat center center;
          color: inherit;
          display: inline-block;
          font-style: normal;
          font-weight: inherit;
          font-size: inherit;
          line-height: 1;
          text-decoration: underline;
          position: relative;
          z-index: 1;
          alt: "";
          text-decoration: none;
        }
      }
    }
    @media screen and (max-width: ${screen.small}) {
      height: 68x;
      line-height: 16px;
      top: 1px;
    }
  }
`;

export default PickListWrapper;
