import styled from 'styled-components';

//Primeiro componente utilizando uma string literals ou template string
export const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex; <!-- Para manter a centralização do componente -->
  align-items: central;
  justify-content: center;
`

export const ProfilePicture = styled.img`
  width: 130px;
  height: 130px;
  margin-top: 15px;
  border-radius: 50%;
  border: 6px solid #FFF;
`