import { ComponentPropsWithoutRef, FC } from 'react'

import styled, { css } from 'styled-components'

type DefaultInputPropsType = Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Checkbox: FC<DefaultInputPropsType> = ({ children, ...restProps }) => {
  const { checked } = restProps

  return (
    <Wrapper checked={checked!}>
      <div className="checkbox">
        <input type="checkbox" {...restProps} />
        <svg>
          <rect x="4" y="6" width="16" height="12" fill="black" />
          <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
        </svg>
      </div>
      {children}
    </Wrapper>
  )
}

type WrapperType = { checked: boolean }

const Wrapper = styled.label<WrapperType>(props => {
  const colors = props.theme.colors
  const checked = props.checked

  return css`
    display: flex;
    padding: 0.375rem 0.5625rem 0.375rem 0.375rem;
    align-items: center;
    gap: 0.5rem;
    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background: ${colors.dark_500};
      }
    }

    input {
      display: none;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      position: absolute;
      fill: #ffffff;
      stroke: white;
      stroke-width: 0.5px;
      stroke-linecap: round;
      stroke-linejoin: round;
      opacity: 0;
      transition: 0.3s;
    }

    ${checked &&
    css`
      svg {
        opacity: 1;
      }
    `}
  `
})
