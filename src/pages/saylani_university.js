import React from "react"
import style from "../styles/saylani_city.module.scss"
import University from "./../images/Saylani-University.jpg"

const SaylaniUniversity = () => (
  <div className={style.maindiv}>
    <img src={University} width="100%" />
    <div className={style.div}>
      <p className={style.p1}>
        We believe in giving women & men both an equal opportunity to gain
        education. They have a right to learn & should be given easy access to
        it. The project is to be Led by
        <span style={{ fontWeight: 600 }}> Dr. Abdul Qadeer Khan.</span>
      </p>
    </div>
  </div>
)

export default SaylaniUniversity
