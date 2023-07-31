import styled, { css } from 'styled-components'

import { DefaultInputPropsType } from './checkbox.tsx'

export const CheckboxWrapper = styled.div<DefaultInputPropsType>(props => {
  const colors = props.theme.colors
  const { checked, disabled } = props

  return css`
    display: flex;
    padding: 0.375rem 0.5625rem 0.375rem 0.375rem;
    align-items: center;
    color: ${disabled ? colors.dark_100 : colors.light_100};;

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      margin-right: 5px;
      border-radius: 50%;
      transition: 0.3s;
      cursor: pointer;
      ${
        disabled
          ? css`
              background: none;
              cursor: initial;
            `
          : css`
              &:hover {
                background: ${colors.dark_500};
              }

              &:active {
                background: ${colors.dark_100};
              }
            `
      }


    }

    input {
      display: none;
    }

    svg {
      width: 24px;
      height: 24px;
      position: absolute;
      fill: ${disabled ? colors.dark_100 : colors.light_100};
      stroke: ${disabled ? colors.dark_100 : colors.light_100};
      stroke-width: 0.5px;
      stroke-linecap: round;
      stroke-linejoin: round;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .first {
      opacity: ${checked ? 1 : 0};
    }

    .second {
      opacity: ${checked ? 0 : 1};
    }
  }
  `
})
