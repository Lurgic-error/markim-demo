<template>
  <div class="view home">
    <section-hero id='#home'></section-hero>
    <section-about id='#about'></section-about>
    <section-products id='#products'></section-products>
    <section-cta id='#cta'></section-cta>
    <section-contact id='#contact'></section-contact>
    <base-footer id='#footer'></base-footer>
  </div>
</template>

<script>
import _sectionServices from '../components/sections/_section-services.vue'


  export default {
    name: 'Home',
    components: {
        _sectionServices

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
</style>