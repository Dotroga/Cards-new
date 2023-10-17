import Pagination from '@mui/material/Pagination'
import { PaginationProps } from '@mui/material/Pagination/Pagination'
import { styled, css } from 'styled-components'
export const MyPagination = (props: PaginationProps) => {
  return <Wrapper {...props} shape="rounded" />
}

const Wrapper = styled(Pagination)(props => {
  const color = props.theme.colors

  return css`
    display: flex;
    .MuiPaginationItem-text {
      color: ${color.light_100};
      @media (max-width: 800px) {
        margin: 0;
        padding: 0;
      }
    }
    .css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
      background-color: ${color.light_100};
      color: ${color.dark_900};
      width: 2.25rem;
      height: 2.25rem;
      @media (max-width: 800px) {
        margin: 0;
        padding: 0;
      }
      &:hover {
        background-color: ${color.light_100};
        color: ${color.dark_900};
      }
    }
  `
})
