import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`

export const Numbers = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1{
    font-size: 20px;
    text-align: center;
    color: #444;
  }

  h2{
    font-size: 12px;
    text-align: center;
    color: #777;
  }
  // Permite as configurações com o passar do mouse por cima do componente
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
    transition: .6s ease;
    border-radius: 6px;
  }

`