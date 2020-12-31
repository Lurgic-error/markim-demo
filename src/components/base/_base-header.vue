<template>
    <header class="base-header">
        <nav class="base-nav">
            <!-- <img src="../../assets/Asset27@300x.png" alt="" class="nav-brand"> -->
            <h2 class="nav-brand">MAR-KIM GROUP</h2>

            <span class="nav-collapse icon-menu" @click.prevent='open' v-if="!opened"></span>
            <span class="nav-collapse icon-github" @click.prevent='close' v-if="opened"></span>

            <ul class="navbar" :class="[opened ? 'show' : '']">
                <li class="navbar-item"><a href="#home" class="navbar-link ">Home</a></li>
                <li class="navbar-item"><a href="#about" class="navbar-link ">About</a></li>
                <li class="navbar-item"><a href="#products" class="navbar-link ">Products</a></li>
                <li class="navbar-item"><a href="#contact" class="navbar-link ">Contact</a></li>
            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'base-header',

        data() {
            return {
                opened: false
            }
        },

        mounted() {
            // const header = document.querySelector('.base-header')
            // const scrollToTopBTN = document.querySelector('.scroll-to-top')
            // window.onscroll = () => {

            //     if (window.scrollY >= 10) {
            //         header.classList.add('bg')
            //         scrollToTopBTN.classList.add('show')
            //     } else {
            //         header.classList.remove('bg')
            //         scrollToTopBTN.classList.remove('show')
            //     }
            // }
        },


        methods: {

            open() {
                this.opened = !this.opened
                const navbar = document.getElementsByClassName('navbar')[0]
                navbar.classList.toggle('show')
                console.log('navbar.classList', navbar.classList)

            },

            close() {
                const navbar = document.getElementsByClassName('navbar')[0]
                navbar.style.setProperty('--animate-duration', '2s');
                navbar.classList.add('animate__animated', 'animate__fadeOutTopRight', 'animate__delay-2s')
                this.opened = !this.opened
                console.log('navbar.classList', navbar.classList)
                navbar.classList.add('close')
            }
        }


    }
</script>

<style lang="scss" scoped>
    header {
        position: fixed;
        width: 100%;
        z-index: 120;
        background: transparent;
        transition: all .5s linear;

        nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: .8125rem 1.3125rem;

            @include respond(desktop) {
                padding: .5rem 2.25rem;
            }

            .nav-brand {
                height: 20px;
                width: auto;
                object-fit: cover;
                transition: all .5s linear;
                color: white;

                @include respond(desktop) {
                    height: 50px;
                }
            }

            .nav-collapse {
                outline: none;
                background: none;
                border: none;
                font-size: 1.5rem;

                @include respond(desktop) {
                    display: none;
                }
            }

            .navbar {
                margin: 1.25rem 0;
                display: none;
                width: 100%;
                flex-direction: column;
                align-items: center;
                transition: all 1s ease-out;
                background-color: rgb(25, 165, 165);
                padding: .8125rem;

                .navbar-item {
                    padding: .8125rem 0;

                    .navbar-link  {
                        padding: .8125rem;
                        text-decoration: none;
                        color: white;
                        position: relative;
                    }
                }

                @include respond(desktop) {
                    margin-top: 0;
                    margin-bottom: 0;
                    background: transparent;
                    color: rgb(255, 255, 255) !important;
                    width: auto;
                    margin-left: auto;
                    display: flex;
                    flex-direction: row;
                    padding: .8125rem 1.3125rem;
                    padding: 0;


                    .navbar-item {
                        padding: 0;

                        .navbar-link  {
                            padding: .8125rem;
                            text-decoration: none;
                            color: white;

                            &:hover {
                                background-color: $cool-white;
                                color: $dark-grey-text;
                            }
                        }
                    }
                }
            }
        }
    }


    .show {
        display: flex !important;
        animation: fadeInTopRight .4s ease-out;
    }

    .close {
        animation: fadeOutTopRight 2s ease-in;
        display: none !important;
    }

    .bg {
    background: rgb(173, 12, 12) !important;
    transition: all .2s ease-in;

    nav {

      ul {
        li {
          a {
            color: white;
          }
        }
      }
    }
  }
</style>