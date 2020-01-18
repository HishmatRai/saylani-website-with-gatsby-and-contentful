import React from 'react';
import Paper from '@material-ui/core/Paper';
import Styles from './booksCard.module.scss'

class CardExample extends React.Component {
    constructor() {
        super()
        this.state = {
            firstButton: "",
            secondButton: "",
            background: "transparent",
            border: "1px solid #F26522"
        }
    }
    render() {
        return (
            <div style={{ margin: "5%" }}>
                <Paper
                    onMouseOver={() => this.setState({ firstButton: "VIEW DETAIL", secondButton: "DOWNLOAD", background: "white", border: "1px solid orange" })}
                    onMouseOut={() => this.setState({ firstButton: "", secondButton: "", background: "transparent", border: "1px solid transparent" })}
                >
                    <div>
                        <div className={Styles.car_Image} style={{ backgroundImage: 'url("https://www.saylaniwelfare.com/uploads/2019-11-101570779972.jpg")' }}>
                            <center>
                                <button  className={Styles.twoButtons}   style={{ marginTop: "350px", backgroundColor: this.state.background, border: this.state.border, width: "45%", fontSize: "12px", padding: "4px" ,color:"#F26522" ,fontWeight:"bold"  }} >{this.state.firstButton}</button>
                                <button className={Styles.twoButtons}  style={{ marginTop: "350px", backgroundColor: this.state.background, border: this.state.border, width: "45%", fontSize: "12px", padding: "4px" ,color:"#F26522",fontWeight:"bold"  }} >{this.state.secondButton}</button>
                            </center>
                        </div>
                        <div style={{ textAlign: "center", backgroundColor: "#f7f7f7", color: "blue", padding: "10px" }}>
                            12 MAH K ORAD-O-WAZAIF
                    </div>
                    </div>
                </Paper>
            </div>




        )

    }
}



export default CardExample;