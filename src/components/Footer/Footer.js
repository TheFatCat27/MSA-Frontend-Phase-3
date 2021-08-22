import React from 'react'
import { FaDiscord, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Button } from '../../globalStyles'
import { FooterContainer,
     FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    SocialIcon
    } from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    We like keyboards, join us to see the latests posts
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinkTitle>Contact us</FooterLinkTitle>
                        <FooterLink to='/'>Email</FooterLink>
                        <FooterLink to='/'>Address</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/'>Discord</FooterLink>
                        <FooterLink to='/'>Linkedin</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon/>
                        CatFat
                    </SocialLogo>
                    <WebsiteRights>CatFat © 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://discord.gg/NzcMV6qt' target="_blank" aria-label="Discord">
                            <FaDiscord />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/shane-mao-46411020b/' target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/' target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/?lang=en' target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
