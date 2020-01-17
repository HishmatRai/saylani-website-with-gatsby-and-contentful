import React from "react";
import { Link } from "gatsby";
import homeStyle from '../styles/index.module.scss'
import "../styles/index.module.scss"
import '@fortawesome/fontawesome-free/css/all.min.css';

import Introduction from './introduction'


import Navbar from './../components/home/nabvar'

const IndexPage = () => (

    <div className={homeStyle.container}>
    <Navbar />

      <div >

          <img src="https://www.saylaniwelfare.com/public_html/images/saylani/slider1.png" alt="slider" width="100%" />
      </div>
      <div>News</div>
      <div className={homeStyle.introduction}>
        <h2>
          INTRO<span className={homeStyle.h2}>DUCTION</span>
        </h2>
        <div className={homeStyle.titleIcon}>
          <img src={require("../assets/images/icons/favicon.png")} alt="logo" />
        </div>
        <div>
          <p>
            Established in May 1999 by famous spiritual and religious scholar
            Maulana Bashir Ahmed Farooqui, Saylani Welfare International Trust
            was built on the fundamentals of breaking the cycle of poverty,
            alleviating the financial troubles of the poor, giving people a
            chance to live a dignified life and spreading happiness.
          </p>

          <p>
            We are an organization that believes in lighting up the lives of
            underprivileged people across the world. We endeavor to provide the
            best quality services in areas including food, education, medical
            and social welfare free of cost to people living in the dark. With
            over 60 different sectors, we feed thousands of hungry people each
            day, hundreds more are given the hope of life through medical health
            care, many are educated to become leaders of tomorrow and several
            are given the opportunity to stand on their feet financially.
          </p>

          <p>
            Today, we are proud to say that our physical presence extends
            throughout Pakistan with a vast network of 125 branches operating in
            major cities including Karachi, Lahore, Islamabad, Rawalpindi,
            Hyderabad and Faisalabad. Apart from Pakistan, we have overseas
            offices in the UK, USA and UAE as well. Our worldwide branches are
            operating under the guidance of a team of over 2,000 working
            professionals who help almost 125,000 people on a daily basis.
          </p>
          <p>
            We strongly believe that a little help goes a long way and our work
            would not be possible without the generous support of our valuable
            donors. Our local and international donors have graciously lent us a
            hand by supporting our causes and enabling us to serve the needs of
            people in need.
          </p>
        </div>
      </div>
      <div className={homeStyle.counter}>
        <div>
          <img
            src={require("../assets/images/icons/icon_food_png.png")}
            alt="Food"
          />
          <h2>125,000</h2>
          <h5>
            DAILY DASTRAKHAN{" "}
            <span className={homeStyle.counterH5}>(MONTHLY)</span>
          </h5>
        </div>
        <div>
          <img
            src={require("../assets/images/icons/icon_family_png.png")}
            alt="Family"
          />
          <h2>7,500</h2>
          <h5>
            FAMILY ADOPTION{" "}
            <span className={homeStyle.counterH5}>(MONTHLY)</span>
          </h5>
        </div>
        <div>
          <img
            src={require("../assets/images/icons/icon_medical_png.png")}
            alt="Medical"
          />
          <h2>43,749</h2>
          <h5>
            MEDICAL <span className={homeStyle.counterH5}>(MONTHLY)</span>
          </h5>
        </div>
        <div>
          <img
            src={require("../assets/images/icons/icon_education_png.png")}
            alt="Education"
          />
          <h2>180,000</h2>
          <h5>
            EDUCATION <span className={homeStyle.counterH5}>(MONTHLY)</span>
          </h5>
        </div>
      </div>
      <div className={homeStyle.doing}>
        <h2>
          WHAT WE <span className={homeStyle.h2}>ARE DOING?</span>
        </h2>
        <div className={homeStyle.titleIcon} style={{ marginBottom: "40px" }}>
          <img src={require("../assets/images/icons/favicon.png")} alt="logo" />
        </div>
        <div className={homeStyle.doingWrap}> 
        <div className={homeStyle.doingItem}>
          <Link>
            <img src={require("../assets/images/icons/onlinesadqah.png")} alt='online sadqa' />
          </Link>
          <h4>ONLINE SADQAH</h4>
        </div>
        <div className={homeStyle.doingItem}>
          <Link>
            <img src={require("../assets/images/icons/welfare.png")} alt='welfare' />
          </Link>
          <h4>WELFARE</h4>
        </div>
        <div className={homeStyle.doingItem}>
          <Link>
            <img src={require("../assets/images/icons/medical.png")} alt='medical' />
          </Link>
          <h4>MEDICAL</h4>
        </div>
        <div className={homeStyle.doingItem}>
          <Link>
            <img src={require("../assets/images/icons/Dastarkhwan.png")} alt='dastarkhwan' />
          </Link>
          <h4>DASTARKHWAN</h4>
        </div>
        <div className={homeStyle.doingItem}>
          <Link>
            <img src={require("../assets/images/icons/ROPLANT.png")} alt='ro plant' />
          </Link>
          <h4>RO PLANT</h4>
        </div>
        <div className={homeStyle.doingItem}>
          <Link>
            <img src={require("../assets/images/icons/education.png")} alt='education' />
          </Link>
          <h4>EDUCATION</h4>
        </div>
        </div>
      </div>
      <div className={homeStyle.mission}>
        {/* Mission item start */}
        <div className={homeStyle.missionWrap}>
        <div>
          <h3 className={homeStyle.lineBottom}>
            MISSION AND UPCOMING PROJECTS
          </h3>
          <div className={homeStyle.missionItemWrap}>
          <div className={homeStyle.missionItem}>
            <div className={homeStyle.mediaLeft}>
              <img src={require("../assets/images/icons/Hepatitis.png")} alt='hepatitis' />
            </div>
            <div className={homeStyle.mediaBody}>
              <h4>HEPATITIS</h4>
            </div>
          </div>
          <div className={homeStyle.missionItem}>
            <div className={homeStyle.mediaLeft}>
              <img src={require("../assets/images/icons/housing.png")} alt='housing' />
            </div>
            <div className={homeStyle.mediaBody}>
              <h4>HOUSING SOCIETY</h4>
            </div>
          </div>
          <div className={homeStyle.missionItem}>
            <div className={homeStyle.mediaLeft}>
              <img src={require("../assets/images/icons/IT.png")} alt='IT' />
            </div>
            <div className={homeStyle.mediaBody}>
              <h4>IT LITERACY</h4>
            </div>
          </div>
          <div className={homeStyle.missionItem}>
            <div className={homeStyle.mediaLeft}>
              <img src={require("../assets/images/icons/tharparkar.png")} alt='tharparkar' />
            </div>
            <div className={homeStyle.mediaBody}>
              <h4>THARPARKAR</h4>
            </div>
          </div>
          </div>
        </div>
        {/* Upcomming Events */}
        <div className={homeStyle.events}>
          <h3 className={homeStyle.lineBottom}>Upcoming Events</h3>
          <p>
            <marquee
              direction="up"
              width="250"
              height="200"
              scrollamount="2"
              onmouseover="this.stop()"
              onmouseout="this.start()"
            >
              <p>
                Saylani Welfare Distributing Ration & Clothes to affected people
                of Balochistan.{" "}
                <Link to="https://www.facebook.com/saylaniwelfare/posts/3164679946891260?__tn__=-R">
                  More Details
                </Link>
              </p>
              <br />
              <p>
                Entry Test Accouncement (Graphic Designing & Video
                Editing/Animation Course) On Sunday 3rd March 2019 @ 11:00Am
                Vanue: 4rh Floor, Saylani Welfare International Trust HeadOffice
                Bahadurabad.{" "}
                <Link to="https://www.facebook.com/saylaniwelfare/photos/a.258515937507690/3152781434747778/?type=3&theater%3E">
                  More Details
                </Link>
              </p>
              <br />
              <p>
                Dr Jamil Ahmed (Additional Inspector General of Police) &
                Atiqmir Visit Saylani Welfare International Trust, Saylani Mass
                I.T. Training.{" "}
                <Link to="https://www.facebook.com/saylaniwelfare/posts/3124996217526300?__xts__[0]=68.ARCElwXqFXBXobZcA_UIl5WsTnqek6hA0692UZgzLiTQcX71VvEVoMgzqDV_LCU8l4vgjmKHex8j5abeGcQPzz-0Vo7g8gNqrP0CK04uhT29KI7ZBXw7L0UhSE9vpr7JOS4591gwSiYhmPbI_exl5O0PUbYyqzRyVjDhZf833fadxaHMxR3LURDcRfhfFRurM3x6cKNgZ7XwQi2vP6tA2-XS4HUzYNRUfZ5Yc4iUJAwXHOGi64EA62Drmy5c0mv0CZumqreWzE6JGBGOlQC5dMh7k07-qNBGwItqzarzu8CiNWC9kZMwzYyExhOY7JKF76U1ZzEbClh6A-yQYJ-qY1jbYQ&__tn__=-R%3E">
                  More Details
                </Link>
              </p>
              <br />
              <p>
                PIAIC Entrance Exam Merit Ranking List Announced.{" "}
                <Link to="https://www.saylaniwelfare.com/result">
                  More Details
                </Link>
              </p>
              <br />
              <p>
                President of Pakistan (Dr. Arif Alvi) Visited Saylani Welfare
                International Trust HeadOffice Karachi.{" "}
                <Link to="https://www.facebook.com/saylaniwelfare/posts/3135103563182232?__xts__[0]=68.ARD9PTgM3DL_2vvulRqQ-b25KUD2P8X7TSS9g6gbxDfRdIBqgjNGJffSbV0ZcFmUFF5Ocrn-wvtpvDbjWBQxq0UHTlRJR1vEkgUOfm8Vk0ltcQp9K5q268QBcUMjujlPyCnBIxXcbe_Qjqbw1DXfCLQ1fFwBdGk77ndYxRXPrUVHrYybrBb5jWxu8GJQ37RpI7LLayc6xkve6gO149Ud-NWv_eF72blzToVI2fZW2ZWJUlRFSgWFK5jgrDGcsP-I7NBis9UXNfBBb55nXahKzJHvloneJh93hN9Wc3bIyvpn7v1IJSixyqcGRr_KHC-mO46gL9JUYx_acVfGdQDLUCBORw&__tn__=-R%3E">
                  More Details
                </Link>
              </p>
            </marquee>
          </p>
        </div>
        </div>
      </div>
      <div className={homeStyle.gallery} >
      <h2>
          IMAGE <span className={homeStyle.h2}>GALLERY</span>
        </h2>
        <div className={homeStyle.titleIcon} style={{ marginBottom: "40px" }}>
          <img src={require("../assets/images/icons/favicon.png")} alt="logo" />
        </div>
        <div className={homeStyle.photos}>

        </div>
      </div>




    
    </div>
)

export default IndexPage
