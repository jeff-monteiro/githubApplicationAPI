import React, { useContext } from 'react'

import Container from '../components/container'
import FollersContainer from '../components/follersContainer'

import { context } from '../context'

const Follers = props => {
  const cnx = useContext(context)

  return (
    <Container>
      <FollersContainer name={cnx.userData?.name} followers={cnx.followers} ></FollersContainer>
    </Container>
  );
}
  


export default Follers;