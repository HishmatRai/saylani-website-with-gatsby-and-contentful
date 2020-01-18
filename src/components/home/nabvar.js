import React from "react"
import "./navbar.css"
import { Link } from "gatsby"

const Navbar = () => (
  <nav>
      <label for="drop" class="toggle">Menu</label>
    <div id="logo">
  
        
      <img
        src="https://www.saylaniwelfare.com/public_html/images/saylani/Saylani-logo.png"
        alt="logo"
        width="200px"
        class="logoMain"
      />
     
    </div>

    <label for="drop" class="toggle">
      {" "}
      <img
        src="https://www.saylaniwelfare.com/public_html/images/saylani/Saylani-logo.png"
        alt="logo"
        width="200px"
      />
    </label>
    <input type="checkbox" id="drop" />
    <ul class="menu">
      <div style={{ height: 40, marginTop: "15px" }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <label for="drop-1" class="toggle">
            About +
          </label>
          <a href="#">About </a>
          <input type="checkbox" id="drop-1" />
          <ul>
            <li class="natestNav">
              <a href="#">Introduction</a>
            </li>
            <li class="natestNav">
              <a href="#">Chairman Message</a>
            </li>
            <li class="natestNav">
              <a href="#">Saylani Annual Report</a>
            </li>
          </ul>
        </li>

        <li>
          <label for="drop-2" class="toggle">
            Saylani Services +
          </label>
          <a href="#">Saylani Services</a>
          <input type="checkbox" id="drop-2" />
          <ul>
            <li class="natestNav">
              <label for="drop-3" class="toggle">
                Education +
              </label>
              <a href="#">Education </a>
              <input type="checkbox" id="drop-3" />
              <ul>
                <li class="natestNav">
                  <label for="drop-1" class="toggle">
                    Saylani Mass Training +
                  </label>
                  <a href="#">Saylani Mass Mraining</a>
                  <input type="checkbox" id="drop-1" />
                  <ul>
                    <li class="natestNav">
                      <a href="#">SMIT Programs</a>
                    </li>
                    <li class="natestNav">
                      <a href="#">Faculty</a>
                    </li>
                    <li class="natestNav">
                      <a href="#">Result</a>
                    </li>
                    <li class="natestNav">
                      <a href="#">Entry Test Schedule</a>
                    </li>
                  </ul>
                </li>
                <li class="natestNav">
                  <a href="#">Saylani-Incubator</a>
                </li>
                <li class="natestNav">
                  <a href="#">Green House</a>
                </li>
              </ul>
            </li>
            <li>
              <label for="drop-1" class="toggle">
                Medical +
              </label>
              <a href="#">Medical </a>
              <input type="checkbox" id="drop-1" />
              <ul>
                <li class="natestNav">
                  <a href="#">Saylani Blood Bank Thalessimia Centre</a>
                </li>
                <li class="natestNav">
                  <a href="#">Saylani Clinic Hospital</a>
                </li>
                <li class="natestNav">
                  <a href="madical_internship_form">Medical Intern Form</a>
                </li>
              </ul>
            </li>
            <li>
              <label for="drop-1" class="toggle">
                Welfare +
              </label>
              <a href="#">Welfare</a>
              <input type="checkbox" id="drop-1" />
              <ul>
                <li class="natestNav">
                  <a href="#">Family Adoption</a>
                </li>
                <li class="natestNav">
                  <a href="#">Wedding Help</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Hajj Application Form</a>
            </li>
            <li>
              <a href="#">Saylani Dastarkhwan</a>
            </li>
            <li>
              <a href="#">Saylani RO Plant</a>
            </li>
            <li>
              <a href="#">Online Sadqah</a>
            </li>
            <li>
              <a href="#">Online Taweezat Istikhara</a>
            </li>
            <li>
              <a href="#">Saylani Job Bank</a>
            </li>
            <li>
              <label for="drop-1" class="toggle">
                Saylani Quran Academy +
              </label>
              <a href="#">Saylani Quran Academy </a>
              <input type="checkbox" id="drop-1" />
              <ul>
                <li class="natestNav">
                  <a href="#">Online Quran Admission</a>
                </li>
                <li class="natestNav">
                  <a href="#">Quran App (Tafteesh)</a>
                </li>
                <li class="natestNav">
                  <a href="online_quran_registration">Online Quran Registration</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="saylani_online_masajid">Saylani Online Masjid</a>
            </li>
          </ul>
        </li>
        <li>
          <label for="drop-1" class="toggle">
            Future Project +
          </label>
          <a href="#">Future Project </a>
          <input type="checkbox" id="drop-1" />
          <ul>
            <li class="natestNav">
              <a href="#">Saylani University</a>
            </li>
            <li class="natestNav">
              <a href="#"> Saylani City</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="media">Media</a>
        </li>
        <li>
          <a href="news">News</a>
        </li>
        <li>
          <label for="drop-1" class="toggle">
            Donation +
          </label>
          <a href="#">Donation </a>
          <input type="checkbox" id="drop-1" />
          <ul>
            <li class="natestNav">
              <a href="#">Bank Detail</a>
            </li>
            <li class="natestNav">
              <a href="#">Sadqa</a>
            </li>
            <li class="natestNav">
              <a href="#">Aqiqa</a>
            </li>
            <li class="natestNav">
              <a href="#">Other Donation</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact_us">Contact Us</a>
        </li>
      </div>
    </ul>
  </nav>
)
export default Navbar
