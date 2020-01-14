import React from "react"
import style from '../styles/aquiqa.module.scss'
import { MDBRow, MDBCol } from "mdbreact";

const Aquiqa = () => (
    <div style={{ width: "98%", margin: "0 auto" }}>
        <MDBRow style={{ width: "98%", margin: "0 auto" }}>
            <MDBCol xl="8" >
                <div className={style.mainDiv}>
                    <h2 className={style.heading}>Donation For Aqiqa</h2>
                    {/* **************************************************************** Donation Type */}
                    <div className={style.inputDiv}>
                        <label className={style.label1}>Donation Type <small style={{ color: 'red', fontSize: '18px' }}>*</small></label>
                        <br />
                        <select className={style.input1}>
                            <option>Select option</option>
                            <option>Bank</option>
                        </select>
                    </div>

                    {/* *******************************************************  Sadqa  */}
                    <div className={style.inputDiv}>
                        <label className={style.label1}>Aqiqa <small style={{ color: 'red', fontSize: '18px' }}>*</small></label>
                        <br />
                        <select className={style.input1}>
                            <option>Select option</option>
                            <option>Sadqa Goat (3500)</option>
                            <option>Sadqa Goat (4000)</option>
                            <option>Sadqa Goat (4500)</option>
                            <option>Sadqa Goat (5000)</option>
                            <option>Sadqa Cow (35,000)</option>
                            <option>Sadqa Goat (40,000)</option>
                            <option>Sadqa Goat (45,000)</option>
                            <option>Sadqa Hen (300)</option>
                        </select>
                    </div>
                    {/* *******************************************************  Quintaty   */}
                    <div className={style.inputDiv}>
                        <label className={style.label1}>Quantity <small style={{ color: 'red', fontSize: '18px' }}>*</small></label>
                        <br />
                        <input className={style.input2} type="number" placeholder="Enter Number" />
                    </div>
                    {/* *******************************************************  Amount    */}
                    <div className={style.inputDiv}>
                        <label className={style.label1}>Amount Payable <small style={{ color: 'red', fontSize: '18px' }}>*</small></label>
                        <br />
                        <input className={style.input3} placeholder="Enter Number" disabled />
                    </div>
                    {/* *******************************************************  Nmae   */}
                    <div className={style.inputDiv}>
                        <label className={style.label1}>Name <small style={{ color: 'red', fontSize: '18px' }}>*</small></label>
                        <br />
                        <input className={style.input4} type="Name" placeholder="Enter Name" />
                    </div>
                    {/* *******************************************************  Email   */}
                    <div className={style.inputDiv}>
                        <label className={style.label1}>Email <small style={{ color: 'red', fontSize: '18px' }}>*</small></label>
                        <br />
                        <input className={style.input5} type="Email" placeholder="Enter Email" />
                    </div>
                    {/* *******************************************************  Mobile   */}
                    <div className={style.inputDiv}>
                        <label className={style.label1}>Mobile <small style={{ color: 'red', fontSize: '18px' }}>*</small></label>
                        <br />
                        <input className={style.input5} type="mobile" placeholder="Enter Mobile" />
                    </div>
                    {/* *******************************************************  Remarks   */}
                    <div className={style.inputDiv}>
                        <label className={style.label1}>Remarks <small style={{ color: 'red', fontSize: '18px' }}>*</small></label>
                        <br />
                        <textarea rows="6" className={style.input6} type="remarks" placeholder="Enter Remarks" >
                        </textarea>
                    </div>
                    {/* *******************************************************  Mobile   */}
                    <div className={style.button1}>
                        <button className={style.button}>Send</button>
                    </div>
                    <p style={{ marginTop: '30px', fontWeight: 'bold', color: '#757474' }}>Note:-</p>
                </div>
            </MDBCol>
            <MDBCol xl="4" >
                <div className={style.paymentmethoodDiv}>
                    <h3 className={style.heading2}>Qurbani/Sadqah/Zakat/Fidya</h3>
                    <form className={style.account} action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" >
                        <input type="hidden" name="cmd" value="_s-xclick" /><br />
                        <input type="hidden" name="hosted_button_id" value="2J7NTFK7XB9ZJ" /><br />
                        <span style={{ marginLeft: '23%' }}>Paypal [Qurbani, Sadqah, Zakat]</span><br />
                        <input style={{ marginLeft: '12%', width: '80%' }} type="image" src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!" /><br />
                        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
                        <br />
                    </form>
                    <br />
                    <strong className={style.srtong}>Donate to us through Virgin Money </strong>
                    <div className={style.butonDonate} align="center" >for UK Donors [Qurbani, Sadqah, Zakat]<br />
                        <a href="https://uk.virginmoneygiving.com/donation-web/charity?charityId=1015417&amp;campaignId=8552&amp;utm_source=extbtn&amp;utm_campaign=donatebtn" />
                        <img src="https://www.saylaniwelfareuk.com/wp-content/uploads/2019/05/DONATE_RED_BUTTON@1x.png" alt="Donate to us through Virgin Money Giving" border="0" />
                    </div>
                </div>
            </MDBCol>
        </MDBRow>
    </div>
)

export default Aquiqa
