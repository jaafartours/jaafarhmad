import React from 'react'

function Breadtrip(props) {
    return (
        <div>
          {/* about breadcrumb */}
          <section className="w3l-breadcrumb">
            <div className="breadcrumb-bg breadcrumb-bg-about py-5">
              <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
                <h2 className="title mt-5 pt-lg-5 pt-sm-3">{props.title11}</h2>
                <ul className="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-md-5">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="active"> / {props.page11} </li>
                </ul>
              </div>
            </div>
         
          </section>
          {/* //about breadcrumb */}
        </div>
      );
  
}

export default Breadtrip