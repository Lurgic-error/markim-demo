<template>
  <div class="base-footer">
    <div class="footer-top">

      <div class="row">
        
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4 p-0">
          <h4 class="footer-title">
            MAR-KIM GROUP
          </h4>
          <p class="section-text">
            Established in 2009, MAR-KIM CO. Ltd, a large – scale modern enterprise, is specialized in manufacturing ,
            designing, sales and servicesof PVC window and door systems. Our headquarters is located in Dar es Salaam
            City, Kinondoni Tunisia road.
          </p>
        </div>


        <!-- <div class="col-sm-12 col-md-6 row">
          
        </div> -->


        <div class="col-lg-2  offset-lg-1 col-md-3 col-sm-12 mb-4 p-0">
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

        <div class="col-lg-2  col-md-3 col-sm-12 mb-4 p-0">
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

        <div class="col-lg-2  col-md-6 col-sm-12 mb-4 p-0 d-none">
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

    background-color: rgba(155, 0, 0, 0.5);

    .footer-top {
      padding: 2rem 1rem;
      background-color: rgb(226, 27, 27);

      @include respond(tab-land) {
        padding: 4rem;
      }

      @include respond(desktop){
        padding: 4rem 6rem;
      }

      // .flex-box {
      //   display: flex;
      //   align-items: flex-start;
      //   justify-self: stretch;
      //   flex-wrap: wrap;

      //   @include respond(tab-land) {
      //     .flex-item+.{
      //       padding-left: 2rem;
      //     }
      //   }

      //   .{
      //     flex: 0 0 33.33333%;
      //   }


        
      // }

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

      @include respond(tab-land){
        padding: 2rem 4rem;
      }

      @include respond(desktop){
        padding: 2rem 6rem;
      }

      background-color: rgba(185, 6, 6, 0.726);

      .footer-text {
        color: white;
      }
    }
  }
</style>