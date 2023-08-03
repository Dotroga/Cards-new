import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, ControlledCheckbox, Input } from '@/components'

type LoginFormSchema = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().nonempty('Email is required').email(),
  password: z
    .string()
    .nonempty('Password is required')
    .min(3, 'Password cannot be shorter than 3 characters'),
  rememberMe: z.boolean().default(false),
})

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} error={errors.email?.message} />
      <Input {...register('password')} error={errors.password?.message} />
      <ControlledCheckbox name="rememberMe" control={control}>
        Remember me
      </ControlledCheckbox>
      <Button type="submit">Submit</Button>
    </form>
  )
}
