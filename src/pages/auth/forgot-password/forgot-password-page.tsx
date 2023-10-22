import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ForgotPassword, ForgotPasswordSchema } from '@/components'
import { Routes } from '@/router/path.ts'
import { useRecoverPasswordMutation } from '@/services/auth/auth.ts'
import { errorHandler } from '@/utils/errorHandler.ts'

export const ForgotPasswordPage = () => {
  const navigate = useNavigate()
  const [recoverPassword] = useRecoverPasswordMutation()
  const url = import.meta.env.VITE_BASE_URL

  const onSubmit = (data: ForgotPasswordSchema) => {
    recoverPassword({
      email: data.email,
      html:
        '<h1>Restoring the password to the Card account</h1>' +
        '<h2> Hi, ##name##</h2>' +
        `<p>If you need to recover your password, click  "<a href='${url}reset-password/##token##'>here</a> "</p>`,
    })
      .unwrap()
      .then(() => {
        toast.success('We have sent an email with instructions to your email')
        navigate(Routes.CheckEmail, { state: data.email })
      })
      .catch(e => {
        toast.error(errorHandler(e))
      })
  }

  return <ForgotPassword onSubmit={onSubmit} />
}
