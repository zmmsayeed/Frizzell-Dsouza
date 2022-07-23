import "./style.css";

function Watch({refSection}) {
  return (
    <div id="watch" ref={refSection}>
        <div className='container'>
            <h2 className="mb-5">Music Videos</h2>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <iframe width="100%" height="340" src="https://www.youtube.com/embed/PsKpTftgbOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p>Foolish Once Again</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <iframe width="100%" height="150" src="https://www.youtube.com/embed/ew8g3piv5M4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>Drown Away</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <img src="/images/music/fall.jpg" alt="Fall" width="100%" height="150" />
                            <p>Fall</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <iframe width="100%" height="150" src="https://www.youtube.com/embed/i7bWmnJaSE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p>New</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 d-lg-block d-md-block d-none">
                            <img src="/images/music/comingsoon.jpg" alt="Fall" width="100%" height="150" />
                            <p>Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="watch-blue mt-4">
            <div className="container">
                <h2 className="mb-5">Frizzell<span className="montserrat">'</span>s covers</h2>
            </div>

            <div class="container my-4">


<div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

  

  <ol class="carousel-indicators mt-5">
    <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    {/* <li data-target="#multi-item-example" data-slide-to="2"></li> */}
  </ol>

  <div class="carousel-inner" role="listbox">

    <div class="carousel-item active mb-5">

      <div class="row">
        <div class="col-md-3 offset-md-1 mt-4">
            <iframe width="100%" height="150" src="https://www.youtube.com/embed/lgfbAIQ7r8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/WM4hGt3bW80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div class="col-md-3 clearfix d-none d-md-block mt-4">
            <iframe width="100%" height="150" src="https://www.youtube.com/embed/Ife54T6oDZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

    </div>

    <div class="carousel-item mb-5">

        <div class="row">
            <div class="col-md-3 offset-md-1 mt-4">
              <iframe width="100%" height="150" src="https://www.youtube.com/embed/j6t9EQ6YBJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
              <iframe width="100%" height="200" src="https://www.youtube.com/embed/dUt09Vg9sNc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            <div class="col-md-3 clearfix d-none d-md-block mt-4">
              <iframe width="100%" height="150" src="https://www.youtube.com/embed/xyAZJw1-pHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>

    </div>

  </div>
  
  {/* <div class="controls-top">
    <a class="btn-floating" href="#multi-item-example" data-slide="prev">Previous</a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next">Next</a>
  </div> */}

  <a class="carousel-control-prev" href="#multi-item-example" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#multi-item-example" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>


</div>
        </div>
    </div>
  );
}

export default Watch;
