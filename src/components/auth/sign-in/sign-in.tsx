import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { z } from 'zod'

import { Button, Card, ControlledCheckbox, Input, loginSchema, Typography } from '@/components'

export type LoginFormSchema = z.infer<typeof loginSchema>
type FormType<T> = {
  onSubmit: (data: T) => void
}

export const SignIn: FC<FormType<LoginFormSchema>> = ({ onSubmit }) => {
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
      <DevTool control={control} />
      <Input {...register('email')} error={errors.email?.message} />
      <Input {...register('password')} type="password" error={errors.password?.message} />
      <ControlledCheckbox name="rememberMe" control={control}>
        <Typography as={'body2'}>Remember me</Typography>
      </ControlledCheckbox>
      <Typography as={'body2'} className="forgotPassword">
        Forgot Password?
      </Typography>
      <Button type="submit" fullWidth={true}>
        Sign In
      </Button>
      <Typography className="notAccount" as={'body2'}>{`Don't have an account?`}</Typography>
      <Link to={'/sign-up'}>
        <Typography className="signUpLink" as={'link'}>
          Sign Up
        </Typography>
      </Link>
    </Form>
  )
}

const Form = styled(Card)`
  align-items: center;
  width: 420px;
  height: 528px;
  padding: 33px 36px 29px 36px;
  .signIn {
    margin-bottom: 27px;
  }
  .signUpLink {
    color: ${({ theme }) => theme.colors.accent_500};
  }
  .forgotPassword {
    margin-left: auto;
    margin-bottom: 66px;
  }
  .notAccount {
    color: ${({ theme }) => theme.colors.light_900};
    margin: 20px 0 11px 0;
  }
`
