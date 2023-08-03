import { ChangeEvent, ComponentPropsWithoutRef, FC } from 'react'

import { CheckboxStyled } from '@/components'

export type CheckboxPropsType = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  onValueChange?: (checked: ChangeEvent) => void
}

export const Checkbox: FC<CheckboxPropsType> = ({ children, onValueChange, ...restProps }) => {
  const { checked, disabled } = restProps

  return (
    <CheckboxStyled checked={checked} disabled={disabled}>
      <label className="checkbox">
        <input type="checkbox" onChange={onValueChange} {...restProps} />
        <svg className="first" viewBox="0 0 24 24">
          <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
        </svg>
        <svg className="second" viewBox="0 0 24 24">
          <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
        </svg>
      </label>
      {children}
    </CheckboxStyled>
  )
}
