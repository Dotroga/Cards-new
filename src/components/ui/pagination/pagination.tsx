import Pagination from '@mui/material/Pagination'
import { PaginationProps } from '@mui/material/Pagination/Pagination'
import styled, { css } from 'styled-components'
export const MyPagination = (props: PaginationProps) => {
  return <Wrapper {...props} shape="rounded" />
}

const Wrapper = styled(Pagination)(props => {
  const color = props.theme.colors

  return css`
    .MuiPaginationItem-text {
      color: ${color.light_100};
    }
    .css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
      background-color: ${color.light_100};
      color: ${color.dark_900};
      &:hover {
        background-color: ${color.light_100};
        color: ${color.dark_900};
      }
    }
  `
})
