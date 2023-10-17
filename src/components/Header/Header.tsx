import { styled } from 'styled-components'

import { Logo } from '@/assets/img/logo.tsx'
import { Button } from '@/components'
import { useLogoutMutation } from '@/services/auth/auth.ts'

export const Header = () => {
  const [logout] = useLogoutMutation()

  return (
    <Wrapper color={'red'}>
      <Logo />
      <Button className={'Logout'} onClick={() => logout()}>
        Log Out
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.header<{ color: string }>`
  z-index: 2;
  position: fixed;
  max-width: 1300px;
  top: 0;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.dark_700};

  padding: 12px calc((100% - 1000px) / 2);
  svg {
    width: 156.48px;
    height: 36px;
    fill: ${props => props.theme.colors.light_100};
    margin-left: 40px;
    @media (max-width: 800px) {
      margin-left: 10px;
    }
  }
  .Logout {
    margin-right: 40px;
    @media (max-width: 800px) {
      margin-right: 10px;
    }
  }
`
