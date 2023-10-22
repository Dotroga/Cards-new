import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginFormSchema, SignIn } from '@/components'
import { Routes } from '@/router/path.ts'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth.ts'
import { errorHandler } from '@/utils/errorHandler.ts'

export const SignInPage = () => {
  const { data } = useMeQuery()
  const [signIn, { isLoading }] = useLoginMutation()

  if (data) {
    toast(`Hello ${data.name}`)

    return <Navigate to={Routes.Decks} />
  }
  const handleSignIn = (args: LoginFormSchema) => {
    signIn(args)
      .unwrap()
      .then(() => {
        toast.info('Successful authorization')
      })
      .catch(e => {
        toast.error(errorHandler(e))
      })
  }

  return <SignIn onSubmit={handleSignIn} loading={isLoading} />
}
