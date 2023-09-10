import { ComponentProps, ComponentPropsWithoutRef, FC } from 'react'

import { BiChevronUp } from 'react-icons/bi'

import { StyledTable } from './table.styled'

import { Typography } from '@/components'
import { Sort } from '@/services/common/types'

export type RootProps = ComponentPropsWithoutRef<'table'>

export const Root: FC<RootProps> = props => {
  return <StyledTable.Table {...props} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type Column = { title: string; key: string; sortable?: boolean }
export const Header: FC<
  Omit<
    HeadProps & {
      columns: Column[]
      sort?: Sort
      onSort?: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) return

    if (sort?.key !== key) return onSort({ key, direction: 'asc' })

    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <Head {...restProps}>
      <Row>
        {columns.map(({ title, key, sortable }) => (
          <HeadCell key={key} onClick={handleSort(key, sortable)} sortable={sortable}>
            {title}
            {sort?.key === key ? <BiChevronUp /> : ''}
          </HeadCell>
        ))}
      </Row>
    </Head>
  )
}
export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = props => {
  return <tr {...props} />
}

export type HeadCellProps = ComponentPropsWithoutRef<'th'> & {
  sortable?: boolean
}

export const HeadCell: FC<HeadCellProps> = ({ className, children, ...rest }) => {
  return (
    <StyledTable.Head {...rest}>
      <Typography as={'subtitle2'}>{children}</Typography>
    </StyledTable.Head>
  )
}

export type CellProps = ComponentPropsWithoutRef<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  return <StyledTable.Cell {...rest} />
}

export const Empty: FC<ComponentProps<'div'>> = ({}) => {
  return (
    <StyledTable.Empty>
      <Typography as={'h2'}>Пока тут еще нет данных! :(</Typography>
    </StyledTable.Empty>
  )
}

export type TableProps = {}
export const TableComponent = () => {}

export const Table = {
  Root,
  Head,
  Header,
  Body,
  Row,
  HeadCell,
  Cell,
  Empty,
}
