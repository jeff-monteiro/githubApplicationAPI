import React, { useContext } from 'react'

import Container from '../components/container'
import Foller from '../components/follerContainer'


import { context } from '../context'

const Followers = props => {
  const cnx = useContext(context)

  return (
    <Container>
      <Foller name={cnx.userData?.name} followers={cnx.followers}></Foller>
    </Container>
  );
}

export default Followers;