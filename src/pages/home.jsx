import React, { useContext } from 'react'

import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';

import UserProfile from '../components/userProfile';
import UserInfo from '../components/userInfo';
import UserNumbers from '../components/userNumbers';

import { context } from '../context'

export default function Home() {
    const cnx = useContext(context)
    return (
        <Container>
            <Header />
            <UserContainer>
                {cnx.userData?.name ?
                <>
                    <UserProfile url= {cnx.userData?.avatar_url} text= {cnx.userData?.login} />
                    <UserInfo name= {cnx.userData?.login} login= {cnx.userData?.html_url} bio= {cnx.userData?.bio} />
                    <UserNumbers repos={cnx.userData?.public_repos} followers={cnx.userData?.followers} following={cnx.userData?.following} />
                </>
                : undefined}
            </UserContainer>
        </Container>
    );
}