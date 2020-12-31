<template>
    <div class="section section-about">
        
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <h3 class="section-title" v-onscrollanimation>About Us</h3>
                <p class="section-text" v-onscrollanimation>
                    Established in 2009, MAR-KIM GROUP is a large scale modern enterprise, is specialized in
                    manufacturing, designing, sales, and services of PVC windows and door systems, swimming pool
                    construction, chemicals, equipments and Generator.
                </p>

                <button class="base_btn" v-onscrollanimation>Learn More <b-icon icon='arrow-right' class="ml-3"></b-icon> </button>
            </div>
            <div class="col-md-6 col-sm-12 about-img-wrapper">
                <b-img src="../../assets/hero-img-2.jpg" class="about-img" fluid alt="Responsive image"></b-img>
            </div>
        </div>
    </div>
</template>

<script>
    export default {


        name: 'section-about'

    }
</script>

<style lang="scss" scoped>
    .section-about {

        .section-title {
            margin-bottom: 1.825rem;
        }
    }

        .before-enter {
        opacity: 0;
        // transform: scale(.5) rotateZ(-25deg);
        transition:all 2s ease-out;
    }

    .enter {
        opacity: 1;
        //  transform: scale(1) rotateZ(0deg);
        animation: fadeInLeft;
        animation-duration: 2s;
    }
</style>