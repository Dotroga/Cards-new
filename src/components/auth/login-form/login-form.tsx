import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button.tsx'
import { Checkbox } from '@/components/ui/checkbox/checkbox.tsx'
import { Input } from '@/components/ui/input/input.tsx'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>()
  const {
    field: { value, onChange },
  } = useController({ name: 'rememberMe', control, defaultValue: false })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} />
      <Input {...register('password')} />
      <Checkbox checked={value} onValueChange={onChange}>
        Remember me
      </Checkbox>
      <Button type="submit">Submit</Button>
    </form>
  )
}
