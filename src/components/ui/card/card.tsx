import { styled } from 'styled-components'

export const Card = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark_700};
  border: 1px solid ${({ theme }) => theme.colors.dark_300};
  border-radius: 1px;
  padding: 1.81rem 2.25rem 1.81rem 2.25rem;
  .textField {
    padding-bottom: 1.19rem;
  }
  .heading {
    margin-bottom: 3.19rem;
  }
`
