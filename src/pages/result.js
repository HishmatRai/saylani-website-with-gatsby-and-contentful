import React from "react"
import style from '../styles/result.module.scss'
import ResultImg from './../images/result.jpeg'
import { MDBContainer, MDBInputGroup, MDBBtn } from "mdbreact";

const Results = () => (
<div className={style.maindiv}>
    <img src={ResultImg} width='100%'/>
    <div className={style.div}>
    <p className={style.text}>Saylani Mass IT Training Results (CCNA-Batch03)</p>
    <br/>
    <br/>
    
    <center>
    <MDBInputGroup
          hint="Recipient's username"
          container
          className={style.input}
          style={{width : '40%'}}
          append={
            <MDBBtn color='black'  className="m-0 px-3 py-2 z-depth-0" >
              Find
            </MDBBtn>
          }
        /> 
        </center>
        </div>
    </div>
)

export default Results
