import { useNavigate } from 'react-router-dom'

import { SignUp, SignUpFormSchema } from '@/components'
import { useSignUpMutation } from '@/services/auth/auth.ts'

export const SignUpPage = () => {
  const [login] = useSignUpMutation()
  const navigate = useNavigate()
  const handleSignUp = (args: SignUpFormSchema) => {
    const { passwordConfirmation, ...rest } = args

    login(rest)
      .unwrap()
      .then(() => {
        navigate('/login')
      })
  }

  return <SignUp onSubmit={handleSignUp} />
}
