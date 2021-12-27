import React from 'react';
import LandingPage from './landingPage';
import Image from './images/casual-life-3d-girl-boy-poses-1.png'
import {Link } from 'react-router-dom';




const banner1 = () => {
    document.body.style.background="#fbc21d";
    return (
        <div>
        <LandingPage width={"200px"} image={Image}  alt={"image1"} title={"Take regular breaks"}  description={"It sounds counterintuitive, but taking Scheduled breaks can actually help Improve concentration." }/>
        <div style={{textAlign:"right",marginTop:"8%"}}>
        <Link to="/next2" className='nextbtn' style={{backgroundColor:"#9fe8d4"}}><i class="bi bi-arrow-right"></i></Link>
        </div>
        </div>
    );
};

export default banner1;