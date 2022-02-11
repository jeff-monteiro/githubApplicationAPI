import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';

import UserProfile from '../components/userProfile';
import UserInfo from '../components/userInfo';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
                <UserProfile url= 'https://avatars.githubusercontent.com/u/81328013?v=4' text= 'image'/>
                <UserInfo name='Jefferson Monteiro' login='#jeff-monteiro' bio='Developer Student'/>
            </UserContainer>
        </Container>
    );
}