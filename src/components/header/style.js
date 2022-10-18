import styled from "styled-components"
import wave from "../../assets/wave.svg"


export const Headers = styled.header`
    display: flex;
    justify-content: start;
    padding-top: 69px;
    align-items: center;
    flex-direction: column;
    background-image: url('${ wave }');
    max-width: 100%;
    height: 418px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100%;
`

export const H2 = styled.p`
    font-family: Helvetica, serif;
    color: #FFFFFF;
    font-size: 20px;
`

export const H1 = styled.h1`
font-family: Helvetica-bold, serif;
color: #FFFFFF;
font-size: 40px;
padding-bottom: 24px;
`

export const P = styled.p`
font-family: Helvetica, serif;
font-size: 14px;
color: #FFFFFF;
`

export const Button = styled.button`
width: 160px;
height: 40px;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 6px #00000029;
border: 1px solid #707070;
border-radius: 4px;
margin-top: 50px;
margin-right: 40px;
color: #888888;
`