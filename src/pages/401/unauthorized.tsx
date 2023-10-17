import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

import SVG from '@/assets/img/401 Error Unauthorized.svg'
import { Typography } from '@/components'
import { Routes } from '@/router/path.ts'
export const Unauthorized = () => {
  const navigate = useNavigate()
  const [num, setNum] = useState(4)

  useEffect(() => {
    const id = setTimeout(() => {
      num === 0 ? navigate(Routes.SignIn) : setNum(num - 1)
    }, 1000)

    return () => clearTimeout(id)
  })

  return (
    <Wrapper>
      <img src={SVG} alt="" />
      <Typography as={'link'} to={Routes.SignIn}>
        Switch to login in {num}
      </Typography>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 80%;
    height: 70%;
  }
  a {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.accent_700};
    text-decoration: none;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
`
