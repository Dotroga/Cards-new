import { CheckEmail } from '@/components'
import { Routes } from '@/router/path.ts'

export const CheckEmailPage = () => {
  return <CheckEmail to={Routes.SignIn} email={'hello'} />
}
