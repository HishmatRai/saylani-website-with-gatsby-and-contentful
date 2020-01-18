import React from "react"
import style from "../styles/saylani_hospital.module.scss"
import HospitalImage from "./../images/Saylani-Clinic-Hospital.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'
const SaylaniHospital = () => (
  <div className={style.maindiv}>
    <Navbar />
    <img src={HospitalImage} width="100%" />
    <br/>
    <br/>
    <br/>
    <p className={style.p1}>
      Bridging the needs of quality healthcare is a top priority for us. The
      goal of Saylani Health Care Services is to build a healthy society and
      outreach medically underserved and neglected communities not only through
      provision of high quality free of cost health services & supplies but also
      by acting as a bridge between marginalized deserving patients and health
      institutions.
      <br />
      <br />
      To strengthen our primary healthcare system, clinics have been set up at
      various Saylani Branches that provide free OPD services, medicines and
      medical equipment. Specialist Consultants, experienced Doctors, Physicians
      and Para-Medical Staff are available 24/7 at the Saylani Medical &
      Diagnostic Centre to provide specialized treatment and medical assistance
      to the ailing. Specialized clinical facilities for treatment of diseases
      including Tuberculosis, Diabetes, Hepatitis and Cancer are also available.
    <br/>
    <br/>
    SPECIALIZED CLINICS
    <br/>
    The following departments at the Saylani Medical & Diagnostic Centre
<br/>
are working day in and day out in the service of the ailing humanity:
<br/>
• General OPD <br/>
• Consultant OPD <br/>
General surgery <br/>
Eye specialist <br/>
Gynaecologist <br/>
Pediatrician <br/>
Dermatologist <br/>
Neurosurgeon <br/>
Orthopaedic <br/>
Cardiologist <br/>
Psychiatrist <br/>
• Eye Clinic <br/>
Free eye checkup including <br/>
visual acuity <br/>
Free glasses <br/>
Free cataract eye surgery <br/>
Post operative kits (sunglasses, eye drops, oral medicines) <br/>
• Audiology Clinic <br/>
Free checkup <br/>
Free hearing aids <br/>
• Pharmacy <br/>
• Laboratory <br/>
• Radiology <br/>
• Dental Clinic <br/>
• Advanced Physiotherapist Clinic (Separate clinics for men and women) <br/>
• Speech Therapy Centre <br/>
• Eastern Specialist Clinics <br/>
• Rehabilitation of drug addicts <br/>

For indoor admissions, arrangements are made with other private and public hospitals to facilitate the patients and all costs are borne by Saylani or Saylani Health
 Partners.


    </p>
    <Footer />
  </div>
)

export default SaylaniHospital
