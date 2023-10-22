import { useLocation } from 'react-router-dom'

import { CheckEmail } from '@/components'
import { Routes } from '@/router/path.ts'

export const CheckEmailPage = () => {
  const location = useLocation()

  return <CheckEmail to={Routes.SignIn} email={location.state} />
}
