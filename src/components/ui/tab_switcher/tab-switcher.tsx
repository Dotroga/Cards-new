import { FC } from 'react'

import styled, { css } from 'styled-components'

import { Typography } from '@/components'

export type TabSwitcherPropsType = {
  value?: string
  onClick(value: string): void
  array: string[]
  disabled?: boolean
}
export const TabSwitcher: FC<TabSwitcherPropsType> = props => {
  const { array, value, onClick, disabled } = props

  return (
    <ToggleGroup>
      {array.map(i => (
        <ToggleItem
          key={i}
          value={i}
          disabled={disabled}
          onClick={() => onClick(i)}
          active={i === value ? 'true' : 'false'}
        >
          <Typography className={'Text'} as={'body1'}>
            {i}
          </Typography>
        </ToggleItem>
      ))}
    </ToggleGroup>
  )
}
type StyledProps = Omit<TabSwitcherPropsType, 'array'> & { active: string }

const ToggleGroup = styled.div`
  display: inline-flex;
  background-color: #4c4c4c;
  padding: 1px;
  gap: 1px;
`

const ToggleItem = styled.span<StyledProps>(props => {
  const { active, disabled, theme } = props

  return css`
    display: flex;
    padding: 6px 24px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    white-space: nowrap;
    ${active === 'true' &&
    css`
      box-shadow: 0 0 0 1px ${theme.colors.accent_500};
    `};
    background: ${active === 'true' ? theme.colors.accent_500 : 'black'};
    border: none;
    user-select: none;
    &:hover {
      background: ${active === 'false' && !disabled && theme.colors.dark_300};
    }
    ${disabled &&
    css`
      background: ${theme.colors.dark_700};
      box-shadow: none;
      cursor: default;
      .Text {
        color: ${theme.colors.dark_300};
      }
    `}
  `
})
