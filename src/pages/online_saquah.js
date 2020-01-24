import React from "react"
import style from '../styles/online_saquah.module.scss'
import Sadqah from './../images/sadqah.jpg'
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const OnlineSaquah = () => (
<div className={style.maindiv}>
    <Navbar />
    <img src={Sadqah} width='100%'/>
    <div className={style.div}>
    <p className={style.p1}>Every day, more than 1,000 animals are sacrificed as Sadaqqah and Aqiqa across Pakistan and the meat is distributed among the poor.</p>
    <p className={style.p1}>We also find people who are suffering from severe diseases such as T.B and Cancer and give the meat to them. The food is also cooked for patients at hospitals and sent to hostels for poor students.</p>
   <p className={style.p1}>For Our Online Sadaqqah & Aqiqa Services</p>
   <p className={style.p1}>Click Here : <a href="#">Online Donation</a></p>
   <p className={style.p1}>Click Here : <a href="#">Online Aqiqa</a></p>
   <p className={style.p1}>Click Here : <a href="#">Online Sadqa</a></p>
   </div>
   <Footer />
    </div>
)

export default OnlineSaquah
