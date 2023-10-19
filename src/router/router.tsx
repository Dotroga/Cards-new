import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Outlet,
  Navigate,
} from 'react-router-dom'

import { Header } from '@/components/Header/Header.tsx'
import { Unauthorized } from '@/pages/401/unauthorized.tsx'
import { CheckEmailPage } from '@/pages/auth/check-email/check-email.tsx'
import { CreateNewPasswordPage } from '@/pages/auth/create-new-password/create-new-password.tsx'
import { ForgotPasswordPage } from '@/pages/auth/forgot-password/forgot-password-page.tsx'
import { SignInPage } from '@/pages/auth/sign-in/sign-in.tsx'
import { SignUpPage } from '@/pages/auth/sign-up/sign-up.tsx'
import { Decks } from '@/pages/decks/decks.tsx'
import { Routes } from '@/router/path.ts'
import { useMeQuery } from '@/services/auth/auth.ts'

const publicRoutes: RouteObject[] = [
  {
    path: Routes.SignIn,
    element: <SignInPage />,
  },
  {
    path: Routes.SignUp,
    element: <SignUpPage />,
  },
  {
    path: Routes.Unauthorized,
    element: <Unauthorized />,
  },
  {
    path: Routes.ForgotPassword,
    element: <ForgotPasswordPage />,
  },
  {
    path: Routes.CreateNewPassword,
    element: <CreateNewPasswordPage />,
  },
  {
    path: Routes.CheckEmail,
    element: <CheckEmailPage />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: Routes.Decks,
    element: <Decks />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>Loading...</div>

  return data ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate to={Routes.SignIn} />
  )
}
