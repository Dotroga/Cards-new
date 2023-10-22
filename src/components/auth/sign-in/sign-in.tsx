import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { z } from 'zod'

import { Button, Card, ControlledCheckbox, Input, loginSchema, Typography } from '@/components'
import { Routes } from '@/router/path.ts'

export type LoginFormSchema = z.infer<typeof loginSchema>
type FormType<T> = {
  onSubmit: (data: T) => void
  loading?: boolean
}

export const SignIn: FC<FormType<LoginFormSchema>> = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography className="signIn" as={'large'}>
        Sign In
      </Typography>
      <Input {...register('email')} error={errors.email?.message} disabled={loading} />
      <Input
        {...register('password')}
        type="password"
        error={errors.password?.message}
        disabled={loading}
      />
      <ControlledCheckbox name="rememberMe" control={control} disabled={loading}>
        <Typography as={'body2'}>Remember me</Typography>
      </ControlledCheckbox>
      <Typography as={'link'} className="forgotPassword" to={Routes.ForgotPassword}>
        Forgot Password?
      </Typography>
      <Button type="submit" fullWidth={true} disabled={loading}>
        Sign In
      </Button>
      <Typography className="notAccount" as={'body2'}>{`Don't have an account?`}</Typography>
      <Typography className="signUpLink" as={'link'} to={Routes.SignUp}>
        Sign Up
      </Typography>
    </Form>
  )
}
const Form = styled(Card)`
  align-items: center;
  width: 26.25rem;
  height: 33rem;
  .signIn {
    margin-bottom: 20px;
  }
  .signUpLink {
    color: ${({ theme }) => theme.colors.accent_500};
  }
  .forgotPassword {
    margin-left: auto;
    margin-bottom: 66px;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.light_900};
    }
  }
  .notAccount {
    color: ${({ theme }) => theme.colors.light_900};
    margin: 20px 0 11px 0;
  }
`
