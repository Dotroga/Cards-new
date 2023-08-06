import styled from 'styled-components'

export const Card = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark_700};
  border: 1px solid ${({ theme }) => theme.colors.dark_100};
  border-radius: 1px;
`
