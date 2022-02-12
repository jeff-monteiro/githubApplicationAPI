import React, { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';

import { HeaderSection, HeaderTitle, HeaderInputContainer, HeaderInput, HeaderSearchButton } from './styles';
import clientAPI from '../../services/clientAPI.js'
import { context } from '../../context'

const Header = () => {
    const cnx = useContext(context)
    const [searchedValue, setSearchedValue] = useState('');

    async function getUser(){
        try {
            const response = await clientAPI.get(`/${searchedValue}`)
            cnx.setUserData(response.data);
        } catch(err) {
            console.log(err)
        }
    }
    return(
        <HeaderSection>
            <HeaderTitle>Github Profile</HeaderTitle>
            <HeaderInputContainer>
                <HeaderInput value={searchedValue} onChange={e => setSearchedValue(e.target.value)}/>
                
                <HeaderSearchButton onClick={getUser}>
                    <FiSearch size={16} />
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    );
}

export default Header;