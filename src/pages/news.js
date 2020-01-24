import React from "react"
import { MDBContainer, MDBRow, MDBCol } from "mdbreact"
import NewsImg from "./../images/news.jpg"
import Navbar from './../components/home/nabvar'
import Footer from './../components/home/footer'

import Lightbox from "react-image-lightbox"
// import "./Lightbox.css";
import "../styles/news.css"
class News extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(1).jpeg",
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(5).jpeg",
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(6).jpeg",
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(9).jpeg",
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(7).jpeg",
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(8).jpeg",
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(10).jpeg",
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(11).jpeg",
      "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(12).jpeg",
      // "https://www.saylaniwelfare.com/public_html/images/Event%2023-02-2019%20(3).jpeg",
    ],
  }

  renderImages = () => {
    let photoIndex = -1
    const { images } = this.state

    return images.map(imageSrc => {
      photoIndex++
      const privateKey = photoIndex
      return (
     
        <MDBCol md="3" key={photoIndex}>
         
          <figure>
            <img
              src={imageSrc}
              alt="Gallery"
              className="img-fluid"
              onClick={() =>
                this.setState({ photoIndex: privateKey, isOpen: true })
              }
            />
          </figure>
        </MDBCol>
      )
    })
  }

  render() {
    const { photoIndex, isOpen, images } = this.state
    return (
      <div className="maindiv">
           <div>
           <Navbar />
        </div>
        <img width="100%" src={NewsImg} />
        <MDBContainer className="mt-5" style={{ backgroundColor: "#F7F8FA" }}>
          <div className="secmaindiv">
            <div className="div1">
              23 <br />
              FEB
            </div>
            <div className="div2">
              PRESIDENT OF PAKISTAN (DR. ARIF ALVI) VISITED SAYLANI WELFARE
            </div>
          </div>
          <br />
          <div className="mdb-lightbox">
            <MDBRow>{this.renderImages()}</MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length,
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length,
                })
              }
            />
          )}

          <p className="p1">SWIT</p>
          <br />
        </MDBContainer>
        <Footer />
      </div>
    )
  }
}

export default News
