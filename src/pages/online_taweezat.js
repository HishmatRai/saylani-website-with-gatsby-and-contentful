import React from "react"
import style from "../styles/online_taweezat.module.scss"
import Taweezat from "./../images/ishtkhara.jpg"

const OnlineTaweezat = () => (
  <div className={style.maindiv}>
    <img src={Taweezat} width="100%" />
    <div className={style.div}>
      <p className={style.p1}>
        Saylani wants to light up the souls of people in addition to lighting up
        their lives. To do so, collective duas and scholarly gatherings are held
        each month to help create religious awareness amongst people. Numerous
        people gather to listen and pray with us.
      </p>
      <p className={style.p1}>
        Furthermore, people often seek spiritual guidance for their various
        problems, religious, worldly or personal. Hazrat Maulana Bashir Ahmed
        Farooqui, a learned and gifted religious scholar and founder of Saylani
        Welfare International Trust provides solutions to people’s problems
        through the Istakhara service so that they may take better decisions in
        their matters. People can avail these services through emails,
        telephone, letters or in person.
      </p>
      <p className={style.p1}>Email : <a href="mailto:istikhara@saylaniwelfare.com  ">istikhara@saylaniwelfare.com</a></p>

    </div>
  </div>
)

export default OnlineTaweezat
