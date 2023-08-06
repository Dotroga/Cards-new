import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { z } from 'zod'

import { Button, Card, ControlledCheckbox, Input, loginSchema, Typography } from '@/components'

type LoginFormSchema = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
  }

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
    </Form>
  )
}

const Form = styled(Card)`
  width: 420px;
  height: 528px;
  padding: 40px;
`
