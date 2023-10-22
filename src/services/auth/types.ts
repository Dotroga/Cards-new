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
  html?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}

export type ResendVerificationEmailArgs = {
  html?: string
  email: string
  subject?: string
}
