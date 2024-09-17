import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background-color: #fff;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;

        .container {
            position: relative;
            z-index: 0;
            width: 400px;
            height: 300px;
            border-radius: 10px;
            overflow: hidden;
            padding: 2rem;
            
            &::before {
                content: '';
                position: absolute;
                z-index: -2;
                left: -50%;
                top: -50%;
                width: 200%;
                height: 200%;
                background-color: #399953;
                background-repeat: no-repeat;
                background-size: 50% 50%, 50% 50%;
                background-position: 0 0, 100% 0, 100% 100%, 0 100%;
                background-image: linear-gradient(#000, #fff), linear-gradient(#fff, #000), linear-gradient(#fff, #000), linear-gradient(#000, #fff);
                animation: rotate 4s linear infinite;
            }
            
            &::after {
                content: '';
                position: absolute;
                z-index: -1;
                left: 0px;
                top: 0px;
                width: calc(100% - 0px);
                height: calc(100% - 0px);
                background: white;
                border-radius: 5px;
                animation: opacityChange 4s infinite alternate;
            }
        }

        img{
            width: 200px; 
            transform: scale(0);
            border-radius: 10px;
            animation: pulse 2s ease-in-out infinite;
            mix-blend-mode: multiply;
        }

        @media screen and (max-width: 568px){    
            .container {
                width: 80vw;
                height: 250px;
                margin: 0 auto;
            }

            img{
                width: 120px;
            }
        }
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }

    @keyframes rotate {
        100% {
            transform: rotate(1turn);
        }
    }

    @keyframes opacityChange {
        50% {
            opacity:1;
        }
        100% {
            opacity: .5;
        }
    }
`;