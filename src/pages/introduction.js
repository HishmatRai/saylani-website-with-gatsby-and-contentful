import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Styles from "../styles/introduction.module.scss"
import DetailCards from "../components/card/card"
import mediaImg from "./../images/slider.png"

const IndexPage = () => (
  <div>
    <div className="detailDiv">
      <img
        src="https://www.saylaniwelfare.com/uploads/2018-30-111543574214.jpg"
        width="100%"
      />
      {/* <div class="line"></div> */}
      <h2 className="detailed" style={{ textAlign: "center" }}></h2>
    </div>
    <Grid container justifyContent={"center"}>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span className={Styles.counter} style={{}}></span>
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img width="100%" src={mediaImg} />
            <ul style={{ marginTop: 30 }}>
              <li>Darul Ifta</li>
              <li>Ameer Hamza Branch</li>
              <li>Mill Area Branch</li>
              <li>Korangi No.4 Branch</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>





      
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      ></Grid>

      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span className={Styles.counter}></span>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        className={Styles.right_Side_box}
      >
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img
              width="100%"
              src="https://www.saylaniwelfare.com/public_html/images/saylani/RotiBank_Slider.jpg"
            />
            <ul style={{ marginTop: 30 }}>
              <li>Darul-ifta Kifala(Numaish)</li>
              <li>Shoba-e-Online</li>
              <li>Boulton Market branch</li>
              <li>Malir Court shade</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span className={Styles.counter}></span>
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img width="100%" src={mediaImg} />
            <ul style={{ marginTop: 30 }}>
              <li>Wedding Package</li>
              <li>White Collar Scheme (Milk And Bread)</li>
              <li>Free Medicine</li>
              <li>Asaan Rozgaar (Rickshaw Scheme)</li>
              <li>Duaia Silsila Shab-e-Juma</li>
              <li>Johar Branch</li>
              <li>Karimabad Branch</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      ></Grid>

      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span className={Styles.counter}></span>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        className={Styles.right_Side_box}
      >
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img width="100%" src={mediaImg} />
            <ul style={{ marginTop: 30 }}>
              <li>Asaan Rozgaar (Bike scheme)</li>
              <li>Vocational Training (31 technical Courses)</li>
              <li>Consultant Clinic</li>
              <li>Muawnat-e-Rishta</li>
              <li>Saddar Branch</li>
              <li>Faisalabad Branch</li>
              <li>Gulshan-e-Iqbal UK Branch</li>
              <li>Mohammad Ali Society Branch</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span className={Styles.counter}></span>
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img width="100%" src={mediaImg} />
            <ul style={{ marginTop: 30 }}>
              <li>Logistics Centre</li>
              <li>Shajar Kari</li>
              <li>Saylani Mashqeeza Scheme</li>
              <li>Johar Medical Centre</li>
              <li>Power House Branch</li>
              <li>Tower Branch</li>
              <li>Hyderabad Utility Store</li>
              <li>United Kingdom Branch</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      ></Grid>

      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span
          className={Styles.counter}
          // style={{
          //   backgroundColor: "rgb(63, 81, 181)",
          //   borderColor: "rgb(63, 81, 181)",
          //   color: "white",
          // }}
        ></span>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        className={Styles.right_Side_box}
      >
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img width="100%" src={mediaImg} />
            <ul style={{ marginTop: 30 }}>
              <li>Saylani Mass Training And Job Creation Program</li>
              <li>Gulshan-e- Iqbal Branch</li>
              <li>Vaccination Of Children</li>
              <li>MOU Signed With Intel Corporation</li>
              <li>
                Air Conditioned Van For Fresh And Healthy Meat Distribution
              </li>
              <li>Atlanta Us Branch</li>
              <li>9 Storey Flat Building Construction</li>
              <li>5 Storey Building Flat Building</li>
              <li>Fire Fighting And Rescue Service</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span
          className={Styles.counter}
          // style={{
          //   backgroundColor: "rgb(63, 81, 181)",
          //   borderColor: "rgb(63, 81, 181)",
          //   color: "white",
          // }}
        ></span>
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img width="100%" src={mediaImg} />
            <ul style={{ marginTop: 30 }}>
              <li>Enhancement In Medical Department</li>
              <li>Treatment With 9 Different Methods</li>
              <li>Pathological Laboratory, Xray Machines</li>
              <li>ECG Machines, ETT Machines</li>
              <li>Ultrasound Machines, Specialist Clinics</li>
              <li>Awareness Program</li>
              <li>Eye Clinic And Operations</li>
              <li>Tibb-e-Nabvi And Homeopathy</li>
              <li>Mayyat Bus And Kafan Service</li>
              <li>Mobile Camp And Clinics</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      ></Grid>

      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span
          className={Styles.counter}
          // style={{
          //   backgroundColor: "rgb(63, 81, 181)",
          //   borderColor: "rgb(63, 81, 181)",
          //   color: "white",
          // }}
        ></span>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        className={Styles.right_Side_box}
      >
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img width="100%" src={mediaImg} />
            <ul style={{ marginTop: 30 }}>
              <li>Rawalpindi Branch</li>
              <li>Lahore Branch</li>
              <li>Mother And Child Care Centre</li>
              <li>Mobile Eye Operation Theatre</li>
              <li>Mobile Health Clinic</li>
              <li>Korangi Kifalah Branch</li>
              <li>Karachi Opd Clinics</li>
              <li>Agriculture R&D</li>
              <li>R.O.Plant</li>
              <li>Future Planning</li>
              <li>Mortuary</li>
              <li>Solar System</li>
              <li>University For Women</li>
              <li>Hyderi R.O Plant</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>

      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      >
        <span
          className={Styles.counter}
          // style={{
          //   backgroundColor: "rgb(63, 81, 181)",
          //   borderColor: "rgb(63, 81, 181)",
          //   color: "white",
          // }}
        ></span>
        <Grid
          xl={12}
          lg={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "80px",
          }}
        >
          <Paper className={Styles.paper}>
            <img width="100%" src={mediaImg} />
            <ul style={{ marginTop: 30 }}>
              <li>Saylani Mass I.T Training Lab In Faisalabad</li>
              <li>Blood Bank And Thalassaemia Centre In Karachi</li>
              <li>Saylani Mobile Shops</li>
              <li>Crown Saylani Auto Training Institute In Karachi</li>
              <li>Mother And Child Centres In Karachi And Hyderabad</li>
              <li>Welfare And Relief Operations In Tharparkar</li>
              <li>Corporate Philanthropy Program</li>
              <li>Syria Relief Program</li>
              <li>Saylani House, Karachi</li>
              <li>Mobile Screening Unit</li>
              <li>Saylani Flat Hyderabad</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
      <Grid
        item
        xl={6}
        lg={6}
        md={6}
        sm={6}
        xs={12}
        style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
        className={Styles.vertical_line}
      ></Grid>
    </Grid>
    {/* ------------------------- end Program Structure ------------------------ */}
  </div>
)
export default IndexPage
