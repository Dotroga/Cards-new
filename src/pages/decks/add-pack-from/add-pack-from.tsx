import styled from 'styled-components'

import { Button, Card, Checkbox, Input, Typography } from '@/components'
import { CloseIcon } from '@/components/icons/close.tsx'
import { appActions } from '@/services/app/app.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

export const AddPackFrom = () => {
  const dispatch = useAppDispatch()
  // const showForm = useAppSelector(isShowAddPackForm)
  const closeShowForm = () => dispatch(appActions.changeShowAddPackFrom({ isShow: false }))

  return (
    <Form>
      <div className="add-pack-header">
        <Typography as={'h2'}>Add New Pack</Typography>
        <CloseIcon onClick={closeShowForm} />
      </div>
      <div className="add-pack-body">
        <Input name="Name Pack" placeholder={'Name'} />
        <Checkbox> Private Pack</Checkbox>
        <div className="add-pack-buttons">
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={() => {}}>Add New Pack</Button>
        </div>
      </div>
    </Form>
  )
}

const Form = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  .add-pack-header {
    display: flex;
    justify-content: space-between;
    padding: 18px 24px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark_300};
  }
  .add-pack-body {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 542px;
    padding: 24px;
  }
  .add-pack-buttons {
    display: flex;
    justify-content: space-between;
  }
`
