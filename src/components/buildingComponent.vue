<template>
  <div class="model">
    <Spline :scene="scene" />
  </div>
  <h1>
    hello world
  </h1>
</template>

<script>
import { defineComponent } from 'vue';
import Spline from "spline-vue/v3";

export default defineComponent({
  name: 'buildingComponent',
  components: {
    Spline
  },
  data: () => ({
    scene: "https://prod.spline.design/2XVCWOkcGNZH0hue/scene.splinecode",
  })
});
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.model{
  width : 100%;
  height: 600px;
  margin: 0 auto;
}
</style>
