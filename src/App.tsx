import { LogOutIcon } from './components/icons/logOut.tsx'
import { Button } from './components/ui/button/button'
import { Typography } from './components/ui/typography/typography.tsx'

export const App = () => {
  return (
    <>
      <Button variant={'primary'}>
        <>
          <LogOutIcon />
          Primary
        </>
      </Button>
      <Button variant={'secondary'}>Secondary</Button>
      <Button variant={'tertiary'}>Tertiary</Button>
      <Button variant={'link'}>Link</Button>
      <Typography as={'large'}>Hello</Typography>
    </>
  )
}
