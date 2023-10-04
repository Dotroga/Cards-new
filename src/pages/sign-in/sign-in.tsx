import { SignIn } from '@/components'
import { useLoginMutation } from '@/services/auth/auth.ts'

export const SignInPage = () => {
  const [signIn, { loading, error }] = useLoginMutation()

  return <SignIn onSubmit={signIn} />
}
