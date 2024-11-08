import React,{ useState} from 'react'
import { Link } from 'react-router-dom'


export default function Order() {
  const [activeItem, setactiveItem] =useState();
  return (
    <div>

      {/* Heading Order */}

      
      <h1 style={{ textAlign: "center" }}>Order</h1>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-4'>
            <div className="card" style={{ width: "250px" }}>
              <img className="card-img-top" src="book.jpg "
              />
              <div className="card-body">
                <h4 className="card-title">GHOST</h4>
                <p className="card-text">Some example text
                  some example text. John Doe is an architect and
                  engineer</p>
                <a href="#" className="btn btn-primary">Horror Book</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" style={{ width: "250px" }}>
              <img className="card-img-top" src="book1.jpg " />
              <div className="card-body">
                <h4 className="card-title">THE TIME MACHINE</h4>
                <p className="card-text">Some example text
                  some example text. John Doe is an architect and
                  engineer</p>
                <a href="#" className="btn btn-primary">Time Book</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card" style={{ width: "250px" }}>
              <img className="card-img-top" src=" book2.jpg " />
              <div className="card-body">
                <h4 className="card-title">SHERLOCK HOLMS</h4>
                <p className="card-text">Some example text
                  some example text. John Doe is an architect and
                  engineer</p>
                <a href="#" className="btn btn-primary">Best Crime Book</a>
              </div>
            </div>
          </div>
        </div>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4'>
              <div className="card" style={{ width: "250px" }}>
                <img className="card-img-top" src="book4.jpg "
                />
                <div className="card-body">
                  <h4 className="card-title">HIS LOST BOW</h4>
                  <p className="card-text">Some example text
                    some example text. John Doe is an architect and
                    engineer</p>
                  <a href="#" className="btn btn-primary">Holmes Book</a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" style={{ width: "250px" }}>
                <img className="card-img-top" src="book5.jpg " />
                <div className="card-body">
                  <h4 className="card-title">GRUFFALO'S</h4>
                  <p className="card-text">Some example text
                    some example text. John Doe is an architect and
                    engineer</p>
                  <a href="#" className="btn btn-primary">Comick Book</a>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" style={{ width: "250px" }}>
                <img className="card-img-top" src=" book6.jpg " />
                <div className="card-body">
                  <h4 className="card-title">LOST WORLD</h4>
                  <p className="card-text">Some example text
                    some example text. John Doe is an architect and
                    engineer</p>
                  <a href="#" className="btn btn-primary">Lost Book</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <div style={{textAlign:"center"}}> 

      <a href='DataTable' as={Link} to='/DataTable'
                  active={activeItem === 'DataTable'}
                  onClick={() => setactiveItem('DataTable')} class="btn btn-primary mt-5" style={{marginLeft:"70px"}} >Order Now</a>
  
                       
         
      </div>

      {/* Order Footer */}

      {/* <footer className="text-center mt-3 text-lg-start bg-dark text-white pt-4"  >



        <section className=""  >
          <div className="container text-center text-md-start mt-5 ">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  <i ></i>Books
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset" style={{ textDecorationLine: "none" }}>Home</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ textDecorationLine: "none" }}>About</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ textDecorationLine: "none" }}>Order</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ textDecorationLine: "none" }}>Contact Us</a>
                </p>
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset" style={{ textDecorationLine: "none" }}>Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ textDecorationLine: "none" }}>Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ textDecorationLine: "none" }}>Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{ textDecorationLine: "none" }}>Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i className="fa fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fa fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p><i className="fa fa-phone me-3"></i> + 01 234 567 88</p>
                <p><i className="fa fa-print me-3"></i> + 01 234 567 89</p>
              </div>

            </div>

          </div>

        </section>
        <div className="text-center p-4"   >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>




      </footer> */}






    </div>
  )
}
