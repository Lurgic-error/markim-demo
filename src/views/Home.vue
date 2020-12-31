<template>
  <div class="view home">
    <section-hero></section-hero>
    <section-about></section-about>
    <section-products></section-products>
    <section-cta></section-cta>
    <base-footer></base-footer>
  </div>
</template>

<script>


  export default {
    name: 'Home',
    components: {

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