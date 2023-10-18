import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { styled } from 'styled-components'
import { z } from 'zod'

import { Button, Card, Input, Typography } from '@/components'
import { Routes } from '@/router/path.ts'

type FormSchema = z.infer<typeof schema>
type FormType<T> = {
  onSubmit: (data: T) => void
}

const schema = z.object({
  password: z
    .string()
    .nonempty('Password is required')
    .min(3, 'Password cannot be shorter than 3 characters'),
})

export const CreateNewPassword = ({ onSubmit }: FormType<FormSchema>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
  })

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Typography className="heading" as={'large'}>
        Create new password
      </Typography>
      <Input type={'password'} {...register('password')} error={errors.password?.message} />
      <Typography as={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button fullWidth={true} type="submit">
        Create New Password
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
