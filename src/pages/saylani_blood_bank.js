import React from "react"
import style from "../styles/saylani_blood_bank.module.scss"
import BloodBank from "./../images/Saylani-Blood-Bank-Thalessimia-Centre.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const SaylaniBloodBank = () => (
  <div className={style.maindiv}>
    <Navbar />
    <img src={BloodBank} width="100%" />
    <br />
    <br />
    <p className={style.p1}>
      Saylani Blood Bank & Thalessimia Centre
      <br />
      <br />
      The recently established, state of the art Saylani Blood Bank and
      Thalassemia Centre is furnished with modern equipment, well trained
      technicians, leading Hematologists, Pediatricians, and General Physicians,
      and offers free of cost supply of blood and blood components to the poor
      and the needy. Free and effective screening, counseling and continuous
      medical care is provided to the deserving patients with Thalassemia and
      other haemoglobinopathies.
      <br />
      <br />
      Aims and objectives of Saylani Blood Bank & Thalassemia Center are as
      under:
      <br />
      <br />
      1. Providing awareness about Thalassemia. <br/>
      2. Thalassemia screening and
      diagnosis.  <br/>
      3. Safe blood transfusion.  <br/>
      4. Screening performed by FDA & WHO
      approved analyzer and reagents based on EISA, CLI, PCR and NAT tests.  <br/> 
      5.
      Thalassemic patients need post transfusion chelation therapy (Removing
      iron from the body). This highly expensive therapy is also provided
      completely free of cost to patients.  <br/>
      6. Saylani Blood Bank & Thalassemia
      Center also aims to provide CVS facilities to pregnant mothers with
      thalassemia minor.  <br/>
      7. Along with patient care, medical research is also a
      primary focus of Saylani Blood Bank & Thalassemia Center. We aim to
      conduct extensive research in the areas of thalassemia and other blood
      related diseases in order to keep patients, their families and the
      extended medical community abreast of modern research & developments.
    </p>
    <Footer />
  </div>
)

export default SaylaniBloodBank
