import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ButtonStyled } from './button.styled.ts'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => (
  <ButtonStyled {...props} />
)
