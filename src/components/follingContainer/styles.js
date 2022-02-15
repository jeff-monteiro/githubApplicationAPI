import styled from 'styled-components'


export const Section = styled.section`
  width: 450px;
  height: 400px;
  background: rgba(255,255,255,.95);
  border-radius: 8px;
  border-bottom: 8px solid rgba(23, 94, 154, 0.66);
  margin-top: 15px;

  @media (max-width: 430px) {
    width: 300px
  }
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  color: #444;
  width: 100%;
  text-align: center;
  height: 30px;
`

export const ListFollingContainer = styled.h1`
  height: 350px;
  width: 100%;
  padding: 10px;
  overflow-y: scroll;
`

export const Folling = styled.h2`
  width: 100%;
  height: 80px;
  background: rgba(0,0,0,.05);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  h2 {
    font-size: 15px;
    width: 100%;
    overflow: hidden;
    color: #444;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #777;
    width: 100%;
    height: 30px;
    overflow: hidden;
    line-height: 1.5;
    margin-top: 10px;
  }
`