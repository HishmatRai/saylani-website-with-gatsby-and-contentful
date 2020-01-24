import React from "react"
import style from '../styles/madical_internship_form.module.scss'
import Grid from '@material-ui/core/Grid';
import { MDBIcon } from "mdbreact";
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'

const MadicalInternshipForm = () => (
    <div className="mainDiv">
        <Navbar/>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className={style.heading} >
                    <Grid item lg={8} md={12} sm={12} xs={12}>
                        <MDBIcon icon="users" className={style.icon} />
                        <h5 className={style.pageheading}>Form For The Medical Interns</h5>
                        <hr />
                    </Grid>
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Student Name</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                    </Grid>
                </center>
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Date Of Birth</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="date"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                    </Grid>
                </center>
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Age</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="age"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                    </Grid>
                </center>
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Gender</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <select className="browser-default custom-select">
                            <option>Select Your Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </Grid>
                </center>
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Course</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <select className="browser-default custom-select">
                            <option>Select Your Course</option>
                            <option value="1">Pharmacy Internship</option>
                        </select>
                    </Grid>
                </center>
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Email</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="email"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                    </Grid>
                </center>
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Qualification</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                    </Grid>
                </center>
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Cell Number</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                    </Grid>
                </center>
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Whatsapp Number</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                    </Grid>
                </center>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <button className={style.btn}>Register Now</button>
                    </Grid>
                </center>
            </Grid>
        </Grid>
        <Footer />
    </div>
)

export default MadicalInternshipForm
