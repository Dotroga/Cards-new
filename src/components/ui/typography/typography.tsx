import { ElementType, FC } from 'react'

import { TypographyStaled } from './typography.styled.ts'

type TypographyPropsType = {
  as: keyof typeof components
  children?: React.ReactNode
}
export type TypographyStaledType = {
  component: keyof typeof components
}

export const Typography: FC<TypographyPropsType> = ({ as, ...rest }) => {
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
  error: 'span',
  link: 'a',
  link2: 'a',
}
