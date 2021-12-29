import React from 'react';
import styled from 'styled-components';
import Image from './images/casual-life-3d-online-learning.png'
import {Link } from 'react-router-dom';

const DIV= styled.div`

border-radius:30px 30px 0  0;
background-color:#fff;
height:94.4vh;
img{
    display:block;
    width:250px;
    margin-top:12%;
    margin-left:auto;
    margin-right:auto;
}


h3{
    width:80%;
    font-family: 'Poppins', sans-serif;
 }


 button{
    font-family: 'Poppins', sans-serif;
    width:70%;
    border-radius:20px;
    background-color:#7d8fff;
    color:#fff;
    font-weight:bold;
    border:none;
    padding:3% 5%;
    margin-top:6%;
 }

 h4{
    font-family: 'Poppins', sans-serif;
    color:#9a9a9a;
    font-size:0.9rem;
    font-weight:300;
    width:70%;
}

h6{
    margin-top:12px;
    font-size:0.7rem;
    font-family: 'Poppins', sans-serif;
    color:#4158ea;
}

`

const GetStarted = () => {
    document.body.style.background="linear-gradient(319deg, #cdedfd 0%, #ffec82 37%, #ffcfd2 100%)";
    return (
        <DIV>
            <img src={Image} alt='Get Started img'/>
            <center>
            <h3>Manage Your Daily Todos</h3>
            <h4>Organize all your to-do's in list and projects Color tag them to set priorities and categories.</h4 >
            <Link to="/information"><button>Get Started</button></Link>
            <h6>Existing user? Sign in</h6>
            </center>
        </DIV>
    );
};

export default GetStarted;