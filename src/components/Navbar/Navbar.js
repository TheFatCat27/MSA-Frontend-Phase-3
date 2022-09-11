import React, {useState, useEffect} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';
import { Button } from '../../globalStyles'


const Navbar = () => {
    const[click, setClick] = useState(false)
    const[button, setButton] = useState(true);
    
    const handleClick = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <>
        <IconContext.Provider value={{color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon />
                        CatFat
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>

                    <NavMenu click={click}>
                    	<NavItem>
                            <NavLinks to='/' onClick={handleClick}>
                                Home
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/keyboards' onClick={handleClick}>
                                Keyboards
                            </NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to='/general' onClick={handleClick}>
                                General
                            </NavLinks>
                        </NavItem>
                        
                        <NavItemBtn onClick={handleClick}>
                            {button ? (
                                <NavBtnLink to="/join-us">
                                    <Button primary>JOIN US</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/join-us'>
                                    <Button fontBig primary>
                                        JOIN US
                                    </Button>
                                </NavBtnLink>
                            )}

                        </NavItemBtn>
                    </NavMenu>
                    
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
