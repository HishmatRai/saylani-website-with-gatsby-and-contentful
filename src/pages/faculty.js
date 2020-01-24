import React from "react"
import style from '../styles/smit_Programs.module.scss'
import FacultyImg from './../images/faculty.jpeg'
import Footer from './../components/home/footer'
import Navbar from './../components/home/nabvar'
const Faculty = () => (
<div className={style.maindiv}>
    <Navbar />
    <img src={FacultyImg} width='100%'/>
  
   <Footer />
    </div>
)

export default Faculty
