import { ComponentPropsWithoutRef, forwardRef } from 'react'

import styled, { css } from 'styled-components'

import { Typography } from '@/components'

export type PropsInputType = {
  name: string
  type?: 'text' | 'number' | 'email' | 'password' | 'search'
  error?: string | false | undefined
  onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>
export const Input = forwardRef<HTMLInputElement, PropsInputType>(
  ({ onChange, onValueChange, name, error, ...restProps }, ref) => {
    const upperName = name.charAt(0).toUpperCase() + name.slice(1)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      onValueChange?.(e.target.value)
    }

    return (
      <WrapperInput error={error}>
        <Typography className="label" as="body2">
          {upperName}
        </Typography>
        <input name={name} ref={ref} onChange={handleChange} {...restProps} />
        <Typography as="error">{error}</Typography>
      </WrapperInput>
    )
  }
)

const WrapperInput = styled.div<{
  error: string | false | undefined
}>(props => {
  const colors = props.theme.colors

  return css`
    position: relative;
    //input:-webkit-autofill,
    //input:-webkit-autofill:hover,
    //input:-webkit-autofill:focus,
    //textarea:-webkit-autofill,
    //textarea:-webkit-autofill:hover,
    //textarea:-webkit-autofill:focus,
    //select:-webkit-autofill,
    //select:-webkit-autofill:hover,
    //select:-webkit-autofill:focus {
    //  transition: background-color 5000s ease-in-out 0s;
    //}

    input {
      outline: none;
      transition: 0.5s;
      background: none;
      width: 17.75rem;
      padding: 0.38rem 0.75rem;
      flex-shrink: 0;
      border-radius: 0.125rem;
      border: 1px solid ${colors.dark_300};
      color: ${colors.dark_100};
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem;
    }
    .label {
      color: ${colors.dark_100};
    }
  `
})
