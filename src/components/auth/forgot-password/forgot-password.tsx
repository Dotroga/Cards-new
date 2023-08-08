import { FC } from 'react'

import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'

import { Button, Card, Input, Typography } from '@/components'

type FormSchema = z.infer<typeof schema>
type FormType<T> = {
  onSubmit: (data: T) => void
}

export const schema = z.object({
  email: z.string().nonempty('Email is required').email(),
})

export const ForgotPassword: FC<FormType<FormSchema>> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Typography as={'large'}>Forgot your password?</Typography>
      <Input {...register('email')} error={errors.email?.message} />
      <Typography as={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button type="submit">Send Instructions</Button>
      <Typography as={'body2'}>{`Don't have an account?`}</Typography>
      <Typography className="signUpLink" as={'link'} href={'/'}>
        Try logging in
      </Typography>
    </Form>
  )
}

const Form = styled(Card)`
  align-items: center;
  width: 420px;
  height: 456px;
  padding: 33px 36px 29px 36px;
  .signUpLink {
    color: ${({ theme }) => theme.colors.accent_500};
  }
`
