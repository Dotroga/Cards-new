import styled, { css } from 'styled-components'

export const WrapperInput = styled.div<{ error?: string; disabled?: boolean }>(props => {
  const colors = props.theme.colors
  const { error, disabled } = props

  return css`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    input {
      outline: none;
      transition: 0.5s;
      background: none;
      padding: 0.38rem 0.75rem;
      border-radius: 0.125rem;
      border: 1px solid ${colors.dark_300};
      color: ${colors.dark_100};
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem;
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
    }
    svg {
      position: absolute;
      top: 50%;
      right: 10px;
      cursor: ${disabled && 'initial'};
      fill: ${disabled ? colors.dark_300 : colors.light_100};
      transform: translate(0, -50%);
    }
  `
})
