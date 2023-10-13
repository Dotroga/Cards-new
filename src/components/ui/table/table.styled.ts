import styled, { css } from 'styled-components'

import { CellProps, HeadCellProps } from '@/components/ui/table/table.tsx'

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.light_100};
  border: 1px solid ${({ theme }) => theme.colors.dark_500};
`

const Head = styled.th<HeadCellProps>(props => {
  const sortable = props.sortable
  const typography = props.theme.typography
  const width = props.width

  return css`
    width: ${width};
    padding: 6px 18px;
    font-size: ${typography.fontSize_S};
    font-weight: ${typography.fontWeightRegular};
    line-height: ${typography.lineHeight_M};
    background-color: ${({ theme }) => (sortable ? theme.colors.dark_100 : theme.colors.dark_500)};
    user-select: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.dark_300};
    }
    span {
      user-select: none;
      gap: 4px;
      cursor: ${sortable ? 'pointer' : 'default'};
    }

    svg {
      transition: transform 0.2s ease-in-out;
    }
  `
})

const Cell = styled.td<CellProps>(props => {
  const typography = props.theme.typography

  return css`
    padding: 6px 18px;
    font-weight: ${typography.fontWeightRegular};
    font-size: ${typography.fontSize_S};
    line-height: ${typography.lineHeight_M};
    border-bottom: ${({ theme }) => theme.colors.dark_500};
  `
})

const Empty = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`

export const StyledTable = {
  Table,
  Head,
  Cell,
  Empty,
}
