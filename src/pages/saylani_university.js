import React from "react"
import style from "../styles/saylani_city.module.scss"
import University from "./../images/Saylani-University.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'

const SaylaniUniversity = () => (
  <div className={style.maindiv}>
    <Navbar />
    <img src={University} width="100%" />
    <div className={style.div}>
      <p className={style.p1}>
        We believe in giving women & men both an equal opportunity to gain
        education. They have a right to learn & should be given easy access to
        it. The project is to be Led by
        <span style={{ fontWeight: 600 }}> Dr. Abdul Qadeer Khan.</span>
      </p>
    </div>
    <Footer />
  </div>
)

export default SaylaniUniversity
