import React from "react"
import style from "../styles/family_adoption.module.scss"
import Image from "./../images/Family-Adoption.jpg"

const FamilyAdoption = () => (
  <div className={style.maindiv}>
    <img src={Image} width="100%" />
    <p className={style.p1}>
      While we are always happy to lend a helping hand to individuals, helping a
      family live a dignified life is also important to us. Our Family Adoption
      Program focuses on supporting the basic financial needs of adopted
      families based on their sizes. We provide families with kitchen ration,
      pay their utility bills, house rent and school fees and finance any other
      daily needs they might have. Today, we are proud to say that we have
      adopted more than 7,500 families and our wish is to support many more in
      the future.
    </p>
  </div>
)

export default FamilyAdoption
