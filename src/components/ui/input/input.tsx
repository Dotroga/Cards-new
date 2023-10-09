import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { Eye, Typography, WrapperInput } from '@/components'

export type PropsInputType = {
  name?: string
  type?: 'text' | 'number' | 'email' | 'password' | 'search'
  error?: string | undefined
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>
export const Input = forwardRef<HTMLInputElement, PropsInputType>((props, ref) => {
  const { onChange, disabled, onValueChange, type, name, error, ...restProps } = props
  const upperName = name && name.charAt(0).toUpperCase() + name.slice(1)
  const [showPass, setShowPass] = useState(type !== 'password')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e)
    onValueChange?.(e.target.value)
  }
  const handleTogglePassword = () => setShowPass(!showPass)

  return (
    <WrapperInput error={error} disabled={disabled} className="textField">
      <Typography className="label" as="body2">
        {upperName}
      </Typography>
      <input
        className={'input'}
        name={name}
        type={showPass ? 'text' : 'password'}
        ref={ref}
        onChange={handleChange}
        disabled={disabled}
        {...restProps}
      />
      {type === 'password' && (
        <Eye show={showPass} setShow={handleTogglePassword} disabled={disabled!} />
      )}
      <Typography className="error" as="error">
        {error}
      </Typography>
    </WrapperInput>
  )
})
