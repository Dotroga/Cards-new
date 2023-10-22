import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'

import { Button, Card, Input, signUpSchema, Typography } from '@/components'
import { Routes } from '@/router/path.ts'

export type SignUpFormSchema = z.infer<typeof signUpSchema>
type FormType<T> = {
  onSubmit: (data: T) => void
  loading: boolean
}

export const SignUp: FC<FormType<SignUpFormSchema>> = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography className={'header'} as={'large'}>
        Sign Up
      </Typography>
      <Input {...register('email')} error={errors.email?.message} disabled={loading} />
      <Input
        {...register('password')}
        type="password"
        error={errors.password?.message}
        disabled={loading}
      />
      <Input
        {...register('passwordConfirmation')}
        type="password"
        error={errors.passwordConfirmation?.message}
        disabled={loading}
      />
      <Button type="submit" fullWidth={true} disabled={loading}>
        Sign Up
      </Button>
      <Typography as={'body2'}>Already have an account?</Typography>
      <Typography className="signUpLink" as={'link'} to={Routes.SignIn}>
        Sign In
      </Typography>
    </Form>
  )
}

const Form = styled(Card)`
  align-items: center;
  width: 26.25rem;
  height: 33rem;
  .header {
    margin-bottom: 20px;
  }
  .signUpLink {
    color: ${({ theme }) => theme.colors.accent_500};
    margin-top: 11px;
  }
  button {
    margin-top: 47px;
    margin-bottom: 20px;
  }
`
