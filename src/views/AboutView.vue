<template>
  <div class="">
    <header>
      <NavbarComponent></NavbarComponent>
    </header>
    
    <footer>
      <FooterComponent></FooterComponent>
    </footer>
  </div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components:{ NavbarComponent , FooterComponent},
  name: 'AboutView'
}
</script>

<style scoped>

</style>

