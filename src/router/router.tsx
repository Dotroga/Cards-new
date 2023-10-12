import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Outlet,
  Navigate,
} from 'react-router-dom'

import { Unauthorized } from '@/pages/401/unauthorized.tsx'
import { Decks } from '@/pages/decks/decks.tsx'
import { SignInPage } from '@/pages/sign-in/sign-in.tsx'
import { SignUpPage } from '@/pages/sign-up/sign-up.tsx'
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

  return data ? <Outlet /> : <Navigate to={Routes.Unauthorized} />
}
