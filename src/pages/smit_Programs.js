import React from "react"
import style from '../styles/smit_Programs.module.scss'
import Sp from './../images/SMIT-Programs.jpeg'

const SmitProgram = () => (
<div className={style.maindiv}>
    <img src={Sp} width='100%'/>
    <br/>
    <br/>
    
    <p className={style.p1} >
    SMIT Programs
    </p>   
    </div>
)

export default SmitProgram
