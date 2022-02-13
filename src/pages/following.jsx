import React, { useContext } from 'react'

import Container from '../components/container'
import ReposContainer from '../components/reposContainer'

import { context } from '../context'

const Followers = props => {
  const cnx = useContext(context)

  return (
    <Container>
      <ReposContainer name={cnx.userData?.name} repos={cnx.repos} />
    </Container>
  );
}

export default Followers;