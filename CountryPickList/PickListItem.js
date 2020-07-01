import styled from 'styled-components';
import { colors, screen } from '_comsave/global-style-variables';
import { CountrySettings } from '_comsave/countries';

const flagCss = () => {
  let css = '';
  Object.keys(CountrySettings).forEach(key => {
    css += `&.${key}::before {
      content: '${CountrySettings[key].flag}';
    }`;
  });
  return css;
};

export default styled.li`
  color: ${colors.darkBlue};
  flex: 1;
  ${({ isWindows }) => (isWindows ? 'padding: 7px 36px 6px 14px' : 'padding: 7px 36px 6px 43px')};
  position: relative;
  border-bottom: 1px solid ${colors.silverGray};
  .flag-icon {
    margin-right: 11px;
  }
  ${({ isWindows }) =>
    isWindows
      ? ''
      : `&:before {
      position: absolute;
      top: 9px;
      left: 13px;
      width: 25px;
      height: 25px;
      content: '🗺️';
    }
    ${flagCss()}
  `};

  @media screen and (max-width: ${screen.default}) {
    margin: auto;
  }
  &:hover {
    background: #aeaeae47;
    color: ${colors.orange};
  }
`;
