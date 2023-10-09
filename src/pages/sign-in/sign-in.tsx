import { Navigate, useNavigate } from 'react-router-dom'

import { LoginFormSchema, SignIn } from '@/components'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth.ts'

export const SignInPage = () => {
  const navigate = useNavigate()
  const { data, isLoading, refetch } = useMeQuery()
  const [signIn, { loading, error }] = useLoginMutation()

  if (isLoading) return <div>Loading...</div>
  if (data) return <Navigate to={'/'} />

  const handleSignIn = (data: LoginFormSchema) => {
    signIn(data)
      .unwrap()
      .then(() => {
        refetch()
        navigate('/')
      })
  }

  return <SignIn onSubmit={handleSignIn} />
}
