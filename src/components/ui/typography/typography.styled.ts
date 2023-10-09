import styled, { css } from 'styled-components'

import { TypographyStaledType } from './typography.tsx'

export const TypographyStaled = styled.p<TypographyStaledType>(props => {
  const {
    fontSize_M,
    fontSize_XS,
    fontSize_XXL,
    fontWeightBold,
    fontWeightRegular,
    fontSize_XL,
    fontSize_L,
    fontSize_S,
    lineHeight_L,
    lineHeight_M,
    lineHeight_S,
  } = props.theme.typography
  const handler = (fontSize: string, fontWeight: string, lineHeight: string, color?: string) => {
    return css`
      display: flex;
      align-items: center;
      font-size: ${fontSize};
      font-weight: ${fontWeight};
      line-height: ${lineHeight};
      color: ${color};
      gap: 10px;
      user-select: none;
    `
  }

  switch (props.component) {
    case 'large':
      return handler(fontSize_XXL, fontWeightBold, lineHeight_L)
    case 'h1':
      return handler(fontSize_XL, fontWeightBold, lineHeight_L)
    case 'h2':
      return handler(fontSize_L, fontWeightBold, lineHeight_M)
    case 'h3':
      return handler(fontSize_M, fontWeightBold, lineHeight_M)
    case 'subtitle1':
      return handler(fontSize_M, fontWeightBold, lineHeight_M)
    case 'subtitle2':
      return handler(fontSize_S, fontWeightBold, lineHeight_M)
    case 'body1':
      return handler(fontSize_M, fontWeightRegular, lineHeight_M)
    case 'body2':
      return handler(fontSize_S, fontWeightRegular, lineHeight_M)
    case 'overline':
      return handler(fontSize_S, fontWeightRegular, lineHeight_M)
    case 'caption':
      return handler(fontSize_XS, fontWeightRegular, lineHeight_S)
    case 'error':
      return handler(fontSize_S, fontWeightRegular, lineHeight_M, props.theme.colors.danger_300)
    case 'link':
      return handler(fontSize_S, fontWeightRegular, lineHeight_M)
    case 'link2':
      return handler(fontSize_XS, fontWeightRegular, lineHeight_S)
  }
})
