import styled from 'styled-components'

const Table = styled.table`
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.light_100};
  border: 1px solid ${({ theme }) => theme.colors.dark_500};
`

export const StyledTable = {
  Table,
}
