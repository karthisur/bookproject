import React from 'react'
import { Segment, Image } from 'semantic-ui-react'

export default function About() {
  return (
    <div>
       <h1 style={{ textAlign: "center" }}>About</h1>
      {/* About Heading */}
       


     
     <div className='container mt-4' >
       <Image src="book.jpg" size='small' floated='left' />
       <h3 >Auther Name</h3>
       <p>
         Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia<br />
         facete scriptorem, est autem aliquip detraxit at. Usu ocurreret<br />
         referrentur at, cu epicurei appellantur vix.
       </p>


       <div className='mt-5'>
         <Image src="book1.jpg" size='small' floated='left' className='mt-5' />
         <h3 >Auther Name</h3>
         <p >
           Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia<br />
           facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
           referrentur at, cu epicurei appellantur vix.
         </p>
       </div>

       <div className='mt-5'>
         <Image src="book2.jpg" size='small' floated='left' className='mt-5' />
         <h3 >Auther Name</h3>
         <p >
           Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia<br />
           facete scriptorem, est autem aliquip detraxit at. Usu ocurreret<br />
           referrentur at, cu epicurei appellantur vix.
         </p>
        
       
       <div className='mt-5'>
         <Image src="book3.png" size='small' floated='left' className='mt-5' />
         <h3 >Auther Name</h3>
         <p >
           Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia<br />
           facete scriptorem, est autem aliquip detraxit at. Usu ocurreret<br />
           referrentur at, cu epicurei appellantur vix.
         </p>
       </div>
       
       <div className='mt-5'>
         <Image src="book4.jpg" size='small' floated='left' className='mt-5' />
         <h3 >Auther Name</h3>
         <p >
           Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia<br />
           facete scriptorem, est autem aliquip detraxit at. Usu ocurreret<br />
           referrentur at, cu epicurei appellantur vix.
         </p>
       </div>
       <div className='mt-5'>
         <Image src="book5.jpg" size='small' floated='left' className='mt-5' />
         <h3 >Auther Name</h3>
         <p >
           Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia<br />
           facete scriptorem, est autem aliquip detraxit at. Usu ocurreret<br />
           referrentur at, cu epicurei appellantur vix.
         </p>
       </div>
       </div>


     </div>


      {/* Footer About */}

      <footer class="text-center mt-3 text-lg-start bg-dark text-white pt-4" >



        <section className="" >
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
                  <a href="#!" className="text-reset"style={{textDecorationLine:"none"}}>Home</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{textDecorationLine:"none"}}>About</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{textDecorationLine:"none"}}>Order</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{textDecorationLine:"none"}}>Contact Us</a>
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
                  <a href="#!" className="text-reset" style={{textDecorationLine:"none"}}>Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{textDecorationLine:"none"}}>Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset" style={{textDecorationLine:"none"}}>Help</a>
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
