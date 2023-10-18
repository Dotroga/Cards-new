import { ForgotPassword, ForgotPasswordSchema } from '@/components'
import { useRecoverPasswordMutation } from '@/services/auth/auth.ts'

export const ForgotPasswordPage = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const onSubmit = (data: ForgotPasswordSchema) => {
    recoverPassword({
      email: data.email,
      html:
        '<h1>Restoring the password to the Card account</h1>' +
        '<h2> Hi, ##name##</h2>' +
        '<p>If you need to recover your password, click  "<a href=\'https://cards-dotroga.vercel.app/set-new-password/##token##\'>here</a> "</p>',
    })
  }

  return <ForgotPassword onSubmit={onSubmit} />
}
