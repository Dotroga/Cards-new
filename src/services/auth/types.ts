export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type User = {
  id: string
  email: string
  name: string
  isEmailVerified: boolean
  avatar: string
}

export type SignUpArgs = {
  html: string
  password: string
  email: string
  subject: string
  sendConfirmationEmail: false
}
