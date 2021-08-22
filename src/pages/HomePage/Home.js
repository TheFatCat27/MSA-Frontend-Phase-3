import React from 'react'
import { homeObjFour, homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection } from '../../components';


const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    );
};

export default Home
