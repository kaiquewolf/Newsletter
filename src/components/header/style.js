import styled from "styled-components"
import wave from "../../assets/wave.svg"


export const Headers = styled.header`
    display: flex;
    justify-content: start;
    padding-top: 5.06vw;
    align-items: center;
    flex-direction: column;
    background-image: url('${ wave }');
    max-width: 100%;
    height: 350px;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100%;
`

export const H2 = styled.p`
    font-family: Helvetica, serif;
    color: #FFFFFF;
    font-size: 1.46vw;
`

export const H1 = styled.h1`
font-family: Helvetica-bold, serif;
color: #FFFFFF;
font-size: 2.93vw;
padding-bottom: 1.76vw;
`

export const P = styled.p`
font-family: Helvetica, serif;
font-size: 1.02vw;
color: #FFFFFF;
`

export const Button = styled.button`
width: 11.73vw;
height: 6.41vh;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 6px #00000029;
border: 1px solid #707070;
border-radius: 4px;
margin-top: 3.66vw;
margin-right: 2.93vw;
color: #888888;
`

