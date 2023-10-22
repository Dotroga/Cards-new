import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CreateNewPassword, CreatePasswordFormSchema } from '@/components'
import { Routes } from '@/router/path.ts'
import { useResetPasswordMutation } from '@/services/auth/auth.ts'
import { errorHandler } from '@/utils/errorHandler.ts'

export const ResetPasswordPage = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  const [resetPassword] = useResetPasswordMutation()
  const onSubmit = (data: CreatePasswordFormSchema) => {
    resetPassword({ password: data.password, token: token ?? '' })
      .unwrap()
      .then(() => {
        toast.success('The password has been successfully changed')
        navigate(Routes.SignIn, { state: 'awfawf' })
      })
      .catch(e => {
        toast.error(errorHandler(e))
      })
  }

  return <CreateNewPassword onSubmit={onSubmit} />
}
