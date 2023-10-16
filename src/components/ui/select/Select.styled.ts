import styled, { css } from 'styled-components'

type SelectStyledType = {
  $visible?: boolean
}

export const SelectWrapper = styled.div<SelectStyledType>(props => {
  const visible = props.$visible
  const colors = props.theme.colors

  return css`
    cursor: pointer;
    z-index: 2;
    position: relative;
    .visible {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      align-content: center;
      padding: 6px 20px 6px 10px;
      border: 1px solid ${visible ? colors.dark_100 : colors.dark_300};
      ${visible &&
      css`
        border-bottom: none;
        padding-bottom: 7px;
      `}

      span {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 11px;
        border-radius: 5px;
      }

      img {
        transition: 0.4s;
        width: 20px;
        transform: rotate(${visible ? `90deg` : `-90deg`});
      }
    }
    .popup {
      box-sizing: border-box;
      border: 1px solid ${visible ? colors.dark_100 : colors.dark_300};
      position: absolute;
      width: 100%;
    }
    .iconSelect {
      padding: 6px 12px;
      &:hover {
        background-color: ${colors.accent_900};
        .text {
          color: ${colors.accent_300};
        }
      }
    }
  `
})
