import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { HeaderSection, HeaderTitle, HeaderInputContainer, HeaderInput, HeaderSearchButton } from './styles';
import clientAPI from '../../services/clientAPI.js'

const Header = () => {
    const [searchedValue, setSearchedValue] = useState('');

    async function getUser(){
        try {
            const response = await clientAPI.get(`/${searchedValue}`)
            console.log(response.data);
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