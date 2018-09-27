<template>
    <div class="b-page b-page_404">
        <header-component></header-component>
        <div class="wrapper wrapper-content">
            <div class="b-404">
                <div class="b-404__chapter">
                    404
                </div>

                <div class="b-404__text">
                    page not found
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from './layout/Header.vue'
import FooterComponent from './layout/Footer.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style scoped>
    .b-page_404 {
        overflow: hidden;
    }
    .b-404 {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -20rem;
        margin-left: -20rem;
        width: 40rem;
        height: 40rem;
        text-align: center;
        color: #fff;
    }
    .b-404__chapter {
        font-size: 15rem;
    }
</style>
