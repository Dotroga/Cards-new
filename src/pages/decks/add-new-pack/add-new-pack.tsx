import styled from 'styled-components'

import { AddPackFrom, AddPackSchemaType, Button, Typography } from '@/components'
import { isShowAddPackForm } from '@/services/app/app.selectors.ts'
import { appActions } from '@/services/app/app.slice.ts'
import { useCreatedDeckMutation } from '@/services/decks'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const AddNewPack = () => {
  const dispatch = useAppDispatch()

  const showForm = useAppSelector(isShowAddPackForm)
  const changeShowForm = () => dispatch(appActions.changeShowAddPackFrom({ isShow: true }))

  const [createDeck, { isLoading }] = useCreatedDeckMutation()
  const handleCreateDeck = (data: AddPackSchemaType) => createDeck(data)

  return (
    <Wrapper>
      {isLoading && <div>Loading</div>}
      <Typography as={'large'}>Packs list</Typography>
      <Button onClick={changeShowForm}>Add New Pack</Button>
      {showForm && <AddPackFrom type={'add'} onSubmit={handleCreateDeck} isLoading={isLoading} />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`
