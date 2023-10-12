import { useNavigate } from 'react-router-dom'

import { SignUp, SignUpFormSchema } from '@/components'
import { Routes } from '@/router/path.ts'
import { useSignUpMutation } from '@/services/auth/auth.ts'

export const SignUpPage = () => {
  const [login] = useSignUpMutation()
  const navigate = useNavigate()
  const handleSignUp = (args: SignUpFormSchema) => {
    const { passwordConfirmation, ...rest } = args

    login(rest)
      .unwrap()
      .then(() => {
        navigate(Routes.SignIn)
      })
  }

  return <SignUp onSubmit={handleSignUp} />
}
