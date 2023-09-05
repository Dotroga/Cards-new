import { FC } from 'react'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { ToggleGroupSingleProps } from '@radix-ui/react-toggle-group'
import styled, { css } from 'styled-components'

import { Typography } from '@/components'

export type TabSwitcherPropsType = {
  array: string[]
} & ToggleGroupSingleProps
export const TabSwitcher: FC<TabSwitcherPropsType> = ({ array, value, ...rest }) => {
  console.log(value)

  return (
    <ToggleGroupRoot value={value} {...rest}>
      {array.map(i => (
        <ToggleGroupItem key={i} value={i} active={i === value ? 'true' : 'false'}>
          <Typography as={'body1'}>{i}</Typography>
        </ToggleGroupItem>
      ))}
    </ToggleGroupRoot>
  )
}

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  display: inline-flex;
  background-color: #4c4c4c;
  padding: 1px;
  gap: 1px;
`

const ToggleGroupItem = styled(ToggleGroup.Item)<{ value: string; active: string }>`
  display: flex;
  padding: 6px 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${props =>
    props.active === 'true' &&
    css`
      box-shadow: 0 0 0 1px ${props => props.theme.colors.accent_500};
    `};
  background: ${props => (props.active === 'true' ? props.theme.colors.accent_500 : 'black')};
  border: none;
`
