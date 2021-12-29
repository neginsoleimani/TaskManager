import React, { Component } from 'react';
import styled from 'styled-components';
import image from './images/casual-life-3d-avatar-2.png'

const DIV = styled.div`
margin-top:12%;
border-radius:30px 30px 0  0;
background-color:#fff;
height:93.3vh;

img{
    margin-top:50px;
    width:120px;
}

h3{
    text-align:center;
    color:#7d8fff;
    font-size:1.5rem;
    font-family: 'Poppins', sans-serif;
}


input[type=text] {
    color:#605757;
    font-weight:400;
    display:flex;
    flex-diraction:cloumn;
    margin-top:10px;
    margin-left: auto;
    margin-right: auto;
    width:75%;
    height:30px;
    border:0;
    border-bottom:1px solid #b3b3b3;
    background:transparent;
    font-family:"Calibri";
    font-size:1rem;
}


input[type=text]:focus{
    border:none;
    outline:none;
    border-bottom:1px solid #1f9be4;
   }


button{
    font-family: 'Poppins', sans-serif;
    border-radius:20px;
    background-color:#7d8fff;
    color:#fff;
    width:70%;
    font-weight:bold;
    border:none;
    padding:3% 5%;
    margin-top:6%;
}


@media (min-width: 1000px) {
    img{
        margin-top:50px;
    }

 

    input[type=text] {
        margin-top:2%;
        width:30%;
    }

    button{
        margin-top:3%;
    }
  }
`


class Information extends Component {
    constructor(){
        super();
        this.state = {
            FirstName:"Frist name",
            LastName:"Last name",
            PhoneNumber:"+98"
        }
    }

    FNHandler = event =>{
        this.setState({
            FirstName : event.target.value
        })
    }

    
    LNHandler = event =>{
        this.setState({
            LastName : event.target.value
        })
    }

    PNHandler = event =>{
        this.setState({
            PhoneNumber : event.target.value
        })
    }

    render() {
        return (
            <div>
                <DIV>
                    <center><img src={image} alt="image"/></center>
                    <h3>Here To Get  Welcome ! </h3>
                    <input  type={"text"}  value={this.state.FirstName}  onChange={this.FNHandler} />
                    <input type={"text"} value={this.state.LastName}  onChange={this.LNHandler}/>
                    <input type={"text"} value={this.state.PhoneNumber} onChange={this.PNHandler}/>
                    <center>
                    <button>Continue</button>
                    </center>
                </DIV>
            </div>
        );
    }
}

export default Information;
