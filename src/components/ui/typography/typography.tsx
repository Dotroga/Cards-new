import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { TypographyStaled } from './typography.styled.ts'

export type TypographyPropsType<T extends ElementType = 'a'> = {
  className?: string
  as: keyof typeof components
  children?: ReactNode
} & ComponentPropsWithoutRef<T>
export type TypographyStaledType = {
  component: keyof typeof components
}

export const Typography = <T extends ElementType = 'a'>(props: TypographyPropsType<T>) => {
  const { as, ...rest } = props
  const Component: ElementType = components[as] as ElementType

  return <TypographyStaled as={Component} component={as} {...rest} />
}

const components = {
  large: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  overline: 'p',
  caption: 'caption',
  error: 'p',
  link: 'a',
  link2: 'a',
}
