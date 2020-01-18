import React from "react"
import style from "../styles/saylani_dastarkhwan.module.scss"

import Dastarkhan from "./../images/dastarkhwan.jpg"

const SaylaniDastarkhwan = () => (
  <div>
    <img width="100%" src={Dastarkhan} />
   <br />
   <br /> 
    <p className={style.p1} >
      Determined to alleviate the burden of hunger for the poor, we have set up
      a Saylani Dastarkhan at various Saylani branches across Pakistan where the
      needy are fed twice a day, every day. Although this is a very small
      contribution, it is our small way of removing the fear of uncertainty for
      the poor who often do not know whether they will have a meal to eat next
      or not. With our service, they know that there is always a place where
      they can eat 365 days a year, and no one needs to sleep hungry at night.
      <br /><br />

      Everyone is welcome here and all our food is prepared and served with the
      highest quality and hygiene. Fresh and wholesome meals are provided with
      menus rotating between vegetables or pulses alongside mutton (goat). These
      meals cost Rs. 50 per meal allowing our guests to save up to Rs. 5,000 per
      month. The saved money is invaluable to the poor and can be used by them
      to meet their other needs and expenditures.<br /><br /> We are pleased to say that
      more than 100,000 people are being fed across Pakistan daily. Each person
      is served with respect and dignity and it is our highest honor to serve
      them.
    </p>
  </div>
)

export default SaylaniDastarkhwan
