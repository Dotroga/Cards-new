import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

import img from '@/assets/img/checkEmail.svg'
import { Button, Card, Typography } from '@/components'

export const CheckEmail = (props: { to: string; email: string }) => {
  return (
    <Form>
      <Typography className="heading" as={'large'}>
        Check Email
      </Typography>
      <img src={img} alt="Email" />
      <Typography as={'body2'} className="email">
        We’ve sent an Email with instructions to
      </Typography>
      <Typography as={'body2'} className="email">
        {props.email}
      </Typography>
      <Button fullWidth={true} as={Link} to={props.to}>
        Back to Sign In
      </Button>
    </Form>
  )
}

const Form = styled(Card)`
  width: 26.25rem;
  height: 25.5rem;
  align-items: center;
  .email {
    color: ${props => props.theme.colors.light_900};
  }
  img {
    width: 6rem;
    height: 6rem;
    margin-bottom: 1.19rem;
  }
  a {
    margin-top: 3.4rem;
  }
`
