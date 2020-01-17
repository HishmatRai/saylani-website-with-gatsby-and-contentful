import React from "react"
import style from '../styles/contact_us.module.scss'
// import GoogleMapReact from 'google-map-react';


class Contactus extends React.Component {
  render() {
    return (
      <div >
        <iframe className={style.iframe} src="https://www.google.com/maps/d/embed?mid=1M1uz7lk7dWWikrZWfE_TC-aLAZrXmcCH" height="480"></iframe>
      </div>
    )
  }
};

export default Contactus;


