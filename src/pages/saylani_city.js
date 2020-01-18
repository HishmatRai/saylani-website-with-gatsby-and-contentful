import React from "react"
import style from "../styles/saylani_city.module.scss"
import City from "./../images/Saylani-City.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const SaylaniCity = () => (
  <div className={style.maindiv}>
    <Navbar />
    <img src={City} width="100%" />
    <div className={style.div}>
      <p className={style.p1}>
      Saylani City</p>

    </div>
    <Footer />
  </div>
)

export default SaylaniCity
