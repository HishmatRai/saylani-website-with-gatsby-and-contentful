import React from "react"
import Grid from "@material-ui/core/Grid"
import "../styles/books_detail.module.scss"

const BooksDetail = () => (
  <div>
    <Grid container justify="center" spacing={3}>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        sm={6}
      >
        <div style={{ float: "right" }}>
          <img
            src="https://www.saylaniwelfare.com/uploads/2019-11-101570783080.jpg"
            width="500"
            height="600"
          />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={7}
        sm={6}
      >
        <div className="col-md-7">
          <div className="product-summary">
            <h2
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
              className="product-title"
            >
              Ahkam-ul-Quran
            </h2>

            <div className="short-description">
              <p>Ahkam-ul-Quran</p>{" "}
            </div>
            <div className="tags">
              <strong>Language:</strong> Urdu
            </div>
            <div className="category">
              <strong>Author:</strong> Hazrat Basheer Farooqui
            </div>
            <div className="tags">
              <strong>Publisher:</strong>Azad Publisher
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
    <br /><br />
    <div style={{paddingLeft:"2%"}} className="col-md-12">
      <div  className="horizontal-tab product-tab">
        <ul style={{background:'#f8f8f8',border:'1px solid gray',width:100,padding:10,fontWeight:'400'}} className="nav nav-tabs">
          <li className="active">
            <a data-toggle="tab">
              Description
            </a>
          </li>
        </ul>
        <div style={{padding:15,border:'1px solid gray'}} className="tab-content">
          <div>
            <h3 style={{fontWeight:'bold',fontFamily:'Arial, Helvetica, sans-serif'}}>Product Description</h3>
            <p></p>
            <p>Ahkam-ul-Quran</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default BooksDetail
