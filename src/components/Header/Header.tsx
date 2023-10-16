import styled from 'styled-components'

export const Header = () => {
  return <Wrapper color={'red'}>Header</Wrapper>
}

const Wrapper = styled.header<{ color: string }>`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.dark_700};
  padding: 12px 36px;
`
