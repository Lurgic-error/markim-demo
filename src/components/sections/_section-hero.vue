<template>
    <div class="section section-hero">
        <div class="section-content">
            <div class="hero-caption animate__animated animate__fadeInUp">
                <h1 class="caption-title " > 
                    Large Scale Modern Enterprise
                </h1>

                <p class="caption-text">
                    Bringing state of the art advanced technology to your doorstep.
                </p>


                <button class="base_btn caption_btn ">
                    Learn More 
                    <b-icon icon='arrow-right' class="ml-3"></b-icon>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'section-hero',



    }
</script>

<style lang="scss" scoped>

    .section-hero {
        height: 100%;
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../../assets/hero-img-1.jpg');
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;

        @include respond(desktop) {
            padding: 0 4rem;
            justify-content: start;
        }

    }


    .section-content {

        .hero-caption {

            .caption-title {
                margin-bottom: 1.825rem;
                color: $white-text;
                text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
                font-size: 2.375rem;
                line-height: 1.3;
            }

            .caption-text {
                color: $white-text;
                text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
            }
        }
    }
</style>