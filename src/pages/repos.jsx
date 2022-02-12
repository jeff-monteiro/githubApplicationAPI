import React, { useContext } from 'react'

import Container from '../components/container'
import ReposContainer from '../components/reposContainer'

import { context } from '../context'

const Repos = props => {
  const cnx = useContext(context)

  return (
    <Container>
      <ReposContainer name='abc' repos={{}} />
    </Container>
  );
}

export default Repos;