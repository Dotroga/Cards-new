import { useParams } from 'react-router-dom'

import { CreateNewPassword } from '@/components'

export const CreateNewPasswordPage = () => {
  const { token } = useParams()
  const onSubmit = () => {}

  console.log(token)

  return <CreateNewPassword onSubmit={onSubmit} />
}
