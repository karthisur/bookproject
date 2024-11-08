import React from 'react'
import './Contact.css';

export default function () {
  return (
    <div>
      {/* Heading Contact */}

<section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>
        </div>
        <div className="contain">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"></div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  4761 Camp Road,<br /> Owatonna, Minnesota,<br />55060
                </p>
                </div>
            </div>
            <div className="box">
              <div className="icon"></div>
              <div className="text">
                <h3>Phone</h3>
                <p>
                  0987-435-133
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon"></div>
              <div className="text">
                <h3>E-Mail</h3>
                <p>
                  www.Book@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="contactform">
          <form>
                <h2>Send Message</h2>
                <div className="inputbox">
                <input type="text" name='' required/>
                <span>Full Name</span>
                </div>
                <div className="inputbox">
                <input type="text" name='' required/>
                <span>Email</span>
                </div>
                <div className="inputbox">
                <textarea required/>
                <span>Type Youe Message...</span>
                <div className="inputbox">
                <input type="submit" name='' value="Send"/>
                </div>
                </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer class="text-center mt-3 text-lg-start bg-dark text-white pt-4" >

        

<section className=""  >
  <div className="container text-center text-md-start mt-5">

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
          <a href="#!" className="text-reset" style={{textDecorationLine:"none"}}>Home</a>
        </p>
        <p>
          <a href="#!" className="text-reset"style={{textDecorationLine:"none"}}>About</a>
        </p>
        <p>
          <a href="#!" className="text-reset"style={{textDecorationLine:"none"}}>Order</a>
        </p>
        <p>
          <a href="#!" className="text-reset"style={{textDecorationLine:"none"}}>Contact Us</a>
        </p>
      </div>



      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <h6 className="text-uppercase fw-bold mb-4">
          Useful links
        </h6>
        <p>
          <a href="#!" className="text-reset" style={{textDecorationLine:"none"}}>Pricing</a>
        </p>
        <p>
          <a href="#!" className="text-reset"style={{textDecorationLine:"none"}}>Settings</a>
        </p>
        <p>
          <a href="#!" className="text-reset"style={{textDecorationLine:"none"}}>Orders</a>
        </p>
        <p>
          <a href="#!" className="text-reset"style={{textDecorationLine:"none"}}>Help</a>
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
  <div className="text-center p-4"   >
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</section>




</footer>
    </div>
  )
}
