import React from "react";
import "./style.css";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImg: false,
      imgUrl: "",
    };
  }

  showImage = (url) => {
    console.log("Called show img")
    this.setState({
      showImg: true,
      imgUrl: url,
    });
  }

  closeModal = () => {
    this.setState({
        showImg: false,
        imgUrl: "",
    });
  }

  render() {
    let { refSection } = this.props;

    return (
      <div id="gallery" ref={refSection}>
        <div className="container">
          <h2 className="mb-5">Gallery</h2>

          <div className="row galleryimages">
            <div className="col-6 col-lg-4 col-md-4 mb-3 img-holder"  onClick={() => this.showImage("/images/Gallery/1.jpg")}>
              <img src="/images/Gallery/1.jpg" className="img-fluid"  />
            </div>
            <div className="col-6 col-md-4 mb-3 img-holder"  onClick={() => this.showImage("/images/Gallery/2.jpg")}>
              <img src="/images/Gallery/2.jpg" className="img-fluid" />
            </div>
            <div className="col-6 col-md-4 mb-3 img-holder"  onClick={() => this.showImage("/images/Gallery/3.jpg")}>
              <img src="/images/Gallery/3.jpg" className="img-fluid" />
            </div>
            <div className="col-6 col-md-4 mb-3 img-holder"  onClick={() => this.showImage("/images/Gallery/4.jpg")}>
              <img src="/images/Gallery/4.jpg" className="img-fluid" />
            </div>
            <div className="col-6 col-md-4 mb-3 img-holder"  onClick={() => this.showImage("/images/Gallery/6_1.jpg")}>
              <img src="/images/Gallery/6_1.jpg" className="img-fluid" />
            </div>
            <div className="col-6 col-md-4 mb-3 img-holder"  onClick={() => this.showImage("/images/Gallery/5_1.jpg")}>
              <img src="/images/Gallery/5_1.jpg" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* <div className={this.state.showImg ? "d-block" : "d-none"}> */}
        <div className={this.state.showImg ? "modal" : "d-none"}>
          <span className="close" onClick={this.closeModal}>&times;</span>
          <img className="modal-content" src={this.state.imgUrl} />
        </div>
      </div>
    );
  }
}

export default Gallery;
