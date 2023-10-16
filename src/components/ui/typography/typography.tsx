import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'
import * as React from 'react'

import { Link, LinkProps } from 'react-router-dom'

import { TypographyStaled } from './typography.styled.ts'

type ElementPlusLink =
  | ElementType
  | React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>

export type TypographyPropsType<T extends ElementPlusLink> = {
  className?: string
  as: keyof typeof components
  children?: ReactNode
} & ComponentPropsWithoutRef<T>

export type TypographyStaledType = {
  $component: keyof typeof components
}

export const Typography = <T extends ElementPlusLink>(props: TypographyPropsType<T>) => {
  const { as, ...rest } = props
  const Component: ElementPlusLink =
    as !== 'link' && 'link2' ? (components[as] as ElementType) : Link

  return <TypographyStaled as={Component} $component={as} {...rest} />
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
