import React from "react"
import style from '../styles/smit_Programs.module.scss'
import Sp from './../images/SMIT-Programs.jpeg'

import Footer from './../components/home/footer'
import Navbar from './../components/home/nabvar'
const SmitProgram = () => (
<div className={style.maindiv}>
    <Navbar />
    <img src={Sp} width='100%'/>
    <br/>
    <br/>
    
    <p className={style.p1} >
    SMIT Programs
    </p>   
    <Footer/>
    </div>
)

export default SmitProgram
