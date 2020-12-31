<template>
  <div class="scroll-to-top" @click="scrollToTop">
    <span class="icon-arrow-up2"></span>
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
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100;
    bottom: 20px;
    right: 20px;
    padding: .3125rem;
    display: none;
  }

  .icon-arrow-up2 {
    font-size: 1.5rem;
    color: white;
  }

  .show {
    display: flex;
  }
</style>