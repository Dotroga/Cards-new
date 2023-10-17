import { FC, SVGProps } from 'react'

import styled from 'styled-components'

import { SVG } from './SVG.styled.ts'
export const CloseIcon: FC<SVGProps<SVGSVGElement>> = ({ onClick }) => (
  <Close viewBox="0 0 24 24" onClick={onClick}>
    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" />
    <clipPath id="clip0_24123_865">
      <rect width="24" height="24" fill="white" />
    </clipPath>
  </Close>
)

const Close = styled(SVG)`
  cursor: pointer;
  transition: 0.2s;
  :hover {
    transform: rotate(90deg);
  }
  :active {
    fill: ${props => props.theme.colors.dark_100};
    transform: rotate(90deg) scale(1.1);
  }
`
