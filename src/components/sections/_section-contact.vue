<template>
    <div class="section section-contact">
        <div class="flexbox">
            <div class="company-map">
                <iframe class="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63389.283470676106!2d39.273794!3d-6.790504!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcb484d4cdf1718f0!2sMarkim%20Group!5e0!3m2!1sen!2stz!4v1609406594853!5m2!1sen!2stz"
                    width="600" height="568" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
            </div>
            <div class="contact-us" v-onscrollanimation>
                <h3 class="section-title mb-4">Reach Us</h3>
                <form class="contact-form">
                    <b-form-input class="mb-4 rounded-0" id="input-name" v-model="form.name"
                        placeholder="Enter your full name" required>
                    </b-form-input>
                    <b-form-input class="mb-4 rounded-0" id="input-email" v-model="form.email" type="email"
                        placeholder="Enter your email" required>
                    </b-form-input>
                    <b-form-input class="mb-4 rounded-0" id="input-number" v-model="form.number" type="number"
                        placeholder="Enter your phone number" required>
                    </b-form-input>
                    <b-form-textarea class="mb-3 rounded-0" id="textarea" v-model="form.message"
                        placeholder="Enter your message..." rows="6" max-rows="6"></b-form-textarea>

                    <button class="base_btn">Send</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'section-contact',

        data() {
            return {
                form: {
                    email: null,
                    name: null,
                    message: null
                }
            }
        }

    }
</script>

<style lang="scss" scoped>
    .section-contact {
        padding: 0;
        // padding: 2rem 1rem;

        .flexbox {
            display: flex;
            // align-items: baseline;
            flex-wrap: wrap;

            // * {
            //     flex: 0 0 50%;
            // }
        }

        .company-map {
            background-color: red;
            flex: 0 0 100%;
            height: 500px;
            // width: 500px;
            @include respond(tab-land) {
                flex: 0 0 100%;
            }

            @include respond(desktop) {
                flex: 0 0 50%;
            }

            .map {
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        .contact-us {
            padding: 2rem 1rem;
            flex: 0 0 100%;
            @include respond(tab-land) {
                padding:2rem 4rem;
                flex: 0 0 100%;
            }

            @include respond(desktop) {
                flex: 0 0 50%;
            }


            // @include respond(desktop) {
            //     padding-right:4rem;
            // }
        }



    }
</style>