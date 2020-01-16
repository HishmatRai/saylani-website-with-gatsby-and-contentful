import React from "react"
import style from './../styles/bank_details.module.scss'
import bankdetale from "./../images/bankdetale.jpeg"
import TableDetail from './../components/bankdetaletable/bankdetile_table'

// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const BankDetails = () => (
    <div >


        <div>
            <img src={bankdetale} width="100%" />
        </div>




        <Grid container justify="center" >



            <Grid lg={3} sm={3} md={4}  xs={12} className={style.div} justify="center">
                <div style={{ marginTop: "10%" }}  >
                    <h5> Western Union Detail:   </h5>
                    <p>Please Donation in Favour of</p>
                    <p>1 - Yousuf Lakhani</p>
                    <p>2 - Arif Lakhani</p>
                    <p>3 - Bashir Ahmed Polani</p>
                    <p>Do Not Forget To Send Us It's (MTCN) No.</p>
                </div>

            </Grid>

            <Grid lg={3} sm={3} md={4}  xs={12} className={style.div1} justify="center">


                <div style={{ marginTop: "10%" }}>
                    <h5>Money Gram Detail:</h5>

                    <p>Detail</p>
                </div>


            </Grid>


            <Grid lg={3} sm={3} md={4} xs={12} className={style.div1} justify="center">
                <div style={{ marginTop: "10%" }}>
                    <h5>Finance:</h5>
                    <p>Detail.</p>
                </div>
            </Grid>

            <TableDetail/>
            </Grid>



    </div>
)
export default BankDetails













