import React from 'react'

function Trips (props)  {
  return (


  
  
    <div className="col-lg-4 col-md-6 item mt-md-0 mt-5">
  <div className="card">
        <div className="card-header p-0 position-relative">
            <a href="/infotrip" className="zoom d-block">
                <img className="card-img-bottom d-block" src={props.img1} alt="Card cap" />
            </a>
            <div className="course-price-badge"> NEW</div>
            <div className="post-pos">
                <a href="#reciepe" className="receipe blue">TOP RATE</a>
            </div>
        </div>
        <div className="card-body course-details">
            <div className="price-review d-flex justify-content-between mb-1align-items-center">
                <p>{props.prix}</p>
                <ul className="rating-star">
                    <li><span className="fa fa-star"></span></li>
                    <li><span className="fa fa-star"></span></li>
                    <li><span className="fa fa-star"></span></li>
                    <li><span className="fa fa-star"></span></li>
                    <li><span className="fa fa-star-o"></span></li>
                </ul>
            </div>
            <a href="/infotrip" className="course-desc">{props.title}</a>
            <div className="course-meta mt-4">
                <div className="meta-item course-lesson">
                    <span className="fa fa-clock-o"></span>
                    <span className="meta-value"> 10 hrs </span>
                </div>
                <div className="meta-item course-">
                    <span className="fa fa-user-o"></span>
                    <span className="meta-value"> 50 </span>
                </div>
            </div>
        </div>
        <div className="card-footer">
            <div className="author align-items-center">
                <img src={props.img1} alt="" className="img-fluid rounded-circle" />
                <ul className="blog-meta">
                    <li>
                        <span className="meta-value mx-1">by</span> <a href="#author"> Tour And Travel</a>
                    </li>
                    <li>
                        <span className="meta-value mx-1">in</span> <a href="#author"> Marakech</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>

    

        
   </div>

  )
}

export default Trips