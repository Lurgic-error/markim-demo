<template>
  <div class="scroll-to-top" @click="scrollToTop">
    <span class="icon-keyboard_arrow_up"></span>
  </div>
</template>

<script>
  export default {

    name: "base-scroll-to-top",

    mounted() {
      const scrollToTopBTN = document.querySelector('.scroll-to-top')
      window.onscroll = () => {
        if (window.scrollY >= 10) {
          scrollToTopBTN.classList.add('show')
        } else {
          scrollToTopBTN.classList.remove('show')
        }
      }
    },

    methods: {

      scrollToTop() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      },
    }

  }
</script>

<style lang="scss" scoped>
  .scroll-to-top {
    background-color: $primary-color;
    border-radius: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    bottom: 20px;
    right: 20px;
    padding: .5rem;
    display: none;
  }

  .icon-keyboard_arrow_up{
    font-size: 1.825rem;
    color: white;
  }

  .show {
    display: flex;
  }
</style>