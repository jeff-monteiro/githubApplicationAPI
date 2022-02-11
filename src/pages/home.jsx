import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';

import UserProfile from '../components/userProfile';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserProfile url= 'https://avatars.githubusercontent.com/u/81328013?v=4' text= 'image'/>
            </UserContainer>
        </Container>
    );
}