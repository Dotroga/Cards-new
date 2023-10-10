import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'

import { Button, Card, Input, signUpSchema, Typography } from '@/components'

export type SignUpFormSchema = z.infer<typeof signUpSchema>
type FormType<T> = {
  onSubmit: (data: T) => void
}

export const SignUp: FC<FormType<SignUpFormSchema>> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpSchema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Typography as={'large'}>Sign Up</Typography>
      <Input {...register('email')} error={errors.email?.message} />
      <Input {...register('password')} type="password" error={errors.password?.message} />
      <Input
        {...register('passwordConfirmation')}
        type="password"
        error={errors.passwordConfirmation?.message}
      />
      <Button type="submit">Sign Up</Button>
      <Typography as={'body2'}>Already have an account?</Typography>
      <Typography className="signUpLink" as={'link'} to={'/login'}>
        Sign In
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
