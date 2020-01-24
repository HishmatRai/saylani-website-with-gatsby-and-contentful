import React from "react"
import style from '../styles/saylani_job_bank.module.scss'
import JobBank from './../images/jobBank.jpg'
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const SaylaniJobBank = () => (
<div className={style.maindiv}>
  <Navbar />
<img src={JobBank} width="100%" />
    <div className={style.div}>
      <p className={style.p1}>
      Leave that Page blank = Write there ===== Page Under Construction
      </p>
      

    </div>
   <Footer />
    </div>
)

export default SaylaniJobBank
