import { useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckboxPropsType } from '@/components'

export type ControlledCheckboxProps = UseControllerProps<any> &
  Omit<CheckboxPropsType, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = ({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...checkboxProps
}: ControlledCheckboxProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return (
    <Checkbox
      {...{
        onChange,
        checked: value,
        id: name,
        ...checkboxProps,
      }}
    />
  )
}
