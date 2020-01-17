import React from "react"
import style from "../styles/introduction.module.scss"
import introduction from "./../images/introducation.jpg"
import Card from './../components/card/card'

const Introduction = () => (
  <div>
    <img width="100%" src={introduction} />

    <Card />
  </div>


)

export default Introduction
