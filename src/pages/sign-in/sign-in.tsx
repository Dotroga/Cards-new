import { useEffect } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

import { LoginFormSchema, SignIn } from '@/components'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth.ts'

export const SignInPage = () => {
  const [signIn, { loading, error }] = useLoginMutation()
  const { me, isLoading, isError } = useMeQuery({})
  const navigate = useNavigate()

  if (isLoading) return <div>Loading...</div>
  // if (me) return <Navigate to={'/'} />

  const handleSignIn = (data: LoginFormSchema) => {
    signIn(data)
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  return <SignIn onSubmit={handleSignIn} />
}
