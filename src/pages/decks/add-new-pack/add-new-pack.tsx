import styled from 'styled-components'

import { Button, Typography } from '@/components'

export const AddNewPack = () => {
  return (
    <Wrapper>
      <Typography as={'large'}>Packs list</Typography>
      <Button>Add New Pack</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`
