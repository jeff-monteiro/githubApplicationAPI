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
          <h1>15</h1>
          <h2>Repositories</h2>
        </Numbers>
        <Numbers onClick={() => handleOnClick('/followers')}>
          <h1>20</h1>
          <h2>Followers</h2>
        </Numbers>
        <Numbers onClick={() => handleOnClick('/following')}>
          <h1>10</h1>
          <h2>Following</h2>
        </Numbers>
      </Container>
  );
}


export default UserNumbers;