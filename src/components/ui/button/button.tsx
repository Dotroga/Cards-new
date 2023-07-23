import { ComponentPropsWithoutRef } from 'react'

// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components'

type PropsType = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
}

type ButtonPropsType<T> = PropsType & ComponentPropsWithoutRef<T>

export const Button = (props: ButtonPropsType<'button'>) => {
  return <Wrapper {...props} />
}

const Wrapper = styled.button<PropsType>`
  padding: 6px 28px;
  border-radius: 4px;
  background: var(--primary-500, #8c61ff);
  box-shadow: 0 4px 18px 0 rgba(140, 97, 255, 0.35);
  background-color: ${({ theme }) => theme.colors.accent_500};
`
