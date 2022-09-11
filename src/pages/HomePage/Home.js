import React from 'react'
import { homeObjFour, homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InfoSection } from '../../components';


const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} link='/join-us'/>
            <InfoSection {...homeObjTwo} link='/keyboards'/>
            <InfoSection {...homeObjThree} link='/general'/>
            <InfoSection {...homeObjFour} link='/join-us'/>
        </>
    );
};

export default Home
