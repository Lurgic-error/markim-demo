<template>
    <div class="section section-products">

        <h3 class="section-title text-capitalize text-center" v-onscrollanimation>Our Products</h3>

        <div class="section-content">
            <!-- Products Tabs -->
            <b-tabs pills  active-nav-item-class="active-tab" class="product-tabs">
                <b-tab class="product-tab-item" title="All" variant='danger' title-link-class='tab-link'>
                    <div class="product-image-container">
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-1.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-1.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-1.jpg">
                            </b-img>
                        </div>
                    </div>
                </b-tab>

                <b-tab title-link-class='tab-link' class="product-tab-item" title="Constructions">
                    <div class="product-image-container">
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                    </div>
                </b-tab>


                <b-tab title-link-class='tab-link' class="product-tab-item" title="Generators">
                    <div class="product-image-container">
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-1.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-1.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-1.jpg">
                            </b-img>
                        </div>
                    </div>
                </b-tab>


                <b-tab title-link-class='tab-link' class="product-tab-item" title="Mar-Kim Uniplast">
                    <div class="product-image-container">
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                    </div>
                </b-tab>


                <b-tab title-link-class='tab-link' class="product-tab-item" title="Swimming Pools">
                    <div class="product-image-container">
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/imgs/swimming-1.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/imgs/swimming-2.png">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/imgs/swimming-3.jpg">
                            </b-img>
                        </div>
                    </div>
                </b-tab>


                <b-tab title-link-class='tab-link' class="product-tab-item" title="Property Rental">
                    <div class="product-image-container">
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                        <div class="product-image-wrapper" v-onscrollanimation>
                            <b-img fluid alt="product-image" class="product-image" src="../../assets/hero-img-2.jpg">
                            </b-img>
                        </div>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'section-products',

        data() {
            return {
                activeTab: 'active-tab'
            }
        }

    }
</script>

<style lang="scss" scoped>

    .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
    }

    .enter {
        opacity: 1;
        transform: translateY(0px);
    }



    .section-products {

        .section-title {
            margin-bottom: 1.825rem;
        }

        .section-content {

            .nav {
                flex-direction: column;
            }

            .product-tabs {

                .product-tab-item {
                    padding: 2rem 0;


                    .product-image-container {

                        display: flex;
                        justify-content: space-evenly;
                        flex-wrap: wrap;

                        .product-image-wrapper+.product-image-wrapper {
                            margin-top: .825rem;
                        }

                        @include respond(tab-port) {
                            justify-content: start;

                            // gap: .5rem;
                            .product-image-wrapper+.product-image-wrapper {
                                margin-top: 0;
                            }
                        }

                        .product-image-wrapper {
                            padding: 0 .25rem;
                            // flex:  0 0 33.333333%;

                            @include respond(tab-land) {
                                flex: 0 0 33.333333%;
                                margin-top: 0;
                                margin: 0;
                            }

                            @include respond(tab-port) {
                                flex: 0 0 33.333333%;
                                margin-top: 0;
                                margin: 0;
                            }


                            @include respond(desktop) {
                                flex: 0 0 33.333333%;
                                margin-top: 0;
                                margin: 0;
                            }


                            .product-image {
                                max-height: 300px;
                                width: 100%;
                                object-fit: cover;
                                object-position: center;
                            }
                        }
                    }

                }

                a {
                    color: $grey-text !important;
                }
            }
        }
    }

    .nav-pills .active,
    .nav-link.active {
        background-color: $primary-color !important;
    }

    .active-tab {
        background-color: $primary-color;
    }

    a {
        color: $grey-text !important;
    }

    .tab-link {
        background-color: $primary-color !important;
        color: $grey-text !important;
    }


    ul.nav>li.nav-item>a.av-link .active .tab-link .active-tab {
        background-color: red;
    }

    .nav-pills .nav-link.active,
    .nav-pills .show>.nav-link, 
    .active-tab {
        color: #fff;
        background-color: red;
    }

    .nav-pills .nav-link.active {
        background-color: red;
    }
</style>