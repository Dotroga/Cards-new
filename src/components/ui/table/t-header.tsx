import { ComponentPropsWithoutRef, FC } from 'react'

import { Table } from './table'

import { Sort } from '@/services/common/types'
export type Column = {
  key: string
  title: string
}

export const Header: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      sort?: Sort
      onSort?: (sort: Sort) => void
    },
    'children'
  >
> = ({ columns, sort, onSort, ...restProps }) => {
  const handleSort = (key: string) => () => {
    if (!onSort) return
    if (sort?.key !== key) return onSort({ key, direction: 'asc' })
    if (sort.direction === 'desc') return onSort(null)

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <thead {...restProps}>
      <Table.Row>
        {columns.map(({ title, key }) => (
          <Table.HeadCell key={key} onClick={handleSort(key)}>
            {title}
            {sort && sort.key === key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </Table.HeadCell>
        ))}
      </Table.Row>
    </thead>
  )
}
