import styled, { css } from 'styled-components'

import { HeadCellProps } from '@/components/ui/table/table.tsx'

const Table = styled.table`
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.light_100};
  border: 1px solid ${({ theme }) => theme.colors.dark_500};
`

const Head = styled.th<HeadCellProps>(props => {
  const sortable = props.sortable

  return css`
    padding: 6px 24px;
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-medium);
    line-height: var(--line-height-m);
    background-color: ${({ theme }) => theme.colors.dark_500};

    span {
      user-select: none;
      display: flex;
      gap: 4px;
      align-items: center;
      cursor: ${sortable ? 'pointer' : 'default'};
    }

    svg {
      transition: transform 0.2s ease-in-out;
    }
  `
})

export const StyledTable = {
  Table,
  Head,
}
