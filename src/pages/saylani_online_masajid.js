import React from "react"
import style from '../styles/saylani_online_masajid.module.scss'
import Grid from '@material-ui/core/Grid';
import { MDBIcon } from "mdbreact";
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'

const SaylaniOnlineMasajid = () => (
    <div className="mainDiv">
        <Navbar />
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className={style.heading} >
                    <Grid item lg={8} md={12} sm={12} xs={12}>
                        <MDBIcon icon="users" className={style.icon} />
                        <h4 className={style.pageheading}>Online Masajid Form</h4>
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
                <div className={style.heading}>
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Father's Name</label>
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
                            <option value="1">Ilm-o-Fahm-Deen Course</option>
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
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Skype ID</label>
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
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Country</label>
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
                <div className={style.heading} >
                    <label htmlFor="formGroupExampleInput" className={style.labels}>Upload you recent Image (face front without glasses and with a single-colored background)</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="file"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                        <button className={style.btn}>Register Now</button>
                    </Grid>
                </center>
            </Grid>
        </Grid>
        <Footer />
    </div>
)

export default SaylaniOnlineMasajid
