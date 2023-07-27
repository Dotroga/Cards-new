import { ElementType, FC, JSXElementConstructor } from 'react'

import styled from 'styled-components'

type TypographyPropsType = {
  as: keyof typeof components
  children?: React.ReactNode
}
export const Typography: FC<TypographyPropsType> = ({ as, ...rest }) => {
  const Component: ElementType = components[as] || 'p'

  return <TypographyStaled as={Component} {...rest} />
}

const TypographyStaled = styled.p<TypographyPropsType>``

const components = {
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

export type ReactTag = keyof JSX.IntrinsicElements | JSXElementConstructor<any>
type Type =
  | 'h2'
  | 'h3'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'overline'
  | 'caption'
  | 'error'
  | 'link'
  | 'link2'
