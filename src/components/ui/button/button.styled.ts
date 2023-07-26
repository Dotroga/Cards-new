import { ElementType } from 'react'

import styled, { css } from 'styled-components'

import { ButtonProps } from './button.tsx'

export const ButtonStyled = styled.button<ButtonProps>(props => {
  const colors = props.theme.colors
  const { variant, fullWidth } = props

  return css`
    padding: 0.375rem 1.75rem;
    border-radius: 0.25rem;
    cursor: pointer;
    gap: 0.625rem;
    outline: none;
    border: none;
    color: ${colors.light_100};
    background: none;
    text-decoration: none;
    transition: 0.2s;
    &:focus {
      border: 2px solid ${colors.info_700};
    }
    ${variant === 'primary' &&
    css`
      background: ${colors.accent_500};
      box-shadow: ${colors.accent_900};
      &:active {
        background: ${colors.accent_700};
      }
      &:hover {
        background: ${colors.accent_300};
      }
    `}
    ${variant === 'secondary' &&
    css`
      background: ${colors.dark_300};
      &:active {
        background: ${colors.dark_500};
      }
      &:hover {
        background: ${colors.dark_100};
      }
    `}
    ${variant === 'tertiary' &&
    css`
      border: 1px solid ${colors.accent_500};
      color: ${colors.accent_500};
      &:active {
        border: 1px solid ${colors.accent_700};
        background: ${colors.accent_900};
      }
      &:hover {
        background: ${colors.dark_500};
        border: 1px solid ${colors.accent_700};
      }
    `}
    ${variant === 'link' &&
    css`
      color: ${colors.accent_500};
      border-radius: 1.5rem;
      &:active {
        color: ${colors.accent_700};
      }
      &:hover {
        color: ${colors.accent_300};
      }
    `}
    ${fullWidth &&
    css`
      width: 100%;
    `}
  `
}) as <T extends ElementType = 'button'>(props: ButtonProps<T>) => JSX.Element
