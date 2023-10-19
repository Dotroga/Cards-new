import { ForgotPassword, ForgotPasswordSchema } from '@/components'
import { useRecoverPasswordMutation } from '@/services/auth/auth.ts'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const url = import.meta.env.VITE_BASE_URL

  const onSubmit = (data: ForgotPasswordSchema) => {
    recoverPassword({
      email: data.email,
      html:
        '<h1>Restoring the password to the Card account</h1>' +
        '<h2> Hi, ##name##</h2>' +
        `<p>If you need to recover your password, click  "<a href='${url}create-new-password/##token##'>here</a> "</p>`,
    })
  }

  return <ForgotPassword onSubmit={onSubmit} />
}
