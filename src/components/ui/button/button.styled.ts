import styled, { css } from 'styled-components'

import { ButtonProps } from './button.tsx'

export const ButtonStyled = styled.button<ButtonProps>(props => {
  const colors = props.theme.colors
  const { variant, fullWidth } = props

  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.625rem;
    padding: 0.375rem 1.75rem;
    border-radius: 0.25rem;
    cursor: pointer;
    outline: none;
    border: none;
    color: ${colors.light_100};
    background: none;
    text-decoration: none;
    transition: 0.1s;
    &:disabled {
      cursor: initial;
    }
    ${variant === 'primary' &&
    css`
      background: ${colors.accent_500};
      box-shadow: ${colors.accent_900};
      &:hover {
        background: ${colors.accent_300};
      }
      &:active {
        background: ${colors.accent_700};
      }
      &:disabled {
        color: ${colors.light_900};
        background: ${colors.accent_900};
      }
    `}
    ${variant === 'secondary' &&
    css`
      background: ${colors.dark_300};
      &:hover {
        background: ${colors.dark_100};
      }
      &:active {
        background: ${colors.dark_500};
      }
      &:disabled {
        color: ${colors.light_900};
        background: ${colors.dark_300};
      }
    `}
    ${variant === 'tertiary' &&
    css`
      border: 1px solid ${colors.accent_500};
      color: ${colors.accent_500};
      &:hover {
        background: ${colors.dark_500};
        border: 1px solid ${colors.accent_700};
      }
      &:active {
        border: 1px solid ${colors.accent_700};
        background: ${colors.accent_900};
      }
      &:disabled {
        border: 1px solid ${colors.accent_900};
        background: none;
        color: ${colors.accent_900};
      }
    `}
    ${variant === 'link' &&
    css`
      color: ${colors.accent_500};
      border-radius: 1.5rem;
      &:hover {
        color: ${colors.accent_300};
      }
      &:active {
        color: ${colors.accent_700};
      }
      &:disabled {
        color: ${colors.accent_900};
      }
    `}
    ${fullWidth &&
    css`
      width: 100%;
    `}
  `
})
