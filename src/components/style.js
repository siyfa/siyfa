import styled from "styled-components";
import SFLogo from "../assets/images/sf.png";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    margin-bottom: -60px;
`;

export const Section = styled.div`
    height: auto;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 0;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
`;

export const SocialWrapper = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    color: #fff;
    /* padding: 0 60px; */
`;

export const Logo = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 2px;
    background-image: url(${SFLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 500px) {
        width: 40px;
        height: 40px;
    }
`;

export const HeroContent = styled.div`
    margin-top: 60px;
`;