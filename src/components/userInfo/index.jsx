import { Container, Name, Username, Desc } from './styles';


const UserInfo = props => (
  <Container>
    <Name>{props.name}</Name>
    <Username>{props.login}</Username>
    <Desc>{props?.bio}</Desc>
  </Container>
);


export default UserInfo;