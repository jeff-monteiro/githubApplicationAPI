import React, { useContext } from 'react'

import Container from '../components/container'
import Folling from '../components/follingContainer'


import { context } from '../context'

const Following = props => {
  const cnx = useContext(context)

  return (
    <Container>
      <Folling name={cnx.userData?.name} repos={cnx.following}></Folling>
    </Container>
  );
}

export default Following;