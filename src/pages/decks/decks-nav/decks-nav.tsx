import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { Button, Input, Range, TabSwitcher } from '@/components'
import { decksActions } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

export const DecksNav = () => {
  const dispatch = useAppDispatch()
  const [range, setRange] = useState([0, 20])

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(decksActions.changeCardsCount({ value: range }))
    }, 1000)

    return () => clearTimeout(id)
  })

  return (
    <DecksNavWrapper>
      <Input placeholder="Input search" />
      <TabSwitcher value={'All card'} onClick={() => {}} array={['My card', 'All card']} />
      <Range onValueChange={setRange} min={0} max={30} value={[range[0], range[1]]} />
      <Button>Clear filter</Button>
    </DecksNavWrapper>
  )
}

const DecksNavWrapper = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  align-items: flex-start;
  gap: 24px;
`
