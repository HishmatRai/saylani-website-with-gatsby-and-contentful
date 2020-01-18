import React from "react"
import style from "../styles/green_house.module.scss"
import GreenHouseImg from "./../images/Green-House.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const GreenHouse = () => (
  <div className={style.maindiv}>
    <Navbar />
    <img src={GreenHouseImg} width="100%" />
    <br/>
    <br/>
    <p className={style.p1}>
      SAYLANI BOARD OF SCHOOLS COMPETENCY (SBSC)
      <br />
      <br/>
      We believe that the role of children’s education and learning is vital to
      the sustainable development of a society. Established in March 2016,
      Saylani Board of Schools Competency (SBSC) has partnered with more than
      100 schools in different areas of Karachi. At Saylani we aim to educate
      students and build teachers simultaneously so that we can stand in unity
      against illiteracy and unemployment. Keeping in mind the importance of
      training and development of teachers, we have collaborated with Spectrum
      Publishers in October 2016 to launch a ne year teachers’ training program.
      Under this training program workshops are conducted thrice a month to
      equip teachers of the member schools with modern pedagogic skills
      necessary to impart learning of high standards to their students.
      <br />
      <br />
      Moreover member schools are also offered with free medical screening of
      students, free legal aid services, clean drinking water facilities,
      gardening arrangements and organization of co-curricular activities.
    </p>
    <Footer />
  </div>
)

export default GreenHouse
