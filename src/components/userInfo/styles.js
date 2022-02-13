import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: central;
  flex-direction: column;
`
export const Name = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: #444;
`
export const Username = styled.h2`
  widht: 100%;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  color: #777;
  padding: 8px;

`

export const Desc = styled.div`
  width: 300%;
  height: 30px;
  margin: 10px 0;
  margin-left: 20px;
  font-size: 14px;
  text-align: justify;
  color: #777;
  line-height: 1.3;
  overflow: hidden;

  @media (max-width: 430px) {
    width: 250px;
  }
`