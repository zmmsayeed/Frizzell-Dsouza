import "./style.css";

function Watch({refSection}) {
  return (
    <div id="watch" ref={refSection}>
        <div className='container'>
            <h2 className="mb-5">Music Videos</h2>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-6">
                    <iframe width="100%" height="340" src="https://www.youtube.com/embed/PsKpTftgbOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>Foolish Once Again</p>
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                            <iframe width="100%" height="150" src="https://www.youtube.com/embed/ew8g3piv5M4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p>Drown Away</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <iframe width="100%" height="150" src="https://www.youtube.com/embed/ew8g3piv5M4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p>Fall</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <iframe width="100%" height="150" src="https://www.youtube.com/embed/i7bWmnJaSE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p>Fall</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <iframe width="100%" height="150" src="https://www.youtube.com/embed/i7bWmnJaSE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p>Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="watch-blue mt-4">
            <div className="container">
                <h2 className="mb-5">Music Videos</h2>
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
        <div class="col-md-4">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/lgfbAIQ7r8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/WM4hGt3bW80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="col-md-4 clearfix d-none d-md-block">
            <iframe width="100%" height="200" src="https://www.youtube.com/embed/Ife54T6oDZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>

    </div>

    <div class="carousel-item mb-5">

        <div class="row">
            <div class="col-md-4">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/lgfbAIQ7r8k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/WM4hGt3bW80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="col-md-4 clearfix d-none d-md-block">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/Ife54T6oDZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>

    </div>

  </div>
  
  <div class="controls-top">
    <a class="btn-floating ml-5" href="#multi-item-example" data-slide="prev">Right</a>
    <a class="btn-floating" href="#multi-item-example" data-slide="next">Left</a>
  </div>

</div>


</div>
        </div>
    </div>
  );
}

export default Watch;
