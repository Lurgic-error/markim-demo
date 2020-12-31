<template>
  <div class="section section-cta">
      <div class="section-content">
        <h3 class="section-title text-center" v-onscrollanimation>Choose Us</h3>
        <p class="section-text text-center" v-onscrollanimation>
            Being one of the largest manufacturers in Tanzania, we have an advanced production line which uses state of the art Technology from Turkey helping us make your dreams come true.
        </p>
      </div>
  </div>
</template>

<script>
export default {

    name:'section-cta',
    
}
</script>

<style lang="scss" scoped>

.section-cta{

    background: $cool-white;

    .section-content {

        .section-title {
            margin-bottom: 1.825rem;
        }
    }

}
</style>