import React, { useContext } from 'react'

import Container from '../components/container'
import FollingContainer from '../components/follingContainer'


import { context } from '../context'

const Following = props => {
  const cnx = useContext(context)

  return (
    <Container>
      <FollingContainer name={cnx.userData?.name} following={cnx.following}></FollingContainer>
    </Container>
  );
}

export default Following;