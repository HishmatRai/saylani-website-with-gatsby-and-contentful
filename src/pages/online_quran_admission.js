import React from "react"
import style from "../styles/online_quran_admission.module.scss"
import AdmissionImage from "./../images/Online-Quran-Admission.jpeg"
const OnlineQuranAdmission = () => (
  <div className={style.maindiv}>
    <img src={AdmissionImage} width="100%" />
    <div className={style.div}>
      <p className={style.p1}></p>
      <p className={style.p1}>
        Saylani offers an interactive online Quran Academy program that enables
        people from anywhere in the world to learn Quran with Tajweed. Live
        Quran teachers are present on voice call and our lessons are equally
        beneficial for kids and adults (of any age).
      </p>

      <p className={style.p1}>
        Memorization of Quran is another great course offered by Saylani online
        Quran Academy. We have 325 students from these countries
      </p>

      <p className={style.p1}>
        1.Saudi Arab 2.Behreen 3.Germany 4.Dubai 5.India 6.Uk 7.Canada 8.America
        9.Malaysia 10.Italy 11.France 12.Japan 13.England 14.Ireland
        15.Australia 16.Austria 17.Burma 18.Muscat 19.Bangladesh 20 Abu Dhabi
      </p>
    </div>
  </div>
)

export default OnlineQuranAdmission
