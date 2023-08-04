import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button, ControlledCheckbox, Input, loginSchema } from '@/components'

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />
      <Input {...register('email')} error={errors.email?.message} />
      <Input {...register('password')} error={errors.password?.message} />
      <ControlledCheckbox name="rememberMe" control={control}>
        Remember me
      </ControlledCheckbox>
      <Button type="submit">Submit</Button>
    </form>
  )
}
