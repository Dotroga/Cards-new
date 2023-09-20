import styled from 'styled-components'

import { Button, Typography } from '@/components'
import { AddPackFrom } from '@/pages/decks/add-pack-from/add-pack-from.tsx'
import { isShowAddPackForm } from '@/services/app/app.selectors.ts'
import { appActions } from '@/services/app/app.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const AddNewPack = () => {
  const dispatch = useAppDispatch()
  const showForm = useAppSelector(isShowAddPackForm)
  const changeShowForm = () => dispatch(appActions.changeShowAddPackFrom({ isShow: true }))

  return (
    <Wrapper>
      <Typography as={'large'}>Packs list</Typography>
      <Button onClick={changeShowForm}>Add New Pack</Button>
      {showForm && <AddPackFrom />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`
