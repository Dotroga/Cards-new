import { styled, css } from 'styled-components'

export const WrapperInput = styled.div<{ error?: string; disabled?: boolean; width?: string }>(
  props => {
    const colors = props.theme.colors
    const typography = props.theme.typography
    const { error, disabled } = props
    const width = props.width

    return css`
      width: ${width ?? '100%'};
      min-width: 200px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      position: relative;
      input {
        position: relative;
        outline: none;
        box-sizing: border-box;
        height: 2.25rem;
        transition: 0.5s;
        background: none;
        padding: 0 0.75rem;
        border-radius: 0.125rem;
        border: 1px solid ${colors.dark_300};
        color: ${colors.dark_100};
        font-weight: ${typography.fontWeightRegular};
        font-size: ${typography.fontSize_M};
        line-height: ${typography.lineHeight_M};
        ${error &&
        css`
          border: 1px solid ${colors.danger_300};
        `}
        ${disabled
          ? css`
              border: 1px solid ${colors.dark_300};
              color: ${colors.dark_300};
            `
          : css`
              &:focus {
                border: 1px solid ${error ? colors.danger_300 : colors.light_100};
                color: ${colors.light_100};
              }
              &:hover {
                background-color: ${colors.dark_500};
              }
            `}
      }
      .label {
        color: ${colors.dark_100};
      }
      .error {
        height: 30px;
        position: absolute;
        bottom: -0.75rem;
        //top: 65px;
      }
      svg {
        position: absolute;
        right: 1rem;
        top: 2rem;
        cursor: ${disabled && 'initial'};
        fill: ${disabled ? colors.dark_300 : colors.light_100};
      }
    `
  }
)
