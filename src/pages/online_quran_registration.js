import React from "react"
import '../styles/online_quran_registration.css'
import Grid from '@material-ui/core/Grid';
import { MDBIcon } from "mdbreact";

const OnlineQuranRegistration = () => (
    <div className="mainDiv">
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className="heading" >
                    <Grid item lg={8} md={12} sm={12} xs={12}>
                        <MDBIcon icon="users" className="icon" />
                        <h5 className="pageheading">Online Quran Registeration Form</h5>
                        <hr />
                    </Grid>
                    <label htmlFor="formGroupExampleInput" className="labels">Student Name</label>
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
                <div className="heading">
                    <label htmlFor="formGroupExampleInput" className="labels">Father's Name</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Date Of Birth</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Age</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Gender</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Course</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <select className="browser-default custom-select">
                            <option>Select Your Course</option>
                            <option value="1">Nazira - ناظرہ</option>
                            <option value="1">Tajweeed-e-Quran  - تجوید قرآن</option>
                            <option value="1">Hifz-Ul-Quran - حفظ القرآن</option>
                            <option value="1">Tarjuma Tafseer - ترجمہ تفسیر</option>
                            <option value="1">Hadees Course - حدیث کورس</option>
                            <option value="1">Arabi Grammer - عربی گرامر</option>
                        </select>
                    </Grid>
                </center>
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Email</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Skype ID</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Country</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Cell Number</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Whatsapp Number</label>
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
                <div className="heading" >
                    <label htmlFor="formGroupExampleInput" className="labels">Upload you recent Image (face front without glasses and with a single-colored background)</label>
                </div>
                <center>
                    <Grid item lg={6} md={12} sm={12} xs={12}>
                        <input
                            type="file"
                            className="form-control"
                            id="formGroupExampleInput"
                        />
                        <button className="btn">Register Now</button>
                    </Grid>
                </center>
            </Grid>
        </Grid>
    </div>
)

export default OnlineQuranRegistration
