<template>

  <div class="">
    <header>
      <NavbarComponent></NavbarComponent>
    </header>
    <TrendingComponent></TrendingComponent>
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import TrendingComponent from '../components/About/TrendingComponent.vue'
export default {
  components:{ NavbarComponent , FooterComponent , TrendingComponent},
  name: 'AboutView'
}
</script>

<style scoped>

</style>



