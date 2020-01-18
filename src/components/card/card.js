
import React from "react"
// import "../../styles/card2.module.scss"
// import Styles from "../../styles/card3.module.scss"


const detailsCards = props => (
  // <div
  //   className={Styles.program_icons}
  //   className={Styles.title}
  //   className={Styles.discription}
  // >
  //   <div>
      <div>
        <h6>{props.cardsTitle}</h6>
        <img src={props.cradsImg} />
        <p>{props.cardsDes}</p>
      </div>
    // </div>
  // </div>
)

export default detailsCards