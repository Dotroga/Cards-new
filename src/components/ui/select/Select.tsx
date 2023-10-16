import { FC, memo, useRef, useState } from 'react'

import styled from 'styled-components'

import { ArrowIcon } from '@/components/icons/arrow.tsx'
import { SelectWrapper } from '@/components/ui/select/Select.styled.ts'
import { useOutsideClick } from '@/utils/useOutsideClick.ts'

type SelectPropsType = {
  arr: string[] | number[]
  value: string | number
  onChange?: (value: string | number) => void
}

export const Select: FC<SelectPropsType> = memo(props => {
  const { arr, value, onChange } = props
  const ref = useRef<HTMLDivElement>(null)
  const [visiblePopUp, setVisiblePopUp] = useState(false)
  const changeVisibility = () => setVisiblePopUp(!visiblePopUp)

  useOutsideClick(ref, changeVisibility, visiblePopUp)

  const selectingActive = (i: string | number) => {
    onChange!(i)
    setVisiblePopUp(false)
  }

  return (
    <SelectWrapper
      className="select"
      ref={ref}
      $visible={visiblePopUp}
      onBlur={() => setVisiblePopUp(false)}
    >
      <div className="visible" onClick={changeVisibility}>
        <div>{value}</div>
        <ArrowIcon visible={visiblePopUp} />
      </div>
      {visiblePopUp && <Items arr={arr} onChange={selectingActive} />}
    </SelectWrapper>
  )
})

const Items: FC<Omit<SelectPropsType, 'name' | 'value'>> = props => {
  const { onChange, arr } = props

  return (
    <div className="popup">
      {arr.map((i, index) => (
        <div className="icon" key={index}>
          <Item value={i} onChange={onChange} />
        </div>
      ))}
    </div>
  )
}

const Item: FC<Omit<SelectPropsType, 'name' | 'arr'>> = props => {
  const { value, onChange } = props
  const handler = () => onChange && onChange(value!)

  return (
    <Wrapper className="iconSelect" onClick={handler}>
      {value && (
        <>
          <div className="text">{value}</div>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  padding: 2px 10px;
  position: relative;
  white-space: nowrap;
`
