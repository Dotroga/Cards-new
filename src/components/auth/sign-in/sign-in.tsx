import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'

import { Button, Card, ControlledCheckbox, Input, loginSchema, Typography } from '@/components'

type LoginFormSchema = z.infer<typeof loginSchema>
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
      <Typography as={'large'}>Sign In</Typography>
      <DevTool control={control} />
      <Input {...register('email')} error={errors.email?.message} />
      <Input {...register('password')} type="password" error={errors.password?.message} />
      <ControlledCheckbox name="rememberMe" control={control}>
        Remember me
      </ControlledCheckbox>
      <Button type="submit">Sign In</Button>
      <Typography as={'body2'}>{`Don't have an account?`}</Typography>
      <Typography className="signUpLink" as={'link'} href={'/'}>
        Sign Up
      </Typography>
    </Form>
  )
}

const Form = styled(Card)`
  align-items: center;
  width: 420px;
  height: 528px;
  padding: 33px 36px 29px 36px;
  .signUpLink {
    color: ${({ theme }) => theme.colors.accent_500};
  }
`
