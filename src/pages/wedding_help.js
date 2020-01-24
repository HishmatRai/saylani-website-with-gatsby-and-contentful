import React from "react"
import style from "../styles/wedding_help.module.scss"
import WeddingImg from "./../images/Wedding-Help.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const WeddingHelp = () => (
  <div className={style.maindiv}>
    <Navbar />
    <img src={WeddingImg} width="100%" />
    <p className={style.p1}>
      Weddings are a happy occasion for families and financial burdens should
      not be a damper. Saylani helps needy families on this joyous occasion by
      providing financial assistance as well as giving them complete wedding
      packages including wedding arrangements, food, furniture and other
      household items. With more than 600 weddings financed every month, we
      continue to spread happiness during these precious moments.
    </p>
    <Footer />
  </div>
)

export default WeddingHelp
