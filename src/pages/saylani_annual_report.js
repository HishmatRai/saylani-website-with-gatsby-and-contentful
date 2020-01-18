import React from "react"
import style from "../styles/saylani_annual_report.module.scss"
import Report from "./../images/Saylani-Annual-Report.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const AnnualReport = () => (
  <div className={style.maindiv}>
    <Navbar />
    <img src={Report} width="100%" />
    <br />
    <br />
    <p className={style.p1}>Saylani's Annual Report 2018.</p>
    <Footer />
  </div>
)

export default AnnualReport
