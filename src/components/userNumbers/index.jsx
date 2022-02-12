import React from 'react';
import { useHistory } from 'react-router-dom';
// Permite-me criar as rotas que serão feitas a partir do evento do click

import { Container, Numbers } from './styles';

const UserNumbers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);
    return(
      <Container>
        <Numbers onClick={() => handleOnClick('/repos')}>
          <h1>{props.repos}</h1>
          <h2>Repositories</h2>
        </Numbers>
        <Numbers onClick={() => handleOnClick('/followers')}>
          <h1>{props.followers}</h1>
          <h2>Followers</h2>
        </Numbers>
        <Numbers onClick={() => handleOnClick('/following')}>
          <h1>{props.following}</h1>
          <h2>Following</h2>
        </Numbers>
      </Container>
  );
}


export default UserNumbers;