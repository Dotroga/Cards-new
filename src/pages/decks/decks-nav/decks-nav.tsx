import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { Button, Input, Range, TabSwitcher, Typography } from '@/components'
import { Trash } from '@/components/icons/trash.tsx'
import { decksActions } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

export const DecksNav = () => {
  const dispatch = useAppDispatch()
  const [range, setRange] = useState([0, 25])

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(decksActions.changeCardsCount({ value: range }))
    }, 1000)

    return () => clearTimeout(id)
  }, [range])

  return (
    <DecksNavWrapper>
      <Input placeholder="Input search" />
      <Box>
        <Typography as={'body2'}>Show packs cards</Typography>
        <TabSwitcher value={'All Cards'} onClick={() => {}} array={['My Cards', 'All Cards']} />
      </Box>
      <Box>
        <Typography as={'body2'}>Number of cards</Typography>
        <Range onValueChange={setRange} min={0} max={30} value={[range[0], range[1]]} />
      </Box>
      <Button variant={'secondary'} onClick={() => dispatch(decksActions.clearFilter())}>
        <Trash />
        Clear Filter
      </Button>
    </DecksNavWrapper>
  )
}

const DecksNavWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 24px;
  @media (max-width: 1000px) {
    gap: 10px;
  }
  @media (min-width: 1300px) {
    gap: 36px;
  }
  align-items: flex-end;
  margin-bottom: 36px;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
