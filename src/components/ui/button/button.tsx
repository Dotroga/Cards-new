import { ComponentPropsWithoutRef, ElementType } from 'react'

import { ButtonStyled } from './button.styled.ts'

import { Typography } from '@/components'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const { variant = 'primary', children, ...rest } = props

  return (
    <ButtonStyled variant={variant} {...rest}>
      <Typography as="subtitle2">{children}</Typography>
    </ButtonStyled>
  )
}
