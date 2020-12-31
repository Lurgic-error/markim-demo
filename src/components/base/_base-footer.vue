<template>
  <div class="base-footer">
    <div class="footer-top">

      <div class="row">

        <div class="col-lg-4 col-md-6 col-sm-12 mb-4 ">
          <h4 class="footer-title">
            MAR-KIM GROUP
          </h4>
          <p class="section-text mb-3">
            Established in 2009, MAR-KIM CO. Ltd, a large – scale modern enterprise, is specialized in manufacturing ,
            designing, sales and servicesof PVC window and door systems.           </p>

          <div class="address-info">
            <p class="mb-3 text-light address"> <span class="mr-2 icon icon-location_on" ></span> Kinondoni, Tunisia Road</p>
            <p class="mb-3 text-light number"> <span class="mr-2 icon icon-phone4" ></span> (+255) 786-785-543</p>
            <p class="mb-3 text-light email"> <span class="mr-2 icon icon-email" ></span> info@markimgroup.co.tz</p>
          </div>

          <div class="socials">
            <span class="socials-icon icon-social-facebook"></span>
            <span class="socials-icon icon-social-twitter"></span>
            <span class="socials-icon icon-instagram1"></span>
            <span class="socials-icon icon-social-pinterest"></span>
          </div>
        </div>


        <!-- <div class="col-sm-12 col-md-6 row">
          
        </div> -->


        <div class="col-lg-2  offset-lg-1 col-md-3 col-sm-12 mb-4 ">
          <h5 class="footer-title">
            Quick Links
          </h5>

          <ul class="footer_nav">
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">About Us</a>
            </li>
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">Our Services</a>
            </li>
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">Our Products</a>
            </li>
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-2  col-md-6 col-sm-12 mb-4  ">
          <h5 class="footer-title">
            Products
          </h5>

          <ul class="footer_nav">
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">Construction</a>
            </li>
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">Generators</a>
            </li>
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">Mar-Kim Uniplast</a>
            </li>
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">Property Rental</a>
            </li>
            <li class="footer_nav-item">
              <a href="#" class="footer_nav-link">Swimming Pool</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-2  col-md-6 col-sm-12 mb-4  pr-0 d-none">
          <h5 class="footer-title">
           Get in touch
          </h5>

          <div class="address-info">
            <p class="address"> <span class="icon icon-" ></span> Kinondoni, Tunisia Road</p>
            <p class="number"> <span class="icon icon-" ></span> (+255) 786-785-543</p>
            <p class="email"> <span class="icon icon-" ></span> info@markimgroup.co.tz</p>
          </div>
        </div>

      </div>

    </div>

    <div class="footer-bottom">

      <p class="footer-text">
        Copyright © 2020 All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'base-footer'

  }
</script>

<style lang="scss" scoped>
  .base-footer {

    // background-color: rgba(155, 0, 0, 0.5);
    background-image: url('https://preview.colorlib.com/theme/staging/img/footer-bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;

    .footer-top {
      padding: 2rem 1rem;
      // background-color: rgb(226, 27, 27);

      @include respond(tab-land) {
        padding: 4rem;
      }

      @include respond(desktop) {
        padding: 4rem 6rem;
      }

      .socials {
        margin-top: 1.5rem;
        display: flex;

        .socials-icon+.socials-icon {
          margin-left: 1.825rem;
        }

        &-icon {
          color: white;
          font-size: 2rem;
          font-weight: light;
        }
      }

      .footer_nav {

        &-item {
          list-style: none;
          margin-bottom: .825rem;
        }

        &-link {
          color: white;

          &::before {
            content: '';

          }
        }
      }


      .footer-title {
        margin-bottom: 1.825rem;
        color: white;
      }

      .section-text {
        color: white;
      }
    }

    .footer-bottom {
      padding: 2rem 1rem;
      border-top: 1px solid white;

      @include respond(tab-land) {
        padding: 2rem 4rem;
      }

      @include respond(desktop) {
        padding: 2rem 6rem;
      }

      // background-color: rgba(185, 6, 6, 0.726);

      .footer-text {
        color: white;
      }
    }
  }
</style>