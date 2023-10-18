import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { z } from 'zod'

import { Button, Card, Input, Typography } from '@/components'
import { Routes } from '@/router/path.ts'

export type ForgotPasswordSchema = z.infer<typeof schema>
type FormType<T> = {
  onSubmit: (data: T) => void
}
const schema = z.object({
  email: z.string().nonempty('Email is required').email(),
})

export const ForgotPassword: FC<FormType<ForgotPasswordSchema>> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(schema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography className="heading" as={'large'}>
        Forgot your password?
      </Typography>
      <Input {...register('email')} error={errors.email?.message} />
      <Typography as={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button fullWidth={true} type="submit">
        Send Instructions
      </Button>
      <Typography as={'body2'}>Did you remember your password?</Typography>
      <Typography className="signUpLink" as={'link'} to={Routes.SignIn}>
        Try logging in
      </Typography>
    </Form>
  )
}

const Form = styled(Card)`
  width: 26.25rem;
  height: 28.5rem;
  flex-direction: column;
  align-items: center;
  .signUpLink {
    color: ${({ theme }) => theme.colors.accent_500};
    margin-top: 0.69rem;
  }
  button {
    margin: 4.06rem 0 1.25rem 0;
  }
`
