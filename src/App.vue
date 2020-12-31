<template>
  <div id="app">

    <base-header></base-header>

    <router-view/>

    <base-scroll-to-top></base-scroll-to-top>
  </div>
</template>


<script>
export default {
  
  name:"app",

  mounted() {
    const header = document.querySelector(".base-header");
    const scrollToTopBTN = document.querySelector(".scroll-to-top");
    const navbrand = document.getElementsByClassName("nav-brand")[0];
    window.onscroll = () => {
      if (window.scrollY >= 10) {
        header.classList.add("bg");
        scrollToTopBTN.classList.add("show");
        navbrand.classList.add("scale");
      } else {
        header.classList.remove("bg");
        scrollToTopBTN.classList.remove("show");
        navbrand.classList.remove("scale");
      }
    };
  },
  
}
</script>



<style lang="scss">
</style>
