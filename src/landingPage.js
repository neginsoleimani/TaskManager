import React from 'react';
import styled from 'styled-components';
import './landing.css';
import 'bootstrap-icons/font/bootstrap-icons.css'


 const DIV = styled.div`
 img{
     display:block;
     margin-top:5%;
     padding-left:10%;
     margin-left:auto;
     margin-right:auto;
 }

 h2{
    width:55%;
    padding-left:10%;
    font-family: 'Poppins', sans-serif;
 }

 h4{
     padding-left:10%;
     font-family: 'Poppins', sans-serif;
     font-size:0.9rem;
     font-weight:300;
     width:75%;
 }
 
 
 `

 
const landingPage = ({image, alt , title , description, width}) => {
    return ( 
        <>
        <div style={{textAlign:"right",marginTop:"5%"}}>
        <a className="skip">Skip</a>
        </div>
        <DIV>
            <img src={image} alt={alt} style={{width:width}} />
            <h2>{title}</h2>
            <h4>{description}</h4>
        </DIV>
        </>
    );
};

export default landingPage;