<template>
    <div class="section">
        <div class="section-content animate__animated animate__fadeInUp">
            <h1 class="section-title"> {{ title }} </h1>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'base-section-hero',

        props: {
            height: null,
            position: null,
            title: null

        }

    }
</script>

<style lang="scss" scoped>
    .section {
        height: 60vh;
        background-color: $secondary-color;
        display: flex;
        justify-content: center;
        align-items: center;

        .section-content {
            animation-duration: 2s;
            .section-title {
                color: $white;
                text-transform: capitalize;
            }
        }
    }
</style>