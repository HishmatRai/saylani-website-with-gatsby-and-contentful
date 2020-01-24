import React from "react"
import style from "../styles/saylani_roplant.module.scss"
import roplant from "./../images/roplant.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const SaylaniRoplant = () => (
  <div>
    <Navbar />
    <img width="100%" src={roplant} />
    <br />
    <br />
    <p className={style.p1}>
      Access to clean water is a right that none of us should be forced to
      forego. Despite an abundant endowment Pakistan is one of the most
      water-stressed countries in the world. Around 16 million people in
      Pakistan and trillions more around the world do not have access to clean
      water, with countless being forced to drink unsafe water, die thirsty or
      suffer water borne diseases.
      <br />
      <br />
      Clean water has the power to change lives. It is the road to building a
      better future with fewer water resulting diseases, healthier communities
      and richer lives in terms of quality. Saylani Welfare International Trust
      launched its ‘Saaf Pani Project’ to ensure effective, sustainable, and
      easily accessible supply of safe drinking water to the marginalized
      communities. Our aim is that no person should live without access to this
      most basic human need. This is achieved by drilling water-wells,
      installing RO (Reverse Osmosis) plants, and installing water chillers in
      deserving areas.
      <br />
      <br /> So far over 25 RO plants have been installed, about 100 water wells
      have been dug and approximately 1,000 water chillers have been installed
      by Saylani throughout Pakistan. Our aim is to install 100 new RO plants
      across the nation.
      <br />
      <br />
      We have also signed MOU with Sindh Rangers, Sindh Police, Mayor Karachi
      and Commissioner Karachi for association in installation of RO plants.
    </p>
    <Footer ></Footer>
  </div>
)

export default SaylaniRoplant
