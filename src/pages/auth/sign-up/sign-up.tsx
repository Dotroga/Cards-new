import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { SignUp, SignUpFormSchema } from '@/components'
import { Routes } from '@/router/path.ts'
import { useSignUpMutation } from '@/services/auth/auth.ts'
import { SignUpArgs } from '@/services/auth/types.ts'
import { errorHandler } from '@/utils/errorHandler.ts'

export const SignUpPage = () => {
  const [login, { isLoading }] = useSignUpMutation()
  const navigate = useNavigate()
  const handleSignUp = (args: SignUpFormSchema) => {
    const { passwordConfirmation, ...rest } = args
    const body: SignUpArgs = {
      html:
        '<b>Hello, ##name##!</b>' +
        '<br/>Please confirm your email by clicking on the link below:<br/>' +
        '<a href="http://localhost:3000/confirm-email/##token##">Confirm email</a>. ',
      sendConfirmationEmail: true,
      ...rest,
    }

    login(body)
      .unwrap()
      .then(() => {
        navigate(Routes.SignIn)
      })
      .catch(e => {
        toast.error(errorHandler(e))
      })
  }

  return <SignUp onSubmit={handleSignUp} loading={isLoading} />
}
