import React from "react"
import style from "../styles/saylani_city.module.scss"
import City from "./../images/Saylani-City.jpg"

const SaylaniCity = () => (
  <div className={style.maindiv}>
    <img src={City} width="100%" />
    <div className={style.div}>
      <p className={style.p1}>
      Saylani City</p>

    </div>
  </div>
)

export default SaylaniCity
