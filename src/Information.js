import React, { Component } from 'react';
import styled from 'styled-components';
import image from './images/undraw_personal_information_re_vw8a.svg'

const DIV = styled.div`

img{
    margin-top:70px;
    width:250px;
}

h3{
    text-align:center;
    color:#3c78d8;
    font-size:2rem;
    font-family:"Calibri";
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
    margin-top:10%;
    display: block;
    margin-left: auto;
    margin-right: auto;
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
            FirstName:"Negin",
            LastName:"Soleimani",
            PhoneNumber:"+989300354241"
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
                    <div>
                    <button>Continue</button>
                    </div>
                </DIV>
            </div>
        );
    }
}

export default Information;