import { FC, useRef } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'

import { Button, Card, ControlledCheckbox, Input, Typography } from '@/components'
import { CloseIcon } from '@/components/icons/close.tsx'
import { isShowAddPackForm } from '@/services/app/app.selectors.ts'
import { appActions } from '@/services/app/app.slice.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'
import { useOutsideClick } from '@/utils/useOutsideClick.ts'

export type AddPackSchemaType = z.infer<typeof addPackSchema>
type AddPackFormType<T> = {
  onSubmit: (data: T) => void
  type: 'add' | 'edit'
}

const addPackSchema = z.object({
  name: z
    .string()
    .nonempty('Name is required')
    .min(3, 'At least three letters')
    .max(72, 'Name is too long'),
  isPrivate: z.boolean().default(false),
})

export const AddPackFrom: FC<AddPackFormType<AddPackSchemaType>> = ({ onSubmit, type }) => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLFormElement>(null)

  const showForm = useAppSelector(isShowAddPackForm)
  const closeShowForm = () => dispatch(appActions.changeShowAddPackFrom({ isShow: false }))
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddPackSchemaType>({
    resolver: zodResolver(addPackSchema),
  })

  useOutsideClick(ref, closeShowForm, showForm)

  return (
    <Form onSubmit={handleSubmit(onSubmit)} ref={ref}>
      <div className="add-pack-header">
        <Typography as={'h2'}>{type === 'add' ? 'Add New Pack' : 'Edit Pack'}</Typography>
        <CloseIcon onClick={closeShowForm} />
      </div>
      <div className="add-pack-body">
        <Input error={errors.name?.message} placeholder={'Name'} {...register('name')} />
        <ControlledCheckbox name="isPrivate" control={control}>
          Private Pack
        </ControlledCheckbox>
        <div className="add-pack-buttons">
          <Button onClick={closeShowForm} type={'button'} variant={'secondary'}>
            Cancel
          </Button>
          <Button type="submit">{type === 'add' ? 'Add New Pack' : 'Save Changes'}</Button>
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
