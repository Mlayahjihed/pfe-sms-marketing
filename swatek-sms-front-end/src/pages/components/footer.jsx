import React from 'react';

const Footer = () => {
    return (
        <footer class="bg-dark text-center text-dark">
  <div class="container p-4 pb-0">
    <section class="mb-4">
      <a
        class="btn btn-light btn-floating m-1"
        href="#!"
        role="button"
        ><i class="fa fa-facebook-f"></i
      ></a>
      <a
        class="btn btn-light btn-floating m-1"
        href="#!"
        role="button"
        ><i class="fa fa-twitter"></i
      ></a>
      <a
        class="btn btn-light btn-floating m-1"
        href="#!"
        role="button"
        ><i class="fa fa-instagram"></i
      ></a> 
    </section>
  </div>
  <div class="col-md-4 col-lg-3 text-white col-xl-3 mx-auto mb-md-0 mb-4">
         

          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fa fa-home me-3"></i> Sousse, khzema, TN</p>
          <p>
            <i class="fa fa-envelope me-3"></i>
            swatek.sms@gmail.com
          </p>
          <p><i class="fa fa-phone me-3"></i> + 216 73 737 373</p>
          
        </div>
  <div class="text-center p-3" >
    <a class="text-white" >Swatek SMS</a>
  </div>
</footer>
    );
}

export default Footer;
