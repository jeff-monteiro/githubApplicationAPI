
import { Container, ProfilePicture } from './styles.js'


const UserProfile = props => (
  <Container>
    <ProfilePicture src = {props.url} alt = {props.text}/>
  </Container>
);


export default UserProfile;