import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { LoginFormSchema, SignIn } from '@/components'
import { useLoginMutation, useMeQuery } from '@/services/auth/auth.ts'

export const SignInPage = () => {
  const { data } = useMeQuery()
  const [signIn] = useLoginMutation()

  if (data) {
    toast(`Hello ${data.name}`)

    return <Navigate to={'/'} />
  }

  const handleSignIn = (args: LoginFormSchema) => {
    signIn(args)
      .unwrap()
      .then(() => {
        toast.info('Successful authorization')
      })
      .catch(e => {
        toast.error(e.data.message)
      })
  }

  return <SignIn onSubmit={handleSignIn} />
}
